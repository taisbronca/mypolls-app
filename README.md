# My Poll App

This is the repository for the frontend of Poll Manager, an application for creating, editing, and managing polls. The application is built with ReactJS and integrates with a Node.js backend for data management.

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

#### Project Structure

mypolls-app/
├── public/ # Public files of the application (index.html, favicons)
├── src/
│ ├── components/ # Reusable UI components
│ ├── contexts/ # Context API for global state management
│ ├── pages/ # Application pages (Home, SignIn, SignUp)
│ ├── services/ # Services for API communication (e.g., getPolls, createPoll)
│ ├── styles/ # Global styles and themes
│ ├── App.js # Root component of the application
│ ├── index.js # Application entry point
│ └── routes/ # Route configuration using React Router  
│ # Environment configuration example
├── package.json
├── README.md # Project documentation
└── ...

###### tags: `front-end` `React.js` `Styled-Components` `vite`
