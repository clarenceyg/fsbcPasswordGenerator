
## Title: FSBC HW3 - Password Generator
An application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


## Deployment
Web: 

Repository: https://github.com/clarenceyg/fsbcPasswordGenerator

Author: Clarence Guerrero


##  Logic
1. Click Generate Password
2. Alerts - Input Types
   1. password length - enter number between 8-128 (include error checking)
   2. ask if includes uppercase
   3. ask if includes lowercase
   4. ask if includes numbers
   5. ask if includes symbols
   6. Error checking - make sure at last one character type is selected
3. Display
   1. Check if all prompts are answered
   2. Check if 2.6 was satisfied
   3. Display password on screen (not on alert)


## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```


## References
1. special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).
