import React, { useEffect, useState } from 'react';
import fetchFavoriteList from '../../api/favorite/fetchFavoriteList';
import axios from 'axios';
import checkbox from '../../assets/img/Checkbox.png';
import postFavoriteList from '../../api/favorite/postFavoriteList';
import { useNavigate } from 'react-router-dom';

function Favorite() {
  //전역상태관리를 통해 이름 동적으로 바꿀예정
  const [favoriteList,setFavoriteList] = useState([]);
  const [selectedItems,setSelectedItems] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetchFavoriteList();
        setFavoriteList(response.data);
      } catch (error) {
        console.error('Error fetching favorite list:', error);
      }
    };

    fetchData();
  },[])

  //console.log("categoryList 조회:",favoriteList )
  

  function handleFavoriteClick(item){
    setSelectedItems((prevItems)=>{
      if(prevItems.includes(item)){
        return prevItems.filter((selected)=>selected!==item)
      }
      else{
        return [...prevItems,item]
      }
    })
  }
  async function handleFavoriteSubmit(event){
    event.preventDefault();
    //api 호출
     try{
       const response = await postFavoriteList({userId:'lhj6364',selectedItems})
       console.log(selectedItems)
       const categoryIds = selectedItems.filter((item) => item !== null).map((item) => item.categoryId);
       console.log('categooryids: ',categoryIds)
     }
     catch(error){
       console.log(error)
     }
  
     navigate('/')
    
  }
  
 
  return (
    <form onSubmit={handleFavoriteSubmit}>
      <h2 className='favorite-header'>이승민님이 관심있는 분야는 ?</h2>
      <ul className='favorite-wrap'>
        {favoriteList.map((category)=> 
        <li key={category.categoryId} className={`favorite-li ${selectedItems.includes(category) ? 'selected' : ''}`} onClick={() => handleFavoriteClick(category)}>
          {category.categoryName}
          {selectedItems.includes(category.categoryName)&&<img src={checkbox} alt='checkbox' className='checkbox'/> }
          
          </li>)}
        
      </ul>
      <button type="submit" className='checkbutton'>확인</button>
    </form>
  )
}

export default Favorite