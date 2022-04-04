import React from 'react';
import useReviews from '../../hooks/theReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews([])

    return (
        <div>
            <h2>this is reviews</h2>
        </div>
    );
};

export default Reviews;