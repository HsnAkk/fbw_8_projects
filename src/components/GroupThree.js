import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';

const data = {
    members: [
        {
            img: '/images/hasan.jpg',
            name: 'Hasan Akkas',
            email: 'hasan.akkas@web.de',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'http://www.webtechsolutions.de'
                },
                {
                    name: '/images/linkedin.png',
                    link: 'http://www.linkedin.com/in/hasan-akkas/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'http://www.xing.com/profile/Hasan_Akkas6/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'http://www.github.com/HsnAkk'
                },
                {
                    name: '/images/medium.webp',
                    link: 'http://www.medium.com/@hasan.akkas123'
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/albatros_1.png'},
        {size: 'full', image: '/images/albatros_2.png'},
        {size: 'full', image: '/images/albatros_3.png'},
        {size: 'full', image: '/images/albatros_4.png'},
    ]
}

function GroupThree() {
    return (
        <div className="container pt-5" >
            <div className="row my-5">
                    <div className="col-12 col-md-7">
                        {
                            data.members.map( (item, index) => <PersonCard key={index} {...item} />)
                        }
                    </div>
                    <CardGroup className="col-12 col-md-5">
                        {
                            data.project_images.map( (item, index) => <ProjectImages key={index} {...item} />)
                        }
                    </CardGroup>
            </div>    
        </div>
    )
}

export default GroupThree
