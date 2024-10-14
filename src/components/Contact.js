import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Layout>
      <main className="contact-page">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            At SisterFlora, we are always ready to assist you. Whether you have a question about our products, need help with an order, or simply want to talk about flowers,
            we're here for you. Below you'll find all the ways you can reach us. Choose the one that suits you best, and we'll make sure to get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <h2>How to Reach Us</h2>
            <p>We understand the importance of communication and are committed to providing you with excellent service. Here are the best ways to contact our team:</p>

            <h3>Email Us</h3>
            <p>For inquiries, support, or feedback, email us anytime at <Link to="/contact">contact@sisterflora.com</Link>. We aim to respond to all emails within 24 hours.</p>

            <h3>Give Us a Call</h3>
            <p>
              Prefer to speak with someone directly? You can reach our customer service team by phone at <Link to="/contact">(123) 456-7890</Link>. 
              Our phone lines are open from 9 AM to 5 PM, Monday through Friday.
            </p>

            <h3>Visit Us</h3>
            <p>Come and see our beautiful selection of flowers in person! Visit us at:
              <br /><strong>123 Flower Lane, Garden City, XY 12345</strong>
              <br />We're open from 10 AM to 6 PM every day. Our knowledgeable staff would love to assist you in choosing the perfect flowers for your needs.
            </p>

            <h3>Follow Us</h3>
            <p>Stay updated with the latest news, offers, and floral tips by following us on social media. Find us on:
              <ul>
                <li><Link to="/contact">Facebook</Link></li>
                <li><Link to="/contact">Instagram</Link></li>
                <li><Link to="/contact">Twitter</Link></li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;