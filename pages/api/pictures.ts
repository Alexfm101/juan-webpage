import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const getPictures = async (tag: string) => {
    
    const { resources } =  await cloudinary.v2.api.resources_by_tag(tag);
    
    const urls = await resources.map(resource => {
        return { 
            largeUrl: resource.url,
        }
    });
        
    const response = urls.map((url) => ({
        large: url.largeUrl,
    }));
    
    return response;
};

