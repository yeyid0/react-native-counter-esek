import { Text, View , ImageBackground , StyleSheet} from "react-native";
import Counters from "./(tabs)/counters";

export default function Index() {

  const styles = StyleSheet.create({
    image: {
      position: "absolute",
      width:'100%',
      height: '100%',
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "center",
     marginHorizontal: 10,
     
    },
  })


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}>
      <ImageBackground source={require("../assets/images/ggg.jpg")} style={styles.image}>
      <Counters/>
      <Text></Text>
      </ImageBackground>
    </View>
  );
}
