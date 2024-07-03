import './MainHero.scss'
import heroIcon from '../../assets/icons/rayan-gosling.webp';


const MainHero = () => {
    const planetMoving = (e) => {
        const planet = e.target

        console.log(planet)

        if (planet.classList.contains('hero__planet--stage-1')) {
            planet.classList.remove('hero__planet--stage-1')
            planet.classList.add('hero__planet--stage-2')
        } else if (planet.classList.contains('hero__planet--stage-2')) {
            planet.classList.remove("hero__planet--stage-1", "hero__planet--stage-2")
        } else {
            planet.classList.add("hero__planet--stage-1")
        } 
         
        
    }

    return (
        <div className='hero'>
            <div className='hero__subtitle'>Hero Subtitle</div>
            <h1 className='hero__title'>Simple title</h1>
            <img className='hero__icon' src={heroIcon} alt='hero-icon' />
            <div className='hero__icon-description'>Image desr</div>
            <div className='hero__planet' onClick={planetMoving}></div>
        </div>
    )
}

export default MainHero