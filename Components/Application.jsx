import Nav from "./Nav";
import NoteForm from "./NoteForm";
import RegisterForm from "./loginAndRegister/RegisterForm";
import { useUser } from "./UserContext"; 

export default function Application() {
  
  const { user } = useUser();

  return (
    <>
    <Nav/>
      {user
        ? <NoteForm/>
        : <RegisterForm/>
      }
    </>
  );
}
