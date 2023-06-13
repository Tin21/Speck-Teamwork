// app.jsx
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProfilePage from './pages/Profile/ProfilePage';
import Achievements from './pages/Achievements/Achievements';
import MyResults from './pages/MyResults/MyResults';
import Reset from './pages/Reset/Reset';
import LectureDetails from './pages/LectureDetails/LectureDetails';
import Lectures from './pages/Lectures/Lectures';
import Colleagues from './pages/Colleauges/Colleauges';
import Layout from './components/Layout/Layout';
import UserAvatar from './assets/images/user-avatar.jpg';

function App() {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<Layout imgSrc={UserAvatar} imgAlt={'User avatar'} />}
      >
        <Route path={'/profile'} element={<ProfilePage />} />
        <Route path={'/achievements'} element={<Achievements />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/my-results'} element={<MyResults />} />
        <Route path={'/reset'} element={<Reset />} />
        <Route path={'/colleauges'} element={<Colleagues />} />
        <Route path={'/lectures'} element={<Lectures />} />
        <Route path={'/lectures/:id'} element={<LectureDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
