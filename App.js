import React, { useState } from 'react';
import { TouchableOpacity, Animated, Text, View, Image, StyleSheet, ScrollView} from 'react-native';

const App = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Image
                    source={require("./assets/logo.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.body} >
                <Text style={{ fontWeight: 'bold', textAlign: 'center', borderWidth: 1}}>
                    Description : {count}
                </Text>
                <View style={{ flex: 1, borderWidth: 1 }}>
                    <Image
                        source={require("./assets/lasagnes.jpg")}
                        // resizeMode: 'stretch'
                        style={{height: "100%", width: "100%"}}
                    />
                </View>
                <ScrollView style={{flex:3}}>
                    <View style={styles.article1}>
                        <View style={styles.ImgBrownie}>
                            <Image
                                source={require("./assets/brownie.jpg")}

                                style={{width:"100%", height:"80%"}}
                            />
                        </View>
                        <View style={styles.vBrownie}>
                            <Text style={styles.TitleBrownie}>
                                Le titre
                            </Text>
                            <Text style={styles.descriptionBrownie}>
                                La description du brownie
                            </Text>
                        </View>
                    </View>
                    <View style={styles.article1}>
                        <View style={styles.ImgBrownie}>
                            <Image
                                source={require("./assets/madeleine.jpg")}

                                style={{width:"100%", height:"80%"}}
                            />
                        </View>
                        <View style={styles.vBrownie}>
                            <Text style={styles.TitleBrownie}>
                                Le titre
                            </Text>
                            <Text style={styles.descriptionBrownie}>
                                La description du brownie
                            </Text>
                        </View>
                    </View>
                    <View style={styles.article1}>
                        <View style={styles.ImgBrownie}>
                            <Image
                                source={require("./assets/madeleine.jpg")}

                                style={{width:"100%", height:"80%"}}
                            />
                        </View>
                        <View style={styles.vBrownie}>
                            <Text style={styles.TitleBrownie}>
                                Le titre
                            </Text>
                            <Text style={styles.descriptionBrownie}>
                                La description du brownie
                            </Text>
                        </View>
                    </View>
                    <View style={styles.article1}>
                        <View style={styles.ImgBrownie}>
                            <Image
                                source={require("./assets/madeleine.jpg")}

                                style={{width:"100%", height:"80%"}}
                            />
                        </View>
                        <View style={styles.vBrownie}>
                            <Text style={styles.TitleBrownie}>
                                Le titre
                            </Text>
                            <Text style={styles.descriptionBrownie}>
                                La description du brownie
                            </Text>
                        </View>
                    </View>
                    <View style={styles.article1}>
                        <View style={styles.ImgBrownie}>
                            <Image
                                source={require("./assets/madeleine.jpg")}

                                style={{width:"100%", height:"80%"}}
                            />
                        </View>
                        <View style={styles.vBrownie}>
                            <Text style={styles.TitleBrownie}>
                                Le titre
                            </Text>
                            <Text style={styles.descriptionBrownie}>
                                La description du brownie
                            </Text>
                        </View>
                    </View>
                    <View style={styles.article1}>
                        <View style={styles.ImgBrownie}>
                            <Image
                                source={require("./assets/madeleine.jpg")}

                                style={{width:"100%", height:"80%"}}
                            />
                        </View>
                        <View style={styles.vBrownie}>
                            <Text style={styles.TitleBrownie}>
                                Le titre
                            </Text>
                            <Text style={styles.descriptionBrownie}>
                                La description du brownie
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonDesign} onPress={onPress}>
                    {/*<Text>Press me</Text>*/}
                    <Image
                        source={require('./assets/addButton.png')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default App

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#FAEBD7"
    },
    header:{
        flex:1.2,
        backgroundColor:'#FDE0DC',
        alignItems: 'center'
    },
    logo:{
        width: "30%", height: "80%",
        marginTop: 20
    },
    body:{
        flex:6,
        backgroundColor: "rgba(255,248,242,1)",
    },
    article1:{
        height: "100%",
        flexDirection: "row"
    },
    ImgBrownie:{
        flex: 1,
        borderWidth:1,
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
        borderWidth: 1,
        alignItems: 'center'
    },
    buttonDesign: {
        width: "9%",
        height: "50%",
        marginTop: "5%" // bad need to be improve
    },
    buttonImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
});