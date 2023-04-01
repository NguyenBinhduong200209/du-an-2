import React from 'react'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListHome from "./listHome";
import './Home.css'

const Home = () => {
const [listHome, setListHome] = useState([]);
const [dongia, setDongia] = useState('');
const [title, setTitle] = useState('');
const [image, setImage] = useState('');

useEffect(() => {
    fetch("https://64266701d24d7e0de46f54f7.mockapi.io/api/v1/listbestseller")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListHome(data);
      });
  }, []); 

  const handleChangeName = (e) =>{
    setDongia(e.target.value);
}
const handleChangeTitle = (e) =>{
  setTitle(e.target.value);
}
const handleChangeImage = (e) =>{
  setImage(e.target.value);
}
const handleAddNewhome = (e) =>{
  const NewProductHome = {
    dongia: dongia,
    title: title,
    image: image,
  };
  fetch('https://64266701d24d7e0de46f54f7.mockapi.io/api/v1/listbestseller', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(NewProductHome),
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (data){
    console.log(data);
  }
  );
};   


  return (
    <div>
        <div className='home '>
            <div className='HomeTop'>
                <div className='bigtitel'>
                    Đặt bánh sinh nhật lấy ngay tại Hải Dương
                </div>
                <div >
                    <ul className='container'>
                        <li> Hầu hết các loại bánh sinh nhật đều được lấy ngay trong khoảng 20 phút</li>
                        <li> Bánh sinh nhật sẽ được hỗ trợ giao tận nhà và " Miễn phí giao hàng"</li>
                        <li> Tất cả các đơn hàng từ 200k trở lên sẽ được miễn phí ship trong bán kính 10 km</li>
                        <li> Bạn có thể đặt bánh trực tiếp qua website ,Facebook Hotline hoặc trực tiếp tại cửa hàng</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='smalltitel '>
                   Bánh kem
                </div>
                
                <div className="box-container">
                 {listHome.map((list) => {
                        return (
                            <ListHome
                             title={list.title}
                                 dongia={list.dongia}
                                image={list.image}
            
                    />  
                        );     
                    })
                    } 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home