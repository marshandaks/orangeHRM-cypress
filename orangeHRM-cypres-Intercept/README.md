# OrangeHRM Login Automation Testing

## About the Project
This project contains automated test cases for the login functionality of the OrangeHRM demo website using Cypress. The testing focuses on validating login behavior under different conditions, including valid credentials, invalid credentials, empty fields, password masking, and the forgot password feature.

## Website Under Test
- **Application:** OrangeHRM Demo
- **URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- **Testing Type:** Web UI Automation Testing
- **Automation Tool:** Cypress
- **Language:** JavaScript

## Test Scenarios
The project includes 12 test cases covering:

- Successful login with valid credentials
- Login with an incorrect password
- Login with an incorrect username
- Login with both username and password incorrect
- Login with empty username and password fields
- Login with an empty username
- Login with an empty password
- Login using a lowercase username
- Password case sensitivity validation
- Password masking validation
- Login input validation using SQL injection-like strings
- Forgot password navigation and reset flow

## Tools & Technologies
- Cypress
- JavaScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Project Structure
```text
orangeHRM-cypress/
├── cypress/
│   └── e2e/
│       ├── TC-LGN-001.cy.js
│       ├── TC-LGN-002.cy.js
│       ├── TC-LGN-003.cy.js
│       ├── TC-LGN-004.cy.js
│       ├── TC-LGN-005.cy.js
│       ├── TC-LGN-006.cy.js
│       ├── TC-LGN-007.cy.js
│       ├── TC-LGN-008.cy.js
│       ├── TC-LGN-009.cy.js
│       ├── TC-LGN-010.cy.js
│       ├── TC-LGN-011.cy.js
│       └── TC-LGN-012.cy.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## How to Run the Tests

### Prerequisites
- Node.js and npm installed
- Git installed

### Installation
Clone the repository:

```bash
git clone https://github.com/marshandaks/orangeHRM-cypress.git
```

Navigate to the project directory:

```bash
cd orangeHRM-cypress
```

Install dependencies:

```bash
npm install
```

### Run Cypress
Open the Cypress Test Runner:

```bash
npx cypress open
```

To run the tests in headless mode:

```bash
npx cypress run
```

## Notes
- The tests use the public OrangeHRM demo website.
- Test results may vary depending on website availability and behavior.
- Some scenarios may fail when the actual application behavior differs from the expected result. These cases can be investigated further as part of the testing process.

