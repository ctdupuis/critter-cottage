Animals optionally belong to users, need an adopt request feature
Build functionality for user to fill out/submit adoption application
Build functionality for admin to approve/deny adoption applications
Add adopted conditional for animals
Desparately needs styling

Presentational Components: 8
    Home
    NavBar
    AnimalCard
    AnimalShow
    AnimalsPage
    ReqList
    Request
    Profile

Stateless Components: 8
    Home 
    NavBar
    AnimalCard
    AnimalShow
    AnimalsPage
    ReqList
    Request
    Profile

Class Components: 4
    AnimalEdit
    AnimalInput
    LoginForm
    SignupForm

Containers Components: 3
    AnimalsContainer
    SessionsContainer
    ReqContainer



learn bootstrap


**Post Request**
curl -H "Content-Type: application/json" -H "Accept: application/json"  -d '{"email": "boss@admin.com", "password": "boss"}'  http://localhost:3001/login