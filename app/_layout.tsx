import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React from 'react';

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="pontDescarga" options={{ title: 'Ponto de Descarga' }} />
      <Stack.Screen name="RFIDReader" options={{ title: 'Leitor RF-ID' }} /> 
    </Stack>
    <StatusBar style="light" />
    </>
  );
}
