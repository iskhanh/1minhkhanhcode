import Navbar from '../Main/Navbar';
import classNames from 'classnames/bind';
import styles from './watch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {login } from '../store/todoSlice';
import { Link, useParams } from 'react-router-dom';
import { getApibyslug } from '../store/todoSlice';
import Header from '../Header';
const cx = classNames.bind(styles);

function OptionUser() {
    const getlocal = localStorage.getItem('data');

    const slug = useParams();
    const slugUse = slug.option
    
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.movie);
    useEffect(() => {
        dispatch(getApibyslug(slugUse));
        dispatch(login(getlocal));
    }, [slugUse, dispatch]);

    const datas = todos.byslug;

    const host = 'https://image.tmdb.org/t/p/original';

    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar />
            <div className={cx('wrap_content')}>
            <h2 className={cx('title')}>{slugUse.charAt(0).toUpperCase() + slugUse.slice(1).replace('_','') + '' +' Movies'}</h2>
                <div className={cx('wrap_item')}>
                   
                    {datas &&
                        datas.results.map((data, index) => (
                            <Link className={cx('link')} key={index} to={getlocal ? `/detail/${data.id}` : '/login'}>
                                <div className={cx('item')} style={{backgroundImage:`url(${host+'/' + data.poster_path})`}}>
                                    
                                </div>
                                <h2 className={cx('name_film')}>{data.name || data.title}</h2>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default OptionUser;
