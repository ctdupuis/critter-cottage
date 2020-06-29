# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {email: 'boss@admin.com', password: 'boss', admin: true, f_name: 'Top', l_name: 'Dog'},
    {email: 'user@place.com', password: 'pass', admin: false, f_name: 'New', l_name: 'User'}
]

animals = [
    {name: 'Milo', gender: 'Male', species: 'Dog', breed: 'Mutt'},
    {name: 'Parker', gender: 'Male', species: 'Dog', breed: 'Labrador Retriever'}
]

# {name: 'Cooper', gender: 'Male', species: 'Dog', breed: 'Poodle'},
# {name: 'Flick', gender: 'Male', species: 'Lizard', breed: 'Red Dragon'},
# {name: 'Sofie', gender: 'Female', species: 'Dog', breed: 'Maltese'},
# {name: 'Grace Kelly', gender: 'Female', species: 'Bird', breed: 'Cockatiel'},
# {name: 'Lil Sebastian', gender: 'Male', species: 'Horse', breed: 'Miniature'}
animals.each do |data|
    animal = Animal.create(data)
    animal.image.attach(
        io: File.open("./public/images/#{animal.name}.jpg"),
        filename: "#{animal.name}.jpg",
        content_type: "application/jpg"
    )
end

users.each{ |user| User.create(user) }
