import { StyleSheet, Text, View, TextInput, Dimensions, TouchableHighlight, TouchableOpacity } from "react-native";
import { useState } from 'react';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const PoemEdit = (props) => {

    const [ text, onChangeText ] = useState(props.poem);

    return (
        <View style={styles.profile}>
            <Text style={styles.header}>Edit Poem</Text>
            <TextInput
                editable
                multiline
                style={styles.input}
                placeholder={props.poem}
                onChangeText={onChangeText}
                value={text}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.saveButton}>
                    <Text style={styles.text}>Save</Text>
                </View>
                <TouchableOpacity onPress={() => props.goBack(0)}>
                    <View style={styles.cancelButton}>
                        <Text style={styles.text}>Cancel</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        height: height,
        width: width,
        backgroundColor: "#666f80",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    header: {
        fontSize: 30,
    },
    input: {
        backgroundColor: "white",
        height: height * 0.4,
        width: width - (width * 0.1),
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 20,
    },
    saveButton: {
        color: 'black',
        backgroundColor: '#FB6D6C',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,

    },
    cancelButton: {
        color: 'black',
        backgroundColor: '#C3C8D3',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,

    },
    buttonContainer: {
        flexDirection: "row"
    }
})

module.exports = PoemEdit;