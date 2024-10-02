import React from "react";
import Card from "./Card";
import high from "../assets/Img - High Priority.svg";
import low from "../assets/Img - Low Priority.svg";
import medium from "../assets/Img - Medium Priority.svg";
import urgent from "../assets/SVG - Urgent Priority colour.svg";
import nopriority from "../assets/No-priority.svg";
import add from "../assets/add.svg";
import dot from "../assets/3 dot menu.svg";
import { getUserName } from "../utils/grouping";

const GroupedByPriority = ({ groupedTasksByPriority, users }) => {
  return (
    <div style={{ display: "flex", gap: "0px" }}>
      {Object.keys(groupedTasksByPriority).map((priority) => (
        <div key={priority} style={{ width: "280px" }}>
          <div style={{ display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
          <div style={{display:"flex", marginLeft:"20px", alignItems: "center", gap:"8px"}}>
            <div> <img src={priority === "4" ? urgent : priority === "3" ? high : priority === "2" ? medium : priority === "1" ? low : nopriority } alt = "img"/> </div>
            <h3 className="card-group">{priority === "4" ? "Urgent" : priority === "3" ? "High" : priority === "2" ? "Medium" : priority === "1" ? "Low" : "No priority" }</h3>
          </div>
          <div style={{display:"flex", marginRight:"20px", alignItems: "center", gap:"8px"}}>
            <div> <img src={add} alt = "img"/> </div>
            <div> <img src={dot} alt = "img"/> </div>
          </div>
          </div>
          {groupedTasksByPriority[priority].map((task) => (
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

export default GroupedByPriority;