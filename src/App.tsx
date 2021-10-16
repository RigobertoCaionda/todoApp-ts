import * as C from './App.styles';
import {useState} from 'react';
import {Item} from './types/item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';
const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pao na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: true}
  ]);//Quer dizer que o tipo desse useState e o Item, e um array de Item (Isso e TS)
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  return (
    <C.Container>
       <C.Area>
         <C.Header>Lista de tarefas</C.Header>
         <AddArea onEnter={handleAddTask}/>
         {list.map((item, index)=>(
            <ListItem item={item} key={index} onChange={handleTaskChange}/>
          ))}
       </C.Area>
    </C.Container>
    );
}
export default App;