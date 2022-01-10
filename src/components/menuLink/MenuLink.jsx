import React from "react";
import { useSelector } from "react-redux";
import "./menulink.css";

export default function MenuLink({ icon, text }) {
  const user = useSelector((state) => state.user)
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && `( ${user.name})`}
  
      </span>
    </div>
  );
}
