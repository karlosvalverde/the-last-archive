// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About/About';
import Modal from './Modal/Modal';

function Layout() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const randomColor = [
  //   "primary", "secondary", "light", "warning", "success", "danger"
  // ]

  // const randomize = (items) => {
  //   return items[Math.floor(Math.random()*items.length)];
  // };

  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(null);

  let location = useLocation();

  useEffect(() => {
    fetch( location.pathname === "/pt" ? `data_pt.json` : `data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.sort(() => Math.random() - 0.5));
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
      {/* <div className="container-fluid vh-100" style={{ overflow: show && 'hidden' }}> */}
      <div className="container-fluid vh-100">

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
              data.map(({ id, color, name }) => (
                <div key={ id } className='col col-md-3 mt-3'>
                  <div
                    className={`d-grid is-sticker is-btn bg-${color} border border-dark border-2 text-center text-break text-dark p-5`}
                    onClick={() => {
                      setScroll(`section-${id}`);
                      setShow(true);
                    }}
                  >
                    <h2 className={`inter-li`}>
                      {/* <span className='fw-bold'>{ id }</span> -  */}
                      { name }</h2>
                  </div>
                </div>
              ))
          }

        </div>
      </div>
      {/* Modal */}??
      {
        show &&
          <Modal show={show} data={data} scroll={scroll} onClose={() => setShow(false)} />
      }
    </>
  );
}

export default Layout;
