class Api::V1::UsersController < ApplicationController
    def create
        user = Api::V1::User.create(user_params)

        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end
