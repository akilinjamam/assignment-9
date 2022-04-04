import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/theReviews';
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews([])
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

            <div className='text-center font-bold text-3xl'>
                <h2>Customers Reviews({reviews.length})</h2>
            </div>
        </div>
    );
};

export default Home;