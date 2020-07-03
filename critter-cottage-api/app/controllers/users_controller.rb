class UsersController < ApplicationController 

    def test
        render text: 'Curl Test'
    end

    def create
        user = User.create(
            email: params[:email],
            password: params[:password],
            password: params[:password],
            f_name: params[:f_name],
            l_name: params[:l_name]
        )
        if user.errors.any?
            err = user.errors.full_messages.map{ |e| e }
            render json: { status: "failed", errors: err }
        elsif user 
            session[:user_id] = user.id 
            render json: { status: "created", user: user.as_json(only: [:id, :email, :f_name, :l_name, :admin]) }
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { logged_in: true, user: user.as_json(only: [:id, :email, :f_name, :l_name, :admin]) }
        elsif !user
            render json: { logged_in: false, error: "That email could not be found"}
        elsif !user.authenticate(params[:password])
            render json: { logged_in: false, error: "Invalid password"}
        end
    end

    def logged_in
        # binding.pry
        if @current_user
            # binding.pry
            render json: { logged_in: true, user: @current_user }
        else
            render json: { logged_in: false }
        end
    end

    def logout
        session.clear
        render json: { logged_in: false }
    end

end