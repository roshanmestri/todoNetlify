import {  useEffect ,useState ,useContext ,createContext} from "react";
import axios from "axios";

export const todosContext = createContext();
const TodosContextProvider = ({children}) =>{
    const [todos, setTodos] = useState([])
    const[user , SetUser] = useState({})
    const getTodosData=()=>{
        axios.get(' https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10').then((res) => {
            setTodos(res.data);
          });  
    }
    useEffect(() => {
        getTodosData();
      }, []);
    const value = {
        todos,
        getTodosData,
        user,
        SetUser
    }
   
      
    return (
        <todosContext.Provider value={value}>{children}</todosContext.Provider>
    )
};
export const UseTodo =() => useContext(todosContext);
export default TodosContextProvider