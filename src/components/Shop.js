import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/Shop.css';
import flowersData from '../constants/flowerData';

const Shop = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    setFlowers(flowersData);
  }, []);

  return (
    <Layout>
      <main className="shop-page">
        <div className="container">
          <h1>Shop Our Flowers</h1>
          <p>Explore our wide range of beautiful flowers and make your perfect choice.</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
            {flowers.map(flower => (
              <div key={flower.name} className="col">
                <div className="card h-100">
                  <img src={flower.imageUrl} alt={flower.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{flower.name}</h5>
                    <p className="card-text">{flower.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="price">Price: ${flower.price}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Shop;