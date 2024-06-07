import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Pages/Welcome';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Voter/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logout from './Pages/Logout';
import AdminDashboard from './Admin/AdminDashboard';
import CandidateList from './Admin/Candidate/CandidateList';
import EventList from './Admin/Events/EventList';
import VoterList from './Admin/Voter/VoterList';
import AddCandidate from './Admin/Candidate/AddCandidate';
import AddEvent from './Admin/Events/AddEvent';
import Vclist from './Voter/Candidate/Vclist';
import Velist from './Voter/Event/Velist';
import AdminLogin from './Admin/AdminLogin'



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false
          }}/>
        <Stack.Screen name="Signup" component={Signup} options={{
            headerShown: false
          }}/>
      
      <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }}/>

<Stack.Screen name="Logout" component={Logout} options={{
            headerShown: false
          }}/>

<Stack.Screen name="Dashboard" component={Dashboard} options={{
            headerShown: false
          }}/>

<Stack.Screen name="Adminlogin" component={AdminLogin} options={{
            headerShown: false
          }}/>

<Stack.Screen name="Admin" component={AdminDashboard} options={{
            headerShown: false
          }}/>

<Stack.Screen name="clist" component={CandidateList} options={{
            headerShown: false
          }}/>

<Stack.Screen name="cadd" component={AddCandidate} options={{
            headerShown: false
          }}/>

<Stack.Screen name="elist" component={EventList} options={{
            headerShown: false
          }}/>

<Stack.Screen name="eadd" component={AddEvent} options={{
            headerShown: false
          }}/>

<Stack.Screen name="vlist" component={VoterList} options={{
            headerShown: false
          }}/>
  
  <Stack.Screen name="Vclist" component={Vclist} options={{
            headerShown: false
          }}/>

<Stack.Screen name="Velist" component={Velist} options={{
            headerShown: false
          }}/>



  


      </Stack.Navigator>  
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
