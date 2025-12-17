# 📝 Simple Task Management App

A simple task management application where users can manage their tasks and an admin can view all users tasks. Data is stored using **LocalStorage**, with basic role-based access.

---

## 🚀 Live Demo

**Live URL:** [Simple-Task-Management](https://simple-task-management-sigma.vercel.app/)

---

## 🛠 Tech Stack

* **Frontend:** React
* **Routing:** React Router DOM
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Storage:** LocalStorage

---

## 🔐 User Roles

* **Admin**

  * Can view all users and their tasks
* **User**

  * Can create, edit, and delete their own tasks

---

## 🔄 Application Flow

1. User logs in using predefined credentials
2. Role is identified (Admin / User)
3. Access is protected using **Protected Routes**
4. * **User Dashboard:** Manage personal tasks (CRUD)
   * **Admin Dashboard:** View all users and tasks
5. Data is saved and fetched from **LocalStorage**
6. Logout clears active user session

---

## 📁 Folder Structure
```
src/
├── assets/
├── components/
│   ├── TaskForm.jsx
│   └── TaskList.jsx
├── data/
│   └── accountsInfo.js
├── pages/
│   ├── AdminDashboard.jsx
│   ├── Login.jsx
│   └── UserDashboard.jsx
├── routes/
│   ├── ProtectedRoute.jsx
│   └── router.jsx
├── utils/
│   └── storageHelper.js
├── App.jsx
├── index.css
└── main.jsx
```


## 📂 Features

* Login authentication
* Role-based routing
* Task CRUD operations
* Admin overview of all users
* LocalStorage persistence

---
