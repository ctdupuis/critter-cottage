class RequestsController < ApplicationController

    def create
        # binding.pry
        if @current_user
            # animal = Animal.find(params[:animal_id])
            request = Request.create(
                admin_id: 1,
                user_id: @current_user.id,
                animal_id: params[:animal_id]
            )
            render json: request
        else
            render json: { error: 'Must be logged in to submit an adoption request'}
        end
    end

    def update

    end
end