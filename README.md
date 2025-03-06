# AutoDraft.Ai 🚀

## Basic Details
### Team Name: The Code Father

### Team Members
- **Rahul R P**
- **Noel**

### Project Description
This project is a backend system for generating official college letters. Users can input their details, and an AI-generated letter will be created and stored. The system also provides authentication features like user registration and login.

### The Problem Statement
Many students struggle with writing formal letters for applications, leave requests, and duty leave. Manual letter writing is time-consuming and error-prone.

### The Solution
Our system automates letter generation using AI, ensuring correctness and professionalism. It also provides authentication for secure access and management.

---

## Technical Details
### Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt.js
- **AI Letter Generation:** OpenRouter API
- **Frontend:** React.js

---

## Implementation

### **Installation**
```sh
npm install
```

### **Run the Server**
```sh
npm start
```

---

## **API Endpoints** 📌

### **1️⃣ User Authentication APIs**
#### 🔹 Register User
**Endpoint:** `POST /api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
✅ **Response:**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here"
}
```

#### 🔹 Login User
**Endpoint:** `POST /api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
✅ **Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

#### 🔹 Get Current User (Protected)
**Endpoint:** `GET /api/auth/me`
✅ **Headers:**
```json
{
  "Authorization": "Bearer jwt_token_here"
}
```
✅ **Response:**
```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### **2️⃣ Letter Generation APIs**
#### 🔹 Submit Letter Request
**Endpoint:** `POST /api/letters/submit`
```json
{
  "fullName": "John Doe",
  "rollNumber": "123456",
  "department": "CSE",
  "semester": 6,
  "recipient": "Principal",
  "letterType": "Leave Letter",
  "reason": "Medical leave",
  "description": "I was sick for 3 days.",
  "fromDate": "2025-03-01",
  "endDate": "2025-03-03"
}
```
✅ **Response:**
```json
{
  "message": "Letter generated successfully",
  "letterId": "letter_unique_id",
  "generatedLetter": "Your formatted letter text here..."
}
```

#### 🔹 Get Generated Letter by ID
**Endpoint:** `GET /api/letters/:id`
✅ **Response:**
```json
{
  "letterId": "letter_unique_id",
  "generatedLetter": "Your formatted letter text here..."
}
```

---

## **Team Contributions** 👥
- **Rahul R P:** Backend development, API design, MongoDB integration, authentication, AI integration.
- **Noel:** Frontend development, API integration, UI design, testing.

---
Dept. of Computer Applications, CUCEK

