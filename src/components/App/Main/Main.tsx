import React, { useContext } from 'react';
import { UserContext } from '../../../utils/context/userContext';

import { avatar } from '../../../assets';

import './Main.scss';

export default function Main({ children }: { children: React.ReactNode }) {
  const { userConnect } = useContext(UserContext);
  return (
    <div className="main">
      <div className="main-user">
        <h1 className="main-user__title">
          {userConnect?.firstname} {userConnect?.lastname}
        </h1>
        <img className="main-user__avatar" src={avatar} alt="avatar" />
      </div>
      <div>{children}</div>
    </div>
  );
}
