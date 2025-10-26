import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import officials1 from '../assets/officials1.jpg';
import officials2 from '../assets/officials2.jpg';
import officials3 from '../assets/officials3.jpg';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    nationality: '',
    email: '',
    whatsapp: '',
    institution: '',
    graduation: '',
    level: '',
    field: '',
    country_city: '',
    committee_preference: '',
    role_committee: '',
    reason_committee: '',
    mun_experiences: '',
    achievements_skills: '',
    handling_delegates: '',
    misconduct_details: '',
    dietary_needs: '',
    dietary_specify: '',
    tshirt_size: '',
    invitation_letter: '',
    passport_number: '',
    high_commission: '',
    guardian_name: '',
    guardian_contact: '',
    relationship: '',
    hostel_accommodation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Create mailto link with form data
    const subject = `RUIMUN'26 Officials Application - ${formData.name}`;
    const body = `
RUIMUN'26 OFFICIALS APPLICATION

PERSONAL INFORMATION:
Name: ${formData.name}
Gender: ${formData.gender}
Date of Birth: ${formData.dob}
Nationality: ${formData.nationality}
Email: ${formData.email}
WhatsApp Contact: ${formData.whatsapp}

ACADEMIC INFORMATION:
Last/Present Institution Attended: ${formData.institution}
Year of Graduation: ${formData.graduation}
Level: ${formData.level}
Field of Study: ${formData.field}
Country/City: ${formData.country_city}

COMMITTEE INFORMATION:
Committee Preference: ${formData.committee_preference}
Role in Committee: ${formData.role_committee}

Reason for Committee Preference:
${formData.reason_committee}

MUN EXPERIENCES:
${formData.mun_experiences}

ACHIEVEMENTS & SKILLS:
${formData.achievements_skills}

HANDLING OUT-OF-LINE PROPOSALS/DELEGATES:
${formData.handling_delegates}

MISCONDUCT DETAILS:
${formData.misconduct_details}

ACCOMMODATION & SPECIAL NEEDS:
Physical/Dietary Needs: ${formData.dietary_needs}
${formData.dietary_specify ? `Specify: ${formData.dietary_specify}` : ''}
T-Shirt Size: ${formData.tshirt_size}
Hostel Accommodation: ${formData.hostel_accommodation}

TRAVEL DOCUMENTS:
Require Invitation Letter: ${formData.invitation_letter}
${formData.passport_number ? `Passport Number: ${formData.passport_number}` : ''}
Nigeria High Commission: ${formData.high_commission}

EMERGENCY CONTACT:
Guardian/Emergency Contact Name: ${formData.guardian_name}
Guardian/Emergency Contact Number: ${formData.guardian_contact}
Relationship with Applicant: ${formData.relationship}
    `.trim();

    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setSubmitMessage('Your email client should open with the application. Please send the email to complete your application. Attach you CV before sending the email');
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        gender: '',
        dob: '',
        nationality: '',
        email: '',
        whatsapp: '',
        institution: '',
        graduation: '',
        level: '',
        field: '',
        country_city: '',
        committee_preference: '',
        role_committee: '',
        reason_committee: '',
        mun_experiences: '',
        achievements_skills: '',
        handling_delegates: '',
        misconduct_details: '',
        dietary_needs: '',
        dietary_specify: '',
        tshirt_size: '',
        invitation_letter: '',
        passport_number: '',
        high_commission: '',
        guardian_name: '',
        guardian_contact: '',
        relationship: '',
        hostel_accommodation: '',
      });
      setSubmitMessage('');
    }, 5000);
  };

  const committees = [
    'UNSC (United Nations Security Council)',
    'ICJ (International Court of Justice)',
    'UNECA (United Nations Economic Commission for Africa)',
    'DISEC (Disarmament & International Security)',
    'ECOFIN (Economic and Financial)',
    'SOCHUM (Social, Humanitarian & Cultural)',
    'SPECPOL (Special Political & Decolonization)',
    'UNECE (United Nations Economic Commission for Europe)',
    'UN LEGAL (United Nations Legal Committee)',
    'PGA (President of the General Assembly)',
    'VPGA (Vice President of the General Assembly)',
  ];

  const roles = [
    'President',
    'Vice-President',
    'Chair',
    'Vice-Chair',
    'Rapporteur',
  ];

  return (
    <section id="apply" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            Apply as RUIMUN'26 Official
          </h2>
          {/* Add a disclaimer to use their mobile phones for the for filling*/}
          <p className="text-center text-red-600 mb-4 text-sm">
            For the best experience and functionality, please use your mobile device to fill out this form.
          </p>
          <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
          
          <p className="text-center text-gray-600 mb-12 text-lg">
            Join the team organizing RUIMUN'26! Fill out the form below to apply for an official position.
          </p>

          {/* Image Gallery */}
          <div className="mt-16">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[officials1, officials2, officials3].map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg animate-zoom-in"
                >
                  <img
                    src={image}
                    alt={`RUIMUN Officials ${index + 1}`}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <p className="text-center text-gray-500 text-lg mt-8">
              <strong>Applications Closed. Thank you for your interest</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;