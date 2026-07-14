export const COLORS = {
  ink: "#1a0e1f",
  plum: "#5b2a73",
  gold: "#f2b33d",
  teal: "#12726a",
  pink: "#ff3e7a",
  cream: "#fbf1e6",
};

export type PlaceholderSpec = {
  from: string;
  to: string;
  dark?: boolean;
  title: string;
  subtitle: string;
};

export type GalleryItem = {
  span: "g1" | "g2" | "g3" | "g4" | "g5" | "g6" | "g7";
  alt: string;
  caption: string;
  image?: string;
  placeholder?: PlaceholderSpec;
  rating?: string;
};

export const MENU_LINKS = [
  { href: "#about", label: "About", num: "01" },
  { href: "#onair", label: "On Air", num: "02" },
  { href: "#diary", label: "Style Diary", num: "03" },
  { href: "#fitness", label: "Fit & Focused", num: "04" },
  { href: "#eats", label: "Plate by Plate", num: "05" },
  { href: "#podcast", label: "Podcast", num: "06" },
  { href: "#contact", label: "Contact", num: "07" },
];

export const ROLES = [
  "Radio Presenter",
  "Fashion & Lifestyle",
  "Fitness Devotee",
  "Podcast Host",
  "Restaurant Reviewer",
  "Nairobi Born",
];

export const SHOWS = [
  { time: "06:00 – 09:00", name: "The Morning Rush", tag: "Weekdays" },
  { time: "16:00 – 18:00", name: "Drive Time with Atieno", tag: "Weekdays" },
  { time: "19:00 – 20:00", name: "Style & the City", tag: "Fridays" },
];

export const EPISODES = [
  { title: "Ep. 42 — The Business of Being Seen", meta: "with guest Wanjiru Kariuki · 48 min", plays: "12.4k plays" },
  { title: "Ep. 41 — Radio Taught Me to Listen", meta: "Solo episode · 33 min", plays: "9.8k plays" },
  { title: "Ep. 40 — Dressing For Nairobi Weather", meta: "with guest Otieno Mbogo · 41 min", plays: "15.1k plays" },
  { title: "Ep. 39 — Off Air, On Record", meta: "Solo episode · 29 min", plays: "11.2k plays" },
];

export const BRANDS = [
  "ANKARA HOUSE",
  "NAIROBI FASHION WEEK",
  "SAVANNA COSMETICS",
  "URBAN THREAD CO.",
  "VIBE FM",
];

export const DIARY_ITEMS: GalleryItem[] = [
  { span: "g1", image: "/images/style-1-street.jpeg", alt: "Street style, Nairobi CBD", caption: "Street Style — Nairobi CBD" },
  { span: "g2", image: "/images/style-2-studio.png", alt: "Studio look, Westlands", caption: "Studio — Westlands" },
  { span: "g3", image: "/images/style-3-offduty.png", alt: "Off duty look", caption: "Off-Duty" },
  { span: "g4", image: "/images/style-4-runway.png", alt: "Runway ready look", caption: "Runway Ready — NFW" },
  { span: "g5", image: "/images/style-5-bts.png", alt: "Behind the scenes shoot", caption: "Behind The Scenes" },
  { span: "g6", image: "/images/style-6-colour.png", alt: "Colour story look", caption: "Colour Story" },
  { span: "g7", image: "/images/style-7-goldenhour.png", alt: "Golden hour editorial", caption: "Golden Hour Editorial" },
];

export const FITNESS_ITEMS: GalleryItem[] = [
  { span: "g1", alt: "Early morning run, Karura Forest", caption: "5AM Run — Karura Forest", placeholder: { from: COLORS.teal, to: COLORS.gold, title: "5AM RUN", subtitle: "KARURA FOREST" } },
  { span: "g2", alt: "Strength training session", caption: "Strength Day — Home Gym", placeholder: { from: COLORS.ink, to: COLORS.teal, title: "STRENGTH DAY", subtitle: "HOME GYM SESSION" } },
  { span: "g3", alt: "Post workout glow", caption: "Post-Workout Glow", placeholder: { from: COLORS.gold, to: COLORS.pink, dark: true, title: "POST WORKOUT", subtitle: "GLOW EDIT" } },
  { span: "g4", alt: "Trail hike, Ngong Hills", caption: "Trail Hike — Ngong Hills", placeholder: { from: COLORS.plum, to: COLORS.teal, title: "TRAIL HIKE", subtitle: "NGONG HILLS" } },
  { span: "g5", alt: "Sunrise yoga flow", caption: "Yoga Flow — Sunrise Session", placeholder: { from: COLORS.teal, to: COLORS.plum, title: "YOGA FLOW", subtitle: "SUNRISE SESSION" } },
  { span: "g6", alt: "Race day, Nairobi 10K", caption: "Race Day — Nairobi 10K", placeholder: { from: COLORS.pink, to: COLORS.teal, title: "RACE DAY", subtitle: "NAIROBI 10K" } },
  { span: "g7", alt: "Recovery and stretch session", caption: "Recovery — Stretch & Reset", placeholder: { from: COLORS.gold, to: COLORS.teal, dark: true, title: "RECOVERY", subtitle: "STRETCH & RESET" } },
];

export const EATS_ITEMS: GalleryItem[] = [
  { span: "g2", alt: "Nyama choma, Kiambu Road", caption: "Nyama Choma — Kiambu Road", rating: "★ 4.6", placeholder: { from: COLORS.gold, to: COLORS.ink, dark: true, title: "NYAMA CHOMA", subtitle: "KIAMBU ROAD" } },
  { span: "g1", alt: "Brunch plate, Kilimani cafe", caption: "Brunch — Kilimani Cafe", rating: "★ 4.8", placeholder: { from: COLORS.pink, to: COLORS.gold, dark: true, title: "BRUNCH PLATE", subtitle: "KILIMANI CAFE" } },
  { span: "g4", alt: "Street food, Nairobi CBD", caption: "Street Eats — Nairobi CBD", rating: "★ 4.5", placeholder: { from: COLORS.ink, to: COLORS.gold, title: "STREET EATS", subtitle: "NAIROBI CBD" } },
  { span: "g5", alt: "Rooftop dinner, Westlands", caption: "Rooftop Dinner — Westlands", rating: "★ 4.9", placeholder: { from: COLORS.plum, to: COLORS.gold, title: "ROOFTOP DINNER", subtitle: "WESTLANDS" } },
  { span: "g3", alt: "Coastal Swahili dish", caption: "Coastal Flavours", rating: "★ 4.7", placeholder: { from: COLORS.teal, to: COLORS.gold, title: "COASTAL FLAVOURS", subtitle: "SWAHILI DISH" } },
  { span: "g6", alt: "Dessert table", caption: "Dessert Table", rating: "★ 4.8", placeholder: { from: COLORS.gold, to: COLORS.pink, dark: true, title: "DESSERT TABLE", subtitle: "SWEET FINISH" } },
];

export const STATS = [
  { value: 7, suffix: "", label: "Years On Air" },
  { value: 120, suffix: "+", label: "Episodes Hosted" },
  { value: 25, suffix: "", label: "Brand Collabs" },
  { value: 60, suffix: "+", label: "Restaurants Reviewed" },
];

export const FITNESS_STATS = [
  { value: "5", label: "Workouts / Week" },
  { value: "47:12", label: "10K Personal Best" },
  { value: "Strength", label: "Favourite Discipline" },
];
