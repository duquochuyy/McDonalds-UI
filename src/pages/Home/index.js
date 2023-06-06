import { Fragment } from 'react';
import { FeedbackLayout, SliderLayout } from '~/components/Layouts';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
    return (
        <Fragment>
            <SliderLayout />
            <div className="flex justify-center my-10">
                <div className="w-1170 min-h-screen bg-white">
                    <div className="download relative rounded overflow-hidden">
                        <img src="https://mcdonalds.vn/uploads/2018/home/1170x300-GMALpx.jpg" />{' '}
                        <div className="content text-white absolute bottom-12 left-12">
                            <p className="text-base font-light mb-3">Ưu đãi độc quyền & hơn thế nữa</p>
                            <h2 className=" text-3xl font-bold mb-4">Ứng dụng McDONALD'S</h2>
                            <button className="md:w-56 md:h-12 bg-primary rounded-full mt-3 leading-loose text-base font-light">
                                <Link to="/thong-tin/tai-ung-dung-mcdonals">TẢI ỨNG DỤNG</Link>
                            </button>
                        </div>
                    </div>
                    <div className="news flex mt-8 ">
                        <div className="md:w-1/2 mr-4">
                            <img src="https://mcdonalds.vn/uploads/2018/home/mccafe_desktop.jpg" />
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <div className="md:w-full flex">
                                <div className=" md:w-1/2 mr-4">
                                    <img src="https://mcdonalds.vn/uploads/2018/home/home-stories.jpg" />
                                </div>
                                <div className="md:w-1/2 ml-4">
                                    <img src="https://mcdonalds.vn/uploads/2018/home/hr-pc.jpg" />
                                </div>
                            </div>
                            <div className=" md:w-full mt-8">
                                <img src="https://mcdonalds.vn/uploads/2018/home/home-banner-hamburger.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="order h-72 flex justify-center">
                <div className="w-1170 px-4 relative">
                    <div className="content md:w-1/2 text-black text-center text-primary absolute top-1/2 -translate-y-1/2">
                        <h2 className="text-5xl font-bold mb-3">McDELIVERY™</h2>
                        <p className="font-light text-base">
                            Dịch vụ giao hàng của McDonald's. Đặt hàng đơn giản, giao hàng nhanh chóng.
                        </p>
                        <a href="/to-be-continue">
                            <button className="md:w-56 md:h-12 bg-white text-primary rounded-full mt-3 leading-loose text-base font-light">
                                <Link to="/thong-tin/tai-ung-dung-mcdonals">Đặt hàng ngay</Link>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <FeedbackLayout />
        </Fragment>
    );
}

export default Home;
