import './App.css';
import CryptoList from './components/crypto-list/CryptoList';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <CryptoList />
      
      <Footer/>
    </div>
  );
}

export default App;
