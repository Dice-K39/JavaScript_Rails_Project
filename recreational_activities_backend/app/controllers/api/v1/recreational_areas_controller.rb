class Api::V1::RecreationalAreasController < ApplicationController
    def index
        user = Api::V1::User.find_by_username(params[:username])

        rec_areas = user.recreational_areas

        render json: rec_areas, except: [:created_at, :updated_at]
    end

    def create
        user = Api::V1::User.find_by_username(params[:username])
        
        rec_area = user.recreational_areas.create(rec_area_params)

        render json: rec_area, except: [:created_at, :updated_at]
    end

    private

    def rec_area_params
        params.require(:recreational_area).permit(:facility_name, :facility_description, :facility_id, :facility_directions, :facility_email, :facility_phone, :user_id)
    end
end
