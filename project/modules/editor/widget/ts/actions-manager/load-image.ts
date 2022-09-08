import { loadImage } from "../actions/load-image";

export const addImage = (editor, file) => {
    file.current.click();
    console.log('ME EJECUTO WEY')

    const imageFile = file.current.files[0];
    if (!imageFile) return;

    sendImageUrl(imageFile, (imageSrc) => loadImage(editor, imageSrc));
}

const sendImageUrl = (imageFile, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
        callback(fileReader.result);
    };
    
    fileReader.readAsDataURL(imageFile);
}