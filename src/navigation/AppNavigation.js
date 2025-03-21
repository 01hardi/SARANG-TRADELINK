import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen';
import LondonExperienceScreen from '../screens/services/LondonExperienceScreen';
import VisaServicesScreen from '../screens/services/VisaServicesScreen';
import AccommodationTransfersScreen from '../screens/services/AccommodationTransfersScreen';
import UKDayTripsScreen from '../screens/services/UKDayTripsScreen';
import BlogScreen from '../screens/BlogScreen';
import ContactScreen from '../screens/ContactScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Main Navigation */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen 
          name="LondonExperience" 
          component={LondonExperienceScreen}
          options={{ title: "London Experience & City Attractions" }} 
        />
        <Stack.Screen 
          name="VisaServices" 
          component={VisaServicesScreen}
          options={{ title: "Visa Services (Schengen/USA)" }} 
        />
        <Stack.Screen 
          name="AccommodationTransfers" 
          component={AccommodationTransfersScreen}
          options={{ title: "Accommodation & Transfers" }} 
        />
        <Stack.Screen 
          name="UKDayTrips" 
          component={UKDayTripsScreen}
          options={{ title: "UK Day Trips & Warner Bros. Studio" }} 
        />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: "Contact Us" }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ title: "Privacy Policy" }} />
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} options={{ title: "Terms & Conditions" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;