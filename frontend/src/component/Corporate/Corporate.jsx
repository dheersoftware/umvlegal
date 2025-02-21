import React, { useEffect, useState } from "react";
import "./corporate.css";
import Footer from "../Footer/Footer";
import { FaBalanceScale, FaGavel, FaBook, FaUserTie, FaLandmark } from 'react-icons/fa';
import NavBar from "../Navbar/Navbar";

const Corporate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.pinimg.com/236x/07/d6/42/07d642f48791fa052afde13951b8c2a2.jpg",
    "https://i.pinimg.com/236x/43/b6/9b/43b69b12f66efd2d6b1ea13fce064ba2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".corporate-content-section, .corporate-animated-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
    <NavBar/>
    <div id="corporatebody">
      <div
        className="corporate-banner"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <h1>Corporate Law Services</h1>
        <p>Empowering Businesses with Legal Excellence</p>
      </div>

      <div className="corporate-container">
        <div className="corporate-content-section">
          <h2>Introduction</h2>
          <p>
            At UMV Legal, we specialize in delivering comprehensive and
            strategic corporate legal services tailored to meet the diverse
            needs of businesses across industries. With a deep understanding of
            corporate laws and regulations, we ensure your business operations
            are secure, compliant, and optimized for growth.
          </p>
          <h2>What Is Corporate Law?</h2>
          <p>
            Corporate law governs the establishment, operation, and dissolution
            of companies. It regulates the rights, duties, and obligations of
            stakeholders, including directors, shareholders, and employees,
            ensuring adherence to legal frameworks.
          </p>
          <p>In India, corporate law is governed by:</p>
          <ul>
            <li>
              <strong>The Companies Act, 2013:</strong> The primary legislation
              governing company formation, governance, compliance, and
              winding-up.
            </li>
            <li>
              <strong>The Securities and Exchange Board of India (SEBI) Act,
              1992:</strong> Oversees securities markets and regulates public
              companies.
            </li>
            <li>
              <strong>The Foreign Exchange Management Act, 1999 (FEMA):</strong>{" "}
              Regulates cross-border financial transactions and foreign
              investments.
            </li>
            <li>
              <strong>The Insolvency and Bankruptcy Code, 2016 (IBC):</strong>{" "}
              Establishes a streamlined framework for resolving financial
              distress.
            </li>
            <li>
              <strong>The Competition Act, 2002:</strong> Prevents
              anti-competitive practices and promotes market fairness.
            </li>
          </ul>
          <p>
            Whether you’re a startup, SME, or multinational corporation,
            understanding and complying with these laws is critical for
            sustainable success.
          </p>
        </div>

        <div className="corporate-content-section">
          <h2>Our Corporate Law Services</h2>
          <h3>1. Business Formation and Structuring</h3>
          <p>
            Setting up a business requires precision and compliance with
            statutory provisions. Our services include:
          </p>
          <ul>
            <li>
              <strong>Company Incorporation:</strong> Assisting with the
              registration of Private Limited Companies, Public Limited
              Companies, Limited Liability Partnerships (LLPs), and Section 8
              Companies under the Companies Act, 2013.
            </li>
            <li>
              <strong>Drafting Foundational Documents:</strong> Preparing and
              vetting the Memorandum of Association (MOA) and Articles of
              Association (AOA) to define the company’s scope and governance.
            </li>
            <li>
              <strong>Corporate Structuring:</strong> Advising on joint
              ventures, mergers, and equity structuring to optimize business
              efficiency.
            </li>
          </ul>

          <h3>2. Corporate Governance and Compliance</h3>
          <p>Compliance is the backbone of any successful business. We offer:</p>
          <ul>
            <li>
              <strong>Statutory Compliance Audits:</strong> Ensuring adherence
              to the Companies Act, SEBI regulations, and FEMA guidelines.
            </li>
            <li>
              <strong>Board Governance Advisory:</strong> Assisting boards of
              directors in fulfilling their fiduciary duties under Sections 166
              and 149 of the Companies Act.
            </li>
            <li>
              <strong>CSR Compliance:</strong> Guiding companies in
              implementing Corporate Social Responsibility (CSR) programs as
              mandated under Section 135 of the Companies Act.
            </li>
            <li>
              <strong>Regulatory Filings:</strong> Managing filings with the
              Registrar of Companies (RoC), including annual returns, board
              resolutions, and financial statements.
            </li>
          </ul>
        </div>

        <div class="corporate-content-section">
            <h3>3. Mergers, Acquisitions, and Restructuring</h3>
            <p>Whether expanding through acquisitions or streamlining operations, our expertise ensures a seamless process. Our services include:</p>
             <ul>
                <li><strong>Due Diligence:</strong> Conducting legal and financial audits to assess risks and liabilities.</li>
                <li><strong>Drafting and Negotiating Contracts:</strong> Preparing Share Purchase Agreements (SPAs), Scheme of Arrangements, and Non-Compete Agreements.</li>
                <li><strong>Regulatory Approvals:</strong> Securing permissions from SEBI, the Competition Commission of India (CCI), and the National Company Law Tribunal (NCLT).</li>
                 <li><strong>Corporate Restructuring:</strong> Advising on schemes of amalgamations, demergers, and equity restructuring under Sections 230-232 of the Companies Act.</li>
           </ul>

            <h3>4. Contract Drafting and Advisory</h3>
             <p>Contracts form the foundation of business relationships. Our expertise includes:</p>
           <ul>
               <li><strong>Commercial Contracts:</strong> Drafting and reviewing contracts such as Shareholders’ Agreements, Vendor Agreements, and Franchise Agreements.</li>
               <li><strong>Employment Contracts:</strong> Ensuring compliance with labor laws and mitigating risks in employment disputes.</li>
                <li><strong>Arbitration and Dispute Resolution Clauses:</strong> Crafting robust clauses to minimize litigation risks.</li>
            </ul>
        </div>
         <div class="corporate-content-section">
             <h3>5. Corporate Litigation and Dispute Resolution</h3>
             <p>Disputes can disrupt operations and tarnish reputations. We provide:</p>
           <ul>
               <li><strong>Shareholder Disputes:</strong> Representing clients in cases of oppression and mismanagement under Sections 241-242 of the Companies Act.</li>
                <li><strong>Contractual Breach Litigation:</strong> Pursuing claims for non-performance or termination under the Indian Contract Act, 1872.</li>
                 <li><strong>Alternative Dispute Resolution (ADR):</strong> Resolving disputes through mediation, arbitration, and conciliation.</li>
                <li><strong>Regulatory Representation:</strong> Advocating before the NCLT, SEBI, and appellate bodies.</li>
           </ul>

         </div>
        <div class="corporate-content-section">
              <h3>6. Insolvency and Bankruptcy Advisory</h3>
            <p>Our insolvency services are designed to protect creditor rights while enabling business recovery.</p>
             <ul>
                <li><strong>Corporate Insolvency Resolution Process (CIRP):</strong> Representing creditors and debtors in proceedings under the Insolvency and Bankruptcy Code, 2016.</li>
                <li><strong>Debt Restructuring:</strong> Negotiating settlements and restructuring repayment plans.</li>
                <li><strong>Liquidation Services:</strong> Assisting with voluntary and involuntary winding-up under Sections 271-275 of the Companies Act.</li>
           </ul>
          </div>
        <div class="corporate-content-section">
             <h3>7. Compliance with Competition Law</h3>
               <p>Our competition law services ensure your business operations align with the Competition Act, 2002, including:</p>
            <ul>
                <li>Preventing anti-competitive agreements and abuse of dominance.</li>
                <li>Securing merger and acquisition clearances from the CCI.</li>
                <li>Defending against allegations of cartelization or monopolistic practices.</li>
           </ul>

         </div>
           <div class="corporate-content-section">
           <h2>Why Corporate Law Matters</h2>
             <p>Adherence to corporate law is not just a legal requirement; it’s a strategic necessity. Effective corporate legal practices:</p>
           <ul>
               <li><strong>Mitigate Risks:</strong> Reduce exposure to penalties, disputes, and reputational damage.</li>
                <li><strong>Enhance Efficiency:</strong> Streamline operations through clear governance structures.</li>
                 <li><strong>Promote Growth:</strong> Enable mergers, acquisitions, and cross-border expansions.</li>
                <li><strong>Safeguard Stakeholders:</strong> Protect shareholder and employee interests through transparency and accountability.</li>
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
};

export default Corporate;
