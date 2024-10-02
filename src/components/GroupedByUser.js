
import React from "react";
import Card from "./Card";
import avatar from "../assets/avatar.png";
import add from "../assets/add.svg";
import dot from "../assets/3 dot menu.svg";
import { getUserName } from "../utils/grouping";

const GroupedByUser = ({ groupedTasksByUser, users }) => {
  return (
    <div style={{ display: "flex", gap: "0px" }}>
      {Object.keys(groupedTasksByUser).map((userName) => (
        <div key={userName} style={{ display: "flex", width: "280px", flexDirection:"column"}}>
          <div style={{ display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
          <div style={{display:"flex", marginLeft:"20px", alignItems: "center", gap:"8px"}}>
            <div> <img src={avatar} alt = "img" className="user-avatar-box" /> </div>
            <h3 className="card-group">{userName}</h3>
          </div>
          <div style={{display:"flex", marginRight:"20px", alignItems: "center", gap:"8px"}}>
            <div> <img src={add} alt = "img"/> </div>
            <div> <img src={dot} alt = "img"/> </div>
          </div>
          </div>
          
          {groupedTasksByUser[userName].map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              priority={task.priority}
              userName={getUserName(task.userId, users)}
              tag={task.tag[0]} // Fetch user name based on userId
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupedByUser;
