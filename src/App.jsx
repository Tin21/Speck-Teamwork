import Layout from './components/Layout/Layout';
import UserAvatar from './assets/images/user-avatar.jpg';

function App() {
  return (
    <>
      <Layout imgSrc={UserAvatar} imgAlt={'User avatar'} />
    </>
  );
}

export default App;
