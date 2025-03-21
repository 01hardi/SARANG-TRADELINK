import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeamMember = ({ name, role, image }) => (
  <View style={styles.teamMember}>
    <Image source={image} style={styles.teamMemberImage} />
    <Text style={styles.teamMemberName}>{name}</Text>
    <Text style={styles.teamMemberRole}>{role}</Text>
  </View>
);

const Testimonial = ({ text, author, location }) => (
  <View style={styles.testimonialCard}>
    <Text style={styles.testimonialText}>{text}</Text>
    <Text style={styles.testimonialAuthor}>{author}</Text>
    <Text style={styles.testimonialLocation}>{location}</Text>
  </View>
);

const AboutScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      {/* Company Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Sarang Tradelink</Text>
        <Image 
          source={require('../assets/images/about-company.jpg')} 
          style={styles.companyImage} 
        />
        <Text style={styles.paragraph}>
          Established in 2010, Sarang Tradelink has grown to become one of the most trusted travel agencies 
          specializing in UK travel experiences. Our mission is to provide exceptional travel services that 
          create unforgettable memories for our clients.
        </Text>
        <Text style={styles.paragraph}>
          Based in London, we have deep local knowledge and strong partnerships with top attractions, 
          hotels, and transportation providers across the UK. This allows us to offer premium services 
          at competitive prices, ensuring excellent value for our clients.
        </Text>
        <Text style={styles.paragraph}>
          What sets us apart is our personalized approach to travel planning. We understand that each 
          traveler has unique preferences and requirements, and we tailor our services accordingly to 
          create custom experiences that exceed expectations.
        </Text>
      </View>
      
      {/* Our Values */}
      <View style={[styles.section, styles.valuesSection]}>
        <Text style={styles.sectionTitle}>Our Values</Text>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>Customer Satisfaction</Text>
          <Text style={styles.valueDescription}>
            We prioritize our clients' needs and strive to exceed their expectations in every interaction.
          </Text>
        </View>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>Integrity & Transparency</Text>
          <Text style={styles.valueDescription}>
            We operate with honesty and clarity in all our dealings, ensuring clients have all the 
            information they need to make informed decisions.
          </Text>
        </View>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>Quality Service</Text>
          <Text style={styles.valueDescription}>
            We maintain high standards in all our services, partnering only with reliable providers 
            who share our commitment to excellence.
          </Text>
        </View>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>Cultural Respect</Text>
          <Text style={styles.valueDescription}>
            We embrace diversity and promote respectful cultural exchanges through our travel experiences.
          </Text>
        </View>
      </View>
      
      {/* Our Team */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet Our Team</Text>
        <Text style={styles.teamIntro}>
          Our dedicated team of travel experts is passionate about creating exceptional experiences for our clients.
        </Text>
        <View style={styles.teamGrid}>
          <TeamMember 
            name="John Smith" 
            role="Founder & CEO" 
            image={require('../assets/images/team-1.jpg')} 
          />
          <TeamMember 
            name="Emma Wilson" 
            role="Operations Manager" 
            image={require('../assets/images/team-2.jpg')} 
          />
          <TeamMember 
            name="David Chen" 
            role="Visa Specialist" 
            image={require('../assets/images/team-3.jpg')} 
          />
          <TeamMember 
            name="Sophia Patel" 
            role="Tour Coordinator" 
            image={require('../assets/images/team-4.jpg')} 
          />
        </View>
      </View>
      
      {/* Testimonials */}
      <View style={[styles.section, styles.testimonialsSection]}>
        <Text style={styles.sectionTitle}>Client Testimonials</Text>
        <Testimonial 
          text="The visa assistance service was exceptional. They handled everything professionally and made the process stress-free. I got my Schengen visa without any complications."
          author="Ahmed K."
          location="Dubai, UAE"
        />
        <Testimonial 
          text="Our family trip to London was perfectly organized. The hotel was in a great location, and the day trips were the highlight of our vacation. The kids especially loved the Warner Bros. Studio!"
          author="Maria G."
          location="Toronto, Canada"
        />
        <Testimonial 
          text="As a solo traveler, I appreciated the attention to detail and safety. The private London tour was informative and tailored to my interests. I'll definitely use their services again."
          author="James L."
          location="Sydney, Australia"
        />
      </View>
      
      {/* CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Experience the UK with Us?</Text>
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.ctaButtonText}>Contact Us Today</Text>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  companyImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 16,
  },
  valuesSection: {
    backgroundColor: '#f8f8f8',
  },
  valueItem: {
    marginBottom: 20,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  valueDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  teamIntro: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  teamMember: {
    width: '48%',
    marginBottom: 24,
    alignItems: 'center',
  },
  teamMemberImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  teamMemberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  teamMemberRole: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  testimonialsSection: {
    backgroundColor: '#f8f8f8',
  },
  testimonialCard: {
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
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 22,
    color: '#555',
    marginBottom: 12,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  testimonialLocation: {
    fontSize: 13,
    color: '#777',
  },
  ctaSection: {
    backgroundColor: '#0066cc',
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
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

export default AboutScreen;