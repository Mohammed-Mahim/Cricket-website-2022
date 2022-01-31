import './App.css';
import Header from './Components/Header/Header';
import TeamGroup from './Components/TeamGroup/TeamGroup';
import TeamOwner from './Components/TeamOwner/TeamOwner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TeamGroup></TeamGroup>
      <TeamOwner></TeamOwner>
    </div>
  );
}

export default App;
