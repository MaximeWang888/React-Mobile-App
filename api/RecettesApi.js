import * as firebase from "firebase";

export function addRecette(recette) {

    firebase.firestore()
        .collection('Recettes')
        .add({
            name: recette.name,
            description: recette.description,
        }).then((snapshot) => snapshot.get())
        .then((recetteData) => recetteData.data())
        .catch((error => console.log(error)));

}

export async function getRecettes(recettesRetreived) {

    var recetteList = [];

    var snapshot = await firebase.firestore()
        .collection("Recettes")
        .get()

    snapshot.forEach((doc) => {
        recetteList.push(doc.data);
    })

    recettesRetreived(recetteList);
}

