import React from 'react';

const AllReviews = ({ image, name, comment, ratings }) => {
    return (
        <div>
            <div style={{ width: '450px', height: '600px' }} >
                <div className=' border-2 border-slate-400 m-6 rounded p-6 font-bold'>
                    <img style={{ heigth: '350px', width: '350px', margin: 'auto', backgroundColor: 'lightgray', padding: '30px' }} src={image} alt="" /> <br />
                    <p>Name: {name}</p>
                    <p title={comment}>Comments:  {comment.length > 60 ? comment.slice(0, 60) + '...' : comment}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;