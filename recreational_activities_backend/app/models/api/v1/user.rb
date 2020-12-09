class Api::V1::User < ApplicationRecord
    has_many :recreational_areas

    validates :username, presence: true, uniqueness: true
end
