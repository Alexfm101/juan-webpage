import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), '/public/images/portfolio');

export function getImages() {
    const fileNames = fs.readdirSync(imagesDirectory);
    const allImagesData = fileNames.map(fileName => {
        const id = fileName.replace(/\.jpg$/,'')

        return id;
    })
    return allImagesData;
}

