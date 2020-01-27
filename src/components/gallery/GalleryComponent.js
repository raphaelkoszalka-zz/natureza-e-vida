import './GalleryComponent.css';
import React, { Component } from 'react';
import { Photos } from "./Photos";

class GalleryComponent extends Component {

    render() {

        const photos = Photos.map(function(photo) {
            const style = {
                borderRadius: "7px",
                backgroundImage: "url(" + photo['src'] + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                marginRight: "10px",
                height: "200px",
                width: "200px",
                marginTop: "10px"
            };
            return (
                <div className="col-md-4 picture" style={style} key={Math.random()} />
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
