import React, { useContext } from 'react';
import { Avatar } from '@chakra-ui/react';
import { UserContext } from '../../../../utils/context/userContext';

import './Profil.scss';

export default function Profil() {
  const { userConnect } = useContext(UserContext);
  const user = userConnect;

  return (
    <div className="profil-content">
      <div className="profil">
        <div className="profil-header">
          <Avatar className="profil-header__avatar" />
          <h2 className="profil-header__name">
            {user?.firstname} {user?.lastname}
          </h2>
        </div>
        <div className="profil-main">
          <p className="profil-main__p">{user?.firstname}</p>
          <p className="profil-main__p">{user?.lastname}</p>
          <p className="profil-main__p">{user?.mail}</p>
          <p className="profil-main__p">{user?.phone}</p>
        </div>
      </div>
    </div>
  );
}
