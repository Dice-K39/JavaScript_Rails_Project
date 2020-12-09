class Api::V1::RecreationalAreasController < ApplicationController
    before_action :find_user
    
    def index
        rec_areas = @user.recreational_areas

        render json: rec_areas, except: [:created_at, :updated_at]
    end

    def create
        rec_area = @user.recreational_areas.new(rec_area_params)

        if(rec_area.save)
            render json: rec_area, except: [:created_at, :updated_at]
        end
    end

    private

    def rec_area_params
        params.require(:recreational_area).permit(:facility_name, :facility_description, :facility_id, :facility_directions, :facility_email, :facility_phone, :user_id)
    end

    def find_user
        @user = Api::V1::User.find_by_username(params[:username])
    end
end
