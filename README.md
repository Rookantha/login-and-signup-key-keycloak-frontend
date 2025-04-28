# My IAM System

This is a Identity and Access Management (IAM) system built with Next.js. It provides basic user registration, login, and a dashboard to view login history.

## Features

- **User Registration:** Allows new users to create an account with a username, email, first name, last name, and password.
- **User Login:** Enables registered users to log in with their username and password.
- **Dashboard:** After successful login, users are redirected to a dashboard where they can view their login history.
- **Logout:** Authenticated users can securely log out of the system.
- **Basic UI:** A clean and responsive user interface built with Tailwind CSS.

## Technologies Used

- **Next.js:** A React framework for building server-rendered and static web applications.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **`next/link`:** For client-side navigation between routes.
- **`next/router`:** For programmatic navigation.
- **`useEffect` and `useState`:** React hooks for managing component state and side effects.
- **Axios:** A promise-based HTTP client for making API requests.
- **`js-cookie`:** (Likely used internally in `src/utils/auth.ts` - not shown in the provided code) For handling browser cookies to store authentication tokens.
- **`jwt-decode`:** (Likely used internally in `src/utils/auth.ts` - not shown in the provided code) For decoding JSON Web Tokens (JWTs).

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd <your-repository-name>
