# Student Management System (PERN Stack)

## 📌 Project Overview

This project is a **full-stack Student Management System** developed using the **PERN stack**:

* **PostgreSQL** - Database management system for storing student records
* **Express.js** - Backend framework for creating REST APIs
* **React.js** - Frontend library for building the user interface
* **Node.js** - Runtime environment for backend development

The application provides a complete CRUD-based system to manage student information. Users can add, view, update, and delete student records through an interactive web interface connected with a PostgreSQL database.

---

## 🚀 Features

* Add new student records
* View all registered students
* Update existing student details
* Delete student records
* Search and manage student information
* REST API integration between frontend and backend
* PostgreSQL database connectivity
* Form validation and error handling
* Responsive user interface

---

## 🛠️ Technologies Used

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios (API communication)

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* PostgreSQL

### Tools

* VS Code
* Git & GitHub
* Postman

---

## 📂 Project Structure

```
Student-Management-System/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── db/
│   ├── server.js
│   └── package.json
│
├── database/
│   └── schema.sql
│
├── screenshots/
│   ├── dashboard.png
│   ├── add-student.png
│   ├── student-list.png
│   └── database.png
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

---

## 🗄️ Database Setup

1. Install PgAdmin4.

2. Create a database:

```sql
CREATE DATABASE student_management;
```

3. Create the student table:

Example:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    department VARCHAR(100),
    roll_number VARCHAR(50)
);
```

4. Configure PostgreSQL credentials in the backend `.env` file.

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=5000
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=student_management
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd server
npm start
```

Backend runs on:

```
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd client
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔄 API Endpoints

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| GET    | `/api/students`     | Fetch all student records |
| POST   | `/api/students`     | Add a new student         |
| PUT    | `/api/students/:id` | Update student details    |
| DELETE | `/api/students/:id` | Delete a student record   |

---

## 📸 Screenshots

### Student Dashboard

![Dashboard](./docs/dashboard.png)

### Add Student Form

![Add Student](./docs/add-student.png)

### Student List

![Student List](./docs/student-list.png)

### View Student

![Database](./docs/view-student.png)

---

## 🎯 Learning Outcomes

Through this project, I learned:

* Developing a full-stack application using the PERN stack
* Designing and managing a PostgreSQL database
* Creating REST APIs using Express.js
* Connecting React frontend with backend services
* Implementing CRUD operations
* Managing application state and user interactions
* Using Git and GitHub for version control

---

## 👩‍💻 Author

**Sriha Gara**

GitHub: https://github.com/srihagara123

---

## 📄 License

This project is created for learning and academic purposes.
