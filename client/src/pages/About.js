import { Icon } from '@iconify/react';
import avinash from "../images/Avinash.jpg"
import Layout from "../components/Layout/Layout";
import React from "react";
import "../styles/About.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';;




const About = () => {

  const visitInstagram = () => {
    window.location = "https://www.instagram.com/sahu_avinash_07/";
  };

  return (
   <Layout>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={avinash}
              alt="Founder"
            />
            <Typography>Avinash Sahu(Founder)</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a E-Commerce wesbite(ShopKart) made by @Avinash. 
              
            </span>
          </div>
        
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.instagram.com/sahu_avinash_07/" target="blank">
            <Icon icon="mdi:instagram" className="instagramSvgIcon " />
            </a>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default About; 
