import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { CONTACT_SUBJECTS } from '@/lib/constants';
import { ContactFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        variant: "success",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">Contact Us</h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you find the perfect property for your stay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                >
                  {CONTACT_SUBJECTS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  required
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-md font-medium transition"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-neutral-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6 font-display">Get In Touch</h3>
              
              <div className="flex items-start mb-6">
                <div className="text-secondary text-xl mr-4 mt-1"><i className="fas fa-phone"></i></div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Phone & WhatsApp</h4>
                  <p className="text-neutral-dark mb-1">+254 727 283 836</p>
                  <p className="text-sm text-neutral-dark">Available 24/7 for urgent inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-secondary text-xl mr-4 mt-1"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Email</h4>
                  <p className="text-neutral-dark mb-1">paulmutukumuia@gmail.com</p>
                  <p className="text-sm text-neutral-dark">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="text-secondary text-xl mr-4 mt-1"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Office Location</h4>
                  <p className="text-neutral-dark mb-1">Westlands Business Center</p>
                  <p className="text-neutral-dark">Nairobi, Kenya</p>
                </div>
              </div>
              
              <h4 className="font-bold text-neutral-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-light text-white flex items-center justify-center transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-light text-white flex items-center justify-center transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-light text-white flex items-center justify-center transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-light text-white flex items-center justify-center transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
