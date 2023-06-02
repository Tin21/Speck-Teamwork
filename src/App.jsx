import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import MyResults from './pages/MyResults';
import Reset from './pages/Reset';
import LectureDetails from './pages/LectureDetails';
import Lectures from './pages/Lectures';
import Colleagues from './pages/Colleagues';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout />
      <main>
        <Routes>
          <Route path={'/'} element={<Profile />} />
          <Route path={'/achievements'} element={<Achievements />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/myresults'} element={<MyResults />} />
          <Route path={'/reset'} element={<Reset />} />
          <Route path={'/colleagues'} element={<Colleagues />} />
          <Route path={'/lectures'} element={<Lectures />} />
          <Route path={'/lectures/:id'} element={<LectureDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
