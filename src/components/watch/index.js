import Navbar from '../Main/Navbar';
import classNames from 'classnames/bind';
import styles from './watch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getToprate, getMovie, getPopular, login } from '../store/todoSlice';
import { Link, useParams } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApibyslug } from '../store/todoSlice';
import Header from '../Header';
const cx = classNames.bind(styles);

function OptionUser() {
    const getlocal = localStorage.getItem('data');

    const slug = useParams();
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.movie);
    useEffect(() => {
        dispatch(getApibyslug(slug.option));
        dispatch(login(getlocal));
    }, [slug.option, dispatch]);

    const datas = todos.byslug;

    const host = 'https://image.tmdb.org/t/p/original';

    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar />
            <div className={cx('wrap_content')}>
                <div className={cx('wrap_item')}>
                    {datas &&
                        datas.results.map((data, index) => (
                            <Link className={cx('link')} key={index} to={getlocal ? `/detail/${data.id}` : '/login'}>
                                <div className={cx('item')}>
                                    <img className={cx('img_film')} src={host + '/' + data.poster_path} />
                                    <h2 className={cx('name_film')}>{data.name || data.title}</h2>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default OptionUser;
