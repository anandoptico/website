import { getCloudinaryUrl } from "@/lib/cloudinary";

export interface GalleryItem {
    id: number;
    image: string;
    alt: string;
    type: "image" | "video";
    thumbnailTime?: number;
}

export const galleryImages: GalleryItem[] = [
    {
        id: 1,
        image: "Transitions_Gen_S_Colors_0_bqjo1m",
        alt: "Transitions Gen S Colors Video",
        type: "video",
        thumbnailTime: 6
    },
    {
        id: 2,
        image: "Transitions_Gens_Promo_pgexba",
        alt: "Transitions Gens Promo Video",
        type: "video",
        thumbnailTime: 35
    },
    {
        id: 3,
        image: "4_qporrm",
        alt: "Store interior feature",
        type: "image"
    },
    { id: 4, image: "2_e2ksck", alt: "Store showcase", type: "image" },
    { id: 5, image: "5_npr84h", alt: "Eyewear collection", type: "image" },
    { id: 6, image: "6_s5ezyc", alt: "Premium frames display", type: "image" },
    { id: 7, image: "1_amybbw", alt: "Store highlights", type: "image" },
    { id: 8, image: "3_ashysf", alt: "Store gallery", type: "image" },
    { id: 9, image: "7_lq9t8j", alt: "Eyewear display", type: "image" },
    { id: 10, image: "8_wesjey", alt: "Store interior", type: "image" },
    { id: 11, image: "9_tsnhtx", alt: "Premium collection", type: "image" },
    { id: 12, image: "10_bdx1cm", alt: "Frames showcase", type: "image" },
    { id: 13, image: "11_pchpjm", alt: "Store view", type: "image" },
    { id: 14, image: "12_rcbnmh", alt: "Collection display", type: "image" },
    { id: 15, image: "13_v2tmnl", alt: "Store ambiance", type: "image" },
    { id: 16, image: "14_qwl6wx", alt: "Eyewear showcase", type: "image" },
];
