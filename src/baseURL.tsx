const BASEURL = process.env.NODE_ENV === "production"
  ? process.env.REACT_APP_BASE_URL
  : "http://localhost:5000";

export default BASEURL;
