import {Routes,Route} from "react-router-dom";
import Login_strona from "./strony/LOGIN/login.js";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login_strona/>}/>
    </Routes>
  );
}

export default App;
