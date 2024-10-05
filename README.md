Here’s the updated README file with your GitHub username:

```markdown
# User Details Management Application

This project is a **User Details Management Application** built with **React**. The application allows users to collect and manage basic user information, including first name, last name, phone number, email ID, and address. It implements features like data validation, CRUD operations, and local storage for data persistence.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Components](#components)
  - [UserForm Component](#userform-component)
  - [UserList Component](#userlist-component)
- [State Management and Local Storage](#state-management-and-local-storage)
- [Styling](#styling)
- [Contributing](#contributing)

## Project Overview

The User Details Management Application is designed to provide a user-friendly interface for collecting and managing user details. It allows users to input their data, view stored data, and perform operations like updating or deleting entries.

## Technologies Used

- [React](https://reactjs.org/)
- HTML
- CSS
- UUID (for generating unique IDs)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imyusufakhtar/user-details-app.git
   cd user-details-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Features

- Input fields for first name, last name, phone number, email ID, and address.
- Ability to add, edit, and delete user details.
- Data validation to ensure all fields are filled correctly.
- Data persistence using local storage.

## Components

### UserForm Component

The `UserForm` component allows users to input their details. It includes fields for first name, last name, phone number, email ID, and address.

**File: `src/components/UserForm.js`**

```javascript
// UserForm Component code
```

### UserList Component

The `UserList` component displays the list of users. It provides buttons for deleting and updating user information.

**File: `src/components/UserList.js`**

```javascript
// UserList Component code
```

## State Management and Local Storage

The application manages state using React's `useState` and `useEffect` hooks. User data is stored in local storage for persistence across page reloads.

**File: `src/App.js`**

```javascript
// App Component code
```

## Styling

The application is styled using CSS to enhance the user experience. The styles are located in `src/App.css`.

```css
/* App.css styles */
```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
