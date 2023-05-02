import React from 'react';
import pizzaImg from '../images/pizza.jpg';
import saladImg from '../images/salad.jpg';
import italianImg from '../images/italian.jpg';

const Highlights = () => {
    return (
        <div className='highlights'>
             <h2>Specials</h2>
             <div className='cards'>
            <div className="card">
                <img className="card-img-top" src={pizzaImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Pizza</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card">
                <img className="card-img-top" src={saladImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Salad</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
            <div className="card">
                <img className="card-img-top" src={italianImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Italian</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Highlights