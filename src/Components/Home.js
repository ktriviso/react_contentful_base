import React from 'react'
import LazyHero from 'react-lazy-hero';

export default class Home extends React.Component {
    state = {};

	componentWillMount() {
		// console.log(this.props.data)
    }
    
    render(){
        return(
            <div>
                <LazyHero className="px-override" transitionTimingFunction="ease-in-out" parallaxOffset="100" imageSrc="https://unsplash.it/2000/1000">
                    <h1>Generic Startup Hype Headline</h1>
                </LazyHero>
                <LazyHero className="px-override" transitionTimingFunction="ease-in-out" parallaxOffset="100" imageSrc="https://unsplash.it/2000/1000">
                    <h1>Generic Startup Hype Headline</h1>
                </LazyHero>
                <LazyHero className="px-override" transitionTimingFunction="ease-in-out" parallaxOffset="100" imageSrc="https://unsplash.it/2000/1000">
                    <h1>Generic Startup Hype Headline</h1>
                </LazyHero>
            </div>
        )
    }

}
