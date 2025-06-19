// src/components/Doctors/doctorsData.js

const doctors = [
  {
    id: 1,
    name: "Dr. Anjali Mehta",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in heart-related treatments with over 15 years of experience.",
    timeline: [
      { year: "2008", title: "MBBS - AIIMS Delhi" },
      { year: "2012", title: "MD Cardiology - PGIMER Chandigarh" },
      { year: "2014", title: "Resident - Apollo Hospital, Delhi" },
      { year: "2018", title: "Senior Consultant - Fortis Heart Institute" }
    ]
  },
  {
    id: 2,
    name: "Dr. Ramesh Kumar",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    bio: "Provides compassionate care for children's health and development.",
    timeline: [
      { year: "2009", title: "MBBS - JIPMER Pondicherry" },
      { year: "2013", title: "MD Pediatrics - NIMHANS Bangalore" },
      { year: "2015", title: "Consultant Pediatrician - Rainbow Hospitals" },
      { year: "2020", title: "Head Pediatrician - Max Super Specialty Hospital" }
    ]
  },
  {
    id: 3,
    name: "Dr. Neha Singh",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    bio: "Specialist in skin, hair, and nail care with modern techniques.",
    timeline: [
      { year: "2010", title: "MBBS - KMC Manipal" },
      { year: "2014", title: "MD Dermatology - AIIMS Delhi" },
      { year: "2016", title: "Fellowship in Cosmetic Dermatology - UK" },
      { year: "2019", title: "Chief Dermatologist - Kaya Skin Clinic" }
    ]
  },
  {
    id: 4,
    name: "Dr. Arjun Patel",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Treats complex nervous system disorders with a holistic approach.",
    timeline: [
      { year: "2007", title: "MBBS - B.J. Medical College, Ahmedabad" },
      { year: "2011", title: "DM Neurology - NIMHANS Bangalore" },
      { year: "2013", title: "Neuro Research Fellow - Johns Hopkins, USA" },
      { year: "2017", title: "Lead Neurologist - Apollo Neuroscience Centre" }
    ]
  }
];

export default doctors;
