import React, { useState } from "react";

const NavigationToo = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("welcome");
  const navItems = [
    { id: 1, title: "Welcome", name: "Welcome" },
    { id: 2, title: "Photo Gallery", name: "PhotoGallery" },
    { id: 3, title: "Weather Information", name: "WeatherInformation" },
    { id: 4, title: "Community Blog", name: "CommunityBlog" },
    { id: 5, title: "Contact Us", name: "ContactUs" },
    { id: 6, title: "Attractions", name: "Attractions" },
    { id: 7, title: "Events", name: "Events" },
    { id: 8, title: "Acommodation", name: "Acommodation" },
  ];

  return (
    <div className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`#${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul> 

      <div className="NavigationMenus">
        <form method="get">
            <input type="search" name="query" placeholder="Search for" />
            <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default NavigationToo;