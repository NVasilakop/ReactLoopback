import React,{Component} from 'react';
import PortofolioItem from './PortofolioItem';
import img1 from '../../components/assets/portfolio/01-thumbnail.jpg'
import img2 from '../../components/assets/portfolio/02-thumbnail.jpg'
import img3 from '../../components/assets/portfolio/03-thumbnail.jpg'
import img4 from '../../components/assets/portfolio/04-thumbnail.jpg'
import img5 from '../../components/assets/portfolio/05-thumbnail.jpg'
import img6 from '../../components/assets/portfolio/06-thumbnail.jpg'

const portofolio = [
    {title:'Threads',subtitle:'Illustration',image:img1},
    {title:'Explore',subtitle:'weeeee',image:img2},
    {title:'Finish',subtitle:'weeeee',image:img3},
    {title:'Lines',subtitle:'weee',image:img4},
    {title:'Southwest',subtitle:'wee',image:img5},
    {title:'Window',subtitle:'we',image:img6},
]

class Portofolio extends Component{

    render(){
        return(   <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
            {portofolio.map((item,index) =>{
                return <PortofolioItem {...item} key={index} />
            } )}
            </div>
        </div>
    </section>)
    }
}

export default Portofolio