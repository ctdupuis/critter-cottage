class AnimalsController < ApplicationController
    
    def index
        animals = Animal.all
        render json: animals, methods: :image_url, except: [:created_at, :updated_at]
    end

    # def create 
    #     binding.pry
    #     render json { status: 'hit the route' }
    # end
    
end