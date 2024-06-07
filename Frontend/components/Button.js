import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Color'


export default function button(props) {
    const filledBgColor = props.color || COLORS.white;
    const outLineColor = COLORS.blue;
    const bgColor = props.filled ? filledBgColor : outLineColor;
    const textColor = props.filled ? COLORS.black : COLORS.white;
  return (
    <TouchableOpacity
    style={{...styles.button,
        ...{backgroundColor:bgColor},
        ...props.style
    }}
    onPress={props.onPress}
    >
        <Text style={{fontSize:18 , ...{color:textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 11,
        paddingVertical: 5,
        marginTop: 70,
        marginLeft: 28,
        borderColor: COLORS.yellow,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: COLORS.yellow, 
        shadowOffset: { width: 5, height: 5 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 4, 
        elevation: 8, 
    }
    
})