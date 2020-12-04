Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :recreational_areas
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
