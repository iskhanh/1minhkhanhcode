import styles from './detail.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getVideoById, getSimilarMovie } from '../store/todoSlice';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from '../Loading/loading';

import Navbar from '../Main/Navbar';
import Header from '../Header';
const cx = classNames.bind(styles);

function Detail() {
    const { loading } = useSelector((state) => state.movie);

    const slug = useParams();
    const movie = useSelector((state) => state.movie);
    const data = movie.todos.byid;
    const videoApi = movie.todos.video;
    const similar = movie.todos.similar;
    const host = 'https://image.tmdb.org/t/p/original';

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(slug.id));
        dispatch(getVideoById(slug.id));
        dispatch(getSimilarMovie(slug.id));
    }, [dispatch, slug.id]);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar />
            <div className={cx('wrap_contain')}>
                {loading ? (
                    <Loading />
                ) : (
                    <div className={cx('wrap_content')}>
                        {data && (
                            <>
                                <div className={cx('moive_play')}>
                                    <div className={cx('wrap_video')}>
                                        {videoApi && (
                                            <ReactPlayer
                                                loop={true}
                                                playing={false}
                                                muted={false}
                                                width={'100%'}
                                                height={'100%'}
                                                controls={true}
                                                url={`https://www.youtube.com/watch?v=${videoApi.results[0].key}`}
                                                className={cx('video_intro')}
                                            />
                                        )}
                                    </div>

                                    <h2 className={cx('name_film')}>{data.title}</h2>
                                    <p className={cx('date')}> Release date: {data.release_date}</p>
                                    <div className={cx('intro')}>
                                        <span className={cx('intro_text')}>{data.overview}</span>
                                    </div>
                                </div>

                                <h2 className={cx('title_similar')}>Similar Movie:</h2>
                                <div className={cx('wrap_similar')}>
                                    {similar &&
                                        similar.results.map((datas, index) => {
                                            return (
                                                <Link
                                                    to={`/detail/${datas.id}`}
                                                    className={cx('similar_movie')}
                                                    key={index}
                                                >
                                                    <img
                                                        className={cx('img_similar')}
                                                        src={host + '/' + datas.poster_path}
                                                    />
                                                    <p className={cx('name_firm')}>{datas.name || datas.title}</p>
                                                </Link>
                                            );
                                        })}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Detail;
