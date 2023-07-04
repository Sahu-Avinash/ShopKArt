import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  useEffect(()=>
  {
     const {email,name,phone,address} =auth.user
     setName(name)
     setAddress(address)
     setEmail(email)
     setPhone(phone)
  },[auth?.user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if(data?.error)
      {
        toast.error(data.error)
      }
      else{
        setAuth({...auth,user: data?.updatedUser})
        let ls= localStorage.getItem("auth")
        ls= JSON.parse(ls)
        ls.user = data.updatedUser
        localStorage.setItem("auth",JSON.stringify(ls))
        toast.success("Profile Updated Successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong`);
    }
  };
  return (
    <Layout title={"Your profile"}>
      <div className="conatiner-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <h1>User Profile</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                  
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="example@gmail.com"
                
                    disabled
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                    
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your phoneNo."
                   
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your Address"
                    
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>

                <button type="submit" className="btn btn-primary">
                   UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
