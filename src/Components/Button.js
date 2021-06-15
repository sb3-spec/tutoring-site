import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='contact'>
            <button className='btn'>Contact</button>
        </Link>
    );
}