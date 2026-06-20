import ReviewRepository from '@/src/database/ReviewRepository';
import React, { useMemo, useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CategoryRepository from '../../src/database/CategoryRepository';
import GameRepository from '../../src/database/GameRepository';
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
    const categoryRepository = useMemo(() => new CategoryRepository(), []);
    const gameRepository = useMemo(() => new GameRepository(), []);
    const reviewRepository = useMemo(() => new ReviewRepository(), []);


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
            const games = await gameRepository.all();
            const reviews = await reviewRepository.all();

            console.log("Usuários encontrados:", usuarios);
            console.log("Games encontrados:", games);
            console.log("Reviews encontrados:", reviews);

        } catch (error) {
            console.error("Erro ao buscar:", error);
        }
    };

    const handlePopulate = async () => {
        try {
            const userId = await userRepository.create({
                id: 0,
                username: "bowieknife99",
                password: "password123",
                email: "forza@gamestash.com",
                created_at: ""
            });

            const simRacingId = await categoryRepository.create({ id: 0, name: "Sim Racing" });
            const rpgId = await categoryRepository.create({ id: 0, name: "RPG" });

            await gameRepository.create({
                id: 0,
                title: "Hollow Knight",
                description: "Silksong é a épica sequência de Hollow Knight, o premiado jogo de aventura e ação.",
                status: "playing",
                uri: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2503/d975a2a2d80276d9891d8d3430fb8ec7ed2e4ad807707e76.png",
                user_id: userId,
                category_id: simRacingId,
                created_at: ""
            });

            await gameRepository.create({
                id: 0,
                title: "Forza Horizon 6",
                description: "Descubra as paisagens deslumbrantes do Japão com mais de 550 carros do mundo real e torne-se uma lenda das corridas na maior aventura de direção em mundo aberto de Forza Horizon de todos os tempos.",
                status: "playing",
                uri: "https://content.presspage.com/uploads/1523/cca058d2-d82a-4d74-94a5-4bdc6f4da17f/1920_fh6_evergreen_keyart_branded-square_2160x2160_rgb.png?10000",
                user_id: userId,
                category_id: simRacingId,
                created_at: ""
            });

            /*             await reviewRepository.create({
                            id: 0,
                            rating: 4,
                            title: "Good",
                            comment: "Lorem ipsum dolor sit amett, consectetur adipiscing...more",
                            user_id: userId,
                            game_id: 2,
                            created_at: ""
                        }); */

            Alert.alert("Sucesso!", "Banco populado com dados de teste.");
        } catch (error) {
            console.error("Erro ao popular banco:", error);
            Alert.alert("Erro", "Não foi possível rodar o seeder.");
        }
    };

    const handleDelete = async () => {
        try {

            await gameRepository.down();

        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    };

    return (
        <ScrollView>
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

                {/*     
            <Text style={styles.title}>#TEST</Text>

                <View>
                    <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleAll}>
                        <Text style={styles.loginText}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handlePopulate}>
                        <Text style={styles.loginText}>Create e Populate (user, games, reviws)</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleDelete}>
                        <Text style={styles.loginText}>Delete (games)</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </ScrollView>
    );
}
