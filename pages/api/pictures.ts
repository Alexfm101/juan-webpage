import {Cloudinary} from '@cloudinary/url-gen';

// configurar cloudinary 
const cld = new Cloudinary({
    cloud: {
        cloudName: 'aleale'
    }
})

// obtener imagen
export const getPictures = async (folder:string, pic_num:number) => {
    
    const array = await [...new Array(pic_num)]
        .map(( _, index) => cld.image(`${folder}/${index.toString()}`).quality(30))

    return array;
}