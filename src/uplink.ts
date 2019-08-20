import axios, { AxiosResponse } from "axios";

export default {
  getNetworks: (callback: (response: AxiosResponse) => void) => {
    axios
      .get(process.env.VUE_APP_API_PATH + "networks", {})
      .then(response => callback(response));
  }
};
