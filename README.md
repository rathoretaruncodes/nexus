nexus
==================

Welcome to nexus, a blogging application built with a modern tech stack to provide a seamless experience for both writers and readers. It offers features such as creating and publishing blog posts, user authentication, and managing user profiles.

Features
--------

-   User Authentication: Secure user authentication using JWT.
-   Blog Post Management: Create, edit, delete, and view blog posts.
-   User Profiles: Manage user profiles and personal information.
-   Rich Text Editor: Write and format blog posts with ease.
-   Responsive Design: Built with Tailwind CSS to ensure a great user experience on all devices.
-   Type Safety: Leveraging TypeScript and Zod for type inference and validation.

Tech Stack
----------

-   Client-side: React, Tailwind CSS, TypeScript.
-   Server-side: Hono (Cloudflare Workers), Node.js.
-   ORM: Prisma for data modeling and connection pooling.
-   Database: PostgreSQL.
-   Authentication: JWT for secure user authentication.
-   Package Manager: Yarn.

Setup and Installation
----------------------

To set up and run nexus on your local machine, follow these steps:

1.  Clone the repository:

    `git clone https://github.com/rathoretaruncodes/nexus.git`
    `cd nexus`

2.  Install dependencies:

    `yarn install`

3.  Set up the environment:

    -   Create a `.env` file in the root directory of the project.
    -   Define the necessary environment variables such as database connection details, JWT secret, and others.

4.  Run the database migrations:

    `yarn prisma migrate dev --name init`

5.  Run the application:

    -   Client: Start the frontend development server:

        `yarn dev`

    -   Server: Start the backend server:

        `yarn dev`

Usage
-----

-   Visit `http://localhost:3000` in your browser to access the application.
-   Sign in or sign up to start creating and managing blog posts.

Project Structure
-----------------

The project is organized as follows:

-   /src: Contains the source code for the client and server.
    -   /client: Contains the React app with Tailwind CSS styling.
    -   /server: Contains the Hono server code and Prisma ORM setup.
-   /prisma: Contains Prisma schema and migration files.
-   /public: Contains static assets for the client side app.
-   /common: Contains shared code between the client and server.
-   .env: Environment variables file.
-   .gitignore: Specifies files and directories to be ignored in version control.

Contributing
------------

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes, enhancements, or new features. Before submitting a pull request, please ensure your code follows the project's coding standards and passes all tests.

License
-------

This project is open-source and available under the MIT License.

* * * * *

Happy coding! Let me know if you need any more information.
