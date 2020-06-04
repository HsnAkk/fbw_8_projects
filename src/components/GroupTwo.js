import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/ivanka.jpg',
            name: 'Ivanka Knezovic',
            email: 'ivanka.knezovic92@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/ivanka-knezovic-5ab4a3184'
                }
            ]
        },
        {
            img: '/images/maher.jpg',
            name: 'Maher Al Hallak',
            email: 'Maher.alhallak8@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'http://https://www.linkedin.com/in/maher-alhallak/'
                },
                {
                    name: '/images/github.jpg',
                    link: 'http://https://github.com/maheralhallak'
                }
            ]
        },
        {
            img: '/images/waseem.jpeg',
            name: 'Waseem Haddad',
            email: 'waseemhaddad133@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/waseem-haddad-56a8b2169/'
                }
            ]
        },
        {
            img: '/images/bilal.jpeg',
            name: 'Bilal Ali',
            email: 'bilalidin77@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/bilal-ali-9516631a6/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Bilal_Ali11/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/billo77'
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/wawawiwa.png'}   
    ]
}

function GroupTwo() {
    return (
        <div className="container pt-5">
            <div className="row my-5">
                    <div className="col-12 col-md-7">
                        {
                            data.members.map( (item, index) => <PersonCard key={index} {...item} />)
                        }
                    </div>
                    <div className="col-12 col-md-5">
                        <CardGroup>
                            {
                                data.project_images.map( (item, index) => <ProjectImages key={index} {...item} />)
                            }
                        </CardGroup>
                    </div>
            </div>   
        </div>
    )
}

export default GroupTwo
