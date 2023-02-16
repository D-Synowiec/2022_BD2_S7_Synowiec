import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import Bar from "../../komponenty/NavBar.js";
import "./photo.css"
import Tag from "./komponenty/tag.js";

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params.id);
    const [picture, setPicture]=useState(null);
    const [pictureData, setPictureData]=useState('');
    const [tagList, setTagList]=useState([]);
    const [newTagName, setNewTagName]=useState(['']);
    const [deleteTagName, setDeleteTagName]=useState(['']);
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);

    useEffect(() => {
        const API = `http://127.0.0.1:5000/api/photo/${params.id}`;
        axios.get(API, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
          .then((result) => {
            setPicture(result.data.image);
            // console.log(result.data);
          })
          .catch((error) => {
            console.error(error);
          });

          const API2 = `http://127.0.0.1:5000/api/photo/${params.id}/info`;
          axios.get(API2, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
            .then((result) => {
              setPictureData(result.data);
              setTagList(result.data.Tags);
              // console.log(result.data);
            })
            .catch((error) => {
              console.error(error);
            });
      }, [params.id]);
    
      async function handleClick1() {
        const API = `http://127.0.0.1:5000/api/photo/${params.id}`;
        axios.delete(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
      {
        // console.log('usuniete');
        navigate('/galleries');
      }).catch((error)=>{
        });
      }

      const wypisTagu = tagList.map((element, index)=>{
        return(
          <Tag 
          key={index}
          name={element.name}
          />
        )
      })  

      const handleNewTagNameChange = (event) => {
        setNewTagName(event.target.value);
        setActive(false);
      }

      const HandleSubmit = async (event) => {
        event.preventDefault();
        if(newTagName==''){
          setActive(true);
          return;
        }
        if (!newTagName.replace(/\s/g, '').length) {
          setActive(true);
        }
        else{
          const API = `http://127.0.0.1:5000/api/photo/${params.id}/tag`;
          axios.post(API, {name: newTagName, photo_id: params.id}, {'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
          {
            const API2 = `http://127.0.0.1:5000/api/photo/${params.id}/info`;
          axios.get(API2, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
            .then((result) => {
              setTagList(result.data.Tags);
              // console.log(result.data);
            })
            .catch((error) => {
              console.error(error);
            });
          }).catch((error)=>{
            // if (error.message==='Request failed with status code 409'){
            //   setActive(true);
            // }
          });
        }
      }

      const HandleSubmit2 = async (event) => {
        event.preventDefault();
        if(deleteTagName==''){
          setActive2(true);
          return;
        }
        if (!deleteTagName.replace(/\s/g, '').length) {
          setActive2(true);
        }
        else{
          const API = `http://127.0.0.1:5000/api/photo/${params.id}/tag/remove`;
          axios.post(API, {name: deleteTagName, photo_id: params.id}, {'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
          {
            const API2 = `http://127.0.0.1:5000/api/photo/${params.id}/info`;
          axios.get(API2, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
            .then((result) => {
              setTagList(result.data.Tags);
            })
            .catch((error) => {
              console.error(error);
            });
          }).catch((error)=>{
            if(error.message=='Request failed with status code 404'){
              setActive2(true);
            }
          });
    
        }
    
      }

      const handleDeleteTag = (event) => {
        setDeleteTagName(event.target.value);
        setActive2(false);
      }

    return (
        <>
            <Bar/>
            <div className="stronaPhotoDisp">
            <div className='przycisk1' style={{display:'flex', justifyContent:'space-between', marginTop:'5px'}}>
              <button className='przycisk' onClick={handleClick1} style={{width:'auto', marginLeft:'3px'}}>Usuń zdjęcie</button>
              
              <form className='nazwaNowegoTagu' onSubmit={HandleSubmit}>
                  <input className='input'
                    type="text"
                    value={newTagName}
                    onChange={handleNewTagNameChange}
                  />
                  <button className='przyciskTagow' style={{backgroundColor: active ? "rgb(200, 30, 30)" : "white"}}>Dodaj tag</button>
              </form>
            </div>
            <div className='przycisk2' style={{display:'flex', justifyContent:'end', marginTop:'5px', marginRight:'10px'}}>
              <form className='usuniecieTagu' onSubmit={HandleSubmit2}>
                  <input className='input'
                    type="text"
                    value={deleteTagName}
                    onChange={handleDeleteTag}
                  />
                  <button className='przyciskTagow2' style={{backgroundColor: active2 ? "rgb(200, 30, 30)" : "white"}}>Usuń tag</button>
              </form>
  
            </div>



              <p className="nazwaPhoto">{pictureData.name}</p>
                <div className="photoDisplay">
                    {picture ? <img className="fotka" src={picture } alt='skill issue' /> : <p>Loading...</p> }
                </div>
                <div className="opisPhoto">
                  <p className="ownerParagraph" style={{padding:'5px'}}>Autor: {pictureData.owner}</p>
                  <div className="tagDisplay" style={{padding:'5px'}}>
                    <p className="tagParagraph">Tagi:</p>
                    <div className="tagList">
                      {wypisTagu}
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Photo;