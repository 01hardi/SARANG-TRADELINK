import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const BlogPost = ({ title, excerpt, image, date, onPress }) => (
  <TouchableOpacity style={styles.blogPost} onPress={onPress}>
    <Image source={image} style={styles.blogImage} />
    <View style={styles.blogContent}>
      <Text style={styles.blogDate}>{date}</Text>
      <Text style={styles.blogTitle}>{title}</Text>
      <Text style={styles.blogExcerpt}>{excerpt}</Text>
      <Text style={styles.readMore}>Read More</Text>
    </View>
  </TouchableOpacity>
);

const BlogScreen = () => {
  // This would typically fetch blog posts from an API
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Must-Visit Attractions in London",
      excerpt:
        "Discover the iconic landmarks and hidden gems that make London one of the world's most visited cities.",
      image: require("../assets/images/blog-london.jpg"),
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "A Complete Guide to Schengen Visa Application",
      excerpt:
        "Everything you need to know about applying for a Schengen visa, from documentation to interview tips.",
      image: require("../assets/images/blog-visa.jpg"),
      date: "May 28, 2023",
    },
    {
      id: 3,
      title: "Exploring the Magic of Harry Potter Studios",
      excerpt:
        "Behind-the-scenes look at the Warner Bros. Studio Tour and tips to make the most of your visit.",
      image: require("../assets/images/blog-harry-potter.jpg"),
      date: "April 10, 2023",
    },
    {
      id: 4,
      title: "Day Trip to Stonehenge: History and Mystery",
      excerpt:
        "Uncover the ancient mysteries of Stonehenge and plan the perfect day trip from London.",
      image: require("../assets/images/blog-stonehenge.jpg"),
      date: "March 22, 2023",
    },
    {
      id: 5,
      title: "Budget-Friendly Accommodation in London",
      excerpt:
        "Find comfortable and affordable places to stay in London without compromising on location or quality.",
      image: require("../assets/images/blog-accommodation.jpg"),
      date: "February 14, 2023",
    },
  ];

  const handleBlogPress = (blogId) => {
    // This would navigate to individual blog post screen
    console.log(`Blog post ${blogId} pressed`);
    // navigation.navigate('BlogPost', { blogId });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Travel Tips & Guides</Text>
        <Text style={styles.headerSubtitle}>
          Insights, advice, and inspiration for your UK adventure
        </Text>
      </View>

      <View style={styles.blogList}>
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            date={post.date}
            onPress={() => handleBlogPress(post.id)}
          />
        ))}
      </View>

      <View style={styles.subscribeSection}>
        <Text style={styles.subscribeTitle}>Stay Updated</Text>
        <Text style={styles.subscribeText}>
          Subscribe to our newsletter for the latest travel tips, deals, and
          inspiration.
        </Text>
        <View style={styles.subscribeForm}>
          <TextInput
            style={styles.subscribeInput}
            placeholder="Your email address"
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#0066cc",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  blogList: {
    padding: 16,
  },
  blogPost: {
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  blogImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  blogContent: {
    padding: 16,
  },
  blogDate: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  blogExcerpt: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 12,
  },
  readMore: {
    fontSize: 14,
    color: "#0066cc",
    fontWeight: "500",
  },
  subscribeSection: {
    backgroundColor: "#f8f8f8",
    padding: 24,
    marginTop: 16,
    marginBottom: 40,
    alignItems: "center",
  },
  subscribeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  subscribeText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  subscribeForm: {
    width: "100%",
  },
  subscribeInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  subscribeButton: {
    backgroundColor: "#0066cc",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  subscribeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BlogScreen;
