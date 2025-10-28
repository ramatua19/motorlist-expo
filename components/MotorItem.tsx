import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useMotorStore } from "@/store/useMotorStore";
import { useRouter } from "expo-router";

export default function MotorItem({ motor }: any) {
  const router = useRouter();
  const deleteMotor = useMotorStore((s) => s.deleteMotor);

  return (
    <View style={styles.card}>
      <Image source={{ uri: motor.image }} style={styles.image} />
      <Text style={styles.name}>{motor.name}</Text>
      <Text>{motor.brand} - {motor.year}</Text>
      <Text style={styles.price}>Rp {motor.price.toLocaleString("id-ID")}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => router.push({ pathname: "/edit", params: motor } as any)}
        >
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteMotor(motor.id)}
        >
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, marginVertical: 8, borderRadius: 10, elevation: 2 },
  image: { width: "100%", height: 150, borderRadius: 10, marginBottom: 8 },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { marginTop: 6, fontWeight: "600", color: "#2e8b57" },
  row: { flexDirection: "row", marginTop: 10 },
  editBtn: { backgroundColor: "#007bff", padding: 8, borderRadius: 6, marginRight: 10 },
  deleteBtn: { backgroundColor: "red", padding: 8, borderRadius: 6 },
  btnText: { color: "white" },
});
