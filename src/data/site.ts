// Dummy content for the Jamie Wu portfolio prototype.
// Kept separate from presentation so a real content workflow can be decided later.
// All text and images here are placeholder content only.

export type Aspect = "portrait" | "landscape" | "panoramic" | "square";

export interface ProjectImage {
  src?: string;
  aspect?: Aspect;
  captionLine1: string;
  captionLine2: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  summary: string;
  images: ProjectImage[];
}

export const artist = {
  name: "Jamie Wu",
  // Very short dummy introduction shown on the homepage.
  intro:
    "Jamie Wu is an artist working with photography, installation, and printed matter. This site is a structural prototype and contains placeholder content only.",
};

export const projects: Project[] = [
  {
    slug: "untitled-studies-i",
    title: "Untitled Studies (I)",
    year: "2024",
    cover: "images/other-examples/delta100-001.jpg",
    summary:
      "An ongoing series of studies examining light, surface, and the quiet interval between objects. Dummy placeholder text for the project summary.",
    images: [
      { aspect: "portrait", captionLine1: "Untitled Studies (I), Plate 01", captionLine2: "dummy caption placeholder line two" },
      { aspect: "landscape", captionLine1: "Untitled Studies (I), Plate 02", captionLine2: "dummy caption placeholder line two" },
      { aspect: "panoramic", captionLine1: "Untitled Studies (I), Plate 03", captionLine2: "dummy caption placeholder line two" },
      { aspect: "square", captionLine1: "Untitled Studies (I), Plate 04", captionLine2: "dummy caption placeholder line two" },
      { aspect: "portrait", captionLine1: "Untitled Studies (I), Plate 05", captionLine2: "dummy caption placeholder line two" },
      { aspect: "landscape", captionLine1: "Untitled Studies (I), Plate 06", captionLine2: "dummy caption placeholder line two" },
    ],
  },
  {
    slug: "chang-jiang",
    title: "Chang Jiang River ",
    year: "December 2023 - current",
    cover: "images/chang-jiang/something.jpg",
    summary:
      "A body of work made over several months in a single coastal landscape. Dummy placeholder text for the project summary.",
    images: [
      { src: "images/chang-jiang/Flowing, Aligning, Being_1.jpg", captionLine1: "Fields of Quiet, Plate 02", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_2.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_3.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_4.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_5.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_6.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_7.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_8.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_9.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { src: "images/chang-jiang/Flowing, Aligning, Being_10.jpg", captionLine1: "Fields of Quiet, Plate 03", captionLine2: "dummy caption placeholder line two" },
    ],
  },
  {
    slug: "light",
    title: "Light",
    year: "2024",
    cover: "images/other-examples/000048390029.jpg",
    summary:
      "Light, a handmade 64-page photobook, follows my continuing inquiry into how light carries feeling—from natural light's quiet permanence to the city's restless glow. Moving between reflection and record, it extends a practice where photographs hold what words cannot: the shift from land to street, from memory to now.",
    images: [
      { 
        aspect: "portrait",
        captionLine1: "After the Rain, Plate 01",
        captionLine2: "dummy caption placeholder line two"
      },
      { aspect: "portrait", captionLine1: "After the Rain, Plate 02", captionLine2: "dummy caption placeholder line two" },
      { aspect: "panoramic", captionLine1: "After the Rain, Plate 03", captionLine2: "dummy caption placeholder line two" },
      { aspect: "landscape", captionLine1: "After the Rain, Plate 04", captionLine2: "dummy caption placeholder line two" },
      { aspect: "portrait", captionLine1: "After the Rain, Plate 05", captionLine2: "dummy caption placeholder line two" },
      { aspect: "square", captionLine1: "After the Rain, Plate 06", captionLine2: "dummy caption placeholder line two" },
    ],
  },
];

export const bio = {
  // Dummy biography text.
  body: [
    "Jamie Wu (b. dummy year) is an artist based in a placeholder city. Her practice moves between photography, installation, and printed matter, with a recurring interest in duration, surface, and the quiet edges of perception.",
    "Recent dummy exhibitions include a solo presentation at a placeholder institution and group shows in several placeholder locations. This biography is placeholder content only and will be replaced with the final text in a later pass.",
    "Dummy awards and residencies text. She has participated in placeholder residencies and received placeholder recognitions. All content here is placeholder.",
  ],
  // Dummy contact information.
  contact: {
    email: "studio@placeholder.example",
    location: "Placeholder City, Placeholder Country",
    instagram: "@placeholder",
  },
};
