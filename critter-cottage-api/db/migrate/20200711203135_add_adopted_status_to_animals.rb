class AddAdoptedStatusToAnimals < ActiveRecord::Migration[6.0]
  def change
    add_column :animals, :adopted, :boolean, default: false
  end
end
