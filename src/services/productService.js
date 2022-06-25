import axios from "axios";

export  default class ProductService {
getProducts(){
    return axios.get("https://localhost:5001/api/products/getall")
}

getProductById(productId){
    return axios.get("https://localhost:5001/api/products/getbyproductId?productId="+productId)
}
}