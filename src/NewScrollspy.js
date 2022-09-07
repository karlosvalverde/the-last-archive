import { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";

const SIZE = 10;
const list = new Array(SIZE).fill(0);

export default function NewScrollspy() {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  return (
    <div className="App">
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div>
            <ul
              data-cy="nav-wrapper"
              style={{
                listStyle: "none",
                position: "fixed",
                top: 0,
                right: 0,
                backgroundColor: "#fff",
                padding: "1rem"
              }}
            >
              {list.map((_, i) => (
                <li
                  key={i}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                >
                  <a
                    href={`#item-${i}`}
                    style={{
                      color:
                        currentElementIndexInViewport === i ? "#f00" : "#222"
                    }}
                  >
                    item-{i}
                  </a>
                </li>
              ))}
            </ul>
            <div data-cy="section-wrapper">
              {list.map((_, i) => (
                <div
                  id={`item-${i}`}
                  key={i}
                  ref={sectionRefs[i]}
                  className={
                    currentElementIndexInViewport === i ? "active text-warning fw-bold" : ""
                  }
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: `#${i}${i}${i}`,
                    color: "#fff",
                    fontSize: "1rem"
                  }}
                >

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
                </div>
              ))}
            </div>
          </div>
        )}
      </Scrollspy>
    </div>
  );
}
