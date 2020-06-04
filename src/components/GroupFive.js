import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/person.png',
            name: 'Milad',
            email: 'milad@web.de',
            social_media: [
                
            ]
        },
        {
            img: '/images/person.png',
            name: 'Ather',
            email: 'ather@web.de',
            social_media: [
                
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/project.jpg'},    
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
