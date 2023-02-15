import styles from './tippy.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function TippySeach({ nameFirm }) {
    const infor = nameFirm.results;
    return (
        <div className={cx('wrap')}>
            {infor &&
                infor.map((data, index) => {
                    return (
                        <Link className={cx('item')} key={index} to={`/detail/${data.id}`}>
                            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                            <span>{data.original_title}</span>
                        </Link>
                    );
                })}
        </div>
    );
}
export default TippySeach;
