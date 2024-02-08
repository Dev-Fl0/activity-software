import React, { ReactElement, createContext, useMemo, useState } from 'react';

import { UserType } from '../../@types';

interface UserContextType {
  userConnect: UserType | null;
  setUserConnect: React.Dispatch<React.SetStateAction<UserType | null>>;
}

const UserContext = createContext<UserContextType>({
  userConnect: null,
  setUserConnect: () => {},
});

function UserContextProvider({ children }: { children: ReactElement }) {
  const [userConnect, setUserConnect] = useState<UserType | null>(null);

  const contextValue = useMemo(
    () => ({
      userConnect,
      setUserConnect,
    }),
    [userConnect, setUserConnect]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
