import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export default function ShowRoom({ navigation }) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.movies)
    return (
        <View style={styles.container}>
            {state.map((e, i) => {
                return <Text key={i}>{e.name}</Text>
            })}

            <TouchableOpacity
                style={styles.containerBoton}
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
    containerBoton: {
        padding: '1%',
        backgroundColor: "green",
        borderRadius: 9
    },
});
