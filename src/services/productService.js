import axios from "axios";

export  default class ProductService {
getProducts(){
    return axios.get("https://localhost:5001/api/products/getall")
}
}