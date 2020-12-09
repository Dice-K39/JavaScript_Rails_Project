class Api::V1::UsersController < ApplicationController
    def index
        if params[:username]
            user = Api::V1::User.find_by_username(params[:username])
        else
            user = Api::V1::User.all
        end

        render json: user, except: [:created_at, :updated_at]
    end
    
    def create
        user = Api::V1::User.new(user_params)

        if (user.save)
            render json: user, except: [:created_at, :updated_at]
        end
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end
