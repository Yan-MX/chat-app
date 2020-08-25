import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import pom from "./pomeranian.png";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends React.Component {
  state = {
    name: "",
  };
  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }}>
          <Image
            source={pom}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Billy Barbarian"
            onChange={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Ionicons name="md-arrow-round-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "orange",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "whitesmoke",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600",
  },
  continue: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
    backgroundColor: "salmon",
    alignItems: "center",
    justifyContent: "center",
  },
});
