import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 102,
    slug: 'pasta-dental-de-turmalina-version-blanca',
    title: 'PASTA DENTAL DE TURMALINA (Versión Blanca)',
    subtitle: 'Cuidado bucal natural con turmalina y hierbas tradicionales',
    price: 12.00,
    categories: ['Cuidado personal'],
    primaryCategory: 'Cuidado personal',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Pasta-dental-con-turmalina-blanca.png',
    excerpt: 'Tourmaline Toothpaste HGW (Versión Blanca) es una pasta dental formulada con turmalina, menta y extractos vegetales cuidadosamente seleccionados para brindar una limpieza profunda y una sensación de frescura duradera. Su fórmula libre de flúor y triclosán ayuda a mantener una adecuada higiene bucal.',
    advantages: [
      'Producto libre de flúor.',
      'Libre de triclosán.',
      'Potente frescura a menta.',
      'Cuidadosamente formulada con hierbas chinas tradicionales.',
      'Promueve una salud dental excepcional.'
    ],
    benefits: [
      { title: 'Péptidos de soya', text: 'Los péptidos antimicrobianos destruyen membranas bacterianas e inhiben patógenos orales.' },
      { title: 'Cardenólidos de xilitol', text: 'Inhiben el metabolismo de bacterias cariogénicas, reducen la erosión ácida y estimulan la secreción de saliva.' },
      { title: 'Extracto de menta', text: 'Activa receptores TRPM8, produce sensación refrescante y ayuda a combatir el mal aliento.' },
      { title: 'Extracto de raíz de regaliz', text: 'Propiedades antiinflamatorias y antibacterianas, ayuda a aliviar el sangrado de encías.' },
      { title: 'Extracto de diente de león', text: 'Contribuye a reducir enrojecimiento e hinchazón de las encías.' },
      { title: 'Características de la Turmalina', text: 'Libera iones negativos y ayuda a reducir la adhesión de la placa dental.' }
    ],
    howToUse: [
      'Cepille sus dientes diariamente con Tourmaline Toothpaste.',
      'Utilice el producto al menos tres veces al día o según indicaciones de su odontólogo.',
      'Aplique la pasta sobre un cepillo dental.',
      'Realice una limpieza profunda de dientes y encías.',
      'Enjuague con abundante agua.'
    ],
    presentation: 'Tubo de 120 gramos',
    netContent: '120 g',
    precautions: ['Manténgase en un lugar fresco y seco.', 'Uso externo bucal. No ingerir en grandes cantidades.'],
    keywords: 'tourmaline toothpaste, pasta dental con turmalina, pasta dental HGW, pasta dental sin flúor, pasta dental sin triclosán, cuidado bucal natural, higiene oral, salud dental',
    featured: true
  },
  {
    id: 103,
    slug: 'tourmaline-toothpaste-version-negra',
    title: 'TOURMALINE TOOTHPASTE (Versión Negra)',
    subtitle: 'Pasta dental con Turmalina Negra y Xilitol',
    price: 12.00,
    categories: ['Cuidado personal'],
    primaryCategory: 'Cuidado personal',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/pasta-dental-con-turmalina-Negra.png',
    excerpt: 'La Pasta Dental HGW con Turmalina Negra está formulada para brindar una limpieza profunda y una protección integral de la salud bucal. Combina turmalina, menta, xilitol y extractos vegetales cuidadosamente seleccionados para combatir bacterias, reducir la placa dental y fortalecer encías.',
    advantages: [
      'Producto libre de flúor.',
      'Libre de triclosán.',
      'Potente frescura a menta.',
      'Cuidadosamente formulada con hierbas chinas tradicionales.',
      'Promueve una salud dental excepcional.'
    ],
    benefits: [
      { title: 'Limpieza profunda y natural', text: 'La turmalina posee propiedades abrasivas suaves que ayudan a remover manchas y placa dental sin dañar el esmalte.' },
      { title: 'Propiedades antibacterianas', text: 'Ayuda a inhibir el crecimiento bacteriano en la boca, favoreciendo la prevención de caries y mal aliento.' },
      { title: 'Fortalece encías y esmalte', text: 'Ayuda a mantener dientes y encías saludables.' },
      { title: 'Blanqueamiento natural', text: 'Contribuye a una sonrisa más limpia sin químicos agresivos.' }
    ],
    ingredients: [
      'Menta (frescura duradera y combate del mal aliento)',
      'Turmalina negra (propiedades minerales naturales)',
      'Madreselva (antibacteriana y antiinflamatoria tradicional)',
      'Xilitol (previene caries y protege el esmalte)',
      'Raíz de Bletilla striata (cuidado de las encías)'
    ],
    howToUse: [
      'Cepille sus dientes diariamente con Tourmaline Toothpaste.',
      'Utilice después de cada comida o al menos tres veces al día.',
      'Aplique una cantidad adecuada sobre el cepillo dental.',
      'Realice una limpieza profunda de dientes y encías.',
      'Enjuague con abundante agua.'
    ],
    presentation: 'Tubo de 120 gramos',
    netContent: '120 g',
    precautions: ['Uso tópico bucal.', 'Conservar a temperatura ambiente.'],
    keywords: 'pasta dental con turmalina negra, toothpaste hgW, pasta dental natural, pasta dental sin flúor, higiene bucal, encías saludables, aliento fresco',
    featured: true
  },
  {
    id: 104,
    slug: 'pasta-dental-con-probioticos',
    title: 'Pasta dental con Probioticos',
    subtitle: 'Sonrisa limpia, saludable y protegida con Lactobacillus',
    price: 12.00,
    categories: ['Cuidado personal'],
    primaryCategory: 'Cuidado personal',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/pasta-dental-con-probioticos-HGW.png',
    excerpt: 'La Pasta Dental HGW con Probióticos combina higiene bucal avanzada con los beneficios de lisados de Lactobacillus y compuestos derivados de fermentación láctica. Su fórmula libre de flúor y triclosán ayuda a mantener el equilibrio de la microbiota oral.',
    advantages: [
      'Fórmula libre de flúor.',
      'Fórmula libre de triclosán.',
      'Contiene lisado de Lactobacillus para la salud bucal.',
      'Contiene filtrado de leche fermentada con Lactobacillus.',
      'Refresca el aliento y favorece el equilibrio natural de la flora oral.',
      'Ayuda a prevenir la proliferación de bacterias dañinas.'
    ],
    benefits: [
      { title: 'Equilibrio de la microbiota oral', text: 'Los metabolitos derivados de probióticos mantienen una flora oral equilibrada, creando un entorno menos favorable para bacterias perjudiciales.' },
      { title: 'Apoyo al sistema inmunológico bucal', text: 'Estimula las defensas naturales de la mucosa oral, fortaleciendo la protección local.' },
      { title: 'Acción antibacteriana natural', text: 'Inhibe microorganismos asociados con problemas como caries y placa bacteriana.' },
      { title: 'Salud de encías y mucosas', text: 'Aminoácidos y polisacáridos favorecen el mantenimiento y la recuperación tisular.' },
      { title: 'Acción antioxidante y frescura', text: 'Reduce el estrés oxidativo provocado por radicales libres y aporta frescura prolongada.' }
    ],
    ingredients: [
      'Lisado de Lactobacillus',
      'Filtrado de leche fermentada con Lactobacillus',
      'Extracto de menta natural'
    ],
    howToUse: [
      'Aplicar una cantidad adecuada sobre el cepillo dental.',
      'Cepillar dientes, encías y lengua durante 2 a 3 minutos.',
      'Utilizar después de cada comida o al menos dos veces al día.',
      'Enjuagar con abundante agua.'
    ],
    presentation: 'Tubo de 120 gramos',
    netContent: '120 g',
    precautions: ['Apto para niños, adolescentes, adultos, personas mayores y mujeres en gestación o lactancia.'],
    keywords: 'pasta dental probiótica HGW, pasta dental con probióticos, toothpaste probiotics, Lactobacillus toothpaste, salud bucal natural',
    featured: true
  },
  {
    id: 105,
    slug: 'herbal-fresh-candy',
    title: 'Herbal Fresh Candy',
    subtitle: 'Caramelo duro con extractos herbales y flor de camelia',
    price: 5.80,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Herbal-Fresh-Candy-_-Caramelo-fresco-a-base-de-hierbas.png',
    excerpt: 'Herbal Fresh Candy combina un refrescante sabor floral con ingredientes de origen herbal en un práctico caramelo duro. Diseñado para refrescar el aliento y brindar una experiencia agradable después de las comidas o antes de reuniones.',
    advantages: [
      'Sabor agradable y refrescante a Flor de Camelia.',
      'Elaborado con ingredientes de origen natural.',
      'Fácil de llevar y consumir en cualquier lugar.',
      'Ideal después de las comidas o antes de reuniones.',
      'Formato compacto y conveniente.'
    ],
    benefits: [
      { title: 'Frescura bucal inmediata', text: 'Promueve una sensación de frescura duradera en la boca.' },
      { title: 'Aliento limpio', text: 'Ayuda a mantener el aliento fresco durante toda la jornada.' },
      { title: 'Extractos botánicos', text: 'Elaborado con extractos herbales seleccionados para el bienestar oral.' }
    ],
    howToUse: [
      'Consumir 1 caramelo cuando desees refrescar el aliento.',
      'Disolver lentamente en la boca.',
      'Repetir según preferencia y consumo responsable.'
    ],
    presentation: 'Frasco con 60 unidades aprox.',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'herbal fresh candy, caramelos hgw, frescura bucal, flor de camelia, caramelos funcionales',
    featured: false
  },
  {
    id: 106,
    slug: 'peptipro-candy',
    title: 'Peptipro Candy',
    subtitle: 'Péptidos de colágeno y ginseng en práctico caramelo duro',
    price: 5.80,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Peptipro-Candy-_-Caramelo-Peptipro.png',
    excerpt: 'Peptipro Candy HGW combina péptidos de colágeno y ginseng en un práctico caramelo duro. Su formato portátil permite disfrutar sus ingredientes sin necesidad de preparación, aportando nutrición a la piel, cabello y uñas con agradable sabor a ginseng.',
    advantages: [
      'Fácil de consumir en cualquier momento.',
      'Contiene péptidos de colágeno de alta biodisponibilidad.',
      'Delicioso sabor a ginseng.',
      'Formato portátil y práctico: no requiere preparación ni mezclas.',
      'Ideal para llevar contigo durante el día.'
    ],
    benefits: [
      { title: 'Cuidado de la piel', text: 'Contribuye a la firmeza y apariencia saludable de la piel.' },
      { title: 'Cabello y uñas', text: 'Ayuda a mantener la vitalidad y brillo de cabello y uñas.' },
      { title: 'Energía y vitalidad', text: 'El ginseng es tradicionalmente utilizado para apoyar la vitalidad y disminuir el cansancio.' }
    ],
    ingredients: [
      'Péptidos de colágeno',
      'Ginseng (Panax ginseng)',
      'Rosa mosqueta',
      'Soya',
      'Frijol mungo',
      'Guisante',
      'Sorbitol'
    ],
    howToUse: [
      'Retire el precinto y abra el envase.',
      'Consuma una o más unidades según su preferencia.',
      'Disfrute de su agradable sabor a ginseng.'
    ],
    presentation: 'Frasco de 60 unidades aprox.',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'peptipro candy, colageno hgw, ginseng, belleza piel, caramelos colageno',
    featured: false
  },
  {
    id: 107,
    slug: 'gestifruit-candy',
    title: 'Gestifruit Candy',
    subtitle: 'Caramelo duro con extracto de mandarina, espino blanco y melena de león',
    price: 5.80,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Gestifruit-Candy-_-Caramelo-Gestifruta.png',
    excerpt: 'Gestifrut Candy HGW es un caramelo duro con delicioso sabor a mandarina, diseñado para brindar una experiencia refrescante y digestiva en cualquier momento del día. Con extractos botánicos de melena de león y espino blanco.',
    advantages: [
      'Sabor vibrante y refrescante a mandarina.',
      'Práctico y fácil de transportar.',
      'Ideal para consumir en cualquier momento del día.',
      'Dulce con propósito y agradable sabor natural.',
      'Presentación cómoda para compartir.'
    ],
    benefits: [
      { title: 'Sensación refrescante y digestiva', text: 'Proporciona una agradable sensación digestiva tras las comidas.' },
      { title: 'Vitamina C natural', text: 'El extracto de mandarina aporta vitamina C de origen natural.' },
      { title: 'Nutrición botánica', text: 'Enriquecido con extracto de melena de león, espino blanco, ñame y fucoidan.' }
    ],
    ingredients: [
      'Extracto de mandarina (Citrus reticulata)',
      'Extracto de espino blanco',
      'Extracto de melena de león (Hericium erinaceus)',
      'Extracto de ñame silvestre',
      'Extracto de cebada',
      'Fucoidan',
      'Sorbitol'
    ],
    howToUse: [
      'Retire el precinto y levante la tapa del envase.',
      'Consuma una o más unidades según preferencia.',
      'Disfrute de su agradable sabor cítrico.'
    ],
    presentation: 'Frasco de 60 unidades aprox.',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'gestifruit candy, mandarina, melena de leon, caramelos digestivos hgw',
    featured: false
  },
  {
    id: 108,
    slug: 'biolacti-candy',
    title: 'Biolacti Candy',
    subtitle: 'Caramelo duro enriquecido con probióticos activos',
    price: 5.80,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Biolacti-Candy-_-Caramelo-Biolacti.png',
    excerpt: 'Biolacti Candy HGW es un caramelo duro enriquecido con probióticos que ayuda a mantener el equilibrio natural de la flora intestinal de forma práctica y deliciosa, con agradable sabor a leche descremada.',
    advantages: [
      'Soporte digestivo portátil y práctico.',
      'Aporta probióticos esenciales para el equilibrio intestinal.',
      'Bajo en azúcares.',
      'Delicioso sabor a leche descremada.',
      'Fácil de llevar y consumir en cualquier momento.'
    ],
    benefits: [
      { title: 'Equilibrio de la microbiota', text: 'Ayuda a mantener el equilibrio de la flora intestinal y favorece una digestión saludable.' },
      { title: 'Refuerzo de defensas', text: 'Apoya las defensas naturales del cuerpo mediante cepas probióticas activas.' },
      { title: 'Fácil absorción', text: 'Permite disfrutar de los beneficios de los probióticos en un formato cómodo y agradable.' }
    ],
    ingredients: [
      'Lactobacillus acidophilus',
      'Bifidobacterium lactis',
      'Streptococcus thermophilus',
      'Lactosa',
      'Leche descremada en polvo'
    ],
    howToUse: [
      'Retire el precinto y abra el envase.',
      'Consuma una o más unidades según preferencia.',
      'Puede disfrutarse en cualquier momento del día.'
    ],
    presentation: 'Frasco de 60 unidades aprox.',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'biolacti candy, probioticos hgw, lactobacillus, salud intestinal',
    featured: false
  },
  {
    id: 109,
    slug: 'blueberry-candy',
    title: 'Blueberry Candy',
    subtitle: 'Caramelos con polvo concentrado de arándanos azules',
    price: 5.80,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Blueberry-Candy-_-Caramelos-de-arandano.png',
    excerpt: 'Los Caramelos de Arándano HGW son una forma práctica, deliciosa y conveniente de disfrutar el poder antioxidante de los arándanos en cualquier momento del día. Ricos en antocianinas protectoras.',
    advantages: [
      'Nutritivos y saludables.',
      'Elaborados con el mayor cuidado para conservar su valor nutricional.',
      'Una dulce forma de llevar los arándanos contigo a todos lados.',
      'Aroma y sabor deliciosamente naturales.',
      'Ideal para endulzar tu día sin culpas.'
    ],
    benefits: [
      { title: 'Alto poder antioxidante', text: 'El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune y fortalece las membranas celulares.' },
      { title: 'Antocianinas protectoras', text: 'Contribuyen al cuidado de la salud visual y aportan protección celular contra radicales libres.' }
    ],
    ingredients: ['Polvo de arándanos azules (Blueberry)'],
    howToUse: [
      'Retire el precinto y levante la tapa del frasco.',
      'Tome la porción requerida (una o más unidades) y disfrute.'
    ],
    presentation: 'Frasco de 60 unidades',
    netContent: '30 g',
    shelfLife: '24 meses',
    precautions: ['No consumir si es alérgico a alguno de los ingredientes.'],
    keywords: 'blueberry candy, arandanos hgw, antocianinas, salud visual',
    featured: false
  },
  {
    id: 110,
    slug: 'coffee-candy',
    title: 'Coffee Candy',
    subtitle: 'Energía y sabor a café tostado en caramelo duro portátil',
    price: 5.80,
    categories: ['Alimentos', 'Serie Cafés Saludables', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Coffee-Candy-_-Caramelo-De-Cafe.png',
    excerpt: 'Coffee Candy HGW combina el delicioso sabor del café con la practicidad de un caramelo duro, ideal para disfrutar en momentos que requieren un impulso extra de energía, atención y concentración.',
    advantages: [
      'Combinación práctica de sabor y energía en formato de caramelo.',
      'Ideal para cuando no puedes preparar café tradicional pero necesitas un estímulo rápido.',
      'Portátil y discreto: llévalo en el bolso, cartera o auto, listo para consumir.'
    ],
    benefits: [
      { title: 'Efecto estimulante', text: 'Gracias a su contenido de café, ofrece un efecto estimulante y revitalizante.' },
      { title: 'Claridad mental', text: 'Ayuda a mejorar la concentración y a reducir la fatiga mental o física.' },
      { title: 'Protección celular', text: 'Aporta compuestos antioxidantes propios del grano de café.' }
    ],
    howToUse: [
      'Disolver un caramelo en la boca cuando necesite atención o energía.',
      'Ideal en jornadas laborales, estudio o viajes.'
    ],
    presentation: 'Frasco de 60 unidades aprox.',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'coffee candy, caramelo de cafe, energia hgw, cafe saludable',
    featured: false
  },
  {
    id: 111,
    slug: 'moruva-candy',
    title: 'Moruva Candy',
    subtitle: 'El poder vegetal de la Moringa y la Uva en caramelo funcional',
    price: 5.80,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Moruva-Candy-_-Dulces-Moruva.png',
    excerpt: 'Moruva Candy HGW combina el sabor y valor nutricional de la moringa y la uva en un práctico caramelo duro. Aporta antioxidantes naturales y riqueza de micronutrientes para toda la familia.',
    advantages: [
      'Presentación práctica y fácil de transportar.',
      'Formato en caramelo duro de fácil consumo.',
      'Sabor agradable para el consumo diario.',
      'Elaborado con ingredientes de origen vegetal.'
    ],
    benefits: [
      { title: 'Antioxidantes de la uva', text: 'Aporta antioxidantes naturales como el resveratrol que favorecen el bienestar cardiovascular.' },
      { title: 'Riqueza de la moringa', text: 'La moringa es conocida como el árbol de la vida por su densidad de vitaminas y minerales.' },
      { title: 'Vitalidad diaria', text: 'Apoya los niveles naturales de energía y el equilibrio general del organismo.' }
    ],
    ingredients: ['Moringa', 'Uva'],
    howToUse: [
      'Consumir de 1 a 3 caramelos al día.',
      'Dejar disolver lentamente en la boca.'
    ],
    presentation: 'Frasco con aprox. 60 unidades',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'moruva candy, moringa, uva, antioxidantes naturales, hgw',
    featured: false
  },
  {
    id: 112,
    slug: 'protector-intimo-diario-con-turmalina',
    title: 'Protector Intimo diario con Turmalina',
    subtitle: 'Banda aniónica de turmalina y suave capa de algodón puro',
    price: 5.00,
    categories: ['Cuidado personal'],
    primaryCategory: 'Cuidado personal',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Protector-Diario-_-Protector-intimo-Diario-con-turmalina.png',
    excerpt: 'Enjoyable Panty Liner HGW es un protector diario con banda de turmalina generadora de aniones y suave capa de algodón diseñada para brindar comodidad, frescura y protección durante todo el día.',
    advantages: [
      'Textura suave y ultrafina.',
      'Diseño discreto y anatómico.',
      'Alta capacidad de absorción y transpirabilidad.',
      'Banda aniónica con turmalina mineral.',
      'Ideal para uso diario higiénico.'
    ],
    benefits: [
      { title: 'Frescura e higiene continua', text: 'Ayuda a neutralizar olores y mantener una sensación prolongada de limpieza.' },
      { title: 'Cuidado de la piel íntima', text: 'Su capa de algodón previene irritaciones y roces incómodos.' },
      { title: 'Emisión de aniones', text: 'La banda de turmalina emite iones negativos que apoyan un ambiente higiénico saludable.' }
    ],
    ingredients: ['Celulosa', 'Tela no tejida de algodón', 'Extracto de turmalina', 'Polipropileno'],
    howToUse: [
      'Retire una unidad del empaque higiénico.',
      'Quite el envoltorio protector y fije a la ropa interior.',
      'Reemplace según sea necesario a lo largo del día.'
    ],
    presentation: 'Paquete con 30 unidades',
    netContent: '30 protectores',
    precautions: ['Solo para uso externo. No desechar en el inodoro.'],
    keywords: 'protector diario turmalina, toallas hgw, aniones, cuidado intimo femenino',
    featured: true
  },
  {
    id: 113,
    slug: 'toalla-sanitaria-dia-con-turmalina',
    title: 'Toalla Sanitaria Día con Turmalina',
    subtitle: 'Enjoyable Day Use HGW con tecnología de aniones y turmalina',
    price: 5.00,
    categories: ['Cuidado personal'],
    primaryCategory: 'Cuidado personal',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Toalla-Sanitaria-Dia-_-Toalla-Sanitaria-con-Turmalina-Uso-Dia.png',
    excerpt: 'Enjoyable Day Use HGW es una toalla sanitaria de uso diurno elaborada con una suave capa de algodón y banda de turmalina generadora de aniones. Diseñada para brindar comodidad, absorción superior y frescura durante las horas activas del día.',
    advantages: [
      'Textura suave y ultrafina.',
      'Excelente capacidad de absorción multicapa.',
      'Diseño anatómico con alas de sujeción firme.',
      'Banda aniónica de turmalina.',
      'Empaque higiénico sellado individualmente.'
    ],
    benefits: [
      { title: 'Protección activa diurna', text: 'Absorción rápida que mantiene la superficie seca y confortable.' },
      { title: 'Control de bacterias y olores', text: 'Los aniones de la turmalina contribuyen a inhibir bacterias y olores indeseados.' },
      { title: 'Suavidad extrema', text: 'Capa hipoalergénica de algodón para pieles sensibles.' }
    ],
    ingredients: ['Celulosa', 'Tela no tejida', 'Extracto de turmalina', 'Polipropileno'],
    howToUse: [
      'Retire la toalla de su empaque individual.',
      'Despegue la cinta protectora y adhiera a la ropa interior.',
      'Ajuste las alas laterales para máxima seguridad.'
    ],
    presentation: 'Paquete de 10 unidades',
    netContent: '10 toallas',
    precautions: ['Solo para uso externo. No desechar en el inodoro.'],
    keywords: 'toalla sanitaria dia turmalina, toallas hgw panama, salud femenina, aniones',
    featured: false
  },
  {
    id: 114,
    slug: 'toalla-sanitaria-noche-con-turmalina',
    title: 'Toalla Sanitaria Noche con Turmalina',
    subtitle: 'Enjoyable Night Use HGW para un descanso seguro y prolongado',
    price: 4.00,
    categories: ['Cuidado personal'],
    primaryCategory: 'Cuidado personal',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Toalla-Sanitaria-Noche-_-Toalla-Sanitaria-con-Turmalina-Uso-Noche.png',
    excerpt: 'Enjoyable Night Use HGW es una toalla sanitaria para uso nocturno elaborada con mayor longitud, cobertura posterior y banda de turmalina generadora de aniones para un descanso sin preocupaciones.',
    advantages: [
      'Mayor longitud y cobertura para la noche.',
      'Excelente capacidad de absorción para flujos intensos.',
      'Ajuste anatómico seguro y confortable.',
      'Banda aniónica con turmalina protectora.',
      'Empaque higiénico individual.'
    ],
    benefits: [
      { title: 'Tranquilidad durante el sueño', text: 'Evita fugas nocturnas gracias a su diseño alargado y barreras antifugas.' },
      { title: 'Efecto calmante y antibacteriano', text: 'La turmalina favorece la comodidad y la higiene durante las horas de descanso.' }
    ],
    ingredients: ['Celulosa', 'Tela no tejida', 'Extracto de turmalina', 'Polipropileno'],
    howToUse: [
      'Colocar antes de dormir asegurando el extremo posterior para máxima protección.'
    ],
    presentation: 'Paquete de 8 unidades',
    netContent: '8 toallas nocturnas',
    precautions: ['Uso externo. Conservar en ambiente seco.'],
    keywords: 'toallas noche turmalina, toalla sanitaria nocturna hgw, aniones higiene',
    featured: false
  },
  {
    id: 115,
    slug: 'press-on-nails-unas-acrilicas',
    title: 'Press On Nails / Uñas acrilicas',
    subtitle: 'Uñas postizas elegantes y reutilizables en minutos',
    price: 8.58,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Press-On-Nails-_-Unas-acrilicas-Postizas.png',
    excerpt: 'Press On Nails HGW son uñas postizas listas para usar que combinan belleza, practicidad y versatilidad. Diseñadas para lucir una manicura de salón en pocos minutos desde la comodidad de casa.',
    advantages: [
      'Aplicación rápida y sencilla sin lámpara UV.',
      'Diseños modernos, elegantes y resistentes.',
      'Reutilizables con el cuidado adecuado.',
      'No dañan las uñas naturales.',
      'Incluye adhesivos y accesorios básicos.'
    ],
    benefits: [
      { title: 'Ahorro de tiempo y dinero', text: 'Resultados profesionales en 10 minutos sin salir de casa.' },
      { title: 'Variedad y versatilidad', text: 'Permite cambiar de diseño según cada evento, reunión o sesión fotográfica.' }
    ],
    howToUse: [
      'Limpia y seca tus uñas naturales.',
      'Selecciona el tamaño adecuado para cada uña.',
      'Aplica el adhesivo incluido o pegamento especial.',
      'Presiona firmemente durante 10 a 15 segundos.',
      'Para retirar: remoja en agua tibia con jabón y retira con suavidad.'
    ],
    presentation: 'Caja con 30 piezas y accesorios',
    netContent: '30 piezas',
    keywords: 'press on nails, unas postizas, manicura rapida, accesorios hgw',
    featured: false
  },
  {
    id: 116,
    slug: 'pen-gel-boligrafo',
    title: 'Pen Gel / Boligrafo',
    subtitle: 'Bolígrafo oficial de gel HGW para oficina y negocio',
    price: 3.50,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Pen-Gel.jpg',
    excerpt: 'Bolígrafo de tinta de gel HGW con acabado corporativo elegante. Trazo suave, cómodo agarre y secado rápido, perfecto para tus presentaciones de negocio y notas de asesoría.',
    advantages: [
      'Escritura fluida con tinta de gel.',
      'Secado rápido sin borrones.',
      'Diseño corporativo exclusivo Health Green World.'
    ],
    benefits: [
      { title: 'Presentación profesional', text: 'Complemento ideal para asesores de negocio HGW al registrar nuevos socios y clientes.' }
    ],
    presentation: '1 Unidad',
    netContent: '1 Unidad',
    keywords: 'pen gel hgw, boligrafo gel, accesorios oficina hgw',
    featured: false
  },
  {
    id: 117,
    slug: 'mermelada-de-arandanos',
    title: 'Mermelada de Arandanos',
    subtitle: 'Concentración frutada de arándanos enteros con ricas antocianinas',
    price: 12.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Blueberry-Fruit-Tea-Jam-_-Te-de-arandanos-mermelada.png',
    excerpt: 'La Mermelada Frutada HGW es una deliciosa concentración de arándanos elaborada con el mayor cuidado para preservar todos sus valores nutricionales. Contiene trozos reales de arándano para tus desayunos saludables.',
    advantages: [
      'Una dulce forma de presentar arándanos en la mesa familiar.',
      'Nutritiva, saludable y rica en antioxidantes.',
      'Suave textura, agradable aroma y sabor deliciosamente natural.',
      'Puede contener trozos reales de arándanos.'
    ],
    benefits: [
      { title: 'Antioxidantes del arándano', text: 'Ayuda a regular la respuesta inmune y fortalece las defensas celulares.' },
      { title: 'Antocianinas bioactivas', text: 'Contribuye al cuidado de la salud visual y a la protección cardiovascular.' }
    ],
    ingredients: ['Arándano', 'Azúcar blanca granulada', 'Jarabe de malta', 'Pectina', 'Ácido cítrico'],
    howToUse: [
      'Retire el precinto de seguridad, destape y unte en tostadas, panes, galletas o postres.',
      'También puede diluirse en agua tibia como infusión frutada de té.'
    ],
    presentation: 'Frasco de 200 g',
    netContent: '200 g',
    shelfLife: '12 meses',
    precautions: ['No consumir si es alérgico a alguno de los ingredientes. Conservar refrigerado tras abrir.'],
    keywords: 'mermelada de arandanos hgw, blueberry jam, antioxidantes, desayunos saludables',
    featured: true
  },
  {
    id: 118,
    slug: 'plantillas-de-turmalina',
    title: 'Plantillas de turmalina',
    subtitle: 'Confort térmico y estimulación reflexológica en cada paso',
    price: 9.00,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Tourmaline-Healthcare-Insoles-_-Plantillas-de-turmalina-para-el-cuidado-de-la-salud.png',
    excerpt: 'Las Plantillas de Turmalina HGW están diseñadas para brindar confort y equilibrio energético durante todo el día. Estimulan puntos de reflexología plantar, favoreciendo la microcirculación y reduciendo la fatiga al caminar o estar de pie.',
    advantages: [
      'Uso discreto, cómodo y diario en cualquier calzado.',
      'Estimula el bienestar de forma natural y sin químicos.',
      'Recortable para adaptarse a diferentes tallas.',
      'Material duradero y fácil de limpiar.'
    ],
    benefits: [
      { title: 'Efecto térmico natural', text: 'La turmalina emite calor suave que alivia los pies fríos o cansados.' },
      { title: 'Puntos energéticos', text: 'Estimula puntos reflexológicos de las plantas de los pies.' },
      { title: 'Circulación mejorada', text: 'Ayuda a evitar la pesadez en piernas tras largas jornadas de pie.' }
    ],
    howToUse: [
      'Retira las plantillas originales de tu calzado si es necesario.',
      'Coloca las plantillas de turmalina HGW con el lado de la turmalina hacia arriba.',
      'Si es necesario, recorta siguiendo la guía marcada en el reverso.',
      'Úsalas a diario durante tus actividades cotidianas.'
    ],
    presentation: '1 par de plantillas recortables',
    netContent: '1 par',
    keywords: 'plantillas turmalina, reflexologia podal, descanso pies hgw, circulacion',
    featured: false
  },
  {
    id: 119,
    slug: 'ganubi-candy-ganoderma-candy',
    title: 'Ganubi Candy / Ganoderma Candy',
    subtitle: 'El poder del hongo Ganoderma lucidum, ñame y acerola en caramelo',
    price: 8.30,
    categories: ['Alimentos', 'Serie Candys Funcionales HGW'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Ganoderma-Candy-_-Caramelos-de-Ganoderma.png',
    excerpt: 'Ganubi Candy HGW ofrece la forma más dulce y práctica de integrar los beneficios del hongo Ganoderma lucidum en tu rutina diaria, complementado con acerola rica en vitamina C y ñame silvestre.',
    advantages: [
      'Práctico y fácil de consumir en cualquier momento.',
      'Sabor natural, dulce y suave.',
      'Portátil: ideal para oficina, viajes o reuniones.'
    ],
    benefits: [
      { title: 'Antioxidantes de Ganoderma', text: 'Ayuda a reducir el estrés oxidativo celular y refuerza el sistema inmunitario.' },
      { title: 'Bienestar y equilibrio', text: 'Apoya los procesos regenerativos naturales y la vitalidad corporal.' }
    ],
    ingredients: ['Extracto de Ganoderma lucidum', 'Ñame silvestre', 'Acerola', 'Sorbitol'],
    howToUse: ['Consumir 1 a 3 caramelos al día disolviendo lentamente en la boca.'],
    presentation: 'Frasco con 60 unidades aprox.',
    netContent: '30 g',
    shelfLife: '24 meses',
    keywords: 'ganubi candy, ganoderma lucidum, caramelos medicinales hgw, antioxidantes',
    featured: false
  },
  {
    id: 120,
    slug: 'hervidor-electrico',
    title: 'Hervidor Eléctrico',
    subtitle: 'Hervidor rápido de acero inoxidable para bebidas funcionales HGW',
    price: 60.00,
    categories: ['Equipo', 'Serie Cafés Saludables'],
    primaryCategory: 'Equipo',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Hervidor-Electrico-_-Hervidor-Electrico.png',
    excerpt: 'El Hervidor Eléctrico HGW es el aliado ideal para tu rutina de bienestar: hierve agua en pocos minutos con apagado automático, facilitando la preparación óptima de tus cafés funcionales, tés y Choco Blue.',
    advantages: [
      'Hierve agua en minutos con gran eficiencia energética.',
      'Diseño moderno, higiénico y fácil de limpiar.',
      'Base giratoria 360° y apagado automático de seguridad.'
    ],
    benefits: [
      { title: 'Preparación ideal', text: 'Alcanza la temperatura precisa para activar los bioactivos del café y tés de hierbas HGW.' },
      { title: 'Ahorro de tiempo', text: 'Optimiza la rutina matutina en el hogar o la oficina.' }
    ],
    howToUse: [
      'Llenar con agua hasta el nivel indicado.',
      'Colocar sobre la base y presionar el interruptor.',
      'En pocos minutos verter en la taza con su café o infusión HGW favorita.'
    ],
    presentation: '1 Unidad en caja con base eléctrica',
    netContent: '1 Unidad',
    keywords: 'hervidor electrico hgw, tetera electrica, cafe saludable hgw equipo',
    featured: false
  },
  {
    id: 121,
    slug: 'proteina-de-soja-con-arandanos-en-polvo',
    title: 'Proteína de soja con arándanos en polvo',
    subtitle: 'Aislado vegetal con proteína de maní, arándano, konjac y lecitina',
    price: 32.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Blueberry-Soy-Protein-Powder-_-Proteina-de-soja-con-arandanos-en-polvo.png',
    excerpt: 'La Proteína de Soya y Arándano HGW es una bebida nutritiva completa que combina aislado de soya, proteína de maní, arándanos antioxidantes y fibra de konjac para el mantenimiento muscular y bienestar general.',
    advantages: [
      'Nutritivo y saludable para tu día.',
      'Libre de octógonos nutricionales.',
      'Proteínas vegetales completas con todos los aminoácidos esenciales.',
      'Ligeramente dulce y de fácil digestión.'
    ],
    benefits: [
      { title: 'Proteína Aislada de Soya', text: 'Fuente de isoflavonas y aminoácidos que favorecen la salud cardiovascular y muscular.' },
      { title: 'Proteína de Maní', text: 'Rica en arginina para la recuperación física en caminatas y deporte.' },
      { title: 'Arándano', text: 'Aporte de antocianinas protectoras para la formación de colágeno y defensas.' },
      { title: 'Konjac y Lecitina', text: 'Fibra dietética viscosa que promueve la saciedad y ayuda a regular el colesterol.' }
    ],
    howToUse: [
      'Disolver un sachet en 200 ml de agua tibia o leche vegetal.',
      'Batir vigorosamente hasta lograr una consistencia homogénea y cremosa.'
    ],
    presentation: 'Caja con 12 sachets (240 g)',
    netContent: '240 g',
    precautions: ['Contiene derivados de soya y maní. No consumir si es alérgico.'],
    keywords: 'proteina de soja con arandanos, proteina vegetal hgw, konjac, batido proteico',
    featured: true
  },
  {
    id: 122,
    slug: 'protector-de-cuello-autocalentable-de-turmalina',
    title: 'Protector de cuello autocalentable de turmalina',
    subtitle: 'Alivio cervical térmico natural sin electricidad ni baterías',
    price: 16.00,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Tourmaline-Self-Heating-Neck-Protector-_-Protector-de-cuello-autocalentable-de-turmalina.png',
    excerpt: 'El Protector de Cuello de Turmalina HGW proporciona soporte cervical y confort térmico natural. Sus partículas de turmalina activan calor al contacto con la piel, liberando tensiones musculares acumuladas.',
    advantages: [
      'Turmalina activa: emite calor natural e infrarrojo lejano por fricción.',
      'Diseño ajustable con velcro, ligero y ergonómico.',
      'No requiere electricidad ni baterías.',
      'Ideal en casa, oficina o viajes frente al computador.'
    ],
    benefits: [
      { title: 'Alivio de rigidez cervical', text: 'Ayuda a relajar contracturas y molestias de cuello y trapecio.' },
      { title: 'Microcirculación', text: 'Favorece el flujo sanguíneo local y la sensación de descanso.' }
    ],
    howToUse: [
      'Friccionar ligeramente la cara interior de turmalina antes de colocarla.',
      'Ajustar alrededor del cuello con el cierre de velcro.',
      'Usar de 15 a 45 minutos al día según tolerancia.'
    ],
    presentation: '1 Unidad ajustable en estuche',
    netContent: '1 Unidad',
    precautions: ['No aplicar sobre heridas abiertas. Suspender si el calor es excesivo.'],
    keywords: 'cuellera turmalina, protector de cuello autocalentable, dolor cervical, bienestar hgw',
    featured: false
  },
  {
    id: 123,
    slug: 'vino-de-arandanos',
    title: 'Vino de arándanos',
    subtitle: 'Exclusivo fermentado de frutos de arándano rico en antioxidantes',
    price: 36.00,
    categories: ['Licores'],
    primaryCategory: 'Licores',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Blueberry-Wine-_-Vino-de-arandanos.png',
    excerpt: 'Blueberry Wine HGW es un vino especial elaborado exclusivamente a partir de frutos de arándanos seleccionados. Posee un sabor refinado, frutal y un alto tenor de antocianinas y fitonutrientes protectores.',
    advantages: [
      'Elaborado 100% a partir de arándanos naturales.',
      'Aporte significativo de polifenoles y antocianinas.',
      'Sabor elegante y aromático ideal para ocasiones especiales.'
    ],
    benefits: [
      { title: 'Defensa antioxidante', text: 'Compuestos bioactivos que protegen las células del daño oxidativo.' },
      { title: 'Salud neuronal y circulatoria', text: 'Favorece la respuesta neuronal y la salud de los vasos sanguíneos.' }
    ],
    ingredients: ['Frutos de arándanos fermentados', 'Sulfitos naturales'],
    howToUse: [
      'Servir a una temperatura recomendada de 12 a 14 °C.',
      'Descorchar 30 minutos antes de consumir para permitirle respirar y exaltar sus aromas.'
    ],
    presentation: 'Botella de vidrio de 750 ml',
    netContent: '750 ml',
    precautions: ['El consumo excesivo de alcohol es dañino para la salud. Venta prohibida a menores de 18 años.'],
    keywords: 'vino de arandanos hgw, blueberry wine, licores saludables, antioxidantes',
    featured: false
  },
  {
    id: 124,
    slug: 'fresh-drink-chang-jing-jing',
    title: 'Fresh Drink Chang Jing Jing',
    subtitle: 'Bebida digestiva verde con cebada, bayas de goji y clorofila',
    price: 13.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Fresh-Drink-Chang-JingJing-_-Bebida-Fresca-Chang-JingJing.png',
    excerpt: 'Fresh Drink Chang Jing Jing HGW es una selecta mezcla botánica instantánea rica en clorofila y fibra natural que ayuda a depurar el colon y promover una digestión limpia y renovadora.',
    advantages: [
      'Instantáneo y de fácil disolución en agua fría.',
      'Bebida verde, refrescante y digestiva.',
      'Rico en fibra soluble y cero grasas.',
      'Sabor fresco y natural a hierba verde.'
    ],
    benefits: [
      { title: 'Hierba de cebada', text: 'Aporte de vitaminas, minerales y clorofila alcalinizante.' },
      { title: 'Bayas de goji', text: 'Ricas en antioxidantes que refuerzan el sistema inmunológico.' },
      { title: 'Diente de león y Regaliz (Gan Cao)', text: 'Coadyuvante en la función hepática y alivio de molestias digestivas.' },
      { title: 'Tránsito intestinal', text: 'La fibra ayuda a regular el tránsito y combatir el estreñimiento.' }
    ],
    ingredients: [
      'Cebada en polvo',
      'Bayas de goji',
      'Gan Cao (raíz de regaliz)',
      'Diente de león',
      'Crisantemo',
      'Ácido cítrico'
    ],
    howToUse: [
      'Vierta el contenido de un sachet en 500 ml de agua.',
      'Agite suavemente hasta disolver completamente y beba a lo largo de la mañana.'
    ],
    presentation: 'Caja con 6 sachets de 21 g',
    netContent: '126 g',
    shelfLife: '24 meses',
    keywords: 'fresh drink chang jing jing, detox colon, clorofila hgw, bebida verde digestiva',
    featured: true
  },
  {
    id: 125,
    slug: 'te-moldeador-profesional-pro-shaping-tea',
    title: 'Té moldeador profesional / Pro Shaping Tea',
    subtitle: 'Infusión tonificante con Té Verde, Ginseng, Casia y Espino Blanco',
    price: 23.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Pro-Shaping-Tea-_-Te-moldeador-profesional.png',
    excerpt: 'Pro-Shaping Tea HGW es una mezcla de hierbas milenarias en bolsitas filtrantes desarrollada para preparar una aromática infusión digestiva que ayuda a metabolizar lípidos y mantener la silueta.',
    advantages: [
      'Concentrado de hierbas en bolsita filtrante práctica.',
      'Mezcla digestiva, tonificante y aromática.',
      'Ingredientes tradicionales de la farmacopea oriental.',
      'Cero calorías, ideal para rutinas de control de peso.'
    ],
    benefits: [
      { title: 'Té Verde', text: 'Potente antioxidante que coadyuva en el metabolismo de grasas y control de peso.' },
      { title: 'Semillas de Casia', text: 'Favorecen el flujo sanguíneo y el tránsito intestinal.' },
      { title: 'Espino Blanco y Ginseng', text: 'Apoyan el sistema cardiovascular y la energía vital.' },
      { title: 'Arroz Rojo Fermentado', text: 'Tradicionalmente usado para apoyar el perfil de colesterol.' }
    ],
    ingredients: [
      'Té verde (Camellia sinensis)',
      'Espino (Crataegus spp.)',
      'Sang Ye (Folium mori)',
      'Semen Cassiae',
      'Ginseng (Panax ginseng)',
      'Arroz (Oryza sativa)'
    ],
    howToUse: [
      'Coloque una bolsita filtrante en una taza.',
      'Agregue 250 ml de agua hirviendo y deje reposar 5 minutos antes de beber.'
    ],
    presentation: 'Caja con 24 bolsitas filtrantes (72 g)',
    netContent: '72 g',
    shelfLife: '36 meses',
    keywords: 'pro shaping tea, te moldeador hgw, control de peso, te verde adelgazante',
    featured: true
  },
  {
    id: 126,
    slug: 'choco-gano',
    title: 'Choco Gano',
    subtitle: 'Exquisito cacao natural con Ganoderma lucidum y leche descremada',
    price: 40.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Choco-Gano-_-Chocolate-con-Ganoderma.png',
    excerpt: 'Choco Gano HGW es una bebida instantánea reconfortante que combina el sabor del cacao puro con leche descremada y el valioso hongo Ganoderma lucidum para nutrir tu organismo con energía balanceada.',
    advantages: [
      'Listo en instantes con agua o leche caliente.',
      'Sobres individuales de 33 g que garantizan frescura y dosificación perfecta.',
      'Perfil bajo en grasas gracias a la leche descremada.',
      'Aporte nutritivo y antioxidante del Ganoderma.'
    ],
    benefits: [
      { title: 'Energía saludable', text: 'El cacao natural brinda placer y vitalidad sin sensación pesada.' },
      { title: 'Inmunomodulación', text: 'El Ganoderma lucidum apoya activamente las defensas y el bienestar celular.' }
    ],
    howToUse: [
      'Vierta el contenido de un sachet de 33 g en una taza grande.',
      'Agregue 180 ml de agua o leche caliente.',
      'Mezcle bien hasta obtener una textura suave y espumosa.'
    ],
    presentation: 'Caja de 20 sachets de 33 g (660 g)',
    netContent: '660 g',
    keywords: 'choco gano, chocolate con ganoderma, bebidas calientes hgw, antioxidantes cacao',
    featured: true
  },
  {
    id: 127,
    slug: 'choco-blue',
    title: 'Choco Blue',
    subtitle: 'Bebida de cacao natural con arándanos y leche descremada',
    price: 40.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Choco-Blue-_-Chocolate-con-Arandanos.png',
    excerpt: 'Choco Blue HGW es una bebida instantánea que combina el chocolate gourmet con el poder antioxidante del arándano azul. Una opción deliciosa para desayunos y meriendas de toda la familia.',
    advantages: [
      'Sabor delicioso, reconfortante y frutal.',
      'Versátil: disfrútelo caliente o frío con agua o leche.',
      'Sobres individuales prácticos para el hogar o la oficina.'
    ],
    benefits: [
      { title: 'Flavonoides del cacao', text: 'Protege las células contra el estrés oxidativo.' },
      { title: 'Antocianinas de arándano', text: 'Favorece la salud cardiovascular y visual.' },
      { title: 'Proteínas y calcio', text: 'Nutrición balanceada con bajo contenido de grasa.' }
    ],
    howToUse: [
      'Disolver un sachet en una taza de agua o leche caliente, mezclar y disfrutar.'
    ],
    presentation: 'Caja con 20 sachets de 33 g (660 g)',
    netContent: '660 g',
    keywords: 'choco blue, chocolate con arandanos hgw, bebidas funcionales, nutricion familiar',
    featured: true
  },
  {
    id: 128,
    slug: 'peptido-de-colageno-de-arandano',
    title: 'Péptido de colágeno de arándano',
    subtitle: 'Colágeno hidrolizado, tripéptidos y concentrado de frutas y verduras',
    price: 29.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Blueberry-Collagen-Peptide-_-Peptido-de-colageno-de-arandano.png',
    excerpt: 'El Péptido de Colágeno y Arándanos HGW combina colágeno hidrolizado de alta absorción con jugo concentrado de 11 frutas y verduras, vitaminas y minerales para regenerar cartílagos, articulaciones y piel.',
    advantages: [
      'Consistencia en gelatina líquida/puré para absorción celular inmediata.',
      'Fresco y agradable sabor frutal natural.',
      'Elaborado con jugo de cereza, arándanos, açaí, acerola y uva.',
      'Fortificado con vitaminas A, C, complejo B, D, E y minerales.'
    ],
    benefits: [
      { title: 'Regeneración celular y articular', text: 'Nutre cartílagos, ligamentos y articulaciones protegiendo contra el desgaste.' },
      { title: 'Elasticidad y firmeza de la piel', text: 'Estimula la producción endógena de colágeno reduciendo líneas de expresión.' },
      { title: 'Complejo multivitamínico', text: 'Micronutrientes esenciales que refuerzan la respuesta inmunológica.' }
    ],
    ingredients: [
      'Péptido y tripéptido de colágeno',
      'Jugo de arándanos, cereza, manzana, piña, papaya, kiwi, limón, naranja sanguina, acerola, açaí y uva',
      'Vitaminas A, C, B1, B6, B12, D, E',
      'Calcio, magnesio, hierro, zinc',
      'Fructooligosacáridos (FOS)'
    ],
    howToUse: [
      'Consumir un sobre diario directamente o diluido en agua o jugo.',
      'Tomar preferiblemente en la mañana o antes de dormir.'
    ],
    presentation: 'Caja con 12 sobres de 25 g (300 g total)',
    netContent: '300 g',
    precautions: ['No consumir si es alérgico a los componentes.'],
    keywords: 'colageno de arandano hgw, peptidos de colageno, rejuvenecimiento piel articulaciones',
    featured: true
  },
  {
    id: 129,
    slug: 'rodillera-autocalentable-de-turmalina',
    title: 'Rodillera autocalentable de turmalina',
    subtitle: 'Soporte articular térmico con nanoturmalina e imanes',
    price: 24.00,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Tourmaline-Self-Heating-Knee-Protector-_-Protector-de-rodilla-autocalentable-de-turmalina.png',
    excerpt: 'El Protector de Rodilla de Turmalina HGW brinda soporte, estabilidad y calor natural a las articulaciones de la rodilla, aliviando molestias causadas por desgaste, deportes o bajas temperaturas.',
    advantages: [
      'Turmalina activa que emite calor natural e infrarrojo lejano por contacto.',
      'Diseño ergonómico y elástico adaptable a la rodilla.',
      'Sin electricidad ni baterías: seguro y reutilizable.',
      'Transpirable para permitir libertad de movimiento.'
    ],
    benefits: [
      { title: 'Alivio de rigidez y dolor', text: 'Reduce la tensión y molestias articulares en personas con desgaste o deportistas.' },
      { title: 'Estimulación circulatoria', text: 'El calor penetrante favorece la oxigenación y relajación de ligamentos.' }
    ],
    howToUse: [
      'Colocar directamente sobre la piel de la rodilla limpia y seca.',
      'Ajustar firmemente pero sin comprimir en exceso.',
      'Friccionar ligeramente para activar el calor.',
      'Usar de 30 minutos a 2 horas al día.'
    ],
    presentation: '1 par de rodilleras ajustables',
    netContent: '1 par',
    keywords: 'rodillera turmalina hgw, rodillera autocalentable, dolor rodilla ligamentos',
    featured: false
  },
  {
    id: 130,
    slug: 'collar-de-turmalina',
    title: 'Collar de turmalina',
    subtitle: 'Pieza artesanal de piedras naturales de turmalina protectora',
    price: 18.00,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Collar-de-Tourmalina-_-Collar-de-Tourmalina.png',
    excerpt: 'El Collar de Turmalina HGW es una pieza artesanal de piedras naturales que combina elegancia y bienestar. La turmalina es venerada por su capacidad de neutralizar radiaciones electromagnéticas y aportar equilibrio.',
    advantages: [
      'Diseño elegante y minimalista para uso diario.',
      'Elaborado artesanalmente con piedras naturales de turmalina.',
      'Longitud adaptable y cierre seguro.',
      'Protección contra ondas electromagnéticas de móviles y pantallas.'
    ],
    benefits: [
      { title: 'Purificación energética', text: 'La turmalina equilibra los estados de ánimo y transmuta energías pesadas.' },
      { title: 'Emisión de iones negativos', text: 'Crea una sensación de armonía y vitalidad alrededor del campo corporal.' }
    ],
    ingredients: ['Piedras naturales de turmalina'],
    howToUse: [
      'Usar como accesorio diario en el cuello.',
      'Limpieza recomendada: sumergir en solución salina suave (1 cucharadita de sal en 500 ml de agua) durante 4 horas y secar con paño limpio.'
    ],
    presentation: '1 Unidad en estuche protector',
    netContent: '1 Unidad',
    keywords: 'collar de turmalina hgw, joyeria energetica, piedras naturales, proteccion ondas',
    featured: false
  },
  {
    id: 131,
    slug: 'almohada-magnetica-de-turmalina',
    title: 'Almohada magnética de turmalina',
    subtitle: 'Soporte cervical con imanes terapéuticos y turmalina',
    price: 38.00,
    categories: ['Equipo'],
    primaryCategory: 'Equipo',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Tourmaline-Magnet-Pillow-_-Almohada-magnetica-de-turmalina.png',
    excerpt: 'La Almohada Magnética de Turmalina HGW está diseñada para brindar confort y alineación a la zona cervical durante el descanso. Su combinación de imanes y partículas de turmalina promueve un sueño profundo y reparador.',
    advantages: [
      'Diseño ergonómico que abraza la curva natural del cuello.',
      'Material hipoalergénico, suave y transpirable.',
      'Terapia magnética pasiva sin cables ni baterías.',
      'Fácil de usar en casa, sillón de descanso o viajes.'
    ],
    benefits: [
      { title: 'Alivio de tensión cervical', text: 'Disminuye contracturas musculares matutinas y dolores de cabeza por tensión.' },
      { title: 'Calor suave constante', text: 'La turmalina refleja el calor corporal promoviendo la relajación neuromuscular.' }
    ],
    howToUse: [
      'Colocar en la base del cuello al descansar o dormir.',
      'Puede usarse todas las noches para optimizar la postura.'
    ],
    presentation: '1 Unidad en funda protectora',
    netContent: '1 Unidad',
    keywords: 'almohada magnetica turmalina hgw, descanso cervical, sueno reparador',
    featured: false
  },
  {
    id: 153,
    slug: 'protector-de-cintura-de-turmalina',
    title: 'Protector de cintura de turmalina',
    subtitle: 'Cinturón lumbar con nanoturmalina e imanes para soporte y alivio',
    price: 28.00,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Tourmaline-Waist-Protector-_-Protector-de-cintura-de-turmalina.png',
    excerpt: 'El Protector de Cintura de Turmalina HGW genera calor terapéutico natural gracias a la nanoturmalina e imanes incrustados. Brinda soporte lumbar firme, alivia dolores de espalda baja y ayuda a corregir la postura.',
    advantages: [
      'Materiales resistentes, elásticos y transpirables.',
      'Sin baterías ni cables: calor activado por contacto corporal.',
      'Doble faja elástica de ajuste milimétrico.',
      'Diseño ergonómico para uso sentado o de pie.'
    ],
    benefits: [
      { title: 'Alivio lumbar profundo', text: 'El calor natural relaja los músculos paravertebrales reduciendo el lumbago.' },
      { title: 'Corrección postural', text: 'Estabiliza la columna vertebral durante cargas de peso o largas horas sentado.' },
      { title: 'Mejora de la circulación', text: 'Desinflama tejidos y promueve el retorno venoso en la zona baja.' }
    ],
    howToUse: [
      'Colocar directamente sobre la piel seca o prenda delgada en la zona lumbar.',
      'Ajustar las correas elásticas hasta sentir firmeza y comodidad.',
      'Friccionar unos segundos para acelerar el efecto térmico.',
      'Usar de 30 minutos a 2 horas al día.'
    ],
    presentation: '1 Cinturón lumbar ajustable',
    netContent: '1 Unidad',
    keywords: 'protector de cintura turmalina, faja lumbar hgw, calor terapeutico dolor espalda',
    featured: true
  },
  {
    id: 154,
    slug: 'colgante-piedra-energetica',
    title: 'Colgante Piedra Energética',
    subtitle: 'Energy Stone Pendant con tecnología de iones negativos y turmalina',
    price: 15.00,
    categories: ['Accesorios'],
    primaryCategory: 'Accesorios',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Colgante-Piedra-Energetica-_-Colgante-Piedra-Energetica.png',
    excerpt: 'El Colgante de Piedra Energética HGW combina minerales volcánicos, turmalina y alta emisión de aniones para promover la lucidez mental, reducir la fatiga y proteger el campo bioeléctrico del cuerpo.',
    advantages: [
      'Emisión continua de más de 2000 iones negativos por segundo.',
      'Diseño pulido en medallón negro con cordón de alta durabilidad.',
      'Comprobado mediante mediciones GDV de circulación energética corporal.'
    ],
    benefits: [
      { title: 'Oxigenación cerebral', text: 'Los aniones aumentan el flujo de oxígeno al cerebro mejorando la concentración.' },
      { title: 'Reducción de somnolencia y fatiga', text: 'Eleva los niveles de vitalidad durante jornadas de trabajo intenso.' },
      { title: 'Estabilización del sistema nervioso', text: 'Favorece la calma mental y la resistencia al estrés cotidiano.' }
    ],
    howToUse: [
      'Llevar suspendido al cuello sobre el pecho durante todo el día.',
      'También puede colocarse bajo la almohada durante la noche.'
    ],
    presentation: '1 Medallón con cordón ajustable en estuche de regalo',
    netContent: '1 Unidad',
    keywords: 'colgante piedra energetica hgw, energy stone pendant, iones negativos, aniones',
    featured: false
  },
  {
    id: 155,
    slug: 'cafe-con-cordyceps',
    title: 'Café con cordyceps',
    subtitle: 'Café instantáneo premium fortificado con micelio de Cordyceps sinensis',
    price: 23.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Cordyceps-Coffee-Cream-_-Cafe-cordyceps-con-Crema.png',
    excerpt: 'Cordyceps Coffee Cream HGW combina café soluble seleccionado con micelio de Cordyceps sinensis y crema no láctea. Proporciona energía sostenida, fortalece los pulmones y estimula el sistema inmunológico.',
    advantages: [
      'Práctico e instantáneo: disolución perfecta.',
      'Textura cremosa y aroma tostado suave.',
      'Fortificado con el hongo milenario Cordyceps sinensis.',
      'Libre de octógonos.'
    ],
    benefits: [
      { title: 'Potencia respiratoria y renal', text: 'El Cordyceps apoya la función pulmonar y es coadyuvante en afecciones bronquiales.' },
      { title: 'Energía y rendimiento atlético', text: 'Aumenta la producción celular de ATP, reduciendo el cansancio físico y mental.' },
      { title: 'Propiedades antioxidantes', text: 'Protege las células contra el envejecimiento prematuro.' }
    ],
    ingredients: [
      'Café instantáneo en polvo',
      'Micelio de Cordyceps (Cordyceps sinensis) en polvo',
      'Arándano en polvo',
      'Crema no láctea'
    ],
    howToUse: [
      'Vierta el contenido de 1 sachet en una taza.',
      'Agregue 150 ml de agua caliente, mezcle bien y disfrute.'
    ],
    presentation: 'Caja con 12 sobres de 15 g (180 g)',
    netContent: '180 g',
    shelfLife: '24 meses',
    keywords: 'cafe con cordyceps hgw, cordyceps sinensis, energia pulmonar, cafe saludable',
    featured: true
  },
  {
    id: 156,
    slug: 'cafe-de-arandanos',
    title: 'Café de arándanos',
    subtitle: 'Café instantáneo fortificado con superalimento de arándanos azules',
    price: 23.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Blueberry-Coffee-_-Cafe-de-arandanos.png',
    excerpt: 'Blueberry Coffee HGW combina café gourmet soluble con arándanos deshidratados de alta pureza. Rico en antocianinas con actividad antioxidante 50 veces mayor que la vitamina E para proteger la visión y la memoria.',
    advantages: [
      'Práctico e instantáneo para cualquier momento del día.',
      'Fortificado con arándanos ricos en antocianinas bioactivas.',
      'Suave textura, agradable aroma y delicioso sabor equilibrado.',
      '100% biodisponible para el organismo.'
    ],
    benefits: [
      { title: 'Protección visual y cerebral', text: 'Las antocianinas mejoran la microcirculación ocular y fortalecen la memoria.' },
      { title: 'Refuerzo inmunológico', text: 'Potente acción antioxidante que neutraliza los radicales libres.' },
      { title: 'Metabolismo activo', text: 'Apoya la quema natural de grasas y el control de lípidos en sangre.' }
    ],
    ingredients: ['Café instantáneo en polvo', 'Arándanos en polvo', 'Crema no láctea'],
    howToUse: [
      'Vierta 1 sachet en una taza, añada 150 ml de agua caliente, revuelva y disfrute.'
    ],
    presentation: 'Caja con 12 sobres de 15 g (180 g)',
    netContent: '180 g',
    shelfLife: '12 meses',
    keywords: 'cafe de arandanos hgw, blueberry coffee, salud visual, cafe con antioxidantes',
    featured: true
  },
  {
    id: 157,
    slug: 'cafe-soluble-de-ganoderma',
    title: 'Café soluble de Ganoderma',
    subtitle: 'Café instantáneo con extracto puro del hongo Ganoderma lucidum (Reishi)',
    price: 23.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Ganoderma-Soluble-Coffee-_-Cafe-soluble-de-Ganoderma.png',
    excerpt: 'Ganoderma Soluble Coffee HGW une café premium y el legendario hongo Reishi (Ganoderma lucidum). Proporciona estimulación mental limpia con propiedades antiinflamatorias y moduladoras del sistema inmune.',
    advantages: [
      'Práctico, aromático e instantáneo.',
      'Enriquecido con extracto estandarizado de Ganoderma lucidum.',
      'Bajo en acidez y suave con el estómago.',
      'Reduce la fatiga mental y física.'
    ],
    benefits: [
      { title: 'Inmunomodulación celular', text: 'Los polisacáridos y triterpenos del Ganoderma regulan las defensas corporales.' },
      { title: 'Disminución del estrés oxidativo', text: 'Protege contra toxinas celulares y favorece la desinflamación sistémica.' },
      { title: 'Claridad mental', text: 'Estimula la concentración sin taquicardias ni bajones energéticos.' }
    ],
    ingredients: ['Café instantáneo en polvo', 'Ganoderma lucidum', 'Crema no láctea', 'Azúcar granulada blanca'],
    howToUse: [
      'Disolver 1 sachet en 150 ml de agua caliente, mezclar homogéneamente y beber.'
    ],
    presentation: 'Caja con 12 sobres de 15 g (180 g)',
    netContent: '180 g',
    shelfLife: '24 meses',
    keywords: 'cafe con ganoderma hgw, reishi coffee, cafe soluble hgw, defensas inmunologicas',
    featured: true
  },
  {
    id: 158,
    slug: 'cafe-cordyceps-coffee-ceps',
    title: 'Café Cordyceps / Coffee Ceps',
    subtitle: 'Fórmula sin azúcar con micelio fermentado de Cordyceps sinensis',
    price: 20.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Coffee-Ceps-_-Cafe-cordyceps-sin-azucar.png',
    excerpt: 'Coffee Ceps HGW es una bebida instantánea sin azúcar refinada que combina café negro con micelio fermentado de Cordyceps sinensis. Diseñado para quienes cuidan sus niveles de glucosa y buscan vigor físico.',
    advantages: [
      'Sin azúcar agregada: ideal para dietas bajas en carbohidratos.',
      'Rico en aminoácidos esenciales y vitaminas del micelio fermentado.',
      'Práctico e instantáneo para llevar al gimnasio o trabajo.'
    ],
    benefits: [
      { title: 'Resistencia física y muscular', text: 'Reduce la fatiga muscular y apoya la recuperación tras el ejercicio.' },
      { title: 'Salud renal y respiratoria', text: 'Coadyuvante en la función de riñones y pulmones.' }
    ],
    howToUse: [
      'Disolver un sachet de 3.5 g en 150 ml de agua caliente. Tomar por la mañana o antes del entrenamiento.'
    ],
    presentation: 'Caja con 12 sobres de 3.5 g (42 g)',
    netContent: '42 g',
    shelfLife: '24 meses',
    keywords: 'coffee ceps, cafe cordyceps sin azucar, hgw fitness, cafe para diabeticos',
    featured: false
  },
  {
    id: 159,
    slug: 'cafe-con-te-negro-blacktea-coffee',
    title: 'Café con Te Negro / BlackTea Coffee',
    subtitle: 'Mezcla sin azúcar de café y té negro para máxima agilidad mental',
    price: 20.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/BlackTea-Coffee-_-Cafe-Te-Negro.png',
    excerpt: 'Black Tea Coffee HGW combina granos de café seleccionados con hojas fermentadas de té negro en una fórmula sin azúcar. Altamente beneficioso para estimular la corteza cerebral, la memoria y la digestión.',
    advantages: [
      'Sin azúcar y endulzado de manera natural.',
      'Sinergia estimulante entre la teína y cafeína para enfoque prolongado.',
      'Digestivo y tonificante.'
    ],
    benefits: [
      { title: 'Agilidad mental y memoria', text: 'Promueve reacciones de pensamiento más rápidas y disminuye la pesadez mental.' },
      { title: 'Función gastrointestinal', text: 'Coadyuva en la secreción de jugos digestivos y alivia el estreñimiento.' },
      { title: 'Efecto diurético', text: 'Ayuda a eliminar la retención de líquidos y edemas.' }
    ],
    howToUse: [
      'Disolver 1 sachet de 3.5 g en 150 ml de agua caliente y disfrutar del aroma tostado del té negro.'
    ],
    presentation: 'Caja con 12 sobres de 3.5 g (42 g)',
    netContent: '42 g',
    shelfLife: '24 meses',
    precautions: ['Pacientes con cálculos o anemia severa deben consultar antes con su médico.'],
    keywords: 'black tea coffee, cafe con te negro hgw, concentracion mental, bebida digestiva',
    featured: false
  },
  {
    id: 160,
    slug: 'taza-de-cafe-termica-hgw',
    title: 'Taza de café termica HGW',
    subtitle: 'Vaso térmico hermético de 390 ml para café frío o caliente',
    price: 26.00,
    categories: ['Equipo', 'Serie Cafés Saludables'],
    primaryCategory: 'Equipo',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Coffee-Cup-_-Taza-termica-para-Cafe.png',
    excerpt: 'El Coffee Cup HGW es un vaso térmico reutilizable con aislamiento al vacío de 390 ml. Conserva la temperatura de tus bebidas frías o calientes durante horas con tapa antifugas para llevar a la oficina o auto.',
    advantages: [
      'Aislamiento térmico de doble pared de alta duración.',
      'Tapa hermética antifugas con boquilla ergonómica.',
      'Material de acero inoxidable ecológico y libre de BPA.',
      'Resistente a olores y fácil de limpiar.'
    ],
    benefits: [
      { title: 'Conserva el calor y frescura', text: 'Mantiene tus cafés saludables HGW calientes por hasta 6 horas o fríos por 12 horas.' },
      { title: 'Portabilidad total', text: 'Encaja en la mayoría de portavasos de automóviles y mochilas.' }
    ],
    howToUse: [
      'Lavar antes del primer uso.',
      'Verter su café o bebida HGW favorita caliente o fría.',
      'Cerrar la tapa hermética y abrir la boquilla para degustar.'
    ],
    presentation: '1 Vaso térmico en caja individual',
    netContent: 'Capacidad 390 ml',
    keywords: 'taza de cafe termica hgw, vaso termico coffee cup, accesorios cafe hgw',
    featured: false
  },
  {
    id: 161,
    slug: 'cafe-de-ashwagandha',
    title: 'Café de Ashwagandha',
    subtitle: 'El adaptógeno milenario de la India combinado con café soluble',
    price: 23.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Ashwaganda-Coffee-_-Cafe-de-Ashwagandha.png',
    excerpt: 'El Café Ashwagandha HGW combina las propiedades estimulantes de la cafeína con los beneficios adaptógenos y relajantes de la raíz de Withania somnifera (Ashwagandha). Brinda energía limpia sin estrés ni nerviosismo.',
    advantages: [
      'Práctico, instantáneo y con aroma aromático suave.',
      'Adaptógeno natural que modula los niveles de cortisol.',
      'Fortalece el sistema inmunológico y la resistencia física.',
      'Mejora el enfoque mental y la claridad.'
    ],
    benefits: [
      { title: 'Reducción del estrés y la ansiedad', text: 'Proporciona una sensación de energía sostenida sin la agitación o taquicardia del café convencional.' },
      { title: 'Equilibrio del ciclo del sueño', text: 'Ayuda a mantener la vitalidad durante el día y a conciliar un descanso reparador por la noche.' },
      { title: 'Propiedades antiinflamatorias', text: 'Favorece la recuperación muscular y el bienestar articular.' }
    ],
    ingredients: [
      'Café instantáneo en polvo',
      'Extracto de ginseng indio (Ashwagandha)',
      'Extracto de ostra',
      'Extracto de flor masculina de Eucommia',
      'Extracto de frambuesa',
      'Crema no láctea'
    ],
    howToUse: [
      'Vierta el contenido de 1 sachet en una taza con 150 ml de agua tibia o caliente.',
      'Mezcle bien para disolver cualquier grumo natural y disfrute.'
    ],
    presentation: 'Caja con 12 sobres de 15 g (180 g)',
    netContent: '180 g',
    shelfLife: '24 meses',
    precautions: ['No recomendable para mujeres embarazadas ni lactantes.'],
    keywords: 'cafe de ashwagandha, ashwagandha coffee hgw, adaptogenos estres, reishi reiki bienestar',
    featured: true
  },
  {
    id: 162,
    slug: 'cafe-trebol',
    title: 'Café Trébol',
    subtitle: 'Extracto de trébol rojo (Trifolium pratense), rosa, lino y pueraria',
    price: 23.00,
    categories: ['Alimentos', 'Serie Cafés Saludables'],
    primaryCategory: 'Serie Cafés Saludables',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Trebol-Coffee-_-Cafe-Trebol.png',
    excerpt: 'Trébol Coffee HGW es una bebida instantánea formulada con extracto de trébol rojo (Trifolium pratense), rosa silvestre, semilla de lino y raíz de pueraria. Especialmente apreciado para el equilibrio hormonal femenino.',
    advantages: [
      'Presentación práctica e instantánea.',
      'Agradable sabor floral y tostado.',
      'Rico en isoflavonas y fitoestrógenos vegetales naturales.',
      'Propiedades antiinflamatorias y digestivas.'
    ],
    benefits: [
      { title: 'Equilibrio hormonal femenino', text: 'Tradicionalmente usado para aliviar sofocos, cambios de humor y síntomas de la menopausia.' },
      { title: 'Firmeza y tonificación', text: 'La raíz de pueraria y el lino coadyuvan en la firmeza y tonicidad del busto en mujeres.' },
      { title: 'Alivio del estrés y relajación', text: 'Una bebida reconfortante que brinda sensación de calma y bienestar.' }
    ],
    ingredients: [
      'Café instantáneo en polvo',
      'Extracto de Trifolium pratense (trébol rojo)',
      'Extracto de rosa',
      'Extracto de semilla de lino',
      'Extracto de raíz de pueraria',
      'Crema no láctea'
    ],
    howToUse: [
      'Disolver un sachet en 150 ml de agua tibia, mezclar bien y beber a temperatura agradable.'
    ],
    presentation: 'Caja con 12 sobres de 15 g (180 g)',
    netContent: '180 g',
    shelfLife: '24 meses',
    precautions: ['No recomendable para mujeres embarazadas ni niños.'],
    keywords: 'cafe trebol hgw, trifolium pratense, menopausia fitoestrogenos, cafe mujer',
    featured: true
  },
  {
    id: 163,
    slug: 'capsula-spirulina-plus',
    title: 'Cápsula Spirulina Plus',
    subtitle: 'Superalimento concentrado con microalga espirulina de alta pureza',
    price: 25.00,
    categories: ['Suplementos'],
    primaryCategory: 'Suplementos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Spirulina-Plus-Capsule-_-Spirulina-en-Capsula.png',
    excerpt: 'Spirulina Plus HGW es un suplemento nutricional de espirulina pura, una de las fuentes más ricas del planeta en clorofila, proteínas vegetales, betacaroteno, hierro biodisponible y vitaminas del complejo B.',
    advantages: [
      'Microalga cultivada bajo estrictos estándares de pureza.',
      'Aumenta la energía y vitalidad celular.',
      'Refuerza el sistema inmunológico.',
      'Apoya la desintoxicación de metales pesados.',
      'Contribuye al control del apetito y peso saludable.'
    ],
    benefits: [
      { title: 'Nutrición celular integral', text: 'Aporta más de 60 nutrientes esenciales de absorción inmediata.' },
      { title: 'Combate la fatiga y anemia', text: 'Rico en hierro y clorofila que estimulan la producción de glóbulos rojos.' },
      { title: 'Efecto saciante natural', text: 'Tomado antes de las comidas ayuda a moderar el apetito.' }
    ],
    howToUse: [
      'Vía oral para adultos: tomar 1 o 2 cápsulas al día acompañadas de un vaso con agua.'
    ],
    presentation: 'Frasco con 60 cápsulas de 500 mg',
    netContent: '60 cápsulas',
    precautions: ['Consulte con su médico si está embarazada o lactando. No usar en caso de gota o fenilcetonuria.'],
    keywords: 'spirulina plus hgw, espirulina en capsulas, superalimento defensas energia',
    featured: true
  },
  {
    id: 164,
    slug: 'berry-juice-high-vc',
    title: 'Berry Juice HIGH VC',
    subtitle: 'Jugo concentrado en polvo de arándanos, moras, uvas y cerezas con Vitamina C',
    price: 25.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Berry-Juice-HIGH-VC-_-Zumo-de-frutos-rojos-ALTO-EN-VC.png',
    excerpt: 'Berry Juice High VC HGW es una explosión frutal rica en vitamina C natural elaborada con arándanos, moras, cerezas, uvas y frambuesas. Diseñado para proteger la salud visual de niños y adultos y elevar las defensas.',
    advantages: [
      'Protege la salud visual frente a pantallas y luz azul.',
      'Poderosa acción antioxidante, antiinflamatoria y antibacteriana.',
      'Estimula la síntesis de colágeno natural en el cuerpo.',
      'Sabor delicioso y refrescante a frutos del bosque.'
    ],
    benefits: [
      { title: 'Arándano y Mora', text: 'Antocianinas, flavonoides y resveratrol para protección ocular y cerebral.' },
      { title: 'Cereza', text: 'Aporte de melatonina vegetal natural para favorecer la calidad del descanso.' },
      { title: 'Vitamina C reforzada', text: 'Eleva la respuesta inmunológica y mejora la absorción de hierro.' }
    ],
    ingredients: [
      'Jugo de arándano en polvo',
      'Jugo de uva en polvo',
      'Extracto de arándanos',
      'Extracto de cereza',
      'Extracto de frambuesa',
      'Extracto de mora'
    ],
    howToUse: [
      'Vierta 1 sachet en un vaso de 150 a 200 ml de agua fresca o tibia, revuelva y disfrute.'
    ],
    presentation: 'Caja con 30 sachets de 6 g (180 g)',
    netContent: '180 g',
    shelfLife: '24 meses',
    keywords: 'berry juice high vc, jugo de arandanos vitamina c, salud visual ninos, frutos rojos hgw',
    featured: true
  },
  {
    id: 165,
    slug: 'vaso-termico',
    title: 'Vaso Térmico',
    subtitle: 'Vaso térmico premium con doble pared aislante y tapa ergonómica',
    price: 31.50,
    categories: ['Equipo'],
    primaryCategory: 'Equipo',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Vaso-Termico-_-Vaso-Termico.png',
    excerpt: 'El Vaso Térmico HGW mantiene tus bebidas a la temperatura óptima por horas. Construido en acero inoxidable de grado alimenticio, con tapa de sellado hermético para acompañarte en tu día a día.',
    advantages: [
      'Uso reutilizable y ecológico.',
      'Diseño funcional con estilo moderno.',
      'Fácil mantenimiento, apto para frío y calor.',
      'Tapa de ajuste seguro que reduce salpicaduras.'
    ],
    benefits: [
      { title: 'Aislamiento continuo', text: 'Conserva el calor de tus infusiones o el frío de tus bebidas frutales.' },
      { title: 'Ergonomía', text: 'Cómodo agarre para llevar en el auto, oficina o caminatas.' }
    ],
    howToUse: ['Lavar antes de usar, verter la bebida y ajustar firmemente la tapa.'],
    presentation: '1 Unidad en caja',
    netContent: '1 Unidad',
    keywords: 'vaso termico hgw, termo portatil, accesorios hgw',
    featured: false
  },
  {
    id: 166,
    slug: 'lactiberry',
    title: 'Lactiberry',
    subtitle: 'Nutritiva mezcla de arándanos, producto lácteo de Nueva Zelanda y té negro',
    price: 26.00,
    categories: ['Alimentos'],
    primaryCategory: 'Alimentos',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Lactiberry-_-Te-Negro-con-Arandanos-y-Lacteo.png',
    excerpt: 'Lactiberry HGW combina la riqueza antioxidante de los arándanos con suero de leche de alta calidad de Nueva Zelanda y té negro. Una bebida instantánea de suave textura, delicioso sabor y alto valor nutritivo.',
    advantages: [
      'Con producto lácteo derivado de leche de Nueva Zelanda.',
      'Puede presentar trozos reales de arándano deshidratado.',
      'Delicioso aroma cremoso y sabor frutal natural.',
      'Aporte de proteínas de suero y antioxidantes.'
    ],
    benefits: [
      { title: 'Antioxidantes de arándano', text: 'Fortalece las membranas celulares y apoya la salud visual.' },
      { title: 'Suero de leche proteico', text: 'Aporta proteínas de alto valor biológico para el sistema inmunológico y muscular.' },
      { title: 'Té negro', text: 'Contiene flavonoides protectores de la salud cardiovascular.' }
    ],
    ingredients: [
      'Crema no láctea',
      'Azúcar blanca granulada',
      'Arándanos en polvo (1.5%)',
      'Suero de leche',
      'Té negro (Camellia sinensis)',
      'Leche descremada en polvo'
    ],
    howToUse: [
      'Vierta el contenido de 1 sachet en una taza con 150 ml de agua caliente, mezcle y disfrute.'
    ],
    presentation: 'Caja con 10 sachets de 30 g (300 g)',
    netContent: '300 g',
    shelfLife: '12 meses',
    keywords: 'lactiberry hgw, te negro arandanos leche, bebida nutritiva, salud visual',
    featured: true
  },
  {
    id: 167,
    slug: 'tourmaline-thermo-waterson',
    title: 'Tourmaline Thermo (WATERSON)',
    subtitle: 'Termo ionizador de acero inoxidable con piedras de turmalina alcalinizante',
    price: 32.50,
    categories: ['Equipo'],
    primaryCategory: 'Equipo',
    brand: 'HEALTH GREEN WORLD',
    thumbnailUrl: 'https://yamilkahgw.online/wp-content/uploads/2026/09/Tourmaline-Thermo-WATERSON-_-Turmalina-Termo-WATERSON.png',
    excerpt: 'El Termo de Turmalina WATERSON de HGW está fabricado en acero inoxidable con piedras naturales de turmalina en su interior. Alcaliniza el agua de forma natural, neutralizando la acidez y eliminando toxinas.',
    advantages: [
      'Diseño anatómico, elegante y color neutro natural.',
      'Elaborado con acero inoxidable grado alimenticio y piedras naturales de turmalina.',
      'Capacidad óptima de 500 ml.',
      'Portátil y ligero para hidratarte en cualquier lugar.'
    ],
    benefits: [
      { title: 'Agua alcalina natural', text: 'La turmalina convierte el agua común en agua ligeramente alcalina reduciendo la acidez corporal.' },
      { title: 'Neutralizador de radiación', text: 'Efecto catalizador que ioniza el agua con microestructuras moleculares de más fácil absorción.' },
      { title: 'Desintoxicación profunda', text: 'Facilita la eliminación celular de toxinas y desechos metabólicos.' }
    ],
    ingredients: ['Piedras naturales de turmalina', 'Acero inoxidable'],
    howToUse: [
      'Llenar con agua purificada y dejar reposar 15 a 30 minutos antes de beber para permitir la acción mineral.',
      'Secar bien antes de guardarlo por períodos prolongados.'
    ],
    presentation: 'Termo de 500 ml en caja protectora',
    netContent: '500 ml',
    keywords: 'termo turmalina waterson hgw, agua alcalina termo, ionizador agua hgw',
    featured: true
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'todos',
    name: 'Todos los productos',
    slug: 'todos',
    description: 'Explora el catálogo completo de bienestar y salud natural Health Green World',
    itemCount: PRODUCTS.length,
    iconName: 'LayoutGrid'
  },
  {
    id: 'cuidado-personal',
    name: 'Cuidado personal',
    slug: 'cuidado-personal',
    description: 'Higiene bucal avanzada sin flúor, protectores y toallas con turmalina aniónica',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Cuidado personal')).length,
    iconName: 'Sparkles'
  },
  {
    id: 'serie-cafes-saludables',
    name: 'Serie Cafés Saludables',
    slug: 'serie-cafes-saludables',
    description: 'Cafés funcionales enriquecidos con Ganoderma, Cordyceps, Arándanos y Ashwagandha',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Serie Cafés Saludables')).length,
    iconName: 'Coffee'
  },
  {
    id: 'alimentos',
    name: 'Alimentos y Nutrición',
    slug: 'alimentos',
    description: 'Bebidas botánicas, mermeladas, proteínas vegetales y colágenos funcionales',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Alimentos')).length,
    iconName: 'Apple'
  },
  {
    id: 'serie-candys-funcionales-hgw',
    name: 'Candys Funcionales HGW',
    slug: 'serie-candys-funcionales-hgw',
    description: 'Caramelos duros portátiles con probióticos, colágeno, arándano, café y hierbas',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Serie Candys Funcionales HGW')).length,
    iconName: 'Candy'
  },
  {
    id: 'accesorios',
    name: 'Accesorios y Turmalina',
    slug: 'accesorios',
    description: 'Protectores cervicales, lumbares, rodilleras, plantillas y joyas de turmalina',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Accesorios')).length,
    iconName: 'ShieldCheck'
  },
  {
    id: 'equipo',
    name: 'Equipo y Termos',
    slug: 'equipo',
    description: 'Termos alcalinizadores WATERSON, vasos térmicos y hervidores eléctricos',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Equipo')).length,
    iconName: 'Flame'
  },
  {
    id: 'suplementos',
    name: 'Suplementos',
    slug: 'suplementos',
    description: 'Cápsulas de superalimentos naturales como Spirulina Plus',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Suplementos')).length,
    iconName: 'Pill'
  },
  {
    id: 'licores',
    name: 'Licores y Vinos',
    slug: 'licores',
    description: 'Vinos artesanales fermentados a base de arándanos antioxidantes',
    itemCount: PRODUCTS.filter(p => p.categories.includes('Licores')).length,
    iconName: 'Wine'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();
  return PRODUCTS.find((p) => p.slug.toLowerCase() === clean);
}

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
