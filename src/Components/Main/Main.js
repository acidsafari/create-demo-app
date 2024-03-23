import React from "react";
import Welcome from "./Welcome";
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog"; // Imported this for the blog
import ContactUs from "./ContactUs";

const Main = () => {
// Added blogText have a blog to display, you could use a JSON of blogs if you like
  const blogText = `This is a web app to provide information about the local community for locals and tourists.`; 
  return (
    <div className="Main">
      <Welcome />
      <Weather />
      <CommunityBlog />
        <div className="Blog"> 
          <Blog text={blogText}/>
        </div>
      <ContactUs />
    </div>
  );
};

export default Main;
