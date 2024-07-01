import './MainHero.scss'
import heroIcon from '../../assets/icons/rayan-gosling.webp';


const MainHero = () => {
    return (
        <div className='hero'>
            <div className='hero__subtitle'>Hero Subtitle</div>
            <h1 className='hero__title'>Simple title</h1>
            <img className='hero__icon' src={heroIcon} alt='hero-icon' />
            <div className='hero__icon-description'>Image desr</div>
            <div className='hero__planet'></div>
        </div>
    )
}

export default MainHero