import {
    Container
} from "./styles"

import { useForm, Controller, SubmitHandler } from "react-hook-form"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import EditTaskService from "../../services/editTask";

interface IFormInput {
    task: string
}

const EditTask = ({data, setOpenModal}: any) => {

    const id = data.id
    const [valueInput, setValueInput] = useState(data.task)

    const { control, handleSubmit } = useForm({
        defaultValues: {
            task: "",
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        EditTaskService({
            id: id,
            task: valueInput
        })
        setOpenModal(false)
    }


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="task"
                    control={control}
                    render={({ field }) => <TextField
                        required={true}
                        value={valueInput}
                        label="Tarefa"
                        variant="outlined"
                        onChange={(e) => setValueInput(e.target.value as any)}
                        />}
                />
                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                >
                    Editar
                </Button>
            </form>
        </Container>
    )
}

export default EditTask