// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import About from './About/About';
import Modal from './Modal/Modal';

function Layout() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const randomColor = [
    "primary", "secondary", "light", "warning", "success", "danger"
  ]

  const randomize = (items) => {
    return items[Math.floor(Math.random()*items.length)];
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <About/>
      <div className="container-fluid vh-100" style={{ overflow: show && 'hidden' }}>
      {/* <div className="container-fluid vh-100"> */}

        <div className='row row-cols-auto h-100 justify-content-between align-items-center
        '>
          {
            loading &&
            <div className='col-12'>
                <h1 className='inter-xli text-center text-primary'><span className='p-5'>Loading ...</span></h1>
            </div>
          }
          {
            error &&
            <div className='col-12'>
                <h1 className='inter-xli text-center text-primary'><span className='p-5'>There is a problem fetching the data -  {error}</span></h1>
            </div>
          }
          {
            data &&
              data.map(({ id, title }) => (
                <div key={ id } className='col col-md-3 mt-3'>
                  <button
                    className={`is-sticker is-btn bg-${randomize(randomColor)} border border-dark border-2 text-center text-dark p-5`}
                    onClick={() => {
                      setShow(true);
                      window.location.href=`#section-${id}`;
                    }}
                  >
                    <h2 className={`inter-li`}><span className='fw-bold'>{id}</span> - { title }</h2>
                  </button>
                </div>
              ))
          }

        </div>
      </div>
      {/* Modal */}
      <Modal show={show} data={data} onClose={() => setShow(false)} />
    </>
  );
}

export default Layout;
