import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Footer from '../Footer/Footer';
import b1 from "../pics/b1.png"
import b2 from "../pics/b2.png"
import b3 from "../pics/b3.png"
import b4 from "../pics/b4.png"
import b5 from "../pics/b5.png"
import b6 from "../pics/b6.png"
import b7 from "../pics/b7.png"
import b8 from "../pics/b8.png"
import b9 from "../pics/b9.png"
import  review1 from "../pics/review1.png"
import  review2 from "../pics/review2.png"
import  review3 from "../pics/review3.png"
import  review4 from "../pics/review4.png"
import  review5 from "../pics/review5.png"
import  review6 from "../pics/review6.png"
import  review7 from "../pics/review7.png"
import  review8 from "../pics/review8.png"
import  review9 from "../pics/review9.png"
import  review10 from "../pics/review10.png"
import  review11 from "../pics/review11.png"
import  review12 from "../pics/review12.png"
import  review13 from "../pics/review13.png"



// Importing images

import img3 from "../pics/16.jpg";
import black from "../pics/bluetexture1.jpg"
import OurTeam from '../our-team/Ourteam';
import NavBar from '../Navbar/Navbar';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};


function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "What types of legal services do you offer?.",
      answer:
        "We provide a wide range of legal services, including but not limited to, civil litigation, corporate law, criminal defense, divorce and family law, intellectual property rights, contracts and agreements, real estate law, and estate planning. Our team is equipped to handle complex legal issues and provide tailored advice for your specific needs.",
      open: true
    },
    {
      question: "How do I know if I need legal representation?",
      answer: "If you are facing any legal dispute, need assistance with contracts, or require guidance on compliance and regulations, it’s advisable to seek legal representation. Some common scenarios include business disputes, divorce, criminal charges, property issues, and intellectual property matters. A legal professional can provide you with the necessary insights to protect your rights and interests.",
      open: false
    },
    {
      question: "How long does it take to resolve a legal issue?",
      answer: "The timeline to resolve a legal issue depends on the nature of the case and the specific circumstances involved. For some matters, like contract review or simple agreements, resolution can be achieved relatively quickly. However, more complex cases such as litigation, divorce proceedings, or criminal defense may take longer. We will work with you to provide an estimated timeline based on your situation and keep you updated throughout the process.",
      open: false
    }
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/carousel-images');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations after 100px scroll
      once: true, // Animation should happen only once
    });
  }, []);
  const practices = [
    {
      title: "Intellectual Property Law",
      description:
        "Safeguarding innovation and creativity, we assist in the registration and enforcement of copyrights, trademarks, patents, designs, and geographic indications, backed by a profound understanding of IP laws and litigation.",
    },
    {
      title: "Corporate and Commercial Law Solutions",
      description:
        "From seamless company incorporation to ensuring compliance under the Companies Act, 2013, we provide expert counsel in shareholder agreements, mergers, acquisitions, and corporate governance to protect your business interests.",
    },
    {
      title: "Taxation and GST Advisory Expertise",
      description:
        "Our advisory services encompass GST compliance, audits, appeals, and tax structuring, ensuring adherence to the latest provisions of the GST Act and tax laws.",
    },
    {
      title: "Civil Litigation Excellence",
      description:
        "Our legal acumen in civil litigation spans across contract disputes, property matters, tort claims, and recovery suits. We ensure meticulous application of the Code of Civil Procedure (CPC) and related statutory provisions to achieve favorable outcomes.",
    },
   
    {
      title: "Family and Matrimonial Law Care",
      description:
        "Navigating sensitive family disputes with discretion, we handle matters of divorce, child custody, maintenance, and domestic violence, ensuring confidentiality and empathetic legal guidance.",
    },
  
    
    {
      title: "Criminal Defense ",
      description:
        "Our defense strategies cover an array of cases under the Indian Penal Code (IPC), including white-collar crimes, cyber offenses, and bail applications. We advocate zealously for your rights in criminal proceedings.",
    },
    {
      title: "Alternative Dispute Resolution (ADR)",
      description:  
        "We excel in arbitration, mediation, and conciliation to resolve disputes effectively, minimizing time for our clients.",
    },
   
    {
      title: "Property and Real Estate Law",
      description:
        "From RERA compliance to lease agreements and property documentation, we provide robust advisory services in real estate matters, ensuring clarity and legal sanctity.",
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <>
        <NavBar/>
      <section>
        <div>
          <Carousel>
            {data.map((item) => (
              <Carousel.Item key={item._id}>
                <img
                  style={{ height: '90vh' }}
                  className="d-block w-100"
                  src={`http://88.222.214.249:5000${item.path}`}
                  alt={item.name}
                />
                <Carousel.Caption>
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
      <div className="home-emergencycase-container">
        <section className="home-emergencycase-container-emergency-section" data-aos="fade-right">
          <h2>Emergency Cases ?</h2>
          <p>Contact for Quick Legal Assistance :</p>
          <p className="phone">Call Us Now</p>
          <p>+91 9967276861</p>
        </section>
        <section className="home-emergencycase-container-help-section" data-aos="fade-up">
          <h2>Need Legal Help?</h2>
          <p>
            Fix an Appointment for Advice / Guidance / Assistance on any Legal
            Matter :
          </p>
          <a href='/contact'><button className="home-emergencycase-container-appointment-button">
            FIX AN APPOINTMENT
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button></a>
        </section>
        <section className="home-emergencycase-container-hours-section" data-aos="fade-left">
          <h2>Working Hours</h2>
          <div className="working-day">
            <p>Monday - Friday</p>
            <p>10.00 am- 09.00 pm</p>
          </div>
          <div className="working-day">
            <p>Saturday</p>
            <p>10.00 am- 06.00 pm</p>
          </div>
          <div className="working-day">
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </section>
      </div>

      <section className="about-us-section">
        <div className="about-us-container" data-aos="fade-right">
          <div className="about-us-content">
            <h1>About Us</h1>
            <h2>
              <span>UMV Legal & Associates</span> <br/>Advocates & Solicitors.
            </h2>
           
            <p>
              <strong>Founded and established in 2021</strong> by a young and dynamic Advocate & Solicitor <strong> Mr. Aditya Singh </strong>with a belief to provide quick and valuable solutions in various legal segments with strong emphasis on quality and ethics.
            </p>
            <p>
              Our team provides services in the legal field at domestic as well as international levels. Our prime focus is to simplify the legal complications and hurdles of our clients by adopting the best possible ways in accordance with the prevailing laws. Our legal brains provide the result of any legal complications of our clients at the blink of an eye.
            </p>
            <p>
              Our young and dynamic legal eagles not only remain updated with the recent legal amendments but also stay a step ahead of the others by adopting and using the latest technology.
            </p>
            <a href="/about"> <button href="/about" className="read-more-btn">Read More →</button></a>
          </div>
          <div className="about-us-image">
            <img src={img3} alt="Chirag Shah" />
          </div>
        </div>
      </section>
      <section
        className="why-choose-us-section"
        style={{ backgroundImage: `url(${black})` }}
        data-aos="fade-left">
        <div className="why-choose-us-content">
          <h2>Why Choose Us?</h2>
          <h1>WE HAVE GREAT RESULTS</h1>
          <p>
            There is a big difference between a satisfied client and a loyal
            client. We never settle for 'satisfied.'
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>300 +</h3>
              <p>Loyal Clients</p>
            </div>
            <div className="stat-item">
              <h3>1500 +</h3>
              <p>Meetings & Consultations</p>
            </div>
            <div className="stat-item">
              <h3>500 +</h3>
              <p>Documentations</p>
            </div>
           
          </div>
        </div>
      </section>

      <section className="areas-of-practice">
        <div className="container">
          <h2>OUR AREAS OF PRACTICE</h2>
          <p>
          At UMV Legal & Associates, we specialize in a diverse spectrum of legal services, meticulously designed to meet the evolving needs of our clients. Here’s an overview of our core practice areas:
          </p>
          <div className="practices-grid">
            {practices.map((practice, index) => (
              <div className="practice-item" key={index}>
                <div className="icon">{practice.icon}</div>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
                <a href="/services"> <button className="read-more">READ MORE</button></a>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section class="-home-why-to-choose">
        <h2 class="-home-why-to-choose-heading">Why Choose Us</h2>
        <p class="-home-why-to-choose-subheading">UMV Legal & Associates & his team have been offering legal solutions with a higher success rate for more than 7+ years.</p>
        <div class="-home-why-to-choose-grid">
          <div class="-home-why-to-choose-card">
            <img src={b1}  alt="Best Attorneys" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Best Attorneys</h3>
            <p class="-home-why-to-choose-description">Since inception, we offer only right and accurate solutions to our valuable clients.</p>
          </div>
          <div class="-home-why-to-choose-card">
            <img src={b2}  alt="Fight For Justice" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Fight For Justice</h3>
            <p class="-home-why-to-choose-description">We deal with complex cases and defending the court cases without getting worried about anything.</p>
          </div>
          <div class="-home-why-to-choose-card">
            <img src={b3}  alt="7+ Years Of Experience" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">7+ Years Of Experience</h3>
            <p class="-home-why-to-choose-description">Having been in the law practice areas for more than 7+ years, we have developed skills “how to deal with court cases.”</p>
          </div>
         
          <div class="-home-why-to-choose-card">
            <img src={b5}  alt="Excellent Lawyers" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Excellent Lawyers</h3>
            <p class="-home-why-to-choose-description">Each lawyer in UMV Legal & Associates team is having excellence in their practice areas and defending clients in courts.</p>
          </div>
          <div class="-home-why-to-choose-card">
            <img src={b6}  alt="Best Case Strategy" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Best Case Strategy</h3>
            <p class="-home-why-to-choose-description">Developed a proven strategy to defend the cases and help clients to get a verdict in their favor.</p>
          </div>
          <div class="-home-why-to-choose-card">
            <img src={b7}  alt="Best Case Strategy" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Innovative Legal Solutions</h3>
            <p class="-home-why-to-choose-description">We leverage advanced legal research tools, technology, and creative problem-solving to address novel and complex challenges effectively.</p>
            </div>
          <div class="-home-why-to-choose-card">
            <img src={b8}  alt="Best Case Strategy" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Accessible and Responsive Representation</h3>
            <p class="-home-why-to-choose-description">DOur legal team remains approachable and responsive, providing clear updates and actionable advice throughout your legal journey.</p>
          </div>
          <div class="-home-why-to-choose-card">
            <img src={b9} alt="Best Case Strategy" class="-home-why-to-choose-icon" />
            <h3 class="-home-why-to-choose-title">Future-Focused Legal Counsel</h3>
            <p class="-home-why-to-choose-description">At UMV Legal & Associates, we not only address present challenges but also help clients plan proactively for long-term legal security and compliance.
            </p>
          </div>
        </div>
      </section>
      <div className="reachus-container">
      <div id="headings-aboutus">
          <h2>
            Map Location's
          </h2>
        </div>
        <div id='trewq'>
          <div className="reachus-content">
            {/* Map Section */}
            <div class="reachus-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.660592556219!2d73.03684551964952!3d26.305100792813757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418da6c4c2de4d%3A0x508fbdd2d98facd6!2sShree%20Ram%20Building!5e0!3m2!1sen!2sin!4v1737436608679!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Dheer Software Solutions Location"
              ></iframe>
            </div>
            {/* Office Information Section */}
            <div className="reachus-info">
              <h3 className="reachus-office-title">Jodhpur Office</h3>
              <p className="reachus-office-name">UMV Legal & Associates, Advocates</p>
              <p className="reachus-address">
                1st 'A' Floor, Shri Ram Building Infront of Parihar Dairy Main Mahamandir Circle, to, <br />Nagori Gate Kila Rd, Jodhpur, Rajasthan 342006
              </p>
              <p className="reachus-contact"><strong>Email:</strong> umvlegalassociate@gmail.com</p>
              <p className="reachus-contact"><strong>Whatsapp:</strong> +91 9967276861</p>
              <p className="reachus-contact"><strong>Call:</strong> +91 9967276861</p>
           
            </div>

          </div>
          <div className="reachus-content">
            {/* Map Section */}
            <div class="reachus-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.108075173515!2d77.42642823187852!3d28.628142501703806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee307ecc7e91%3A0x16613eec68653aa4!2sCrossings%20Republik%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737437945171!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Dheer Software Solutions Location"
              ></iframe>
            </div>
            {/* Office Information Section */}
            <div className="reachus-info">
              <h3 className="reachus-office-title">Ghaziabad Office</h3>
              <p className="reachus-office-name">UMV Legal & Associates, Advocates</p>
              <p className="reachus-address">
              2060, Romano, Mahagun Mascot, <br />crossing Republik, ghaziabad 201016
              </p>
              <p className="reachus-contact"><strong>Email:</strong> umvlegalassociate@gmail.com</p>
              <p className="reachus-contact"><strong>Whatsapp:</strong> +91 9967276861</p>
              <p className="reachus-contact"><strong>Call:</strong> +91 9967276861</p>
            
            </div>
          </div>
        </div>
      </div>

      <div id="headings-aboutus">
        <h2>
          OUR TEAM
        </h2>
      </div>
      <OurTeam />
     
      {/* faqs */}
      <section id='faq-sec'>
        <div id="headings-faq">
          <h2>
            FAQ's
          </h2>
        </div>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </section>
       {/* testimonials  */}
       <div className="testimonial-slider">
      <div className="testimonial-slider-track">
        <img
          src={review1}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review2}
          alt="Testimonial Sliding Image"
        />
        <img
          src={review3}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review4}
          alt="Testimonial Sliding Image"
        />
        <img
          src={review5}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review6}
          alt="Testimonial Sliding Image"
        />
        <img
          src={review7}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review8}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review9}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review10}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review11}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review12}
          alt="Testimonial Sliding Image"
        />
        <img
       src={review13}
          alt="Testimonial Sliding Image"
        />
      </div>
    </div>

      <Footer />
    </>
  );
}

export default App;
