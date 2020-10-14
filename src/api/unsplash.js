import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wBSWaiPaPlpXY2XyAl_TvvheMCCiLsZ9bm4QQGJWVKc",
  }
});
