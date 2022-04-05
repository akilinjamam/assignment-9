import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AllReviews.css'


const AllReviews = ({ image, name, comment, ratings }) => {
    const numberRatings = parseInt(ratings)
    return (
        <div>
            <div style={{ width: '450px', height: '600px' }} >
                <div className=' border-2 border-slate-400 m-6 rounded p-6 font-bold'>
                    <img style={{ heigth: '350px', width: '350px', margin: 'auto', backgroundColor: 'lightgray', padding: '30px' }} src={image} alt="" /> <br />
                    <p>Name: {name}</p>
                    <p title={comment}>Comments:  {comment.length > 60 ? comment.slice(0, 60) + '...' : comment}</p>
                    <p>Ratings: {ratings}</p>
                    <h6>{numberRatings === 1 ? <span><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon></span> : <span></span>}</h6>

                    <h6>{numberRatings === 2 ? <span><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon></span> : <span></span>}</h6>

                    <h6>{numberRatings === 3 ? <span><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon></span> : <span></span>}</h6>

                    <h6>{numberRatings === 4 ? <span><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon></span> : <span></span>}</h6>

                    <h6>{numberRatings === 5 ? <span><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-star' icon={faStar}></FontAwesomeIcon></span> : <span></span>}</h6>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;