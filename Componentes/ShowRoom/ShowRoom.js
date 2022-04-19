import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ShowRoom({ navigation }) {
    return (

        <View style={styles.container}>
            <Text>Soy ShowRoom</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text >ir a Home</Text>
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
});
