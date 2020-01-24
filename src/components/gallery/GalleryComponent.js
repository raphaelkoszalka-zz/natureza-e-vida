import './GalleryComponent.css';
import React, { Component, useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Photos";

class GalleryComponent extends Component {

    render() {
        const [currentImage, setCurrentImage] = useState(0);
        const [viewerIsOpen, setViewerIsOpen] = useState(false);
        const openLightbox = useCallback((event, { photo, index }) => {
            setCurrentImage(index);
            setViewerIsOpen(true);
        }, []);

        const closeLightbox = () => {
            setCurrentImage(0);
            setViewerIsOpen(false);
        };

        return (
            <div id="gallery-component">
                <h1>teste</h1>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        );
    }

}

export default GalleryComponent;
