import './PopperMenu.scss';
import { Link } from 'react-router-dom';
import DefaultPopper from '../DefaultPopper';

const menuList = [
    {
        title: 'Menu chính',
        to: '/chinh',
        content: [
            { to: '/phan-an-pvm', content: 'Phần ăn PVM' },
            { to: '/banh-burgers', content: 'Bánh Burgers' },
            { to: '/ga-ran', content: 'Gà rán' },
            { to: '/thuc-uong', content: 'Thức uống' },
            { to: '/trang-mieng', content: 'Tráng miệng' },
            { to: '/phan-an-cho-be', content: 'Phần ăn cho bé' },
            { to: '/mon-an-nhe', content: 'Món ăn nhẹ' },
            { to: '/com', content: 'Cơm' },
            { to: '/combo', content: 'Combo' },
        ],
    },
    {
        title: 'Điểm tâm',
        to: '/diem-tam',
        content: [
            { to: '/phan-an-pvm', content: 'Phần ăn PVM' },
            { to: '/banh-muffin', content: 'Bánh Muffin' },
            { to: '/nuoc-uong', content: 'Nước uống' },
            { to: '/trang-mieng', content: 'Tráng miệng' },
            { to: '/phan-an-tre-em', content: 'Phần ăn trẻ em' },
            { to: '/mon-an-nhe', content: 'Món ăn nhẹ' },
        ],
    },
    {
        title: 'McCafe',
        to: '/mccafe',
        content: [
            { to: '/thuc-uong-nong', content: 'Thức uống nóng' },
            { to: '/thuc-uong-da', content: 'Thức uống đá' },
            { to: '/sua-chua-trai-cay', content: 'Sữa chua trái cây' },
            { to: '/trang-mieng', content: 'Tráng miệng' },
            { to: '/thuc-uong-tra', content: 'Thức uống trà' },
            { to: '/thuc-uong-da-xay', content: 'Thức uống đá xay' },
        ],
    },
];

function PopperMenu() {
    return (
        <DefaultPopper>
            <div className="w-1170 flex">
                {menuList.map((item, index) => {
                    return (
                        <div key={index} className="w-1/4 px-4">
                            <p className="text-2xl mt-5 text-white font-light">{item.title}</p>
                            <div className="text-base font-light mt-5">
                                {item.content.map((subItem, subIndex) => {
                                    return (
                                        <div key={`${index}_${subIndex}`} className="mb-0.5">
                                            <Link className="" to={`${item.to}${subItem.to}`}>
                                                {subItem.content}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </DefaultPopper>
    );
}

export default PopperMenu;
