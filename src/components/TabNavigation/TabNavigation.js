import { View, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './TabNavigation.styles'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PerfilScreen from '../../screen/PerfilScreen';
import HistorialScreen from '../../screen/HistorialScreen';
import SolicitudesScreen from '../../screen/SolicitudesScreen';
import ActivasScreen from '../../screen/ActivasScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (

    <Tab.Navigator 
     screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      tabBarStyle: null,
      })}
      >
      <Tab.Screen 
        name="perfil"
        component={PerfilScreen}
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image style={{marginTop: 10, padding: 5}}
              source={focused ? require('../../../assets/icons/perfilIcon.png') : require('../../../assets/icons/perfilIconNo.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={HistorialScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image style={{marginTop: 10, padding: 5 }}
              source={focused ? require('../../../assets/icons/solicitudesIcon.png') : require('../../../assets/icons/solicitudesIconNo.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={SolicitudesScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image style={{marginTop: 10,  padding: 5}}
              source={focused ? require('../../../assets/icons/activoIcon.png') : require('../../../assets/icons/activoIconNo.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={ActivasScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image style={{marginTop: 10,  padding: 2}}
              source={focused ? require('../../../assets/icons/historialIcon.png') : require('../../../assets/icons/historialIconNo.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = 'black';
  if (routeStatus.focused) {
    color = 'black';
    }

    if(route.name === "perfil"){
     
    }
    if(route.name === "Cuenta"){
    
    }
    if(route.name === "Config"){
    
    }
    if(route.name === "Fav"){
     
    }
return <AwesomeIcon name={iconName} color={color} style={styles.icon}/>

}
