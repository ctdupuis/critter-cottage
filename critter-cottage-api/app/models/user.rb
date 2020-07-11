class User < ApplicationRecord
    has_secure_password
    has_many :requests
    has_many :animals
    
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true

    def as_json(options={})
        super(only: [:id, :email, :f_name, :l_name, :admin, :requests])
    end 
end
