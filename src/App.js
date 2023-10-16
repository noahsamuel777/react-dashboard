
import './App.css';
import RightSide from './components/Rightside/RightSide';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
              <div className="App">

              
           <div className="appGlass">
            
              <Sidebar/>

              <Main/>
           
              <RightSide/>
               
           </div>
              
              </div>
    
    </>
  );
}

export default App;
