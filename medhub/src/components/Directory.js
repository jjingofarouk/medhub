import React, { useState, useEffect } from "react";
import './Directory.css';
import PublicHospitalsSection from './PublicHospitalsSection';
import PharmaciesSection from './PharmaciesSection';
import MobileClinicsSection from './MobileClinicsSection';
import HealthCampaignsSection from './HealthCampaignsSection';
import HealthEventsSection from './HealthEventsSection';
import EmergencyRouteSection from './EmergencyRouteSection';

const Directory = () => {
  const [publicHospitals, setPublicHospitals] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [mobileClinics, setMobileClinics] = useState([]);
  const [healthCampaigns, setHealthCampaigns] = useState([]);
  const [healthEvents, setHealthEvents] = useState([]);
  const [emergencyRoute, setEmergencyRoute] = useState(null);

  useEffect(() => {
    fetchPublicHospitals();
    fetchPharmacies();
    fetchMobileClinics();
    fetchHealthCampaigns();
    fetchHealthEvents();
  }, []);

  const fetchPublicHospitals = () => {
    const fetchedHospitals = [
      {
        id: 1,
        name: "Mulago National Referral Hospital",
        district: "Kampala",
        specialServices: ["Cardiology", "Oncology", "Neurology", "Neurosurgery", "Renal Dialysis", "HIV/AIDS Care"],
        bedCapacity: 1500,
        contact: "0414 554 000",
        whatsapp: "+256 779 800 000",
        affiliatedWith: "Makerere University College of Health Sciences",
        website: "https://mulago.go.ug",
        email: "info@mulago.go.ug"
      },
      {
        id: 2,
        name: "Mbarara Regional Referral Hospital",
        district: "Mbarara",
        specialServices: ["Maternity", "Pediatrics", "Internal Medicine", "Obstetrics & Gynecology", "ENT Surgery"],
        bedCapacity: 600,
        contact: "0485 420 601",
        whatsapp: "+256 702 300 000",
        affiliatedWith: "Mbarara University of Science and Technology",
        website: "https://www.mbararahospital.go.ug",
        email: "info@mbararahospital.go.ug"
      },
      {
        id: 3,
        name: "Jinja Regional Referral Hospital",
        district: "Jinja",
        specialServices: ["Orthopedics", "General Surgery", "Psychiatry", "Urology", "Dental Surgery"],
        bedCapacity: 500,
        contact: "0434 120 202",
        whatsapp: "+256 754 600 000",
        affiliatedWith: "Jinja School of Nursing and Midwifery",
        website: "https://www.jinjahospital.go.ug",
        email: "info@jinjahospital.go.ug"
      },
      {
        id: 4,
        name: "Mbale Regional Referral Hospital",
        district: "Mbale",
        specialServices: ["Plastic Surgery", "Pediatrics", "ENT Surgery", "Oncology", "HIV/AIDS Care"],
        bedCapacity: 455,
        contact: "0456 333 555",
        whatsapp: "+256 701 500 000",
        affiliatedWith: "Islamic University in Uganda (IUIU)",
        website: "https://www.mbalehospital.go.ug",
        email: "info@mbalehospital.go.ug"
      },
      {
        id: 5,
        name: "Gulu Regional Referral Hospital",
        district: "Gulu",
        specialServices: ["Psychiatry", "Rehabilitation", "Orthopedics", "Obstetrics & Gynecology", "Pediatrics"],
        bedCapacity: 350,
        contact: "0471 435 001",
        whatsapp: "+256 780 200 000",
        affiliatedWith: "Gulu University Medical School",
        website: "https://www.guluhospital.go.ug",
        email: "info@guluhospital.go.ug"
      },
      {
        id: 6,
        name: "Fort Portal Regional Referral Hospital",
        district: "Fort Portal",
        specialServices: ["Maternity", "Neonatal Care", "General Surgery", "Oncology", "Orthopedics"],
        bedCapacity: 450,
        contact: "0483 422 202",
        whatsapp: "+256 782 700 000",
        affiliatedWith: "Mountains of the Moon University",
        website: "https://www.fortportalhospital.go.ug",
        email: "info@fortportalhospital.go.ug"
      },
      {
        id: 7,
        name: "Arua Regional Referral Hospital",
        district: "Arua",
        specialServices: ["Pediatrics", "Internal Medicine", "Ophthalmology", "Psychiatry", "General Surgery"],
        bedCapacity: 400,
        contact: "0476 432 111",
        whatsapp: "+256 756 900 000",
        affiliatedWith: "Arua School of Nursing",
        website: "https://www.aruahospital.go.ug",
        email: "info@aruahospital.go.ug"
      }
    ];
    
    setPublicHospitals(fetchedHospitals);
  };
  
  
  const fetchPharmacies = () => {
    const fetchedPharmacies = [
      {
        id: 1,
        name: "City Pharmacy",
        location: "Kampala",
        address: "123 Main Street, Kampala",
        contact: "0414 567 890",
        whatsapp: "+256 702 123 456",
        email: "info@citypharmacy.ug",
        hours: "Mon-Fri: 8am - 8pm, Sat: 9am - 5pm, Sun: Closed",
        medications: ["Aspirin", "Ibuprofen", "Paracetamol", "Antibiotics"],
        services: ["Prescription Services", "Over-the-Counter Medications", "Health Consultations"],
        website: "https://www.citypharmacy.ug",
      },
      {
        id: 2,
        name: "Town Pharmacy",
        location: "Gulu",
        address: "456 Market Road, Gulu",
        contact: "0476 234 567",
        whatsapp: "+256 758 234 567",
        email: "contact@townpharmacy.ug",
        hours: "Mon-Fri: 9am - 6pm, Sat: 10am - 4pm, Sun: Closed",
        medications: ["Paracetamol", "Cough Syrup", "Vitamins", "Allergy Medications"],
        services: ["Prescription Services", "Health Screening", "Medication Counseling"],
        website: "https://www.townpharmacy.ug",
      },
      {
        id: 3,
        name: "Eastside Pharmacy",
        location: "Mbale",
        address: "789 East Road, Mbale",
        contact: "0455 678 901",
        whatsapp: "+256 703 456 789",
        email: "support@eastsidepharmacy.ug",
        hours: "Mon-Sat: 8am - 7pm, Sun: 10am - 3pm",
        medications: ["Diabetes Medication", "Blood Pressure Medications", "Pain Relievers"],
        services: ["Diabetes Management", "Blood Pressure Monitoring", "Vaccinations"],
        website: "https://www.eastsidepharmacy.ug",
      },
      {
        id: 4,
        name: "Westend Pharmacy",
        location: "Fort Portal",
        address: "101 West Avenue, Fort Portal",
        contact: "0483 456 789",
        whatsapp: "+256 704 567 890",
        email: "info@westendpharmacy.ug",
        hours: "Mon-Fri: 9am - 8pm, Sat: 9am - 5pm, Sun: Closed",
        medications: ["Antifungals", "Antibiotics", "Cold and Flu Medications"],
        services: ["Medication Delivery", "Health Advice", "Emergency Supplies"],
        website: "https://www.westendpharmacy.ug",
      },
      {
        id: 5,
        name: "Northway Pharmacy",
        location: "Arua",
        address: "234 North Street, Arua",
        contact: "0476 678 901",
        whatsapp: "+256 701 678 901",
        email: "contact@northwaypharmacy.ug",
        hours: "Mon-Sat: 8am - 6pm, Sun: 10am - 2pm",
        medications: ["Painkillers", "Antacids", "Cough Medicines"],
        services: ["Health Consultations", "Medication Refills", "Nutritional Advice"],
        website: "https://www.northwaypharmacy.ug",
      }
    ];
  
    setPharmacies(fetchedPharmacies);
  };
  


  const fetchMobileClinics = async () => {
    try {
      // Simulate an API call with a real endpoint
      const response = await fetch('https://api.example.com/mobile-clinics'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Example of handling and setting the data
      setMobileClinics(data);
    } catch (error) {
      console.error('Error fetching mobile clinics:', error);
      // Handle the error as needed (e.g., set an error state, display a message)
    }
  };
  

  const fetchHealthCampaigns = () => {
    const fetchedCampaigns = [
      { id: 1, name: "Malaria Prevention", description: "Educating about Malaria prevention strategies", startDate: "2024-09-20" },
      { id: 2, name: "HIV Awareness", description: "Promoting HIV prevention and treatment options", startDate: "2024-10-10" }
    ];
    setHealthCampaigns(fetchedCampaigns);
  };

  const fetchHealthEvents = () => {
    const fetchedEvents = [
      { id: 1, name: "Free Vaccination Day", location: "Kampala", date: "2024-10-01" },
      { id: 2, name: "Blood Donation Drive", location: "Gulu", date: "2024-09-25" }
    ];
    setHealthEvents(fetchedEvents); 
  };

  const fetchEmergencyRoute = () => {
    const fetchedRoute = {
      routeName: "Main Route",
      path: ["Main Street", "2nd Avenue", "City Hospital"],
      estimatedTime: "15 minutes",
      distance: "5 km",
      trafficStatus: "Moderate Traffic",
      hospitalName: "City Hospital",
      hospitalContact: "0414 123 456",
      alternativeRoutes: [
        {
          routeName: "Alternative Route 1",
          path: ["King Street", "3rd Avenue", "City Hospital"],
          estimatedTime: "18 minutes",
          distance: "5.5 km",
          trafficStatus: "Low Traffic"
        },
        {
          routeName: "Alternative Route 2",
          path: ["Queen Avenue", "4th Street", "City Hospital"],
          estimatedTime: "20 minutes",
          distance: "6 km",
          trafficStatus: "Heavy Traffic"
        }
      ]
    };
    
    setEmergencyRoute(fetchedRoute);
  };

  return (
    <div className="directory">
      <h1>Uganda Healthcare Directory</h1>
      <PublicHospitalsSection hospitals={publicHospitals} />
      <PharmaciesSection pharmacies={pharmacies} />
      <MobileClinicsSection clinics={mobileClinics} />
      <HealthCampaignsSection campaigns={healthCampaigns} />
      <HealthEventsSection events={healthEvents} />
      <EmergencyRouteSection fetchEmergencyRoute={fetchEmergencyRoute} emergencyRoute={emergencyRoute} />
    </div>
  );
};

export default Directory;
