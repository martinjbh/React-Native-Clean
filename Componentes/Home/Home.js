import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Soy Home</Text>
            <TouchableOpacity
                style={styles.containerBoton}
                onPress={() => navigation.navigate('ShowRoom')}>
                <Text >ir a ShowRoom</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBoton: {
        padding: '1%',
        backgroundColor:"green",
        borderRadius:9
    },
});
