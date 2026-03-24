# The Tiny Note

The Tiny Note is a lightweight notes application built using the MERN stack. It enables users to create, edit, and manage notes through a simple and responsive interface.

---

## Overview

Developed during a 3-day workshop, this project demonstrates core full-stack development concepts including CRUD operations, client-side routing, and cloud database integration using MongoDB Atlas.

---

## Features

- Create, edit, and delete notes  
- Persistent storage using MongoDB Atlas (cloud)  
- Responsive and minimal UI  
- Client-side routing  

---

## Tech Stack

**Frontend**
- React.js  
- CSS  

**Backend**
- Node.js  
- Express.js  

**Database**
- MongoDB Atlas  

---

## Architecture

- React handles UI and routing  
- Express provides RESTful APIs  
- MongoDB Atlas stores note data in the cloud  
- Node.js manages server-side logic  

---

## Local Setup

```bash
git clone https://github.com/komal-gangwar/the-tiny-note.git
cd the-tiny-note
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file in the backend:

```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

---

## Status

Completed as part of a workshop project.

---

## Author

Komal Gangwar  
https://github.com/komal-gangwar
