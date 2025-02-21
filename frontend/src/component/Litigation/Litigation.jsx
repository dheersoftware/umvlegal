import React, { useEffect } from 'react';
import './litigation.css';
import Footer from '../Footer/Footer';
import { FaBalanceScale, FaGavel, FaBook, FaUserTie, FaLandmark } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';


const LitigationPage = () => {
  useEffect(() => {
    const contentSections = document.querySelectorAll('.civil-content-section');
    const animatedSection = document.querySelector('.civil-animated-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

   contentSections.forEach((section) => {
        try {
          if(section){
            observer.observe(section)
          }
        } catch (e) {
          console.log(e);
        }
      });
      try{
         if(animatedSection){
            observer.observe(animatedSection);
          }
      } catch(e){
        console.log(e);
      }

  // Banner image change logic
    const banner = document.querySelector('.civil-banner');
    const images = [
      "https://i.pinimg.com/736x/89/67/6f/89676f9bcd474ebc667b8249a9b543a4.jpg",
      "https://i.pinimg.com/736x/f7/c9/4f/f7c94f1b32a4a9bb1dda89f25de925ba.jpg"
    ];
    let currentIndex = 0;

    const changeBackground = () => {
      if(banner){
         banner.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
      }
    };

    changeBackground();
    setInterval(changeBackground, 4000);
  }, []);

  return (
    <>
    <NavBar/>
    <div id='litigationbody'>
      <div className="civil-banner">
        <h1>Civil Litigation Services</h1>
        <p>Your Partner in Resolving Civil Disputes</p>
      </div>

      <div className="civil-container">
        <div className="civil-content-section">
          <h2>Introduction</h2>
          <p>
            At UMV Legal, we specialize in delivering meticulous and result-driven civil litigation services.
            With a profound command of substantive and procedural law, our team is committed to protecting your
            rights and achieving equitable resolutions to civil disputes. Whether you are a plaintiff seeking redress
            or a defendant protecting your interests, we provide comprehensive legal representation tailored to the
            complexities of your case.
          </p>

          <h2>Understanding Civil Litigation</h2>
          <p>
            Civil litigation refers to the adjudication of disputes between parties seeking monetary compensation
            or specific relief rather than criminal sanctions. This domain of law encompasses various types of
            disputes, including contractual disagreements, property issues, and tort claims. Governed by intricate
            legal frameworks and statutory provisions, civil litigation requires meticulous application of the following laws:
          </p>
          <ul>
            <li>The Code of Civil Procedure, 1908 (CPC): Establishes the procedural framework for instituting, defending, and adjudicating civil suits, including provisions for pleadings, jurisdiction, and execution of decrees.</li>
            <li>The Indian Evidence Act, 1872: Regulates admissibility, relevancy, and evidentiary standards to establish facts in a civil trial.</li>
            <li>The Specific Relief Act, 1963: Provides remedies like specific performance, injunctions, and declaratory relief to uphold contractual and other civil rights.</li>
            <li>The Limitation Act, 1963: Specifies the time limits within which legal proceedings must be initiated to maintain enforceability.</li>
          </ul>
        </div>

        <div className="civil-content-section">
          <h2>Our Comprehensive Civil Litigation Services</h2>

          <h3>1. Property and Real Estate Disputes</h3>
          <p>We provide extensive legal assistance in property matters, including:</p>
          <ul>
            <li><strong>Title Disputes:</strong> Verification and adjudication of ownership rights based on documentary and possessory evidence.</li>
            <li><strong>Partition Suits:</strong> Advocating for equitable division of jointly owned properties under the Hindu Succession Act and other relevant laws.</li>
            <li><strong>Encroachment and Easement Issues:</strong> Legal action under the Indian Easements Act, 1882, to protect or challenge rights of way and property usage.</li>
            <li><strong>Landlord-Tenant Disputes:</strong> Representation in matters involving rent arrears, eviction suits, and tenancy claims under applicable rent control laws.</li>
          </ul>

          <h3>2. Contractual and Commercial Disputes</h3>
          <p>Our legal services encompass:</p>
          <ul>
            <li><strong>Breach of Contract:</strong> Legal action for remedies under the Indian Contract Act, including damages and rescission.</li>
            <li><strong>Commercial Agreements:</strong> Dispute resolution in joint ventures, service contracts, and business collaborations.</li>
            <li><strong>Specific Performance Claims:</strong> Enforcing contract terms under Sections 10 and 20 of the Specific Relief Act.</li>
          </ul>
        </div>

        <div className="civil-content-section">
          <h3>3. Consumer Protection Claims</h3>
          <p>We advocate for individuals and groups under the Consumer Protection Act, 2019, addressing issues such as:</p>
          <ul>
            <li><strong>Product Liability:</strong> Claims for harm caused by defective goods under strict liability principles.</li>
            <li><strong>Corporate Service Deficiency:</strong> Legal redress for negligence or non-performance by service providers in sectors like banking, healthcare, and real estate.</li>
            <li><strong>Unfair Trade Practices:</strong> Protection against misleading advertisements and exploitative practices.</li>
          </ul>

          <h3>4. Matrimonial and Family Disputes</h3>
          <p>Our specialized services include:</p>
          <ul>
            <li><strong>Divorce and Alimony:</strong> Representation in contested and mutual divorces under personal laws and the Special Marriage Act.</li>
            <li><strong>Custody and Guardianship:</strong> Advocacy under the Guardians and Wards Act for child welfare.</li>
            <li><strong>Inheritance Litigation:</strong> Resolution of disputes over wills and succession under the Indian Succession Act.</li>
          </ul>
        </div>

        <div className="civil-content-section">
          <h3>5. Employment and Workplace Disputes</h3>
          <p>Our expertise in labor and employment litigation includes:</p>
          <ul>
            <li><strong>Unlawful Termination:</strong> Remedies under the Industrial Disputes Act and other employment statutes.</li>
            <li><strong>Wage Disputes:</strong> Representation in claims under the Minimum Wages Act and Payment of Wages Act.</li>
            <li><strong>Workplace Harassment:</strong> Legal remedies under the Sexual Harassment of Women at Workplace Act, 2013.</li>
          </ul>
        </div>

        <div className="civil-content-section">
          <h3>6. Debt Recovery and Financial Disputes</h3>
          <p>Our team delivers effective representation in:</p>
          <ul>
            <li><strong>Cheque Bounce Cases:</strong> Proceedings under Section 138 of the Negotiable Instruments Act.</li>
            <li><strong>Debt Recovery Tribunal Cases:</strong> Pursuing claims under the Recovery of Debts and Bankruptcy Act.</li>
            <li><strong>Banking and Financial Fraud:</strong> Litigating cases of misappropriation, fraud, and non-compliance with banking regulations.</li>
          </ul>
        </div>

        <div className="civil-content-section">
          <h2>Why Choose UMV Legal for Civil Litigation?</h2>
          <ul>
            <li><strong>Experienced Advocacy:</strong> Our seasoned litigators bring decades of expertise in interpreting and applying complex legal provisions to achieve favorable outcomes.</li>
            <li>We meticulously analyze each case, leveraging legal precedents and statutory frameworks to craft winning strategies.</li>
            <li><strong>Client-Centric Services:</strong> We maintain transparent communication and provide personalized counsel, ensuring that our clients are well-informed at every stage of their case.</li>
            <li><strong>Proven Success:</strong> With a track record of favorable judgments, negotiated settlements, and satisfied clients, we stand as a trusted partner in civil litigation.</li>
          </ul>
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
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default LitigationPage;