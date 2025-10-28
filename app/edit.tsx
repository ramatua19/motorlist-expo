import { useMotorStore } from "@/store/useMotorStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function EditMotor() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { motors, editMotor } = useMotorStore();

  const motor = motors.find((m) => m.id === id);

  // Jika data motor tidak ditemukan
  if (!motor) {
    return (
      <View style={styles.container}>
        <TextInput value="Data motor tidak ditemukan." editable={false} />
      </View>
    );
  }

  // State lokal untuk edit
  const [name, setName] = useState(motor.name);
  const [brand, setBrand] = useState(motor.brand);
  const [year, setYear] = useState(motor.year);
  const [image, setImage] = useState(motor.image || "");
  const [price, setPrice] = useState(motor.price ? String(motor.price) : "");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Motor"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Merek"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Tahun"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga (Rp)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button
        title="Simpan Perubahan"
        onPress={() => {
          editMotor({
            id: motor.id,
            name,
            brand,
            year,
            image: image || "https://via.placeholder.com/300x200.png?text=Gambar+Motor",
            price: price ? parseInt(price) : 0,
          });
          router.back();
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "white" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
