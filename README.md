Behaviors:
    build database with lacations we've traveled too

    build destination object conatining, location, landmarks, time of year and note:

  passport
    |-Country-Destination (ID)
      |-city
      |-landmarks
      |-time of year (date)
      |notes
      |- what trip
        |- times visted 

1st: build the palces you've been(passport) constructor (ID)

describe: Function passport();

Test: Creates, object to hold (countries)
code: Passport = Newpassport

test: adds destinations to passport
code: passport.addDestination(destination)

test: Finds destinations in passport by ID
code:Passport.findDestination(id)
expected output: destination = [parameters]

test: deletes destination in passport by id
code:Passport.deleteDestination(id)
expected outcome: true //deletes destination//

describe: Function Destination

test: creates object holding 4 variables
code: Destination(location, landmark, season, notes)
output: destination = [location, landmark, season, notes]




# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_