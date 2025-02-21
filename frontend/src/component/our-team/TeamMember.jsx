// TeamMember.js
import React from 'react';

const TeamMember = ({ name, designation, image, profileLink }) => {
  return (
    <div className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <a href={profileLink}>
              <img src={image} alt={name} />
            </a>
          </figure>
        </div>
        <div className="info-box">
          <h4 className="name">
            <a href={profileLink}>{name}</a>
          </h4>
          <span className="designation">{designation}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
