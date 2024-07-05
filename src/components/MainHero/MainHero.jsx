import './MainHero.scss'


const MainHero = () => {
    // const planetMoving = (e) => {
    //     const planet = e.target

    //     console.log(planet)

    //     if (planet.classList.contains('hero__planet--stage-1')) {
    //         planet.classList.remove('hero__planet--stage-1')
    //         planet.classList.add('hero__planet--stage-2')
    //     } else if (planet.classList.contains('hero__planet--stage-2')) {
    //         planet.classList.remove("hero__planet--stage-1", "hero__planet--stage-2")
    //     } else {
    //         planet.classList.add("hero__planet--stage-1")
    //     } 
    // }

    return (
        <div className='hero main-wrapper'>
            <div className='hero__left'>
                <h1 className='hero__title h1'>Navigation the digital landscape for success</h1>
                <h1 className='hero__subscription'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h1>
                <button className='hero__button btn'>Book a consultation</button>
                {/* <div className='hero__planet' onClick={planetMoving}></div> */}
            </div>
           
        </div>
    )
}

export default MainHero