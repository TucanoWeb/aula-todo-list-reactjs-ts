import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 500px;
        align-items: center;
    }

    button {
        margin-left: 20px;
        height: 50px;
    }
`


