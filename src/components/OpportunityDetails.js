import React from "react";
import { Button, Label, Input , Badge } from "reactstrap";
import "./opportunity.css";
import { PiBagSimpleThin } from "react-icons/pi";
import { LiaSave } from "react-icons/lia";
import { BiSearchAlt } from "react-icons/bi";

function OpportunityDetails() {
    const ele = <Badge>New</Badge>;
  return (
    <div className="m-5 ">
      <div
        color="white"
        className="container-fluid bg-white  border border-0 shadow rounded-2"
      >
        <div
          color="white"
          className="row text-black border border-0 shadow pb-2 pt-2"
        >
          <p className="col text-start">
            <PiBagSimpleThin className="me-2 mb-1 " />
            Opportunity Details
          </p>
          <div className="col text-end">
            <Button prefix="" className="  buttonSave shadow">
              <LiaSave className="me-2 mb-1" />
              Save Opportunity
            </Button>
          </div>
        </div>
        <div className="row form bg-light text-black border border-0 shadow  pb-2 pt-2 rounded-bottom">
          <div className="row">
            <div className="col">
              <Label for="name" className="statmentText fw-bold">
                Name
              </Label>
              <Input id="name" name="name" type="name" />
            </div>
            <div className="col">
              <Label for="stage" className="statmentText fw-bold">
                Stage
              </Label>
              <Input id="stage" name="select" type="select">
                <option className="text-start">Discovery</option>
                <option className="text-start">Proposal</option>
                <option className="text-start">Negotiation</option>
                <option className="text-start">Won</option>
                <option className="text-start">Lost</option>
              </Input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <Label for="Asignee" className="statmentText fw-bold">
                Asignee
              </Label>
              <Input id="Asignee" name="select" type="select">
                <option className="text-start statmentText border border-5 border-light">
                  Search
                  <BiSearchAlt />
                </option>
                <option className="text-start">
                  Mostafa Osman
                  <BiSearchAlt />
                </option>
                <option className="text-start">Mostafa Osman</option>
                <option className="text-start">Mostafa Osman</option>
                <option className="text-start">Mostafa Osman</option>
              </Input>
            </div>
            <div className="col">
              <Label for="Company" className="statmentText fw-bold">
                Comapny
              </Label>
              <Input id="Company" name="select" type="select">
                <option className="text-start statmentText border border-5 border-light">
                  Search
                  <BiSearchAlt />
                </option>
                <option className="text-start">
                  Holding Comapny
                  <BiSearchAlt />
                </option>
                <option className="text-start">Comapny X</option>
                <option className="text-start">Comapny Y</option>
                <option className="text-start">Comapny Z</option>
              </Input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <Label for="Value" className="statmentText fw-bold">
                Value
              </Label>
              <Input id="Value" name="Value" type="Value" />
            </div>
            <div className="col">
              <Label for="Client" className="statmentText fw-bold">
                Client
              </Label>
              <Input id="Client" name="select" type="name"  value={ele}>
              
              </Input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <Label for="Client Budget" className="statmentText fw-bold">
              Client Budget
              </Label>
              <Input id="Client Budget" name="Client Budget" />
            </div>
            <div className="col">
              <Label for="Contacts" className="statmentText fw-bold">
                Contacts
              </Label>
              <Input id="Contacts" name="Contacts" type="name"  value={ele}>
              
              </Input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <Label for="Proposal Submission Date" className="statmentText fw-bold">
              Proposal Submission Date
              </Label>
              <Input id="Proposal Submission Date" name="Proposal Submission Date" type="date"/>
            </div>
            <div className="col">
              <Label for="Incoming/Outgoing" className="statmentText fw-bold">
                Incoming/Outgoing
              </Label>
              <Input id="Incoming/Outgoing" name="Incoming/Outgoing" type="select">
                <option className="text-start">Incoming</option>
                <option className="text-start">Outgoing</option>
              </Input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <Label for="Due Date" className="statmentText fw-bold">
              Due Date
              </Label>
              <Input id="Due Date" name="Due" type="date" placeholder="N/A"/>
            </div>
            <div className="col">
              <Label for="Tags" className="statmentText fw-bold">
                Tags
              </Label>
              <Input id="Tags" name="Tags" type="select">
               <option>
               <p className="bg-light text-danger">lg,gl,</p>
               </option>
               <option>
               <p className="bg-light text-danger">lg,</p>
               </option>
              </Input>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default OpportunityDetails;
