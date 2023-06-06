import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function Slider() {
    const handleDotClick = (onClickHandler, isSelected) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className="border border-solid border-primary rounded-full w-4 h-4 mx-2 cursor-pointer"
                style={{
                    background: isSelected ? 'var(--primary)' : 'transparent',
                }}
            />
        );
    };
    return (
        <section>
            <Carousel showArrows={true} showStatus={false} showThumbs={false} renderIndicator={handleDotClick}>
                <div className="h-full">
                    <Link to="/thuc-don" className="block h-full">
                        <img
                            src="https://mcdonalds.vn/uploads/2018/banner-slider/MDS_3ga_homeslide.jpg"
                            alt="Slide 1"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/thuc-don" className="block h-full">
                        <img
                            src="https://mcdonalds.vn/uploads/2018/banner-slider/bm51bg30_homeslide.jpg"
                            alt="Slide 2"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/thuc-don" className="block h-full">
                        <img src="https://mcdonalds.vn/uploads/2018/banner-slider/MDS_homeslide.jpg" alt="Slide 3" />
                    </Link>
                </div>
                <div>
                    <Link to="/thong-tin/tai-ung-dung-mcdonals" className="block h-full">
                        <img src="https://mcdonalds.vn/uploads/2018/banner-slider/GMAL_homeslide.jpg" alt="Slide 4" />
                    </Link>
                </div>
            </Carousel>
        </section>
    );
}

export default Slider;
