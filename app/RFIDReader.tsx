import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RFIDReader({ route, navigation }: any) {
  const { setor, material } = route.params;

  const handleRFIDRead = (rfid: string) => {
    console.log('RF-ID Lido:', rfid);
    // Aqui você pode enviar o RFID para o backend ou realizar outra lógica
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Setor: {setor}</Text>
      <Text style={styles.label}>Material: {material}</Text>
      <Text style={styles.info}>Aproxime o cartão RF-ID do leitor...</Text>

      {/* Simulação de leitura do cartão */}
      <TouchableOpacity style={styles.button} onPress={() => handleRFIDRead('RFID12345')}>
        <Text style={styles.buttonText}>Simular Leitura de RF-ID</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F1F1F1',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#FF6666',
  },
});
