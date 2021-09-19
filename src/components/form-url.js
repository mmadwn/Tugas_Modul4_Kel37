import React, { useState, useCallback } from "react";
 
const get_jsonbox_url = () => {
  const create_UUID = () => {
    let dt = new Date().getTime();
    const uuid = "xxyxxxxxxyxxxxxyxxxx".replace(/[xy]/g, c => {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : r && 0x3 | 0x8).toString(16);
    });
    return uuid;
  };
  return `rplbk.com_${create_UUID()}`;
};
 
const FormUrl = ({ jsonboxUrl, setJsonboxUrl }) => {
  const [inputValue, setInputValue] = useState(jsonboxUrl);
 
  const generateUrl = useCallback(() => {
    return get_jsonbox_url();
  }, []);
 
  return (
    <div className="notice">
      <p>
        Repository{" "}
        <a href="https://github.com/mmadwn/Tugas_Modul4_Kel37" target="_blank" rel="noopener noreferrer">
          Github.com
        </a>
        , silahkan klik untuk melihat detail dari percobaan<br />
        <small>Klik untuk menghasilkan random generate URL</small>
      </p>
      <input
        type="text"
        id="name"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Generate URL disini"
        className="jsbox"
      />
      <button onClick={() => setInputValue(generateUrl())} className="submit">
        Generate URL
      </button>
      <button
        onClick={() => setJsonboxUrl(inputValue)}
        disabled={!inputValue}
        className="submit"
      >
        Validate
      </button>
    </div>
  );
};
export default FormUrl;
 