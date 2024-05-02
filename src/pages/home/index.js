import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from '../../components/modal';

let charset = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ123456789@#$%";

export function Home() {
  const [size, setSize] = useState(0);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModavisible] = useState(false);


  function generatePassword() {

    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModavisible(true)

    console.log(password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de3"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
      >
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModavisible(false)}
        />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 2
  },
  button: {
    backgroundColor: "#392de3",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  }
});