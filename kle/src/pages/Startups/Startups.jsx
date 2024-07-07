import React from 'react';
import './Startups.css';
import { Card } from 'react-bootstrap';
import start1 from '../../utils/images/start1.png';
import start2 from '../../utils/images/start2.jpeg';
import start3 from '../../utils/images/start3.jpeg';
import start6 from '../../utils/images/start6.jpeg';
import start4 from '../../utils/images/start4.jpeg';
import start5 from '../../utils/images/start5.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [start1],
        title: 'Lorem Ipsum',
        description: 'lorem ipsum'
    },
    {
        id: 2,
        img: [start2],
        title: '....',
        description: 'Lorem Ipsum'
    },
    {
        id: 3,
        img: [start3],
        title: '...',
        description: 'Lorem Ipusm'
    },
    {
        id: 4,
        img: [start6],
        title: '........',
        description: '....'
    },
    {
        id: 5,
        img: [start4],
        title: 'Lorem',
        description: '...'
    },
    {
        id: 6,
        img: [start5],
        title: 'Lorem',
        description: '...'
    },
   
];

function Startups() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Get to know about the funded eco-systems</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Startups;