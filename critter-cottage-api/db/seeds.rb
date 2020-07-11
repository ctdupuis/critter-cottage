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
    {name: "Li'l Sebastian", gender: 'Male', species: 'Horse', breed: 'Mini Pony', bio: "Li'l Sebastian has a smug disposition from large, continuous amounts of praise before reaching the Cottage. Sebastian is very sweet and playful. He loves giving rides to small children and his favorite snacks are apples and grapes. Sebastian is a good fit for any family, as long as he has ample yard space."},
    {name: 'Grace Kelly', gender: 'Female', species: 'Bird', breed: 'Cockatiel', bio: "Grace Kelly is very talkative. She loves to sing in the mornings and evenings, and tends to pick up on words every now and again. She's also very photogenic. Grace Kelly requires a lot of stimulation throughout the day to avoid boredom, and is easily frightened by larger animals. Any family would be lucky to have her, as long as they don't mind her chatty beak."},
    {name: "Mouse", gender: 'Male', species: 'Cat', breed: 'European Shorthair', bio: 'Mouse adores attention and will do just about anything to get yours. He is infamous for blocking TV screens and laying across keyboards. He is rather shy with strangers, however, and may take some time to open up to your household. Regardless, Mouse is very friendly and a good fit for any family.'},
    {name: 'Tom', gender: 'Male', species: 'Rabbit', breed: 'Rex', bio:'Tom can be quite the glutton. He loves to eat and although he is litter trained, sometimes he is oblivious to disciplinary action. His personality is not limited to his stubborn attitude as Tom is very sweet and playful. Living with Tom may test your patience at times, but Tom still makes a wonderful family member.'},
    {name: 'Honey', gender: 'Female', species: 'Rabbit', breed: 'Californian', bio: "Honey was found with her sister Berry behind the parking lot of the shelter. Her and Berry have an inseparable bond, and we strongly recommend they are adopted as a pair. Honey is the shy one out of the pair, and heavily relies on her sister for interaction with others. Wherever her sister goes, Honey follows."},
    {name: 'Berry', gender: 'Female', species: 'Rabbit', breed: 'Florida White', bio: "The more outgoing one out of the bunny sisters, Berry is very playful and protective of her sister. She and her sister are very close, so we recommend they be adopted together. To our best knowledge, they have never been apart. Berry is very playful but may choose to nibble on you if you aren't careful."},
    {name: 'Sebastian', gender: 'Male', species: 'Dog', breed: 'German Shepherd/Labrador', bio: 'Nicknamed Sebi, this little pup is full of spunk. Sebastian loves to play and unless sleeping, he can be found getting into trouble. He loves to chew on toys, object, and fingers. Although Sebi is still potty training, any patient pet owner would adore having him as part of the household.'},
    {name: 'Cooper', gender: 'Male', species: "Dog", breed: 'Poodle/Shih Tzu', bio: "Cooper was rescued from a hostile environment. As a result, he is quick to snap at any kind of aggressive behavior, even if that behavior has playful intentions. Cooper is very loyal and sweet, but doesn't always play well with others. The best fit for this little guy is a small household."}
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