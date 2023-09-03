import React from "react";
import { Button } from "reactstrap";
import "./opportunity.css";
import { AiOutlinePlus } from 'react-icons/ai';
import { PiPaperclipThin } from 'react-icons/pi';

function File() {
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
            <PiPaperclipThin className="me-2 mb-1"/>
            Files
          </p>
          <div className="col text-end">
            <Button className="  buttonSave shadow">
                <AiOutlinePlus className="me-2 mb-1"/>
                Add Files
            </Button>
          </div>
        </div>
        <div className="row bg-light text-black border border-0 shadow  pb-2 pt-2 rounded-bottom">
          <p className="statmentText text-center ">No Files Uploaded</p>
          
        </div>
      </div>
    </div>
  );
}

export default File;
