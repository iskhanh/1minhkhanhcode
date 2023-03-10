import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import styles from './contents.module.scss';

const cx = classNames.bind(styles);

function ContentItem(props) {
    const host = 'https://image.tmdb.org/t/p/original';
    const getlocal = localStorage.getItem('data');

    const { data, title } = { ...props };
    const settings = {
        infinite: false,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={cx('wapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <Slider {...settings} className={cx('slider')}>
                {data &&
                    data.results.map((img, index) => (
                        <Link key={index} className={cx('link')} to={getlocal ? `/detail/${img.id}` : '/login'}>
                            <div className={cx('item')} style={{backgroundImage:`url(${host+'/' + img.poster_path})`}}>
                               
                                
                            </div>
                            <h2 className={cx('name_film')}>{img.name || img.title}</h2>
                        </Link>
                    ))}
            </Slider>
        </div>
    );
}
export default ContentItem;
