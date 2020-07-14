### Critter Cottage

## About

Critter Cottage is a web app designed to manage data for an animal shelter. Basic user accounts are only allowed to apply to adopt animals and view their profiles. A user account **must** be created in order to perform this action. Administrator accounts have access to create new entries, edit those entries, and delete those entries. Through their profile pages, they can also approve or deny adoption requests.

## Run the App Locally

In order to run this app in your local environment, fork and clone this repo.

# API Setup

Navigate to the root folder by executing `cd critter-cottage-api`.
From there, run `bundle` and then `rails db:migrate`
After those processes are complete, run `rails s` to start the server

# Client-side Setup

All you need to do client-side is to cd into `critter-cottage-client` and run `npm start` or `yarn start`

## Disclosure

Critter Cottage is *NOT* an actual shelter. All animals on display live in loving homes, apart from Li'l Sebastian who is a fictional character. Obviously, any approved adoption requests will not guarantee a user to receive an animal.