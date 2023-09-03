import React from "react";
import { Button } from "reactstrap";
import "./opportunity.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TbUserEdit, TbUsersMinus } from "react-icons/tb";
import person from "../assests/person_image.jpg";

function TeamSpase() {
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
            <BsPeople className="me-2 mb-1 " id="filp" />
            Team Space
          </p>
          <div className="col text-end">
            <Button prefix="" className="  buttonSave shadow">
              <AiOutlinePlus className="me-2 mb-1" />
              Add Users
            </Button>
          </div>
        </div>
        <div className="row bg-light text-black border border-0 shadow  rounded-bottom pe-5 ps-5">
          <div className="col-4">
            <div className="row">
              <div className="col-1 mt-2 me-1">
                <img
                  src={person}
                  width={32}
                  height={32}
                  className="image border border-1 border-dark"
                />
              </div>
              <div className="col text-start m-0">
                <p>
                  Mostafa Osman
                  <br />
                  <p className="statmentText fw-light">Holding Company CEO</p>
                </p>
              </div>
            </div>
          </div>
          <div className="col m-2 d-flex flex-row-reverse">
            <div className="row">
              <div className="col text-end">
                <p className="text-color ">Assignee</p>
              </div>
              <div className="col text-end">
                <TbUserEdit />
              </div>
              <div className="col text-end">
                <TbUsersMinus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSpase;
