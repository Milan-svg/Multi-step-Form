// file hamare server pe upload ho chuki hai, uska local paath leke hum cloudinary ko pass krdenge.
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
//import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // cloudinary file upload
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //console.log("file uploaded on cloudinary!", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("Cloudinary Upload Error:", error);
    fs.unlinkSync(localFilePath); // if the upload fails, just remove the remaining local temp file.
    return null;
  }
};

const cloudinaryFileDelete = async (PublicId) => {
  try {
    const deletionResult = await cloudinary.uploader.destroy(PublicId, {
      resource_type: "image",
      type: "authenticated",
    });
    return deletionResult;
  } catch (error) {
    console.log("error while deleting the image", error);
  }
};
export { cloudinaryUpload, cloudinaryThumbnail, cloudinaryFileDelete };
