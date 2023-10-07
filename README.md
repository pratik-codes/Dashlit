<div align="center">

![Dashlit Logo](https://github.com/pratik-codes/Dashlit/blob/monorepo-migration/apps/landing/public/logo-black.png)

### Dashlit - [Demo Extension](https://demo.dashlit.com/)
</div>

---

**Dashlit**: An open-source productivity extension for your browser. It offers an efficient method to manage your links, to-dos, customize your browser's home screen, manage meetings, emails, and ensures rapid accessibility. Developed with fervour by [**Pratik**](https://twitter.com/pratikk_tiwari).

---


## Architecture and Folder Structure

The organizational scheme of the repository is delineated as follows:

```plaintext
.
├── app/
│   ├── extension
│   └── landing
├── packages/
│   ├── ui
│   └── utils
├── package.json
├── pnpm.lock
├── turbo.json
└── tsconfig.json
```

### Explanation
**app/**: This directory constitutes the core application layers.

**extension**: This sub-folder houses the codebase for the browser extension itself, incorporating logic, views, and related assets.
**landing**: This is the landing page for the Dashlit application, responsible for the initial user interface.
**packages/**: This directory is planned for modular development.

**ui**: Currently empty, but intended for integrating Shadcn UI to create reusable UI components.

**utils**: This folder is also empty at present, designated for utility functions that will be shared across the application.

package.json, pnpm.lock: These files manage project dependencies.
turbo.json: Configuration file for TurboRepo.
tsconfig.json: Configuration settings for TypeScript compiler.

<br/>

## Contributions

Interested in contributing? Follow the steps below to set up the development environment.

### Pre-requisites

1. **Clone the Repository**: Clone the repository locally onto your machine.

    ```bash
    git clone <repository-link>
    ```

2. **Firebase Backend**: This project uses Firebase as its backend. Create a Firebase project and populate the `.env` file located at the project root with the appropriate credentials.

    Example of `.env` configuration:

    ```env
    # Firebase keys
    VITE_FIREBASE_API_KEY=ADD_THE_VALUE_HERE
    VITE_FIREBASE_AUTH_DOMAIN=ADD_THE_VALUE_HERE
    VITE_FIREBASE_PROJECT_ID=ADD_THE_VALUE_HERE
    VITE_FIREBASE_STORAGE_BUCKET=ADD_THE_VALUE_HERE
    VITE_FIREBASE_MESSAGING_SENDER_ID=ADD_THE_VALUE_HERE
    VITE_FIREBASE_APP_ID=ADD_THE_VALUE_HERE
    VITE_FIREBASE_MEASUREMENT_ID=ADD_THE_VALUE_HERE
    ```

### Installation

3. **Turbo CLI**: Install the Turbo CLI globally as this project utilizes TurboRepo.

    ```bash
    npm install turbo --global
    ```

4. **Dependencies**: Run the following command to install all the required dependencies:

    ```bash
    pnpm install
    ```

### Execution

5. **Development Server**: Start the development server.

    ```bash
    turbo dev
    ```

6. **Access**: Post successful execution, the extension application will be accessible at `http://localhost:5173`, and the landing page at `http://localhost:3000`.

7. **build**: To build the extension and the landing page run `turbo build` and the output folder would be created, `dist` for the extension and `.next` for the landing page app. You can use this dist folder to import in the chrome browser in the extension section to test and use it locally.

You are all set to contribute!

---
