import { useNavigate } from 'react-router-dom';
import {
  Tabs,
  TabList,
  Tab,
  ChakraProvider,
  TabIndicator,
} from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

import { useContext, useState } from 'react';
import { UserContext } from '../../../utils/context/userContext';

import { avatar } from '../../../assets';

import './Navbar.scss';

export default function Navbar() {
  const { userConnect, setUserConnect } = useContext(UserContext);
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleClick = (name: string) => {
    if (userConnect?.role !== 'Admin') {
      navigate(`/app/${name}`);
    } else {
      navigate(`/admin/${name}`);
    }
    setShowNavbar(false);
  };

  const handleLogout = () => {
    setUserConnect(null);
  };

  const adminNavbar = (
    <>
      <button
        className="menu-logo"
        type="button"
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      >
        {showNavbar ? (
          <RxCross1 className="menu-logo" />
        ) : (
          <IoMdMenu className="menu-logo" />
        )}
      </button>
      <div className={showNavbar ? 'navbar-content active' : 'navbar-content'}>
        <img className="navbar-avatar" src={avatar} alt="avatar" />
        <Tabs
          size="lg"
          className="navbar"
          isLazy
          position="relative"
          orientation="vertical"
        >
          <TabList className="navbar-list" alignItems="start">
            <Tab
              color="black"
              _selected={{
                color: 'darkgray',
                bg: '#f2f5f7',
                borderLeft: '2px solid black',
              }}
              _hover={{
                bg: '#d4dee4',
                color: 'black',
              }}
              className="navbar-list__link"
              name="home"
              onClick={() => handleClick('home')}
            >
              Accueil
            </Tab>
            <Tab
              color="black"
              _selected={{
                color: 'darkgray',
                bg: '#f2f5f7',
                borderLeft: '2px solid black',
              }}
              _hover={{
                bg: '#d4dee4',
                color: 'black',
              }}
              className="navbar-list__link"
              name="dashboard"
              onClick={() => handleClick('dashboard')}
            >
              Dashboard
            </Tab>
            <TabIndicator
              mt="0px"
              height="2px"
              bg="#000000"
              borderRadius="1px"
            />
          </TabList>
        </Tabs>
        <button className="navbar-button" type="button" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    </>
  );

  const technicianNavbar = (
    <>
      <button
        className="menu-logo"
        type="button"
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      >
        <IoMdMenu className="menu-logo" />
      </button>
      <div className={showNavbar ? 'navbar-content active' : 'navbar-content'}>
        <img className="navbar-avatar" src={avatar} alt="avatar" />
        <Tabs
          size="lg"
          className="navbar"
          isLazy
          position="relative"
          orientation="vertical"
        >
          <TabList className="navbar-list" alignItems="start">
            <Tab
              color="black"
              _selected={{
                color: 'darkgray',
                bg: '#f2f5f7',
                borderLeft: '2px solid black',
              }}
              _hover={{
                bg: '#d4dee4',
                color: 'black',
              }}
              className="navbar-list__link"
              name="planning"
              onClick={() => handleClick('planning')}
            >
              Planning
            </Tab>
            <Tab
              color="black"
              _selected={{
                color: 'darkgray',
                bg: '#f2f5f7',
                borderLeft: '2px solid black',
              }}
              _hover={{
                bg: '#d4dee4',
                color: 'black',
              }}
              className="navbar-list__link"
              name="profil"
              onClick={() => handleClick('profil')}
            >
              Profil
            </Tab>
          </TabList>
        </Tabs>
        <button className="navbar-button" type="button" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    </>
  );
  return (
    <ChakraProvider>
      {userConnect?.role !== 'Admin' ? technicianNavbar : adminNavbar}
    </ChakraProvider>
  );
}
