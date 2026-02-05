import { getCloudinaryUrl } from "@/lib/cloudinary";

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  images?: string[];
}

export const brands: Brand[] = [
  {
    id: "1", name: "RAY-BAN", slug: "ray-ban", logo: getCloudinaryUrl("ray-ban_g0o4us"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047211/rayban_1_bg_vqbe7y.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047212/rayban_2_bg_px6jky.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047217/rayban_3_bg_hs4utr.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047214/rayban_4_bg_ulwqaw.jpg"
    ]
  },
  { id: "2", name: "VOGUE", slug: "vogue", logo: getCloudinaryUrl("vogue_ux0huv") },
  { id: "3", name: "PRADA", slug: "prada", logo: getCloudinaryUrl("prada_uqmfqq") },
  {
    id: "4", name: "BURBERRY", slug: "burberry", logo: getCloudinaryUrl("burberry_xpsqeb"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076827/burberry_1_wvh52i.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076829/burberry_2_bg_mcb2ya.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076829/burberry_3_bg_kurynx.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076955/burberry_4_ha7hct.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076972/burberry_5_u1shjm.jpg"
    ]
  },
  {
    id: "5", name: "EMPORIO ARMANI", slug: "emporio-armani", logo: getCloudinaryUrl("armani_bfisue"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077272/armani_1_bg_u3skdf.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077273/armani_2_bg_ouscsi.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077274/armani_3_bg_h64ftv.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077273/armani_4_bg_ynuuse.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077274/armani_5_bg_urboz9.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077276/armani_6_bg_chas10.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768077278/armani_7_bg_gwkktt.jpg"
    ]
  },
  {
    id: "6", name: "CARRERA", slug: "carrera", logo: getCloudinaryUrl("carrera_kt11oy"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076136/carrera_1_bg_ts4400.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768076664/carrera_2_nevalz.webp"
    ]
  },
  {
    id: "7", name: "PUMA", slug: "puma", logo: getCloudinaryUrl("puma_arfttw"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047996/puma_1_bg_oqzoip.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047996/puma_2_bg_bupkds.jpg"
    ]
  },
  { id: "8", name: "MAUI JIM", slug: "maui-jim", logo: getCloudinaryUrl("maui-jim_cruet3") },
  {
    id: "9", name: "OAKLEY", slug: "oakley", logo: getCloudinaryUrl("oakley_e6wxgv"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768048499/oakley_1_bg_xrjtd5.jpg"
    ]
  },
  { id: "10", name: "BAUSCH & LOMB", slug: "bausch-and-lomb", logo: getCloudinaryUrl("bausch-lomb_bgqhfz") },
  { id: "11", name: "STEPPER", slug: "stepper", logo: getCloudinaryUrl("stepper_wptzwx") },
  {
    id: "12", name: "FERRARI", slug: "ferrari", logo: getCloudinaryUrl("ferrari_lv6cso"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768075761/ferrari_1_bg_i5iouw.jpg"
    ]
  },
  { id: "13", name: "META GLASSES", slug: "meta-glasses", logo: getCloudinaryUrl("meta-glasses_gg5h4a") },
  {
    id: "14", name: "SWAROVSKI", slug: "swarovski", logo: getCloudinaryUrl("swarovski_vsxaga"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768046718/swarovski_1_sfz8wx.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768046718/swarovski_2_ws29r3.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768047112/swarovski_3_xtth7z.jpg"
    ]
  },
  { id: "15", name: "JAGUAR", slug: "jaguar", logo: getCloudinaryUrl("jaguar_fxxsrm") },
  {
    id: "16", name: "MONTBLANC", slug: "montblanc", logo: getCloudinaryUrl("montblanc_nmqdau"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768048740/montt_blanc_1_bg_fhzyte.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768048741/montt_blanc_2_bg_kfhfut.jpg"
    ]
  },
  { id: "17", name: "UNITED COLORS OF BENETTON", slug: "ucb", logo: getCloudinaryUrl("ucb_gobilj") },
  {
    id: "18", name: "CALVIN KLEIN", slug: "ck", logo: getCloudinaryUrl("ck_gsfboi"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768075798/ck_1_bg_hzx9ta.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768075799/ck_2_bg_qspuny.jpg",
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768075801/ck_3_bg_u9kf19.jpg"
    ]
  },
  { id: "19", name: "TOMMY HILFIGER", slug: "tommy-hilfiger", logo: getCloudinaryUrl("tommy-hilfiger_zkhu99") },
  {
    id: "20", name: "MICHAEL KORS", slug: "michael-kors", logo: getCloudinaryUrl("michael-kors_snlubv"), images: [
      "https://res.cloudinary.com/dpcsp0hgf/image/upload/v1768075473/michael_kors_1_bg_eydnug.jpg"
    ]
  },
];

export interface Frame {
  id: string;
  name: string;
  brand: string;
  category: "men" | "women" | "kids" | "sunglasses";
  image?: string;
}

// Category-specific frame images
// Category-specific frame images (placeholders for now, will use Cloudinary)
const getCategoryImageUrl = (category: Frame["category"], index: number) => {
  return getCloudinaryUrl(`frames/${category}-${(index % 2) + 1}`);
};

// Placeholder frames for demonstration
export const generateFrames = (brand: string, count: number = 20): Frame[] => {
  const categories: Frame["category"][] = ["men", "women", "kids", "sunglasses"];
  return Array.from({ length: count }, (_, i) => {
    const category = categories[i % 4];
    return {
      id: `${brand}-${i + 1}`,
      name: `${brand} Model ${i + 1}`,
      brand,
      category,
      image: getCategoryImageUrl(category, i),
    };
  });
};

export const getCategoryFrames = (category: Frame["category"], count: number = 20): Frame[] => {
  const brandNames = brands.map(b => b.name);
  return Array.from({ length: count }, (_, i) => ({
    id: `${category}-${i + 1}`,
    name: `${brandNames[i % brandNames.length]} ${category.charAt(0).toUpperCase() + category.slice(1)} Frame ${i + 1}`,
    brand: brandNames[i % brandNames.length],
    category,
    image: getCategoryImageUrl(category, i),
  }));
};
