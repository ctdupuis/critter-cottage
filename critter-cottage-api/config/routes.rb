Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/', to: 'users#test'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  get '/logout', to: 'users#logout'
  get '/logged_in', to: 'users#logged_in'
  resources :animals
  post 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'
end
