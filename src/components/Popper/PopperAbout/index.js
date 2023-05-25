import './PopperAbout.scss';
import { Link } from 'react-router-dom';
import DefaultPopper from '../DefaultPopper';

const aboutList = [
    {
        to: '/timhieu/lich-su',
        src: 'https://mcdonalds.vn/uploads/userfiles/images/news_1536502569/lich-su.png',
        content: 'Lịch sử',
    },
    {
        to: '/gioi-thieu-mcdonalds',
        src: 'https://mcdonalds.vn/uploads/userfiles/images/news_1536502623/gioi-thieu.png',
        content: 'Giới thiệu',
    },
    {
        to: '/tim-hieu/xuat-xu',
        src: 'https://mcdonalds.vn/uploads/userfiles/images/news_1536502653/xuat-xu.png',
        content: 'Xuất xứ',
    },
    {
        to: '/tim-hieu/nha-cung-cap',
        src: 'https://mcdonalds.vn/uploads/userfiles/images/news_1536502683/nha-cung-cap.png',
        content: 'Nhà cung cấp',
    },
    {
        to: '/tim-hieu/dich-vu',
        src: 'https://mcdonalds.vn/uploads/userfiles/images/news_1536502733/dich-vu.png',
        content: 'Dịch vụ ',
    },
    {
        to: '/tim-hieu/an-toan-thanh-pham',
        src: 'https://mcdonalds.vn/uploads/userfiles/images/news_1536502792/an-toan-thuc-pham.png',
        content: 'An toàn thực phẩm',
    },
];

function PopperAbout() {
    return (
        <DefaultPopper>
            <div className="w-1170 flex">
                {aboutList.map((item, index) => {
                    return (
                        <div className="text-white w-1/6 px-4">
                            <Link className="" to={item.to}>
                                <img className="mt-9" src={item.src} alt={item.content} />
                                <p className="mt-3 text-lg font-light">{item.content}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </DefaultPopper>
    );
}

export default PopperAbout;
