import { Link } from 'react-router-dom';

function Feedback() {
    return (
        <section className="w-full mt-8 mb-4 mt-8 flex justify-center mb-4">
            <div className="w-1170 flex justify-between leading-loose text-base  text-gray-400">
                <div className="md:w-1/4 px-4 flex flex-col justify-center items-center">
                    <p className="">Nhấp vào đây để phản hồi, đánh giá dịch vụ và nhận 1 phần quà từ McDonald’s</p>
                    <button className="md:w-56 md:h-12 bg-primary rounded-full mt-3">
                        <a
                            href="https://gbwsurvey.com/ws/(S(zyiuzs31qpj0c2ow4ybsfewi))/furl-mcdvn"
                            className="text-white"
                        >
                            Chúng tôi lắng nghe bạn
                        </a>
                    </button>
                </div>
                <div className="md:w-2/3 px-4">
                    <p>
                        Nhập email
                        <br />
                        để nhận thông tin khuyến mãi
                    </p>
                    <form className="">
                        <div className="input-group h-12 flex rounded-full overflow-hidden my-2">
                            <div className="flex-1 rounded-full overflow-hidden  border-gray-300 border rounded-tr-none rounded-br-none ">
                                <input type="text" className="w-full h-full p-2"></input>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary w-20 text-white border-0 hover:bg-gray-300 hover:text-black"
                            >
                                Gửi
                            </button>
                        </div>
                    </form>
                    <p>Bằng việc nhấn gửi, bạn đã đồng ý với các Điều kiện & Điều khoản của chúng tôi.</p>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
