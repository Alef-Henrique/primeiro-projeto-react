import React, {useState} from "react"
import { v4 as uuid } from "uuid"

import { Container, ToDoList, Imput, Button} from './styles'

function App() {
  const [list, setList] = useState([{id: uuid(), task: 'Nada'}])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function clicouNoBotao() {
    setList([ ...list, {id: uuid(), task: inputTask}])
  }

  return (
    <Container>
      <ToDoList>
      <Imput onChange={inputMudou} placeholder="O que tenho para fazer..." />
      <Button onClick={clicouNoBotao}>Adicionar</Button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
      </ToDoList>
    </Container>
    
  );
}

export default App;