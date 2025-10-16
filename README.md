 Profile Endpoint API

This is a simple RESTful API that returns my profile information along with a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

---

 Features
- Returns dynamic data with every request
- Fetches a random cat fact from a public API
- Responds in JSON format
- Includes error handling for failed API calls

---

 Tech Stack
- **Node.js**
- **Express.js**
- **Axios**

---

 Setup Instructions

- 1.Clone the repository
```bash
git clone https://github.com/yourusername/profile-endpoint.git
cd hng13-profile-endpoint

2.Install dependencies
npm install

3.Run the server
node index.js

The server runs at http://localhost:3000


API Documentation
GET /me

Response Example:

{
  "status": "success",
  "user": {
    "email": "your_email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats have five toes on their front paws, but only four on the back ones."
}


Response Codes

200 OK → Successful response

500 Internal Server Error → If the Cat Facts API is down

License

This project is open-source and free to use.


✅ After editing:
- Replace all `"your_email@example.com"` and `"Your Full Name"` with your real details.  
- Change `https://github.com/yourusername/profile-endpoint.git` to your actual GitHub repo URL once you create it.

---

## ⚡️ How to Place the Files

Inside your main folder (`profile-endpoint`), it should look like this in VS Code or Finder:



profile-endpoint/
│
├── index.js
├── package.json
├── .gitignore
└── README.md


Then you can run:

```bash
npm install express axios cors
node index.js


And test:
👉 http://localhost:3000/me




