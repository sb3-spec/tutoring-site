import React from 'react'
import './Contact.css';

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <h1>
                    You can reach me at:
                </h1>
            </div>
            <div className='contact-info'>
                <ul className='contact-list'>
                    <li>714-381-5418</li>
                    <li>
                        sheffira2@gmail.com
                    </li>
                    <li>
                        https://www.linkedin.com/in/robert-sheffield-a119a9140/
                    </li>
                </ul>
            </div>
        </div>
    );
}