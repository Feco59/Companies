const URL = "http://localhost:8080/api";

const APIService = {
    get: async path => {
        const options = {
            method: 'GET'
        };
        return sendRequest(URL + path,options)
    }
}

const sendRequest = async(url,options) => {
    try {
        const response = await fetch(url,options);
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

export default APIService;