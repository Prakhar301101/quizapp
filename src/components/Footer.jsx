import React from "react";



export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bottom-container flex p-4 h-[8vh] text-md   bg-teal-900 text-white justify-center items-center">
      ©
      <a target="blank" href="https://github.com/Prakhar301101">
        {" "}
        &nbsp; &nbsp;Prakhar Pandey&nbsp;&nbsp;
      </a>
      {year}
    </div>
  );
}
