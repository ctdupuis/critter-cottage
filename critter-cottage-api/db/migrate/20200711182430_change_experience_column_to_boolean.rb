class ChangeExperienceColumnToBoolean < ActiveRecord::Migration[6.0]
  def change
    change_column :requests, :experience, :boolean
  end
end
