import React from 'react';
import useReviews from '../../hooks/theReviews';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews([])

    return (
        <div>
            <h2 className='text-center font-bold text-3xl'>All Reviews({reviews.length}) </h2>
            <div>
                {
                    reviews.map(theReviews => <AllReviews
                        key={theReviews.id}
                        name={theReviews.name}
                        image={theReviews.image}
                        comment={theReviews.comment}
                        ratings={theReviews.ratings}
                    ></AllReviews>)
                }
            </div>
        </div>
    );
};


export default Reviews