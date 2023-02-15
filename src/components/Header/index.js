import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../asset/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { navMobile } from '../Context';
import User from '../Main/Navbar/user';
import { getSeach } from '../store/todoSlice';
import TippySeach from './tippySeach';
import { useDispatch, useSelector } from 'react-redux';
import useDeBount from '../../hooks/Debount';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.movie);
    const data = todos.todos.seach;

    const context = useContext(navMobile);
    const [seachValue, setSeachValue] = useState('');
    const local = localStorage.getItem('data');
    const Debount = useDeBount(seachValue, 500);
    useEffect(() => {
        dispatch(getSeach(encodeURIComponent(Debount)));
    }, [Debount]);

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
                    <Tippy
                        trigger="focus"
                        placement="bottom-start"
                        hideOnClick={false}
                        interactive
                        offset={[0, 10]}
                        render={(attrs) => seachValue.length > 0 && <TippySeach nameFirm={data} />}
                    >
                        <input
                            className={cx('input', seachValue.length > 0 ? 'focus' : '')}
                            placeholder="Seach film"
                            onChange={(e) => setSeachValue(e.target.value)}
                            value={seachValue}
                        />
                    </Tippy>
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
