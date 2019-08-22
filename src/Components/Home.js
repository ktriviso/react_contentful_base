import React from 'react'
import ParallaxLeft from './Modules/ParallaxLeft';
import ParallaxRight from './Modules/ParallaxRight';
import HomeHero from './Modules/HomeHero';

export default class Home extends React.Component {
    state = {};

	componentWillMount() {
		// console.log(this.props.data)
    }
    
    render(){
        return(
            <div>
                <HomeHero img="https://thayerspringapts.com/wp-content/uploads/2019/03/offset_701268-2560x1706.jpg"/>
                {/* @TODO replace with media from contentful */}
                
                <ParallaxLeft img="https://thayerspringapts.com/wp-content/uploads/offset_770285_home-2560x1828.jpg"/>
                <ParallaxRight img="https://thayerspringapts.com/wp-content/uploads/2019/02/ThayerSpring4710.jpg"/>
                <ParallaxLeft img="https://thayerspringapts.com/wp-content/uploads/2019/03/SilverSpring_0447-e1553542895152.jpg"/>
                <ParallaxRight img="https://thayerspringapts.com/wp-content/uploads/2019/02/ThayerSpring5016.jpg"/>
            </div>
        )
    }

}
