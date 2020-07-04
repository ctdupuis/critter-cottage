class AnimalsController < ApplicationController
    
    def index
        animals = Animal.all
        render json: animals, methods: :image_url, except: [:created_at, :updated_at]
    end

    def create 
        animal = Animal.create(
            name: params[:name],
            gender: params[:gender],
            species: params[:species],
            breed: params[:breed],
            bio: params[:bio]
        )
        animal.image.attach(params[:image])
        if animal.save
            render json: animal, methods: :image_url
        else
            render json: { error: animal.errors.full_messages }
        end
    end

    def update
        animal = Animal.find(params[:id])
        animal.update(
            name: params[:name],
            gender: params[:gender],
            species: params[:species],
            breed: params[:breed],
            bio: params[:bio]
        )
        render json: animal, methods: :image_url, except: [:created_at, :updated_at]
    end

    def destroy
        animal_id = params[:id].to_i
        Animal.find(animal_id).destroy
        render json: { id: animal_id }
    end
    
end