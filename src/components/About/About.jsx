import React from "react";
import img from "./about.jpg";
import Back from "./Back";
import "./About.css";

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>

            <p>Our story begins with a passion for connecting people with their perfect homes and investment opportunities. Founded on the principles of integrity, expertise, and personalized service, [Company Name] is more than just a real estate agency – we're your trusted partner in the journey of property exploration and acquisition.At [Company Name], we understand that real estate transactions are not just about buying or selling property; they're about fulfilling dreams, achieving goals, and building legacies. With this understanding at our core, we strive to deliver an unparalleled experience to every client who walks through our doors.Our team of seasoned professionals brings a wealth of knowledge and experience to the table, ensuring that each interaction is met with expertise and insight. Whether you're a first-time buyer navigating the complexities of the market or a seasoned investor seeking your next lucrative opportunity, we're here to provide the guidance and support you need to make informed decisions with confidence.But beyond our commitment to excellence in service, [Company Name] is deeply rooted in the communities we serve. We believe in giving back and making a positive impact, whether through charitable initiatives, community outreach programs, or sustainable development practices. With a dedication to innovation and a relentless pursuit of excellence, we're continually evolving to meet the ever-changing needs of our clients and the market. As we embark on this journey together, we invite you to experience the [Company Name] difference – where integrity, expertise, and personalized service converge to create extraordinary real estate experiences.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
