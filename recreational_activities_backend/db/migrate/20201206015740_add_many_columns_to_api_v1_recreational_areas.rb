class AddManyColumnsToApiV1RecreationalAreas < ActiveRecord::Migration[6.0]
  def change
    add_column :api_v1_recreational_areas, :facility_directions, :string
    add_column :api_v1_recreational_areas, :facility_email, :string
    add_column :api_v1_recreational_areas, :facility_phone, :string
  end
end
