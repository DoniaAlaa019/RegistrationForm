import React from "react";
import { Button } from "reactstrap";
import "./opportunity.css";
import { AiOutlinePlus } from 'react-icons/ai';
import { LiaPhoneSolid } from 'react-icons/lia';


function Contact() {
  return (
    <div className="m-5">
      <div
        color="white"
        className="container-fluid bg-white  border border-0 shadow rounded-2"
      >
        <div
          color="white"
          className="row text-black border border-0 shadow pb-2 pt-2"
        >
          <p className="col text-start">
            <LiaPhoneSolid className="me-2 mb-1"/>
            Contacts
          </p>
          <div className="col text-end">
            <Button prefix="" className="  buttonSave shadow">
              <AiOutlinePlus className="me-2 mb-1"/>
              Add Contact
            </Button>
          </div>
        </div>
        <div className="row bg-light text-black border border-0 shadow  pb-2 pt-2 rounded-bottom">
          <p className="statmentText text-center ">No Contacts Assigned Yet</p>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
