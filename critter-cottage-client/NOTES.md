animal has many species
species belongs to animal
images goes in app/assets/images => maybe make a route '/images' that renders these images, then pull their sources from that route in a fetch call and update it to the state for rendering
animals need a show page

a user can adopt an animal, so a user has one or many animals?
maybe make crud functionality only for admin

need actions to export/import for users

***sessions - logging in, logging out, signing up***
may need a sessions container

learn bootstrap
NEED TO INCLUDE THUNK AT SOME POINT

**Post Request**
curl -H "Content-Type: application/json" -H "Accept: application/json"  -d '{"email": "boss@admin.com", "password": "boss"}'  http://localhost:3001/login