import React from 'react';
import brick from '../assets/imgs/brick2.png';
import meditation from '../assets/imgs/Meditation2.png';
import horror from '../assets/imgs/horror2.png';
import quiz from '../assets/imgs/quiz2.png';
import note from '../assets/imgs/note.png';
import coffee from '../assets/imgs/french-press.png';
import art from '../assets/imgs/brush.png';
import flag from '../assets/imgs/progress.png';
import '../assets/Info.css'



export const info ={
    
    firstName: 'Killian',
    laseName: 'Podhajsky',
    initials: 'KLP',
    position: 'Full Stack Developer',
    
    miniBio: [ 
    {
        emoji: <img src={flag} className="emoji" />,
        text: 'Trans Non-Binary Queer'
    },
    {
        emoji: <img src={coffee} className="emoji"/>,
        text: 'Loves Trying New Coffees'
    },
    {
        emoji: <img src={art} className="emoji"/>,
        text: "Artist"
    },
    {
        emoji: <img src={note} className="emoji"/>,
        text: "Writer"
    }
],
    socials: [
        {
            link: 'https://github.com/kiriludp',
            label: 'GitHub'
        },
        {
            link: 'www.linkedin.com/in/killian-l-podhajsky030457',
            label: 'LinkedIn'
        },
        {
            link: 'https://www.upwork.com/freelancers/~0170a6c0a8a7a6c95f?viewMode=1',
            label: 'UpWork'
        }
    ],
    bio: "I am a recent graduate of the coding bootcamp course at University of Washington. I have an extensive professional background and am looking to be a part of a team that thrives on challenge and creative problem solving. ",
    skills: 
    {
        proficientWith:['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Node.js', 'Mongoose', 'MySql', 'SQL', 'java'],
        exposedTo: ['python', 'adobe illustrator', 'canvas']
    },
    hobbies: [
        {
            text: 'Horror Movies'
        },
        {
            text: 'Music; playing and listening'
        },
        {
            text: 'Creative Writing'
        },
        {
            text: 'Video Games'
        },
        {
            text: 'Art'
        },
        {
            text: 'Poetry; reading and writing'
        }
    ],
    portfolio: [
        {
            title: 'Meditation App',
            image: <img src={meditation} className='port' />

        },
        {
            title: 'MBrick Breaker Game',
            image: <img src={brick} className='port' />

        },
        {
            title: 'Horror Theme Choose Your Own Adventure',
            image: <img src={horror} className='port' />

        },
        {
            title: 'Horror Quiz',
            image: <img src={quiz} className='port'/>

        },
    ]
}