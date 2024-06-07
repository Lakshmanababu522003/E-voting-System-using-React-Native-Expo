import React from 'react';
import { View, Text, Button,Image, StyleSheet,ScrollView ,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logout from '../Pages/Logout';
import Vclist from './Candidate/Vclist';
import Velist from './Event/Velist';
import CustomDrawer from './CustomDrawer';



  

const Dashboard = () => {
  const Drawer = createDrawerNavigator();

  return (
    
      // <Drawer.Navigator initialRouteName="CandidateList">
      //   <Drawer.Screen name="Candidates" component={Vclist} />
      //   <Drawer.Screen name="Events" component={Velist} />
      //   <Drawer.Screen name="Logout" component={Logout} />
      // </Drawer.Navigator>

      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} />}>
        <Drawer.Screen name="Candidates" component={Vclist} />
      </Drawer.Navigator>
    
  );
};

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
});

export default Dashboard;
