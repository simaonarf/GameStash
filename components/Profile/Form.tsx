import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (email.length === 0) {
            console.log("Email não pode estar vazio")
        }

        if (password.length === 0) {
            console.log("Senha não pode estar vazia")
        }

    }, [email, password]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#777"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>ou</Text>
                <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
                <View style={styles.googleIcon}><AntDesign name="google" size={24} color="white" /></View>
                <Text style={styles.googleText}>Continuar com Google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 30,
    },
    input: {
        backgroundColor: "#1c1c1c",
        color: "#fff",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: "#2c2c2c",
    },
    loginButton: {
        backgroundColor: "#FFD700",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 6,
    },
    loginText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "#333",
    },
    dividerText: {
        color: "#777",
        marginHorizontal: 10,
        fontSize: 14,
    },
    googleButton: {
        flexDirection: "row",
        backgroundColor: "#1c1c1c",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#2c2c2c",
    },
    googleIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleText: {
        color: "#ccc",
        fontSize: 16,
        fontWeight: "500",
        paddingLeft: 12,
    },
});