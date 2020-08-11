class AddExperienceToRequests < ActiveRecord::Migration[6.0]
  def change
    add_column :requests, :experience, :boolean
  end
end
