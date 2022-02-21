import { db, app } from '../DB_config/firebaseConfig'
import { setDoc, doc, addDoc, collection } from 'firebase/firestore/lite';
import { getStorage, ref } from "firebase/storage";




export const addEvent = async (data: any) => {
    // Create a root reference
    // const storage = getStorage(app)
    // data.images.map((image: any) => {
    //     const uploadUri = image.uri.replace('file://', '');
    //         ref(filename)
    //         .putFile(uploadUri);
    // });
    try {
        await addDoc(collection(db, "event"), data);
    } catch (e) {
        console.log(e);
    }
}  