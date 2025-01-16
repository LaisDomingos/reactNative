import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useRouter } from 'expo-router'; // Importar o roteador
export default function AboutScreen() {
  const [selectedSetor, setSelectedSetor] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const router = useRouter(); // Hook para navegação
  const setores = ['Setor A', 'Setor B', 'Setor C'];
  const materiaisPorSetor: Record<string, string[]> = {
    'Setor A': ['Material A1', 'Material A2', 'Material A3'],
    'Setor B': ['Material B1', 'Material B2', 'Material B3'],
    'Setor C': ['Material C1', 'Material C2', 'Material C3'],
  };

  const handleStart = () => {
    console.log('Setor selecionado:', selectedSetor);
    console.log('Material selecionado:', selectedMaterial);

    // Navegar para a página " Leitor RF-ID "
    router.push('/RFIDReader');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image source={require('../assets/images/icon.png')} style={styles.logo} />
    <View style={styles.container}>
      {/* Dropdown para selecionar o Setor */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Selecione o Setor:</Text>
        <SelectDropdown
          data={setores}
          onSelect={(setor) => {
            setSelectedSetor(setor);
            setSelectedMaterial(null); // Resetar material ao mudar o setor
          }}
          renderButton={(selectedItem) => (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem || 'Escolha um setor'}
              </Text>
            </View>
          )}
          renderItem={(item, _, isSelected) => (
            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>

      {/* Dropdown para selecionar o Material */}
      {selectedSetor && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Selecione o Material:</Text>
          <SelectDropdown
            data={materiaisPorSetor[selectedSetor]}
            onSelect={(material) => setSelectedMaterial(material)}
            renderButton={(selectedItem) => (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selectedItem || 'Escolha um material'}
                </Text>
              </View>
            )}
            renderItem={(item, _, isSelected) => (
              <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
      )}

      {/* Botão para iniciar */}
      {selectedSetor && selectedMaterial && (
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      )}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F1F1F1', // Fundo claro
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },button: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  error: {
    marginTop: 20,
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
});


