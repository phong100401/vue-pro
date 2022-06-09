import axios from "axios";

const URL_CATEGORIES = "http://localhost:8888/api/v1/orders";

class OrderService {

    getAll(accountId){
        return axios.get(URL_CATEGORIES + "/cart",{headers:{'accountId' : accountId}});
    }
    addToCart(accountId,body){
        return axios.post(URL_CATEGORIES + "/addToCart" ,body
            , {headers:{'accountId' : accountId}}
        );
    }
    removeItem(param,accountId){
        return axios.post(URL_CATEGORIES + "/remove",null,
            {headers:{'accountId' : accountId},params:param}
        );
    }
    proceedOrder(accountId,orderDto){
        return axios.get(URL_CATEGORIES + "/proceedOrder"
            ,{headers:accountId}
            ,orderDto
        );
    }
    getOrders(accountId){
        return axios.get(URL_CATEGORIES + "/proceedOrder"
            ,{headers:accountId}
        );
    }

}

export default new OrderService();