import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useMotorStore } from "@/store/useMotorStore";
import uuid from "react-native-uuid";

export default function AddMotor() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const addMotor = useMotorStore((s) => s.addMotor);
  const router = useRouter();

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
        placeholder="URL Gambar (opsional)"
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
        title="Simpan"
        onPress={() => {
          addMotor({
            id: String(uuid.v4()),
            name,
            brand,
            year,
            image:
              image ||
              "https://via.placeholder.com/300x200.png?text=Gambar+Motor",
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
