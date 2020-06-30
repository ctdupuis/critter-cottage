Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/', to: 'users#test'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  resources :animals
end
