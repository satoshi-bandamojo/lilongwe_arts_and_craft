import type { Programme, ProgrammeCategoryGroup } from '../types/lcac';

export const PROGRAMME_CATEGORIES: ProgrammeCategoryGroup[] = [
  'Traditional Arts & Crafts',
  'Fashion & Design',
  'Digital & Media Arts',
  'Music & Performing Arts',
];

export const PROGRAMMES: Programme[] = [
  {
    id: 'fine-arts',
    slug: 'fine-arts',
    numberLabel: '01',
    title: 'Fine Arts',
    categoryGroup: 'Traditional Arts & Crafts',
    shortDescription:
      'Foundational and contemporary visual expression across drawing, painting, sculpture, and community murals.',
    overview:
      'The proposed Fine Arts programme will guide learners from observational drawing and colour theory to large-scale murals, figurative painting, and three-dimensional sculpture rooted in Malawian visual storytelling.',
    skillsTaught: ['Drawing', 'Painting', 'Sculpture', 'Murals'],
    enterprisePathways: [
      'Original canvas and mural commissions for public and hospitality spaces',
      'Exhibition curation and gallery representation',
      'Commercial illustration and art education facilitation',
    ],
    image: '/src/assets/images/prog_fine_arts_1795640094759.jpg',
    imageAlt: 'Illustrative scene of African fine artists painting expressive canvases and charcoal studies in a daylight studio',
  },
  {
    id: 'wood-craft',
    slug: 'wood-craft',
    numberLabel: '02',
    title: 'Wood Craft',
    categoryGroup: 'Traditional Arts & Crafts',
    shortDescription:
      'Practical woodworking, sculptural carving, furniture making, and finely finished decorative timber pieces.',
    overview:
      'Combining Malawian carving heritage with contemporary joinery and design standards, this proposed discipline equips young makers to build durable furniture, functional homeware, and carved cultural pieces.',
    skillsTaught: ['Furniture', 'Carving', 'Decorative products'],
    enterprisePathways: [
      'Bespoke furniture and interior joinery workshops',
      'Hospitality and tourism carved homeware production',
      'Collaborative furniture design with upcycled and sustainable timber',
    ],
    image: '/src/assets/images/prog_wood_carving_1795640095936.jpg',
    imageAlt: 'Illustrative scene of a Malawian woodcarver shaping a hardwood chair and carved relief panel with chisels',
  },
  {
    id: 'pottery-and-ceramics',
    slug: 'pottery-and-ceramics',
    numberLabel: '03',
    title: 'Pottery and Ceramics',
    categoryGroup: 'Traditional Arts & Crafts',
    shortDescription:
      'Hands-on clay modelling, wheel-thrown and hand-built pottery, decorative ceramics, and functional kitchenware.',
    overview:
      'Rooted in Malawi’s rich clay traditions, the proposed Pottery and Ceramics studio will teach clay preparation, hand-building, wheel throwing, surface glazing, and firing for both functional kitchenware and gallery vessels.',
    skillsTaught: ['Clay modelling', 'Pottery', 'Decorative ceramics', 'Kitchenware'],
    enterprisePathways: [
      'Tableware and ceramic vessel supply for lodges, restaurants, and homes',
      'Decorative architectural ceramics and planters',
      'Cooperative kiln sharing and craft market retail',
    ],
    image: '/src/assets/images/prog_pottery_ceramics_1795640095183.jpg',
    imageAlt: 'Illustrative scene of hand-thrown terracotta clay vessels and glazed stoneware ceramics on a wooden studio shelf',
  },
  {
    id: 'fashion-and-textile-design',
    slug: 'fashion-and-textile-design',
    numberLabel: '04',
    title: 'Fashion and Textile Design',
    categoryGroup: 'Fashion & Design',
    shortDescription:
      'Apparel creation, pattern drafting, fabric printing, tie and dye, intricate embroidery, and contemporary jewellery.',
    overview:
      'This proposed studio bridges precision tailoring with textile surface innovation—helping young designers build cohesive clothing, fabric, and accessory collections suited to local retail and international markets.',
    skillsTaught: [
      'Tailoring',
      'Garment making',
      'Fabric printing',
      'Tie and dye',
      'Embroidery',
      'Jewellery',
    ],
    enterprisePathways: [
      'Independent tailoring studios and contemporary Malawian fashion labels',
      'Custom printed and hand-dyed textile yardage for interiors and apparel',
      'Seasonal lookbooks, craft market showcases, and online sales',
    ],
    image: '/src/assets/images/prog_fashion_textiles_1795640095971.jpg',
    imageAlt: 'Illustrative scene of an African textile designer draping patterned garments and natural tie-dye fabrics',
  },
  {
    id: 'leather-craft',
    slug: 'leather-craft',
    numberLabel: '05',
    title: 'Leather Craft',
    categoryGroup: 'Fashion & Design',
    shortDescription:
      'Pattern cutting, hand-stitching, and finishing for durable bags, belts, footwear, and everyday leather goods.',
    overview:
      'Trainees in the proposed Leather Craft workshop will master hide selection, pattern engineering, saddle stitching, edge finishing, and hardware fitting to craft heirloom-quality bags, belts, shoes, and wallets.',
    skillsTaught: ['Bags', 'Belts', 'Shoes', 'Wallets'],
    enterprisePathways: [
      'Small-batch leather accessory brands and corporate gift lines',
      'Footwear crafting, repair, and custom sizing services',
      'Export-ready travel and lifestyle goods',
    ],
    image: '/src/assets/images/prog_leather_beadwork_1795640095942.jpg',
    imageAlt: 'Illustrative still life of handcrafted vegetable-tanned leather satchels, belts, and sandals on linen',
  },
  {
    id: 'metal-art',
    slug: 'metal-art',
    numberLabel: '06',
    title: 'Metal Art',
    categoryGroup: 'Traditional Arts & Crafts',
    shortDescription:
      'Expressive metalwork, artistic welding, surface patination, and sculptural home décor.',
    overview:
      'The proposed Metal Art discipline introduces safe welding practice, metal bending, texture finishing, and structural composition to turn steel and reclaimed metal into architectural accents and home décor.',
    skillsTaught: ['Decorative metalwork', 'Welding art', 'Home décor'],
    enterprisePathways: [
      'Architectural grilles, lighting fixtures, and sculptural interior décor',
      'Commissioned public art and garden installations',
      'Mixed-material furniture frames paired with timber or woven elements',
    ],
    image: '/src/assets/images/prog_metal_art_1795640097184.jpg',
    imageAlt: 'Illustrative scene of an African metal artist welding sculptural iron and patinated bronze wall art',
  },
  {
    id: 'basketry',
    slug: 'basketry',
    numberLabel: '07',
    title: 'Basketry',
    categoryGroup: 'Traditional Arts & Crafts',
    shortDescription:
      'Traditional Malawian natural-fibre weaving paired with contemporary forms for modern interiors.',
    overview:
      'Preserving vital rural and peri-urban weaving knowledge, the proposed Basketry programme explores harvesting, natural dyeing, structural coiling, and modern basketry silhouettes for domestic and international buyers.',
    skillsTaught: ['Traditional weaving', 'Modern basket designs'],
    enterprisePathways: [
      'Woven homeware, lighting shades, and storage collections',
      'Women- and youth-led weaving cooperatives',
      'Hotel, lodge, and export wholesale partnerships',
    ],
    image: '/src/assets/images/about_basket_weaving_1795640094024.jpg',
    imageAlt: 'Illustrative close-up of African artisan hands weaving a geometric natural reed basket in sunlight',
  },
  {
    id: 'beadwork',
    slug: 'beadwork',
    numberLabel: '08',
    title: 'Beadwork',
    categoryGroup: 'Fashion & Design',
    shortDescription:
      'Intricate colour composition and fine beading techniques for necklaces, bracelets, and decorative home pieces.',
    overview:
      'The proposed Beadwork discipline develops precision pattern design, colour harmony, wire and thread finishing, and accessory prototyping for fashion adornment and interior accents.',
    skillsTaught: ['Necklaces', 'Bracelets', 'Home décor'],
    enterprisePathways: [
      'Boutique jewellery and fashion collaboration lines',
      'Tourism and cultural festival merchandise',
      'Combined leather-and-beadwork lifestyle products',
    ],
    image: '/src/assets/images/prog_leather_beadwork_1795640095942.jpg',
    imageAlt: 'Illustrative composition featuring intricate geometric African beadwork necklaces and bracelets alongside leather craft',
  },
  {
    id: 'recycling-art',
    slug: 'recycling-art',
    numberLabel: '09',
    title: 'Recycling Art',
    categoryGroup: 'Fashion & Design',
    shortDescription:
      'Creative circular design transforming plastic waste and reclaimed materials into upcycled furniture and eco-products.',
    overview:
      'Addressing environmental sustainability alongside youth enterprise, the proposed Recycling Art studio trains learners to reimagine discarded plastics, glass, and scrap timber into durable furniture and eco-friendly products.',
    skillsTaught: [
      'Plastic recycling',
      'Upcycled furniture',
      'Waste art',
      'Eco-friendly products',
    ],
    enterprisePathways: [
      'Circular furniture and outdoor seating studios',
      'Eco-conscious corporate gifts and installation art',
      'Community environmental awareness and upcycling workshops',
    ],
    image: '/src/assets/images/prog_recycling_art_1795640096992.jpg',
    imageAlt: 'Illustrative gallery view of upcycled furniture and lighting woven from reclaimed wood, glass, and recycled plastics',
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    numberLabel: '10',
    title: 'Graphic Design',
    categoryGroup: 'Digital & Media Arts',
    shortDescription:
      'Visual communication, Adobe Photoshop and Illustrator workflows, brand identity, and product packaging.',
    overview:
      'Equipping youth for Malawi’s growing digital economy, the proposed Graphic Design track builds practical fluency in layout, typography, image editing, brand systems, and market-ready product packaging.',
    skillsTaught: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Branding',
      'Product packaging',
    ],
    enterprisePathways: [
      'Freelance brand identity and print production studios',
      'Packaging and labelling support for local artisan cooperatives',
      'Digital marketing assets for SMEs and cultural organisations',
    ],
    image: '/src/assets/images/prog_digital_arts_1795640109143.jpg',
    imageAlt: 'Illustrative studio scene of a young African graphic designer creating vibrant brand packaging on a workstation',
  },
  {
    id: 'photography',
    slug: 'photography',
    numberLabel: '11',
    title: 'Photography',
    categoryGroup: 'Digital & Media Arts',
    shortDescription:
      'Camera craft, studio lighting, product styling, portrait direction, and documentary event coverage.',
    overview:
      'The proposed Photography programme trains young visual storytellers in composition, natural and studio lighting, post-production, and commercial product photography that helps local artisans sell online and abroad.',
    skillsTaught: ['Product photography', 'Studio photography', 'Event photography'],
    enterprisePathways: [
      'E-commerce product photography for craftspeople and fashion labels',
      'Community portrait studios and event documentation',
      'Editorial storytelling and visual journalism',
    ],
    image: '/src/assets/images/prog_photography_video_1795640106739.jpg',
    imageAlt: 'Illustrative scene of young Malawian photographers setting up a craft product shoot with camera and reflector',
  },
  {
    id: 'videography',
    slug: 'videography',
    numberLabel: '12',
    title: 'Videography',
    categoryGroup: 'Digital & Media Arts',
    shortDescription:
      'Visual storytelling through documentary filmmaking, commercial video production, and social media content.',
    overview:
      'From pre-production scripting to camera movement, sound capture, and editing, the proposed Videography track enables young creatives to produce compelling documentaries, brand films, and digital campaigns.',
    skillsTaught: [
      'Documentary production',
      'Commercial videos',
      'Social media content creation',
    ],
    enterprisePathways: [
      'Independent documentary and NGO storytelling production',
      'Commercial video reels for Malawian businesses and tourism',
      'Digital content creation and social media studio retainers',
    ],
    image: '/src/assets/images/prog_photography_video_1795640106739.jpg',
    imageAlt: 'Illustrative studio production scene of a young Malawian videographer framing a cinema camera on tripod',
  },
  {
    id: 'digital-arts',
    slug: 'digital-arts',
    numberLabel: '13',
    title: 'Digital Arts',
    categoryGroup: 'Digital & Media Arts',
    shortDescription:
      'Contemporary digital creativity spanning animation, character and editorial illustration, and digital painting.',
    overview:
      'The proposed Digital Arts curriculum opens pathways into screen-based creative industries—teaching tablet illustration, digital painting, motion fundamentals, and visual storytelling for global remote and local markets.',
    skillsTaught: [
      'Animation',
      'Illustration',
      'Digital painting',
      'Digital creative industries',
    ],
    enterprisePathways: [
      'Animated explainers, educational media, and children’s book illustration',
      'Digital asset creation for regional creative agencies',
      'Original art prints and licensed visual merchandise',
    ],
    image: '/src/assets/images/prog_digital_arts_1795640109143.jpg',
    imageAlt: 'Illustrative scene of a young African digital artist sketching with a stylus and graphic tablet',
  },
  {
    id: 'music-and-performing-arts',
    slug: 'music-and-performing-arts',
    numberLabel: '14',
    title: 'Music and Performing Arts',
    categoryGroup: 'Music & Performing Arts',
    shortDescription:
      'Cultural performance and contemporary expression across traditional dance, drama, poetry, and music production.',
    overview:
      'Celebrating Malawi’s living performance traditions alongside modern stagecraft and audio recording, this proposed discipline builds disciplined performers, spoken-word poets, dramatists, and music producers.',
    skillsTaught: [
      'Traditional dance',
      'Drama',
      'Poetry',
      'Music production',
    ],
    enterprisePathways: [
      'Festival, theatre, and cultural tourism performance ensembles',
      'Community theatre for social dialogue and youth outreach',
      'Independent audio recording, sound design, and live event production',
    ],
    image: '/src/assets/images/prog_performing_arts_1795640097839.jpg',
    imageAlt: 'Illustrative golden-hour courtyard gathering featuring African drummers, guitarist, poet, and contemporary dancer',
  },
];
