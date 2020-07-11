class RequestsController < ApplicationController

    def create
        if @current_user
            request = Request.create(
                admin_id: 1,
                user_id: @current_user.id,
                animal_id: params[:animal_id],
                experience: params[:experience], 
                comments: params[:comments]
            )
            render json: request, include: [:animal]
        else
            render json: { error: 'Must be logged in to submit an adoption request'}
        end
    end

    def update
        request = Request.find(params[:id])
        if params[:status] == 'approved'
            animal = Animal.find(request.animal_id)
            user = User.find(request.user_id)
            user.animals << animal
            animal.adopted = true
            user.save
            animal.save
        end
        request.update(status: params[:status])
        render json: { request: request, animal: animal}
    end
end