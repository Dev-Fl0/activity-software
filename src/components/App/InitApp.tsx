import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/context/userContext';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

export default function InitApp() {
  const navigate = useNavigate();
  const { userConnect } = useContext(UserContext);

  useEffect(() => {
    // Redirigez l'utilisateur vers la page d'accueil si userConnect est null
    if (userConnect === null) {
      navigate('/');
    }
  }, [navigate, userConnect]);

  // Si userConnect est null, le useEffect redirigera l'utilisateur et cette partie du code ne sera pas exécutée
  return (
    <>
      <Navbar usersData={null} />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
