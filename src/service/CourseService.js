import axios from 'axios'
import API from "./API"
axios.defaults.withCredentials = true

class CourseService {
    static async getAllCourse() {
        return await axios.get(API.Course.allCourse)
    }
    static async getOneCourse(id){
        return await axios.get(API.Course.getOneCourse+id)
    }
    static async createCourse(payload){
        return await axios.post(API.Course.createCourse, payload)
    }
    static async updateCourse(payload, id){
        return await axios.put(API.Course.updateCourse+id, payload)
    }
    static async deleteCourse(id){
        return await axios.delete(API.Course.deleteCourse+id)
    }
}

export default CourseService