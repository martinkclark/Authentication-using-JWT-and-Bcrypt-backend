

## Authentication using bcrypt and jwt

This project provides an API for user registration, login, and authentication. It can be tested using Postman.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Postman](https://www.postman.com/downloads/)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm run start
    ```

## API Endpoints

### User Registration

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
      "username": "john.doe",
    "email": "john.doe@example.com",
  "password": "password123"
  }
  ```

- **Response:**

  ```json
  {
     "message": "User registered successfully"
  }
  ```

### User Login

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
  "username": "john.doe",
  "password": "password123"
  }
  ```

- **Response:**

  ```json
  {
     "message": "Succefully Login",
     "token": "your-auth-token"
  }
  ```

### Protected Route or to check authentication

- **Endpoint:** `/user/profile`
- **Method:** `GET`
- **Barer Token** `Put the returned token when you login here`

  

- **Response:**

  ```json
  {
     "message": "message: Welcome username of logined id"
  }
  ```

## Testing with Postman

1. Open Postman and set the environment variable `base_url` to `http://localhost:8000` or the appropriate URL.

2. Send requests to the API endpoints mentioned above to test the registration, login, and protected route functionality.


## Conclusion

Congratulations! You have successfully set up and tested the user registration, login, and authentication API using Postman. Feel free to explore and customize the project as per your requirements.

