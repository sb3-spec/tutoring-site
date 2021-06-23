import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
    return (
            <div className='testimonial-wrapper'>
                <h2>Here are some reviews from current clients</h2>
                <div className='testimonial-container'>
                    <div className='card-container'>
                        <div className='testimonial-card'>
                            <div className='content-wrapper'>
                                <p className='content'>"Robert is great. Hes been super kind. He knows a lot about software 
                                    and programming. Very glad we signed up."
                                </p>
                                <p className='content-name'>--Brandon L. (son age 9)</p>
                            </div>
                        </div>
                        <div className='testimonial-card'>
                            <p className='content'>
                            "This is just what we were looking for. Robert is patient
                            and reassuring while also displaying a strong grasp of programming."
                            </p>
                            <p className='content-name'>--Jawahar A. (sons age 12, 16)</p>
                        </div>
                        <div className='testimonial-card'>
                            <p className='content'>
                            "Robert is a wonderful teacher and person. He really knows how
                            to get kids interested in coding. My younger daughter wants to have a 
                            class with him every day."
                            </p>
                            <p className='content-name'>--Natalya N. (daughters age 9, 12)</p>
                        </div>
                        <div className='testimonial-card'>
                            <p className='content'>"We have nothing but positive things to say. Robert has been courteous
                            and professional. We would definitely recommend him to others."
                            </p>
                            <p className='content-name'>--Irena R. (son age 9)</p>
                        </div>
                        <div className='testimonial-card'>
                            <p className='content'>"We were very eager to have our son learn programming. Robert's 
                            communication and professionalism has been outstanding."
                            </p>
                            <p className='content-name'>--Tasheena D. (son age 9)</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}