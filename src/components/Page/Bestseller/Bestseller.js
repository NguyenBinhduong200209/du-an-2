import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListBestseller from "./listBestseller";
import './Bestseller.css'
import {FireTwoTone} from '@ant-design/icons'

const Bestseller = () => {

  const [modal, setModal] = useState(false);
  const [listBestseller, setListBestseller] = useState([]);
  const [dongia, setDongia] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const toggle = () => setModal(!modal);


// useEffect API //
useEffect(() => {
  fetch("https://64266701d24d7e0de46f54f7.mockapi.io/api/v1/listbestseller")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setListBestseller(data);
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
const handleAddNewbestseller = (e) =>{
  const NewBestseller = {
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
    body: JSON.stringify(NewBestseller),
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
  <section className="bestseller" id="bestseller">
    <div className="heading">
      <div className="contenHeader"> bestseller !!!</div>
      <div className="iconBST"><FireTwoTone  color="red"/><FireTwoTone /><FireTwoTone /></div>
    </div>
    <div className="box-container">
      {listBestseller.map((list) => {
        return (
          <ListBestseller
            title={list.title}
            dongia={list.dongia}
            image={list.image}
            
          />  
        );     
      })
      } 
    </div>
    <a
      data-aos="zoom-in-left"
      data-aos-delay={1300}
      className="button-bestseller"
      onClick={toggle}
      href="#"
    >
      Up Sản phẩm
    </a>
    </section>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Thêm Ảnh</ModalHeader>
      <div className="col-12 form-group bestseller-input" id="input-bestseller">
        <label>Name:</label>
        <div className="box" data-aos="fade-up" data-aos-delay={600}>
          <form action>
            <input
              type="text"
              placeholder="enter name ..."
              className="input"
              value={dongia}
              onChange={handleChangeName}
            />
          </form>
        </div>
      </div>
      <div className="col-12 form-group bestsller-input" id="input-bestsller">
        <label>Title:</label>
        <div className="box" data-aos="fade-up" data-aos-delay={600}>
          <form action>
            <input
              type="text"
              placeholder="enter title ..."
              className="input"
              value={title}
              onChange={handleChangeTitle}

            />
          </form>
        </div>
      </div>     
      <div className="col-12 form-group bestsller-input" id="input-bestsller-image">
      <label>Image:</label>
      <div className="box" data-aos="fade-up" data-aos-delay={600}>
          <form action>
            <input
              type="text"
              placeholder="enter image address..."
              className="input"
              value={image}
              onChange={handleChangeImage}

              />
         </form>
          </div>

          </div> 

      <NavLink
        data-aos="zoom-in-left"
        data-aos-delay={1300}
        className="btn"
        id="btn-bestseller"
        onClick={handleAddNewbestseller}
        to="/Bestseller"
       

      >
        Đăng
      </NavLink>
    </Modal>
  
  
  </div>
);
};

export default Bestseller;