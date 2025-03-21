import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const ServiceSection = ({ title, description, imageSource }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Image source={imageSource} style={styles.sectionImage} />
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const AccommodationTransfersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/images/accommodation-banner.jpg')} 
        style={styles.bannerImage} 
      />
      
      <View style={styles.content}>
        <Text style={styles.header}>Accommodation & Transfers</Text>
        <Text style={styles.intro}>
          Make your stay comfortable and convenient with our accommodation and transfer services.
          We offer a range of options to suit all budgets and preferences.
        </Text>
        
        <ServiceSection 
          title="Cheap Hotel Stays & Deals"
          description="Find the best hotel deals across London and the UK. We partner with a wide range of 
          accommodations from budget-friendly options to luxury hotels. Our exclusive deals ensure you get 
          the best value for your money, with special discounts for long stays and group bookings."
          imageSource={require('../../assets/images/hotel-stays.jpg')}
        />
        
        <ServiceSection 
          title="Airport & Private Transfers"
          description="Start your trip stress-free with our reliable airport transfer services. Our professional 
          drivers will meet you at the airport and take you directly to your accommodation. Private transfers 
          are available 24/7, with comfortable vehicles suitable for individuals, families, or business travelers."
          imageSource={require('../../assets/images/private-transfers.jpg')}
        />
        
        <ServiceSection 
          title="Group Transfers"
          description="Traveling with a group? Our group transfer services can accommodate parties of any size. 
          We provide spacious vehicles with ample luggage space, ensuring everyone travels together comfortably. 
          Perfect for family reunions, corporate groups, or tour parties visiting the UK."
          imageSource={require('../../assets/images/group-transfers.jpg')}
        />
        
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Accommodation & Transfers</Text>
        </TouchableOpacity>
        
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          
          <Text style={styles.faqQuestion}>How far in advance should I book accommodation?</Text>
          <Text style={styles.faqAnswer}>
            For the best rates and availability, we recommend booking accommodation at least 1-2 months in advance, 
            especially during peak season (May-September) and around major holidays or events in London.
          </Text>
          
          <Text style={styles.faqQuestion}>Do your airport transfers operate at night?</Text>
          <Text style={styles.faqAnswer}>
            Yes, our airport transfer services operate 24/7, including late-night and early-morning arrivals. 
            Our drivers monitor flight information to adjust for any delays, ensuring they're there when you arrive.
          </Text>
          
          <Text style={styles.faqQuestion}>Can I modify or cancel my accommodation booking?</Text>
          <Text style={styles.faqAnswer}>
            Most accommodations allow modifications or cancellations up to 48-72 hours before check-in without penalty. 
            Specific policies vary by property and rate type. We'll clearly communicate the terms at the time of booking.
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

export default AccommodationTransfersScreen;