import React, { useRef, useEffect, useState } from 'react';
import "./about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aboutimg from "../pics/UmvAbout.png"
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
// import lawyerImage from "./" // Uncomment if you have an image file to import

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        service: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Appointment submitted successfully!');
            } else {
                alert('Failed to submit appointment.');
            }
        } catch (error) {
            console.error('Error submitting appointment:', error);
            alert('An error occurred while submitting your appointment.');
        }
    };

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations after 100px scroll
      once: true, // Animation should happen only once
    });
  }, []);
   
  const [inView, setInView] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
    const timelineData = [
        { year: 2020, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium." },
        { year: 2019, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium." },
        { year: 2018, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium." },
        { year: 2017, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium." }
    ];

    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.5 }
        );

       
    }, []);

    return (
        <>
        <NavBar/>
            <section className='about-main'>

                <div className="section-container">
                    <div className="section-image" data-aos="fade-right">
                        <img src={Aboutimg} alt="Lawyers" />
                        <div className="experience-tag">7+ Years Experience</div>
                    </div>
                    <div className="section-content" data-aos="fade-left">
                        <h6 className="section-subtitle">LEARN ABOUT US</h6>
                        <h2 className="section-title">
                            We Provide Reliable And Effective Legal Services
            </h2>
                        <p className="section-text">
                        UMV Legal & Associates stands as a trusted name in the legal industry, backed by over 7 years of experience delivering expert solutions. We are dedicated to providing clear, reliable, and results-driven legal services tailored to your needs. Experience professionalism and excellence with every step we take together.
            </p>
                        <a href='/about'><button className="section-button">Learn More</button></a>
                    </div>
                </div>
            </section>

            {/* why to choose us */}
            <section >
                <div id="headings-aboutus" data-aos="fade-down">
                    <h2>
                        Why to choose us
    </h2>
                </div>
                <div className="choose-container">
                    <div className="choose-image" data-aos="fade-right">
                        <img src='https://classroomclipart.com/image/static7/preview2/photo-lady-justice-holds-a-scale-with-law-books-in-the-background-61553.jpg' alt="Why Choose Us" />
                    </div>
                    <div className="choose-content" >
                        <h6 className="choose-subtitle">OUR FEATURES</h6>
                        <h2 className="choose-title">Why Choose Us</h2>
                        <div className="choose-items">
                            <div className="choose-item">
                                <span className="choose-number">01</span>
                                <div className="choose-text">
                                    <h4>Commitment to Results</h4>
                                    <p>
                                    We prioritize integrity, professionalism, and excellence to achieve outcomes that protect your interests.
                  </p>
                                </div>
                            </div>
                            <div className="choose-item">
                                <span className="choose-number">02</span>
                                <div className="choose-text">
                                    <h4>Client-First Approach</h4>
                                    <p>
                                    Your concerns are our priority, ensuring personalized strategies and clear communication every step of the way.
                  </p>
                                </div>
                            </div>
                            <div className="choose-item">
                                <span className="choose-number">03</span>
                                <div className="choose-text">
                                    <h4>Comprehensive Legal Services</h4>
                                    <p>
                                    From complex cases to routine matters, we provide seamless, end-to-end legal support under one roof.
                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* appointment */}
            <section>
            <div id="headings-aboutus">
                <h2>APPOINTMENT</h2>
            </div>
            <div
                className="appointment-container"
                style={{
                    backgroundImage: `url('https://www.shutterstock.com/image-photo/legal-scales-judge-gavel-justice-600nw-2293288299.jpg')`,
                }}
            >
                <div className="appointment-form" data-aos="fade-up">
                    <h2>Get An Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <div className="date-time">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                          
                        </div>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select A Service</option>
                            <option value="consultation">Consultation</option>
                            <option value="legal-advice">Legal Advice</option>
                            <option value="documentation">Documentation</option>
                            <option value="consultation">Patents</option>
                            <option value="legal-advice">Trademarks</option>
                            <option value="documentation">Copyrights</option>
                            <option value="consultation">Trade Secrets</option>
                            <option value="legal-advice">IP Litigation</option>
                            <option value="documentation">Licensing and Transactions</option>
                            <option value="consultation">IP Portfolio Management</option>
                            <option value="legal-advice">Company Incorporation</option>
                        </select>
                        <button type="submit">Get An Appointment</button>
                    </form>
                </div>
            </div>
        </section>

            {/* timeline */}
            {/* <section id='recent-prizes-about-us'>
                <div id="headings-aboutus">
                    <h2>
                        RECENT PRIZES
    </h2>
                </div>
                <div ref={timelineRef} className="timeline">
                    <div className="timeline-line"></div>
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* new section */}
            <section id="para-umv-about-us">
                <div id="headings-aboutus">
                    <h2>
                        ABOUT UMV Legal & Associates
    </h2>
                </div>
                <div className="about-us">
                    <h2 id="heading1" className={`animate heading ${inView.heading1 ? 'in-view' : ''}`}>
                        Established in 2021, UMV Legal & Associates
      </h2>
                    <p id="paragraph1" className={`animate paragraph ${inView.paragraph1 ? 'in-view' : ''}`}>
                    At UMV Legal & Associates, we are the guardians of innovation and creativity. With a deep
passion for intellectual property rights, we are dedicated to protecting, enhancing, and
defending the invaluable assets of our clients. Our firm's reputation is built on a commitment
to excellence, a thorough understanding of IP law, and a relentless pursuit of justice. UMV Legal & Associates has emerged as a trusted name in the legal fraternity, delivering superior legal services that cater to
                        the diverse needs of individuals, entrepreneurs, and businesses alike. With an unwavering commitment to
                        excellence, we combine deep legal expertise with a client-centric approach to provide practical and
                        result-driven solutions.
      </p>
      <h3 id="subheading1" className={`animate subheading ${inView.subheading1 ? 'in-view' : ''}`}>
      OUR MISSION
      </h3>
      <p id="paragraph2" className={`animate paragraph ${inView.paragraph2 ? 'in-view' : ''}`}>
      Our mission is to provide unwavering support and exceptional legal counsel to clients who
value the power of their ideas. We are here to secure your innovations, safeguard your brands,
and preserve your creative works. We believe that innovation should be celebrated and that
creativity should be protected, and we make it our mission to turn those beliefs into actions.
      </p>
                    <h3 id="subheading1" className={`animate subheading ${inView.subheading1 ? 'in-view' : ''}`}>
                        Specialization in Intellectual Property Law
      </h3>
                    <p id="paragraph2" className={`animate paragraph ${inView.paragraph2 ? 'in-view' : ''}`}>
                    UMV Legal & Associates is at the forefront of intellectual property law, offering a comprehensive suite of services designed
                        to protect and enhance the value of your creations and innovations. Our intellectual property services include:
      </p>

                    <h4 id="heading2" className={`animate heading ${inView.heading2 ? 'in-view' : ''}`}>
                        Trademarks
      </h4>
                    <p id="paragraph3" className={`animate paragraph ${inView.paragraph3 ? 'in-view' : ''}`}>
                        With over 300 successfully registered trademarks, we help businesses secure their brand identity, ensuring legal
                        protection for logos, names, slogans, and other distinctive elements.
      </p>

                    <h4 id="heading3" className={`animate heading ${inView.heading3 ? 'in-view' : ''}`}>
                        Patents
      </h4>
                    <p id="paragraph4" className={`animate paragraph ${inView.paragraph4 ? 'in-view' : ''}`}>
                        Our patent services safeguard groundbreaking inventions, providing robust support in drafting, filing, and
                        managing patent applications while addressing any infringement concerns.
      </p>

                    <h4 id="heading4" className={`animate heading ${inView.heading4 ? 'in-view' : ''}`}>
                        Copyrights
      </h4>
                    <p id="paragraph5" className={`animate paragraph ${inView.paragraph5 ? 'in-view' : ''}`}>
                        We empower creators by securing legal protection for original works of art, literature, music, software, and
                        more. Our services also include addressing copyright infringement and structuring licensing agreements.
      </p>

                    <h3 id="subheading2" className={`animate subheading ${inView.subheading2 ? 'in-view' : ''}`}>
                        Our Commitment to Excellence
      </h3>
                    <p id="paragraph6" className={`animate paragraph ${inView.paragraph6 ? 'in-view' : ''}`}>
                        At UMV Legal & Associates, our mission is to protect your rights, preserve your interests, and propel your success. We
                        understand that each client’s legal needs are unique, and we pride ourselves on delivering solutions that are
                        tailored, effective, and practical.
      </p>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default About;
