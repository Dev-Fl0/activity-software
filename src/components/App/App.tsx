
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';

// Technician
import InitApp from './InitApp';
import InitAdmin from './InitAdmin';
import Planning from '../pages/Technician/Planning/Planning';
import Profil from '../pages/Technician/Profil/Profil';

// Admin
import Home from '../pages/Admin/Home/Home';
import Dashboard from '../pages/Admin/DashBoard/Dashboard';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App" role="application">
        <Routes>
          {/* LOGIN */}
          <Route path="/" element={<Login />} />
          {/* TECHNICIAN */}
          <Route path="/app" element={<InitApp />}>
            <Route path="/app/planning" element={<Planning />} />
            {/* <Route path="/app/createTask" element={<CreateTask />} /> */}
            <Route path="/app/profil" element={<Profil />} />
          </Route>
          {/* ADMIN */}
          <Route path="/admin" element={<InitAdmin />}>
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            {/* <Route
              path="/admin/technician/:technicianId"
              element={<CollaboratorManager />}
            />
            <Route path="/admin/createProfil" element={<CreateProfil />} /> */}
          </Route>
          {/* NOT FOUND */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <ToastContainer autoClose={2000} className="z-0" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
