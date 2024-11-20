import React, {useState, useEffect, useRef } from 'react';
import './home.css';


const Home = () => {
  const teamMembersRef = useRef(null);
  const successfulCampaignsRef = useRef(null);
  const liveWebpagesRef = useRef(null);
  const internationalClientsRef = useRef(null);
  const leftTextRef = useRef(null);
  const statsSectionRef = useRef(null); 
  const videoRef = useRef(null);
  const [filter, setFilter] = useState('*');
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(150); // Speed of typing
  const words = ["Web Development","Brand Building", "Digital Marketing", "SEO","Graphic Designing"];
  const animateCounter = (ref, target) => {
    let count = 0;
    const duration = 2000; // Animation duration in milliseconds
    const increment = Math.ceil(target / (duration / 100)); // Increment per frame

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      ref.current.innerText = count + "+";
    }, 200);
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2; // Set playback speed to half
    }
  }, []);
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      // Set typing speed
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setSpeed(100); // Speed up deletion
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1); // Move to the next word
        setSpeed(200); // Reset typing speed
      }
    };

    const timer = setTimeout(() => handleTyping(), speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum, speed, words]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters only when the stats section is in view
            animateCounter(teamMembersRef, 40);
            animateCounter(successfulCampaignsRef, 100);
            animateCounter(liveWebpagesRef, 200);
            animateCounter(internationalClientsRef, 20);
            observer.unobserve(entry.target); // Optional: Stop observing after the animation is triggered
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (statsSectionRef.current) observer.observe(statsSectionRef.current); // Observe the stats section

    return () => {
      if (statsSectionRef.current) observer.unobserve(statsSectionRef.current); // Cleanup
    };
  }, []);


  // Trigger animations on page load
  useEffect(() => {
    setTimeout(() => {
      if (leftTextRef.current) leftTextRef.current.classList.add('left-animate');
    }, 500); // Delays to make sure the page is fully loaded
  }, []);

  // Use the IntersectionObserver to detect when the section is in view
  const sectionOneRef = useRef(null); // Reference for the first section
  const sectionTwoRef = useRef(null); // Reference for the second section

  useEffect(() => {
    const sectionOne = sectionOneRef.current;
    const sectionTwo = sectionTwoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          } else {
            entry.target.classList.remove('section-visible'); // Optional: Reset animation if scrolled away
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionOne) observer.observe(sectionOne); // Observe the first section
    if (sectionTwo) observer.observe(sectionTwo); // Observe the second section

    return () => {
      if (sectionOne) observer.unobserve(sectionOne); // Cleanup for first section
      if (sectionTwo) observer.unobserve(sectionTwo); // Cleanup for second section
    };
  }, []);
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Nishat Clone',
      category: 'web',
      image: '/nishat clone.PNG',
      link: 'https://nishat-front.vercel.app/', // Add actual link if necessary
    },
    {
      id: 2,
      title: 'Auto-Garage Website',
      category: 'web',
      image: '/car.PNG',
      link: 'https://www.expresscareautogarage.ae/', // Link to the project
    },
    {
      id: 3,
      title: 'Car-Detailing Website',
      category: 'web',
      image: '/page.PNG',
      link: 'https://car-detailing-eight.vercel.app/', // Add actual link if necessary
    },
    {
      id: 4,
      title: 'Doctor Website',
      category: 'web',
      image: '/Doctor-orth.PNG',
      link: 'https://single-doc.vercel.app/', // Add actual link if necessary
    },
    
    {
      id: 5,
      title: 'Hospital & Clinic Website',
      category: 'web',
      image: '/Hospital.PNG',
      link: 'https://medical-iota-kohl.vercel.app/', // Add actual link if necessary
    },
    {
      id: 6,
      title: 'Portfolio Digital Marketing ',
      category: 'add',
      image: '/digital.jpg',
      link: 'https://www.canva.com/design/DAGI96jQBZg/A0DD4iPmjv6Cs13LP3gFfg/view?utm_content=DAGI96jQBZg&utm_campaign=designshare&utm_medium=link&utm_source=editor', // Add actual link if necessary
    },
   
  ];
  
  return (
    <div>

<main>
  <section className="hero">
    <div className="overlay"></div>
    <div className="hero-content">
      <h1 ref={leftTextRef}>
        <span className="fixed-text">We Provide the Services of </span>
        <span className="animated-text">{displayText}|</span>
        <br /><hr></hr>
      </h1>
      <a href="https://wa.me/+923004612583" className="quote-btn">Get A Quote</a>
    </div>
    <div className="image-container">
      <img src="/A_man_with_a_box_for_a_head_labeled_digital_box__spreading_more_boxes_with_names_web_development__SEO__graphic_design__Social_media_Marketing_in_a_funny_way-removebg-preview.png" alt="Service Image" className="hero-image" />
    </div>
  </section>
</main>

      
    <a href="https://wa.me/+923004612583" target="_blank" class="whatsapp-btn">
    <i class="fab fa-whatsapp"></i>    </a>
 


      <div className="services-section">
        <h2>Unlocking Potential with IT Services<br></br> <span style={{color:'#0dcaf0'}}>Provided</span></h2>
        <div className="cards-container">
          <div className="card">
            <video autoPlay loop muted className="card-video">
              <source src="/DIGITAL.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-content">
              <h3>Digital Marketing</h3>
            </div>
          </div>

          <div className="card">
            <video autoPlay muted loop className="card-video">
              <source src="/WEB.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-content">
              <h3>Website Development</h3>
            </div>
          </div>

          <div className="card">
            <video autoPlay muted loop className="card-video">
              <source src="/SEO.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-content">
              <h3>Search Engine Optimization</h3>
            </div>
          </div>
        </div>
      </div>
      <section className="marquee-section">
  <marquee behavior="scroll" direction="left" scrollamount="6">
    <p>At Devware Force, we merge innovation with excellence, driving businesses towards a smarter future.</p><p>At Devware Force, we merge innovation with excellence, driving businesses towards a smarter future.</p>
  </marquee>
<hr></hr>
</section>
<div className="pixel-portfolio-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center wow fadeInUp ">
                <h1>Made By <span  style={{color:'#0dcaf0'}}>DevWare Force</span>
                </h1>
                <img src="img/core-img/x.png" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="pixel-projects-menu wow fadeInUp">
          <div className="text-center portfolio-menu">
            <button className={`btn ${filter === '*' ? 'active' : ''}`} onClick={() => handleFilterChange('*')}>All Projects</button>
            <button className={`btn ${filter === 'web' ? 'active' : ''}`} onClick={() => handleFilterChange('web')}>Web Development</button>
            <button className={`btn ${filter === 'add' ? 'active' : ''}`} onClick={() => handleFilterChange('add')}>Gigital Marketing</button>
          </div>
        </div>

        <div className="pixel-portfolio">
          {portfolioItems
            .filter(item => filter === '*' || `${item.category}` === filter)
            .map(item => (
              <div key={item.id} className={`single_gallery_item ${item.category} wow fadeInUp`} data-wow-delay="0.2s">
                <img src={item.image} alt=""/>
                <div className="hover-content text-center d-flex align-items-center justify-content-center">
                  <div className="hover-text">
                    <a href={item.link} className="zoom-img"><i className="fa fa-eye" aria-hidden="true"></i></a>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <hr/>

  
      <div ref={sectionOneRef} className="section-container ">
        <div className="content-container cont">
          <div className="image-wrapper mt">
            <img src="/pexels-mizunokozuki-12899151.jpg" alt="Tech Image" className="section-image" />
          </div>
          <div className="text-content mt">
            <h1>Tech Pioneers Bridging Imagination to</h1>
            <h2>Developments</h2>
            <p>
              We blend creativity with technology to deliver exceptional solutions.
              With a team of skilled professionals, we've been transforming ideas
              into reality since 2024. Our commitment to quality, innovation, and
              client satisfaction sets us apart as a reliable partner for your
              software and design needs.
            </p>
            <div className="button-group">
              <a href="#" className="cta-btn">Get A Quote</a>
              <a href="#" className="view-more-btn">View More</a>
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionTwoRef} className="section-container">
        <div className="content-container">
          <div className="text-content">
            <h1>Elevate Your Brand with Devware Force's Expert Designing</h1>
            <h2>Solutions</h2>
            <p>
              We blend creativity with technology to deliver exceptional solutions.
              With a team of skilled professionals, we've been transforming ideas
              into reality since 2024. Our commitment to quality, innovation, and
              client satisfaction sets us apart as a reliable partner for your
              software and design needs.
            </p>
            <div className="button-group">
              <a href="#" className="cta-btn">Get A Quote</a>
              <a href="#" className="view-more-btn">View More</a>
            </div>
          </div>

          <div className="image-wrapper">
            <img src="/pexels-pixabay-355952.jpg" alt="Tech Pioneers" className="section-image" />
          </div>
        </div>
      </div>

      <h1 className="stats-intro">Embrace Next-Level Efficiency with <br></br><span style={{color:'#0dcaf0'}}>Devware Force</span> </h1>
      <div className="stats-section" ref={statsSectionRef}>
        
      <div className="video-container">
    <video
      autoPlay
      loop
      muted
      ref={videoRef}
      className="stats-video"
    >
      <source src="\854322-hd_1280_720_25fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  
        <div className="stats-container">
          
          <div className="stat-card">
            <h3 ref={teamMembersRef} className="stat-number">0</h3>
            <p className="stat-text">Team Members</p>
          </div>
          <div className="stat-card">
            <h3 ref={successfulCampaignsRef} className="stat-number">0</h3>
            <p className="stat-text">Successful Marketing Campaigns</p>
          </div>
          <div className="stat-card">
            <h3 ref={liveWebpagesRef} className="stat-number">0</h3>
            <p className="stat-text">Live Webpages</p>
          </div>
          <div className="stat-card">
            <h3 ref={internationalClientsRef} className="stat-number">0</h3>
            <p className="stat-text">International Clients</p>
          </div>
        </div>
      </div>
      <section class="services">
        <h1>All-Inclusive Services Tailored to Meet</h1>
        <h2>Every Brand's Needs</h2>
        <div class="services-buttons">
            <button class="service-btn active"><a 
            href="/services" 
            style={{
                color: 'black', 
                textDecoration: 'none', 
           
            }}
        >Web Development</a></button>
            <button class="service-btn"><a 
            href="/services" 
            style={{
                color: 'black', 
                textDecoration: 'none', 
           
            }}
        >Graphic Designing</a></button>
            <button class="service-btn"><a 
            href="/services" 
            style={{
                color: 'black', 
                textDecoration: 'none', 
           
            }}
        >Digital Marketing</a></button>
            <button class="service-btn"><a 
            href="/services" 
            style={{
                color: 'black', 
                textDecoration: 'none', 
            }}>SEO</a></button>
            <button class="service-btn"><a 
            href="/services" 
            style={{
                color: 'black', 
                textDecoration: 'none', 
           
            }}
        >Social Media Marketing</a></button>
            <button class="service-btn"><a 
            href="/services" 
            style={{
                color: 'black', 
                textDecoration: 'none', 
           
            }}
        >
            App Development
        </a></button>
        </div>
    </section>
 
    <div class="tilted-marquee">
  <div class="marquee-content">
    <img src="\1.png" alt="Image 1" />
    <img src="\web.png" alt="Image 2" />
    <img src="\2.png" alt="Image 3" />
    <img src="\graphic.png" alt="Image 4" />
    <img src="\3.png" alt="Image 5" />
    <img src="\ppp.png" alt="Image 6" />
  </div>
</div>





    </div>
  );
};

export default Home;
