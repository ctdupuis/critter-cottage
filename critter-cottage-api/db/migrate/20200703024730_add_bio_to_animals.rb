class AddBioToAnimals < ActiveRecord::Migration[6.0]
  def change
    add_column :animals, :bio, :string
  end
end
