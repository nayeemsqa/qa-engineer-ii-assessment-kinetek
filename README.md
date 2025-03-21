This repo will be the best for forever from how much you received from candidates

# QA Engineer II Assessment - Kinetek

- This repository will have everything about the automation framework design and test cases for the QA Engineer II position at Kinetek.

## Project Setup

- Project under construction. Stay tunes for more update here...

## Add .gitignore file to exclude unnecessary files/folders like node_modules and test results

- Prevent committing large or auto-generated files such as node_modules, test-results, and temporary data.
- Keep the repository clean and focused only on source code and essential configurations.
- Improve project maintainability and reduce clutter in version control.


## Why These Components?

Tests Folder (`tests/`)** - Contains all test case scripts to keep automation organized.  
Pages Folder (`pages/`)** - Implements Page Object Model (POM) for cleaner and reusable test scripts.  
Test Data Folder (`data/`)** - Stores external test data like user credentials to avoid hardcoded values.  
Utilities Folder (`utils/`)** - Contains helper functions to support test execution and avoid code duplication.  
Test Results Folder (`test-results/`)** - Saves test execution reports for debugging and performance tracking.  
Git Ignore (`.gitignore`)** - Excludes unnecessary files like `node_modules` to keep the repository clean.  
Environment File (`.env`)** - Stores sensitive information securely and keeps configurations flexible.  

## Run all tests:
```bash
npx playwright test tests

## View the HTML test report
npx playwright show-report reports
