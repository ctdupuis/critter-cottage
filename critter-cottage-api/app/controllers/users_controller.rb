class UsersController < ApplicationController 
    include CurrentUserConcern

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
            render json: { status: "created", user: user }
        else
            render json: { status: 422 }
        end
        # binding.pry
        # if user.errors.any?
        #     render json: { error: user.errors.full_messages }
        # elsif user.save
        #     # render json: user, except: [:id, :password_digest, :created_at, :updated_at]
        #     render json: { status: 200, user: user }
        # else
        #     render json: { error: 'Something went wrong' }
        # end
    end

    def login
        user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
        # binding.pry
        if user  
            session[:user_id] = user.id
            render json: { status: 200, logged_in: true, user: user }
        else
            render json: { status: 401 }
        end
        # if !user 
        #     render json: { error: 'Email is invalid or could not be found' }

        # elsif !user.authenticate(params[:password])
        #     render json: { error: 'Invalid password' }

        # elsif user && user.authenticate(params[:password])
        #     render json: user, except: [:id, :password_digest, :created_at, :updated_at]

        # else
        #     render json: { error: 'Something went wrong' }
        # end
    end

    def logged_in
        if @current_user
            render json: { logged_in: true, user: @current_user }
        else
            render json: { logged_in: false }
        end
    end

    def logout
        reset_session
        render json: { status: 200 }
    end

end