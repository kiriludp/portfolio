import React from 'react';
import brick from '../assets/imgs/brick2.png';
import meditation from '../assets/imgs/Meditation2.png';
import horror from '../assets/imgs/horror2.png';
import quiz from '../assets/imgs/quiz2.png';
import note from '../assets/imgs/note.png';
import coffee from '../assets/imgs/french-press.png';
import art from '../assets/imgs/brush.png';
import flag from '../assets/imgs/progress.png';
import pic from '../assets/imgs/pic.jpg';
import '../assets/Info.css'


export let colors = ["RGB(174, 134, 37)", "RGB(247, 239, 138)"];


export const info ={
   
    firstName: 'Killian',
    laseName: 'Podhajsky',
    initials: 'KLP',
    position: 'Full Stack Developer',
    selfPic: <img src={pic} />,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
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
            icon: "fa fa-github",
            label: 'GitHub'
        },
        {
            link: 'www.linkedin.com/in/killian-l-podhajsky030457',
            icon: "fa fa-linkedin",
            label: 'LinkedIn'
        }
        
    ],
    bio: "I am a recent graduate of the coding bootcamp course at University of Washington. I have an extensive professional background and am looking to be a part of a team that thrives on challenge and creative problem solving. ",
    skills:[
    {
        example: 'Dedication to detail'
    },
    {
        example: 'Agile Methodology'
    },
    {
        example: 'Communication-- both written and verbal'
    },
    {
        example: 'Understand flexible timelines and deadlines'
    },
    {
        example: 'Time management and prioritization'
    },
    {
        example: 'Ability to understand people`s needs from diverse backgrounds and communication styles'
    },
    {
        example: 'Conflict resolution'
    },
    {
        example: 'Thrives in challenging environments that require creative problem solving'
    },
],
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
    ],
    education: [
        {
            school: 'Fishers High School',
            diploma: 'diploma'
        },
        {
            school: 'University of Washington',
            diploma: 'Web Development'
        },
    ],
    work: [
        {
            position: 'Project Manager',
            company: 'Kaiser Permanente',
            dates: 'Oct 2017-June 2023'
            
        },
        {
            position: 'Store Manager',
            company: 'Starbucks',
            dates: 'Mar 2015 - Aug 2017'
            
        },
        {
            position: 'Store Manager',
            company: 'Diane Von Furstenberg',
            dates: 'Mar 2013 - Mar 2015'

        }
    ],
    languages: [
        {
        proficientWith:['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Node.js', 'Mongoose', 'MySql', 'SQL', 'java'],
        exposedTo: ['python', 'adobe illustrator', 'canvas']
        },
    ]
}