class AnimalsController < ApplicationController
    
    def index
        animals = Animal.all
        # render json: AnimalSerializer.new(animals).to_serialized_json
        render json: animals, methods: :image_url, except: [:created_at, :updated_at]
    end
    
end