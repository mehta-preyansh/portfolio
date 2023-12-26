import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import displayPicture from '../../resources/profile.jpg'


const Profile = () => {
  useEffect(()=>{
    const image = document.querySelector("#profilePicture")
    const loaded = ()=>{
      image.classList.add("visible")
    }
    if (image.complete){
      loaded()
    }
    else{
      image.addEventListener('load', loaded)
    }
  },[])
  return (
    <Image id='profilePicture' src={displayPicture} alt=""/>
  )
}
const Image = styled.img`
  opacity: 0;
  transition: all 0.3s ease;
  scale: 1.2;
  transition: all 1s ease-in-out;
  width: 346px;
  object-fit: cover;
  object-position: center;
  &:hover{
    scale: 1;
  }
  &.visible{
    opacity: 1;
  }
`
export default Profile