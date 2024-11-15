# JOBHIVE - Campus Placement Prediction System

**JOBHIVE** is a campus-friendly placement cell management system designed to predict student placement potential, streamline the placement process, and facilitate communication between students, placement officers, and companies. This system uses a machine learning model to predict placement outcomes and provides a comprehensive interface for managing placement activities.

## Features
- Allows students to apply for jobs, check placement predictions, create resumes, and practice with mock tests.
- Companies can post job details, schedule interviews, and view applicant profiles.
- Admins can manage model training, update records, and upload resources.
- Uses logistic regression for placement prediction based on CGPA, internships, backlogs, and stream.
- Provides real-time placement status and analytics.

## Tech Stack
- **Frontend**: HTML, CSS (located in `views` and `public` folders)
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Machine Learning**: Logistic Regression (TensorFlow.js)
- **Authentication**: JWT (handled in `routes/auth.js`)
- **Notifications**: Nodemailer

## Folder Structure
```plaintext
JOBHIVE/
├── .vs/                       # Visual Studio project settings
├── controllers/               # Backend controllers
├── node_modules/              # Node.js dependencies
├── public/                    # Static files (CSS, JS, Images)
├── routes/                    # Express routes
│   ├── auth.js                # Authentication routes
│   └── pages.js               # Page routes
├── views/                     # HTML views and templates
├── .env                       # Environment variables (excluded from Git)
├── .gitignore                 # Files and folders to ignore in Git
├── app.js                     # Main backend entry point
├── jobhivesql.sql             # SQL file for database schema
├── package-lock.json          # Locked dependencies
├── package.json               # Project metadata and dependencies
```

## Getting Started
Follow these steps to set up and run the JOBHIVE project locally.

### Prerequisites
- **Node.js**: Download from [Node.js official website](https://nodejs.org/).
- **MySQL**: Set up a MySQL database and user for JOBHIVE.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/jobhive.git
   cd jobhive
   ```

2. **Install Backend Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory with the following keys:
     ```plaintext
     DB_HOST=<your_db_host>
     DB_USER=<your_db_user>
     DB_PASSWORD=<your_db_password>
     DB_NAME=<your_db_name>
     JWT_SECRET=<your_jwt_secret>
     ```

4. **Database Setup**:
   - Import `jobhivesql.sql` into your MySQL database to set up the initial schema.

5. **Run the Server**:
   ```bash
   node app.js
   ```
   The server will run on `http://localhost:3000`.

## Accessing JOBHIVE
- Visit `http://localhost:3000` to start using JOBHIVE.
- Access different user roles to explore features for students, companies, and admins.

## Contributing
1. **Fork the repository**.
2. **Create a feature branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add feature-name"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
5. **Create a pull request**.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---
