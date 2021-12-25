const BASE_URL = "https://backend-mathematics.herokuapp.com"
const API = {
    Course: {
        allCourse: `${BASE_URL}/course`,
        oneCourse: `${BASE_URL}/course/`,
        createCourse: `${BASE_URL}/course/create`,
        updateCourse: `${BASE_URL}/course/`,
        deleteCourse: `${BASE_URL}/course/`
    }
}

export default API