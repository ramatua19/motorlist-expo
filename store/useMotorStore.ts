import { create } from "zustand";

export interface Motor {
  id: string;
  name: string;
  brand: string;
  year: string;
  image: string; // 🖼️ gambar motor
  price: number; // 💰 harga motor
}

interface MotorStore {
  motors: Motor[];
  addMotor: (motor: Motor) => void;
  editMotor: (motor: Motor) => void;
  deleteMotor: (id: string) => void;
}

export const useMotorStore = create<MotorStore>((set) => ({
  motors: [
    {
      id: "1",
      name: "Vario 150",
      brand: "Honda",
      year: "2020",
      image: "https://www.hondacengkareng.com/wp-content/uploads/2020/06/Vario-150-eSP-CBS-ISS-Exclusive-Matte-Black.jpg",
      price: 23500000,
    },
    {
      id: "2",
      name: "NMAX",
      brand: "Yamaha",
      year: "2021",
      image: "https://yamaha-motor.id/wp-content/uploads/2023/04/Nmax-ABS-2-600x400.png",
      price: 31000000,
    },
    {
        id: "3",
        name: "Sportster 883",
        brand: "Harley Davidson",
        year: "2013",
        image: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/1083061-0-965581.jpg",
        price: 399000000,
    }
  ],

  addMotor: (motor) =>
    set((state) => ({
      motors: [...state.motors, motor],
    })),

  editMotor: (updated) =>
    set((state) => ({
      motors: state.motors.map((m) =>
        m.id === updated.id ? updated : m
      ),
    })),

  deleteMotor: (id) =>
    set((state) => ({
      motors: state.motors.filter((m) => m.id !== id),
    })),
}));
