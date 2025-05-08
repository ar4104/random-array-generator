
Built by https://www.blackbox.ai

---

# Random Array Generator

## Project Overview
The Random Array Generator is a simple web application built with Node.js and Express that generates an array of 80 random integers ranging from 1 to 10. Users can view both the original unsorted array and its sorted version through a web interface. This project serves as a basic example of using Express to serve static files and create a simple API.

## Installation
To get started with the Random Array Generator, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/random-array-generator.git
   cd random-array-generator
   ```

2. **Install dependencies:**
   You need Node.js installed on your machine. Then, run:
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node server.js
   ```
   The server will be running at `http://localhost:3000`.

## Usage
- Open your web browser and navigate to `http://localhost:3000` to view the original array.
- Access the sorted array by visiting `http://localhost:3000/sorted`.

You can also interact with the API endpoints:
- **GET** `/api/original-array` - Returns the original unsorted array in JSON format.
- **GET** `/api/sorted-array` - Returns the sorted array in JSON format.

## Features
- Generates an array of 80 random integers from 1 to 10.
- Provides an API to access the original and sorted arrays.
- Simple static file serving for HTML and static resources (CSS, JS).
- Easily extendable to include more features or different functionalities.

## Dependencies
This project relies on the following npm packages:
- **Express**: A web framework for Node.js.
  
You can find the dependencies in the `package.json` file. Make sure to run `npm install` to install all necessary packages.

## Project Structure
```plaintext
random-array-generator/
│
├── css/
│   ├── style.css           # CSS styles for the application
│
├── html/
│   ├── index.html          # Main page displaying the original array
│   ├── sorted.html         # Page displaying the sorted array
│
├── js/
│   ├── script.js           # JavaScript functionality (if any)
│
├── resources/
│   ├── ...                 # Additional resources (images, etc.)
│
├── server.js               # Main server file
└── package.json            # Project metadata and dependencies
```

---

Feel free to contribute to this project or customize it as per your needs!