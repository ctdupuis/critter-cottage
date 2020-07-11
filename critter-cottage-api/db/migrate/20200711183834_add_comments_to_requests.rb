class AddCommentsToRequests < ActiveRecord::Migration[6.0]
  def change
    add_column :requests, :comments, :string
  end
end
