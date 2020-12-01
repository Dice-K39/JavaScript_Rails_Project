class CreateApiV1RecreationalAreas < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_recreational_areas do |t|
      t.string :area_name
      t.string :description

      t.timestamps
    end
  end
end
