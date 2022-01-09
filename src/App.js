import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// pages
import Home from './pages/home/Index';
import About from './pages/about/Index';
import Users from './pages/users/Index';

function App() {
  return (

    <Router>
      <Routes>
        {/* <Route path="/" element={<App />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="teams" element={<Teams />}> */}
            {/* <Route path=":teamId" element={<Team />} /> */}
            {/* <Route path="new" element={<NewTeamForm />} /> */}
            {/* <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        {/* </Route> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user" element={<Users/>}/>
        <Route path="*" element={<>404 Page</>}/>
      </Routes>
    </Router>
  );
}

export default App;
