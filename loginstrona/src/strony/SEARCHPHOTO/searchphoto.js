import React,{useEffect,useState} from "react";
import "./searchphoto.css"
import Bar from "../../komponenty/NavBar.js";

const SearchPhoto = () => {
  const [searchFraze, setSearch] = useState();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchFraze);

    // const response = await fetch(API, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ 
    //   email: username,
    //   password: password
    //   })
    // });
    // const data = await response.json();
    // console.log(data);

    // const token = data.tokens;
    // Cookies.set("Ciastko", token, {expires: 30});
    // console.log(Cookies.get("Ciastko"));

  }

  return (
    <div className='searchphotoStrona'>
        <Bar/>
        <div className='tekst'>
            <h1 className='naglowek'>Zdjęcie:</h1>
            <div className='opis'>

            <form className='searchTab' onSubmit={handleSubmit}>
                <input className='input'
                  type="text"
                  value={searchFraze}
                  onChange={handleSearchChange}
                />
                <button className='przycisk' type="submit">Wyszukaj</button>
              </form>

            </div>
        </div>
    </div>
  )
}

export default SearchPhoto