import "./App.css";
import ProfilePhoto from "./composant/profilephoto";
import FullName from "./composant/fullname";
import Adress from "./composant/adress";

function App() {
  return (
    <div className="App">
      <FullName />
      <br />
      <ProfilePhoto />
      <br />
      <Adress />
    </div>
  );
}

export default App;
