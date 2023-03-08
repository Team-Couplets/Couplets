import { StyleSheet, Text, View, TextInput, Dimensions, TouchableHighlight, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const PoemEdit = (props) => {

    const [ text, onChangeText ] = useState(props.poem);

    //save poem into db
    const savePoem = () => {
        const body = {email: props.email};
        if (props.index === -1) {
            let i = 0;
            for (; i < props.poems.length; i++) {
                body[`poem${i + 1}`] = props.poems[i];
            }
            body[`poem${i + 1}`] = text;
            i++;
            while (i < 3) {
                body[`poem${i + 1}`] = "";
                i++;
            }
        }
        else {
            let i = 0;
            for (; i < 3; i++) {
                if (props.index === i + 1) body[`poem${i + 1}`] = text;
                else body[`poem${i + 1}`] = props.poems[i];
                if (i > props.poems.length - 1) body[`poem${i + 1}`] = "";
            }
        }
        console.log(body);
        fetch('http://localhost:3000/api/user/poems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formBody: body})
        })
        props.goBack(0);
    }

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
                <TouchableOpacity onPress={savePoem}>
                    <View style={styles.saveButton}>
                        <Text style={styles.text}>Save</Text>
                    </View>
                </TouchableOpacity>
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