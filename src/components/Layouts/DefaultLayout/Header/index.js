import * as React from 'react';
import images from '~/assets/images';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import Popper from '@mui/material/Popper';
import { PopperAbout, PopperMenu } from '~/components/Popper';

const navbarItems = [
    { to: '/', content: 'Trang chủ', id: 'trangchu' },
    { to: '/', content: 'Tìm hiểu', id: 'timhieu' },
    { to: '/thuc-don', content: 'Thực đơn', id: 'thucdon' },
    { to: '/khuyen-mai', content: 'Khuyến mãi', id: 'khuyenmai' },
    { to: '/tin-tuc', content: 'Tin tức', id: 'tintuc' },
    { to: '/lien-he', content: 'Liên hệ', id: 'lienhe' },
];

function NavItem({ to, content, onMouseEnter = false, onMouseLeave = false, showPopper = false, children }) {
    const props = {
        className: 'navbar-item h-full font-light flex items-center text-white',
        // to: to,
    };
    if (onMouseEnter) props.onMouseEnter = onMouseEnter;
    if (onMouseLeave) props.onMouseLeave = onMouseLeave;

    return (
        <div {...props}>
            <Link to={to} className="navbar-link text-lg">
                {content}
            </Link>
            {children}
        </div>
    );
}

function Header() {
    const [popperAbout, setPopperAbout] = useState(null);
    const [popperMenu, setPopperMenu] = useState(null);
    const handleMouseEnterPopperAbout = (event) => {
        setPopperAbout(event.currentTarget);
    };
    const handleMouseLeavePopperAbout = (event) => {
        setPopperAbout(null);
    };
    const handleMouseEnterPopperMenu = (event) => {
        setPopperMenu(event.currentTarget);
    };
    const handleMouseLeavePopperMenu = (event) => {
        setPopperMenu(null);
    };

    return (
        <header className="w-full h-120 bg-header flex justify-center">
            <div className="flex w-1170">
                <div className="ml-5 mr-10">
                    <Link to="/">
                        <img src={images.logo} alt="Logo Mc Donald" />
                    </Link>
                </div>

                <div className="navbar h-full flex row-auto">
                    {navbarItems.map((item, index) => {
                        if (item.id !== 'timhieu' && item.id !== 'thucdon')
                            return <NavItem key={index} to={item.to} content={item.content} />;
                        else if (item.id === 'timhieu')
                            return (
                                <NavItem
                                    key={index}
                                    to={item.to}
                                    content={item.content}
                                    onMouseEnter={handleMouseEnterPopperAbout}
                                    onMouseLeave={handleMouseLeavePopperAbout}
                                >
                                    <Popper className="w-full" open={Boolean(popperAbout)} anchorEl={popperAbout}>
                                        <PopperAbout />
                                    </Popper>
                                </NavItem>
                            );
                        else if (item.id === 'thucdon')
                            return (
                                <NavItem
                                    key={index}
                                    to={item.to}
                                    content={item.content}
                                    onMouseEnter={handleMouseEnterPopperMenu}
                                    onMouseLeave={handleMouseLeavePopperMenu}
                                >
                                    <Popper className="w-full" open={Boolean(popperMenu)} anchorEl={popperMenu}>
                                        <PopperMenu />
                                    </Popper>
                                </NavItem>
                            );
                    })}
                </div>

                <div className="flex items-center ml-auto">
                    <Link to="/cua-hang">
                        <button className="btn bg-primary rounded-full relative">
                            <img src={images.location} alt="location" className="absolute text-4xl left-1.5 top-1.5" />
                            <p className="absolute text-left top-1/2 -translate-y-2/4 left-14 text-xs text-white">
                                Hệ thống
                                <br />
                                <span className="text-yellow-500 text-base">Cửa hàng</span>
                            </p>
                        </button>
                    </Link>
                    <a href="/to-be-continue">
                        <button className="btn bg-primary rounded-full relative ml-3">
                            <img src={images.location} alt="location" className="absolute text-4xl left-1.5 top-1.5" />
                            <p className="absolute text-left top-1/2 -translate-y-2/4 left-14 text-xs text-white">
                                Giao hàng
                                <br />
                                <span className="text-yellow-500 text-base">MCDelivery</span>
                            </p>
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
