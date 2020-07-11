**Login, Signup, Request Review redirecting**
*Add adopted conditional for animals that disables their adoption request forms, maybe even deletes them from the system after certain amount of time*
**SESSION ERROR REDIRECTS**
*Add functionality to display loading icons!{this.state.requesting === true ?}*
**FIGURE OUT WHY PERFORMANCE IS SUFFERING**



Maybe add address model that belongs to User



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