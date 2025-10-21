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
    setSubmitMessage('Your email client should open with the application. Please send the email to complete your application.');
    
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
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Information Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="md:col-span-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose an option</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label htmlFor="dob" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Nationality */}
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      required
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your nationality"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* WhatsApp Contact */}
                  <div className="md:col-span-2">
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp Contact *
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Academic Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Institution */}
                  <div className="md:col-span-2">
                    <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last / Present Institution Attended *
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      required
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your university/institution"
                    />
                  </div>

                  {/* Year of Graduation */}
                  <div>
                    <label htmlFor="graduation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Graduation *
                    </label>
                    <input
                      type="text"
                      id="graduation"
                      name="graduation"
                      required
                      value={formData.graduation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="e.g., 2024"
                    />
                  </div>

                  {/* Level */}
                  <div>
                    <label htmlFor="level" className="block text-sm font-semibold text-gray-700 mb-2">
                      Level *
                    </label>
                    <input
                      type="text"
                      id="level"
                      name="level"
                      required
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="e.g., 400 Level, Graduate"
                    />
                  </div>

                  {/* Field of Study */}
                  <div>
                    <label htmlFor="field" className="block text-sm font-semibold text-gray-700 mb-2">
                      Field of Study *
                    </label>
                    <input
                      type="text"
                      id="field"
                      name="field"
                      required
                      value={formData.field}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your field of study"
                    />
                  </div>

                  {/* Country/City */}
                  <div>
                    <label htmlFor="country_city" className="block text-sm font-semibold text-gray-700 mb-2">
                      Country/City *
                    </label>
                    <input
                      type="text"
                      id="country_city"
                      name="country_city"
                      required
                      value={formData.country_city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="e.g., Nigeria/Lagos"
                    />
                  </div>
                </div>
              </div>

              {/* Committee Information Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Committee Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Committee Preference */}
                  <div className="md:col-span-2">
                    <label htmlFor="committee_preference" className="block text-sm font-semibold text-gray-700 mb-2">
                      Committee Preference *
                    </label>
                    <select
                      id="committee_preference"
                      name="committee_preference"
                      required
                      value={formData.committee_preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose an option</option>
                      {committees.map((committee) => (
                        <option key={committee} value={committee}>
                          {committee}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Role in Committee */}
                  <div className="md:col-span-2">
                    <label htmlFor="role_committee" className="block text-sm font-semibold text-gray-700 mb-2">
                      Role in Committee *
                    </label>
                    <select
                      id="role_committee"
                      name="role_committee"
                      required
                      value={formData.role_committee}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose an option</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Reason for Committee Preference */}
                  <div className="md:col-span-2">
                    <label htmlFor="reason_committee" className="block text-sm font-semibold text-gray-700 mb-2">
                      Explain the reason behind your committee preference choice (100 words) *
                    </label>
                    <textarea
                      id="reason_committee"
                      name="reason_committee"
                      required
                      value={formData.reason_committee}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Explain why you chose this committee..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* MUN Experience Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">MUN Experience & Skills</h3>
                
                <div className="space-y-6">
                  {/* MUN Experiences */}
                  <div>
                    <label htmlFor="mun_experiences" className="block text-sm font-semibold text-gray-700 mb-2">
                      List MUN experiences (conference, role, country, committee) *
                    </label>
                    <textarea
                      id="mun_experiences"
                      name="mun_experiences"
                      required
                      value={formData.mun_experiences}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="List your MUN experiences..."
                    ></textarea>
                  </div>

                  {/* Achievements & Skills */}
                  <div>
                    <label htmlFor="achievements_skills" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your prior achievements and skills for chair (100 words) *
                    </label>
                    <textarea
                      id="achievements_skills"
                      name="achievements_skills"
                      required
                      value={formData.achievements_skills}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Describe your achievements and skills..."
                    ></textarea>
                  </div>

                  {/* Handling Delegates */}
                  <div>
                    <label htmlFor="handling_delegates" className="block text-sm font-semibold text-gray-700 mb-2">
                      Handling out-of-line proposals/delegates *
                    </label>
                    <textarea
                      id="handling_delegates"
                      name="handling_delegates"
                      required
                      value={formData.handling_delegates}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="How would you handle difficult situations..."
                    ></textarea>
                  </div>

                  {/* Misconduct Details */}
                  <div>
                    <label htmlFor="misconduct_details" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ever faced committee for misconduct at any MUN? (details/verdict) *
                    </label>
                    <textarea
                      id="misconduct_details"
                      name="misconduct_details"
                      required
                      value={formData.misconduct_details}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Enter 'None' if not applicable, or provide details..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Accommodation & Special Needs Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Accommodation & Special Needs</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Dietary Needs */}
                  <div>
                    <label htmlFor="dietary_needs" className="block text-sm font-semibold text-gray-700 mb-2">
                      Physical/Dietary Needs *
                    </label>
                    <select
                      id="dietary_needs"
                      name="dietary_needs"
                      required
                      value={formData.dietary_needs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Dietary Specify */}
                  <div>
                    <label htmlFor="dietary_specify" className="block text-sm font-semibold text-gray-700 mb-2">
                      If yes, specify or otherwise leave blank
                    </label>
                    <input
                      type="text"
                      id="dietary_specify"
                      name="dietary_specify"
                      value={formData.dietary_specify}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Specify dietary requirements"
                    />
                  </div>

                  {/* T-Shirt Size */}
                  <div>
                    <label htmlFor="tshirt_size" className="block text-sm font-semibold text-gray-700 mb-2">
                      Size of T-Shirt *
                    </label>
                    <input
                      type="text"
                      id="tshirt_size"
                      name="tshirt_size"
                      required
                      value={formData.tshirt_size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="e.g., S, M, L, XL, XXL"
                    />
                  </div>

                  {/* Hostel Accommodation */}
                  <div>
                    <label htmlFor="hostel_accommodation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Do you require our Hostel Accommodation? *
                    </label>
                    <select
                      id="hostel_accommodation"
                      name="hostel_accommodation"
                      required
                      value={formData.hostel_accommodation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Travel Documents Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Travel Documents</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Invitation Letter */}
                  <div>
                    <label htmlFor="invitation_letter" className="block text-sm font-semibold text-gray-700 mb-2">
                      Do you require an invitation letter? *
                    </label>
                    <select
                      id="invitation_letter"
                      name="invitation_letter"
                      required
                      value={formData.invitation_letter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Passport Number */}
                  <div>
                    <label htmlFor="passport_number" className="block text-sm font-semibold text-gray-700 mb-2">
                      If yes, International Passport Number
                    </label>
                    <input
                      type="text"
                      id="passport_number"
                      name="passport_number"
                      value={formData.passport_number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Passport number"
                    />
                  </div>

                  {/* High Commission */}
                  <div className="md:col-span-2">
                    <label htmlFor="high_commission" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nigeria High Commission closest to Applicant *
                    </label>
                    <input
                      type="text"
                      id="high_commission"
                      name="high_commission"
                      required
                      value={formData.high_commission}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="e.g., Nigeria High Commission, London"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact Section */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Emergency Contact</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Guardian Name */}
                  <div className="md:col-span-2">
                    <label htmlFor="guardian_name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name of Guardian/Emergency Contact *
                    </label>
                    <input
                      type="text"
                      id="guardian_name"
                      name="guardian_name"
                      required
                      value={formData.guardian_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Guardian's full name"
                    />
                  </div>

                  {/* Guardian Contact */}
                  <div>
                    <label htmlFor="guardian_contact" className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number of Guardian/Emergency Contact *
                    </label>
                    <input
                      type="text"
                      id="guardian_contact"
                      name="guardian_contact"
                      required
                      value={formData.guardian_contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  {/* Relationship */}
                  <div>
                    <label htmlFor="relationship" className="block text-sm font-semibold text-gray-700 mb-2">
                      Relationship with Applicant *
                    </label>
                    <input
                      type="text"
                      id="relationship"
                      name="relationship"
                      required
                      value={formData.relationship}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="e.g., Parent, Sibling, Friend"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
              >
                {isSubmitting ? 'Processing...' : 'Submit Application'}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Applications will be sent to <strong>{siteConfig.email}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;