import React from "react";
import Card from "./Card";
import Backlog from "../assets/Backlog.svg";
import todo from "../assets/To-do.svg";
import add from "../assets/add.svg";
import Done from "../assets/Done.svg";
import inprogress from "../assets/in-progress.svg";
import dot from "../assets/3 dot menu.svg";
import { getUserName } from "../utils/grouping";

const GroupedByStatus = ({ groupedTasksByStatus, users }) => {
  return (
    <div style={{ display: "flex", gap: "0px" }}>
      {Object.keys(groupedTasksByStatus).map((status) => (
        <div key={status} style={{ width: "300px" }}>
          <div style={{ display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
          <div style={{display:"flex", marginLeft:"20px", alignItems: "center", gap:"8px"}}>
            <div> <img src={status === "Todo" ? todo : status === "In progress" ? inprogress : Backlog } alt = "img" /> </div>
            <h3 className="card-group">{status}</h3>
          </div>
          <div style={{display:"flex", marginRight:"20px", alignItems: "center", gap:"8px"}}>
            <div> <img src={add} alt = "img"/> </div>
            <div> <img src={dot} alt = "img"/> </div>
          </div>
          </div>
          {groupedTasksByStatus[status].map((task) => (
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

export default GroupedByStatus;