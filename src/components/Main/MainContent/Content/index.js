import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Loading/loading';

import { getMovie, getToprate, getPopular, getDetail, login } from '../../../store/todoSlice';
import ContentItem from './contentItem';

function Content() {
    const dispatch = useDispatch();
    const { todos, status, loading, data } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getMovie());
        dispatch(getToprate());
        dispatch(getPopular());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <ContentItem data={todos.toprate} title="Popular" />
                    <ContentItem data={todos.popular} title="Popular" />
                </div>
            )}
        </>
    );
}

export default Content;
