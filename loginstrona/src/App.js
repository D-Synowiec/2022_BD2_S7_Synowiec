import { Routes, Route } from "react-router-dom";
import Login_strona from "./strony/LOGIN/login.js";
import Bad_login_strona from "./strony/LOGIN/bad_login.js";
import Logout_strona from "./strony/LOGIN/logout.js";
import Home_stron from "./strony/HOME/home.js";
import Gallery_strona from "./strony/GALLERY/gallery.js";
import Galleries from "./strony/GALLERIES/galleries.js";
import Categories from "./strony/CATEGORIES/categories.js";
import Category_strona from "./strony/CATEGORY/category.js";
import Settings from "./strony/SETTINGS/settings.js";
import SearchPhoto from "./strony/SEARCHPHOTO/searchphoto.js";
import UploadPhoto from "./strony/UPLOADPHOTO/uploadPhoto.js";
import Photo from "./strony/PHOTO/photo.js";
import Register from "./strony/REGISTER/register.js";
import Logout_strona1 from "./strony/SETTINGS/bad_login/bad_login.js";
import Useristnieje_strona from "./strony/REGISTER/bad_user/bad_user.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login_strona />} />
        <Route path="/incorrect_login" element={<Bad_login_strona />} />
        <Route path="/logout" element={<Logout_strona />} />
        <Route path="/wrong_password_options" element={<Logout_strona1 />} />
        <Route path="/home" element={<Home_stron />} />
        <Route path="/" element={<Login_strona />} />
        <Route path="/user_exists" element={<Useristnieje_strona />} />
        {/* <Route path="/gallery" element={<Gallery_strona/>}/> */}
        <Route path="/search-photo" element={<SearchPhoto />} />
        <Route path="/gallery/:id" element={<Gallery_strona />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category_strona />} />
        <Route path="/options" element={<Settings />} />
        <Route path="/uploadPhoto/:id" element={<UploadPhoto />} />
        <Route path="/photo/:id" element={<Photo />} />
        <Route path="/register/" element={<Register />} />

        {/* pierwsza strona to to samo logowanie trzeba to zmienić
      poza tym nwm jak sie robi tu komentarze edit:już wiem*/}
      </Routes>
    </>
  );
}
// dziala -DK
// dziala -JW
export default App;
