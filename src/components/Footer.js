import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    function updateDateTime() {
      let datetime = document.getElementById('datetime');
      let now = new Date().toLocaleString();
      datetime.innerHTML = now;
    }

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <div className="row">
        <div className="col-md-6 text-left">
          &copy; 2024 SisterFlora, Inc. All rights reserved.
        </div>
        <div className="col-md-6 text-right" id="datetime">
        </div>
      </div>
    </footer>
  );
};

export default Footer;