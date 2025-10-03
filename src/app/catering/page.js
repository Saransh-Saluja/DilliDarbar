// "use client"
// import React, { useState } from 'react';
// import { Mail, Phone, Calendar, Users, Clock, CheckCircle, Send, Star, Award, Copy, ExternalLink } from 'lucide-react';

// const CateringPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventDate: '',
//     eventTime: '',
//     guestCount: '',
//     eventType: '',
//     venue: '',
//     specialRequests: '',
//     selectedCategories: [],
//     budget: '',
//     emailContent: ''
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const foodCategories = [
//     'Soups & Salads',
//     'Non-Vegetarian Appetizers',
//     'Curries',
//     'Other House Specialties',
//     'Combos & Dosa',
//     'Flatbreads',
//     'Breads',
//     'Desserts',
//     'Kids Menu',
//     'Rice & Noodles'
//   ];

//   const eventTypes = [
//     'Corporate Event',
//     'Wedding Reception',
//     'Private Party',
//     'Anniversary Celebration',
//     'Birthday Party',
//     'Holiday Gathering',
//     'Business Meeting',
//     'Other'
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleCategoryToggle = (category) => {
//     setFormData(prev => ({
//       ...prev,
//       selectedCategories: prev.selectedCategories.includes(category)
//         ? prev.selectedCategories.filter(c => c !== category)
//         : [...prev.selectedCategories, category]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !formData.eventDate || !formData.guestCount) {
//       alert('Please fill in all required fields marked with *');
//       return;
//     }

//     try {
//       const formElement = e.target;
//       const response = await fetch(formElement.action, {
//         method: formElement.method,
//         body: new FormData(formElement),
//         headers: {
//           'Accept': 'application/json'
//         }
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           eventDate: '',
//           eventTime: '',
//           guestCount: '',
//           eventType: '',
//           venue: '',
//           specialRequests: '',
//           selectedCategories: [],
//           budget: '',
//           emailContent: ''
//         });
//       } else {
//         alert('There was a problem submitting your form. Please try again.');
//       }
//     } catch (error) {
//       alert('There was a problem submitting your form. Please try again.');
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(formData.emailContent);
//     alert('Email content copied to clipboard!');
//   };

//   const sendEmail = () => {
//     const subject = `Catering Inquiry - ${formData.name} - ${formData.eventDate}`;
//     const mailtoLink = `mailto:Dillidarbarma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formData.emailContent)}`;
//     window.location.href = mailtoLink;
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
//         </div>
        
//         <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
//           <CheckCircle className="w-20 h-20 text-[#e3c493] mx-auto mb-8" />
//           <h1 className="font-serif text-4xl md:text-5xl text-gray-200 mb-6 tracking-wide">
//             Thank You!
//           </h1>
//           <p className="font-serif text-xl text-gray-300 mb-8 leading-relaxed">
//             Your catering inquiry has been submitted successfully. We have received all your event details.
//           </p>
//           <p className="font-serif text-lg text-gray-400 italic mb-8">
//             Our catering team will contact you within 24 hours to discuss your extraordinary event and provide a customized quote.
//           </p>
//           <button 
//             onClick={() => setIsSubmitted(false)}
//             className="font-serif text-[#e3c493] hover:text-yellow-300 transition-colors duration-300 underline text-lg"
//           >
//             Submit Another Inquiry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-300 rounded-full opacity-20"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Header Section */}
//         <div className="text-center py-20 px-6">
//   <div className="max-w-4xl mx-auto">
//     <h1 className="font-serif text-5xl md:text-7xl text-gray-200 mb-6 tracking-wide font-light">
//       Exquisite
//       <span className="block text-[#e3c493] text-4xl md:text-6xl mt-2">Catering</span>
//     </h1>
//     <p className="font-serif text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
//       Bringing culinary artistry to your distinguished occasions
//     </p>
    
//     <div className="max-w-3xl mx-auto mt-12 space-y-4">
//       <p className="font-serif text-gray-300 leading-relaxed">
//         Make your next event unforgettable with the rich, vibrant flavors of Dilli Darbar Indian Cuisine. Whether you're hosting an intimate gathering, a corporate event, a wedding, or a festive celebration, our catering service brings the taste of authentic Indian cuisine straight to your venue.
//       </p>
//       <p className="font-serif text-gray-300 leading-relaxed">
//         We specialize in customizing menus to suit your occasion — from traditional North Indian classics like Dilliwala Butter Chicken, Paneer Tikka, and Mutton Rogan Josh, to beloved street-style snacks, hearty biryanis, and decadent desserts. Our chefs use only the finest ingredients and aromatic spices to ensure every dish delights your guests.
//       </p>
//     </div>
    
//     {/* Service Highlights */}
//     <div className="grid md:grid-cols-3 gap-8 mt-16">
//       <div className="text-center">
//         <Award className="w-8 h-8 text-[#e3c493] mx-auto mb-4" />
//         <h3 className="font-serif text-lg text-gray-200 mb-2">Premium Service</h3>
//         <p className="font-serif text-gray-400 text-sm italic">Premium catering experience</p>
//       </div>
//       <div className="text-center">
//         <Star className="w-8 h-8 text-[#e3c493] mx-auto mb-4" />
//         <h3 className="font-serif text-lg text-gray-200 mb-2">Authentic Cuisine</h3>
//         <p className="font-serif text-gray-400 text-sm italic">Traditional flavors, modern presentation</p>
//       </div>
//       <div className="text-center">
//         <Users className="w-8 h-8 text-[#e3c493] mx-auto mb-4" />
//         <h3 className="font-serif text-lg text-gray-200 mb-2">Any Occasion</h3>
//         <p className="font-serif text-gray-400 text-sm italic">From intimate to grand celebrations</p>
//       </div>
//     </div>

//     {/* Offerings Section */}
//     <div className="mt-24 max-w-4xl mx-auto">
//       <h2 className="font-serif text-4xl text-[#e3c493] mb-12 text-center">What We Offer</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
//           <h3 className="font-serif text-xl text-gray-200 mb-3">Customized Catering Packages</h3>
//           <p className="font-serif text-gray-400 text-sm">From small parties to large banquets, we create menus tailored to your needs</p>
//         </div>
//         <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
//           <h3 className="font-serif text-xl text-gray-200 mb-3">Dietary Accommodations</h3>
//           <p className="font-serif text-gray-400 text-sm">Vegetarian, vegan, and gluten-free options available</p>
//         </div>
//         <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
//           <h3 className="font-serif text-xl text-gray-200 mb-3">On-Site Staff & Live Stations</h3>
//           <p className="font-serif text-gray-400 text-sm">Optional professional staff and interactive food stations for your event</p>
//         </div>
//         <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
//           <h3 className="font-serif text-xl text-gray-200 mb-3">Delivery & Setup Services</h3>
//           <p className="font-serif text-gray-400 text-sm">Complete setup and breakdown handled by our team</p>
//         </div>
//         <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
//           <h3 className="font-serif text-xl text-gray-200 mb-3">Corporate & Office Lunches</h3>
//           <p className="font-serif text-gray-400 text-sm">Professional catering for business meetings and office events</p>
//         </div>
//         <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
//           <h3 className="font-serif text-xl text-gray-200 mb-3">Wedding & Event Catering</h3>
//           <p className="font-serif text-gray-400 text-sm">Elegant service for weddings and special celebrations</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//         {/* Form Section */}
//         <div className="max-w-4xl mx-auto px-6 pb-20">
//           <div className="bg-black/50 border border-yellow-400/20 rounded-lg p-8 md:p-12">
//             <h2 className="font-serif text-3xl md:text-4xl text-gray-200 mb-8 text-center tracking-wide">
//               Plan Your <span className="text-[#e3c493]">Extraordinary</span> Event
//             </h2>
            
//             <form onSubmit={handleSubmit} action="https://formspree.io/f/xwprvadw" method="POST" className="space-y-8">
//               {/* Personal Information */}
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div>
//                   <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                     placeholder="your@email.com"
//                   />
//                   <input type="hidden" name="_replyto" value={formData.email} />
//                 </div>
//                 <div>
//                   <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Phone *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                     placeholder="(555) 123-4567"
//                   />
//                 </div>
//               </div>

//               {/* Event Details */}
//               <div className="border-t border-yellow-400/20 pt-8">
//                 <h3 className="font-serif text-xl text-gray-200 mb-6 tracking-wide">Event Details</h3>
//                   <div>
//                     <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Event Type *</label>
//                     <select
//                       name="eventType"
//                       value={formData.eventType}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                     >
//                       <option value="">Select event type</option>
//                       {eventTypes.map(type => (
//                         <option key={type} value={type}>{type}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Guest Count *</label>
//                     <input
//                       type="number"
//                       name="guestCount"
//                       value={formData.guestCount}
//                       onChange={handleInputChange}
//                       required
//                       min="1"
//                       className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                       placeholder="Number of guests"
//                     />
//                   </div>

//                   <div className="grid md:grid-cols-3 gap-6 mt-6">
//                   <div>
//                     <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Event Date *</label>
//                     <input
//                       type="date"
//                       name="eventDate"
//                       value={formData.eventDate}
//                       onChange={handleInputChange}
//                       required
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300 appearance-none [color-scheme:dark]"
//                       style={{
//                         colorScheme: 'dark'
//                       }}
//                     />
//                   </div>
//                   <div>
//                     <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Event Time</label>
//                     <input
//                       type="time"
//                       name="eventTime"
//                       value={formData.eventTime}
//                       onChange={handleInputChange}
//                       className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300 appearance-none [color-scheme:dark]"
//                       style={{
//                         colorScheme: 'dark'
//                       }}
//                     />
//                   </div>
//                   <div>
//                     <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Budget Range</label>
//                     <select
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleInputChange}
//                       className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                     >
//                       <option value="">Select budget range</option>
//                       <option value="$500-$1,000">$500 - $1,000</option>
//                       <option value="$1,000-$2,500">$1,000 - $2,500</option>
//                       <option value="$2,500-$5,000">$2,500 - $5,000</option>
//                       <option value="$5,000-$10,000">$5,000 - $10,000</option>
//                       <option value="$10,000+">$10,000+</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Venue Location</label>
//                   <input
//                     type="text"
//                     name="venue"
//                     value={formData.venue}
//                     onChange={handleInputChange}
//                     className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
//                     placeholder="Event venue or address"
//                   />
//                 </div>

//                 {/* Hidden field for selected categories */}
//                 <input 
//                   type="hidden" 
//                   name="selectedCategories" 
//                   value={formData.selectedCategories.join(', ')} 
//                 />

//                 {/* Hidden field for form identification */}
//                 <input type="hidden" name="_subject" value={`Catering Inquiry - ${formData.name}`} />
//                 <input type="hidden" name="_next" value="thank-you" />
//               </div>

//               {/* Food Categories */}
//               <div className="border-t border-yellow-400/20 pt-8">
//                 <h3 className="font-serif text-xl text-gray-200 mb-6 tracking-wide">Cuisine Preferences</h3>
//                 <p className="font-serif text-gray-400 text-sm mb-4 italic">Select the categories you're interested in:</p>
//                 <div className="grid md:grid-cols-2 gap-3">
//                   {foodCategories.map(category => (
//                     <label key={category} className="flex items-center space-x-3 cursor-pointer group">
//                       <input
//                         type="checkbox"
//                         checked={formData.selectedCategories.includes(category)}
//                         onChange={() => handleCategoryToggle(category)}
//                         className="w-4 h-4 text-[#e3c493] bg-black/50 border border-yellow-400/30 rounded focus:ring-[#e3c493] focus:ring-2"
//                       />
//                       <span className="font-serif text-gray-300 group-hover:text-[#e3c493] transition-colors duration-300">
//                         {category}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Special Requests */}
//               <div className="border-t border-yellow-400/20 pt-8">
//                 <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Special Requests & Dietary Requirements</label>
//                 <textarea
//                   name="specialRequests"
//                   value={formData.specialRequests}
//                   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300 resize-vertical"
//                   placeholder="Please share any dietary restrictions, allergies, special requests, or additional details about your event..."
//                 />
//               </div>

//               <div className="text-center pt-8">
//                 <button
//                   type="submit"
//                   className="bg-gradient-to-r from-[#e3c493] to-amber-500 text-black font-serif text-lg px-12 py-4 rounded hover:from-amber-500 hover:to-[#e3c493] transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto"
//                 >
//                   <Send className="w-5 h-5" />
//                   <span>Submit Catering Inquiry</span>
//                 </button>
//                 <p className="font-serif text-gray-400 text-sm mt-4 italic">
//                   We'll respond within 24 hours to discuss your event
//                 </p>
//               </div>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="text-center mt-16 border-t border-yellow-400/20 pt-16">
//             <p className="font-serif text-gray-300 text-xl mb-8 italic tracking-wide">
//               Questions? Contact our catering specialists
//             </p>
            
//             <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-200">
//               <a href="tel:+15085992222" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
//                 <Phone className="w-6 h-6 text-[#e3c493]" />
//                 <span className="font-serif text-lg tracking-wide">+1 (508) 599-2222</span>
//               </a>
//               <div className="hidden md:block w-px h-8 bg-yellow-400/40"></div>
//               <a href="mailto:Dillidarbarma@gmail.com" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
//                 <Mail className="w-6 h-6 text-[#e3c493]" />
//                 <span className="font-serif text-lg tracking-wide">Dillidarbarma@gmail.com</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
//     </div>
//   );
// };

// export default CateringPage;


"use client"
import React, { useState } from 'react';
import { Mail, Phone, Calendar, Users, Clock, CheckCircle, Send, Star, Award, Copy, ExternalLink } from 'lucide-react';

const CateringPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventType: '',
    venue: '',
    specialRequests: '',
    selectedCategories: [],
    emailContent: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const foodCategories = [
    'Soups & Salads',
    'Non-Vegetarian Appetizers',
    'Curries',
    'Other House Specialties',
    'Combos & Dosa',
    'Flatbreads',
    'Breads',
    'Desserts',
    'Kids Menu',
    'Rice & Noodles'
  ];

  const eventTypes = [
    'Corporate Event',
    'Wedding Reception',
    'Private Party',
    'Anniversary Celebration',
    'Birthday Party',
    'Holiday Gathering',
    'Business Meeting',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryToggle = (category) => {
    setFormData(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter(c => c !== category)
        : [...prev.selectedCategories, category]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !formData.eventDate || !formData.guestCount) {
      alert('Please fill in all required fields marked with *');
      return;
    }

    try {
      const formElement = e.target;
      const response = await fetch(formElement.action, {
        method: formElement.method,
        body: new FormData(formElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventTime: '',
          guestCount: '',
          eventType: '',
          venue: '',
          specialRequests: '',
          selectedCategories: [],
          emailContent: ''
        });
      } else {
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please try again.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formData.emailContent);
    alert('Email content copied to clipboard!');
  };

  const sendEmail = () => {
    const subject = `Catering Inquiry - ${formData.name} - ${formData.eventDate}`;
    const mailtoLink = `mailto:Dillidarbarma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formData.emailContent)}`;
    window.location.href = mailtoLink;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <CheckCircle className="w-20 h-20 text-[#e3c493] mx-auto mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl text-gray-200 mb-6 tracking-wide">
            Thank You!
          </h1>
          <p className="font-serif text-xl text-gray-300 mb-8 leading-relaxed">
            Your catering inquiry has been submitted successfully. We have received all your event details.
          </p>
          <p className="font-serif text-lg text-gray-400 italic mb-8">
            Our catering team will contact you within 24 hours to discuss your extraordinary event and provide a customized quote.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="font-serif text-[#e3c493] hover:text-yellow-300 transition-colors duration-300 underline text-lg"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h1 className="font-serif text-5xl md:text-7xl text-gray-200 mb-6 tracking-wide font-light">
      Exquisite
      <span className="block text-[#e3c493] text-4xl md:text-6xl mt-2">Catering</span>
    </h1>
    <p className="font-serif text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
      Bringing culinary artistry to your distinguished occasions
    </p>
    
    <div className="max-w-3xl mx-auto mt-12 space-y-4">
      <p className="font-serif text-gray-300 leading-relaxed">
        Make your next event unforgettable with the rich, vibrant flavors of Dilli Darbar Indian Cuisine. Whether you&apos;re hosting an intimate gathering, a corporate event, a wedding, or a festive celebration, our catering service brings the taste of authentic Indian cuisine straight to your venue.
      </p>
      <p className="font-serif text-gray-300 leading-relaxed">
        We specialize in customizing menus to suit your occasion — from traditional North Indian classics like Dilliwala Butter Chicken, Paneer Tikka, and Mutton Rogan Josh, to beloved street-style snacks, hearty biryanis, and decadent desserts. Our chefs use only the finest ingredients and aromatic spices to ensure every dish delights your guests.
      </p>
    </div>
    
    {/* Service Highlights */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      <div className="text-center">
        <Award className="w-8 h-8 text-[#e3c493] mx-auto mb-4" />
        <h3 className="font-serif text-lg text-gray-200 mb-2">Premium Service</h3>
        <p className="font-serif text-gray-400 text-sm italic">Premium catering experience</p>
      </div>
      <div className="text-center">
        <Star className="w-8 h-8 text-[#e3c493] mx-auto mb-4" />
        <h3 className="font-serif text-lg text-gray-200 mb-2">Authentic Cuisine</h3>
        <p className="font-serif text-gray-400 text-sm italic">Traditional flavors, modern presentation</p>
      </div>
      <div className="text-center">
        <Users className="w-8 h-8 text-[#e3c493] mx-auto mb-4" />
        <h3 className="font-serif text-lg text-gray-200 mb-2">Any Occasion</h3>
        <p className="font-serif text-gray-400 text-sm italic">From intimate to grand celebrations</p>
      </div>
    </div>

    {/* Offerings Section */}
    <div className="mt-24 max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl text-[#e3c493] mb-12 text-center">What We Offer</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h3 className="font-serif text-xl text-gray-200 mb-3">Customized Catering Packages</h3>
          <p className="font-serif text-gray-400 text-sm">From small parties to large banquets, we create menus tailored to your needs</p>
        </div>
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h3 className="font-serif text-xl text-gray-200 mb-3">Dietary Accommodations</h3>
          <p className="font-serif text-gray-400 text-sm">Vegetarian, vegan, and gluten-free options available</p>
        </div>
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h3 className="font-serif text-xl text-gray-200 mb-3">On-Site Staff & Live Stations</h3>
          <p className="font-serif text-gray-400 text-sm">Optional professional staff and interactive food stations for your event</p>
        </div>
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h3 className="font-serif text-xl text-gray-200 mb-3">Delivery & Setup Services</h3>
          <p className="font-serif text-gray-400 text-sm">Complete setup and breakdown handled by our team</p>
        </div>
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h3 className="font-serif text-xl text-gray-200 mb-3">Corporate & Office Lunches</h3>
          <p className="font-serif text-gray-400 text-sm">Professional catering for business meetings and office events</p>
        </div>
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h3 className="font-serif text-xl text-gray-200 mb-3">Wedding & Event Catering</h3>
          <p className="font-serif text-gray-400 text-sm">Elegant service for weddings and special celebrations</p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-black/50 border border-yellow-400/20 rounded-lg p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-200 mb-8 text-center tracking-wide">
              Plan Your <span className="text-[#e3c493]">Extraordinary</span> Event
            </h2>
            
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xwprvadw" method="POST" className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                  <input type="hidden" name="_replyto" value={formData.email} />
                </div>
                <div>
                  <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="border-t border-yellow-400/20 pt-8">
                <h3 className="font-serif text-xl text-gray-200 mb-6 tracking-wide">Event Details</h3>
                  <div>
                    <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Guest Count *</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
                      placeholder="Number of guests"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Event Date *</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300 appearance-none [color-scheme:dark]"
                      style={{
                        colorScheme: 'dark'
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Event Time</label>
                    <input
                      type="time"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300 appearance-none [color-scheme:dark]"
                      style={{
                        colorScheme: 'dark'
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Venue Location</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300"
                    placeholder="Event venue or address"
                  />
                </div>

                {/* Hidden field for selected categories */}
                <input 
                  type="hidden" 
                  name="selectedCategories" 
                  value={formData.selectedCategories.join(', ')} 
                />

                {/* Hidden field for form identification */}
                <input type="hidden" name="_subject" value={`Catering Inquiry - ${formData.name}`} />
                <input type="hidden" name="_next" value="thank-you" />
              </div>

              {/* Food Categories */}
              <div className="border-t border-yellow-400/20 pt-8">
                <h3 className="font-serif text-xl text-gray-200 mb-6 tracking-wide">Cuisine Preferences</h3>
                <p className="font-serif text-gray-400 text-sm mb-4 italic">Select the categories you&apos;re interested in:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {foodCategories.map(category => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-[#e3c493] bg-black/50 border border-yellow-400/30 rounded focus:ring-[#e3c493] focus:ring-2"
                      />
                      <span className="font-serif text-gray-300 group-hover:text-[#e3c493] transition-colors duration-300">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="border-t border-yellow-400/20 pt-8">
                <label className="font-serif text-gray-300 text-sm mb-2 block tracking-wide">Special Requests & Dietary Requirements</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-black/50 border border-yellow-400/30 rounded px-4 py-3 text-gray-200 font-serif focus:border-[#e3c493] focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Please share any dietary restrictions, allergies, special requests, or additional details about your event..."
                />
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#e3c493] to-amber-500 text-black font-serif text-lg px-12 py-4 rounded hover:from-amber-500 hover:to-[#e3c493] transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Catering Inquiry</span>
                </button>
                <p className="font-serif text-gray-400 text-sm mt-4 italic">
                  We&apos;ll respond within 24 hours to discuss your event
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-16 border-t border-yellow-400/20 pt-16">
            <p className="font-serif text-gray-300 text-xl mb-8 italic tracking-wide">
              Questions? Contact our catering specialists
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-200">
              <a href="tel:+15085992222" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
                <Phone className="w-6 h-6 text-[#e3c493]" />
                <span className="font-serif text-lg tracking-wide">+1 (508) 599-2222</span>
              </a>
              <div className="hidden md:block w-px h-8 bg-yellow-400/40"></div>
              <a href="mailto:Dillidarbarma@gmail.com" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
                <Mail className="w-6 h-6 text-[#e3c493]" />
                <span className="font-serif text-lg tracking-wide">Dillidarbarma@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default CateringPage;