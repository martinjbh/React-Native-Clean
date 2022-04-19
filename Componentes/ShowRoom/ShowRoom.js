import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
export default function ShowRoom({ navigation }) {
    const state=useSelector(state=>state)
    return (
        
        <View style={styles.container}>
            {console.log(state)}
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
