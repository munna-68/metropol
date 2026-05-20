export const navigation = [
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/reservations" },
  { label: "Gallery", to: "/gallery" },
];

export const footerLinks = ["Privacy Policy", "Accessibility", "Press"];

export const featuredDishes = [
  {
    title: "Charred Wagyu",
    price: "68",
    tag: "GF",
    description:
      "A5 grade, smoked parsnip purée, black garlic demi-glace, foraged mushrooms.",
    image: "/assets/signature-duck.jpg",
    alt: "A top-down view of a sophisticated steak dish. A perfectly medium-rare wagyu beef filet is sliced and fanned out on a dark slate plate. It is accompanied by a purée of roasted parsnip, charred pearl onions, and a rich, dark demi-glace. The lighting is moody and focused, highlighting the juiciness of the meat against the industrial servingware.",
  },
  {
    title: "Hamachi Crudo",
    price: "24",
    description: "Yuzu kosho, compressed cucumber, white soy, nasturtium.",
    image: "/assets/signature-sashimi.jpg",
    alt: "A delicate and modern seafood appetizer. Fresh, translucent slices of hamachi crudo are arranged beautifully on a chilled white ceramic plate. The dish is accented with thin rings of jalapeño, micro-cilantro, and a bright, citrusy ponzu sauce. The aesthetic is clean, minimalist, and refreshing, with bright, natural lighting.",
  },
  {
    title: "Structure",
    price: "18",
    tag: "V",
    description:
      "Valrhona dark chocolate dome, espresso caramel, smoked sea salt gelato.",
    image: "/assets/signature-dessert.jpg",
    alt: "An elegant, modern dessert presentation. A dark chocolate structural dome sits on a matte concrete-style plate. A warm espresso caramel sauce is being poured over it, beginning to melt the top. Beside it is a neat quenelle of vanilla bean gelato. The lighting is warm and dramatic, highlighting the textures of the chocolate and the gloss of the caramel.",
  },
];

export const menuStarters = [
  {
    title: "Smoked Steelhead Trout",
    price: "24",
    tag: "GF",
    description:
      "Celeriac remoulade, pickled mustard seed, dill oil, charred rye crisp.",
  },
  {
    title: "Roasted Bone Marrow",
    price: "28",
    description:
      "Parsley salad, caper berries, shallot jam, grilled sourdough.",
  },
];

export const menuStarterImage = {
  src: "/assets/menu-starter.jpg",
  alt: "A close-up, high-end food photography shot of roasted bone marrow on a textured, dark ceramic plate. The lighting is dramatic and moody, emphasizing the rich textures of the marrow and the vibrant green parsley salad. The setting implies a sophisticated, industrial-chic dining environment with subtle concrete textures in the background. The color palette features deep earth tones contrasted with fresh greens.",
};

export const menuMains = [
  {
    title: "Dry-Aged Duck Breast",
    price: "48",
    description:
      "Parsnip purée, charred radicchio, blackberry gastrique, duck jus.",
    image: "/assets/menu-duck.jpg",
    alt: "A perfectly plated dry-aged duck breast, sliced to show a rosy pink interior, resting on a smooth parsnip purée. The dish is accented with dark, glossy blackberry gastrique and charred greens. The lighting is directional and warm, highlighting the crispy skin of the duck against a matte, charcoal-toned plate. The overall aesthetic is refined and minimalist.",
  },
  {
    title: "Charred Hispi Cabbage",
    price: "32",
    tag: "V",
    description:
      "Miso brown butter, toasted hazelnuts, crispy enoki mushrooms, chive oil.",
    image: "/assets/menu-veg.jpg",
    alt: "An elegant vegetarian dish featuring deeply charred Hispi cabbage drizzled with glossy miso brown butter and chive oil. Scattered toasted hazelnuts add texture. The presentation is modern and architectural, set against a stark white background with subtle natural shadows. The lighting is clean and bright, reflecting a sophisticated, light-mode dining experience.",
  },
];

export const galleryItems = [
  {
    number: "01",
    title: "The Main Dining Room",
    image: "/assets/gallery-dining-room.jpg",
    alt: "A wide architectural shot of a high-end restaurant dining room housed in a converted Manhattan loft. The space features exposed red brick walls, towering windows, and steel beams. Tables are set with crisp white linens and minimalist dinnerware. The lighting is bright and airy, defining a sophisticated light-mode aesthetic. A subtle charcoal and white palette dominates, warmed by hints of oak wood.",
    spanClass: "md:col-span-8",
    wrapperClass: "flex flex-col group cursor-pointer",
    frameClass:
      "relative overflow-hidden bg-surface-variant rounded w-full aspect-[4/3] md:aspect-[16/9]",
    marginClass: "",
  },
  {
    number: "02",
    title: "Cocktail Lounge",
    image: "/assets/gallery-cocktail.jpg",
    alt: "A close-up view of a sleek, modern cocktail bar within an industrial-chic restaurant. The bar counter appears to be honed concrete, adorned with pristine glassware and subtle oak accents. Behind the bar, shelves of spirits are illuminated by warm, bespoke lighting. The scene is bright yet moody, balancing cold-rolled steel textures with inviting hospitality. High-resolution, light-mode aesthetic.",
    spanClass: "md:col-span-4",
    wrapperClass: "flex flex-col group cursor-pointer mt-8 md:mt-0 md:pt-16",
    frameClass:
      "relative overflow-hidden bg-surface-variant rounded w-full aspect-square md:aspect-[3/4]",
    marginClass: "",
  },
  {
    number: "03",
    title: "Bespoke Details",
    image: "/assets/gallery-details.jpg",
    alt: "A highly detailed close-up of a minimalist table setting in a luxury loft restaurant. The focal point is a matte white ceramic plate resting on a textured concrete table surface. Next to it lies brushed steel cutlery. The lighting is soft and natural, creating gentle shadows that emphasize the raw materials. The composition is asymmetrical, embodying an industrial-chic, high-end design philosophy.",
    spanClass: "md:col-span-4",
    wrapperClass: "flex flex-col group cursor-pointer mt-8 md:-mt-16",
    frameClass:
      "relative overflow-hidden bg-surface-variant rounded w-full aspect-square",
    marginClass: "",
  },
  {
    number: "04",
    title: "The Open Kitchen",
    image: "/assets/gallery-kitchen.jpg",
    alt: "A vibrant, action-oriented shot of an open professional kitchen in a modern upscale restaurant. Chefs in crisp white uniforms are focused on plating dishes. The kitchen features extensive stainless steel surfaces and bright, clinical lighting that contrasts with the warmer tones of the dining area visible in the background. The aesthetic is clean, precise, and highly professional, fitting an industrial-chic theme.",
    spanClass: "md:col-span-8",
    wrapperClass: "flex flex-col group cursor-pointer mt-8 md:mt-16",
    frameClass:
      "relative overflow-hidden bg-surface-variant rounded w-full aspect-[4/3] md:aspect-[21/9]",
    marginClass: "",
  },
  {
    number: "05",
    title: "Private Dining",
    image: "/assets/gallery-private-dining.jpg",
    alt: "An intimate private dining space within an industrial loft restaurant. A long oak table is surrounded by minimalist charcoal chairs. The walls are a mix of exposed brick and smooth matte painted surfaces. A striking modern lighting fixture hangs above the table. The room is bathed in bright daylight from large grid windows, establishing a serene, exclusive light-mode aesthetic.",
    spanClass: "md:col-span-6",
    wrapperClass: "flex flex-col group cursor-pointer mt-8",
    frameClass:
      "relative overflow-hidden bg-surface-variant rounded w-full aspect-[4/3]",
    marginClass: "",
  },
  {
    number: "06",
    title: "The Cellar",
    image: "/assets/gallery-wine.jpg",
    alt: "A pristine glass-enclosed wine room within a modern industrial restaurant. Rows of wine bottles are displayed on custom steel racks. The lighting is architectural and focused, highlighting the labels against the raw concrete floor. The overall color palette is muted, relying on the contrast between the dark glass, steel, and the warm amber tones of the wine bottles. High-end, structured design.",
    spanClass: "md:col-span-6",
    wrapperClass: "flex flex-col group cursor-pointer mt-8 md:mt-24",
    frameClass:
      "relative overflow-hidden bg-surface-variant rounded w-full aspect-[4/3]",
    marginClass: "",
  },
];

export const reservations = {
  mapImage: "/assets/reservation-map.png",
  locationName: "123 Industrial Way, Suite 4B",
  cityState: "New York, NY 10001",
  phone: "+1 (212) 555-0199",
  email: "reservations@metropolny.com",
};
