export default function getHeaders() {
    const token = JSON.parse(window.localStorage.getItem("authToken"));
  
    return { authorization: "Bearer " + token.token };
  }
  