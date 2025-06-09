### Prime Checker API

An API to check whether a given number is prime or not.

---

### Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/sreyas-b-anand/prime-checker-api.git
cd is-prime
```

## 2. Install dependencies
```bash
npm install
```
## 3. Run server
```bash
nodemon server
```


### Folder structure
```
is-prime/
├── server.js               # Entry point
├── routes/
│   └── prime.route.js      # Route to handle /prime endpoint
└── services/
    └── isPrime.js          # Prime checking logic
```

### Test with Postman
 1. Open Postman.

 2. Select POST method.

 3. URL
  ```bash
  http://localhost:3000/api/prime/is-prime
  ```
 4. copy the below code
 ```
{
number : 20
}
```
You can provide any number here

 5. Click Send.

