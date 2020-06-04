import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/person.png',
            name: 'Milad',
            email: 'has@web.de',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/linkedin.png',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/xing.webp',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/github.jpg',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/medium.webp',
                    link: 'http://www.hasantuna.tk'
                }
            ]
        },
        {
            img: '/images/person.png',
            name: 'Ather',
            email: 'has@web.de',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/linkedin.png',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/xing.webp',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/github.jpg',
                    link: 'http://www.hasantuna.tk'
                },
                {
                    name: '/images/medium.webp',
                    link: 'http://www.hasantuna.tk'
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/project.jpg'}, 
        {size: 'half', image: '/images/project.jpg'}, 
        {size: 'half', image: '/images/project.jpg'}, 
        {size: 'onefourth', image: '/images/project.jpg'},
        {size: 'onefourth', image: '/images/project.jpg'},
        {size: 'onefourth', image: '/images/project.jpg'},
        {size: 'onefourth', image: '/images/project.jpg'}
    
    ]
}

function GroupFive() {
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

export default GroupFive
