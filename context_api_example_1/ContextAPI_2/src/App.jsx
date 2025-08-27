 
import './App.css'

import Navbar from './userprovider/NavBar';
import Profile from './userprovider/Profile';
import Settings from './userprovider/Settings';
import Footer from './userprovider/Footer';
import { UserProvider } from './userprovider/UserContext';

function App() { 

  return (
    <UserProvider>
      <Navbar />
      <Profile />
      <Settings />
      <Footer />
    </UserProvider>
  )
}

export default App
