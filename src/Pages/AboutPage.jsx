import { FaWhatsapp } from "react-icons/fa";
import "./Pages.css";

const teamMembers = [
  {
    name: "Wilfer Ossa",
    image: "/assets/wilfer.png",
    whatsapp: "573123456789",
    title: "Avionics Specialist",
    description:
      "Retired from the Colombian Air Force with 25 years of experience in avionics. Served as an Avionics Technician, Inspector, and Section Chief of Avionics. Holds an active FCC General Radiotelephone Operator License. Extensive knowledge in troubleshooting, maintenance, and system integration. Currently has 2 years of hands-on experience in the U.S. aviation sector, specializing in panel with a specialization in panel upgrades (analog to digital conversions).",
  },
  {
    name: "Carlos Garcia",
    image: "/assets/carlos.png",
    whatsapp: "573987654321",
    title: "Senior Avionics Technician",
    description:
      "Avionics and electrical systems technician with over 25 years of experience. Formerly employed by Aviónica de Occidente (Cali, Colombia) as a certified Aircraft Maintenance Technician (TMA 0837), focused on avionics installations, inspections, and repairs. Holds an active FCC General Radiotelephone Operator License. Brings 2 years of experience working in the U.S. general aviation industry. Skilled in maintenance and avionics integration on a range of airframes, including Cessna 150/152/180/182 and Piper PA-28 series. Extensive experience in agricultural (aerial spraying) aviation.",
  },
];

export default function MeetOurTeam() {
  return (
    <div className="services-page">
      <div className="header-section">
        <h2>Meet Our Team</h2>
        <p>
          Skilled professionals with decades of combined experience in avionics
          and aircraft systems.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className={`team-card ${index % 2 === 1 ? "reverse" : ""}`}
            key={member.name}
          >
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              <h3>{member.title}</h3>
              <p>{member.description}</p>
              <a
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <FaWhatsapp className="whatsapp-icon" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
