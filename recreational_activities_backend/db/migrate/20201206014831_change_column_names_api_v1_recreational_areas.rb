class ChangeColumnNamesApiV1RecreationalAreas < ActiveRecord::Migration[6.0]
  def change
    rename_column :api_v1_recreational_areas, :area_name, :facility_name
    rename_column :api_v1_recreational_areas, :description, :facility_description
  end
end
