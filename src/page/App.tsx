import InputComp from "../components/input";
import ListTask from "../components/listTask";
import { useState } from 'react';


import {
  Container
} from "./styles";

const App = () => {

  const [refresh, setRefresh] = useState(0)

  return (
    <Container>
      <InputComp
        setRefresh={setRefresh}
      />
      <ListTask />
    </Container>
  );
}

export default App;
