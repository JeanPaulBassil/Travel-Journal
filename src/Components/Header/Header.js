import './Header.css';
import Title from '../Title/Title';
import Countries from '../Countries/Countries';

export default function Header(){
    return (
        <div className="header">
            <Title />
            <Countries />
        </div>
    )
}