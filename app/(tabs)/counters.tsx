import { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity , ImageBackground } from "react-native";




function Counters() {

  var randomString = require('random-string');
  var x = randomString();
  var x = randomString({
    length: 3,
    numeric: true,
    letters: false,
    special: false,
    
    });
  


  const styles = StyleSheet.create({
    button: {
      width: 120,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray transparent ',
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
      
    },
    
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  });

  const [sonuc, setSonuc] = useState(0);

  const arttir = () => {
    setSonuc(sonuc + 1);
  }

  const azalt = () => {
    setSonuc(sonuc - 1);
  }

  return (
    <View>
      
      <Text style={{
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 40,
        paddingBottom: 30,
        top: -200,
        color: "aliceblue"
      }}>
        Eşek Sayacı</Text>

      <Text style={{
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 30,
        color: "aliceblue"
      }}>
        {sonuc} tane eşeğiniz var. </Text>

        <Text style={{color: "aliceblue" , textAlign: "center" , marginTop: 30}}>{x}</Text>


          <View style={{ flexDirection: "row",
                         justifyContent: "center",
                         alignItems: "center",
                         gap: 25, 
                         marginTop: 30,
                          }}>
                            
              <TouchableOpacity style={styles.button}  onPress={arttir}>
                <Text  style={styles.buttonText}>Al</Text>
              </TouchableOpacity>
                          
              <TouchableOpacity style={styles.button} onPress={azalt}>
                <Text style={styles.buttonText}>Sat</Text>
              </TouchableOpacity>
           </View>


    </View>
  );




}

export default Counters;