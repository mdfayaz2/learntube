import React from 'react';
import Slider from 'react-slick';
import './LearnerCarousel.css'; // Custom styles

const learners = [
  {
    name: 'Sindhuja Kathirvel',
    title: 'Sr Specialist - Accounts',
    company: 'HCL Technologies',
    image: '/images/image1.png',
    companyLogo: 'hcl-logo.png',
  },
  {
    name: 'Raghav Dubey',
    title: 'Deputy Manager',
    company: 'Polycab Industries',
    image: '/images/image1.png',
    companyLogo: 'polycab-logo.png',
  },
  {
    name: 'Krishan Kumar',
    title: 'Research And Development',
    company: 'Daikin Airconditioning',
    image: '/images/image1.png',
    companyLogo: 'daikin-logo.png',
  },
  {
    name: 'Arpita Datta',
    title: 'Manager',
    company: 'Lenskart',
    image: '/images/image1.png',
    companyLogo: 'lenskart-logo.png',
  },
  {
    name: 'Debjyoti Das',
    title: 'Customer Service Manager',
    company: 'Axis Bank',
    image: '/images/image1.png',
    companyLogo: 'axis-logo.png',
  },
  {
    name: 'Akshay Betkar',
    title: 'IT Manager',
    company: 'SBI Capital',
    image: '/images/image1.png',
    companyLogo: 'sbi-logo.png',
  },
  {
    name: 'Manish Sharma',
    title: 'Team Lead - Project',
    company: 'Tata Technologies',
    image: '/images/image1.png',
    companyLogo: 'company',
  },
];

const LearnerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100, // Speed of the transition between slides (500ms by default)
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Speed for autoplay, slide every 1 second (1000ms)
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <div className="slick-arrow slick-next">&gt;</div>,
    prevArrow: <div className="slick-arrow slick-prev">&lt;</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="learner-carousel-container">
      <h2 className="carousel-title">Our Learners Work At</h2>

      <Slider {...settings}>
        {learners.map((learner, index) => (
          <div key={index} className="learner-card">
            <div className="learner-image-container">
              <img src={learner.image} alt={learner.name} className="learner-image" />
            </div>
            <h3 className="learner-name">{learner.name}</h3>
            <p className="learner-title">{learner.title}</p>
            <div className="learner-company">
              <img src="/images/company.png" alt={learner.company} className="company-logo" />
              <p>{learner.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LearnerCarousel;
