import React from "react";
 
const Item = ({ item, setDelMessage }) => {
  const created = new Date(item._createdOn).toLocaleString();
  const updated = item._updatedOn
    ? new Date(item._updatedOn).toLocaleString()
    : "";
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #dedede",
        padding: "1rem",
        marginBottom: "1rem"
      }}
    >
      <div>
        <strong>{item.name} :</strong> {item.desc}
      </div>
      <small>
        created: {created}
        {updated ? ` - updated: ${updated}` : ""}
      </small>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <button onClick={() => setDelMessage(item._id)}>x</button>
      </div>
    </div>
  );
};
 
export default Item;