import React from 'react';

const Card = ({ title, opening_crawl, episode_id, release_date }) => {
    return (
        <div className='tl bg-yellow dim dib ma2 pa3 card w-30'>
            <div>
                <h3 className='bb bw2 dark-grey ttu'>{title}</h3>
                <p><strong>Episode:</strong> {episode_id}</p>
                <p>{opening_crawl}</p>
                <p><strong>Release Date:</strong> {release_date}</p>
            </div>
        </div>
    )
}

export default Card;