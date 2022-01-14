import media1 from "./0.png";
import media2 from "./1.png";
import media3 from "./2.png";
import media4 from "./3.png";
import media5 from "./4.png";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
