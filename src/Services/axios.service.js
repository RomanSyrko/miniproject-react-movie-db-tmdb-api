import axios from "axios";

import baseURL from "../Constants/urls";

const axiosService = axios.create({
    baseURL,
    params: {
        api_key : "03e5b86491161ca67107cd23e569553f"
    },
});

export {axiosService}