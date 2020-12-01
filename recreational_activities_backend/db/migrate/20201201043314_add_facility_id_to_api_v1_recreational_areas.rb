class AddFacilityIdToApiV1RecreationalAreas < ActiveRecord::Migration[6.0]
  def change
    add_column :api_v1_recreational_areas, :facility_id, :string
  end
end
