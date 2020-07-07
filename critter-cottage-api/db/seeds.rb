# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {email: 'boss@admin.com', password: 'boss', admin: true, f_name: 'Top', l_name: 'Dog'},
    {email: 'tnook@nookinc.com', password: 'nook', admin: false, f_name: 'Tom', l_name: 'Nook'},
    {email: 'dutydog@cod.com', password: 'coddog', admin: false, f_name: 'Riley', l_name: 'Ward'},
    {email: 'gibby@icarly.com', password: 'gibby', admin: false, f_name: 'Noah', l_name: 'Munck'}

]

animals = [
    {name: 'Milo', gender: 'Male', species: 'Dog', breed: 'St.Bernard/Labrador', bio: "Milo is a large, lazy pup. He can be noisy and doesn't always play nice with others, but once he warms up to you, he's as friendly as can be. Milo isn't aggressive towards small children, but doesn't understand how big he is and tends to knock them over. The ideal household for him would be a single couple with no other pets."},
    {name: 'Parker', gender: 'Male', species: 'Dog', breed: 'Labrador Retriever', bio: "Parker is as sweet and loveable as dogs come. He will asbolutely smother you with kisses until you're dripping with drool. He also doesn't understand how big and heavy he is, and will not hesitate to climb on your lap or try to give you a hug. Parker does well with others and would blend well with just about any household."},
    {name: "Li'l Sebastian", gender: 'Male', species: 'Horse', breed: 'Miniature', bio: "Li'l Sebastian has a smug disposition from large, continuous amounts of praise before reaching the Cottage. Sebastian is very sweet and playful. He loves giving rides to small children and his favorite snacks are apples and grapes. Sebastian is a good fit for any family, as long as he has ample yard space."},
    {name: 'Grace Kelly', gender: 'Female', species: 'Bird', breed: 'Cockatiel', bio: "Grace Kelly is very talkative. She loves to sing in the mornings and evenings, and tends to pick up on words every now and again. She's also very photogenic. Grace Kelly requires a lot of stimulation throughout the day to avoid boredom, and is easily frightened by larger animals. Any family would be lucky to have her, as long as they don't mind her chatty beak."}
]

# {name: 'Cooper', gender: 'Male', species: 'Dog', breed: 'Poodle'},
# {name: 'Flick', gender: 'Male', species: 'Lizard', breed: 'Red Dragon'},
# {name: 'Sofie', gender: 'Female', species: 'Dog', breed: 'Maltese'},

animals.each do |data|
    animal = Animal.create(data)
    animal.image.attach(
        io: File.open("./public/images/#{animal.name}.jpg"),
        filename: "#{animal.name}.jpg",
        content_type: "application/jpg"
    )
end


users.each{ |user| User.create(user) }

# Riley Ward requesting to adopt Li'l Sebastian
# Request.create(user_id: 3, admin_id: 1, animal_id: 3)
reqs = [
    {user_id: 3, animal_id: 3, admin_id: 1},
    {user_id: 4, animal_id: 2, admin_id: 1},
    {user_id: 2, animal_id: 1, admin_id: 1}
]

reqs.each{ |req| Request.create(req) }