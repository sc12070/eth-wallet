import COLORS from 'constants/COLORS'
import React from 'react'
import HomePage from './HomeScene/HomePage'
import TwelveWordTipsModal from './Modal/TwelveWordTipsModal/TwelveWordTipsModal'
import Stack from './RoutesType'
import SplashPage from './SplashScene/SplashPage'
import TwelveWordInputPage from './TwelveWordInputScene/TwelveWordInputPage'

const hideHeaderOption = { headerShown: false }

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashPage} options={hideHeaderOption} />
      <Stack.Screen
        name="TwelveWordInput"
        component={TwelveWordInputPage}
        options={hideHeaderOption}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={() => ({
          title: 'Wallet',
          headerStyle: {
            backgroundColor: COLORS.bg
          },
          headerTitleStyle: {
            color: COLORS.text
          },
          headerShadowVisible: true
        })}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal'
        }}>
        <Stack.Screen
          name="TwelveWordTips"
          component={TwelveWordTipsModal}
          options={hideHeaderOption}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default Routes
