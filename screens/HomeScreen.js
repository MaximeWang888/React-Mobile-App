import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import {KeyboardAvoidingView, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native'
import { auth } from '../firebase'
import {ScrollView} from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const onPress = () => setCount(prevCount => prevCount + 1);

    const handleNavigate2Profile = () => {
        navigation.replace("Profile")
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.header}>
                <Image
                    source={require("../images/appLogo.png")}
                    style={styles.logoImg}
                />
                <TouchableOpacity
                    onPress={handleNavigate2Profile}
                    style={styles.button}
                >
                    <Image
                        source={require("../images/account.png")}
                        style={styles.profilImg}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.body} >
                <Text style={styles.title}>
                    Description : {count}
                </Text>

                {/*<View style={{ flex: 1, borderWidth: 1, height:"100%", weight:"100%" }}>*/}
                {/*    <Image*/}
                {/*        source={require("../images/lasagnes.jpg")}*/}
                {/*        // resizeMode: 'stretch'*/}
                {/*        style={{height: "100%", width: "100%"}}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<View style={styles.article1}>*/}
                {/*    <View style={styles.ImgBrownie}>*/}
                {/*        <Image*/}
                {/*            source={require("../images/brownie.jpg")}*/}
                {/*            style={{width:"100%", height:"80%"}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={styles.vBrownie}>*/}
                {/*        <Text style={styles.TitleBrownie}>*/}
                {/*            Le titre*/}
                {/*        </Text>*/}
                {/*        <Text style={styles.descriptionBrownie}>*/}
                {/*            La description du brownie*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*</View>*/}

            </View>

            <View style={styles.footer}>
                <Modal visible={modalOpen} animationType="slide">
                    <MaterialIcons
                        name="close"
                        size={40}
                        onPress={() => setModalOpen(false)}
                        style={styles.modalClose}
                    />
                    <View >
                        <Text>Le contenu du modal/formulaire</Text>
                    </View>
                </Modal>

                <MaterialIcons
                    name="add"
                    size={55}
                    onPress={() => setModalOpen(true)}
                    style={styles.modalToggle}
                />

            </View>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    header:{
        flex:1.2,
        backgroundColor:'#FDE0DC',
        alignItems: 'center',
        flexDirection: "row",
    },

    logoImg:{
        width: "80%",
        height: "80%",
        resizeMode: 'contain',
        flex:1.5,
        position: "absolute",
        left: 42,
        bottom: 5
    },

    button: {
        width: '20%',
        borderRadius: 100,
        height: "50%",
        position: "absolute",
        right: 15,
        top: 40
    },

    profilImg: {
        flex:1,
        width: "100%",
        height:"80%",
        borderRadius:100,
        resizeMode: "contain",
        position:"absolute",
        bottom:0,
        left:10
    },

    body:{
        flex:6,
        backgroundColor: "rgb(255,248,242)",
    },

    title: {
        textAlign: 'center',
        borderWidth: 1,
        height: "10%",
        textAlignVertical: "center",
        fontSize: 20
    },

    article1:{
        height: "100%",
        flexDirection: "row",
        borderWidth:1,
    },

    ImgBrownie:{
        flex: 1,
        borderWidth:1,
        borderColor:"blue",
        justifyContent: "center"
    },

    vBrownie:{
        flex: 1,
        borderWidth: 1
    },

    descriptionBrownie:{
        marginLeft: 5,
    },

    TitleBrownie:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    footer:{
        flex:1,
        backgroundColor: '#FDE0DC',
    },

    modalToggle: {
        alignSelf: "center",
        marginTop: 20,
        borderWidth:1,
        borderRadius:100
    },

    modalClose: {
        alignSelf: "flex-end",
        borderWidth:1,
        borderRadius:100,
        marginRight:10,
        marginTop: 10
    },

});
