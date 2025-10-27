import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { committees } from '../data/committees';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import hero6 from '../assets/hero6.jpg';
import hero7 from '../assets/hero7.jpg';

const siteConfig = { name: "RUIMUN" };

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    delegate_type: 'RUN',
    gender: 'male',
    mun_experience: '',
    affiliation: '',
    position: '',
    department: '',
    matric_num: '',
    city: '',
    state: '',
    country: 'Nigeria',
    zipcode: '',
    advert: 'friend/colleague',
    tshirt_size: 'm',
    medical: '',
    diet: '',
    referral: '',
    committee1: '',
    country1: '',
    committee2: '',
    country2: '',
    committee3: '',
    country3: '',
  });

  const [availableCountries1, setAvailableCountries1] = useState([]);
  const [availableCountries2, setAvailableCountries2] = useState([]);
  const [availableCountries3, setAvailableCountries3] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (formData.committee1) {
      const selectedCommittee = committees.find(c => c.committee === formData.committee1);
      setAvailableCountries1(selectedCommittee ? selectedCommittee.countries : []);
    } else {
      setAvailableCountries1([]);
    }
  }, [formData.committee1]);

  useEffect(() => {
    if (formData.committee2) {
      const selectedCommittee = committees.find(c => c.committee === formData.committee2);
      setAvailableCountries2(selectedCommittee ? selectedCommittee.countries : []);
    } else {
      setAvailableCountries2([]);
    }
  }, [formData.committee2]);

  useEffect(() => {
    if (formData.committee3) {
      const selectedCommittee = committees.find(c => c.committee === formData.committee3);
      setAvailableCountries3(selectedCommittee ? selectedCommittee.countries : []);
    } else {
      setAvailableCountries3([]);
    }
  }, [formData.committee3]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/register_delegate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Registration successful!');
        setTimeout(() => {
          navigate(`/registration-success?id=${data.id}`);
        }, 2000);
      } else {
        setSubmitMessage(data.error || 'An error occurred during registration.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  const theme = {
    supertitle: "6th Session of the Redeemer's University",
    title: "International Model United Nations Conference",
    subtitle: "Theme: Better Together for Peace, Development, and Human Rights",
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section with Slideshow */}
      <style>{`
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation-name: kenBurns, fadeSlide;
          animation-timing-function: ease-in-out, linear;
          animation-iteration-count: infinite, infinite;
          animation-duration: 35s, 35s;
        }
        @keyframes kenBurns {
          0%, 100% { transform: scale(1.1) rotate(2deg); }
          50% { transform: scale(1) rotate(-2deg); }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; }
          14% { opacity: 1; }
          28% { opacity: 0; }
          100% { opacity: 0; }
        }
        ${heroImages.map((_, i) => `.hero-slide:nth-child(${i + 1}) { animation-delay: ${i * 5}s, ${i * 5}s; }`).join('\n')}
      `}</style>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className="hero-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-4 animate-fade-in">
          <p className="text-lg md:text-xl text-white/90 tracking-wider mb-2">{theme.supertitle}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight shadow-lg">{siteConfig.name}</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">{theme.subtitle}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Delegate Registration</h2>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Personal Information</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Gender</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="delegate_type" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Delegate Type</label>
                <select id="delegate_type" name="delegate_type" value={formData.delegate_type} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="RUN">Redeemer's University (₦80,000)</option>
                  <option value="nigerian">Nigerian Delegate (₦100,000)</option>
                  <option value="foreign">International Delegate ($150)</option>
                </select>
              </div>
            </div>
            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Additional Information</h3>
              <div className="mb-4">
                <label htmlFor="affiliation" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Affiliation</label>
                <input type="text" id="affiliation" name="affiliation" value={formData.affiliation} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="position" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Position</label>
                <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Department</label>
                <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="matric_num" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Matric Number</label>
                <input type="text" id="matric_num" name="matric_num" value={formData.matric_num} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">State</label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Country</label>
                <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="zipcode" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Zipcode</label>
                <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
          </div>
          {/* Committee Preferences */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Committee Preferences</h3>
            {/* Preference 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="committee1" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">1st Choice Committee</label>
                <select id="committee1" name="committee1" value={formData.committee1} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select Committee</option>
                  {committees.map(c => <option key={c.id} value={c.committee}>{c.committee}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="country1" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">1st Choice Country</label>
                <select id="country1" name="country1" value={formData.country1} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select Country</option>
                  {availableCountries1.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
            </div>
            {/* Preference 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="committee2" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">2nd Choice Committee</label>
                <select id="committee2" name="committee2" value={formData.committee2} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select Committee</option>
                  {committees.map(c => <option key={c.id} value={c.committee}>{c.committee}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="country2" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">2nd Choice Country</label>
                <select id="country2" name="country2" value={formData.country2} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select Country</option>
                  {availableCountries2.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
            </div>
            {/* Preference 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="committee3" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">3rd Choice Committee</label>
                <select id="committee3" name="committee3" value={formData.committee3} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select Committee</option>
                  {committees.map(c => <option key={c.id} value={c.committee}>{c.committee}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="country3" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">3rd Choice Country</label>
                <select id="country3" name="country3" value={formData.country3} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select Country</option>
                  {availableCountries3.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
            </div>
          </div>
          {/* Other Information */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Other Information</h3>
            <div className="mb-4">
              <label htmlFor="mun_experience" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">MUN Experience</label>
              <textarea id="mun_experience" name="mun_experience" value={formData.mun_experience} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="advert" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">How did you hear about us?</label>
              <select id="advert" name="advert" value={formData.advert} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="instagram">Instagram</option>
                <option value="friend/colleague">Friend/Colleague</option>
                <option value="university/institution">University/Institution</option>
                <option value="ambassador">Campus Ambassador</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="tshirt_size" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">T-Shirt Size</label>
              <select id="tshirt_size" name="tshirt_size" value={formData.tshirt_size} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="medical" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Medical Information</label>
              <textarea id="medical" name="medical" value={formData.medical} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="diet" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Dietary Restrictions</label>
              <textarea id="diet" name="diet" value={formData.diet} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="referral" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Referral Code</label>
              <input type="text" id="referral" name="referral" value={formData.referral} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button type="submit" className="bg-primary hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
          {submitMessage && <p className="text-center mt-4">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Registration;
