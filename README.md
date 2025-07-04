# 🍔 Dine & Dazzle - Fast Food Restaurant Web App

Dine & Dazzle is a modern fast food restaurant web application built with **React** for the frontend and **SQL** for managing backend data. It provides a seamless and engaging user experience for browsing the menu, placing orders, viewing offers, and making reservations.

## 🚀 Features

- 🖼️ Beautiful landing page with interactive UI
- 🍟 Menu browsing with product images
- 📅 Reservation system for booking tables

## 🛠️ Tech Stack

- **Frontend**: React.js, JSX, CSS
- **Backend/Database**: Node.js, SQL (via XAMPP / phpMyAdmin)
- **Other Tools**:
  - Git for version control
  - VS Code for development
  - XAMPP for local database hosting

---

## 💻 How to Run the Project

### 🔹 Prerequisites

- Install [Visual Studio Code](https://code.visualstudio.com/)
- Install [XAMPP](https://www.apachefriends.org/index.html)
- Install [Node.js](https://nodejs.org/)

---

### 🧩 1. Running the Database

1. Open **XAMPP** and click:
   - `Start` next to **Apache**
   - `Start` next to **MySQL**
   - Click the **Admin** button next to MySQL — it will open **phpMyAdmin** in your browser.
2. In phpMyAdmin:
   - Click on **"New"** in the left sidebar.
   - Click on **"Import"** from the top menu.
   - Click **"Choose File"** and select the file `dine-_-dazzle.sql` (found in your project files).
   - Click **"Import"**.

Your database is now set up.

---

### 🔹 2. Running the Backend

1. In **VS Code**, open the project folder.
2. Navigate to the `src` directory where `Testing.js` is located.
3. In the terminal (ensure you're in the correct directory: `.../dinerdazzle/src>`), run:

   ```bash
   node Testing.js
  You should see the message:
    - Example app is listening on port 3010
--- 

### 🔹 3: Running the Frontend
1. In VS Code, make sure the terminal path is '.../dinerdazzle>'
2. Start the React frontend with:
   ```bash
     npm start
3. Your app will launch in the browser (usually at http://localhost:3000).

### 🔹 4: Project Structure (Simplified):

    DineDazzle/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── Testing.js        ← Backend code
    │   ├── App.js
    │   └── index.js
    ├── dine-_-dazzle.sql     ← Database file
    ├── package.json
    └── README.md


### 📸 Preview:

--> Check out the demo video in the repository files! 
<img width="1279" alt="image" src="https://github.com/user-attachments/assets/090ac142-56d6-47da-a743-e89d7125111c" />


