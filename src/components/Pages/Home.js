import React,{Component} from 'react';
import Header from './../common/Header';
import Services from './../common/Services';
import image from '../../components/assets/dogs-4688586_1280.jpg';
import Portofolio from './../common/Portofolio';

class Home extends Component{

        render(){
            return(
                <div>
                    <Header
                        title="Welcome to our Studio"
                        subtitle="Hello motherfucker"
                        buttonText="Tell me more"
                        link="/service"
                        showButton={true}
                        image={image}
                    />
                    <Services/>
                    <Portofolio />
                </div>
            )
        }
}

export default Home;