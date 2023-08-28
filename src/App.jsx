import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import Note from '../Components/Note';

import { UserProvider} from '../Components/UserContext';
import Application from '../Components/Application';
import LoginForm from '../Components/loginAndRegister/LoginForm';



function App() {

  return (

<UserProvider>
<BrowserRouter>
          <Routes>

              <Route path='/' element={<Application/>}/>

              <Route path='/register' element={<LoginForm/>}/>

            <Route path='/notes/:id' element={<Note/>}/>


          </Routes>
      </BrowserRouter>


</UserProvider>  



  )
}

export default App