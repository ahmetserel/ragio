import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, ScrollView, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [gestAge, setGestAge] = useState('');
  const [height, setHeight] = useState('');
  const [thyroid, setThyroid] = useState(false);
  const [induction, setInduction] = useState(false);
  const [poly, setPoly] = useState(false);
  const [rhIso, setRhIso] = useState(false);
  const [result, setResult] = useState(null);

  function calculateRisk() {
    // Convert inputs to numbers
    const gestAgeNum = parseFloat(gestAge);
    const heightNum = parseFloat(height);
    const thyroidNum = thyroid ? 1 : 0;
    const inductionNum = induction ? 1 : 0;
    const polyNum = poly ? 1 : 0;
    const rhIsoNum = rhIso ? 1 : 0;

    // Validation
    if (isNaN(gestAgeNum) || isNaN(heightNum)) {
      alert('Lütfen geçerli sayısal değerler giriniz (Gebelik Haftası ve Boy).');
      return;
    }

    const intercept = 13.287;
    const logitZ = intercept + 
                   (gestAgeNum * -0.419) + 
                   (thyroidNum * 2.986) + 
                   (inductionNum * 2.339) + 
                   (polyNum * 2.256) + 
                   (rhIsoNum * 1.303) + 
                   (heightNum * -0.004);

    const probability = 1 / (1 + Math.exp(-logitZ));
    setResult((probability * 100).toFixed(2));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.header}>Risk Hesaplayıcı</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gebelik Haftası (GestAge)</Text>
            <TextInput
              style={styles.input}
              placeholder="Örn: 38"
              keyboardType="numeric"
              value={gestAge}
              onChangeText={setGestAge}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Anne Boyu (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Örn: 165"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Tiroid Hastalığı (Thyroid)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={thyroid ? "#007bff" : "#f4f3f4"}
              onValueChange={() => setThyroid(previousState => !previousState)}
              value={thyroid}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>İndüksiyon (Induction)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={induction ? "#007bff" : "#f4f3f4"}
              onValueChange={() => setInduction(previousState => !previousState)}
              value={induction}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Polihidramnios (Poly)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={poly ? "#007bff" : "#f4f3f4"}
              onValueChange={() => setPoly(previousState => !previousState)}
              value={poly}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Rh Uyuşmazlığı (RhIso)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={rhIso ? "#007bff" : "#f4f3f4"}
              onValueChange={() => setRhIso(previousState => !previousState)}
              value={rhIso}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={calculateRisk}>
            <Text style={styles.buttonText}>HESAPLA</Text>
          </TouchableOpacity>

          {result !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Tahmini Risk:</Text>
              <Text style={styles.resultValue}>%{result}</Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bce0fd',
    backgroundColor: '#e3f2fd',
  },
  resultLabel: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
});
