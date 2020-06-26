class UsersController < ApplicationController 
    skip_before_action :verify_authenticity_token

    def signup
        binding.pry
        # user = User.create(email: params[:email], password: params[:password])
        # render json: user
    end

    def login
        binding.pry
        # user = User.find(params[:email])
        # if user && user.authenticate(params[:password])
        #     render json: user
        # else
        #     render json: { error: 'Something went wrong' }
        # end
    end

end