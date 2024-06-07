import React from 'react';
import { View, Text, Button,Image, StyleSheet,ScrollView ,TouchableOpacity,ImageBackground} from 'react-native';




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


const EventList = ({navigation}) => {
    const events = [
        { id: 1, image: 'https://via.placeholder.com/150', name: 'Event 1', place: 'Venue 1', organizedBy: 'Organizer 1', date: '2024-02-09' },
        { id: 2, image: 'https://via.placeholder.com/150', name: 'Event 2', place: 'Venue 2', organizedBy: 'Organizer 2', date: '2024-02-10' },
        { id: 3, image: 'https://via.placeholder.com/150', name: 'Event 3', place: 'Venue 3', organizedBy: 'Organizer 3', date: '2024-02-11' },
        // Add more event objects as needed
        { id: 4, image: 'https://via.placeholder.com/150', name: 'Event 3', place: 'Venue 3', organizedBy: 'Organizer 3', date: '2024-02-11' },
  
        { id: 5, image: 'https://via.placeholder.com/150', name: 'Event 3', place: 'Venue 3', organizedBy: 'Organizer 3', date: '2024-02-11' },
  
      ];
    
      return (
        <View style={styles.screen} >
          <ImageBackground
        source={require('../../assets/signupbg.png')}
        style={styles.background}
      >     
          <Text style={styles.title}>Ongoing Events</Text>
          <TouchableOpacity style={{backgroundColor:'#1E90FF',height:40,marginTop:0,marginBottom:20,marginLeft:190,borderRadius:10,width:140,padding:5,}} onPress={()=>navigation.navigate('eadd')}>
            <Text style={{fontWeight:'bold',marginLeft:9}}>+ Add Events</Text>
          </TouchableOpacity>
        <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ScrollView>
        </ImageBackground>
        </View>
  
      );
}

export default EventList

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        // padding: 20,
        marginTop:30,
        

      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',


      },
      card: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        width: '90%',
        marginLeft:20,
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
      Overviewcard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 3, // for Android
        shadowColor: '#000', // for iOS
        shadowOpacity: 0.2, // for iOS
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowRadius: 2, // for iOS
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: "center",
      
    },
})