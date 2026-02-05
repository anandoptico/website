import { Cloudinary } from "@cloudinary/url-gen";
import { fill, scale } from "@cloudinary/url-gen/actions/resize";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const cld = new Cloudinary({
    cloud: {
        cloudName: cloudName || "dpcsp0hgf",
    },
});

/**
 * Generates an optimized Cloudinary URL for an image.
 * @param publicId The Cloudinary public ID of the image.
 * @param width Optional width for resizing.
 * @param height Optional height for resizing.
 * @returns The optimized URL string.
 */
export const getCloudinaryUrl = (publicId: string, width?: number, height?: number) => {
    const img = cld.image(publicId);

    img.format("auto").quality("auto");

    if (width && height) {
        img.resize(fill().width(width).height(height));
    } else if (width) {
        img.resize(scale().width(width));
    }

    return img.toURL();
};

/**
 * Generates an optimized Cloudinary URL for a video.
 * @param publicId The Cloudinary public ID of the video.
 * @returns The optimized URL string.
 */
export const getCloudinaryVideoUrl = (publicId: string) => {
    const video = cld.video(publicId);
    video.format("auto").quality("auto");
    return video.toURL();
};

/**
 * Generates a thumbnail URL for a Cloudinary video.
 * Uses the first frame of the video as the thumbnail.
 * @param publicId The Cloudinary public ID of the video.
 * @param width Optional width for resizing.
 * @param height Optional height for resizing.
 * @returns The thumbnail URL string.
 */
export const getVideoThumbnailUrl = (publicId: string, width?: number, height?: number, timestamp: number = 1) => {
    const cloud = cloudName || "dpcsp0hgf";
    const transforms = width && height ? `c_fill,w_${width},h_${height}` : width ? `w_${width}` : "";
    return `https://res.cloudinary.com/${cloud}/video/upload/so_${timestamp}${transforms ? "," + transforms : ""}/f_jpg,q_auto/${publicId}.jpg`;
};

// Helpful for debugging in the console
if (typeof window !== "undefined") {
    (window as any).debugCloudinary = (id: string) => {
        console.log(`Cloudinary URL for "${id}":`, getCloudinaryUrl(id));
    };
}
