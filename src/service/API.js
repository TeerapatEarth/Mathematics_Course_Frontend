const BASE_URL = "http://localhost:5000"
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