class Api::V1::RecreationalAreasController < ApplicationController
    def index
        rec_areas = Api::V1::RecreationalArea.all

        render json: rec_areas
    end

    def create
        rec_area = Api::V1::RecreationalArea.create(rec_area_params)

        render json: rec_area
    end

    private

    def rec_area_params
        params.require(:recreational_area).permit(:area_name, :description)
    end
end
