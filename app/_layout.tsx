import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    
    <Stack screenOptions={{ headerShown: true,
                            headerTitleAlign: 'center',
                            headerTitleStyle: { fontWeight: 'bold' } ,
                            headerTitle: 'EŞEK' , headerTintColor: 'black' , headerStyle: { backgroundColor: 'aliceblue' } }} >
      <Stack.Screen name="index" />
    </Stack>
  );
}
