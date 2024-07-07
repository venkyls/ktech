import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>First question ?</Accordion.Header>
                    <Accordion.Body>
                        What is CTIE??
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Second question ?</Accordion.Header>
                    <Accordion.Body>
                        How to get started?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question ?</Accordion.Header>
                    <Accordion.Body>
                        Funding and investment criteria
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;