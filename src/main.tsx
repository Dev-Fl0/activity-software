import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './utils/context/userContext';

import App from './components/App/App';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
