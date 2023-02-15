import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Loading/loading';

import { getMovie, getToprate, getPopular, getUpcoming, login } from '../../../store/todoSlice';
import ContentItem from './contentItem';

function Content() {
    const dispatch = useDispatch();
    const { todos, status, loading, data } = useSelector((state) => state.movie);
    console.log(todos);

    useEffect(() => {
        dispatch(getMovie());
        dispatch(getToprate());
        dispatch(getPopular());
        dispatch(getUpcoming());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <ContentItem data={todos.popular} title="Popular" />
                    <ContentItem data={todos.toprate} title="Top Rate" />
                    <ContentItem data={todos.upcoming} title="UpComing" />
                </div>
            )}
        </>
    );
}

export default Content;
