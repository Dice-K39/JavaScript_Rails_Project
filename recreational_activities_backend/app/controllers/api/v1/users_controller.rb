class Api::V1::UsersController < ApplicationController
    def index
        if params[:username]
            user = version_number.find_by_username(params[:username])
        else
            user = version_number.all
        end
        render json: user, except: [:created_at, :updated_at]
    end
    
    def create
        user = version_number.create(user_params)

        render json: user, except: [:created_at, :updated_at]
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end

    def version_number
        Api::V1::User
    end
end
