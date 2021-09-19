import { useContext, createContext, useState } from "react";
import "./notice.css";
 
const Warna = {
  Disclaimer: {
    text: "Link Generators digunakan untuk menghasilkan tautan web secara dinamis untuk objek dan secara otomatis",
    background: "#FFFFFF",
  },
  Message: {
    text: "Penggunaan Terbatas",
    background: "#567ACD",
  },
};
 
const WarnaContext = createContext();
 
export default function Context() {
  const [valueWarna, setValueWarna] = useState(Warna.Disclaimer);
 
  return (
    <WarnaContext.Provider value={valueWarna}>
      <div
        className="contentWrapper"
        style={{ backgroundColor: valueWarna.background }}
      >
        <Content colors={valueWarna} />
        <button
          className="Button"
          onClick={() =>
            setValueWarna(
              valueWarna === Warna.Message ? Warna.Disclaimer : Warna.Message
            )
          }
        >
          Message or Disclaimer
        </button>
      </div>
    </WarnaContext.Provider>
  );
}
 
function Content(props) {
  return (
    <div>
      <Text colors={props.colors} />
    </div>
  );
}
 
function Text(props) {
  const Warna = useContext(WarnaContext);
  return (
    <p className="titleContext"
      style={{ color: Warna.text }}>
      Notice : {Warna.text}
    </p>
  );
}