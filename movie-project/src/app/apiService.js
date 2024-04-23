import axios from 'axios'

const apiService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

apiService.interceptors.request.use(
    (request) => {
        console.log("Start request", request)
        return request
    },
    function (error) {
        console.log("Error: ", { error })
        return Promise.reject(error)
    }
);

apiService.interceptors.response.use(
    (response) => {
        console.log("Start request", response)
        return response.data
    },
    function (error) {
        console.log("Error: ", { error })
        const message = error?.message || 'Unknown error';
        return Promise.reject({ message })
    }
);

export default apiService;