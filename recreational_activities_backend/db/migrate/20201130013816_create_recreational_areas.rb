class CreateRecreationalAreas < ActiveRecord::Migration[6.0]
  def change
    create_table :recreational_areas do |t|
      t.string :facility_name
      t.string :facility_id
      t.string :facility_description
      t.integer :user_id

      t.timestamps
    end
  end
end
