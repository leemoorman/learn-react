import './../css/House.css'
import housePic from '../images/house.png';

const House = (props) => {
    return(
        <main id="contact" className="house">
            <h2>House</h2>
            <img src={housePic} alt='house' />
            <p>Num Bedrooms: {props.num_bedrooms}</p>
        </main>
    );
};

export default House;