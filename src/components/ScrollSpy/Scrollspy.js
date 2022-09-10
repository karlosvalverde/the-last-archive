import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';

export default function MyScrollspy() {
  const collapseSection1 = useRef(null);
  const collapseSection2 = useRef(null);
  const collapseSection3 = useRef(null);
  const collapseSection4 = useRef(null);
  const collapseSectionA = useRef(null);
  const collapseSectionB = useRef(null);

  const collapseContainerRef = useRef(null);

  const collapseSubsections = [collapseSectionA, collapseSectionB];

  return (
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
  );
}
