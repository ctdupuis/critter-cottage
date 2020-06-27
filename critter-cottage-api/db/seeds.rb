# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(email: 'user@place.com', password: 'pass', admin: true)

seeds = [
    {name: 'Milo', gender: 'Male'},
    {name: 'Cooper', gender: 'Male'},
    {name: 'Flick', gender: 'Male'},
    {name: 'Parker', gender: 'Male'},
    {name: 'Sofie', gender: 'Female'}
]

seeds.each{ |animal| Animal.create(animal) }
# milo = Animal.create(name: 'Milo', gender: 'Male')
# flick = Animal.create(name: 'Flick', gender: 'Male')
# coops = Animal.create(name)