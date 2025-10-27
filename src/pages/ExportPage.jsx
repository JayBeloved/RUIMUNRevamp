import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CSVLink } from 'react-csv';

const ExportPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'registrations'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Gender', key: 'gender' },
    { label: 'Date of Birth', key: 'dob' },
    { label: 'Nationality', key: 'nationality' },
    { label: 'Email', key: 'email' },
    { label: 'WhatsApp', key: 'whatsapp' },
    { label: 'Institution', key: 'institution' },
    { label: 'Graduation', key: 'graduation' },
    { label: 'Level', key: 'level' },
    { label: 'Field of Study', key: 'field' },
    { label: 'Country/City', key: 'country_city' },
    { label: 'Committee Preference', key: 'committee_preference' },
    { label: 'Role in Committee', key: 'role_committee' },
    { label: 'Reason for Committee Preference', key: 'reason_committee' },
    { label: 'MUN Experiences', key: 'mun_experiences' },
    { label: 'Achievements & Skills', key: 'achievements_skills' },
    { label: 'Handling Delegates', key: 'handling_delegates' },
    { label: 'Misconduct Details', key: 'misconduct_details' },
    { label: 'Dietary Needs', key: 'dietary_needs' },
    { label: 'Dietary Specify', key: 'dietary_specify' },
    { label: 'T-shirt Size', key: 'tshirt_size' },
    { label: 'Invitation Letter', key: 'invitation_letter' },
    { label: 'Passport Number', key: 'passport_number' },
    { label: 'High Commission', key: 'high_commission' },
    { label: 'Guardian Name', key: 'guardian_name' },
    { label: 'Guardian Contact', key: 'guardian_contact' },
    { label: 'Relationship', key: 'relationship' },
    { label: 'Hostel Accommodation', key: 'hostel_accommodation' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Registrations</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CSVLink
            data={registrations}
            headers={headers}
            filename={"ruimun_registrations.csv"}
            className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300 mb-4 inline-block"
          >
            Export to CSV
          </CSVLink>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  {headers.map(header => <th key={header.key} className="py-2 px-4 border-b">{header.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {registrations.map(reg => (
                  <tr key={reg.id}>
                    {headers.map(header => <td key={header.key} className="py-2 px-4 border-b">{reg[header.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ExportPage;
