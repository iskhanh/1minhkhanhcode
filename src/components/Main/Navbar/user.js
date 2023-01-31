import user from '../../../asset/img/useravt.png';
import styles from './navbar.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import Poper from './poper';
const cx = classNames.bind(styles);

function User({ name }) {
    const local = localStorage.getItem('data');

    return (
        <div className={cx('user_info')}>
            <Tippy interactive trigger="click" placement="bottom" offset={[60, 12]} render={(attrs) => <Poper />}>
                <img className={cx('avt_user')} src={user} />
            </Tippy>

            <div className={cx('name_user')}>
                {' '}
                <h2>{local}</h2>
            </div>
        </div>
    );
}
export default User;
