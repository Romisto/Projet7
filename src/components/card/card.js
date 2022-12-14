import React from 'react';
import Cards from '../Cards/Cards';
Cards


const card = () => {
    return (
        <Link to={`/Accommodation/${Location.id}`} key={Location.id}>
              <div className="box">
                <div className="box-content">
                  <p className="Title">{Location.title}</p>
                </div>
                <img className="Cover" src={Location.cover} alt="Location" />
              </div>
        </Link>    
    );
};

export default card;