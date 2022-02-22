
import { db, app } from '../DB_config/firebaseConfig'
import { setDoc, doc, addDoc, collection } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


type dispatchType = (value: { type: string, payload?: {} }) => void;

export const addEvent = async (data: any, event: dispatchType) => {
    const storage = getStorage(app)
    const images = await Promise.all(data.images.map(async (image: any) => {
        const uploadUri = image.uri.replace('file:///data/user/0/com.pepsi/cache/', '');
        const imagesRef = ref(storage, uploadUri);
        const waitTime = await uploadBytes(imagesRef, uploadUri).then(async (snapshot) => {
            return await getDownloadURL(imagesRef).then((url) => {
                return url;
            })
        });
        return waitTime;
    }));
    event({
        type: 'pepsi/changeStatusActivityIndicator',
        payload: false,
    })
    event({
        type: 'pepsi/handleIsDone',
        payload: true,
    })
    try {
        await addDoc(collection(db, "event"), { ...data, images });
    } catch (e) {
        console.log(e);
    }
}  