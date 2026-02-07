import React, {useEffect,useState} from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { ActivityIndicator} from "react-native";
import AppNavigator from "./AppNavigator";
import NetInfo from '@react-native-community/netinfo'
import {checkUserLogged} from '../hooks/usesAuth'
import colors from "../styles/colors";
import { getItem } from '../utils/storage';

export default function AppEntry() {
    const [loading,setLoading] = useState(true)
    const [initialRoute,setInitialRoute] = useState('Splash')

    useEffect(() => {
        const init = async () => {
            try {
                const state = await NetInfo.fetch();
                const hasSeen = await getItem('hasSeenOnboarding');
    
                if (!hasSeen) {
                    setInitialRoute('OnboardingScreen');
                }
                else {
                    setInitialRoute('Drawer');
                }
                setTimeout(() => setLoading(false), 800);
            } catch (e) {
                console.log('Erro AppEntry init:', e);
                setInitialRoute('Drawer');
                setLoading(false);
            }
        };
        init();
    }, []);
    
    if (loading) {
        return (
            <View style={styles.container}>
                <Image source={require('../images/Logo.png')} style={styles.logo} />
                <Text style={{fontWeight: '900', color: colors.background, fontSize: 30}}>Projeto Amparo</Text>
            </View>
        )
    }

    return <AppNavigator initialRoute={initialRoute} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7B4DFA'
    },
    logo: {
        width: 150,
        height: 150
    }
})