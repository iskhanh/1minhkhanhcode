import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';
import styles from './intro.module.scss';
const cx = classNames.bind(styles);

function Intro() {
    return (
        <div className={cx('wrapper')}>
            <ReactPlayer
                loop={true}
                playing={true}
                muted={true}
                width={'100%'}
                height={'100%'}
                controls={true}
                url="https://vimeo.com/117500243"
                className={cx('video_intro')}
            />
            <div className={cx('wrap_text')}>
                <h2 className={cx('title')}>Netflix Elite</h2>
                <p className={cx('text')}>
                    Netflix Elite lauch Campaing Derector:Fernanda weinfied Production Company:AWake film Agency:Akaqua
                </p>
            </div>
        </div>
    );
}

export default Intro;
