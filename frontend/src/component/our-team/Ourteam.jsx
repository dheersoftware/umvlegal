// OurTeam.js
import React from 'react';
import TeamMember from './TeamMember';
import Vikram from '../pics/vikram-umvlegal.jpg';
import Aditya from '../pics/aditya.jpg';
import Ritu from '../pics/ca-ritugupta.jpg';
import "./ourteam.css"

export default function OurTeam() {
  const teamMembers = [
    { name: 'Aditya Singh', designation: 'Founder, UMV Legal & Associates', image: Aditya, profileLink: '/aditya' },
    { name: 'Adv. Vikram Gulliya', designation: 'Comprehensive Legal Solutions', image: Vikram, profileLink: '/vikram' },
    { name: 'CA Ritu Gupta', designation: 'CA & Financial Advisor', image: Ritu, profileLink: '/ritu' },
    { name: 'Anshika Bhardwaj', designation: 'IP Protection & InnovationStrategy', image: 'https://png.pngtree.com/png-vector/20220523/ourmid/pngtree-female-employee-working-at-the-company-png-image_4719739.png', profileLink: '/anshika' },
  ];

  return (
    <section className="speakers-section-three">
      <div className="container">
        <div className="row">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              designation={member.designation}
              image={member.image}
              profileLink={member.profileLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
