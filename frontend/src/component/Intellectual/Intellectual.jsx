import React, { useEffect, useRef } from 'react';
import './intellectual.css';
import Footer from '../Footer/Footer';
import { FaBalanceScale, FaGavel, FaBook, FaUserTie, FaLandmark } from 'react-icons/fa';
import NavBar from '../Navbar/Navbar';


const IntellectualPropertyPage = () => {
  const bannerRef = useRef(null);
  const contentSectionsRef = useRef([]);

  const images = [
    "https://i.pinimg.com/736x/ce/fa/33/cefa33e463a1fbdb36febb377e6a02d0.jpg",
    "https://i.pinimg.com/736x/dc/e2/f1/dce2f188189854e06c863d9a0cdf0746.jpg"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const changeBackground = () => {
      if (bannerRef.current) {
        bannerRef.current.style.backgroundImage = `url(${images[currentIndex]})`;
      }
      currentIndex = (currentIndex + 1) % images.length;
    };

    changeBackground();
    const interval = setInterval(changeBackground, 4000);

    // Intersection Observer for content animations
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    contentSectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect(); // Cleanup observer
    };
  }, []);

  return (
    <>
    <NavBar/>
      <div className="services-banner" ref={bannerRef}>
        <h1>Intellectual Property Law Services</h1>
        <p>Protecting, enforcing, and maximizing your intellectual assets.</p>
      </div>

      <div className="services-container">
      <div className="services-content-section" ref={(el) => contentSectionsRef.current[0] = el}>
          <h2>Introduction</h2>
          <p>In today’s innovation-driven world, safeguarding your creations and intellectual assets is more critical than ever. At UMV Legal, we specialize in protecting, enforcing, and maximizing the value of intellectual property rights (IPRs). With expertise spanning domestic statutes and global treaties, we provide tailored legal solutions to help you secure a competitive edge in a rapidly evolving marketplace.
          </p>
          <h2>What is Intellectual Property?</h2>
          <p>Intellectual Property (IP) refers to intangible creations of the mind, protected by law to promote innovation and economic growth. IP law grants creators and innovators exclusive rights, enabling them to control and commercialize their work effectively.</p>
          <h2>Key Categories of Intellectual Property:</h2>
          <ul>
            <li><strong>Trademarks:</strong> Protects distinctive signs, symbols, or logos that differentiate goods and services.</li>
            <li><strong>Copyrights:</strong> Safeguards original literary, artistic, musical, and cinematic works.</li>
            <li><strong>Patents:</strong> Grants exclusive rights to inventors for novel and industrially applicable inventions.</li>
            <li><strong>Trade Secrets:</strong> Protects confidential business information like formulas, designs, or processes.</li>
          </ul>
          <p>These rights are governed by laws such as the <a href="/services">Trademarks Act, 1999</a>, the <a href="/services">Copyright Act, 1957</a>, the <a href="/services">Patents Act, 1970</a>, and international frameworks like the WIPO-administered treaties and the TRIPS Agreement.</p>

        </div>
        <div className="services-content-section" ref={(el) => contentSectionsRef.current[1] = el}>
          <h2>Our Intellectual Property Law Services</h2>
          <h3>1. Trademark Services</h3>
          <p>Trademarks form the foundation of brand identity. We assist in:</p>
          <ul>
            <li><strong>Trademark Searches & Registration:</strong> Ensuring unique and non-conflicting trademarks through rigorous searches and filing with the Office of the Controller General of Patents, Designs, and Trademarks.</li>
            <li><strong>Trademark Enforcement:</strong> Combating infringement under <a href="/services">Section 29 of the Trademarks Act, 1999</a>, with remedies like injunctions and damages.</li>
            <li><strong>Opposition & Rectification:</strong> Representing clients in disputes before the Trademark Registry and Appellate Board.</li>
          </ul>

          <h3>2. Copyright Law Services</h3>
          <p>Copyright protects creative expression, ensuring creators reap the benefits of their work. We offer:</p>
          <ul>
            <li><strong>Copyright Registration:</strong> Assisting with applications for artistic, literary, and digital works under the <a href="/services">Copyright Act, 1957</a>.</li>
            <li><strong>Infringement Litigation:</strong> Filing suits under <a href="/services">Sections 55 and 63</a> to stop unauthorized use and recover damages.</li>
            <li><strong>Commercial Licensing:</strong> Structuring copyright assignments and licensing agreements to maximize returns.</li>
          </ul>
        </div>

        <div className="services-content-section" ref={(el) => contentSectionsRef.current[2] = el}>
                    <h3>3. Patent Services</h3>
          <p>Patents empower inventors by granting exclusive rights to their innovations. Our services include:</p>
          <ul>
            <li><strong>Patent Drafting and Filing:</strong> Preparing comprehensive patent specifications and filing with the Indian Patent Office.</li>
            <li><strong>Patent Infringement Remedies:</strong> Enforcing rights under <a href="/services">Sections 104-108 of the Patents Act, 1970</a>, with remedies such as account of profits and injunctions.</li>
            <li><strong>Patent Portfolio Management:</strong> Strategizing to optimize the commercial potential of your patents.</li>
          </ul>

          <h3>4. Trade Secret Protection</h3>
          <p>Confidential information is vital for maintaining competitive advantage. We specialize in:</p>
          <ul>
            <li>Drafting robust Non-Disclosure Agreements (NDAs) to safeguard trade secrets.</li>
            <li>Advising on secure information-handling practices compliant with legal standards.</li>
            <li>Litigating trade secret misappropriation claims based on equity principles and statutory rights.</li>
          </ul>
        </div>
        <div className="services-content-section" ref={(el) => contentSectionsRef.current[3] = el}>
          <h3>5. IP Enforcement & Dispute Resolution</h3>
          <p>Strong enforcement ensures the integrity of your IP assets. Our litigation expertise includes:</p>
          <ul>
            <li>Filing infringement suits with claims for injunctions, damages, and accounts of profits.</li>
            <li>Representing clients before the <a href="/services">Intellectual Property Appellate Board (IPAB)</a>, High Courts, and arbitral tribunals.</li>
            <li>Handling cross-border IP disputes, ensuring compliance with international conventions.</li>
          </ul>

        </div>
        <div className="services-content-section" ref={(el) => contentSectionsRef.current[4] = el}>
          <h2>Why Choose UMV Legal?</h2>
          <ul>
            <li><strong>Specialized Expertise:</strong> A team of experienced attorneys proficient in complex IP matters.</li>
            <li><strong>Custom Solutions:</strong> Tailored strategies aligned with your business and creative goals.</li>
            <li><strong>Global Reach:</strong> Extensive knowledge of international IP laws and treaties.</li>
            <li><strong>Proactive Protection:</strong> Preemptive risk assessment and mitigation to safeguard your rights.</li>
          </ul>
        </div>
        <div className="services-content-section" ref={(el) => contentSectionsRef.current[5] = el}>
          <h2>The Importance of Intellectual Property Protection</h2>
          <ul>
            <li><strong>Secure Exclusive Rights:</strong> Prevent unauthorized use of your innovations and creations.</li>
            <li><strong>Enhance Market Position:</strong> Build credibility and strengthen brand equity.</li>
            <li><strong>Monetize Innovations:</strong> Leverage IP through licensing, franchising, and other revenue-generating models.</li>
            <li><strong>Prevent Misuse:</strong> Access legal remedies in cases of infringement or unauthorized exploitation.</li>
          </ul>
        </div>

       
        
      </div>
      <div className="corporate-animated-section">
                <div className="corporate-footer-content">
                <div style={{ fontSize: '12px', color: '#fff' }}>
                     <i> <FaBalanceScale /> {/* Scale Icon */}</i>
                     <i> <FaGavel /> {/* Gavel Icon */}</i>
                     <i> <FaBook /> {/* Book Icon */}</i>
                     <i>  <FaUserTie /> {/* User Tie Icon */}</i>
                     <i> <FaLandmark /> {/* Landmark Icon */}</i>
                     <i> <FaBalanceScale /> {/* Scale Icon */}</i>
                     <i> <FaGavel /> {/* Gavel Icon */}</i>
                     <i> <FaBook /> {/* Book Icon */}</i>
                     <i>  <FaUserTie /> {/* User Tie Icon */}</i>
                     <i> <FaLandmark /> {/* Landmark Icon */}</i>
          </div>
                </div>
              </div>
<Footer/>

    </>
  );
};

export default IntellectualPropertyPage;
