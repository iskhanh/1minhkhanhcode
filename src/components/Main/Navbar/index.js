import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faFire, faHeart, faHouse, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import user from '../../../asset/img/useravt.png';
import Tippy from '@tippyjs/react';
import styles from './navbar.module.scss';
import User from './user';
import Poper from './poper';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { navMobile } from '../../Context';
const cx = classNames.bind(styles);

function Navbar() {
    const context = useContext(navMobile);

    const local = localStorage.getItem('data');

    const hideNav = () => {
        context.show = false;
    };
    return (
        <div>
            {context.show && (
                <div
                    className={cx('overlay')}
                    onClick={() => {
                        context.hideNav();
                    }}
                ></div>
            )}
            <div className={cx('wrapper', context.show ? 'show' : 'hide')}>
                <div className={cx('add_account')}>
                    {local ? (
                        <User />
                    ) : (
                        <div className={cx('wrap_btn')}>
                            <Link to={'/login'} className={cx('Log_in')}>
                                Log in
                            </Link>
                            <Link to={'/signup'} className={cx('sign_up')}>
                                Sign up
                            </Link>
                        </div>
                    )}
                </div>
                <div className={cx('options')}>
                    <NavLink className={cx('option_item')} onClick={hideNav} to={'/'}>
                        <FontAwesomeIcon className={cx('icon')} icon={faHouse} />
                        <p className={cx('title')}>Home</p>
                    </NavLink>
                    <NavLink className={cx('option_item')} onClick={hideNav} to={'/watch/popular'}>
                        <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
                        <p className={cx('title')}>Popular</p>
                    </NavLink>
                    <NavLink className={cx('option_item')} onClick={hideNav} to={'/watch/upcoming'}>
                        <FontAwesomeIcon className={cx('icon')} icon={faFire} />
                        <p className={cx('title')}>UpComing</p>
                    </NavLink>
                    <NavLink className={cx('option_item')} onClick={hideNav} to={'/watch/top_rated'}>
                        <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                        <p className={cx('title')}>Top rate</p>
                    </NavLink>
                    <NavLink className={cx('option_item')} onClick={hideNav} to={'/watch/favorite'}>
                        <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                        <p className={cx('title')}>Favorite</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
