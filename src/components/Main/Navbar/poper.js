import styles from './navbar.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function Poper() {
    const navigate = useNavigate();
    const param = useParams();

    const removeLocal = () => {
        localStorage.removeItem('data');
        navigate(param.option ? '/' : 0);
    };
    return (
        <div className={cx('poper')}>
            <Link className={cx('poper_item')} to={'/login'}>
                <div className={cx('wrap_icon')}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <span>Account transfer</span>
            </Link>
            <div onClick={removeLocal} className={cx('poper_item')}>
                <div className={cx('wrap_icon')}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
                <span>log out</span>
            </div>
        </div>
    );
}
export default Poper;
