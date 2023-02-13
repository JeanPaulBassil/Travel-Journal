import './Country.css';
import Info from '../Info/Info';

export default function Country({img, country, location, startDate, endDate, description, url}){
    return (
        <div className='country'>
            <img src={img} alt={country} className='preview'/>
            <Info 
                country={country}
                location={location}
                startDate={startDate}
                endDate={endDate}
                description={description}
                url={url}
            />
        </div>
    )
}