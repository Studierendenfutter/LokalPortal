import Axios from "axios";

import config from "../../config";

const url = config.BACKEND_URL + "/canteenUsers/login";

export default async function postAdminLogin(data) {
  try {
    const response = await Axios.post(url, data);
    console.log(response)
    window.localStorage.setItem(
      "authToken",
      JSON.stringify({ token: response.data.token })
    );
    console.log(response.data.token)
  } catch (err) {
    console.log(err);
    return {};
  }
}
