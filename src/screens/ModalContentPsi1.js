import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from'@expo/vector-icons'

import { RFValue } from "react-native-responsive-fontsize";

export default function ModalContentPsi1() {
    return (
        <View style={style.container}>
            <Text style={{fontWeight: '900', fontSize: RFValue(14), color: '#ff3030ff'}}>Respiração para Redução de Ansiedade</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11), marginBottom: 10}}>Exercício de respiração profunda para acalmar o sistema nervoso em momentos de ansiedade.</Text>

            <Text style={{fontWeight: '900', fontSize: RFValue(14), color: '#ff3030ff'}}>Como praticar:</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11)}}>1 - Encontre um local tranquilo e sente-se confortavelmente</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11)}}>2 - Coloque uma mão no peito e outra no abdômen</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11)}}>3 - Inspire lentamente pelo nariz contando até 4</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11)}}>Segure a respiração por 2 segundos</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11)}}>Expire lentamente pela boca contando até 6</Text>
            <Text style={{fontWeight: '500', fontSize: RFValue(11)}}>Repita o ciclo por 5 minutos ou até se sentir mais calma</Text>
            
            <Text style={{fontWeight: '900', fontSize: RFValue(14),marginTop: 10, color: '#ff3030ff'}}>Benefícios:</Text>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: RFValue(12)}}>Redução da ansiedade</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: RFValue(12)}}>Diminuição da frequência cardíaca</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: RFValue(12)}}>Maior clareza mental</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                 <Text style={{fontWeight: '500', fontSize: RFValue(12)}}>Sensação de controle em momentos de crise</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})