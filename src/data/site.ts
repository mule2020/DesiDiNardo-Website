export const siteData = {
  name: 'Desi Di Nardo',
  tagline: 'Poet · Professor · Scholar',
  bio: `A poet, professor, children's author, and interdisciplinary scholar from Toronto — whose work lives at the intersection of language, healing, and transformation. Her voice draws readers into both wonder and workshop, channeling the poetic into praxis.`,
  bioExtended: `Warm yet exacting, she bridges academia and community, mentoring emerging voices, and cultivating creativity as a force for connection and change. Her poetry circulates through journals and public spaces — from Starbucks cups and the TTC to the National Arts Centre and Canada's Official Residences — and resonates in classrooms across India, Iran, and Italy.`,

  stats: [
    { value: '2', label: 'Books Published' },
    { value: '20+', label: 'Journals & Anthologies' },
    { value: '1M+', label: 'Viewers Reached' },
    { value: '15+', label: 'Years of Teaching' },
  ],

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Works', path: '/works' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Publications', path: '/publications' },
    { label: 'Muse', path: '/muse' },
    { label: 'Contact', path: '/contact' },
  ],

  books: [
    {
      id: 'plural',
      title: 'The Plural of Some Things',
      cover: '/images/books/plural-of-some-things.jpg',
      description: 'Written with a probingly sensitive eye, this collection illuminates the subtle and poignant moments in life. Greatly emphasizing musicality, this compilation re-examines the common aspects of everyday life from a female perspective.',
      tags: ['Poetry Collection', 'Urban', 'Nature'],
      link: 'https://www.amazon.ca/Plural-Some-Things-First-Poets-ebook/dp/B00DELGV8C',
    },
    {
      id: 'cure',
      title: 'The Cure Is A Forest',
      cover: '/images/books/cure-is-a-forest.jpg',
      description: 'A journey of introspection and awakening in deep ecology. Where life and death, the numinous and the mundane, and dream and reality are subtly interchangeable. Published by Guernica Editions.',
      tags: ['Poetry Collection', 'Ecology', 'Guernica Editions'],
      link: 'https://www.amazon.ca/Cure-Forest-Desi-Nardo/dp/1550713353',
    },
  ],

  works: [
    {
      id: 'desjardins',
      category: 'Collabs',
      title: 'Desjardins',
      subtitle: 'Commercial Poetry Campaign',
      description: 'As both writer and on-screen talent, Desi\'s collaboration with Desjardins engaged more than a million viewers across Canada and beyond — affirming poetry\'s global reach in public discourse.',
      tags: ['Commercial', 'Poetry', 'National'],
      reach: '1M+ viewers',
    },
    {
      id: 'starbucks',
      category: 'Poetry',
      title: 'Starbucks',
      subtitle: '"The Way I See It" Series',
      description: 'Selected poems printed on Starbucks coffee cups as part of their celebrated literary series — poetry reaching millions of hands each morning.',
      tags: ['Poetry', 'Publication', 'National'],
    },
    {
      id: 'ttc',
      category: 'Poetry',
      title: 'TTC Poetry on the Way',
      subtitle: 'Toronto Transit Commission',
      description: 'Featured poet in the TTC\'s beloved Poetry on the Way initiative — bringing verse into the daily commute of thousands of Torontonians.',
      tags: ['Poetry', 'Public Art', 'Toronto'],
    },
    // {
    //   id: 'poetry-parade',
    //   category: 'Collabs',
    //   title: 'Poetry Parade',
    //   subtitle: 'National Mentorship Initiative',
    //   description: 'Founder and host of Poetry Parade — a national initiative convening Canada\'s foremost poets including Parliamentary and Toronto Poet Laureates.',
    //   tags: ['Mentorship', 'National', 'Education'],
    // },
    {
      id: 'pen-canada',
      category: 'Collabs',
      title: 'PEN Canada',
      subtitle: 'Literary Advocacy',
      description: 'Featured collaborator with PEN Canada, the organization defending freedom of expression and supporting writers at risk.',
      tags: ['Advocacy', 'Literary', 'National'],
    },
    {
      id: 'emerging-artist',
      category: 'Education',
      title: '2022 Emerging Young Artist',
      subtitle: 'Speaker at Michael Power – St. Joseph High School',
      description: 'Invited as keynote speaker for the Poetry & Arts Celebration at Michael Power – St. Joseph High School, inspiring the next generation of young writers.',
      tags: ['Education', 'Youth', 'Toronto'],
    },
    {
      id: 'educator',
      category: 'Education',
      title: 'Professor Di Nardo',
      subtitle: 'University Educator',
      description: 'Threading poetic inquiry through curriculum and conversation in Canadian universities — shaping scholarship with artistry and resonance.',
      tags: ['Education', 'University', 'Mentorship'],
    },
  ],

  reviews: [
    {
      id: 1,
      quote: 'If one is seeking poetry that is fresh and insightful, this little book of gems will not disappoint. Desi Di Nardo\'s poems impress instantly. Desi is one of my favourite poets writing in Canada today.',
      author: 'Denis Deneau',
      title: 'Publisher, The Literary Review of Canada',
    },
    {
      id: 2,
      quote: 'This poetry manages to be exceptionally fresh, moving and very personal in its treatment of sentiments and emotions. These poems should appeal not only to poetry readers, but to those who desire a deeper view of the life of human beings.',
      author: 'Pierre DesRuisseaux',
      title: "Canada's Parliamentary Poet Laureate",
    },
    {
      id: 3,
      quote: 'How refreshing to find a writer so unabashedly poetic as Desi Di Nardo. By Pablo Neruda\'s definition of art as that which gives people hope — Di Nardo stands head and shoulders above the crowd. A poetry to be thankful for.',
      author: 'Pier Giorgio Di Cicco',
      title: 'Toronto Poet Laureate',
    },
    {
      id: 4,
      quote: "Her dedicatory poem to Gwen, 'Rainbird in the Annex,' is a wonderful example of what is yet to come from the pen of Desi Di Nardo.",
      author: 'Carol Wilson',
      title: 'Sister of Gwendolyn MacEwen',
    },
  ],

  publications: [
    { year: '2024', title: 'Desi Di Nardo, an Annex Poet Laureate', outlet: 'Annex Literary Award', type: 'Award' },
    { year: '2022', title: 'Emerging Young Artist Speaker', outlet: 'Michael Power – St. Joseph High School', type: 'Feature' },
    { year: 'Recent', title: 'Canadian Poet Finds New Venues, Sources For Creative Voices', outlet: 'National Publication', type: 'Article' },
    { year: 'Recent', title: 'Ten Questions With Desi Di Nardo', outlet: 'Literary Magazine', type: 'Interview' },
    { year: 'Earlier', title: 'Q&A — National Post "The Afterword"', outlet: 'National Post', type: 'Interview', link: 'https://desidinardo.com/documents/q&a-mark-medley.doc' },
    { year: 'Earlier', title: 'The Cure Is A Forest — Commentary', outlet: 'Literary Review', type: 'Review' },
  ],

  poetryLines: [
    'Di Nardo makes the invisible palpable',
    'and the visible insurgent.',
    'Between lyric and critique,',
    'classroom and community,',
    'her voice ignites poetry\'s power',
    'to restore, revoke, reimagine.',
  ],

  contact: {
    linkedin: 'https://www.linkedin.com/in/desi-di-nardo-56710b220/',
    email: 'contact@desidinardo.com',
  },
}

// ── Media assets per work card ───────────────────────────────────────────────

export const workMedia: Record<string, {
  images?: { src: string; alt: string }[]
  videos?: { src: string; label?: string }[]
}> = {
  desjardins: {
    videos: [
      { src: '/videos/desjardins-video.mp4', label: 'Desjardins campaign — poetry in action' }],
  },
  starbucks: {
    images: [
      { src: '/images/starbucks/image-1.jpg', alt: 'Desi\'s poem on Starbucks cup' },
      { src: '/images/starbucks/image-2.jpg', alt: 'The Way I See It — Starbucks series' },
    ],
  },
  ttc: {
    images: [
      { src: '/images/educator/image-4.jpg', alt: 'TTC Poetry on the Way' },
    ],
  },
  'pen-canada': {
    videos: [
      { src: '/videos/pen-canada-video.mp4', label: 'PEN Canada — Video 1' },
      { src: '/videos/pen-canada-video-2.mp4', label: 'PEN Canada — Video 2' },
    ],
  },
  'emerging-artist': {
    videos: [
      { src: '/videos/mpsj-video.mp4', label: 'Poetry & Arts Celebration' },
    ],
  },
  educator: {
    images: [
      { src: '/images/educator/image-1.jpg', alt: 'Professor Di Nardo in the classroom' },
      { src: '/images/educator/image-2.jpg', alt: 'Teaching poetry workshop' },
      { src: '/images/educator/image-3.jpg', alt: 'University lecture' },
      { src: '/images/educator/image-5.jpg', alt: 'Student poetry session' },
      { src: '/images/educator/image-7.png', alt: 'Poetry education' },
      { src: '/images/educator/image-8.jpg', alt: 'Community poetry event' },
      { src: '/images/educator/image-9.jpg', alt: 'Mentoring student writers' },
      { src: '/images/educator/image-10.jpg', alt: 'Poetry Parade event' },
    ],
  },
}

export const museImages = [
  { src: '/images/educator/image-1.jpg', alt: 'In the classroom', caption: 'Where words take root' },
  { src: '/images/educator/image-2.jpg', alt: 'Workshop moment', caption: 'Poetry in practice' },
  { src: '/images/educator/image-3.jpg', alt: 'Teaching', caption: 'The lecture hall as stage' },
  { src: '/images/educator/image-4.jpg', alt: 'TTC Poetry on the Way', caption: 'Poetry in transit' },
  { src: '/images/educator/image-5.jpg', alt: 'Student session', caption: 'Emerging voices' },
  { src: '/images/educator/image-8.jpg', alt: 'Community event', caption: 'Poetry meets community' },
  { src: '/images/educator/image-9.jpg', alt: 'Mentoring writers', caption: 'Cultivating the craft' },
  { src: '/images/educator/image-10.jpg', alt: 'Poetry Parade', caption: 'Poetry Parade' },
  { src: '/images/starbucks/image-1.jpg', alt: 'Starbucks poem', caption: 'Morning verses' },
  { src: '/images/starbucks/image-2.jpg', alt: 'The Way I See It', caption: 'The Way I See It' },
  { src: '/images/publications/image-7.jpeg', alt: 'Annex Poet Laureate', caption: 'Annex Poet Laureate' },
  { src: '/images/reviews/home-reviews.jpg', alt: 'TDSB Poetry Program', caption: 'TDSB Poetry Program' },
]

export const publicationImages = [
  '/images/publications/image-1.png',
  '/images/publications/image-2.jpg',
  '/images/publications/image-3.png',
  '/images/publications/image-4.jpg',
  '/images/publications/image-5.jpg',
  '/images/publications/image-6.jpg',
  '/images/publications/image-7.jpeg',
]