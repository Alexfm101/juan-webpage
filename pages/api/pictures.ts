import {Cloudinary} from '@cloudinary/url-gen';

// configurar cloudinary 
const cld = new Cloudinary({
    cloud: {
        cloudName: 'aleale'
    }
})

// obtener imagen
export const getPictures = (folder:string, pic_num:number) => {
    
    const array = [...new Array(pic_num)]
        .map(( _, index) => cld.image(`${folder}/${index.toString()}`).quality(50))

    return array;
}