import React from "react";

export default function Modal(props) {

    if (!props.show) {
        return null;
    };

    return (
        <div className="d-flex container-fluid h-100 w-100 fixed-top align-items-center justify-content-center bg-dark bg-opacity-75">
            <div className="is-sticker h-75 w-75 bg-warning p-5">
                <div className="row align-items-center">
                    <div className="col-11 is-scroll overflow-auto">
                        {/* <h1>Test</h1>
                        <hr />
                        <h2>Hola { props.name }</h2> */}
                        {
                            props.data &&
                            props.data.map(({ id, title, body }) => (
                                <section key={ id } id={`section-${id}`} className=''>
                                    <h2 className="border border-dark border-3 p-3 me-5 float-start inter">
                                        { id }
                                    </h2>
                                    <h5 className="inter-b">
                                        — { title }
                                    </h5>
                                    <p className="inter-li display-6 mb-5">
                                        { body }
                                    </p>
                                </section>
                            ))
                        }
                    </div>
                    <div className="col-1 d-inline-flex align-self-start justify-content-end h-25">
                        <button
                            className={`is-sticker is-btn bg-warning border border-dark border-2 text-center text-dark p-3 fw-bold`}
                            onClick={ props.onClose }
                        >X</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
