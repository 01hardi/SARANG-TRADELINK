import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const ServiceSection = ({ title, description, imageSource }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Image source={imageSource} style={styles.sectionImage} />
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const UKDayTripsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/images/daytrips-banner.jpg')} 
        style={styles.bannerImage} 
      />
      
      <View style={styles.content}>
        <Text style={styles.header}>UK Day Trips & Warner Bros. Studio Tour</Text>
        <Text style={styles.intro}>
          Explore beyond London with our exciting day trips to iconic UK destinations and the magical 
          Warner Bros. Studio Tour - The Making of Harry Potter.
        </Text>
        
        <ServiceSection 
          title="Popular Day Trips"
          description="Discover the UK's most famous attractions with our guided day trips from London. 
          Visit the ancient stone circle of Stonehenge, explore the historic university city of Oxford, 
          experience the Roman baths in Bath, or enjoy the picturesque Cotswolds countryside. 
          Our comfortable coaches and expert guides ensure a memorable experience."
          imageSource={require('../../assets/images/uk-daytrips.jpg')}
        />
        
        <ServiceSection 
          title="Warner Bros. Studio Tour"
          description="Step into the magical world of Harry Potter at the Warner Bros. Studio Tour London. 
          See authentic sets, costumes, and props from the beloved film series. Explore the Great Hall, 
          Diagon Alley, Platform 9¾, and discover the behind-the-scenes secrets of the special effects. 
          Our packages include transportation from central London and timed entry tickets."
          imageSource={require('../../assets/images/warner-bros.jpg')}
        />
        
        <ServiceSection 
          title="Booking & Availability"
          description="Secure your spot on our popular day trips and studio tours with easy online booking. 
          Check real-time availability and choose from various departure times to suit your schedule. 
          Group discounts are available, and our flexible cancellation policy gives you peace of mind 
          when planning your UK adventures."
          imageSource={require('../../assets/images/booking-availability.jpg')}
        />
        
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Your Day Trip</Text>
        </TouchableOpacity>
        
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          
          <Text style={styles.faqQuestion}>How long are the day trips from London?</Text>
          <Text style={styles.faqAnswer}>
            Most of our day trips last between 10-12 hours, including travel time from London. 
            Departure is typically early morning (around 8:00-8:30 AM) with return to London 
            in the evening (around 6:00-7:00 PM), depending on the destination and traffic conditions.
          </Text>
          
          <Text style={styles.faqQuestion}>How far in advance should I book the Warner Bros. Studio Tour?</Text>
          <Text style={styles.faqAnswer}>
            The Warner Bros. Studio Tour is extremely popular and often sells out months in advance, 
            especially during school holidays and weekends. We recommend booking at least 3-4 months 
            ahead for peak times and at least 6-8 weeks ahead for off-peak periods.
          </Text>
          
          <Text style={styles.faqQuestion}>Are meals included in the day trips?</Text>
          <Text style={styles.faqAnswer}>
            Meals are generally not included in our standard day trip packages, allowing you the 
            flexibility to choose your own dining options. However, our guides will recommend quality 
            local restaurants and cafes at each destination. Some premium tours do include lunch or 
            afternoon tea experiences.
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

export default UKDayTripsScreen;