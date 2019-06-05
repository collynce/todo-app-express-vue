import axios from 'axios'

const url = 'http://localhost:3000/tasks'

class TaskService {
    static getData() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url)
                const data = res.data
                console.log(res)
                resolve(
                    data.map(task => ({
                        ...task,
                        created_at: new Date(task.created_at)
                    }))
                )
            } catch(err){
                reject(err)
            }
        })
    }

    static createTask(task) {
        return axios.post(url), {
            task,
            status
        }
    }

    static deleteTask(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default TaskService