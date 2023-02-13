import Globe from '../../Media/Globe icon.png';
import './Title.css';

export default function Title(){
    return (
        <div className="title">
            <img src={Globe} alt='Globe' className='globe'/>
            <h5 className='title-header'>my travel journal.</h5>
        </div>
    )
}