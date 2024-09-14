import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import WhyPage from './pages/WhyPage';
import WorkingProcess from './pages/WorkingProcess';
import ContactPage from './pages/ContactPage';
import "./assets/styles/global.css"

function App() {
  return (
 <div className='App'>
  <HomePage/>
  <AboutPage/>
  <ServicePage/>
  <WhyPage/>
  <WorkingProcess/>
  <ContactPage/>
   </div>
  );
}

export default App;
