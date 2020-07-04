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
        # binding.pry
        animal.update(
            name: params[:name],
            gender: params[:gender],
            species: params[:species],
            breed: params[:breed],
            bio: params[:bio]
        )
        render json: animal, methods: :image_url, except: [:created_at, :updated_at]
    end
    
end