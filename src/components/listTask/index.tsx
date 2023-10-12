import { dataMock } from '../../mock/tasksMock';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Container, SearchWrapper } from "./styles";
import BasicModal from "../modal";
import { useState } from 'react';

const ListTask = () => {

    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState()
    const [filter, setFilter] = useState("")

    let id = ""


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const text: any = document.getElementById(id)

        if (event.target.checked) {
            text.style.color = "grey"
            text.style.textDecoration = "line-through"
        } else {
            text.style.color = "black"
            text.style.textDecoration = "none"
        }
    };

    function renderList(element: any, key: number) {
        return (
            <Container key={element.id}>
                <FormGroup>
                    <FormControlLabel id={element.task}
                        control={<Checkbox onChange={(e) => {
                            id = element.task
                            handleChange(e)
                        }} />}
                        label={element.task}
                    />
                </FormGroup>
                <Button
                    color="warning"
                    variant="contained"
                    onClick={() => {
                        setData(element)
                        setOpenModal(true)
                    }}
                >
                    Editar
                </Button>
            </Container>
        )
    }


    return (
        <>
            <SearchWrapper>
                <TextField
                    label="Pesquisar"
                    variant="filled"
                    color="success"
                    onChange={(e) => setFilter(e.target.value)}
                />
            </SearchWrapper>
            {filter !== "" ?
                <>
                    {dataMock.filter((item) => item.task.toLowerCase().includes(filter.toLowerCase())).map(renderList)}
                </>
                :
                <>
                    {dataMock.map(renderList)}
                </>
            }
            {openModal &&
                <BasicModal
                    setOpenModal={setOpenModal}
                    data={data}
                />
            }
        </>
    )
}

export default ListTask