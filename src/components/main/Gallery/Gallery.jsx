import { useState } from 'react';

import video1 from '../../../sources/gallery/1.mp4';
import video2 from '../../../sources/gallery/2.mp4';
import video3 from '../../../sources/gallery/3.mp4';
import video4 from '../../../sources/gallery/4.mp4';

import arrowRight from '../../../sources/arrow-right.png';

const videoLinksStable = [video1, video2, video3, video4];

function Gallery() {
    const [videoCount, setVideoCount] = useState(0);
    const [videoLinksDynamic, setVideoLinksDynamic] = useState([video1, video2, video3, video4])

    const handleMoveSlider = () => {
        setVideoLinksDynamic((prevArr) => {
            const newArr = [...prevArr];
            newArr.push(videoLinksStable[videoCount]);
            newArr.shift();
            return newArr;
        })
        setVideoCount((prevCount) => (prevCount + 1) % videoLinksStable.length);
    }
    return (
        <section className="container" id="gallery">
            <h2>Галерея</h2>
            <div className="gallery-container">
                <div className="gallery-wrapper">
                    {videoLinksDynamic.map((video) => (
                        <div key={video} className="video-wrapper">
                            <video playsInline webkit-playsinline="true" autoPlay={true} loop muted controls>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    ))}
                </div>
                <button onClick={() => handleMoveSlider()}><img src={arrowRight} alt="Стрілка направо" /></button>
            </div>
        </section>
    )
}

export default Gallery;
