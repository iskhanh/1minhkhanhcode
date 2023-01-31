import MainContent from './MainContent';
import Navbar from './Navbar';
import classNames from 'classnames/bind';
import styles from './main.module.scss';
import Login from '../Login';
import Header from '../Header';
const cx = classNames.bind(styles);

function Main() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar />
            <MainContent />
        </div>
    );
}

export default Main;
