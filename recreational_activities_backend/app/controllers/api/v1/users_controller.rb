class Api::V1::UsersController < ApplicationController
    def index
        if params[:username]
            user = Api::V1::User.find_by_username(params[:username])
        end

            
        if user.nil?
            render json: user, status: :bad_request
        else
            render json: user, except: [:created_at, :updated_at]
        end
    end
    
    def create
        user = Api::V1::User.new(user_params)

        if (user.save)
            render json: user, except: [:created_at, :updated_at]
        else
            render json: user.errors, status: :bad_request
        end
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end
