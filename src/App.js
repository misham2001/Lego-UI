import './App.css';
import Header from './components/header';
import Crm from './components/section1/crm';

function App() {
  return (
    <div className="App">
     
      <div className="flex flex-col min-h-screen">
       
        <Header />
        
        <div className="flex-1 ">
          <Crm />
        </div>
      </div>
    </div>
  );
}

export default App;
