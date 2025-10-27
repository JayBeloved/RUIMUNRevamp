import React, { useState } from 'react';
import { firestore } from '../firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';
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

    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(firestore, 'registrations'), formData);
      console.log('Document written with ID: ', docRef.id);

      setSubmitMessage('Your application has been submitted successfully!');
      
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

    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
          
          <p className="text-center text-gray-600 mb-12 text-lg">
            Join the team organizing RUIMUN'26! Fill out the form below to apply for an official position.
          </p>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
<h3 className="text-2xl font-bold text-primary mb-6">Personal Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
    </div>
    <div>
        <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="nationality" className="block text-gray-700 font-medium mb-2">Nationality</label>
        <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">WhatsApp Contact</label>
        <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
</div>

{/* Academic Information */}
<h3 className="text-2xl font-bold text-primary mb-6">Academic Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
        <label htmlFor="institution" className="block text-gray-700 font-medium mb-2">Last/Present Institution Attended</label>
        <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="graduation" className="block text-gray-700 font-medium mb-2">Year of Graduation</label>
        <input type="text" id="graduation" name="graduation" value={formData.graduation} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="level" className="block text-gray-700 font-medium mb-2">Level</label>
        <input type="text" id="level" name="level" value={formData.level} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="field" className="block text-gray-700 font-medium mb-2">Field of Study</label>
        <input type="text" id="field" name="field" value={formData.field} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="country_city" className="block text-gray-700 font-medium mb-2">Country/City</label>
        <input type="text" id="country_city" name="country_city" value={formData.country_city} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
</div>

{/* Committee Information */}
<h3 className="text-2xl font-bold text-primary mb-6">Committee Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
        <label htmlFor="committee_preference" className="block text-gray-700 font-medium mb-2">Committee Preference</label>
        <select id="committee_preference" name="committee_preference" value={formData.committee_preference} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select Committee</option>
            {committees.map(committee => <option key={committee} value={committee}>{committee}</option>)}
        </select>
    </div>
    <div>
        <label htmlFor="role_committee" className="block text-gray-700 font-medium mb-2">Role in Committee</label>
        <select id="role_committee" name="role_committee" value={formData.role_committee} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select Role</option>
            {roles.map(role => <option key={role} value={role}>{role}</option>)}
        </select>
    </div>
</div>
<div class="mb-8">
    <label htmlFor="reason_committee" class="block text-gray-700 font-medium mb-2">Reason for Committee Preference</label>
    <textarea id="reason_committee" name="reason_committee" value={formData.reason_committee} onChange={handleChange} rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
</div>

{/* MUN Experiences */}
<h3 className="text-2xl font-bold text-primary mb-6">MUN Experiences</h3>
<div class="mb-8">
    <label htmlFor="mun_experiences" class="block text-gray-700 font-medium mb-2">Please list your MUN experiences</label>
    <textarea id="mun_experiences" name="mun_experiences" value={formData.mun_experiences} onChange={handleChange} rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
</div>

{/* Achievements & Skills */}
<h3 className="text-2xl font-bold text-primary mb-6">Achievements & Skills</h3>
<div class="mb-8">
    <label htmlFor="achievements_skills" class="block text-gray-700 font-medium mb-2">Please list your achievements and skills</label>
    <textarea id="achievements_skills" name="achievements_skills" value={formData.achievements_skills} onChange={handleChange} rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
</div>

{/* Scenarios */}
<h3 className="text-2xl font-bold text-primary mb-6">Scenarios</h3>
<div class="mb-8">
    <label htmlFor="handling_delegates" class="block text-gray-700 font-medium mb-2">How would you handle out-of-line proposals/delegates?</label>
    <textarea id="handling_delegates" name="handling_delegates" value={formData.handling_delegates} onChange={handleChange} rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
</div>
<div class="mb-8">
    <label htmlFor="misconduct_details" class="block text-gray-700 font-medium mb-2">Have you ever been involved in any misconduct? If yes, please specify.</label>
    <textarea id="misconduct_details" name="misconduct_details" value={formData.misconduct_details} onChange={handleChange} rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
</div>

{/* Accommodation & Special Needs */}
<h3 className="text-2xl font-bold text-primary mb-6">Accommodation & Special Needs</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
        <label htmlFor="dietary_needs" class="block text-gray-700 font-medium mb-2">Physical/Dietary Needs</label>
        <select id="dietary_needs" name="dietary_needs" value={formData.dietary_needs} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>
    <div>
        <label htmlFor="dietary_specify" class="block text-gray-700 font-medium mb-2">If yes, please specify</label>
        <input type="text" id="dietary_specify" name="dietary_specify" value={formData.dietary_specify} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
    <div>
        <label htmlFor="tshirt_size" class="block text-gray-700 font-medium mb-2">T-Shirt Size</label>
        <select id="tshirt_size" name="tshirt_size" value={formData.tshirt_size} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
    </div>
    <div>
        <label htmlFor="hostel_accommodation" class="block text-gray-700 font-medium mb-2">Do you require hostel accommodation?</label>
        <select id="hostel_accommodation" name="hostel_accommodation" value={formData.hostel_accommodation} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>
</div>

{/* Travel Documents */}
<h3 className="text-2xl font-bold text-primary mb-6">Travel Documents (for International Applicants)</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
        <label htmlFor="invitation_letter" class="block text-gray-700 font-medium mb-2">Do you require an invitation letter for visa application?</label>
        <select id="invitation_letter" name="invitation_letter" value={formData.invitation_letter} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>
    <div>
        <label htmlFor="passport_number" class="block text-gray-700 font-medium mb-2">Passport Number</label>
        <input type="text" id="passport_number" name="passport_number" value={formData.passport_number} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
    <div>
        <label htmlFor="high_commission" class="block text-gray-700 font-medium mb-2">Location of Nigeria High Commission</label>
        <input type="text" id="high_commission" name="high_commission" value={formData.high_commission} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
</div>

{/* Emergency Contact */}
<h3 className="text-2xl font-bold text-primary mb-6">Emergency Contact</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
        <label htmlFor="guardian_name" class="block text-gray-700 font-medium mb-2">Guardian/Emergency Contact Name</label>
        <input type="text" id="guardian_name" name="guardian_name" value={formData.guardian_name} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="guardian_contact" class="block text-gray-700 font-medium mb-2">Guardian/Emergency Contact Number</label>
        <input type="tel" id="guardian_contact" name="guardian_contact" value={formData.guardian_contact} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
    <div>
        <label htmlFor="relationship" class="block text-gray-700 font-medium mb-2">Relationship with Applicant</label>
        <input type="text" id="relationship" name="relationship" value={formData.relationship} onChange={handleChange} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
    </div>
</div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" disabled={isSubmitting} className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-400">
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
            {submitMessage && <p className="text-center text-green-600 mt-4">{submitMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
