class Api::V1::SearchController < ApplicationController
    def search
        url = "https://ridb.recreation.gov/api/v1/facilities?query=#{params[:keyword_query]}&limit=50&offset=0&state=#{params[:state]}&activity=#{params[:activity_query]}"
        response = RestClient.get(url, headers = {"apikey" => ENV["API_KEY"]})
        data = JSON.parse(response.body)
        
        render json: data
    end
end
