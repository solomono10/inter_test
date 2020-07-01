Feature: Login

    Scenario Outline: Successful login
        Given I'm on the login page
        When I type in <email address> in the email address field
        And I type in <password> in the password field
        And I click Login button
        Then I'm logged in

        Examples:
            | email address        | password |
            | test150420@gmail.com | 9999999  |
