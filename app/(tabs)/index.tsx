import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useMotorStore } from "@/store/useMotorStore";
import MotorItem from "@/components/MotorItem";

export default function Home() {
  const router = useRouter();
  const motors = useMotorStore((s) => s.motors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Motor</Text>

      <FlatList
        data={motors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MotorItem motor={item} />}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => router.push({ pathname: "/add" as any })}
      >
        <Text style={styles.addText}>+ Tambah Motor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  addBtn: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addText: { color: "white", fontSize: 16 },
});
