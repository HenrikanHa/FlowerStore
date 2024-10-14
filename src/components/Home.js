import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import '../styles/Home.css';

const Home = () => {
  return (
    <Layout>
      <main className="home-page hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <h1>Flowers Make Memories!</h1>
              <p>At SisterFlora, we believe in the power of blossoms to elevate life's moments
                into lasting memories. With every petal, stem, and leaf, we curate not just
                bouquets, but experiences that resonate with emotion and beauty.
                Whether it's celebrating love, offering comfort, or brightening a regular day,
                our flowers are handpicked to create connections and bring joy to your journey.</p>
              <Link to='/shop'>
                <button className="btn btn-order">Order now</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;