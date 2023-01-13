import {Routes,Route} from "react-router-dom";
import Login_strona from "./strony/LOGIN/login.js";
import Home_strona from "./strony/HOME/home.js";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login_strona/>}/>
      <Route path="/home" element={<Home_strona/>}/>
      <Route path="/" element={<Login_strona/>}/>
      {/* pierwsza strona to to samo logowanie trzeba to zmienić
      poza tym nwm jak sie robi tu komentarze edit:już wiem*/}
    </Routes>
  );
}
// dziala -DK
export default App;
