import logo from './logo.svg';
import './App.css';
import { AppRoutes } from "./routes/AppRoutes";
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>} />
      </Routes> */}
      <MainLayout/>
    </div>
  );
}

export default App;
