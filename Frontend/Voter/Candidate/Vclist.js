import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity,Alert } from 'react-native';
import {Storage} from 'expo-storage'

const CandidateCard = ({ candidate, onVote }) => {
  const { image, username, position, department, _id } = candidate;


  const handleVote = () => {
    onVote(_id);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.department}>{department}</Text>
      </View>
      <TouchableOpacity style={styles.voteButton} onPress={handleVote}>
        <Text style={styles.voteButtonText}>Vote</Text>
      </TouchableOpacity>
    </View>
  );
};

const Vclist = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await fetch('http://192.168.43.248:4000/candidate/read');
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error(error);
    }
  };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = {
//           apiUrl: Api + 'candidate/read',
//         };
//         const res = await Get_Call(apiUrl);
//         console.log('Response:', res);
// console.log('Type of response:', typeof res);
        
//         if (res.status) {
//           setCandidates(res.data);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);


const loadData=async()=>{
  const item = JSON.parse(
    await Storage.getItem({ key: `userData` })
  )
  // console.log("userData====>",item)
  return item
}


  const handleVote = async (candidateId) => {
    const item = JSON.parse(
      await Storage.getItem({ key: `userData` })
    )
    console.log(item)
    try {
      const {id}=item.user
      const requestData={
        "studentId":id,
        "_id":candidateId
      }
      console.log(requestData)
      const response = await fetch(`http://192.168.43.248:4000/vote/voter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
        body:JSON.stringify(requestData)
      })
      console.log(response)
      if (response.ok) {

        fetchCandidates();
        Alert.alert('Sucess',"voted Sucessfully")
      } else {
        console.error('Failed to vote for the candidate.');
        Alert.alert('Error',"Already voted ")

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>List of Voting Candidates</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {candidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} onVote={handleVote} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Vclist;

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
    color: '#0039a6',
  },
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
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
    marginTop: -100,
    marginLeft: 130,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
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
    marginTop: 25,
  },
  voteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
