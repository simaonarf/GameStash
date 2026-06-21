import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from 'zod';
import { useAuth } from "../../contexts/AuthContext";

const loginSchema = z.object({
    email: z.email("Por favor, insira um e-mail válido."),
    password: z.string().min(1, "A senha é obrigatória.")
});
type Props = {
    onSwitch: () => void;
}

export default function LoginForm({ onSwitch }: Props) {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const router = useRouter();


    const handleLogin = async () => {
        setErrors({});

        const result = loginSchema.safeParse({ email, password });

        if (!result.success) {
            const formattedErrors: Record<string, string> = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as string;
                if (fieldName && !formattedErrors[fieldName]) {
                    formattedErrors[fieldName] = issue.message;
                }
            });

            setErrors(formattedErrors);
            return;
        }


        setIsSubmitting(true);
        const { success, error } = await login(result.data.email, result.data.password);
        setIsSubmitting(false);

        router.push('/profilePage')

        if (!success) {
            setErrors({ password: error ?? "Falha ao entrar." });
            return;
        }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#777"
                style={[styles.input, errors.email && styles.inputError]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
                style={[styles.input, errors.password && styles.inputError]}
                value={password}
                onChangeText={setPassword}
            />{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}


            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleLogin} disabled={isSubmitting}>
                <Text style={styles.loginText}>{isSubmitting ? "Entrando..." : "Entrar"}</Text>
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

            <TouchableOpacity activeOpacity={0.8} onPress={onSwitch}>
                <Text style={styles.subText}>Não possui uma conta? Cadastre-se</Text>
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

    inputError: {
        borderColor: '#ff4444',
        borderWidth: 1,
        marginBottom: 4,
    },
    errorText: {
        color: '#ff4444',
        fontSize: 12,
        marginBottom: 14,
        marginLeft: 4,
    },

    loginButton: {
        backgroundColor: "#f7c222",
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

    subText: {
        color: "#a4a4a4",
        fontSize: 13,
        marginVertical: 14,
        textDecorationLine: "underline",
        textAlign: "center"
    },
});

export { styles };
