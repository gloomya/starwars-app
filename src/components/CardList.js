import React from 'react';
import Card from './Card';


const CardList = ({ movies }) => {

    return(
        <div>

        {
            movies.map((movie, i) => {
                return (<Card 
                    key={i} 
                    title={movies[i].title} 
                    opening_crawl={movies[i].opening_crawl}
                    episode_id={movies[i].episode_id} 
                    release_date={movies[i].release_date}
                />
                );
    })}
    </div>
    );
}


export default CardList;