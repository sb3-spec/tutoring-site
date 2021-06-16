import React from 'react';
import './Scheduling.css';

export default function Scheduling() {
    return (
        <>
            <div className='scheduling-wrapper'>
                <div className='container text-center'>
                    <h2>Current Availabilities</h2>
                    <div className='times-container text-white'>
                        <p>Monday: 12m - 4pm</p>
                        <p>Tuesday: 12pm - 2pm</p>
                        <p>Wednesday: 12pm - 2pm</p>
                        <p>Thursday: 12pm - 3:30pm</p>
                        <p>Friday: 12pm - 2pm, 3pm - 5pm</p>
                        <p>Saturday: 12pm - 4pm</p>
                        <p>Sunday: 12pm - 4pm</p>
                    </div>
                </div>
            </div>
        </>
    );
}