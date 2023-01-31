import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../asset/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { navMobile } from '../Context';
import User from '../Main/Navbar/user';

const cx = classNames.bind(styles);

function Header() {
    const context = useContext(navMobile);
    console.log(context.show);
    const local = localStorage.getItem('data');

    return (
        <div className={cx('Wrapper')}>
            <div
                onClick={() => {
                    context.activeNav();
                }}
            >
                {' '}
                <FontAwesomeIcon icon={faBars} className={cx('menu_mobile')} />
            </div>
            <div className={cx('container')}>
                <div className={cx('wrap_logo')}>
                    <img className={cx('logo')} src={logo} />
                </div>
                <div className={cx('wrap_seach')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                    <input className={cx('input')} placeholder="Seach film" />
                </div>
            </div>
            <div className={cx('tablet_header')}>
                <div className={cx('navbar')}>
                    <NavLink className={cx('navbar_item')} to={'/'}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink className={cx('navbar_item')} to={'/watch/popular'}>
                        <p>Movies</p>
                    </NavLink>
                    <NavLink className={cx('navbar_item')} to={'/watch/trending'}>
                        <p>Trending</p>
                    </NavLink>
                    <NavLink className={cx('navbar_item')} to={'/watch/top_rated'}>
                        <p>Toprate</p>
                    </NavLink>
                    <NavLink className={cx('navbar_item')} to={'/favorite'}>
                        <p>Favorite</p>
                    </NavLink>
                    <div className={cx('wrap_login')}>
                        {local ? (
                            <User />
                        ) : (
                            <Link to={'/login'} className={cx('Log_in')}>
                                Log in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
