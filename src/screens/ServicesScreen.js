import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceCard = ({ title, description, imageSource, screenName }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate(screenName)}
    >
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text style={styles.learnMore}>Learn More →</Text>
      </View>
    </TouchableOpacity>
  );
};

const ServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Our Services</Text>
      <Text style={styles.subheader}>
        Discover our comprehensive range of travel services designed to make your journey memorable
      </Text>
      
      <ServiceCard
        title="London Experience & City Attractions"
        description="Explore London with private and group tours, visit major landmarks, and enjoy skip-the-line access to top attractions."
        imageSource={require('../assets/images/london-experience.jpg')}
        screenName="LondonExperience"
      />
      
      <ServiceCard
        title="Visa Services (Schengen/USA)"
        description="Complete visa assistance for Schengen and USA applications, including guidance on requirements and application process."
        imageSource={require('../assets/images/visa-services.jpg')}
        screenName="VisaServices"
      />
      
      <ServiceCard
        title="Accommodation & Transfers"
        description="Book affordable hotel stays and convenient airport transfers for individuals and groups."
        imageSource={require('../assets/images/accommodation.jpg')}
        screenName="AccommodationTransfers"
      />
      
      <ServiceCard
        title="UK Day Trips & Warner Bros. Studio"
        description="Explore popular destinations outside London and visit the magical Warner Bros. Studio Tour."
        imageSource={require('../assets/images/day-trips.jpg')}
        screenName="UKDayTrips"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  learnMore: {
    fontSize: 14,
    color: '#0066cc',
    fontWeight: '500',
  },
});

export default ServicesScreen;