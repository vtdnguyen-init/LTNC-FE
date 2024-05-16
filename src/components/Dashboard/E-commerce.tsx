"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import { useState, useEffect } from "react";
import { Patient, Staff } from "@/api_library/managehospital";
const ECommerce: React.FC = () => {
  const [staff, setStaff] = useState(0);
  const [patientInHospital, setPatientInHospital] = useState(0);

  const numberStaff = async () => {
    const OJ = new Staff();
    try {
      const response = await OJ.findAllStaff();
      setStaff(response.data.length);
    } catch (e) {
      // console.log(e);
    }
  };
  const numberPatientInHospital = async () => {
    const OJ = new Patient();
    try {
      const response = await OJ.findPatientsInQueue();
      console.log(response);
      setPatientInHospital(
        Object.keys(response.data.CAR).length +
          Object.keys(response.data.DERMA).length +
          Object.keys(response.data.PED).length +
          Object.keys(response.data.GEN).length +
          Object.keys(response.data.OTO).length +
          Object.keys(response.data.OPH).length,
      );
      console.log(patientInHospital);
    } catch (e) {
      // console.log(e);
    }
  };
  useEffect(() => {
    // numberPatient();
    numberStaff();
    numberPatientInHospital();
  }, [staff, patientInHospital]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats
          title="Total patient"
          total={patientInHospital.toString()}
        >
          <svg
            fill="#006eff"
            width="107px"
            height="107px"
            viewBox="0 0 32.00 32.00"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
            className="fill-primary dark:fill-white"
            version="1.1"
            xmlSpace="preserve"
            stroke="#006eff"
            strokeWidth="0.00032"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M9.731,14.075c-1.387,0.252 -2.676,0.921 -3.687,1.932c-1.309,1.309 -2.044,3.084 -2.044,4.935l0,4.039c0,1.657 1.343,3 3,3c4.184,-0 13.816,-0 18,-0c1.657,-0 3,-1.343 3,-3l0,-4.039c0,-1.851 -0.735,-3.626 -2.044,-4.935c-1.011,-1.011 -2.3,-1.68 -3.687,-1.932c0.468,-0.939 0.731,-1.997 0.731,-3.117c0,-3.863 -3.137,-7 -7,-7c-3.863,0 -7,3.137 -7,7c0,1.12 0.263,2.178 0.731,3.117Zm11.169,1.88c-1.262,1.239 -2.993,2.003 -4.9,2.003c-1.907,0 -3.638,-0.764 -4.9,-2.003c-0.04,0.005 -0.08,0.007 -0.12,0.007c-1.321,0 -2.588,0.525 -3.521,1.459c-0.934,0.934 -1.459,2.201 -1.459,3.521c0,0 0,4.039 0,4.039c0,0.552 0.448,1 1,1l18,-0c0.552,-0 1,-0.448 1,-1c-0,-0 0,-4.039 0,-4.039c0,-1.32 -0.525,-2.587 -1.459,-3.521c-0.933,-0.934 -2.2,-1.459 -3.521,-1.459c-0.04,0 -0.08,-0.002 -0.12,-0.007Zm-4.9,-9.997c2.76,0 5,2.241 5,5c0,2.76 -2.24,5 -5,5c-2.76,0 -5,-2.24 -5,-5c0,-2.759 2.24,-5 5,-5Z"></path>
              <path d="M20,20.008l-1,-0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1l1,-0l0,1c-0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-1l1,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-1,-0l0,-1c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l0,1Z"></path>
            </g>
          </svg>
        </CardDataStats>

        <CardDataStats title="Total doctors" total={staff.toString()}>
          <svg
            className="fill-primary dark:fill-white"
            width="32"
            height="32"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
              fill=""
            />
            <path
              d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
              fill=""
            />
            <path
              d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
              fill=""
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Patient/Doctor ratio"
          total={(patientInHospital / staff).toFixed(2).toString()}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21,11H17.06a.78.78,0,0,0-.21,0l-.17,0a1.3,1.3,0,0,0-.15.1,1.67,1.67,0,0,0-.16.12,1,1,0,0,0-.09.13,1.32,1.32,0,0,0-.12.2v0l-1.6,4.41L10.39,4.66a1,1,0,0,0-1.88,0L6.2,11H3a1,1,0,0,0,0,2H6.92L7.15,13l.15,0a.86.86,0,0,0,.16-.1,1.67,1.67,0,0,0,.16-.12l.09-.13a1,1,0,0,0,.12-.2v0L9.45,7.92l4.16,11.42a1,1,0,0,0,.94.66h0a1,1,0,0,0,.94-.66L17.79,13H21a1,1,0,0,0,0-2Z"
              className="fill-primary dark:fill-white"
            />
          </svg>
        </CardDataStats>
      </div>
    </>
  );
};

export default ECommerce;
