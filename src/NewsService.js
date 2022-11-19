import axios from "axios";

const newsService = axios.create({
  baseURL: "https://newsapi.org/v2/",
  timeout: 3000,
  headers: { "X-Custom-Header": "abc" },
  maxRedirects: 3,
});

export default newsService;
