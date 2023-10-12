import { dataMock } from "../mock/tasksMock"

interface ITaskArgs {
    task: string
}


const InsertTask = (data: ITaskArgs) => {

    const id = dataMock.length + 1

    dataMock.push({
        id: id,
        task: data.task
    })
}

export default InsertTask