import './card.css'
import React from 'react'
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'

// style={{
//     backgroundImage: `linear-gradient(to right, black 50%, transparent), url(${props.banner})`
//     }}

const Card = (props) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='banner' data-aos="fade-up"
        >
            <div className="left">
                <div className="top">
                    <div className="top-left">
                        <img src={props.poster} alt="" />
                    </div>
                    <div className="top-right">
                        <h3>{props.title}</h3>
                        <p className='da-di'>
                            <span>{props.date}</span>,
                            <span>{props.director}</span>
                        </p>
                        <p className='cate'>
                            <span className='mo-time'>{props.runtime}</span>
                            <span className='gen'>{props.genre}</span>
                        </p>
                    </div>
                </div>
                <div className="rev">
                    <p>{props.overview}
                    </p>
                </div>
                <div className="icons">
                    <i class="fa-solid fa-share-nodes"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-message"></i>
                </div>
            </div>
            <div className="cover"></div>
            <div className="right">
                <img src={props.banner} alt="" />
            </div>
        </div>
    )
}

export default Card
