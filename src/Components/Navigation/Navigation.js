import React from "react";

const Navigation = () => {

  const navItems = ["Welcome", "Photo Gallery", "Weather Information", 
    "Community Blog", "Contact Us", "Attractions", "Events", "Accomodation"];
  const navList = navItems.map((nav,index) => <li key={index}>{nav}</li>);

  return (
    <div>
      <h3>Navigation</h3>
      <ul>{navList}</ul>
    </div>
    );
};

export default Navigation;