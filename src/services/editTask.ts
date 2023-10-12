import { dataMock } from "../mock/tasksMock"

interface ITaskArgs {
    id: number,
    task: string
}


const EditTaskService = (data: ITaskArgs) => {

    dataMock[data.id - 1] = {
        id: data.id,
        task: data.task
    }

}

export default EditTaskService