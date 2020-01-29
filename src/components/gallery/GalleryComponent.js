import './GalleryComponent.css';
import React, { Component } from 'react';
import { Photos } from "./Photos";

class GalleryComponent extends Component {

    render() {
        const photos = Photos.map(function(photo, index) {

            const id = index;
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
                zIndex: "10",
                color: "white !important",
                fontSize: "5.5em",
                fontWeight: "bold"
            };

            const overflowStyle = {
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.4)",
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
                <div className="text-center" key={id}>
                    <div className="col-md-2 picture" style={style}                    >
                        <div
                            style={overflowStyle}
                            id={id}
                        >
                            <svg viewBox="0 0 500 500">
                                <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                                <text width="500" fill='#FFF'>
                                    <textPath xlinkHref="#curve" textAnchor="right">
                                        {photo['title']}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
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
