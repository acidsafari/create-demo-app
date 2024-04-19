import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Main.css";

const PhotoGallery = () => {

  return (
    <div className="PhotoGallery" id="PhotoGallery">
      <h3>PhotoGallery</h3>
      <Carousel showArrows={true} /*onChange={onChange} 
        onClickItem={onClickItem} onClickThumb={onClickThumb}*/
        >
        <div>
          <img src="./images/dummy.png"
            alt='Photo1' />
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <img src="src/images/dummy.png"
            alt='Photo2' />
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <img src="src/images/dummy.png"
            alt='Photo3' />
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default PhotoGallery;

/*
import React, { Component } from "react";
import EnhancedComponent from "./Search.js";
const photogalleryList = [
    {
      "title": "Photo 1",
      "location": "Location 1",
      "photo": ""
    },
    {
      "title": "Photo 2",
      "location": "Location 2",
      "photo": ""
    },
    {
        "title": "Photo 3",
        "location": "Location 3",
        "photo": ""
    }
]
  
export class PhotoGallery extends Component {
    render() {
      const {searchTerm} = this.props;
      return (
        <div className="PhotoGallery">
            <div>
                <h3>Photo Gallery</h3>
            </div>
            <div>
                {photogalleryList
                .filter(photogalleryItem => `${photogalleryItem.title} ${photogalleryItem.location} ${photogalleryItem.photo}`.toUpperCase()
                .indexOf(searchTerm.toUpperCase()) >= 0)
                .map(photogalleryItem => <photogalleryCard key={photogalleryItem.id} {...photogalleryItem} />)
                }
            </div>
        </div>
      );
    }
}

export default EnhancedComponent(PhotoGallery);
*/