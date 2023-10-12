import { useForm, Controller, SubmitHandler } from "react-hook-form"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InsertTask from "../../services/insertTask";

interface IFormInput {
    task: string
}

const InputComp = ({setRefresh}: any) => {

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            task: "",
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        InsertTask(data)
        setRefresh((prev: any) => prev + 1)
        reset({
            task: ""
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="task"
                control={control}
                render={({ field }) => <TextField
                    required={true}
                    label="Tarefa"
                    variant="outlined"
                    {...field} />}
            />
            <Button
                variant="contained"
                color="success"
                type="submit"
                >
                Inserir
            </Button>
        </form>
    )
}

export default InputComp