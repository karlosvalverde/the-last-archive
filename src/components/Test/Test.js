import React from "react";
import "./Test.scss";

export default function Test(props) {

    if (!props.show) {
        return null;
    };

    return (
        <div className="d-flex container-fluid h-100 w-100 fixed-top align-items-center justify-content-center bg-dark bg-opacity-75">
            <div className="h-75 w-75 bg-warning">
                <div className="row">
                    <div className="col-6">
                        <h1>Test</h1>
                        <hr />
                        <h2>Hola { props.name }</h2>
                    </div>
                    <div className="col-6">
                        <button onClick={ props.onClose }>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
