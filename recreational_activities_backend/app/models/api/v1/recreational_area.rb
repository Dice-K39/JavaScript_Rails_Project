class Api::V1::RecreationalArea < ApplicationRecord
    belongs_to :user

    validates :facility_name, uniqueness: true
end
