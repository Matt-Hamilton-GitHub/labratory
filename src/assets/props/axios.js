import axios from "axios";

const instance = axios.create({
    baseURL: "https://dry-temple-96048.herokuapp.com",
})

export default instance;