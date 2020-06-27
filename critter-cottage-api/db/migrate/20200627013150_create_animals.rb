class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :gender
      t.string :species
      t.string :breed

      t.timestamps
    end
  end
end
