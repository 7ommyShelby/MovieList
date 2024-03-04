import React from 'react'
import data from './Datamovie.json'
import './main.css'
import Card from './Card.js'



const Main = () => {



    return (
        <div className='main' >
            {
                data.map((e, idx) => {
                    return (
                        <Card
                            
                            banner={e.Images[0]}
                            poster={e.Poster}
                            overview={e.Plot}
                            title={e.Title}
                            date={e.Year}
                            runtime={e.Runtime}
                            genre={e.Genre}
                            director={e.Director}
                        />
                    )
                })
            }
        </div>
    )
}

export default Main
