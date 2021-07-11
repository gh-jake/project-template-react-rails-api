class CreateBeaches < ActiveRecord::Migration[6.1]
  def change
    create_table :beaches do |t|
      t.string :name
      t.string :town
      t.boolean :dog_friendly
      t.boolean :has_snack_bar
      t.boolean :has_restrooms
      t.integer :user_id

      t.timestamps
    end
  end
end
