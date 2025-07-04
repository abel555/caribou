# Caribou.com E2E Test Framework (Playwright + TypeScript)

This project is an automated test framework built with [Playwright](https://playwright.dev) and TypeScript, designed to test key user flows on [caribou](https://caribou.com).

## Tech stack

- **Playwright** for end-to-end browser automation
- **TypeScript** for type-safe test development
- **Page Object Model (POM)** to structure page interactions
- **HTML Reporter** for readable visual test results

## Project Structure

caribou-playwright-tests/
    src/
        pages/ # Page Object classes (HomePage, PersonalInfoPage, etc.)
        models/ # Mock data models and helpers
    tests/ # All test specs
    playwright.config.ts # Playwright test configuration
     README.md # Project documentation

## Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/caribou-playwright-tests.git
   cd caribou-playwright-tests
2. **Install dependencies**
    ```bash
    npm install
3. **Run Tests**
    here you have some option
    to run all tests:
    ```bash
    npm run all-tests
    npx playwright run test
    ```
    to run just the regression file:
    ```bash
    npm run regression-tests
4. **Show Report**
    ```bash
    npx playwright show-report
