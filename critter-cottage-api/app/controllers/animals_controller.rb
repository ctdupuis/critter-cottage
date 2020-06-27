class AnimalsController < ApplicationController
    
    def index
        animals = Animal.all
        render json: animals, except: [:created_at, :updated_at]
    end
    
end