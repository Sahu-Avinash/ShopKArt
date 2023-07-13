import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import "../../styles/register.css"
import FaceIcon from '@mui/icons-material/Face'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import PhoneIcon from '@mui/icons-material/Phone'
import AddressIcon from '@mui/icons-material/Home'
import SchoolIcon from '@mui/icons-material/School'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate= useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/v1/auth/register",
        { name, email, password, phone, address ,answer}
      );
      if(res.data.success)
      {
        toast.success(res.data.message)
        navigate('/login');
      }
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong`);
    }
  };

  return (
    <Layout title={`Register in ShopKart`}>
      <div className="form-container">

        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
           <FaceIcon/>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
          <MailOutlineIcon/>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="example@gmail.com"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              
            </label>
            <LockOpenIcon/>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-3">
            <PhoneIcon/>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your phoneNo."
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
          <AddressIcon/>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Address"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
          <SchoolIcon/>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is your first school name"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
