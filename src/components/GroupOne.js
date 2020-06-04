import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/person.png',
            name: 'Vera',
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
            img: '/images/maridah.jpeg',
            name: 'Marida Nwadiogor',
            email: 'maridanwadiogor@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/marida-nwadiogor-43598a186/'
                }
            ]
        },
        {
            img: '/images/person.png',
            name: 'Noor',
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
                },
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/how_you_doing.jpeg'}
    ]
}

function GroupOne() {
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

export default GroupOne
