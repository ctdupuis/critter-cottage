class UsersController < ApplicationController 

    def test
        # render json: { status: 'success!' }
        render text: 'Curl Test'
    end

    def create
        user = User.create!(
            email: params[:email],
            password: params[:password],
            password: params[:password],
            f_name: params[:f_name],
            l_name: params[:l_name]
        )
        if user 
            session[:user_id] = user.id 

            render json: { status: "created", user: user.as_json(only: [:id, :email, :f_name, :l_name, :admin]) }
        elsif user.errors.any?
            render json: { status: "failed", err: user.errors.full_messages }
        end
    end

    def login
        session.clear
        user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
        # binding.pry
        if user  
            session[:user_id] = user.id
            render json: { logged_in: true, user: user.as_json(only: [:id, :email, :f_name, :l_name, :admin]) }
            # binding.pry
        else
            render json: { logged_in: false }
        end
    end

    def logged_in
        # binding.pry
        if @current_user
            render json: { logged_in: true, user: @current_user, session: session }
        else
            render json: { logged_in: false }
        end
    end

    def logout
        session.clear
        # binding.pry
        render json: { status: "loggedout", session: session }
    end

end