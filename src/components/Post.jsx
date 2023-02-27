import React from 'react';

const Post = (prop) => {
    return (
        <div className='Post'>
            <img className='club_img' src={prop.image}/>
            <h2>{prop.name}</h2>
            <h3>{prop.focus}</h3>
            <a href={prop.link} target='_blank'>
                <button>Learn More</button>
            </a>
        </div>
    )
}

export default Post;