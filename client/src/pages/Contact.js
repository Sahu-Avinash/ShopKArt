import React from "react";
import "../styles/contact.css";
import Button from '@mui/material/Button';
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:avinash5052002@gmail.com">
        <Button>Contact: avinash5052002@gmail.com</Button>
      </a>
    </div>
    </Layout>
  );
};

export default Contact;
