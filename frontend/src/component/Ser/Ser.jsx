import React, { useState } from 'react';
import './ser.css';
import Footer from '../Footer/Footer';
import { Navbar } from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';

const App = () => {
    const [activeTab, setActiveTab] = useState('services');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: "Patent Case Study: Roche v. Cipla (2015)",
            content: (
                <>
                    <p><b>Background:</b> Roche’s patent for the cancer drug "Tarceva" was challenged by Cipla, which launched a generic version. Roche filed for patent infringement under the Indian Patents Act, claiming exclusivity.</p>
                    <p><b>Legal Challenge:</b> Cipla contended that Roche’s patent lacked novelty and inventive step under Section 3(d) of the Indian Patents Act, aiming to prevent evergreening.</p>
                    <p><b>Outcome:</b> The Delhi High Court ruled in favor of Cipla, invalidating Roche’s patent and setting a precedent for public health vs. IPR balance.</p>
                    <p><b>Key Legal Terms:</b></p>
                    <ul>
                        <li>Patent Infringement</li>
                        <li>Section 3(d)</li>
                        <li>Novelty and Inventive Step</li>
                        <li>Evergreening</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Cheque Bounce Case Study: N.R. Krishnan v. State of Kerala (2014)",
            content: (
                <>
                    <p><b>Background:</b> Krishnan issued a cheque that bounced due to insufficient funds. The supplier filed a criminal complaint under Section 138 of the Negotiable Instruments Act, claiming dishonor.</p>
                    <p><b>Legal Challenge:</b> Krishnan argued technical error and attempted rectification, but the complainant cited willful default.</p>
                    <p><b>Outcome:</b> The Kerala High Court ruled that dishonor of cheque under Section 138 is a criminal offense, emphasizing presumption of guilt.</p>
                    <p><b>Key Legal Terms:</b></p>
                    <ul>
                        <li>Section 138 of Negotiable Instruments Act</li>
                        <li>Cheque Bounce</li>
                        <li>Criminal Liability</li>
                        <li>Presumption of Guilt</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Divorce Case Study: Smt. Gita Mehta v. Ramesh Mehta (2016)",
            content: (
                <>
                    <p><b>Background:</b> Gita Mehta filed for divorce under the Hindu Marriage Act citing mental cruelty by her husband.</p>
                    <p><b>Legal Challenge:</b> The husband contested the divorce, arguing that differences were not grounds for dissolution under Section 13 of the Hindu Marriage Act.</p>
                    <p><b>Outcome:</b> The Delhi High Court granted divorce, recognizing mental cruelty as a valid ground, and set a precedent for irretrievable breakdown of marriage.</p>
                    <p><b>Key Legal Terms:</b></p>
                    <ul>
                        <li>Hindu Marriage Act, 1955</li>
                        <li>Section 13: Grounds for Divorce</li>
                        <li>Mental Cruelty</li>
                        <li>Irretrievable Breakdown of Marriage</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Corporate Law Case Study: Satyam Computer Services Ltd. v. SEBI (2011)",
            content: (
                <>
                    <p><b>Background:</b> Satyam Computer’s financial fraud led to securities law violations, with SEBI investigating misleading financial disclosures.</p>
                    <p><b>Legal Challenge:</b> SEBI imposed penalties for market manipulation and failure to adhere to corporate governance standards.</p>
                    <p><b>Outcome:</b> The Securities Appellate Tribunal (SAT) upheld SEBI’s penalties, reinforcing the duty of directors and auditors under securities law.</p>
                    <p><b>Key Legal Terms:</b></p>
                    <ul>
                        <li>Securities and Exchange Board of India (SEBI)</li>
                        <li>Fraudulent Financial Reporting</li>
                        <li>Corporate Governance</li>
                        <li>Market Manipulation</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Criminal Litigation Case Study: The Nirbhaya Case (2012)",
            content: (
                <>
                    <p><b>Background:</b> The brutal gang rape and murder of a 23-year-old woman in Delhi resulted in the accused facing charges under Section 376 IPC (rape) and Section 302 IPC (murder).</p>
                    <p><b>Legal Challenge:</b> The defense argued insufficient evidence, but the prosecution presented forensic evidence to establish guilt.</p>
                    <p><b>Outcome:</b> The Delhi High Court and Supreme Court upheld the death penalty, establishing stronger laws under the Criminal Law (Amendment) Act, 2013.</p>
                    <p><b>Key Legal Terms:</b></p>
                    <ul>
                        <li>Section 376 IPC (Rape)</li>
                        <li>Section 302 IPC (Murder)</li>
                        <li>Forensic Evidence</li>
                        <li>Death Penalty</li>
                        <li>Criminal Law (Amendment) Act, 2013</li>
                    </ul>
                </>
            )
        },
        {
            title: "Intellectual Property Case Study: Bajaj Auto Ltd. v. TVS Motor Company Ltd. (2008)",
            content: (
                <>
                    <p><b>Background:</b> Bajaj Auto filed a suit against TVS for design infringement, claiming the Apache motorcycle was too similar to its Pulsar model.</p>
                    <p><b>Legal Challenge:</b> TVS defended the design, claiming no violation of industrial design protections under the Indian Design Act.</p>
                    <p><b>Outcome:</b> The Delhi High Court ruled in favor of Bajaj, granting an injunction against TVS, affirming protection of industrial design rights.</p>
                    <p><b>Key Legal Terms:</b></p>
                    <ul>
                        <li>Intellectual Property Rights (IPR)</li>
                        <li>Design Infringement</li>
                        <li>Indian Design Act</li>
                        <li>Injunction</li>
                        <li>Industrial Design Protection</li>
                    </ul>
                </>
            )
        },
        {
            title: "Disclaimer",
            content: (
                <>
                    <p>The case studies provided on this website are for general informational purposes only. They are based on publicly available legal information, court rulings, and legal analyses. These case studies do not constitute legal advice, nor do they create any attorney-client relationship between the reader and the website owner.</p>

                    <p>While every effort has been made to ensure the accuracy and reliability of the information, legal principles and decisions can evolve over time. The outcomes of the cases discussed may not be applicable to every situation and should not be relied upon as a substitute for professional legal counsel.</p>

                    <p>For advice regarding your specific legal matters, it is recommended that you consult with a qualified attorney. The information provided should not be used to make decisions about legal actions without obtaining personalized legal advice.</p>

                    <p>The content of this website is intended to provide insight into legal principles and is not to be construed as an endorsement of any specific legal strategy, firm, or outcome.</p>
                </>
            )
        }

    ];

    const faqData = [
        {
            title: '1. What types of legal services do you offer?',
            content: "We provide a wide range of legal services, including but not limited to, civil litigation, corporate law, criminal defense, divorce and family law, intellectual property rights, contracts and agreements, real estate law, and estate planning. Our team is equipped to handle complex legal issues and provide tailored advice for your specific needs."
        },
        {
            title: '2. How do I know if I need legal representation?',
            content: "If you are facing any legal dispute, need assistance with contracts, or require guidance on compliance and regulations, it’s advisable to seek legal representation. Some common scenarios include business disputes, divorce, criminal charges, property issues, and intellectual property matters. A legal professional can provide you with the necessary insights to protect your rights and interests."
        },
        {
            title: '3. How long does it take to resolve a legal issue?',
            content: "The timeline to resolve a legal issue depends on the nature of the case and the specific circumstances involved. For some matters, like contract review or simple agreements, resolution can be achieved relatively quickly. However, more complex cases such as litigation, divorce proceedings, or criminal defense may take longer. We will work with you to provide an estimated timeline based on your situation and keep you updated throughout the process."
        },
        {
            title: '4. What is family law, and how can it help with divorce or custody matters?',
            content: "Family law covers legal matters related to marriage, divorce, child custody, spousal support, and property division. If you are going through a divorce or need assistance with child custody arrangements, a family lawyer can provide the necessary guidance to protect your rights and ensure that the legal process is handled efficiently. We aim to help you navigate emotionally challenging times with legal clarity and compassion."
        },
        {
            title: '5. What is intellectual property law, and why is it important?',
            content: "Intellectual Property (IP) law is a legal field that protects creations of the mind, such as inventions, trademarks, designs, and artistic works. IP laws help protect your ideas and brand, allowing you to maintain exclusive rights and prevent others from copying or profiting from your work without permission. Whether you’re an artist, inventor, or business owner, securing your IP is crucial for maintaining competitive advantage and long-term success."
        },
        {
            title: '6. What should I do if I’m facing criminal charges?',
            content: "If you are facing criminal charges, it’s crucial to seek legal representation immediately. Criminal defense attorneys can help you understand the charges against you, guide you through the legal process, and build a defense strategy. Never speak to law enforcement or make statements without consulting an attorney, as anything you say can be used against you. Contact us for a confidential consultation as soon as possible."
        },
        {
            title: '7. How can I get in touch with you for a consultation?',
            content: "You can easily get in touch with us by filling out the contact form on our website, calling our office, or sending us an email. We offer initial consultations to discuss your case and provide legal advice. During the consultation, we will assess your situation and determine the best course of action. We’re here to guide you through your legal challenges with professionalism and expertise."
        }
    ]

    return (
        <>
<NavBar/>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Comprehensive Legal Solutions for Every Need</h1>
                    <p>
                        We provide a comprehensive suite of specialized legal services,
                        custom-designed to meet your unique needs. Reach out today for a
                        personalized consultation.
                    </p>
                    <a href='/services'><button>Get Started</button></a>
                </div>
            </section>
            <div className="container">
                <div className="tabbed-nav">
                    <button
                        className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
                        onClick={() => handleTabClick('services')}
                    >
                        Services
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'case-studies' ? 'active' : ''
                            }`}
                        onClick={() => handleTabClick('case-studies')}
                    >
                        Case Studies
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
                        onClick={() => handleTabClick('faq')}
                    >
                        FAQ
                    </button>
                </div>
                <div id="services" className={`tab-content ${activeTab === 'services' ? 'active' : ''}`}>
                    <section className="content-section">
                        <h2><i className="fa-solid fa-fingerprint"></i> Intellectual Property Law</h2>
                        <div className="service-block">
                            <div className="service-details">
                                <p>Intellectual Property (IP) Law forms the cornerstone of innovation protection and economic
                                    advancement, focusing on the preservation and enforcement of rights associated with intangible
                                    creations. At UMV Legal & Associates, we offer a wide array of specialized legal services tailored to
                                    secure and enforce intellectual property rights.</p>
                                <p><b>Our domain expertise encompasses:</b></p>

                                <ul>
                                    <li><b>Copyright Law:</b> Our services extend to the registration and protection of copyrights
                                        for literary, artistic, musical, dramatic, and cinematographic works under the Copyright
                                        Act, 1957. We provide robust legal support for addressing copyright infringement, drafting
                                        licensing agreements, and pursuing litigation to uphold your exclusive rights to
                                        reproduce, adapt, distribute, and publicly display your works.</li>
                                    <li><b>Patent Law:</b> Safeguard your technological and scientific innovations with our
                                        comprehensive patent law services. We facilitate prior art searches, draft patent claims,
                                        and oversee the filing and prosecution of patent applications under the Patents Act,
                                        1970. Our legal experts also provide advisory on patent licensing, assignments, and
                                        infringement litigation.</li>
                                    <li><b>Trademark Law:</b> Protect your brand’s identity and goodwill through trademark
                                        registration, enforcement, and litigation. Our services include conducting trademark
                                        searches, filing applications under the Trade Marks Act, 1999, addressing objections,
                                        resolving oppositions, and defending your trademark against infringement.</li>
                                    <li><b>Geographical Indications (GI) Law:</b> Preserve the authenticity and reputation of
                                        region-specific products by obtaining protection under the Geographical Indications of
                                        Goods (Registration and Protection) Act, 1999. We assist in drafting applications,
                                        handling disputes, and ensuring compliance with legal provisions.</li>
                                    <li><b>Design Registration:</b> Enhance the marketability of your innovative designs by
                                        registering them under the Designs Act, 2000. We manage the end-to-end process, including
                                        filing applications, responding to examination reports, and enforcing rights against
                                        unauthorized usage.</li>
                                </ul>

                                <a href='/intellectual'><button>Explore IP Services</button></a>
                            </div>
                        </div>
                    </section>
                    <section className="content-section">
                        <h2><i className="fa-solid fa-building"></i> Corporate Law</h2>
                        <div className="service-block">
                            <div className="service-details">
                                <p>Corporate law governs the establishment, operation, and regulation of corporate entities. UMV
                                    Legal offers in-depth legal solutions to ensure compliance and facilitate smooth business
                                    operations.</p>
                                <p><b>Our corporate law services include:</b></p>
                                <ul>
                                    <li><b>Company Incorporation:</b> Navigate the intricate process of incorporating a company
                                        under the Companies Act, 2013. We assist in drafting constitutional documents such as
                                        the Memorandum of Association (MoA) and Articles of Association (AoA), obtaining
                                        requisite certifications (DSC, DIN, and CIN), and ensuring compliance with the Registrar
                                        of Companies (RoC).</li>
                                    <li><b>Company Compliance:</b> Ensure adherence to statutory and regulatory obligations with
                                        our comprehensive compliance solutions. Our services include preparing board meeting
                                        resolutions, filing annual returns, maintaining statutory registers, and conducting
                                        secretarial audits to align with corporate governance norms.</li>
                                    <li><b>GST Audit and Advisory:</b> Comply with the provisions of the Central Goods and Services
                                        Tax (CGST) Act, 2017, through our expert GST audit and advisory services. We offer
                                        guidance on input tax credit utilization, GST returns filing, and representation in
                                        adjudication and appellate proceedings.</li>
                                    <li><b>National Company Law Tribunal (NCLT):</b> Rely on our extensive experience in NCLT
                                        matters, including insolvency and bankruptcy proceedings under the Insolvency and
                                        Bankruptcy Code (IBC), 2016, mergers, demergers, and cases of oppression and
                                        mismanagement. Our team ensures effective representation in disputes and compliance
                                        matters.</li>
                                </ul>
                                <a href='/corporate'><button>Learn about Corporate Law</button></a>
                            </div>
                        </div>
                    </section>
                    <section className="content-section">
                        <h2><i className="fa-solid fa-gavel"></i> Criminal Litigation</h2>
                        <div className="service-block">

                            <div className="service-details">
                                <p>UMV Legal’s criminal litigation practice is committed to upholding justice and protecting the
                                    rights of individuals and entities facing criminal charges. Our specialized services
                                    include:</p>
                                <ul>
                                    <li><b>Bail Applications:</b> Expert assistance in drafting and arguing anticipatory,
                                        interim, and regular bail petitions before magistrates, sessions courts, and high courts,
                                        ensuring adherence to procedural safeguards under the Criminal Procedure Code (CrPC),
                                        1973.</li>
                                    <li><b>Trial Advocacy:</b> Representation in trials involving offenses under the Indian
                                        Penal Code (IPC), 1860, the Prevention of Corruption Act, 1988, and other penal
                                        statutes. Our defense strategies are tailored to challenge evidence, cross-examine
                                        witnesses, and ensure a fair trial.</li>
                                    <li><b>Economic Offenses:</b> Legal counsel for complex white-collar crimes, including
                                        corporate fraud, embezzlement, insider trading, and violations of the Prevention of
                                        Money Laundering Act (PMLA), 2002. We ensure meticulous analysis and effective
                                        courtroom advocacy.</li>
                                    <li><b>Appeals and Revisions:</b> Representation in appellate courts for challenging
                                        wrongful convictions, sentences, and adverse orders under appellate jurisdiction,
                                        ensuring remedies against judicial errors.</li>
                                </ul>
                                <a href='/criminal'><button>Discover Criminal Litigation</button></a>
                            </div>
                        </div>
                    </section>
                    <section className="content-section">
                        <h2><i className="fa-solid fa-balance-scale"></i> Civil Litigation</h2>
                        <div className="service-block">
                            <div className="service-details">
                                <p>Our civil litigation practice focuses on delivering efficient legal remedies for disputes
                                    across various domains. We offer representation in:</p>
                                <ul>
                                    <li><b>Property Disputes:</b> Resolution of disputes related to ownership, tenancy, adverse
                                        possession, easements, and partition through litigation under the Transfer of Property
                                        Act, 1882, and related statutes.</li>
                                    <li><b>Contract Disputes:</b> Addressing breaches of contract, claims for specific
                                        performance, and monetary damages under the Indian Contract Act, 1872. We also offer
                                        representation in arbitration and conciliation proceedings under the Arbitration and
                                        Conciliation Act, 1996.</li>
                                    <li><b>Matrimonial and Family Law:</b> Professional legal support in matters of divorce,
                                        maintenance, child custody, adoption, and guardianship under statutes such as the Hindu
                                        Marriage Act, 1955, and the Special Marriage Act, 1954. Our empathetic approach ensures
                                        resolution with sensitivity and care.</li>
                                    <li><b>Cheque Bounce Cases:</b> Comprehensive legal services in cases of dishonored cheques
                                        under Section 138 of the Negotiable Instruments Act, 1881. We assist in issuing
                                        statutory notices, filing complaints, and pursuing recovery claims.</li>
                                </ul>
                                <a href='/litigation'><button>Explore Civil Litigation</button></a>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    id="case-studies"
                    className={`tab-content ${activeTab === 'case-studies' ? 'active' : ''
                        }`}
                >
                    <section className="content-section">
                        <h2>Featured Case Studies</h2>
                        {accordionData.map((item, index) => (
                            <div className="accordion-container" key={index}>
                                <div
                                    className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <h3>{item.title}</h3>
                                    <span><i className="fas fa-chevron-down"></i></span>
                                </div>
                                <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
                <div
                    id="faq"
                    className={`tab-content ${activeTab === 'faq' ? 'active' : ''}`}
                >
                    <section className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        {faqData.map((item, index) => (
                            <div className="accordion-container" key={index}>
                                <div
                                    className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <h3>{item.title}</h3>
                                    <span><i className="fas fa-chevron-down"></i></span>
                                </div>
                                <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                </div>
            </div>
<Footer/>
        </>
    );
};

export default App;


