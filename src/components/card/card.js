import React from 'react';


const Card = (id, titre, cover) => {
    return (
        <Link to={`/Accommodation/${id}`} key={id}>
              <div className="box">
                <div className="box-content">
                  <p className="Title">{titre}</p>
                </div>
                <img className="Cover" src={cover} alt="Location" />
              </div>
        </Link> 
    );
};

export default Card;