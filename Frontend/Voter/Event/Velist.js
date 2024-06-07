import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'


const EventCard = ({ event }) => {
    const { image, name, place, organizedBy, date } = event;
  
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.info}>Place: {place}</Text>
          <Text style={styles.info}>Organized By: {organizedBy}</Text>
          <Text style={styles.info}>Date: {date}</Text>
        </View>
      </View>
    );
  };

const Velist = () => {
    const events = [
        { id: 1, image: 'https://via.placeholder.com/150', name: 'Event 1', place: 'Venue 1', organizedBy: 'Organizer 1', date: '2024-02-09' },
        { id: 2, image: 'https://via.placeholder.com/150', name: 'Event 2', place: 'Venue 2', organizedBy: 'Organizer 2', date: '2024-02-10' },
        { id: 3, image: 'https://via.placeholder.com/150', name: 'Event 3', place: 'Venue 3', organizedBy: 'Organizer 3', date: '2024-02-11' },
        { id: 4, image: 'https://via.placeholder.com/150', name: 'Event 3', place: 'Venue 3', organizedBy: 'Organizer 3', date: '2024-02-11' },
        { id: 5, image: 'https://via.placeholder.com/150', name: 'Event 3', place: 'Venue 3', organizedBy: 'Organizer 3', date: '2024-02-11' },
  
      ];
    
      return (
        <View style={styles.eventcard} >
  
          <Text style={styles.title}>Ongoing Events</Text>
  
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ScrollView>
        </View>
  
      );
}

export default Velist

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color:"#0039a6"
      },
      card: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      eventcard: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      details: {
        // flex: 1,
        marginTop:-100,
        marginLeft: 130,
        
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        width:'100%'
      },
      position: {
        fontSize: 16,
        color: '#666',
      },
      department: {
        fontSize: 14,
        color: '#666',
      },
      voteButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop:25
      },
      voteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
      },
})