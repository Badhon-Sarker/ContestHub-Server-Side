Website Name: ContestHub

Live site link: https://assignment-12-93c77.web.app

Features & Characteristics:

● Our website shows all contest on top and after clicking on profile image there will be two routes.

● Login section have email and password based system and sign in with google system.

● After successful account creation, log in , log out, the website will notify with hot toast.

● In home page one can see popular contest, best contest creator and others sections.

● By clicking on details button user can see the details about that contest and then by doing his payment he can participate in that contest.

● Creator can add, edit and delete contest and also declare the winner of the contest he created.

● Admin can see user and contest. He can accept, delete and block the user.

● Admin also can approve and delete the contest.

● User can see his participated contest and winned contest.

● Leaderboard shows the most winner.

● This site is connected with Mongodb.

● This site is responsive for small, medium and large devises.


## HTML, CSS, Tailwind, React, Node JS, Express JS, Mongo DB and Stripe have been used in this project.



Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version X.X.X)
- [MongoDB](https://www.mongodb.com/) (version X.X.X)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    ```

4. **Start MongoDB**

    Ensure MongoDB is running. You can start MongoDB using:

    ```sh
    mongod
    ```

5. **Run the application**

    ```sh
    npm start
    ```

    The application should now be running on [http://localhost:5000](http://localhost:5000).

### Additional Notes

- Ensure MongoDB is properly installed and running on your local machine. You can refer to the [MongoDB installation guide](https://docs.mongodb.com/manual/installation/) for detailed instructions.
- If you encounter any issues, check the console for error messages and ensure all dependencies are correctly installed.
- For more advanced usage and configuration, refer to the project documentation or source code comments.
