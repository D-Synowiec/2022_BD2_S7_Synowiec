import {Routes,Route} from "react-router-dom";
import Login_strona from "./strony/LOGIN/login.js";
import Bad_login_strona from "./strony/LOGIN/bad_login.js";
import Logout_strona from "./strony/LOGIN/logout.js";
import Home_stron from "./strony/HOME/home.js";
import Gallery_strona from "./strony/GALLERY/gallery.js";
import Galleries from "./strony/GALLERIES/galleries.js";
import Categories from "./strony/CATEGORIES/categories.js"
import Category_strona from "./strony/CATEGORY/category.js";
import Settings from "./strony/SETTINGS/settings.js"
import SearchPhoto from "./strony/SEARCHPHOTO/searchphoto.js";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login_strona/>}/>
      <Route path="/incorrect_login" element={<Bad_login_strona/>}/>
      <Route path="/logout" element={<Logout_strona/>}/>
      <Route path="/home" element={<Home_stron/>}/>
      <Route path="/" element={<Login_strona/>}/>
      {/* <Route path="/gallery" element={<Gallery_strona/>}/> */}
      <Route path="/search-photo" element={<SearchPhoto/>}/>
      <Route path="/gallery/:id" element={<Gallery_strona/>}/>
      <Route path="/galleries" element={<Galleries/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/category/:id" element={<Category_strona/>}/>
      <Route path="/settings" element={<Settings/>}/>

      {/* pierwsza strona to to samo logowanie trzeba to zmienić
      poza tym nwm jak sie robi tu komentarze edit:już wiem*/}
    </Routes>
    </>
  );
}
// dziala -DK
// dziala -JW
export default App;
