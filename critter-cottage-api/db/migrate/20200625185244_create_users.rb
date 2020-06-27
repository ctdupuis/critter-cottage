class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :f_name
      t.string :l_name
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
