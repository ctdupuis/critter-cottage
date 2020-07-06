class RequestsController < ApplicationController

    def create
        if @current_user
            request = Request.create(
                admin_id: 1,
                user_id: @current_user.id,
                animal_id: params[:animal_id],
                experience: params[:experience]
            )
            binding.pry
            render json: request, include: [:animal]
        else
            render json: { error: 'Must be logged in to submit an adoption request'}
        end
    end

    def update

    end
end