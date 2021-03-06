import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/theReviews';
import ThreeReviews from '../ThreeReviews/ThreeReviews';
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews([]);
    const threeReviews = reviews.slice(0, 3)
    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('home.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])
    return (
        <div>
            <div className='total-part'>
                <div className="detail-part  ">
                    <div className='w-4/6 m-auto mt-36 '>
                        <h1 className='text-6xl font-bold'>
                            Your Next Watch
                        </h1>

                        <h1 className='text-6xl font-bold text-cyan-400'>
                            Your Best Watch
                        </h1>
                        <br />
                        <p className='text-zinc-400'>A Wrist-Watch is a part of  personality for a men and woman. it glows your look and increase your confident. In our Website we have arranged lots of wrist-watches with lots of variation. we provide you with best quality according to your choice. to watch more. go to live demo.    </p> <br />

                        <button className='bg-cyan-400 p-2 text-white font-bold text-2xl rounded hover:bg-cyan-600 duration-700 ease-out'>Live Demo</button>
                    </div>

                </div>


                <div className="image-part">

                    {
                        image.map(theImg => <img src={theImg.image} alt="" />)
                    }
                </div>
            </div>

            <div style={{ width: '80%', margin: 'auto' }}>
                <h2 className='text-center font-bold text-3xl'>Customers Reviews({threeReviews.length})</h2>
                <div className='flex justify-center'>
                    {
                        threeReviews.map(threeReviews => <ThreeReviews
                            key={threeReviews.id}
                            image={threeReviews.image}
                            comment={threeReviews.comment}
                            name={threeReviews.name}
                            ratings={threeReviews.ratings}
                        ></ThreeReviews>)
                    }
                </div>

            </div>
            <p className='text-center bg-cyan-400 hover:bg-cyan-700 duration-700 ease-out rounded w-36 m-auto py-3 text-white '><button className='font-bold text-xl '> <Link to='/reviews'>All Reviews</Link> </button></p>

            <br /><br /><br />
        </div>
    );
};

export default Home;