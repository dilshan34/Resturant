import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8z-zXRIyiY_RTNLsq-G8srCd__avJj1Z13ReUesoAfGbOVaEeznDCNLzE5wG9y3dbjQAUIy0nwOpMu3IrzLzIN8mlmOnWqVxbFStey6pS-UmwyF-TRCpIyozToDdYXYx",
  },
});
