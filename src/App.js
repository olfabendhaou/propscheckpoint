import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App" style={{ alignItems:'center'}}>
      <Profile  Fullname='Ben Dhaou Olfa' Age = {34} Profession='Ingénieure éléctromécanique'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="profile" />
      </Profile>
    </div>
  );
}

export default App
