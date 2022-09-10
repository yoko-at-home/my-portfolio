import axios from "axios";

const bgClient = axios.create({
  baseURL: process.env.BlOG_API_URL,
  headers: {
    "X-MICROCMS-API-KEY": `${process.env.BLOG_API_KEY}`,
  },
});
const pfClient = axios.create({
  baseURL: process.env.PORTFOLIO_BASE_URL,
  headers: {
    "X-MICROCMS-API-KEY": `${process.env.PORTFOLIO_API_KEY}`,
  },
});

const twClient = axios.create({
  baseURL: `https://api.twitter.com/2/users/${process.env.TWITTER_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
  },
});

export { bgClient, pfClient, twClient };
