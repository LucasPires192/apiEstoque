import React, { useState, useEffect} from 'react';
import { View, Alert, FlatList, StyleSHeet, TouchbleOpacity } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { fetchEstoque, deleteEstoque } from './Api';

export default function Home({navigation}){
    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        fetchEstoque(setEstoque);
    }, []);

    const handleDelete = (id) => {
        Alert.alert(
            'Confirmado',
            'Tem certeza de que deseja deletar este item?',
            [
                {text: 'Cancelar', style: 'cancel'},
                {text: 'Deletar', onPress: () => deleteEstoque(id, setRegistro)},
            ]
        )
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={registro}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    <Card style={styles.card}>
                        <View style={styles.cardContent}>
                            {/* Coluna da esquerda: texto */}
                            <View style={styles.infoColumn}>
                                <Text style={styles.title}>Código: {item.id}</Text>
                                <Text>Produto: {item.produto}</Text>
                                <Text>Marca: {item.marca}</Text>
                                <Text>Valor: {item.valor}</Text>
                            </View>

                            {/* Coluna da direita: botões */}
                            <View style={styles.actionsColumn}>
                                <IconButton 
                                    icon="pencil"
                                    size={24}
                                    iconColor='#3498DB'
                                    onPress={() => navigation.navigate('Alterar', { Estoque: item})}
                                />
                                <IconButton 
                                    icon="delete"
                                    size={24}
                                    iconColor="#E74C3C"
                                    onPress={() => handleDelete(item.is)}
                                />
                            </View>
                        </View>
                    </Card>
                }}
            />

            <TouchbleOpacity 
                style={styles.floatingButton}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.plusIcon}>+</Text>
            </TouchbleOpacity>
        </View>
    )
}

const styles = StyleSHeet.create({
    container: {
        flex: 1,
        padding: 10,    
    },
    card: {
        marginBottom: 5,
        alevation: 3,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    infoColumn: {
        flex: 1,
        justifyContent: 'center',
    },
    actionsColumn: {
        justifyContent: 'space-around',
        alignItens: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: '#24AE60',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItens: 'center',
        elevation: 5,
    },
    plusIcon: {
        color: '#fff',
        fontSize: 32,
        lineHeight: 36,
        marginBottom: 2,
    },
})