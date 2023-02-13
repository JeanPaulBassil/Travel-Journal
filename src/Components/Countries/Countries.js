import './Countries.css';
import data from '../../data';
import Country from '../Country/Country';

export default function Countries(){
    let output = data.map(props => {
        return (
            <Country
                img={props.img}
                country={props.country}
                location={props.location}
                startDate={props.startDate}
                endDate={props.endDate}
                description={props.description}
                url={props.url}
                key={props.key}
            />
        )
    })
    
    return (
        <div className='countries'>
            {output}
        </div>
    )
}