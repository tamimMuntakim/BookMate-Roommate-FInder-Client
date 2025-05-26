# BookMate || Find Your Roommate

A modern web application for finding and listing roommates, built with React and Firebase.

---

## 🚀 Live Demo

Check the live demo: [BookMate || Find Your Roommate](https://assignment10-tamim-bookmate.web.app/)

---

## ✨ Features

- 🔒 **Authentication:** Secure login and registration using Firebase Authentication.
- 🏠 **Browse Listings:** View all available roommate listings with detailed information.
- ➕ **Add Roommate:** Authenticated users can add new roommate listings.
- 📝 **My Listings:** View, update, and delete your own roommate posts.
- 👀 **Roommate Details:** See detailed information for each listing.
- 🌗 **Dark Mode:** Switch between light and dark themes.
- ⚡ **Loading States:** Smooth user experience with loading indicators.
- 🛡️ **Protected Routes:** Only authenticated users can add, edit, or delete listings.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Firebase Project](https://firebase.google.com/) (for authentication)

### Installation

1. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2. **Set up Firebase:**
    - Create a `.env` file in the root directory.
    - Add your Firebase config:
      ```
      VITE_FIREBASE_API_KEY=your_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_APP_ID=your_app_id
      ```

3. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open in your browser:**
    ```
    http://localhost:5173
    ```

---

## 📁 Project Structure

```
src/
│
├── assets/             
├── components/
├── Contexts/
├── Firebase/
├── Layouts/                     
├── Pages/         
├── Providers/          
└── Routes/            
```

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, React Router DOM, Tailwind CSS, DaisyUI
- **Authentication:** Firebase Authentication
- **Database:** MongoDB
- **Backend API:** Node.js/Express (hosted on Vercel)
- **Icons:** React Icons
- **Alerts:** SweetAlert2
- **Deployment:** Vercel, Firebase

---

## 📄 License

This project was only done for learning purpose.

---
