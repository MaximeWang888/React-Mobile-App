import React from 'react';
import {StyleSheet, TextInput, View, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Formik } from "formik";
import {addRecette, getRecettes} from "../api/RecettesApi";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function ReviewForm() {

    const onRecetteAdded = (recette) => {
        console.log("Recette Added");
        console.log(recette);
    }

    return (
        <View style={{flex:1}}>
            <Formik
                initialValues={{ photo: "", description: "", name: "" }}
                onSubmit={(values) => {

                    console.log(values);
                    addRecette(
                        {name: values.name, description: values.description},
                    )
                    onRecetteAdded(getRecettes())

                }}
            >
                {(props) => (
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={{flex:1, justifyContent:"center"}}>

                            <TextInput
                                placeholder="Name"
                                onChangeText={props.handleChange("description")}
                                value={props.values.description}
                                style={styles.input}
                            />

                            <TextInput
                                placeholder="Description"
                                onChangeText={props.handleChange("name")}
                                value={props.values.name}
                                style={styles.input}
                            />


                            <Button title={"submit"} color="green" onPress={props.handleSubmit} style={styles.input}/>
                        </View>
                    </TouchableWithoutFeedback>
                )}

            </Formik>
        </View>
    )

};

const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        borderColor:"#ddd",
        padding:10,
        fontSize:18,
        borderRadius:6,
        maxWidth: "80%",
        marginLeft: 35,
        marginBottom: 50
    },
});