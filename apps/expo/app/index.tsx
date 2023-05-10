// import { HomeScreen } from 'app/features/home/screen'
// import { LandingScreen } from 'app/features/signin/LandingScreen'
// import { SignInOptionsScreen } from 'app/features/signin/SignInOptionsScreen'
// import { ConfirmInformationScreen } from 'app/features/signin/ConfirmInformationScreen'
// import { ServiceSelectionScreen } from 'app/features/signin/ServiceSelectionScreen'
// import {WelcomeScreen} from 'app/features/WelcomeScreen';
import { ExploreScreen } from 'app/features/explore/ExploreScreen'
import { ListingScreen } from 'app/features/explore/ListingScreen'


import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <LandingScreen /> */}
      {/* <Stack.Screen
        options={{
          title: 'Sign In Options',
        }}
      /> */}
      {/* <SignInOptionsScreen /> */}
      {/* <Stack.Screen
        options={{
          title: 'Confirm Information',
        }}
      />
      <ConfirmInformationScreen  /> */}
      {/* <Stack.Screen
        options={{
          title: 'Service Selection',
        }}
      />
      <ServiceSelectionScreen /> */}
      {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <WelcomeScreen /> */}
      {/* <Stack.Screen
        options={{
          title: 'Explore',
        }}
      />
      <ExploreScreen /> */}
      <Stack.Screen
        options={{
          title: 'Explore',
        }}
      />
      <ListingScreen />
    </>
  )
}
