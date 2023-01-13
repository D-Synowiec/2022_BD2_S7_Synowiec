import {Routes,Route} from "react-router-dom";
import Login_strona from "./strony/LOGIN/login.js";
import Home_strona from "./strony/HOME/home.js";
import Gallery_strona from "./strony/GALLERY/gallery.js";
import Bar from "./strony/HOME/komponenty/NavBar.js";

function App() {
  return (
    <>
    <Bar/>
    <Routes>
      <Route path="/login" element={<Login_strona/>}/>
      <Route path="/home" element={<Home_strona/>}/>
      <Route path="/" element={<Login_strona/>}/>
      <Route path="/gallery" element={<Gallery_strona/>}/>
      {/* pierwsza strona to to samo logowanie trzeba to zmienić
      poza tym nwm jak sie robi tu komentarze edit:już wiem*/}
    </Routes>
    </>
  );
}
// dziala -DK
// dziala -JW
export default App;
