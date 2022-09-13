// import logo from './logo.svg';
import React, { useState, useRef } from 'react';

import { Button } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';
import './App.scss';
import NewScrollspy from './NewScrollSpy/NewScrollspy';
import Modal from './Modal/Modal';

function MyModal(props) {
  const collapseSection1 = useRef(null);
  const collapseSection2 = useRef(null);
  const collapseSection3 = useRef(null);
  const collapseSection4 = useRef(null);
  const collapseSectionA = useRef(null);
  const collapseSectionB = useRef(null);

  const collapseContainerRef = useRef(null);

  const collapseSubsections = [collapseSectionA, collapseSectionB];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Title
          {/* <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#list-item-1">Item 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#list-item-2">Item 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#list-item-3">Item 3</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#list-item-4">Item 4</a>
              </li>
            </ul>
          </nav> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <MDBContainer>
      <MDBRow>
        <MDBCol md='8'>
          <div id='collapse' ref={collapseContainerRef} className='scrollspy-example'>
            <section ref={collapseSection1} id='section-collapse-1'>
              <h3>Section 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
            </section>
            <section ref={collapseSection2} id='section-collapse-2'>
              <h3>Section 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
            </section>
            <section ref={collapseSection3} id='section-collapse-3'>
              <h3>Section 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <section ref={collapseSectionA} id='subsection-collapse-a'>
                <h3>Subsection A</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
              <section ref={collapseSectionB} id='subsection-collapse-b'>
                <h3>Subsection B</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
            </section>
            <section ref={collapseSection4} id='section-collapse-4'>
              <h3>Section 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
            </section>
          </div>
        </MDBCol>

        <MDBCol md='4'>
          <MDBScrollspy container={collapseContainerRef}>
            <MDBScrollspyLink targetRef={collapseSection1}>Section 1</MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}>Section 2</MDBScrollspyLink>
            <MDBScrollspyLink collapsible subsections={collapseSubsections} targetRef={collapseSection3}>
              Section 3
            </MDBScrollspyLink>
            <MDBScrollspySubList className='ps-3' collapsible={collapseSubsections}>
              <MDBScrollspyLink targetRef={collapseSectionA}>Subsection A</MDBScrollspyLink>
              <MDBScrollspyLink targetRef={collapseSectionB}>Subsection B</MDBScrollspyLink>
            </MDBScrollspySubList>
            <MDBScrollspyLink targetRef={collapseSection4}>Section 4</MDBScrollspyLink>
          </MDBScrollspy>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Sandbox() {

  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
    <div className="container-fluid vh-100">
      <div className='row row-cols-auto h-100 justify-content-between'>

        <div className='col col-lg-3 bg-primary position-relative' >
          {/* <button data-bs-toggle="modal" href="#myModal" role="button"> */}
            <h2><button className='stretched-link' onClick={() => {
              setModalShow(true);
              } }>TEST</button></h2>
        </div>

        <div className='btn col col-lg-3 bg-secondary align-items-center'>
          <button className="" onClick={() => {
              setShow(true);
              setName("Pedro - Test 1");
            }}>
            Test 1
          </button>

        </div>

        <div className='btn col col-lg-3 bg-success align-items-center'>
          <button className="" onClick={() => {
                setShow(true);
                setName("Roberto Carlos - Test 2");
              }}>
            Test 2
          </button>
        </div>

        <div className='col col-lg-3 bg-warning'>
          <NewScrollspy />
        </div>
      </div>
    </div>

    {/* Modal */}
    <Modal show={show} name={name} onClose={() => setShow(false)} />
    <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Sandbox;
