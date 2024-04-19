import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';




const photogalleryList = [
    {
      "title": "Photo 1",
      "index": 1,
      "location": "Location 1",
      "photo": "dummy"
    },
    {
        "title": "Photo 2",
        "index": 2,
        "location": "Location 2",
        "photo": "dummy"
    },
    {
        "title": "Photo 3",
        "index": 3,
        "location": "Location 3",
        "photo": "dummy"
    },
    {
        "title": "Photo 4",
        "index": 4,
        "location": "Location 4",
        "photo": "dummy"
    },
    {
        "title": "Photo 5",
        "index": 5,
        "location": "Location 5",
        "photo": "dummy"
    }
]
/*
const baseChildren = (photogalleryList) => <div>{
    photogalleryList.map(createCarouselItemImage)
}</div>;
*/
/*
const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';
const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: boolean('showStatus', true, tooglesGroupId),
    showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    showThumbs: boolean('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', true, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    swipeable: boolean('swipeable', true, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    autoFocus: boolean('autoFocus', false, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 2000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 500, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    ariaLabel: text('ariaLabel', undefined),
    
});
*/

const PhotoG2 = (photogalleryList) => {

    const baseChildren = (photogalleryList) => <div>{
        photogalleryList.map(createCarouselItemImage)
    }</div>;

    const getConfigurableProps = () => ({
        showArrows: true,
    });

    const createCarouselItemImage = (index, photo, title = {}) => (
        <div key={index}>
            <img src={`/images/${photo}.png`} />
            <p className="legend">{`${title}`}</p>
        </div>
    );



    return (
        <div className="PhotoG2" id="PhotoG2">
            <h3>Carousel</h3>

            <Carousel {...getConfigurableProps()}>
                {baseChildren.props.children}
            </Carousel>
        </div>
    );
}

export default PhotoG2;
/*
import React, { Component } from "react";
import EnhancedComponent from "./Search.js";
  
export class PhotoG2 extends Component {
    render() {
      
        const createCarouselItemImage = (index, photo, title = {}) => (
            <div key={index}>
                <img src={`/images/${photo}.png`} />
                <p className="legend">{`${title}`}</p>
            </div>
        );
        
        const baseChildren = (photogalleryList) => <div>{
            photogalleryList.map(createCarouselItemImage)
            }</div>;
        
        const getConfigurableProps = () => ({
        showArrows: true,
        });
      return (
        <div className="PhotoG2">
            <div>
                <h3>Carousel</h3>
            </div>
            <div>
                <Carousel {...getConfigurableProps()}>
                {baseChildren.props.children}
                </Carousel>
            </div>
        </div>
      );
    }
}
export default EnhancedComponent(PhotoGallery);
*/
