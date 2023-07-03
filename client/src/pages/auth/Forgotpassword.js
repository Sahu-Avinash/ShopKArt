import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate ,useLocation } from "react-router-dom";
import "../../styles/register.css";
import { useAuth } from "../../context/auth";


  
 

const Forgotpassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [auth,setAuth] = useAuth()
   
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer
        });
        if ( res && res.data.success) {
          toast.success(res.data.message);
          
          navigate("/login");
        } 
       
        else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(`Something went wrong`);
      }
    };
  return (
    <Layout title={'Forgot Password - ShopKart'}>
         <div className="form-container">
        <h1>Reset password</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
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
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            ></label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New Password"
              required
            />
          </div>
         
        
          <div className="mb-3">
            <input
              type="test"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your first SChool name"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
            

        

          <div className="mb-3">
          <button type="submit" className="btn btn-primary">
           Reset
          </button>
         </div>
          
        </form>
      </div>
    </Layout>
  )
}

export default Forgotpassword
