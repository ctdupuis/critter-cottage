class RequestsController < ApplicationController

    def create
        if @current_user
            request = Request.create(
                admin_id: 1,
                user_id: @current_user.id,
                animal_id: params[:animal_id],
                experience: params[:experience]
            )
            render json: request, include: [:animal]
        else
            render json: { error: 'Must be logged in to submit an adoption request'}
        end
    end

    def update
        request = Request.find(params[:id])
        request.update(status: params[:status])
        render json: request
    end
end