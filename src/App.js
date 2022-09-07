// import logo from './logo.svg';
import React, { useState, useRef } from 'react';

import { Button, Modal } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';
import './App.css';
import MyScrollspy from './Scrollspy';
import Scrollspy from "react-scrollspy"
import NewScrollspy from './NewScrollspy';

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
      {/* <div class="row"> */}
        {/* <div class="col-4">
          <div id="list-example" class="list-group">
            <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
            <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
            <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
            <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
          </div>
        </div> */}
        {/* <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            <h4 id="list-item-1">Item 1</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </div>
        </div>
      </div> */}

        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  // const collapseSection1 = useRef(null);
  // const collapseSection2 = useRef(null);
  // const collapseSection3 = useRef(null);
  // const collapseSection4 = useRef(null);
  // const collapseSectionA = useRef(null);
  // const collapseSectionB = useRef(null);

  // const collapseContainerRef = useRef(null);

  // const collapseSubsections = [collapseSectionA, collapseSectionB];


  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

        <div className='col col-lg-3 bg-secondary'>
          <MyScrollspy/>
        </div>

        <div className='col col-lg-3 bg-success'>
          <div className='row'>
            <div className='col-4 sticky-top'>
              <Scrollspy
                items={["section-1", "section-2", "section-3"]}
                currentClassName="is-active"
              >
                <a href="#section-1">Section 1</a>
                <a href="#section-2">Section 2</a>
                <a href="#section-3">Section 3</a>
              </Scrollspy>
            </div>
            <div className='col-8'>
              <h4 id="section-1">Section 1</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
              <h4 id="section-2">Sectiom 2</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
              <h4 id="section-3">Sectiom 3</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </div>

          </div>
        </div>

        <div className='col col-lg-3 bg-warning'>
          <NewScrollspy />
        </div>
      </div>
    </div>

    {/* Modal */}
    <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body autoFocus>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} autoFocus>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}


    {/* <div class="modal fade" id="myModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div id="sdfsd" class="modal-body">
            <div id="section-1">
              <h1>section-1</h1>
              <div class="red"></div>
            </div>
            <div id="section-2">
              <h1>section-2</h1>
              <div class="green"></div>
            </div>
            <div id="section-3">
              <h1>section-3</h1>
              <div class="blue"></div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}
    </>
  );
}

export default App;
