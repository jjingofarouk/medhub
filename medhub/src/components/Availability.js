import React, { useState } from 'react';

const ViewDoctorAvailability = () => {
    // Sample data, replace with real data from API or props
    const [doctors] = useState([
        {
            name: 'Dr. John Smith',
            specialty: 'Cardiology',
            rating: 4,
            available_dates: ['2024-09-10', '2024-09-12'],
            available_times: ['09:00 - 12:00', '14:00 - 17:00']
        },
        {
            name: 'Dr. Jane Doe',
            specialty: 'Dermatology',
            rating: 5,
            available_dates: ['2024-09-11', '2024-09-13'],
            available_times: ['10:00 - 13:00', '15:00 - 18:00']
        },
        // Add more doctor data here
    ]);

    const [specialty, setSpecialty] = useState('');
    const [rating, setRating] = useState('');

    const handleSpecialtyChange = (e) => {
        setSpecialty(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const filteredDoctors = doctors.filter(doctor => {
        return (!specialty || doctor.specialty === specialty) &&
               (!rating || doctor.rating === parseInt(rating));
    });

    return (
        <div className="view-doctor-availability">
            <div className="sidebar">
                <a href="/">MedHub</a>
                <a href="/manage-appointments">Manage Appointments</a>
                <a href="/book-appointment">Book Appointment</a>
                <a href="/rebook-appointment">ReBook Appointment</a>
                <a href="/cancel-appointment">Cancel Appointment</a>
                <a href="/view-doctor-availability" className="active">View Doctor Availability</a>
                <a href="/edit-availability">Edit Availability</a>
                <a href="/start-consultation">Start Consultation</a>
                <a href="/view-medical-history">View Medical History</a>
            </div>
            <div className="container">
                <h1>View Doctor Availability</h1>
                <div className="form-group">
                    <label htmlFor="specialty">Filter by Specialty:</label>
                    <select id="specialty" name="specialty" className="form-control" value={specialty} onChange={handleSpecialtyChange}>
                        <option value="">Select Specialty</option>
                        {/* List of specialties */}
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Endocrinology">Endocrinology</option>
                        {/* Add more specialties here */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Filter by Rating:</label>
                    <select id="rating" name="rating" className="form-control" value={rating} onChange={handleRatingChange}>
                        <option value="">Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>
                <div className="card">
                    <div className="card-header">Available Doctors</div>
                    <div className="card-body">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor, index) => (
                                <div className="doctor-item" key={index}>
                                    <h5>{doctor.name}</h5>
                                    <p><strong>Specialty:</strong> {doctor.specialty}</p>
                                    <p><strong>Rating:</strong> {doctor.rating} Stars</p>
                                    <p><strong>Available Dates:</strong> {doctor.available_dates.join(', ')}</p>
                                    <p><strong>Available Times:</strong> {doctor.available_times.join(', ')}</p>
                                </div>
                            ))
                        ) : (
                            <p>No doctors available based on the selected filters.</p>
                        )}
                    </div>
                </div>
                <a href="/" className="btn btn-secondary">Back to Home</a>
            </div>
            <footer>
                <div className="footer-links">
                    <p>&copy; 2024 MedHub. All rights reserved.</p>
                    <a href="/">Back Home</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/support">Get Support</a>
                    <a href="/view-medical-history">View Medical History</a>
                    <a href="/forum">Forums</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
            </footer>
        </div>
    );
};

export default ViewDoctorAvailability;
