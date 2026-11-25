import type { GalleryCategory, GalleryItem } from '../types/lcac';

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Fine Arts',
  'Pottery',
  'Wood Craft',
  'Fashion & Textiles',
  'Leather Craft',
  'Basketry',
  'Beadwork',
  'Digital Arts',
  'Photography',
  'Performing Arts',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Figurative Studio & Pottery Practice',
    category: 'Fine Arts',
    medium: 'Acrylic on canvas & wheel-thrown clay (Illustrative visual)',
    caption:
      'Illustrative visual representing LCAC’s proposed collaborative studio culture uniting painters and ceramicists.',
    image: '/src/assets/images/hero_lilongwe_studio_1795640093471.jpg',
    imageAlt: 'Illustrative image of young African artists painting and throwing clay in a sunlit studio',
    aspect: 'wide',
  },
  {
    id: 'gal-02',
    title: 'Natural Reed & Sisal Coiled Basketry',
    category: 'Basketry',
    medium: 'Woven natural sisal and reed fibres (Illustrative visual)',
    caption:
      'Illustrative craft photograph highlighting traditional Malawian geometric basket weaving techniques.',
    image: '/src/assets/images/about_basket_weaving_1795640094024.jpg',
    imageAlt: 'Illustrative close-up of artisan hands weaving a patterned natural reed basket',
    aspect: 'square',
  },
  {
    id: 'gal-03',
    title: 'Terracotta & Glazed Stoneware Vessels',
    category: 'Pottery',
    medium: 'Wheel-thrown clay and mineral glazes (Illustrative visual)',
    caption:
      'Illustrative pottery study showcasing functional kitchenware and decorative ceramic forms.',
    image: '/src/assets/images/prog_pottery_ceramics_1795640095183.jpg',
    imageAlt: 'Illustrative photograph of terracotta clay bowls and glazed ceramic mugs on a timber shelf',
    aspect: 'tall',
  },
  {
    id: 'gal-04',
    title: 'Hand-Carved Hardwood Furniture & Relief',
    category: 'Wood Craft',
    medium: 'Sculpted hardwood and hand-chiselled relief (Illustrative visual)',
    caption:
      'Illustrative woodworking showcase reflecting fine joinery and traditional Malawian relief carving.',
    image: '/src/assets/images/prog_wood_carving_1795640095936.jpg',
    imageAlt: 'Illustrative photograph of a master woodcarver shaping a sculptural wooden chair',
    aspect: 'square',
  },
  {
    id: 'gal-05',
    title: 'Expressive Pigment & Charcoal Studies',
    category: 'Fine Arts',
    medium: 'Acrylic, charcoal, and mural exploration (Illustrative visual)',
    caption:
      'Illustrative fine arts studio scene demonstrating figurative charcoal work and expressive colour composition.',
    image: '/src/assets/images/prog_fine_arts_1795640094759.jpg',
    imageAlt: 'Illustrative scene of African painters and charcoal artists working inside a bright studio',
    aspect: 'wide',
  },
  {
    id: 'gal-06',
    title: 'Chitenje-Inspired Draping & Tie-Dye',
    category: 'Fashion & Textiles',
    medium: 'Hand-printed cotton and natural dye textiles (Illustrative visual)',
    caption:
      'Illustrative textile atelier piece pairing tailored silhouettes with contemporary African fabric prints.',
    image: '/src/assets/images/prog_fashion_textiles_1795640095971.jpg',
    imageAlt: 'Illustrative image of an African fashion designer draping patterned fabric on a dress form',
    aspect: 'tall',
  },
  {
    id: 'gal-07',
    title: 'Hand-Stitched Leather Satchels & Footwear',
    category: 'Leather Craft',
    medium: 'Vegetable-tanned leather with brass hardware (Illustrative visual)',
    caption:
      'Illustrative leather craft display featuring hand-stitched bags, belts, and leather sandals.',
    image: '/src/assets/images/prog_leather_beadwork_1795640095942.jpg',
    imageAlt: 'Illustrative still life of handcrafted leather bags, sandals, and belts',
    aspect: 'square',
  },
  {
    id: 'gal-08',
    title: 'Geometric Beadwork Adornment',
    category: 'Beadwork',
    medium: 'Glass seed beads and woven threadwork (Illustrative visual)',
    caption:
      'Illustrative beadwork showcase celebrating vibrant geometric collars, bracelets, and wearable craft.',
    image: '/src/assets/images/prog_leather_beadwork_1795640095942.jpg',
    imageAlt: 'Illustrative photograph of intricate geometric African beaded necklaces and bracelets',
    aspect: 'square',
  },
  {
    id: 'gal-09',
    title: 'Brand Packaging & Digital Illustration',
    category: 'Digital Arts',
    medium: 'Vector illustration and packaging design (Illustrative visual)',
    caption:
      'Illustrative digital arts studio scene demonstrating commercial packaging and graphic identity creation.',
    image: '/src/assets/images/prog_digital_arts_1795640109143.jpg',
    imageAlt: 'Illustrative photograph of a young African designer working on packaging design on a monitor',
    aspect: 'wide',
  },
  {
    id: 'gal-10',
    title: 'Craft Documentation & Studio Lighting',
    category: 'Photography',
    medium: 'Studio product photography & cinema framing (Illustrative visual)',
    caption:
      'Illustrative production image showing how photography and videography elevate local craft into global markets.',
    image: '/src/assets/images/prog_photography_video_1795640106739.jpg',
    imageAlt: 'Illustrative studio shoot with a young Malawian photographer framing woven baskets',
    aspect: 'square',
  },
  {
    id: 'gal-11',
    title: 'Courtyard Rhythm, Dance & Spoken Word',
    category: 'Performing Arts',
    medium: 'Traditional percussion, acoustic music & dance (Illustrative visual)',
    caption:
      'Illustrative courtyard performance reflecting LCAC’s proposed music, poetry, drama, and dance discipline.',
    image: '/src/assets/images/prog_performing_arts_1795640097839.jpg',
    imageAlt: 'Illustrative golden-hour courtyard gathering with African drummers and dancer',
    aspect: 'wide',
  },
  {
    id: 'gal-12',
    title: 'Reclaimed Timber & Woven Plastic Furnishings',
    category: 'Wood Craft',
    medium: 'Upcycled hardwood, glass, and recycled plastic strips (Illustrative visual)',
    caption:
      'Illustrative circular design showcase combining carpentry craft with eco-friendly recycled materials.',
    image: '/src/assets/images/prog_recycling_art_1795640096992.jpg',
    imageAlt: 'Illustrative gallery image of upcycled wooden chair and sculptural lamp',
    aspect: 'tall',
  },
];
