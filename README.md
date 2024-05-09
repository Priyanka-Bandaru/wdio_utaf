---
 
# End-to-End Automation Project with WebDriverIO and Cucumber BDD
 
## Overview
This project demonstrates end-to-end automation testing using WebDriverIO with Cucumber BDD for structured behavior-driven development. It covers UI, API, and mobile automation. Additionally, it utilizes Cucumber HTML reports for clear and comprehensive test result visualization.
 
## Prerequisites
Before running the tests, ensure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)
- Chrome browser (for UI automation)
- Appium server (for mobile automation)
 
## Setup
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
 
## UI Automation (WebDriverIO with Cucumber BDD)
### Configuration
- The WebDriverIO configuration file is located at `wdio.conf.js`. Customize settings such as browser choice, test framework, and test execution environments in this file.
- Update the `baseUrl` in the configuration file to match the URL of the application under test.
 
### Running Tests
- To execute UI tests, run the command `npm run UI`. This will run all feature files specified in the `./features` directory.

### Reporting
- Test results are reported using Cucumber HTML reports.
- After running tests, open the generated HTML report located in the `.tmp/report/index.html` directory in your browser for detailed test results visualization.
 
## API Automation (Axios)
### Running Tests
- To execute API tests, run the command `npm run API`. 
 
### Reporting
- API test results can be viewed in the console output.
 
## Mobile Automation (Appium)
### Configuration
- Appium server configuration is located in the `android_wdio.conf.js` file. Update device capabilities and other settings as needed.
 
### Running Tests
- To execute mobile tests, start the Appium server and run the command `npm run suite-MOBILE`. 

### Reporting
- Test results are reported using Cucumber HTML reports.
- After running tests, open the generated HTML report located in the `.tmp/report/index.html` directory in your browser for detailed test results visualization.
 
## Continuous Integration
- Customize your CI/CD pipeline configuration to execute tests automatically on code changes.
 
## Contributing
Contributions are welcome! If you find any bugs or want to add new features, feel free to submit a pull request.
 
## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
 
---