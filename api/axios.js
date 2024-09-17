import a from "axios"

const axios = a.create({
    baseURL: 'http://localhost:3000', // Set your API base URL here
    withCredentials: true, // Allow sending cookies with requests
    headers: {
      'Content-Type': 'application/json', // Set default content type
    },
  });
  

  export default axios