import Intro from './intro';
import classNames from 'classnames/bind';
import styles from './MainContent.module.scss';
import Content from './Content';
import { useContext } from 'react';
import { navMobile } from '../../Context';
const cx = classNames.bind(styles);

function MainContent() {
    const context = useContext(navMobile);
    return (
        <div className={cx('wrapper')}>
            <Intro />
            <Content />
        </div>
    );
}

export default MainContent;
