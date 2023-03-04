// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper";
import "swiper/css";
import "swiper/css/zoom";
import "./ImageViewer.css"

interface ImageViewerProps {
    src: string
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src }) => {
    return (
        <Swiper zoom={true} modules={[Zoom]} className="img-doc-container">
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src={src}></img>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ImageViewer;