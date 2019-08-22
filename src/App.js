import React, { Component } from 'react';
import AppStore from './AppStore/AppStore.js'
import routes from './routes.js'
import {BrowserRouter} from 'react-router-dom'
import AppDispatcher from './Dispatcher/Dispatcher.js'
import Header from './Components/Partials/Header.js'
import Loader from './Components/Partials/Loader.js';
import Footer from './Components/Partials/Footer.js';

export default class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    {routes}
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

// class App extends Component {
//     constructor(props) {
//     super(props)
//         this.state = {
//             toggleLoader: false
//         }
//     }
    
//     getStore(){
//         let payload = {
//             action: 'getAppStore'
//         }
//         AppDispatcher.dispatch(payload)
//     }

//     componentWillMount(){
//         this.getStore()
//     }

//     componentDidMount(){
//         AppStore.addChangeListener(this._onChange.bind(this))
//         var _this = this
//         setTimeout(function(){
//             _this.setState({
//                 toggleLoader: true
//             })
//         }, 1000)
//     }

//     componentWillUnmount(){
//         AppStore.removeChangeListener(this._onChange.bind(this))
//     }

//     _onChange(){
//         this.setState(AppStore.data)
//     }

//     render() {
//       const data = AppStore.data
//       if(!data.ready) {
//           this.getStore()
//           return <Loader/>
//       } else if(this.state.toggleLoader){
//           return (
//               <BrowserRouter>
//                   <div>
//                       <Header />
//                       {routes}
//                   </div>
//               </BrowserRouter>
//           );
//       } else {
//           return <Loader />
//       }
//     }
// }

// export default App;
