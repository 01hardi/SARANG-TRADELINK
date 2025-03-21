import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  Dimensions,
  ImageBackground 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const FeaturedDestination = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.featuredItem} onPress={onPress}>
    <ImageBackground source={image} style={styles.featuredImage} imageStyle={{ borderRadius: 8 }}>
      <View style={styles.featuredOverlay}>
        <Text style={styles.featuredTitle}>{title}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const ServiceCard = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.serviceCard} onPress={onPress}>
    <Image source={icon} style={styles.serviceIcon} />
    <Text style={styles.serviceTitle}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <ImageBackground 
        source={require('../assets/images/london-hero.jpg')} 
        style={styles.heroImage}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Discover London & Beyond</Text>
          <Text style={styles.heroSubtitle}>Your trusted travel partner in the UK</Text>
          <TouchableOpacity 
            style={styles.heroButton}
            onPress={() => navigation.navigate('Services')}
          >
            <Text style={styles.heroButtonText}>Explore Our Services</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome to Sarang Tradelink</Text>
        <Text style={styles.introText}>
          We are a premier travel agency specializing in UK travel experiences. From London city tours 
          to day trips across the UK, visa services, and comfortable accommodations - we handle all aspects 
          of your journey to ensure a memorable and hassle-free experience.
        </Text>
        <TouchableOpacity 
          style={styles.textButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.textButtonText}>Learn More About Us</Text>
        </TouchableOpacity>
      </View>
      
      {/* Services Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesGrid}>
          <ServiceCard 
            title="London Experience" 
            icon={require('../assets/images/icon-london.png')} 
            onPress={() => navigation.navigate('LondonExperience')}
          />
          <ServiceCard 
            title="Visa Services" 
            icon={require('../assets/images/icon-visa.png')} 
            onPress={() => navigation.navigate('VisaServices')}
          />
          <ServiceCard 
            title="Accommodation" 
            icon={require('../assets/images/icon-hotel.png')} 
            onPress={() => navigation.navigate('AccommodationTransfers')}
          />
          <ServiceCard 
            title="UK Day Trips" 
            icon={require('../assets/images/icon-daytrip.png')} 
            onPress={() => navigation.navigate('UKDayTrips')}
          />
        </View>
      </View>
      
      {/* Featured Destinations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
          <FeaturedDestination 
            title="Stonehenge" 
            image={require('../assets/images/stonehenge.jpg')} 
            onPress={() => navigation.navigate('UKDayTrips')}
          />
          <FeaturedDestination 
            title="Warner Bros. Studio" 
            image={require('../assets/images/warner-bros-featured.jpg')} 
            onPress={() => navigation.navigate('UKDayTrips')}
          />
          <FeaturedDestination 
            title="Oxford" 
            image={require('../assets/images/oxford.jpg')} 
            onPress={() => navigation.navigate('UKDayTrips')}
          />
          <FeaturedDestination 
            title="Bath" 
            image={require('../assets/images/bath.jpg')} 
            onPress={() => navigation.navigate('UKDayTrips')}
          />
        </ScrollView>
      </View>
      
      {/* Testimonials */}
      <View style={[styles.section, styles.testimonialSection]}>
        <Text style={styles.sectionTitle}>What Our Clients Say</Text>
        <View style={styles.testimonial}>
          <Text style={styles.testimonialText}>
            "Sarang Tradelink made our London trip absolutely perfect! Their London tour was informative 
            and engaging, and the Warner Bros. Studio tour was magical. Highly recommended!"
          </Text>
          <Text style={styles.testimonialAuthor}>- Sarah J., United States</Text>
        </View>
        <TouchableOpacity 
          style={styles.textButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.textButtonText}>Read More Testimonials</Text>
        </TouchableOpacity>
      </View>
      
      {/* Contact CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Start Your UK Adventure?</Text>
        <Text style={styles.ctaText}>
          Contact us today to plan your perfect UK experience. Our travel experts are ready to assist you.
        </Text>
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.ctaButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  heroButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 16,
  },
  textButton: {
    marginTop: 8,
  },
  textButtonText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: '500',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  featuredScroll: {
    marginLeft: -20,
  },
  featuredItem: {
    width: width * 0.7,
    height: 180,
    marginLeft: 20,
    marginRight: 5,
    marginBottom: 10,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  featuredOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  testimonialSection: {
    backgroundColor: '#f8f8f8',
  },
  testimonial: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    lineHeight: 24,
    marginBottom: 12,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'right',
  },
  ctaSection: {
    backgroundColor: '#0066cc',
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  ctaButtonText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;