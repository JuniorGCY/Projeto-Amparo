import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../styles/colors";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

import { Linking } from "react-native";

export default function DiscagemDireta({ navigation }) {

  const ligar = (numero) => {
    Linking.openURL(`tel:${numero}`);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            style={{ marginHorizontal: 20 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <MaterialCommunityIcons name="menu" size={RFValue(30)} color="#7B4DFA" />
          </TouchableOpacity>

          <Feather name="phone" size={RFValue(28)} color="#7B4DFA" />
          <Text style={styles.headerTitle}>Discagem Direta</Text>
        </View>

        <View style={styles.alertCard}>
          <MaterialCommunityIcons name="alert" size={RFValue(30)} color="#E54848" />
          <Text style={styles.alertTitle}>Situação de Emergência</Text>

          <Text style={styles.alertText}>
            Se você está em perigo imediato, use os botões abaixo para ligar
            diretamente para os serviços de emergência.
          </Text>

          <Text style={[styles.alertText, { marginTop: 10 }]}>
            Certifique-se de estar em um local seguro antes de realizar a ligação.
          </Text>
        </View>

        <View style={{maxHeight: 210, minHeight: 200, marginTop: 20, marginBottom: 20}}>
          <ScrollView horizontal contentContainerStyle={{padding: 10,alignItems: "center",}} showsHorizontalScrollIndicator={false}>
            <View style={styles.callCard}>
              <Text style={styles.callTitle}>Polícia Militar</Text>
              <Text style={styles.callSubtitle}>Emergência e crimes em andamento</Text>

              <TouchableOpacity style={[styles.callButton, { backgroundColor: "#E54848" }]} onPress={() => ligar("190")}>
                <Feather name="phone" size={RFValue(20)} color="#fff" />
                <Text style={styles.callButtonText}>Ligar 190</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.callCard}>
              <Text style={styles.callTitle}>SAMU – Emergência Médica</Text>
              <Text style={styles.callSubtitle}>Atendimento de urgência</Text>

              <TouchableOpacity style={[styles.callButton, { backgroundColor: "#E54848" }]} onPress={() => ligar("192")}>
                <Feather name="phone" size={RFValue(20)} color="#fff" />
                <Text style={styles.callButtonText}>Ligar 192</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.callCard}>
              <Text style={styles.callTitle}>Bombeiros</Text>
              <Text style={styles.callSubtitle}>Resgates e emergências</Text>

              <TouchableOpacity style={[styles.callButton, { backgroundColor: "#E54848" }]} onPress={() => ligar("193")}>
                <Feather name="phone" size={RFValue(20)} color="#fff" />
                <Text style={styles.callButtonText}>Ligar 193</Text>
              </TouchableOpacity>
            </View>


          </ScrollView>
        </View>

        <View style={{maxHeight: 210, minHeight: 200, marginTop: 5, marginBottom: 20}}>
          <ScrollView horizontal contentContainerStyle={{padding: 10,alignItems: "center",}} showsHorizontalScrollIndicator={false}>
            <View style={styles.callCard}>
              <Text style={styles.callTitle}>Central da Mulher</Text>
              <Text style={styles.callSubtitle}>Orientação e denúncia de violência</Text>

              <TouchableOpacity style={[styles.callButton, { backgroundColor: "#7B4DFA" }]} onPress={() => ligar("180")}>
                <Feather name="phone" size={RFValue(20)} color="#fff" />
                <Text style={styles.callButtonText}>Ligar 180</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.callCard}>
              <Text style={styles.callTitle}>Direitos Humanos</Text>
              <Text style={styles.callSubtitle}>Denúncias de violações</Text>

              <TouchableOpacity style={[styles.callButton, { backgroundColor: "#7B4DFA" }]} onPress={() => ligar("100")}>
                <Feather name="phone" size={RFValue(20)} color="#fff" />
                <Text style={styles.callButtonText}>Ligar 100</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.tipsCard}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <MaterialCommunityIcons name="lightbulb" size={RFValue(26)} color="#F3B700" />
            <Text style={styles.tipsTitle}>Dicas de Segurança</Text>
          </View>

          {[
            "Mantenha-se em um local seguro durante a ligação",
            "Tenha informações como endereço e situação",
            "Se não puder falar, deixe a ligação aberta",
            "Siga as instruções do atendente",
            "Mantenha o celular carregado",
          ].map((tip, index) => (
            <Text key={index} style={styles.tipsText}>• {tip}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F9FB",
  },
  container: {
    alignItems: "center",
    paddingBottom: 40,
  },
  header: {
    width: "100%",
    minHeight: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 4,
    borderBottomLeftRadius: 40,
  },
  headerTitle: {
    fontSize: RFValue(24),
    fontWeight: "900",
    color: "#7B4DFA",
    marginStart: 10,
  },
  alertCard: {
    maxWidth: "90%",
    minWidth: '80%',
    padding: 20,
    marginTop: 20,
    backgroundColor: "#FEEAEA",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#F5B4B4",
    alignItems: "center",
  },
  alertTitle: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#E54848",
    marginTop: 5,
  },
  alertText: {
    fontSize: RFValue(13),
    color: "#444",
    textAlign: "center",
    marginTop: 5,
  },
  callCard: {
    maxWidth: 300,
    minWidth: 250,
    minHeight: 180,
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 14,
    elevation: 3,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  callTitle: {
    fontSize: RFValue(18),
    fontWeight: "900",
    marginBottom: 2,
    color: "#222",
  },
  callSubtitle: {
    fontSize: RFValue(13),
    color: "#222",
  },
  callButton: {
    marginTop: 15,
    minHeight: 48,
    maxHeight: 55,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  callButtonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: RFValue(15),
    fontWeight: "700",
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  contactTitle: {
    fontWeight: "bold",
    fontSize: RFValue(14),
  },
  contactDesc: {
    fontSize: RFValue(12),
    color: "#666",
  },
  contactBadge: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  contactBadgeText: {
    fontWeight: "bold",
  },
  tipsCard: {
    maxWidth: "90%",
    minWidth: '85%',
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 2,
  },
  tipsTitle: {
    marginStart: 8,
    fontSize: RFValue(16),
    fontWeight: "900",
    color: "#7B4DFA",
  },
  tipsText: {
    marginTop: 8,
    fontSize: RFValue(14),
    fontWeight: "700",
    color: "#7B4DFA",
  },
});
