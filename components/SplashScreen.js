import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        //Define a dureção do splash (a segundos)
        const timer = setTimeout(() => {
            navigation.replace('Home'); //Após o tempo, navega para a tela de Home
        }, 4000);

        return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
    }, [navigation]);

    return(
        <View style={StyleSheet.splashContainer}>
            <Image 
                source={{uri: 'https://m.media-amazon.com/images/I/51N3Xi4JJML._AC_SX679_.jpg'}} 
                style={StyleSheet.splashImage}
            />
            <ActivityIndicator 
                size="large"
                color="#0000ff"
                style={StyleSheet.loader}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    }
})

export default SplashScreen;
