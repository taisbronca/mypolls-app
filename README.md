# MyPolls App

This is the repository for the frontend of Poll Manager, an application for creating, editing, and managing polls. The application is built with **ReactJS** and integrates with a **Node.js** backend for data management.

- MyPolls Deploy App: https://mypolls-app.onrender.com/
- Mypolls Deploy Api: https://mypolls-api.onrender.com/

#### Features

1. Create Polls
   Users can create new polls through the interface, specifying the title and answer options.
   Each poll is linked to the user who created it.
2. List Polls
   The home page displays a list of all available polls, allowing users to view details of each poll.
3. Edit Polls
   Users can edit the title and options of an existing poll.
4. Delete Polls
   The application allows users to delete a poll after confirmation.
   Deletion is handled with a confirmation modal using SweetAlert2.
5. Responsive Interface
   The interface is designed to be responsive, making it accessible across different devices (desktops, tablets, and smartphones).
6. Create and User Authentication
   Access to poll creation and editing is restricted to authenticated users.

#### Technologies Used

- React.js
- Styled-Components
- Vite for build and development
- SweetAlert2 for modals and confirmation prompts
- Node.js backend (for user management and data persistence): https://github.com/taisbronca/mypolls-api

#### Requirements

To run this project locally, you’ll need the following tools installed:

1. Node.js (version 14 or above)
2. npm (comes with Node.js) or yarn (optional)
3. A backend API to connect to (you can find the backend repository [here](https://github.com/taisbronca/mypolls-api) or set up your own).

#### Getting Started

1. Clone this repository:
```bash
git clone https://github.com/taisbronca/mypolls-app.git
```

2. Navigate into the project directory:
```bash
cd mypolls-app
```

3. Install dependencies:
```bash
npm install
# Or if using yarn
yarn install
```

4. Run the development server:
```bash
npm run dev
# Or with yarn
yarn dev
```

5. Open the app in your browser:
Navigate to http://localhost:5173/ to view the application.

#### License
This project is licensed under the MIT License.

###### tags: `front-end` `React.js` `Styled-Components` `vite`
