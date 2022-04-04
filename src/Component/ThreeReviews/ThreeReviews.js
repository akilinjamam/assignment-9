import React from 'react';

const ThreeReviews = ({ name, image, comment, ratings }) => {
    return (
        <div style={{ width: '450px', height: '600px' }} >
            <div className=' border-2 border-slate-400 m-6 rounded p-6 font-bold'>
                <img style={{ heigth: '350px', width: '350px', margin: 'auto', backgroundColor: 'lightgray', padding: '30px' }} src={image} alt="" /> <br />
                <p>Name: {name}</p>
                <p>Comments: {comment}</p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>

    );
};

export default ThreeReviews;