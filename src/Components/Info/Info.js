import './Info.css';
import Location from '../Location/Location';

export default function Info({country, location, startDate, endDate, description, url}){
    return (
        <div className="info">
            <Location 
                country = {country}
                url = {url}
            />
            <h1 className='location-name'>{location}</h1>
            <h4 className='duration'>{startDate} - {endDate}</h4>
            <p className='description'>{description}</p>
        </div>
    )
}