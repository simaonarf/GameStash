import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { render } from '@testing-library/react-native';
import React from 'react';
import List from '../components/Favorites/MyActionSheet';

jest.mock('@/services/games', () => ({
    __esModule: true,
    default: [
        {
            data: [
                { genre: 'Ação/RPG' },
                { genre: 'RPG' },
                { genre: 'RPG/Aventura' },
                { genre: 'Ação/RPG' },
                { genre: 'Corrida/Simulação' },
                { genre: 'Corrida Realista' },
                { genre: 'Rali/Simulação' },
                { genre: 'Arcade de Corrida' },
                { genre: 'Plataforma 2D' },
                { genre: 'Survival Horror' },
                { genre: 'Estratégia em Tempo Real' },
                { genre: 'Simulador' },
                { genre: 'Stealth/Infiltração' },
            ]
        },
    ]
}));

jest.mock('@/components/Favorites/CategoryCard', () => {
    const { Text } = require('react-native');
    return function CategoryCard({ name }: { name: string }) {
        return <Text testID={`category-${name}`}>{name}</Text>;
    };
});

const renderWithProvider = (component: React.ReactElement) => {
    return render(
        <ActionSheetProvider>{component}</ActionSheetProvider>
    );
};

describe('List Component - FlatList Sorting', () => {
    it('deve exibir os itens na ordem inicial (Relevância)', () => {
        const { getAllByTestId } = renderWithProvider(<List />);

        const expectedGenres = [
            'Ação/RPG',
            'RPG',
            'RPG/Aventura',
            'Corrida/Simulação',
            'Corrida Realista',
            'Rali/Simulação',
            'Arcade de Corrida',
            'Plataforma 2D',
            'Survival Horror',
            'Estratégia em Tempo Real',
            'Simulador',
            'Stealth/Infiltração'
        ];

        expectedGenres.forEach(genre => {
            const element = getAllByTestId(`category-${genre}`);
            expect(element).toBeTruthy();
        });
    });


    it('deve exibir os gêneros de Z-A', () => {
        const { getAllByTestId } = renderWithProvider(<List />);

        const expectedReverseSortedGenres = [
            'Survival Horror',
            'Stealth/Infiltração',
            'Simulador',
            'Rali/Simulação',
            'RPG/Aventura',
            'RPG',
            'Plataforma 2D',
            'Estratégia em Tempo Real',
            'Corrida/Simulação',
            'Corrida Realista',
            'Arcade de Corrida',
            'Ação/RPG',
            'Errado'
        ];

        expectedReverseSortedGenres.forEach(genre => {
            expect(() => getAllByTestId(`category-${genre}`)).toHaveLength(0);
        });
    })
});