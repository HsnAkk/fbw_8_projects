import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const data = [
    {
        image: '/images/how_you_doing.jpeg',
        topic: 'Project - 1',
        link: '/how_you_doing'
    },
    {
        image: '/images/wawawiwa.png',
        topic: 'Project - 2',
        link: '/wawawiwa'
    },
    {
        image: '/images/albatros_1.png',
        topic: 'Bidolu Online Shopping Project',
        link: '/albatros'
    },
    {
        image: '/images/tomjerry_1.jpeg',
        topic: 'Project - 4',
        link: '/tom&jerry'
    },
    {
        image: '/images/c2c_1.jpeg',
        topic: 'C-2-C Online Shop',
        link: '/be_guys'
    },
    {
        image: '/images/project.jpg',
        topic: 'Project - 6',
        link: '/vins'
    },
]

function Home() {
    return (
        <div className="container pt-5">
            <div className="my-5">
                <div>
                    <h3>FBW-8 FINAL PROJECTS</h3>
                </div>
              
                <CardGroup>
                    { data.map( (item, index) => 
                            <div className= "col-12 col-md-6 mb-3" key={index}>
                                <div className="home-image-text m-2 mb-3">{item.topic}</div>
                                <div className="m-2 shadow">
                                    <Link to={item.link}>
                                        <Card>
                                            <Card.Img src= {item.image} width= "100%" height="280px"/>
                                        </Card>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </CardGroup>
            </div>
        </div>
    )
}

export default Home
