import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from "./pages/OphanagesMap"
import OrphanagesDetails from "./pages/OrphanagesDetails"

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Stack.Screen name="OrphanagesDetails" component={OrphanagesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;