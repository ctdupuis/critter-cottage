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
        binding.pry
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            user_reqs = Request.filter(user)
            session[:user_id] = user.id
            render json: { 
                logged_in: true,
                requests: user_reqs.as_json(include: [:animal, :user, except: [:password_digest]]),
                user: user.as_json(only: [:id, :email, :f_name, :l_name, :admin]) }
        else user
            render json: { logged_in: false, error: "Invalid email/password combination"}
        end
    end

    def logged_in
        if @current_user
            user_reqs = Request.filter(@current_user)
            render json: { 
                logged_in: true,
                user: @current_user,
                requests: user_reqs.as_json(include: [:animal, :user])
            }
        else
            render json: { logged_in: false }
        end
    end

    def logout
        session.clear
        render json: { logged_in: false }
    end

end