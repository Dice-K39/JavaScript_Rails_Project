Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create] do
        resources :recreational_areas, only: [:index, :create, :destroy]
      end
    end
  end
  
  namespace :api do
    namespace :v1 do
      get '/search' => 'search#search'
    end
  end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
