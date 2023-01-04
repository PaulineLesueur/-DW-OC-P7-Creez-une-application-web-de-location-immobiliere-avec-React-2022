import React from 'react';
import '../assets/style/style.css';

function Rating(props) {

    function Stars(param) {
        switch (param) {
            case "1": 
                return <React.Fragment>
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i>
                        </React.Fragment>;
            case "2": 
                return <React.Fragment>
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i>
                        </React.Fragment>;
            case "3": 
                return <React.Fragment>
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star"></i> 
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </React.Fragment>;
            case "4": 
                return <React.Fragment>
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i>
                        </React.Fragment>;
            case "5": 
                return <React.Fragment>
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star colored"></i>
                        </React.Fragment>;
            default: 
                return <React.Fragment>
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i> 
                            <i className="fa-sharp fa-solid fa-star rating-star"></i>
                        </React.Fragment>;
        }
    }

    return (
        Stars(props.children)
    );
}

export default Rating;