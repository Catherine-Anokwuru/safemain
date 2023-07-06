import about1 from '../../assets/about1.jpg'
import about3 from '../../assets/about3.jpg'

const About = () => {
  return (
    <section className="about" key='#about'>
      <div className="about-container">
        <article className="single-about about1">
          <img src={about3} alt="About Safemain" className='img1'/>
          <div className='text1'>
            <h3>About Safemain</h3>
            <div className="underline"></div>
            <p>
              Safemain Integrated Services Limited, we are committed to delivering high-quality, reliable, and cost-effective oil and gas services to our clients. With a team of highly skilled and
              experienced professionals, we offer a comprehensive range of services including engineering, construction and fabrication, procurement, maritime consultation and vessel chartering, and
              abandonment & decommissioning. No matter what your needs are, we have the expertise and resources to deliver exceptional results.
            </p>
          </div>
        </article>
        <article className="single-about about2">
          <div className='text2'>
            <h3>Mission/Vision Statement</h3>
            <div className="uunderline"></div>
            <p>
              Our mission is to provide exceptional oil and gas servicing solutions to our clients in Nigeria, utilizing our expertise, experience and state-of-the-art technology to deliver safe,
              efficient and cost-effective services that exceed expectations. <br /> Our vision is to be the leading oil and gas servicing company in Nigeria, recognized for our superior quality, reliability, and
              commitment to delivering outstanding results for our clients, while fostering sustainable growth and development in the communities we serve.
            </p>

          </div>
          <img src={about1} alt="Mission Statement" className='img2'/>
        </article>
        {/* <article className="single-about about3">
          <img src={about1} alt="Vision Statement" />
          <div>
            <h3>Vision Statement</h3>
            <div className="underline"></div>

            <p>
              To be the leading oil and gas servicing company in Nigeria, recognized for our superior quality, reliability, and commitment to delivering outstanding results for our clients, while
              fostering sustainable growth and development in the communities we serve.
            </p>
          </div>
        </article> */}
      </div>
    </section>
  );
}
export default About