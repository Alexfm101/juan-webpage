import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
});

export const getPictures = async (tag:string) => {
    
    const {response} = await cloudinary.v2.search.expression('resource_type:image AND tags=juanPhotos')
    .sort_by('public_id','desc')
    .max_results(10)
    .execute()

    
    return response;
};

