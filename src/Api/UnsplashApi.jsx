import React from "react";
import axios from "axios";

let api= axios.create({
    baseURL:'https://api.unsplash.com/',
        headers:{
            Authorization:" Client-ID dCaeIiBzr2ZaPI35izPY25tbbechEM33imIFEEdQKLk"
        }
})
export default api;