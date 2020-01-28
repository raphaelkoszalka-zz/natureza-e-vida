import './GalleryComponent.css';
import React, { Component } from 'react';
import { Photos } from "./Photos";

class GalleryComponent extends Component {

    // I Know the opacity change should be done by state change
    // Will do this refactor later on, this is a prototype only

    static getElement(id) {
        return document.getElementById(id);
    }

    static mouseEnter(id) {
        GalleryComponent.getElement(id).style.opacity = '1';
    }

    static mouseLeave(id) {
        GalleryComponent.getElement(id).style.opacity = '0';
    }

    render() {

        const photos = Photos.map(function(photo) {
            const style = {
                borderRadius: "7px",
                backgroundImage: "url(" + photo['src'] + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                marginRight: "10px",
                height: "220px",
                width: "220",
                marginTop: "10px",
                position: "relative",
                zIndex: "10"
            };

            const overflowStyle = {
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                zIndex: "100",
                marginRight: "10px",
                top: 0,
                left: 0,
                borderRadius: "5px",
                opacity: "1",
                color: "white",
                padding: "10px",
                transition: "opacity .25s ease-in-out"
            };

            return (
                <div className="col-md-2 picture" style={style} key={Math.random()}
                     // onMouseOut={GalleryComponent.mouseLeave(photo['src'])}
                     // onMouseEnter={GalleryComponent.mouseEnter(photo['src'])}
                >
                    <div
                        style={overflowStyle}
                        id={photo['src']}
                    >
                        <h3>{photo['src']}</h3>
                        <hr/>
                        <h5>Cras finibus nisi elit, id interdum purus eleifend in. Aliquam vel dictum tellus. Aliquam tincidunt posuere nibh, sed aliquet dui gravida ut.</h5>
                    </div>
                </div>
            );
        });

        return (
            <div id="gallery-component">
                {photos}
            </div>
        );
    }

}

export default GalleryComponent;
