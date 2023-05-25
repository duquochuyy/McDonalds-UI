import './Footer.scss';
import { Link } from 'react-router-dom';

const itemList = [
    {
        title: 'Tìm hiểu',
        to: '/chinh',
        content: [
            { to: '/lich-su', content: "Lịch sử McDonald's" },
            { to: '/gioi-thieu-mcdonalds', content: "Giới thiệu McDonald's Việt Nam" },
            { to: '/xuat-xu', content: 'Xuất xứ' },
            { to: '/nha-cung-cap', content: 'Nhà cung cấp' },
            { to: '/dich-vu', content: 'Dịch vụ' },
            { to: '/an-toan-thuc-pham', content: 'An toàn thực phẩm' },
        ],
    },
    {
        title: 'Cơ hội nghề nghiệp',
        to: '/to-be-continue',
        content: [{ to: '/thong-tin-tuyen-dung', content: 'Thông tin tuyển dụng' }],
    },
];

const socialList = [
    {
        href: 'https://www.facebook.com/McDonaldsVN/',
        src: 'https://mcdonalds.vn/uploads/2018/icon/facebook.png',
        alt: 'facebook',
    },
    {
        href: 'https://www.instagram.com/mcdonaldsvn/',
        src: 'https://mcdonalds.vn/uploads/2018/icon/instagram.png',
        alt: 'instagram',
    },
    {
        href: 'https://www.youtube.com/user/McDonaldsVN/featured',
        src: 'https://mcdonalds.vn/uploads/2018/icon/youtube.png ',
        alt: 'youtube',
    },
];

function Footer() {
    return (
        <footer className="flex justify-center mt-8">
            <div className="h-60 w-1170">
                <hr className="border" />
                <div className="flex">
                    {itemList.map((item, index) => {
                        return (
                            <div key={index} className="md:w-1/4 px-4 leading-loose text-base">
                                <p className="font-bold my-2">{item.title}</p>
                                {item.content.map((subItem, subIndex) => {
                                    return (
                                        <div key={`${index}_${subIndex}`} className="text-gray-400 w-full">
                                            <Link to={`${item.to}${subItem.to}`} className="block w-full">
                                                {subItem.content}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                    <div className="md:w-1/4 px-4 leading-loose text-base">
                        <p className="font-bold my-2">Chính sách</p>
                        <div className="text-gray-400 w-full">
                            <Link to="/" className="block w-full">
                                Các câu hỏi thường gặp
                            </Link>
                        </div>
                        <div className="text-gray-400 w-full">
                            <Link to="/" className="block w-full">
                                Điều khoản và điều kiện
                            </Link>
                        </div>
                        <div className="text-gray-400 w-full">
                            <Link to="/" className="block w-full">
                                Chính sách và quyền riêng tư
                            </Link>
                        </div>
                        <div>
                            <p className="font-bold my-2">Ngôn ngữ</p>
                            <div className="flex">
                                <img
                                    className="mt-2 mr-2"
                                    src="https://mcdonalds.vn/public/images/icon/united-states.png"
                                    alt="English"
                                />
                                <img
                                    className="mt-2 mr-2"
                                    src="https://mcdonalds.vn/public/images/icon/vietnam.png"
                                    alt="Vietnamese"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 px-4 leading-loose text-base">
                        <p className="font-bold my-2">Contact</p>
                        <div className="text-gray-400 w-full">
                            <Link to="/lien-he" className="block w-full">
                                Contact Us
                            </Link>
                        </div>
                        <div className="text-gray-400 w-full">
                            <Link to="/" className="block w-full">
                                Feedback on service
                            </Link>
                        </div>
                        <div className="flex">
                            {socialList.map((item, index) => {
                                return (
                                    <a key={index} href={item.href} className="mt-4 mr-2">
                                        <img src={item.src} alt={item.alt} className="w-10" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
