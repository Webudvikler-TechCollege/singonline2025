import { useState } from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { ProfileStyled } from "./Profile.styled";

export const ProfilePage = () => {

  const user = {
    name: 'Anna Hansen',
    address: {
      street: 'Bredgade 25',
      city: 'København',
      zip: '1260',
    },
    contact: {
      email: 'anna@example.com',
      phone: '12345678',
    },
  };
  
  const [openSections, setOpenSections] = useState({
    address: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <ContentWrapper title="Profile">
      <h3 className="user-name">{user.name}</h3>

      <ProfileStyled>
      <div>
        <div className="section">
          <button className="section-button" onClick={() => toggleSection('address')}>
            Adresse
          </button>
          {openSections.address && (
            <div className="section-content">
              <p>Gade: {user.address.street}</p>
            </div>
          )}
        </div>

        {/* Kontaktinformation */}
        <div className="section">
          <button className="section-button" onClick={() => toggleSection('contact')}>
            Kontaktinformation
          </button>
          {openSections.contact && (
            <div className="section-content">
              <p>Email: {user.contact?.email}</p>
            </div>
          )}
        </div>
      </div>
      </ProfileStyled>

    </ContentWrapper>
  )
}
