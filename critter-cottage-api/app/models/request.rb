class Request < ApplicationRecord
    belongs_to :user

    def self.filter(user)
        if user.admin
            self.where("admin_id = ?", user.id)
        else
            self.where("user_id = ?", user.id)
        end
    end
end
