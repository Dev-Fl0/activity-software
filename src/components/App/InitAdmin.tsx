import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/context/userContext';
import { TasksProvider } from '../../utils/context/tasksContext';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

export default function InitAdmin() {
  const navigate = useNavigate();
  const { userConnect } = useContext(UserContext);

  useEffect(() => {
    // Redirigez l'utilisateur vers la page d'accueil si userConnect est null
    if (userConnect?.role !== 'Admin') {
      navigate('/');
    }
  }, [navigate, userConnect]);

  return (
    <>
      <Navbar />
      <TasksProvider>
        <Main>
          <Outlet />
        </Main>
      </TasksProvider>
    </>
  );
}
