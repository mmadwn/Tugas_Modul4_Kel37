import React, { useState } from "react";
import ReactDOM from "react-dom";
import useJsonbox from "./hooks/useJsonbox";
import Form from "./components/form";
import FormUrl from "./components/form-url";
import Item from "./components/item";
import Notice from "./components/notice";
import Footer from "./components/footer";

import "./styles.css";

// IMPORTANT
// Get your JsonBox on https://jsonbox.io and assign your url to `yourJsonboxUrl` bellow
const yourJsonboxUrl = "";

function App() {
  const [jsonboxUrl, setJsonboxUrl] = useState(yourJsonboxUrl);
  const { messages, isLoading, setNewMessage, setDelMessage } = useJsonbox(
    jsonboxUrl
  );
  return (
    <div className="App">
      <h1>Tugas MODUL 4 Kelompok 37</h1>

      {jsonboxUrl ? (
        <>
          <Form setNewMessage={setNewMessage} />
          <div>
            {!isLoading && messages.length
              ? messages.map(item => (
                  <Item
                    key={item._id}
                    item={item}
                    setDelMessage={setDelMessage}
                  />
                ))
              : ""}
            {isLoading && <code>Waiting...</code>}
            {!isLoading && !messages.length && (
              <em>
                <code>No Message yet...</code>
              </em>
            )}
          </div>
        </>
      ) : (
        <>
          <FormUrl setJsonboxUrl={setJsonboxUrl} />
          <hr />
          <Notice />
        </>
      )}
      <Footer jsonboxUrl={jsonboxUrl} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
