import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Ebube" age={25} bio="React developer from Benin City" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
