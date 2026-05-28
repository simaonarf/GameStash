import React, { useMemo, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import UserRepository from '../../src/database/UserRepository';
import { styles } from './Form';

type Props = {
    onSwitch: () => void;
};

export default function CreateUserForm({ onSwitch }: Props) {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, confirmPassword] = useState('');


    const userRepository = useMemo(() => new UserRepository(), []);

    const handleCreateUser = async () => {
        if (!username || !email || !password || !confirm) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        if (password != confirm) {
            Alert.alert("Erro", "Senhas não conferem");
            return;
        }

        try {
            const insertedId = await userRepository.create({
                id: 0,
                username: username,
                password: password,
                email: email,
                created_at: ""
            });

            Alert.alert("Sucesso!", `Usuário salvo com o ID: ${insertedId}`);

            setUsername('');
            setEmail('');
            setPassword('');

        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
            Alert.alert("Erro", "Ocorreu um problema ao salvar no banco de dados.");
        }
    };

    const handleAll = async () => {
        try {
            const usuarios = await userRepository.all();

            console.log("Usuários encontrados:", usuarios);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                placeholderTextColor="#777"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#777"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                placeholderTextColor="#777"
                secureTextEntry
                value={confirm}
                onChangeText={confirmPassword}
            />

            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleCreateUser}>
                <Text style={styles.loginText}>Criar</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={onSwitch}>
                <Text style={styles.subText}>Já possui uma conta? Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.title}>#TEST</Text>

            <View>
                <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleAll}>
                    <Text style={styles.loginText}>View All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
