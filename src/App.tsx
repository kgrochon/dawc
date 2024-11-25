import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Calender from './components/Calender';
import Media from './components/Media';
import { tabs } from './components/util/data';

function App() {
  const [tab, setTab] = useState("About");
  return (
    <div className="DAWC">
      <Header setTab={setTab} tabs={tabs} />
      { tab === "About" && <About /> }
      { tab === "Calender" && <Calender /> }
      { tab === "Media" && <Media /> }
      { tab === "Contact" && <Contact /> }
    </div>
  );
}

export default App;
