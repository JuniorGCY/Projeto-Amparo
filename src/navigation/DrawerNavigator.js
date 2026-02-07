import React from "react";
import { useWindowDimensions } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import HomeScreen from '../screens/HomeScreen'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ManualDeFuga from "../screens/ManualDeFuga";
import DiscagemDireta from "../screens/DiscagemDireta";
import GravarAudio from "../screens/GravarAudio";
import ChatJuridico from "../screens/ChatJuridico";
import BotaoPanico from "../screens/BotaoPanico";
import RecursosProximos from "../screens/RecursosProximos";
import ContatosEmergencia from "../screens/ContatosEmergencia";
import ApoioPsicologico from "../screens/ApoioPsicologico";
import modoDiscreto from "../screens/modoDiscreto";
import aboutAmparo from "../screens/aboutAmparo";

const Drawer = createDrawerNavigator()
const DRAWER_WIDTH = 280;

function CustomDrawerContent(props) {
    const {navigation} = props
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 24}}>
            <DrawerItem label='Home' onPress={ () => navigation.navigate("HomeScreen")}/>
            <DrawerItem label='Manual De Fuga' onPress={ () => navigation.navigate("Manual De Fuga")}/>
            <DrawerItem label='Discagem Direta' onPress={ () => navigation.navigate("Discagem Direta")}/>
            <DrawerItem label='Gravar Áudio' onPress={ () => navigation.navigate("Gravar Áudio")}/>
            <DrawerItem label='Chat Jurídico' onPress={ () => navigation.navigate("Chat Jurídico")}/>
            <DrawerItem label='Botão de Emergência' onPress={ () => navigation.navigate("Botão de Emergência")}/>
            <DrawerItem label='Recursos Próximos' onPress={ () => navigation.navigate("Recursos Próximos")}/>
            <DrawerItem label='Contatos de Emergencia' onPress={ () => navigation.navigate("Contatos de Emergencia")}/>
            <DrawerItem label='Apoio Psicológico' onPress={ () => navigation.navigate("Apoio Psicológico")}/>
            <DrawerItem label='Modo Discreto' onPress={ () => navigation.navigate("Modo Discreto")} />
            <DrawerItem label= 'About Amparo' onPress={() =>navigation.navigate("About Amparo")} />
        </DrawerContentScrollView>
    )
}

export default function DrawerNavigator() {
    const {width} = useWindowDimensions();
    const permanent = true

    return (
    <Drawer.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: {width: 280},
            overlayColor: 'transparent',
            swipeEdgeWidth: 60,
            swipeEnabled: true
         }}
    > 
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Manual da Fuga" component={ManualDeFuga} />
      <Drawer.Screen name="Discagem Direta" component={DiscagemDireta} />
      <Drawer.Screen name="Gravar Áudio" component={GravarAudio} />
      <Drawer.Screen name="Chat Jurídico" component={ChatJuridico} />
      <Drawer.Screen name="Botão de Emergência" component={BotaoPanico} />
      <Drawer.Screen name="Apoio Psicológico" component={ApoioPsicologico} />
      <Drawer.Screen name="Recursos Próximos" component={RecursosProximos} />
      <Drawer.Screen name="Contatos de Emergência" component={ContatosEmergencia} />
      <Drawer.Screen name="Modo Discreto" component={modoDiscreto} />
      <Drawer.Screen name="About Amparo" component={aboutAmparo} />
    </Drawer.Navigator>
    )
}

