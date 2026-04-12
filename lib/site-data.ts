export type NavItem = {
  href: string;
  label: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

export type Review = {
  text: string;
  author: string;
  location: string;
  rating?: string;
  stars?: string;
};

export type PartnerLogo = {
  src: string;
  alt: string;
  heightClass: string;
};

export type ServiceCard = {
  href: string;
  title: string;
  description: string;
  image: string;
};

export type ServicePageContent = {
  title: string;
  subtitle: string;
  heroImage: HeroImage;
  intro: string;
  lead?: string;
  services: string[];
  photos: HeroImage[];
};

export type BlogCard = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  image: HeroImage;
  placeholder?: boolean;
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "youtube"; url: string; title: string }
  | { type: "note"; text: string };

export type BlogArticle = {
  slug: "blog-solarne-panely" | "blog-solarna-energia";
  hero: HeroImage;
  heroTitle: string;
  heroSubtitle: string;
  dateLabel: string;
  title: string;
  blocks: BlogBlock[];
};

export type PageMeta = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: "website" | "article";
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Domov" },
  { href: "/elektroinstalacie", label: "Elektroinštalácie" },
  { href: "/stavebne-prace", label: "Stavebné práce" },
  { href: "/fotovoltika", label: "Fotovoltika" },
  { href: "/nasi-partneri", label: "Partneri" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export const PAGE_META_MAP: Record<string, PageMeta> = {
  "/": {
    title: "Campro s.r.o. | Elektroinštalácie, Fotovoltika, Stavebné práce | Trnava",
    description:
      "Profesionálne elektroinštalácie, fotovoltické systémy a stavebné práce v Trnave a okolí. Viac ako 10 rokov skúseností, stovky spokojných klientov. Získajte nezáväznú ponuku!",
    keywords: [
      "elektroinštalácie Trnava",
      "fotovoltika",
      "solárne panely",
      "stavebné práce",
      "elektrikár Trnava",
      "Campro",
      "nabíjacie stanice",
    ],
    canonical: "https://campro.sk/",
    ogImage: "https://campro.sk/sources/iStock-1367492947-2048x1363-1.jpg",
    ogType: "website",
  },
  "/elektroinstalacie": {
    title: "Elektroinštalácie Trnava | Elektrikár | Rozvádzače | Campro s.r.o.",
    description:
      "Profesionálne elektroinštalácie v Trnave a okolí. Komplexné elektroinštalačné práce, rozvádzače, osvetlenie. Skúsený elektrikár s certifikátmi. Nezáväzná ponuka zadarmo!",
    keywords: [
      "elektroinštalácie Trnava",
      "elektrikár",
      "rozvádzače",
      "elektroinštalačné práce",
      "osvetlenie",
      "elektro práce",
      "elektrikár Trnava",
      "Campro",
    ],
    canonical: "https://campro.sk/elektroinstalacie",
    ogImage: "https://campro.sk/sources/Elektroinstalacie.webp",
    ogType: "website",
  },
  "/fotovoltika": {
    title: "Fotovoltika Trnava | Solárne panely | Nabíjacie stanice | Campro s.r.o.",
    description:
      "Fotovoltické systémy a solárne panely v Trnave. Profesionálna inštalácia solárnych elektrární, nabíjacie stanice pre elektromobily. Úspora energie až 90%. Dotácie a výkup energie.",
    keywords: [
      "fotovoltika Trnava",
      "solárne panely",
      "fotovoltické systémy",
      "nabíjacie stanice",
      "solárna elektráreň",
      "úspora energie",
      "zelená energia",
      "Campro",
    ],
    canonical: "https://campro.sk/fotovoltika",
    ogImage: "https://campro.sk/sources/fotovoltaika-1024x683-1.jpg",
    ogType: "website",
  },
  "/stavebne-prace": {
    title: "Stavebné práce Trnava | Sadrokartón | Interiéry | Campro s.r.o.",
    description:
      "Profesionálne stavebné práce v Trnave. Sadrokartónové konštrukcie, interiérové práce, rekonštrukcie. Skúsení remeselníci, kvalitné materiály, férové ceny.",
    keywords: [
      "stavebné práce Trnava",
      "sadrokartón",
      "interiérové práce",
      "rekonštrukcie",
      "stavebník Trnava",
      "Campro",
    ],
    canonical: "https://campro.sk/stavebne-prace",
    ogImage: "https://campro.sk/sources/montaz-sadrokartonu-bratislava-profi-montaze.jpg",
    ogType: "website",
  },
  "/kontakt": {
    title: "Kontakt | Campro s.r.o. Trnava | Elektroinštalácie, Fotovoltika",
    description:
      "Kontaktujte nás pre profesionálne elektroinštalácie, fotovoltiku a stavebné práce v Trnave. Tel: +421 905 602 690, Email: office@campro.sk. Nezáväzná ponuka zadarmo!",
    keywords: [
      "kontakt Campro",
      "elektroinštalácie Trnava kontakt",
      "fotovoltika Trnava telefón",
      "stavebné práce kontakt",
    ],
    canonical: "https://campro.sk/kontakt",
    ogImage: "https://campro.sk/sources/iStock-1349360708.jpg",
    ogType: "website",
  },
  "/nasi-partneri": {
    title: "Partneri | Campro s.r.o. | Spoľahlivé značky a dodávatelia",
    description:
      "Naši partneri - svetoznáme značky ako 4ka, SWAN, AJ Products, XBionics, Arboria. Dlhoročná spolupráca so spoľahlivými dodávateľmi kvalitných produktov.",
    keywords: [
      "partneri Campro",
      "4ka",
      "SWAN",
      "AJ Products",
      "XBionics",
      "Arboria",
      "dodávatelia",
      "spolupráca",
    ],
    canonical: "https://campro.sk/nasi-partneri",
    ogImage: "https://campro.sk/partneri-images/4ka.png",
    ogType: "website",
  },
  "/blog": {
    title: "Blog | Campro s.r.o. | Články o elektrike, fotovoltike a stavebníctve",
    description:
      "Blog Campro s.r.o. - odborné články o elektroinstaláciách, fotovoltike, solárnych paneloch a stavebných prácach. Tipy, rady a novinky zo sveta energie.",
    keywords: [
      "blog elektroinstalácie",
      "fotovoltika články",
      "solárne panely blog",
      "stavebné práce tipy",
      "Campro blog",
    ],
    canonical: "https://campro.sk/blog",
    ogImage: "https://campro.sk/sources/fotovoltaika-1024x683-1.jpg",
    ogType: "website",
  },
  "/blog-solarne-panely": {
    title: "Solárne panely: Dlhá životnosť, nízke náklady na údržbu - Campro Blog",
    description:
      "Fotovoltaické solárne panely sú ideálnou voľbou pre domácnosti. Dlhá životnosť, nízke náklady na údržbu a vlastná produkcia elektriny. Návratnosť 10-15 rokov.",
    keywords: [
      "solárne panely",
      "fotovoltaika",
      "úspora energie",
      "ekológia",
      "návratnosť investície",
      "životnosť solárnych panelov",
      "Campro blog",
    ],
    canonical: "https://campro.sk/blog-solarne-panely",
    ogImage: "https://campro.sk/sources/fotovoltaika-1024x683-1.jpg",
    ogType: "article",
  },
  "/blog-solarna-energia": {
    title: "Prečo je solárna energia výhodná? - Campro Blog",
    description:
      "Solárna energia zaznamenáva boom. Výhody fotovoltických systémov, najlacnejší zdroj energie, ochrana životného prostredia. Pozrite si systémy SolaX.",
    keywords: [
      "solárna energia",
      "fotovoltika",
      "SolaX",
      "výhody solárnej energie",
      "obnoviteľná energia",
      "Campro blog",
      "fotovoltické systémy",
    ],
    canonical: "https://campro.sk/blog-solarna-energia",
    ogImage: "https://campro.sk/sources/Cena-a-navratnost-fotovoltickej-elektrarne.jpg",
    ogType: "article",
  },
};

export const HOME_HERO_IMAGES: HeroImage[] = [
  {
    src: "/sources/iStock-1367492947-2048x1363-1.jpg",
    alt: "Profesionálne elektroinštalácie a stavebné práce Campro s.r.o. Trnava",
  },
  {
    src: "/sources/iStock-1349360708.jpg",
    alt: "Kvalitné stavebné riešenia pre domácnosti a firmy v Trnave",
  },
  {
    src: "/sources/iStock-538176518-1536x1024-1.jpg",
    alt: "Fotovoltaické systémy a solárne panely inštalácia",
  },
  {
    src: "/sources/a2f5f84c6265d55514d90d43048a27ef.jpg",
    alt: "Moderné interiérové stavebné práce a sadrokartón",
  },
  {
    src: "/sources/montaz-sadrokartonu-bratislava-profi-montaze.jpg",
    alt: "Montáž sadrokartónu a interiérové práce Trnava",
  },
  {
    src: "/sources/science-in-hd-zns6rizp9ru-unsplash.jpg",
    alt: "Inovatívne elektroinštalačné riešenia a rozvádzače",
  },
  {
    src: "/sources/ovladanie-inteligentnej-domacnosti.jpg",
    alt: "Inteligentná domácnosť a automatizácia Campro",
  },
];

export const PARTNER_SLIDER_LOGOS: PartnerLogo[] = [
  { src: "/partneri-images/4ka.png", alt: "4ka Partner", heightClass: "h-14" },
  { src: "/partneri-images/AJ.png", alt: "AJ Partner", heightClass: "h-14" },
  { src: "/partneri-images/Unknown.png", alt: "Unknown Partner", heightClass: "h-14" },
  { src: "/partneri-images/XBionics.png", alt: "XBionics Partner", heightClass: "h-14" },
  { src: "/partneri-images/arboria-logo.jpeg", alt: "Arboria Partner", heightClass: "h-14" },
  { src: "/partneri-images/swan.png", alt: "Swan Partner", heightClass: "h-14" },
  {
    src: "/partneri-images/woodcote-1-2048x391-1.webp",
    alt: "Woodcote Partner",
    heightClass: "h-14",
  },
];

export const HOME_ABOUT_PARAGRAPHS: string[] = [
  "Campro s. r. o. je firma malá veľkosťou, ale bohatá skúsenosťami. Vo svojom obore podnikáme už viac ako 10 rokov, a za tú dobu máme za sebou stovky spokojných klientov, ktorí sa ku nám radi vracajú.",
  "Ruku k dielu sme priložili na mnohých stavbách, či už menších alebo väčších, známych ale aj úplne obyčajných rodinných domoch. Stáli sme pri vzniku športového komplexu X-Bionics SPHERE v Šamoríne, pri stavbe komplexov obytných domov Arboria a Prúdy a medzi nášho častého zákazníka patri aj Optotune. Okrem toho sme pracovali na rade iných projektov, či už pre štát, alebo súkromného vlastníka. Všade po nás zostala kvalitne odvedená práca a dobrý dojem.",
  "Medzi našich stálych partnerov sa radia svetoznáme značky ako 4ka, SWAN, AJ Products a mnoho iných, ktoré sú so službami našej firmy spokojné dlhodobo.",
  "Používame iba najkvalitnejšie produkty od našich dlhoročných dodávateľov, s ktorými máme dobré skúsenosti.",
  "Veríme, že tím najdôležitejším pri každom projekte je kvalita odvedenej práce, komplexnosť celkového riešenia a indivualizácia projektu presne podľa prianí a možností zákazníka.",
  "Tešíme sa na kontakt s Vami.",
];

export const HOME_SERVICE_CARDS: ServiceCard[] = [
  {
    href: "/elektroinstalacie",
    title: "Elektroinštalácie",
    description: "Profesionálne elektroinštalačné práce a rozvádzače",
    image: "/sources/Elektroinstalacie.webp",
  },
  {
    href: "/stavebne-prace",
    title: "Stavebné práce",
    description: "Interierové a exteriérové stavebné riešenia",
    image: "/sources/montaz-sadrokartonu-bratislava-profi-montaze.jpg",
  },
  {
    href: "/fotovoltika",
    title: "Fotovoltika",
    description: "Solárne systémy a nabíjacie stanice",
    image: "/sources/fotovoltaika-1024x683-1.jpg",
  },
];

export const HOME_REVIEWS: Review[] = [
  {
    rating: "5/5",
    stars: "★★★★★",
    text: "Firmu hodnotím veľmi pozitívne a s jej službami som nadmieru spokojný. Určite sa na ňu v budúcnosti znova obrátim.",
    author: "František",
    location: "Trnava",
  },
  {
    rating: "4.5/5",
    stars: "★★★★☆",
    text: "S firmou som spolupracoval na väčšom projekte a veľmi oceňujem ich zmysel pre kvalitu a komplexnosť ponúkaných služieb.",
    author: "Tomáš",
    location: "Zvončín",
  },
  {
    rating: "5/5",
    stars: "★★★★★",
    text: "Firma mi robila elektroinštaláciu v novopostavenom dome. Aj vďaka ich radám som upravila projekt a vôbec neľutujem, práve naopak. Som veľmi vďačná.",
    author: "Veronika",
    location: "Senec",
  },
];

export const SERVICE_REVIEWS: Review[] = [
  {
    text: "Ku firme sa vraciam vždy, keď mám nový stavebný projekt. Viem, že na firmu Campro sa môžem spolahnúť na 100%.",
    author: "Ján",
    location: "Developer",
  },
  {
    text: "Na firmu Campro som sa obrátila pri riešení elektroinštalácie v rodinnom dome a s prácou som nadmieru spokojná, obzvlášť s prístupom a inovatívnymi riešeniami.",
    author: "Martina",
    location: "Majiteľka rodinného domu",
  },
];

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  elektroinstalacie: {
    title: "ELEKTROINŠTALÁCIE",
    subtitle: "Profesionálne elektroinštalačné práce s vysokou kvalitou a bezpečnosťou",
    heroImage: {
      src: "/sources/Elektroinstalacie.webp",
      alt: "Profesionálne elektroinštalácie v Trnave - Campro s.r.o.",
    },
    intro:
      "V spojení s elektroinštalačnými prácami sa venujeme aj zasekávaniu kabeláže, sádrovaniu a vyrovnávaniu stien a výkopovým prácam pre kabeláž ku nehnuteľnosti.",
    services: [
      "Elektroinštalácie",
      "Výrobu a montáž rozvádzačov",
      "Silno a slaboprúdové rozvody",
      "Dorozumievacie a dochádzové systémy",
      "Montáž bleskozvodov",
    ],
    photos: [
      {
        src: "/sources/man-electrical-technician-working-switchboard-with-fuses-installation-connection-electrical-equipment-close-up-1536x1024-1.jpg",
        alt: "Elektrotechnik pracuje na rozvádzači s poistkami - inštalácia elektrického zariadenia",
      },
      {
        src: "/sources/switchboard-with-many-switches-fiber-optic-cables-2048x1365-1.jpg",
        alt: "Rozvádzač s mnohými spínačmi a optickými káblami - moderne elektroinštalácie",
      },
      {
        src: "/sources/Elektroinstalacie.webp",
        alt: "Kompletné elektroinštalačné práce pre rodinné domy a firmy",
      },
    ],
  },
  fotovoltika: {
    title: "FOTOVOLTAIKA A NABÍJACIE STANICE PRE ELEKTROMOBILY",
    subtitle: "Moderné riešenia pre udržateľnú energetiku a elektromobilitu",
    heroImage: {
      src: "/sources/fotovoltaika-1024x683-1.jpg",
      alt: "Fotovoltaické systémy a solárne panely Trnava - Campro s.r.o.",
    },
    intro: "Fotovoltaické systémy značky SOLAX, dodávané spoločnosťou Gienger Group",
    lead: "Fotovoltaické systémy značky SOLAX, dodávané spoločnosťou Gienger Group",
    services: [
      "Hybridné systémy",
      "Plne autonómne systémy",
      "Priame solárne systémy",
      "Predaj a montáž verejných nabíjacích staníc pre elektromobily",
      "Predaj a montáž súkromných nabíjacích staníc a wallboxov, v prípade potreby aj s kompletnou elektroinštaláciou",
    ],
    photos: [
      {
        src: "/sources/solar/475549677_629607646420490_4057491464821260782_n.jpg",
        alt: "Inštalácia solárnych panelov na streche - fotovoltaický projekt Campro",
      },
      {
        src: "/sources/solar/475796750_630667992981122_7707252541314473879_n.jpg",
        alt: "Moderné solárne panely SOLAX na streche rodinného domu",
      },
      {
        src: "/sources/solar/476031584_630667696314485_8185073002251379346_n.jpg",
        alt: "Profesionálna inštalácia fotovoltaických panelov - udržateľná energia",
      },
    ],
  },
  "stavebne-prace": {
    title: "STAVEBNÉ PRÁCE A INÉ SLUŽBY",
    subtitle:
      "Interierové a exteriérové stavebné práce, ktoré upravia vašu nehnutelnosť presne podľa vašich predstáv",
    heroImage: {
      src: "/sources/montaz-sadrokartonu-bratislava-profi-montaze.jpg",
      alt: "Montáž sadrokartónu a stavebné práce Trnava - Campro s.r.o.",
    },
    intro:
      "Interierové a exteriérové stavebné práce, ktoré upravia vašu nehnutelnosť presne podľa vašich predstáv, aby ste sa v nej citili čo najpríjemnejšie",
    services: [
      "Montáž sádrokartónových systémov",
      "Maľovanie interiérov (striekaním)",
      "Pokládku drevených a laminátových podláh",
      "Inteligentná domácnosť",
      "Zabezpečenie revíznych správ",
      "Porevízne opravy",
      "Predaj a montáž elektronických podlahových systémov",
      "Výrobu a montáž rozvádzačov",
      "Montáž dochádzových a dorozumievacích systémov",
      "Montáž elektrických žalúzií",
      "Správa domov a bytov – domová správa",
      "Výškové práce",
    ],
    photos: [
      {
        src: "/sources/stavebne/iStock-1332176308.jpg",
        alt: "Moderne interiérové stavebné práce a renovácie",
      },
      {
        src: "/sources/stavebne/iStock-1420162214-1536x1073.jpg",
        alt: "Kompletné stavebné realizácie a interiérové útravy",
      },
      {
        src: "/sources/stavebne/iStock-955250994-1536x1024.jpg",
        alt: "Profesionálne stavebné práce a montáž sadrokartónových systémov",
      },
    ],
  },
};

export const PARTNERS_PAGE_LOGOS: PartnerLogo[] = [
  {
    src: "/partneri-images/swan.png",
    alt: "SWAN partner - kvalitné produkty pre stavebníctvo",
    heightClass: "h-14",
  },
  {
    src: "/partneri-images/woodcote-1-2048x391-1.webp",
    alt: "Woodcote partner - stavebné materiály a riešenia",
    heightClass: "h-14",
  },
  {
    src: "/partneri-images/Gienger-Levice-1.webp",
    alt: "Gienger Group partner - dodávateľ fotovoltaických systémov SOLAX",
    heightClass: "h-14",
  },
  {
    src: "/partneri-images/Unknown.png",
    alt: "Spoločník Campro - dôveryhodný partner",
    heightClass: "h-14",
  },
];

export const CUSTOMERS_PAGE_LOGOS: PartnerLogo[] = [
  {
    src: "/partneri-images/arboria-logo.jpeg",
    alt: "Arboria zákazník - komplexy obytných domov",
    heightClass: "h-20",
  },
  {
    src: "/partneri-images/XBionics.png",
    alt: "X-Bionics SPHERE zákazník - športový komplex Šamorín",
    heightClass: "h-20",
  },
  {
    src: "/partneri-images/4ka.png",
    alt: "4ka zákazník - telekomunikačná spoločnosť",
    heightClass: "h-20",
  },
  {
    src: "/partneri-images/AJ.png",
    alt: "AJ Products zákazník - stály partner Campro",
    heightClass: "h-20",
  },
];

export const BLOG_CARDS: BlogCard[] = [
  {
    title: "Solárne panely: Dlhá životnosť, nízke náklady na údržbu a vlastná produkcia elektriny",
    date: "23. januára 2023",
    excerpt:
      "Fotovoltaické solárne panely sú ideálnou voľbou pre domácnosti, ktoré chcú ušetriť na nákladoch na elektrickú energiu a prispieť k ochrane životného prostredia...",
    href: "/blog-solarne-panely",
    image: {
      src: "/sources/fotovoltaika-1024x683-1.jpg",
      alt: "Solárne panely - článok o dlhej životnosti a nízkych nákladoch na údržbu",
    },
  },
  {
    title: "Prečo je solárna energia výhodná?",
    date: "24. januára 2023",
    excerpt:
      "Solárna energia na celom svete zaznamenáva veľký Boom. Solárne panely pribúdajú na strechách domov, budov, menia bývalé poľnohospodárske polia na fotovoltaické parky...",
    href: "/blog-solarna-energia",
    image: {
      src: "/sources/Cena-a-navratnost-fotovoltickej-elektrarne.jpg",
      alt: "Solárna energia - výhody fotovoltaických systémov a návratnosť",
    },
  },
  {
    title: "Ďalšie články pripravujeme",
    date: "Čoskoro",
    excerpt:
      "Pracujeme na ďalších užitočných článkoch o stavebníctve, elektroinštaláciách a fotovoltike. Sledujte náš blog pre najnovšie informácie.",
    href: "#",
    placeholder: true,
    image: {
      src: "/sources/man-electrical-technician-working-switchboard-with-fuses-installation-connection-electrical-equipment-close-up-1536x1024-1.jpg",
      alt: "Elektroinštalačné práce - pripravované články o elektrických inštaláciách",
    },
  },
];

export const BLOG_ARTICLES: Record<BlogArticle["slug"], BlogArticle> = {
  "blog-solarne-panely": {
    slug: "blog-solarne-panely",
    hero: {
      src: "/sources/fotovoltaika-1024x683-1.jpg",
      alt: "Solárne panely s dlhou životnosťou a nízkymi nákladmi na údržbu",
    },
    heroTitle: "SOLÁRNE PANELY",
    heroSubtitle: "Dlhá životnosť, nízke náklady na údržbu a vlastná produkcia elektriny",
    dateLabel: "23. januára 2023",
    title: "Solárne panely: Dlhá životnosť, nízke náklady na údržbu a vlastná produkcia elektriny",
    blocks: [
      {
        type: "p",
        text: "Fotovoltaické solárne panely sú ideálnou voľbou pre domácnosti, ktoré chcú ušetriť na nákladoch na elektrickú energiu a prispieť k ochrane životného prostredia. Tieto panely sú navrhnuté tak, aby využívali energiu slnka a premenili ju na elektrickú energiu, ktorú môžete použiť vo vašej domácnosti.",
      },
      { type: "h3", text: "Výhody fotovoltaických systémov" },
      {
        type: "p",
        text: "Jednou z hlavných výhod fotovoltaiky je úspora energie. Keď máte solárne panely, môžete generovať vlastnú elektrickú energiu a tým znížiť svoje náklady na elektrickú energiu. To môže byť obzvlášť výhodné pri súčasnom raste energií.",
      },
      {
        type: "p",
        text: "Ďalšou výhodou solárnych panelov je, že sú vyrobené z kvalitných materiálov, ktoré sú odolné voči poveternostným podmienkam. Tieto panely sú navrhnuté tak, aby vydržali počasie a zostali funkčné po veľmi dlhú dobu. Navyše, náklady na údržbu sú minimálne, takže sa nemusíte obávať vysokých nákladov na opravy.",
      },
      {
        type: "p",
        text: "Fotovoltaické solárne panely sú tiež ekologické. Využívajú obnoviteľnú energiu slnka, čo znamená, že nevyprodukujú žiadne škodlivé emisie a nezvyšujú uhlíkovú stopu. Týmto spôsobom prispievajú k ochrane životného prostredia.",
      },
      {
        type: "p",
        text: "Investícia do solárnych panelov sa môže vrátiť do 10-15 rokov, v závislosti od mnohých faktorov, ako je veľkosť solárnej sústavy, cena solárnych panelov a lokálne ceny elektriny. Okrem toho, že umožňujú ušetriť na nákladoch na elektrickú energiu, solárne panely môžu tiež prispieť k úspore peňazí v dlhodobom horizonte.",
      },
      {
        type: "p",
        text: "Ak sa rozhodnete pre inštaláciu solárnych panelov, môže to tiež prispieť k zlepšeniu hodnoty vašeho domu. Mnoho potenciálnych kupcov hľadá domy s týmito panelmi, pretože vedia, že im to umožní ušetriť peniaze na nákladoch na elektrickú energiu a prispieť k ochrane životného prostredia.",
      },
      {
        type: "p",
        text: "Navyše, ak vaša solárna sústava produkuje viac energie, ako spotrebujete, môžete ju predať späť do verejnej elektrickej siete a tým zarobiť peniaze. To môže byť ďalším spôsobom, ako sa vám investícia do solárnych panelov vráti.",
      },
      {
        type: "p",
        text: "Solárne panely sú tiež veľmi jednoduché na inštaláciu a obsluhu. Mnoho spoločností ponúka profesionálne služby inštalácie a pomôžu vám vybrať správnu veľkosť a typ solárnej sústavy pre vašu domácnosť.",
      },
      { type: "h3", text: "Záver" },
      {
        type: "p",
        text: "V závere, solárne panely sú skvelou voľbou pre domácnosti, ktoré chcú ušetriť na nákladoch na elektrickú energiu, prispieť k ochrane životného prostredia a zlepšiť hodnotu svojho domu. Sú vyrobené z kvalitných materiálov, majú dlhú životnosť a nízke náklady na údržbu. Investícia sa vám môže vrátiť do 10-15 rokov a navyše máte možnosť predať prebytočnú energiu. Ak uvažujete o inštalácii solárnych panelov, mali by ste zvážiť túto možnosť a získať viac informácií od odborníkov v oblasti fotovoltaiky.",
      },
    ],
  },
  "blog-solarna-energia": {
    slug: "blog-solarna-energia",
    hero: {
      src: "/sources/Cena-a-navratnost-fotovoltickej-elektrarne.jpg",
      alt: "Výhody solárnej energie - cena a návratnosť fotovoltaickej elektrárne",
    },
    heroTitle: "SOLÁRNA ENERGIA",
    heroSubtitle: "Prečo je solárna energia výhodná?",
    dateLabel: "24. januára 2023",
    title: "Prečo je solárna energia výhodná?",
    blocks: [
      {
        type: "p",
        text: "Solárna energia na celom svete zaznamenáva veľký Boom. Solárne panely pribúdajú na strechách domov, budov, menia bývalé poľnohospodárske polia na fotovoltaické parky.",
      },
      {
        type: "p",
        text: "Aké sú výhody slnečnej energie získavanej z fotovoltických panelov? Aké sú nevýhody a slabé stránky solárnej energie? To všetko sa dozviete v nasledujúcom článku.",
      },
      {
        type: "p",
        text: "Solárna energia je energia zo slnka vo forme slnečných lúčov, ktoré dopadajú na Zem. Technológie dokážu takúto energiu zachytávať a ďalej využívať vo forme tepelnej (slnečné kolektory) alebo elektrickej energie. Najčastejším využitím je výroba elektriny fotovoltickými systémami.",
      },
      {
        type: "p",
        text: "Takto získaná energia má veľa výhod – je viacmenej čistá, pri jej výrobe nevzniká žiaden hluk ale hlavne – je obnoviteľná. Dôležité je dodať, že v súčastnosti patrí k najlacnejším zdrojom energie.",
      },
      {
        type: "p",
        text: "Podľa výpočtov NASA bude slnko žiariť najmenej 6,5 miliardy rokov, takže nemusíme sa báť že by sme o tento zdroj tak skoro prišli. Celkovo je takéto získavanie elektrickej energie veľmi šetrné k životnému prostrediu, pretože vo všeobecnosti nespôsobuje znečistenie. Podľa starších údajov trvá solárnemu panelu približne 1,5 roka, kým vyprodukuje toľko energie, koľko bolo poterbných na jeho výrobu – avšak životnosť panelu je 25 rokov.",
      },
      {
        type: "p",
        text: "V súčastnosti jedným z najdôležitejších faktorov a výhod solárnej energie je zníženie nákladov na elektrinu.",
      },
      { type: "h3", text: "Predstavenie spoločnosti SolaX" },
      {
        type: "p",
        text: "Spoločnosť SolaX je medzinárodne uznávaná spoločnosť zameraná na fotovoltaické systémy, s radou ocenení. Jej produkty nájdeme po celom svete, a len v Belgicku nájdeme viac ako 45 000 solárnych systémov priamo od tejto spoločnosti. Táto firma je zárukou kvalitných produktov využívaných po celom svete – od Ázie po Ameriku.",
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/embed/PkuLyV-Q_I4",
        title: "SolaX Power",
      },
      {
        type: "note",
        text: "Viac sa môžete dočítať na oficiálnych stránkach spoločnosti pre Slovenskú republiku.",
      },
    ],
  },
};

export const CONTACT_INFO = {
  address: ["Ulica Jána Hajdóczyho 797/48", "917 01 Trnava", "Slovenská republika"],
  phones: ["+421 905 602 690", "+421 908 758 701"],
  emails: ["office@campro.sk"],
  openingHours: [
    "Pondelok: 8:00 – 17:00",
    "Utorok: 8:00 – 17:00",
    "Streda: 8:00 – 17:00",
    "Štvrtok: 8:00 – 17:00",
    "Piatok: 8:00 – 17:00",
    "Sobota: podľa potreby a želania zákazníkov",
    "Nedeľa: podľa potreby a želania zákazníkov",
  ],
  business: [
    "IČO: 47581158",
    "DIČ: 2023989286",
    "IČ DPH: SK2023989286",
    "Registrácia: podľa §4, registrácia od 7.4.2014",
  ],
};

export const FOOTER_PRIVACY_SECTIONS: Array<{ title: string; content: string[] }> = [
  {
    title: "Campro s.r.o.",
    content: [
      "Ulica Jána Hajdóczyho 797/48, 917 01 Trnava, Slovenská republika",
      "IČO: 47581158, DIČ: 2023989286",
      "IČ DPH: SK2023989286, podľa §4, registrácia od 7.4.2014",
      "E-mail: office@campro.sk",
      "Tel.: +421 905 602 690",
      "Tieto Zásady ochrany osobných údajov popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.",
    ],
  },
  {
    title: "I. Kontaktný formulár",
    content: [
      "Na stránke campro.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám položiť otázku k našim produktom a službám alebo požiadať o cenovú ponuku.",
      "Rozsah spracúvaných údajov: meno a priezvisko, e-mailová adresa, telefónne číslo.",
      "Účel spracovania: aby sme vás mohli kontaktovať a reagovať na váš dopyt.",
      "Právny základ: článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy.",
      "Doba uchovávania: maximálne 10 rokov od odozvy na dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.",
    ],
  },
  {
    title: "II. Súbory cookies",
    content: [
      "Používame nevyhnutné cookies pre funkčnosť stránky a štatistické cookies len so súhlasom používateľa.",
      "Používateľ môže kedykoľvek odvolať súhlas s analytickými cookies prostredníctvom nastavení cookie lišty alebo prehliadača.",
    ],
  },
  {
    title: "III. Práva dotknutej osoby",
    content: [
      "Máte právo na prístup, opravu, vymazanie, obmedzenie spracovania, prenosnosť údajov, odvolanie súhlasu a podanie sťažnosti na Úrad na ochranu osobných údajov SR.",
      "V prípade otázok nás kontaktujte na office@campro.sk alebo +421 905 602 690.",
      "Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.",
    ],
  },
];
