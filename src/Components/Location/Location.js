import './Location.css';
import Path from '../../Media/Path.png';

export default function Location({country, url}){
    return (
        <div className="location">
            <img src= {Path} alt="Path Icon" className='path'/>
            <p className='country-name'>{country}</p>
            <a href={url} className='link'>View on Google Maps</a>
        </div>
    )
}