import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {

    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('home.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])
    return (
        <div className='total-part'>

            <div className="detail-part  ">
                <div className='w-4/6 m-auto mt-40 '>
                    <h1 className='text-6xl font-bold'>
                        Your Next Watch
                    </h1>
                    <br />
                    <h1 className='text-6xl font-bold text-cyan-400'>
                        Your Best Watch
                    </h1>

                </div>

            </div>


            <div className="image-part">

                {
                    image.map(theImg => <img src={theImg.image} alt="" />)
                }
            </div>
        </div>
    );
};

export default Home;