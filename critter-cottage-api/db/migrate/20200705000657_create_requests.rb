class CreateRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :requests do |t|
      t.integer :user_id
      t.integer :admin_id
      t.integer :animal_id
      t.string :status, default: 'pending'

      t.timestamps
    end
  end
end
