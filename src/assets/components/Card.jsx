import React from 'react'

const Card = ({ movie }) => {
  return (
    <div className='aspect-[2/3] w-1/6 p-2 h-[350px] my-2'>
        {/* <img src="src/assets/Card Img.webp" alt="img" className='rounded-3xl' /> */}
        <img src={ movie.poster_path
            ?`https://image.tmdb.org/t/p/w342${movie.poster_path}`
            :"https://placehold.co/200x300?text=No+Poster%0ATwT&font=roboto"
            } alt={movie.title} 
            className='rounded-3xl' />
        <div className="title text-white  text-center">
            {movie.title}
        </div>
    </div>
  )
}

export default Card
