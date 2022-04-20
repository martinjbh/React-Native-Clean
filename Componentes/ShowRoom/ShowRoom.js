import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, SectionList } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export default function ShowRoom({ navigation }) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.movies)

    const enviar = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>

            {/* {state.map((e, i) => {
                return <Text key={i}>{e.name}</Text>
            })} */}
            <TouchableOpacity
                style={styles.containerBoton}
                onPress={enviar}>
                <Text >ir a Home</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.nombres}>
                <FlatList
                    data={state}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>
                        2 == 2 ? <Text >{item.name}</Text> : console.log("no muestra nada")
                    }
                />
            </SafeAreaView>
            {/* <SafeAreaView style={styles.nombres2}>
                <SectionList
                    sections={state}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) =>  <Text key={item.id}>{item.name}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 100
    },
    containerBoton: {
        padding: '1%',
        backgroundColor: "green",
        borderRadius: 9
    },
    nombres: {
        height: 100,
        width: 150,
        marginTop: 100,
        backgroundColor: "red",
        padding: "1%",
        borderRadius: 12
    },
    nombres2: {
        height: 100,
        width: 150,
        marginTop: 200,
        backgroundColor: "red",
        padding: "1%",
        borderRadius: 12
    }
});
