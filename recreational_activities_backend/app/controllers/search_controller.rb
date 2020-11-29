class SearchController < ApplicationController
    def search
        url = "https://ridb.recreation.gov/api/v1/facilities?query=#{params[:query]}&limit=#{params[:num_records]}&offset=0&state=#{params[:states]}"
        response = RestClient.get(url, headers = {"apikey" => ENV["API_KEY"]})
        data = JSON.parse(response.body)
        
        render json: data
    end

    private

    def search_params
        params.require(:search).permit(:query, :state, :num_records)
    end
end
