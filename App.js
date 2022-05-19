import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import doutor2 from "./assets/doutor2.jpg"
import {Calendar} from 'react-native-calendars';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.especialista}>
        <Image source={doutor2} style={styles.imagemEspecialista}/>
        <View style={styles.info}>
            <Text style={styles.nomeEspecialista}>Luis Carlos</Text>
            <Text style={styles.smallText}>Cardiologia</Text>
            <Text style={styles.smallText}>4 *</Text>
        </View>
      </View>
      <View style={styles.infoSub}>
        <Text style={styles.titulo}>Especialidades</Text>
        <Text style={styles.smallText}>Ecocardiografia</Text>
      </View>
      <View style={styles.infoSub}>
        <Text style={styles.titulo}>Formação acadêmica</Text>
        <Text style={styles.marignText}>Graduação em Medicina: Faculdade de Medicina da Universidade de Mogi das Cruzes</Text>
        <Text style={styles.marignText}>Especialização em Clínica Médica: Faculdade de Medicina da Santa Casa de Misericórdia de São Paulo</Text>
        <Text style={styles.marignText}>Especialização em Cardiologia: Escola Paulista de Medicina / UNIFESP</Text>
      </View>
      <View style={styles.infoSub}>
        <Text style={styles.titulo}>Serviços e preços</Text>
        <Text style={styles.smallText}>Preço da consulta: R$ 400</Text>
      </View>
      <View style={styles.infoSub}>
        <Text style={styles.titulo}>Agenda</Text>
        <Calendar
         markingType={"period"}
         markedDates={{
          '2022-05-23': {startingDay: true, color: '#61c8f8', textColor: 'white'},
          '2022-05-24': {color: '#61c8f8', textColor: 'white'},
          '2022-05-25': {selected: true, endingDay: true,  color: '#61c8f8', textColor: 'white'},
          '2022-05-27': {color: '#61c8f8', textColor: 'white', marked: true},
          '2022-06-01': {startingDay: true, color: '#61c8f8', textColor: 'white'},
          '2022-06-02': {color: '#61c8f8', textColor: 'white'},
          '2022-06-03': {color: '#61c8f8', textColor: 'white'},
          '2022-06-04': {selected: true, endingDay: true,  color: '#61c8f8', textColor: 'white'},
        }}
         />
      </View>
      <StatusBar/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#f7f7f7',
    padding: 4,
  },
  imagemEspecialista:{
    width: 80,
    maxHeight: 80,
    borderRadius: 12
  },
  nomeEspecialista: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  especialista:{
    width: 280,
    maxHeight: 100,
    padding: 12,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  info:{
    flexDirection:'column',
    textAlign: 'center',
  },
  infoSub:{
    width: 280,
    flexDirection:'column',
    marginBottom: 28
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#61c8f8'
  },
  smallText:{
    fontSize: 12,
  },
  marignText: {
    fontSize: 12,
    marginBottom: 8
  }
});
