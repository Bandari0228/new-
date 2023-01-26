import app from "./dbmanager.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const db = getFirestore(app);

async function createexpform(name, id, intro, Goals, materials, instruction, tips, assement, extension, resource) {
    const ref = collection(db, "experimentdata")

    await addDoc(ref,{
        name: name,
        id: id,
        introduction: intro,
        Goals: Goals,
        materials: materials,
        instructions: instruction,
        tip: tips,
        assement: assement,
        extensions: extension,
        Resources: resource,
       
    })
}

async function queryById(id) {
    const ref = collection(db, "experimentdata");
    // const queryinstance = await query(ref, where("id", "==", id));
    const docSnaps = await getDocs(ref);
    let doc;
    docSnaps.forEach(snap => {
        if(snap.data().id == id) {
            doc = snap.data();
        }
    });
    return doc;
}

export default createexpform;
export { queryById };
