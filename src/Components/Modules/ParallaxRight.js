import React from 'react'
import LazyHero from 'react-lazy-hero';

export default class ParallaxRight extends React.Component {
    render(){
        return (
            <LazyHero className="px-override px-right" opacity="0" transitionTimingFunction="ease-in-out" parallaxOffset="100" imageSrc={this.props.img}>
                <h1>Generic Startup Hype Headline</h1>
            </LazyHero>
        )
    }
}