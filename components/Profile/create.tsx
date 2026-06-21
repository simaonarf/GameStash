import React, { useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import UserRepository from '../../src/database/UserRepository';
import { styles } from './Form';

const createUserSchema = z.object({
    username: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres."),
    email: z.email("Por favor, insira um e-mail válido."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirm: z.string()
}).refine((data) => data.password === data.confirm, {
    message: "As senhas não conferem.",
    path: ["confirm"],
});

type Props = {
    onSwitch: () => void;
};

export default function CreateUserForm({ onSwitch }: Props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, confirmPassword] = useState('');

    const [errors, setErrors] = useState<Record<string, string>>({});

    const userRepository = useMemo(() => new UserRepository(), []);

    const handleCreateUser = async () => {
        setErrors({});

        const result = createUserSchema.safeParse({ username, email, password, confirm });

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

        try {
            const insertedId = await userRepository.create({
                id: 0,
                username: result.data.username,
                password: result.data.password,
                email: result.data.email,
                created_at: ""
            });

            Alert.alert("Sucesso!", `Usuário salvo com o ID: ${insertedId}`);

            setUsername('');
            setEmail('');
            setPassword('');
            confirmPassword('');

        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
            Alert.alert("Erro", "Ocorreu um problema ao salvar no banco de dados.");
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Criar Conta</Text>

                <TextInput
                    style={[styles.input, errors.username && customStyles.inputError]}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#777"
                    value={username}
                    onChangeText={setUsername}
                />
                {errors.username && <Text style={customStyles.errorText}>{errors.username}</Text>}

                <TextInput
                    style={[styles.input, errors.email && customStyles.inputError]}
                    placeholder="E-mail"
                    placeholderTextColor="#777"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                {errors.email && <Text style={customStyles.errorText}>{errors.email}</Text>}

                <TextInput
                    style={[styles.input, errors.password && customStyles.inputError]}
                    placeholder="Senha"
                    placeholderTextColor="#777"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {errors.password && <Text style={customStyles.errorText}>{errors.password}</Text>}

                <TextInput
                    style={[styles.input, errors.confirm && customStyles.inputError]}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#777"
                    secureTextEntry
                    value={confirm}
                    onChangeText={confirmPassword}
                />
                {errors.confirm && <Text style={customStyles.errorText}>{errors.confirm}</Text>}

                <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleCreateUser}>
                    <Text style={styles.loginText}>Criar</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={onSwitch}>
                    <Text style={styles.subText}>Já possui uma conta? Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const customStyles = StyleSheet.create({
    errorText: {
        color: '#ff4444',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
        marginLeft: 4,
    },
    inputError: {
        borderColor: '#ff4444',
        borderWidth: 1,
    }
});
