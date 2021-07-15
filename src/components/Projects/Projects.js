import { Project } from '../../components'

const Projects =()=> {
    const projectArray = [
        {
            href: 'https://savannahf.github.io/The-Omega-Project/',
            alt: 'PawMe Icon',
            src: '/public/assets/pawmelogo.jpeg'
        },
        {
            href: 'https://savannahf.github.io/Daily-Task-Manager/',
            alt: 'Clock Icon',
            src: '/assets/workdaylogo.jpeg'
        },
        {
            href: 'https://savannahf.github.io/CodeQuiz/',
            alt: 'Quiz Icon',
            src: '/assets/quizlogo.jpeg'
        },
        {
            href: 'https://github.com/SavannahF/readme_maker/',
            alt: 'README Icon',
            src: '/assets/readme.png'
        },
        {
            href: 'https://the-hookahp.herokuapp.com/',
            alt: 'Hookah Project Logo',
            src: '/assets/hookah.jpeg'
        },
        {
            href: '#',
            alt: 'Turtle eating a snail titled Turtle Food',
            src: '/assets/turtlefood.jpeg'
        },
        {
            href: '#',
            alt: 'German Shepherd on beach titled Beach Daze',
            src: '/assets/beachdaze.jpeg'
        },
        {
            href: '#',
            alt: 'Flower thumbnail titled Wild Garden',
            src: '/assets/wildgarden.jpeg'
        },
        {
            href: '#',
            alt: '4Runner thumbnail titled Road Trips',
            src: '/assets/roadtrips.jpeg'
        },
        {
            href: '#',
            alt: 'Rock boulder thumbnail titled Rock N Roll',
            src: '/assets/rocknroll.jpeg'
        },

    ]

    const projectMap = projectArray.map(el => { 
        return <Project href={el.href} alt={el.alt} src={el.src} />
    })
    




    return (
        <div className="container">
            <h2 id="portfolio">Explore My Work</h2>
            <div className="main">
                <div className="spacer">
                    <div className="cards">
                        {projectMap}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;