import React from "react";
import classes from "./ShowDetails.module.css";
import profileIcon from "../media/my-image1.JPG";
import qrCode from "../media/qr-code-gdf740dfb2_1280.png";
const DUMMYDATA = [
  {
    email: "varitanta@gmail.com",
    name: "Varitant",
    RollNo: 20001003131,
    Year: "2nd year",
    Branch: "Computer Engineering",
  },
];
const ShowDetails = () => {
  return (
    <React.Fragment>
      <div className={`${classes.background}`}>
        <div className="text-8xl text-center text-white p-10">
          #User Details
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-12 p-10 md:grid-cols-2 md:gap-72 ">
          <div className="max-w-md rounded overflow-hidden shadow-2xl md:justify-self-end">
            <img
              className="w-full rounded-full p-10"
              src={profileIcon}
              alt="Profile Icon"
            ></img>
            <div className="font-sans px-6 py-4 text-gray-600">
              <div className="text-3xl mb-2">{DUMMYDATA[0].name}</div>
              <div className="text-2xl mb-2">{DUMMYDATA[0].RollNo}</div>
              <div className="text-2xl mb-2">{DUMMYDATA[0].email}</div>
              <div className="text-2xl mb-2">{DUMMYDATA[0].Branch}</div>
              <div className="text-2xl mb-2">{DUMMYDATA[0].Year}</div>
            </div>
          </div>
          <div className="md:justify-self-start ">
          <img
            className={`h-80 shadow-2xl md:h-96 ${classes.profileIcon}`}
            src={qrCode}
          ></img>
          <div className="text-gray-500 text-xl font-sans">* scan QR code at entry gate</div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};
export default ShowDetails;
