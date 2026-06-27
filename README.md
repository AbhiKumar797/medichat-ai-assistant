# 🤖 MediChat — AI-Powered Healthcare Assistant

MediChat is an intelligent full-stack medical consulting assistant that leverages Large Language Models to help users identify potential illnesses and receive over-the-counter (OTC) medication recommendations based on their symptoms.

---

## 🔗 Live Links
* **Live Web Application:** [Visit MediChat Live](https://medichat-ai-assistant.vercel.app) *(Update with your live URL)*
* **Project Demo Video:** [Watch Demo on YouTube](https://youtube.com) *(Update with your YouTube video URL)*

---

## 🌟 Key Features
*   **Google OAuth 2.0 Login:** Single-click secure signup and authentication powered by `@react-oauth/google`.
*   **AI-Powered Consultation:** Integrates **Llama 3.3** via the high-speed **Groq Cloud API** to perform clinical symptom assessment.
*   **Strictly Structured Outputs:** Implements **LangChain** and **Zod** schema constraints to guarantee JSON-structured recommendations containing Disease, Medicine recommendation, and a safety Note.
*   **Persistent Chat History:** Seamlessly stores transcripts in **MongoDB**, allowing users to retrieve past conversations upon page reloads.
*   **Secure Session Management**: Employs **JSON Web Tokens (JWT)** inside secure **HttpOnly Cookies** to mitigate XSS and session hijacking.
*   **Responsive UI/UX**: Feature-rich dark-themed chat interface with real-time autoscroll and clean typography.

---

## 🛠️ Tech Stack

| Layer | Technology | Key Libraries |
| :--- | :--- | :--- |
| **Frontend** | React.js (v19) | `react-router-dom`, `@react-oauth/google`, `jwt-decode` |
| **Backend** | Node.js, Express.js | `jsonwebtoken`, `cookie-parser`, `cors`, `dotenv` |
| **AI Orchestration** | LangChain | `@langchain/groq`, `zod` |
| **Database** | MongoDB | `mongoose` |

---

## 📁 Repository Structure
```text
MediChat/
├── backend/
│   ├── Config/          # Database configuration (db.js)
│   ├── Controllers/     # Core route controllers (AI, User, Conversation)
│   ├── Middleware/      # JWT Authentication middleware
│   ├── Models/          # Mongoose database schemas
│   ├── Routes/          # Express API route endpoints
│   ├── server.js        # Main entry point of the backend server
│   └── package.json
│
└── frontend/
    ├── public/          # Static assets and index.html
    ├── src/
    │   ├── Pages/       # ChatPage and GoogleLoginPage (JS & CSS)
    │   ├── App.js       # React Router and page declarations
    │   └── index.js     # React entry point
    └── package.json
```

---

## ⚙️ Local Development Setup

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18+ recommended)
*   [MongoDB](https://www.mongodb.com/) (running locally on port 27017 or a MongoDB Atlas URI)
*   [Groq API Key](https://console.groq.com/)

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `backend` folder and add:
   ```env
   MONGODB_URL=mongodb://localhost:27017/medichat
   SECRET_KEY=your_secure_jwt_secret_key
   GROQ_API_KEY=gsk_your_groq_api_key
   NODE_ENV=development
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   *The backend will run on `http://localhost:3001`.*

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Verify backend connection URL in `frontend/src/Pages/GoogleLoginPage.js` and `frontend/src/Pages/ChatPage.js`:
   ```javascript
   const backendUrl = "http://localhost:3001";
   ```
4. Start the React server:
   ```bash
   npm start
   ```
   *The client will open automatically on `http://localhost:3000`.*

---

## 🛡️ Medical Disclaimer
**MediChat is an AI-powered conversational assistant designed for informational and educational purposes only. It does not provide professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician or healthcare provider with any questions you may have regarding a medical condition.**

---

## 📄 License
This project is licensed under the ISC License.
