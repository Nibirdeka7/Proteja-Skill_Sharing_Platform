# Proteja – Learn by Teaching 👥📚

Proteja is a full-stack MERN (MongoDB, Express, React, Node.js) application that enables people to **teach what they know and learn what they want**, through real-time connection, chat, and video calls.

Inspired by the **Protégé Effect** — the idea that teaching helps you learn better — Proteja creates a collaborative platform for skill-sharing.

---

## 🚀 Features

- 🔄 Skill Matching: Connect based on what you can teach and what you want to learn  
- 🧠 Peer-to-Peer Learning: A unique approach to grow through teaching  
- 💬 Real-time Chat: Seamless messaging powered by **Stream**  
- 📹 Video Calls: Integrated video communication to enhance collaboration  
- 📱 Responsive Design: Built with Tailwind CSS for modern UI across devices  
- 🔐 Authentication: Secure login & sign-up system  

---

## 💻 Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Realtime Features**: Stream API (Chat & Video Call)  
- **Other Tools**: Vite, React Router, Zustand, Axios, etc.

---

## 📂 Folder Structure

client/ # React frontend
├── src/
│ ├── components/
│ ├── pages/
│ ├── store/ # Zustand state
│ ├── api/ # Axios service calls
│ └── App.jsx

server/ # Express backend
├── controllers/
├── models/
├── routes/
├── middleware/
└── index.js

yaml
Copy
Edit

---

## 🛠️ Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/proteja.git
Setup the backend

bash
Copy
Edit
cd server
npm install
npm run dev
Setup the frontend

bash
Copy
Edit
cd client
npm install
npm run dev
Environment Variables

Add .env files for both client and server.
