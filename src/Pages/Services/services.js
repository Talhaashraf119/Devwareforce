import React, { useState,useEffect,useRef } from 'react';
import './services.css'

const Services = () => {
    const sectionOneRef = useRef(null);
    const [activeService, setActiveService] = useState('web-development');
    useEffect(() => {
        const sectionOne = sectionOneRef.current;
    
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
    
        return () => {
          if (sectionOne) observer.unobserve(sectionOne); // Cleanup for first section
        };
      }, []);
    const servicesContent = {
        'web-development': {
            text: 'We offer cutting-edge web development solutions for your brand.',
            video: '/WEBSITE.mp4',
            detailedDescription: 'Our web development services include full-stack development, responsive design, and e-commerce solutions that are tailored to your business needs. We use the latest technologies to ensure your website is not only visually appealing but also functional and user-friendly.'


        },
        'graphic-designing': {
            text: 'Creative and innovative graphic designing to make your brand stand out.',
            video: '/GRAPHIC DESIGNING.mp4',
            detailedDescription: 'Our graphic designing services encompass branding, logo design, and marketing materials. We work closely with you to understand your vision and create designs that effectively communicate your brand message and resonate with your target audience.'

        },
        'digital-marketing': {
            text: 'Engage your audience with strategic digital marketing campaigns.',
            video: '/Digital Marketing.mp4',
            detailedDescription: 'We provide comprehensive digital marketing solutions, including social media management, content marketing, and email campaigns, to help you build brand awareness and drive sales. Our team uses data-driven strategies to ensure your campaigns are successful.'

        },
        'seo': {
            text: 'Boost your brand visibility with professional SEO services.',
            video: '/seo1.mp4',
            detailedDescription: 'Our SEO services are designed to enhance your online presence. We perform keyword research, on-page optimization, and backlink building to improve your search engine rankings and drive organic traffic to your website.'

        },
        'social-media-marketing': {
            text: 'Effective social media marketing to connect with your audience.',
            video: '/SOCIAL MEDIA MARKETING.mp4',
            detailedDescription: 'We create engaging social media strategies that foster community and brand loyalty. From content creation to analytics, we ensure your social media platforms are effectively reaching and engaging your audience.'

        },
        'app-development': {
            text: 'Custom mobile app development tailored to your business needs.',
            video: '/MOBILE APP.mp4',
            detailedDescription: 'Our app development team specializes in creating user-friendly mobile applications for both iOS and Android platforms. We focus on delivering high-quality apps that meet your specific business requirements and provide a seamless user experience.'

        }
    };

    const showService = (service) => {
        setActiveService(service);
    };

  return (
    <div>
       <div ref={sectionOneRef} className="section-container mt-5">
  <div className="content-container cont">
    <div className="video-wrapper mt">
      <video src="\WHAT WE DO.webm" autoPlay muted loop className="section-video" />
    </div>
    <div className="text-content mt">
  <h1>Innovative Solutions for a Digital World</h1>
  <h2>Your Vision, Our Expertise</h2>
  <p>
  We combine creativity and technical precision to deliver impactful solutions.
    From software development to digital design, our team of professionals brings
    your ideas to life with innovation, quality, and a dedication to excellence.
    Since 2024, we've been transforming concepts into realities, tailored to meet
    the unique needs of each client and project.
  </p>
      <div className="button-group">
        <a href="#" className="cta-btn">Get A Quote</a>
        <a href="#" className="view-more-btn">View More</a>
      </div>
    </div>
  </div>
</div>
   
<a href="https://wa.me/+923004612583" target="_blank" class="whatsapp-btn">
    <i class="fab fa-whatsapp"></i>    </a>
 
       
         <section class="Services-container">
        <div class="Services-content">
            <div class="Services-heading">
                <h2><span class="Services-highlight">What</span> We Do</h2>
            </div>
            <p>At DavWare Force, we specialize in crafting digital solutions that propel businesses to new heights. Our comprehensive suite of services encompasses everything from strategic digital marketing to cutting-edge development, ensuring your brand not only stands out but thrives in the digital landscape.</p>
        </div>

        <div class="Services-content">
            <div class="Services-heading">
                <h2><span class="Services-highlight">How</span> We Do It?</h2>
            </div>
            <p>Our process begins with a deep understanding of your business, its goals, and its unique challenges. We then tailor innovative strategies that align with your vision, ensuring every project is a bespoke solution crafted for success. With a focus on collaboration, transparency, and measurable outcomes, Davware Force brings a strategic approach to every aspect of our work.</p>
        </div>
    </section>
    <section className="services">
            <h1>All-Inclusive Services Tailored to Meet</h1>
            <h2>Every Brand's Needs</h2>
            <div className="services-buttons">
                <button 
                    className={`service-btn ${activeService === 'web-development' ? 'active' : ''}`} 
                    onClick={() => showService('web-development')}>
                    Web Development
                </button>
                <button 
                    className={`service-btn ${activeService === 'graphic-designing' ? 'active' : ''}`} 
                    onClick={() => showService('graphic-designing')}>
                    Graphic Designing
                </button>
                <button 
                    className={`service-btn ${activeService === 'digital-marketing' ? 'active' : ''}`} 
                    onClick={() => showService('digital-marketing')}>
                    Digital Marketing
                </button>
                <button 
                    className={`service-btn ${activeService === 'seo' ? 'active' : ''}`} 
                    onClick={() => showService('seo')}>
                    SEO
                </button>
                <button 
                    className={`service-btn ${activeService === 'social-media-marketing' ? 'active' : ''}`} 
                    onClick={() => showService('social-media-marketing')}>
                    Social Media Marketing
                </button>
                <button 
                    className={`service-btn ${activeService === 'app-development' ? 'active' : ''}`} 
                    onClick={() => showService('app-development')}>
                    App Development
                </button>
            </div>

            {/* Service Content */}
            <div className="s-content">
                <video 
                    src={servicesContent[activeService].video} 
                    autoPlay loop muted
                    className="s-video" 
                    alt={activeService} 
                />
               <p><strong>Description:</strong> {servicesContent[activeService].text}</p>
               <p>{servicesContent[activeService].detailedDescription}</p>
            </div>
            <div className="sticker">
    <button className="sticker-button"><a style={{ color: 'white', textDecoration: 'none' }} href="https://wa.me/+923004612583">
  Get Started Now!
</a>
</button>
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
  )
}

export default Services