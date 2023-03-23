import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route  } from "react-router-dom"
import Todos from './component/Todos';
import Todo from './component/Todo';
import TodosContextProvider from './contexts/TodosContext'
import SignUpUser from './component/SignUpUser';
import Login from './component/Login';
import UserProfile from './component/UserProfile';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <TodosContextProvider>
      <Router>
        <Routes>
          {/* <Route path='/auth' element={<NavBar/>}/> */}
          <Route path='/' element= {<Todos/>}/>
          <Route path='/todos/:id' element={<Todo/>}/>
          <Route path='/register' element={<SignUpUser/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
        </Routes>
      </Router>
      </TodosContextProvider>
    </div>
  );
}

export default App;
