class Api::V1::RecreationalAreasController < ApplicationController
    def index
        user = User.find_by_username(params[:username])
        rec_areas = version_number.all

        render json: rec_areas
    end

    def create
        rec_area = version_number.create(rec_area_params)

        render json: rec_area
    end

    private

    def rec_area_params
        params.require(:recreational_area).permit(:area_name, :description)
    end

    def version_number
        Api::V1::RecreationalArea
    end
end
