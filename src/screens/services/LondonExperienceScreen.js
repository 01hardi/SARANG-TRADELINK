import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const ServiceSection = ({ title, description, imageSource }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Image source={imageSource} style={styles.sectionImage} />
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const LondonExperienceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/images/london-banner.jpg')} 
        style={styles.bannerImage} 
      />
      
      <View style={styles.content}>
        <Text style={styles.header}>London Experience & City Top Attractions</Text>
        <Text style={styles.intro}>
          Discover the best of London with our curated experiences. From iconic landmarks to hidden gems, 
          we offer the perfect way to explore this magnificent city.
        </Text>
        
        <ServiceSection 
          title="London Tours (Private & Group)"
          description="Experience London your way with our customizable private tours or join our expertly guided group tours. 
          Our knowledgeable guides will take you through London's rich history and vibrant culture. 
          Tours available in multiple languages and tailored to your interests."
          imageSource={require('../../assets/images/london-tours.jpg')}
        />
        
        <ServiceSection 
          title="Major Landmarks & Must-See Attractions"
          description="Visit London's iconic landmarks including Buckingham Palace, Tower of London, 
          Westminster Abbey, and the British Museum. Our packages include priority access to 
          these popular destinations, allowing you to make the most of your time in London."
          imageSource={require('../../assets/images/london-landmarks.jpg')}
        />
        
        <ServiceSection 
          title="Skip-the-Line & City Passes"
          description="Save time and money with our skip-the-line tickets and comprehensive city passes. 
          Get access to multiple attractions at discounted rates and bypass the long queues. 
          Our London Pass options include public transport for seamless city exploration."
          imageSource={require('../../assets/images/london-passes.jpg')}
        />
        
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Your London Experience</Text>
        </TouchableOpacity>
        
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          
          <Text style={styles.faqQuestion}>What is the best time to visit London attractions?</Text>
          <Text style={styles.faqAnswer}>
            Most attractions are less crowded early in the morning or later in the afternoon. 
            Weekdays are generally less busy than weekends.
          </Text>
          
          <Text style={styles.faqQuestion}>Are your tours suitable for children?</Text>
          <Text style={styles.faqAnswer}>
            Yes, we offer family-friendly tours with engaging content for all ages. 
            Children under 5 often receive discounted or free entry to many attractions.
          </Text>
          
          <Text style={styles.faqQuestion}>How far in advance should I book?</Text>
          <Text style={styles.faqAnswer}>
            For popular attractions and during peak season (June-August), we recommend booking 
            at least 2-3 weeks in advance to secure your preferred dates and times.
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

export default LondonExperienceScreen;