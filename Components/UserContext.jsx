import { createContext, useContext, useEffect, useState} from 'react';
import noteService from '../services/notes';
import loginService from '../services/login';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])


  const handleLogout = () => {
    setUser(null);
    noteService.setToken(null);
    window.localStorage.removeItem('loggedNoteAppUser');
  };

  const handleLogin = async (event,username, password) => {

    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      });

      if (user) {
        window.localStorage.setItem(
          'loggedNoteAppUser',
          JSON.stringify(user)
        );

        noteService.setToken(user.token);
        setUser(user);
        console.log('user', user)
      }
    } catch (e) {
      console.error(e);
      setError('Incorrect user or password');
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const contextValue = {
    user,
    error,
    setError,
    handleLogin,
    handleLogout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
