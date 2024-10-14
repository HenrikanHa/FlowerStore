import React from 'react';
import Layout from '../components/Layout';
import '../styles/About.css';

const About = () => {
  return (
    <Layout>
      <main className="about-page">
        <div className="container">
          <h1>About Us</h1>
          <section>
            <h2>Our Mission</h2>
            <p>At SisterFlora, our mission is simple but profound: to bring the beauty of nature into everyday lives through our exquisite floral arrangements and bouquets. 
              We believe that flowers are not just decorations; they are expressions of emotions, and each petal, stem, and leaf plays a part in crafting your story.</p>

            <h2>Our Vision</h2>
            <p>
              Our vision is to be more than just a flower shop. We aim to be a movement that promotes sustainability, supports local farmers, and brings communities together 
              through the love of flowers. We strive to innovate continually and sustainably, ensuring that every bouquet we craft not only looks breathtaking but also makes a 
              positive impact on the environment.
            </p>

            <h2>Our Story</h2>
            <p>
              Founded in 2015 by three sisters with a shared passion for horticulture, SisterFlora began in a small storefront in our hometown. What started as a tiny seed of an idea 
              has blossomed into a thriving business, thanks to our community's support and our team's relentless dedication. Our founders — Anna, Beth, and Cara — grew up in a family of 
              gardeners and bring over a decade of floral design experience to the table. Their expertise and love for floral artistry are at the heart of every composition we create.
            </p>

            <h2>Our Team</h2>
            <p>
              The SisterFlora team is a diverse group of creative individuals who share a common goal — to deliver joy and stunning floral artistry. Our florists are not only skilled 
              in traditional techniques but are also innovators and trendsetters in the floral industry. From the meticulous caretakers who ensure our blooms are perfect to the cheerful 
              delivery drivers who bring them to your doorstep, our team is dedicated to making your experience unforgettable.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li><strong>Quality and Freshness:</strong> We source our flowers daily from trusted local farms, ensuring that they are always fresh and of the highest quality.</li>
              <li><strong>Custom Creations:</strong> Each order is crafted with personal attention, tailored to fit your specific requirements and occasions.</li>
              <li><strong>Sustainability Commitment:</strong> We are committed to reducing our carbon footprint by implementing eco-friendly practices in every aspect of our operations.</li>
            </ul>

            <h2>Join Our Community</h2>
            <p>
              Beyond flowers, SisterFlora is committed to building a community. We host workshops, participate in local events, and share our love for floristry with everyone 
              interested in learning. Join us at our next event or subscribe to our newsletter for floral tips, news, and more.
            </p>

            <h2>Contact Us</h2>
            <p>
              Visit us at our shop, follow us on social media, or give us a call. We love to talk about flowers, and we're here to help you pick 
              the perfect arrangement for your special moment.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default About;