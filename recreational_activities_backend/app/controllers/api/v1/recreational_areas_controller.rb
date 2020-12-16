class Api::V1::RecreationalAreasController < ApplicationController
    before_action :find_user, only: [:index, :create, :delete]
    
    def index
        rec_areas = @user.recreational_areas

        render json: rec_areas, except: [:created_at, :updated_at]
    end

    def create
        rec_area = @user.recreational_areas.new(rec_area_params)

        if (Api::V1::RecreationalArea.where(facility_name: rec_area.facility_name).exists?)
            render json: rec_area.errors, status: :conflict
        else
            if (rec_area.save)
                render json: rec_area, except: [:created_at, :updated_at]
            else
                render json: rec_area.errors, status: :conflict
            end
        end
    end

    # def destroy
    #     byebug
    # end

    private

    def rec_area_params
        params.require(:recreational_area).permit(:facility_name, :facility_description, :facility_id, :facility_directions, :facility_email, :facility_phone, :user_id)
    end

    def find_user
        @user = Api::V1::User.find_by_id(params[:user_id])
    end
end
