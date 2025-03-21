import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const ServiceSection = ({ title, description, imageSource }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Image source={imageSource} style={styles.sectionImage} />
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const VisaServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/images/visa-banner.jpg')} 
        style={styles.bannerImage} 
      />
      
      <View style={styles.content}>
        <Text style={styles.header}>Visa Services (Schengen/USA)</Text>
        <Text style={styles.intro}>
          Simplify your visa application process with our comprehensive visa assistance services.
          We specialize in Schengen and USA visas, providing expert guidance throughout the entire process.
        </Text>
        
        <ServiceSection 
          title="Visa Assistance for Schengen & USA"
          description="Our experienced team provides end-to-end visa assistance for Schengen and USA visas. 
          We handle documentation, application submission, and follow-up with embassies to ensure a smooth process.
          Our high success rate is built on years of experience and understanding of visa requirements."
          imageSource={require('../../assets/images/visa-assistance.jpg')}
        />
        
        <ServiceSection 
          title="Application Process & Requirements"
          description="We guide you through every step of the visa application process, from document preparation 
          to interview preparation. Our experts will review your application to ensure it meets all requirements,
          increasing your chances of approval. We stay updated with the latest visa regulations and requirements."
          imageSource={require('../../assets/images/visa-process.jpg')}
        />
        
        <ServiceSection 
          title="Visa FAQs & Support"
          description="Get answers to all your visa-related questions from our knowledgeable team.
          We provide continuous support throughout your application process and keep you informed about the status.
          Our customer service team is available to address any concerns you may have along the way."
          imageSource={require('../../assets/images/visa-support.jpg')}
        />
        
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Inquire About Visa Services</Text>
        </TouchableOpacity>
        
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          
          <Text style={styles.faqQuestion}>How long does the visa application process take?</Text>
          <Text style={styles.faqAnswer}>
            Processing times vary by country and visa type. Schengen visas typically take 10-15 working days,
            while USA visas can take 2-4 weeks after the interview. We recommend applying at least 2 months before travel.
          </Text>
          
          <Text style={styles.faqQuestion}>What documents are required for visa applications?</Text>
          <Text style={styles.faqAnswer}>
            Common requirements include passport, photos, travel itinerary, accommodation details, 
            financial statements, and travel insurance. Specific requirements vary by country and visa type.
            We provide a detailed checklist based on your specific situation.
          </Text>
          
          <Text style={styles.faqQuestion}>Do I need to attend an interview for all visa types?</Text>
          <Text style={styles.faqAnswer}>
            USA visa applications typically require an in-person interview. For Schengen visas, 
            interviews may be required depending on the embassy and your application history.
            We will prepare you thoroughly for any required interviews.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  intro: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    lineHeight: 24,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  sectionImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  bookButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 24,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 16,
    marginBottom: 6,
  },
  faqAnswer: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
});

export default VisaServicesScreen;