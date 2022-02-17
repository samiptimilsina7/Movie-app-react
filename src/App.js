import logo from './logo.svg';
import './App.css';
import { Landing } from './pages/Landing';
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>} />
      </Routes> */}
      <AppRoutes/>
    </div>
  );
}

export default App;
