import React from 'react';
import usePageNotFound from '../../hooks/usepageNotFound';

const NotFound = () => {
    const [notFound, setNotFound] = usePageNotFound([]);


    return (
        <div>
            {
                notFound.map(error => <img style={{ display: 'block', margin: 'auto', width: '30%', height: '30%' }} src={error.image} alt="" />)
            }
        </div>
    );
};

export default NotFound;