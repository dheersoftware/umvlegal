import React, { useEffect } from "react";
import "./criminal.css";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

const CriminalPage = () => {
  useEffect(() => {
    const contentSections = document.querySelectorAll('.criminal-content-section');
    const animatedSection = document.querySelector('.criminal-animated-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
    });

    contentSections.forEach((section) => {
      try{
          if(section){
            observer.observe(section)
          }
        } catch(e){
          console.log(e)
        }
    });
    try{
        if(animatedSection){
           observer.observe(animatedSection);
        }
    } catch(e){
       console.log(e)
    }


    const banner = document.querySelector('.criminal-banner');
    const images = [
      "https://i.pinimg.com/736x/13/4d/8f/134d8f2b78ae52fab2f681272f8e0a6f.jpg",
      "https://i.pinimg.com/736x/39/ae/ba/39aebab46544e0ad3570b640a3ae1dc4.jpg"
    ];
    let currentIndex = 0;

    function changeBackground() {
      if(banner){
        banner.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
      }
    }

    changeBackground();
    const interval = setInterval(changeBackground, 4000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <NavBar/>
    <div id="criminalbody">
      <div className="criminal-banner">
        <h1>Criminal Litigation Services</h1>
        <p>Your Advocate for Justice in Criminal Litigation</p>
      </div>

      <div className="criminal-container">
        <div className="criminal-content-section">
          <h2>Introduction</h2>
          <p>
            At UMV Legal, we are committed to providing formidable legal
            representation and strategic counsel in criminal matters. With a
            profound understanding of substantive and procedural criminal law, we
            diligently safeguard your rights and strive to ensure justice prevails.
          </p>
          <h2>What Is Criminal Litigation?</h2>
          <p>
            Criminal litigation entails the adjudication of offenses as defined
            under penal statutes, encompassing prosecution or defense in criminal
            proceedings. It involves navigating complex legal frameworks established
            under:
          </p>
          <ul>
            <li>The Indian Penal Code, 1860 (IPC): A codification of offenses and their prescribed penalties.</li>
            <li>The Code of Criminal Procedure, 1973 (CrPC): Governing the procedural aspects of criminal trials, investigations, and appellate remedies.</li>
            <li>The Indian Evidence Act, 1872: Prescribing the admissibility and relevancy of evidence in criminal cases.</li>
          </ul>
          <p>
            Our expertise spans a comprehensive array of criminal matters, ensuring
            precise application of statutory provisions and jurisprudence to secure
            optimal outcomes.
          </p>
        </div>

        <div className="criminal-content-section">
          <h2>Our Criminal Litigation Services</h2>
          <h3>1. Defense Representation</h3>
          <p>We offer an array of defense strategies meticulously tailored to the specifics of your case:</p>
          <ul>
            <li><strong>Bail Applications:</strong> Advocating for anticipatory or regular bail under Sections 437 and 438 of the CrPC.</li>
            <li><strong>Trial Advocacy:</strong> Defending clients in Magistrate Courts, Sessions Courts, High Courts, and the Supreme Court.</li>
            <li><strong>Quashing of FIRs:</strong> Filing petitions under Section 482 of the CrPC for the annulment of malicious or baseless charges.</li>
            <li><strong>Appeals and Revisions:</strong> Handling appeals against convictions or orders under Sections 374 and 397 of the CrPC.</li>
          </ul>

          <h3>2. Prosecution Services</h3>
          <p>We assist victims and complainants in ensuring effective prosecution by:</p>
          <ul>
            <li><strong>Drafting Complaints and Pleadings:</strong> Filing private complaints under Section 200 of the CrPC and drafting meticulous pleadings.</li>
            <li><strong>Monitoring Investigations:</strong> Ensuring law enforcement agencies adhere to statutory mandates and procedural safeguards.</li>
            <li><strong>Trial Representation:</strong> Advocating during trial proceedings to uphold the rights of victims and secure justice.</li>
          </ul>
        </div>

        <div className="criminal-content-section">
          <h3>3. White-Collar and Economic Offenses</h3>
          <p>In the realm of financial and economic crimes, we specialize in:</p>
          <ul>
            <li><strong>Money Laundering Cases:</strong> Representation under the Prevention of Money Laundering Act, 2002 (PMLA).</li>
            <li><strong>Corporate Misconduct:</strong> Advisory and defense in cases under the Companies Act, 2013, and SEBI regulations.</li>
            <li><strong>Cybercrimes:</strong> Legal representation under the Information Technology Act, 2000, and ancillary laws.</li>
          </ul>
          <h3>4. Representation in General Criminal Offenses</h3>
          <p>Our practice includes robust representation in cases such as:</p>
          <ul>
            <li><strong>Theft, Robbery, and Criminal Misappropriation:</strong> Offenses under Sections 378-403 of the IPC.</li>
            <li><strong>Criminal Assault and Grievous Hurt:</strong> Advocacy in cases under Sections 319-326 of the IPC.</li>
            <li><strong>Sexual Offenses:</strong> Defense and victim representation under the Protection of Children from Sexual Offenses Act, 2012 (POCSO), and Sections 375-376 of the IPC.</li>
            <li><strong>Narcotics and Psychotropic Substances Offenses:</strong> Representation under the Narcotic Drugs and Psychotropic Substances Act, 1985 (NDPS).</li>
          </ul>
        </div>

        <div className="criminal-content-section">
          <h3>5. Advisory During Investigations</h3>
          <p>Effective legal counsel during criminal investigations is crucial. We provide:</p>
          <ul>
            <li><strong>Legal Assistance During Interrogations:</strong> Safeguarding constitutional rights under Articles 20 and 21 of the Constitution of India.</li>
            <li><strong>Guidance During Arrests and Searches:</strong> Ensuring compliance with procedural safeguards outlined in Sections 41-60 and 100 of the CrPC.</li>
          </ul>
        </div>

        <div className="criminal-content-section">
          <h3>6. Expertise in High-Profile and Sensitive Cases</h3>
          <p>Our firm’s experience extends to cases involving:</p>
          <ul>
            <li><strong>Domestic Violence and Dowry Harassment:</strong> Representation under the Protection of Women from Domestic Violence Act, 2005, and Section 498A of the IPC.</li>
            <li><strong>Sexual Harassment at Workplace:</strong> Advisory under the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.</li>
            <li><strong>Custodial Torture and Deaths:</strong> Legal recourse through writ petitions under Articles 32 and 226 of the Constitution.</li>
          </ul>
        </div>

        <div className="criminal-content-section">
          <h2>Why Choose UMV Legal for Criminal Litigation?</h2>
          <ul>
            <li><strong>Comprehensive Legal Knowledge:</strong> Proficient in interpreting and applying statutory provisions and judicial precedents.</li>
            <li><strong>Strategic Litigation:</strong> Customized strategies for prosecution or defense tailored to the nuances of each case.</li>
            <li><strong>Commitment to Justice:</strong> Advocating for fair trials and the protection of constitutional and statutory rights.</li>
            <li><strong>Transparent and Ethical Practice:</strong> Ensuring clear communication and adherence to professional standards.</li>
          </ul>
        </div>

       
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CriminalPage;