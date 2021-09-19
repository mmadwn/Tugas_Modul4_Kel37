import React from "react";
 
const Footer = ({ jsonboxUrl }) => (
  <footer>
    {jsonboxUrl ? (
      <>
        <a
          href={`/${
            jsonboxUrl.split("/")[3]
          }`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Dashboard
        </a>
        {" - "}
      </>
    ) : (
      ""
    )}
    <a href="https://github.com/mmadwn/Tugas_Modul4_Kel37" target="_blank" rel="noopener noreferrer">
      Github - Tugas_Modul4_Kel37
    </a>
  </footer>
);
 
export default Footer;