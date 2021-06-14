import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 28KvioApYfBa0p5gCkigM4f0Z41itduHvN9C-TNLKUw",
  },
});
