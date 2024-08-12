import React from 'react';
import './Event.css'; 
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Club from '../../utils/images/club.jpg';
import Club2 from '../../utils/images/club2.jpg';
import Club3 from '../../utils/images/club3.jpg';
import Club4 from '../../utils/images/Club4.jpg';
// import Event5Img from '../../utils/images/event5-img.jpg';
// import Event6Img from '../../utils/images/event6-img.jpg';

const events = [
    {
        id: 1,
        img: Club,
        title: 'CLUB INAGURAL CEREMONY',
        description: '	CTIE Students Club Inauguration at KLE Tech Dr MSS Belagavi Campus 5th March 2024 The CTIE Students Club at KLE Tech Dr. MSS Belagavi Campus was inaugurated on March 5, 2024. This event marks the beginning of an exciting journey for our students, promoting innovation, collaboration, and excellence in the technology and entrepreneurship field. The event was graced by chief guest Mr Babu Ravi (CEO of Anucharith Innovations), who highlighted the importance of innovation in engineering solutions. '
    },
     {
        id: 2,
        img: Club2,
        title: 'Event 2',
        description: '	CTIE Executive Committee meeting held at KLE DR MSS Campus on 13th April 2024'
    },
    {
         id: 3,
         img: Club3,
        title: '	CEOs Conclave held on 17th May 2024 CEOs Conclave held on 17th May 2024 Empowering Entrepreneurs: ',
        description: '- from thought-provoking discussions to groundbreaking ideas, the CEOs Conclave was a melting pot of inspiration and transformation. The program highlights include the presence of the honorable Principal Dr. S. F. Patil, CTIE Associate Director BGM Campus Dr. Arun Tigadi, CTIE associate director Hubli campus Mr. Shivraj Hublikar, Mr. Harish Agadi, and the chief executives Mr. Akshaykumar Sunagar, Mr. Sudeepth M. A, R. Manoj Bhat, and last but not least, Mr. Satyadhyan Chickerur, which made the meet a huge success.'
     },
    {
        id: 4,
        img: Club4,
         title: 'PUPA ‘24 Promotion done on 7th March 2024 in Belagavi',
        description: 'Cluster Leads of CTIE Belagavi Campus and students from CTIE BVB campus visited 7 colleges in Belagavi to promote the event. The list of the colleges are as follows: 1.Visvesvaraya Technological University, Machhe, Belagavi, 2.Jain college of Engineering, Machee Belagavi, 3.Jain college of Engineering, Udyambag Belagavi, 4.Gogte Institute of Technology Belagavi, 5.	Angadi Institute of Technology and Management –AITM Belagavi, 6.S. G. Balekundri Institute of Technology Belagavi, 7.Maratha Mandal Engineering College Belagavi'
     },
    //  {
    //     id: 5,
    //     img: Event5Img,
    //     title: 'Event 5',
    //      description: 'Don\'t miss our special event showcasing new technologies and industry advancements. Participate in interactive sessions and gain practical knowledge.'
    //  },
    // {
    //     id: 6,
    //     img: Event6Img,
    //     title: 'Event 6',
    //     description: 'Join us for an informative event with a focus on emerging trends and future directions. Network with professionals and gain insights that can propel your career forward.'
    // },
];

function Event() {
  return (
    <div className='event-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Events</h1>
                <p className='text-center w-75 mb-5'>Discover a variety of events designed to enhance your knowledge and connect you with industry leaders. Explore our upcoming events and be part of the action.</p>
            </div>
        </header>

        <div className='bg-body-secondary py-5'>
            <div className="container">
                <div className="row g-4">
                    {events.map((event) => (
                        <div key={event.id} className='col-md-6 col-lg-4'>
                            <Link to="/event" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-light text-dark border-0'>
                                    <Card.Img variant="top" src={event.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{event.title}</Card.Title>
                                        <Card.Text className='text-center'>{event.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event;
