class UsersController < ApplicationController 
    skip_before_action :verify_authenticity_token

    def create
        user = User.create(
            email: params[:email],
            password: params[:password],
            f_name: params[:f_name],
            l_name: params[:l_name])
        # binding.pry
        if user.errors.any?
            render json: { error: user.errors.full_messages }
        elsif user.save
            render json: user, except: [:id, :password_digest, :created_at, :updated_at]
        else
            render json: { error: 'Something went wrong' }
        end
    end

    def login
        # binding.pry
        user = User.find_by(email: params[:email])
        if !user 
            render json: { error: 'Email is invalid or could not be found' }

        elsif !user.authenticate(params[:password])
            render json: { error: 'Invalid password' }

        elsif user && user.authenticate(params[:password])
            render json: user, except: [:id, :password_digest, :created_at, :updated_at]

        else
            render json: { error: 'Something went wrong' }
        end
    end



end