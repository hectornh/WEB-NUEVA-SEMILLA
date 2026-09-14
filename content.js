/* Contenido editorial separado de la presentación para futuras integraciones. */
window.NuevaSemilla = {
  links: {
    apicultura: 'https://www.instagram.com/apicultura.seyd.unrc/',
    workaway: 'https://www.workaway.info/',
    tienda: 'https://alimentosdemitierra.com.ar/',
    feria: 'https://alpacorral.gov.ar/con-el-arte-de-la-feria/',
    mapa: 'https://mapa.libre.net.ar/aldea/',
    facebook: 'https://www.facebook.com/profile.php?id=100064049891589',
    chanaritos: 'https://www.instagram.com/loschanaritos.holistico/',
    pequelette: 'https://www.instagram.com/la_pequelette_arg/',
    altoLindo: 'https://www.instagram.com/reservanaturalaltolindo/'
  },
  /* Permanecen vacíos hasta disponer de los canales oficiales y el servidor. */
  contact: { whatsapp: null, email: null, inquiryEndpoint: null, bankTransfer: null },
  people: {
    luciana: {name:'Luci SAGRIPANTI', initials:'LS', photo:'assets/luciana-sagripanti.jpeg', credit:'Fotografía: Bichos de Campo, archivo aportado.', role:'Agroecología · producción bovina'},
    demo: {name:'Claudio DEMO', initials:'CD', role:'Agroecología · producción porcina'},
    dario: {name:'Darío COLANERI', initials:'DC', photo:'assets/persona-dario.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Agroecología', location:'Alpa Corral'},
    sarmiento: {name:'Claudio SARMIENTO', initials:'CS', role:'Agroecología · proyecto ALdeA'},
    ivanaMandinga: {name:'Ivi MACAGNO', initials:'IM', photo:'assets/persona-ivana-mandinga.jpeg', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Horticultura', establishment:'La Mandinga', location:'Almafuerte'},
    laura: {name:'Laura MEINERO', initials:'LM', photo:'assets/persona-laura-meinero.jpeg', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Producción bovina', establishment:'La Milagrosa', location:'Coronel Moldes'},
    guillermo: {name:'Guillermo', initials:'GM', photo:'assets/persona-guillermo.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Producción bovina', establishment:'La Mandinga', location:'Almafuerte'},
    francisco: {name:'Francisco FONTANETO', initials:'FC', photo:'assets/persona-francisco.jpg', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Producción bovina', establishment:'Los Chanaritos', location:'Villa María'},
    magali: {name:'Magali GUIGON', initials:'MG', role:'Producción caprina'},
    ivanaAcequias: {name:'Ivana', initials:'IA', role:'Avicultura · pollitos', location:'3 Acequias'},
    paula: {name:'Paula MELEGATTI', initials:'PM', photo:'assets/persona-paula-melegatti.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Apicultura · programa de la UNRC'},
    micaela: {name:'Micaela BEDANO', initials:'MB', photo:'assets/persona-micaela.jpeg', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Apicultura'},
    carolina: {name:'Carolina', initials:'C', photo:'assets/persona-carolina.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Fungicultura · gírgolas'},
    edgardo: {name:'Edgardo', initials:'E', role:'Bioconstrucción'},
    viviana: {name:'Viviana PEIRÓ', initials:'VP', photo:'assets/persona-viviana.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Participante', establishment:'El Buen Vivir', location:'Alpa Corral'},
    german: {name:'German', initials:'G', photo:'assets/persona-german.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Participante · perfil por confirmar'},
    gloria: {name:'Gloria POCHETTINO', initials:'GP', photo:'assets/persona-gloria.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Participante'},
    hector: {name:'Héctor NÚÑEZ', initials:'HN', role:'Participante'},
    facundo: {name:'Facundo', initials:'F', role:'Participante'},
    santiago: {name:'Santiago', initials:'S', photo:'assets/persona-santiago.png', credit:'Fotografía: archivo de participantes de Nueva Semilla.', role:'Participante · perfil por confirmar'}
  },
  photoArchive: [
    {name:'Viviana Peiró', person:'viviana'},
    {name:'German', person:'german'},
    {name:'Gloria', person:'gloria'},
    {name:'Santiago', person:'santiago'},
    {name:'Registro del archivo', photo:'assets/persona-archivo-miscelanea.png', alt:'Registro fotográfico de una persona participante, identidad por confirmar.', note:'Identidad y establecimiento por confirmar.'}
  ],
  advice: [
    {id:'agroecologico',name:'As. Agroecológico',title:'Pensar el campo como un todo.',description:'Diseño, transición y/o regeneración de sistemas productivos en armonía con la tierra.',people:['luciana','demo','dario','sarmiento'],topics:['Diseño de sistemas','Diversidad productiva','Aprendizaje entre productores']},
    {id:'horticola',name:'As. Hortícola',title:'Saberes que crecen en la huerta.',description:'Un espacio de intercambio sobre horticultura y producción de alimentos, desde la experiencia de La Mandinga.',people:['ivanaMandinga'],topics:['Huerta','Suelo vivo','Alimentos de cercanía']},
    {id:'bovino',name:'As. Bovino',title:'Ganadería en diálogo con el territorio.',description:'Experiencias de producción bovina compartidas por Laura MEINERO, de La Milagrosa, Coronel Moldes; Guillermo, de La Mandinga; y Francisco FONTANETO, de Los Chanaritos.',people:['laura','guillermo','francisco'],topics:['Producción bovina','Pasturas','Sistemas integrados']},
    {id:'caprino',name:'As. Caprino',title:'Acompañar la producción caprina.',description:'Saberes y experiencias sobre la crianza de cabras junto a Magali GUIGON.',people:['magali'],topics:['Cabras','Manejo','Vida rural']},
    {id:'ovino',name:'As. Ovino',title:'La cría ovina en el sistema productivo.',description:'Espacio de asesoramiento sobre producción ovina. El equipo referente y el alcance de las consultas se incorporarán próximamente.',people:[],topics:['Ovinos','Producción integrada']},
    {id:'porcino',name:'As. Porcino',title:'Compartir experiencias de crianza.',description:'Producción porcina y aprendizajes de campo junto a Claudio Demo.',people:['demo'],topics:['Porcinos','Diversificación','Manejo']},
    {id:'avicola',name:'As. Avícola',title:'La avicultura, de cerca.',description:'Un espacio para conocer la experiencia de Ivana, de 3 Acequias, y compartir saberes sobre la crianza de aves.',people:['ivanaAcequias'],topics:['Aves','Crianza','Pollitos']},
    {id:'apicola',name:'As. Apícola',title:'Cuidar las abejas, cuidar la vida.',description:'Apicultura junto a Paula Melegatti y Micaela Bedano. Conocé también el programa de apicultura que Paula coordina en la UNRC.',people:['paula','micaela'],topics:['Abejas','Miel','Formación'],link:'apicultura',linkLabel:'Programa de Apicultura · UNRC'},
    {id:'fungicultura',name:'As. Fungicultura',title:'Otro mundo de posibilidades.',description:'Saberes sobre el cultivo de hongos y la producción de gírgolas junto a Carolina.',people:['carolina'],topics:['Hongos','Gírgolas','Cultivo']},
    {id:'fitomedicina',name:'As. Fitomedicina',title:'Cuidar los cultivos desde una mirada integral.',description:'Intercambio de saberes sobre fitomedicina junto a Ivi MACAGNO y Darío COLANERI.',people:['ivanaMandinga','dario'],topics:['Fitomedicina','Cuidado de cultivos','Agroecología']},
    {id:'permacultura',name:'As. Permacultura y Biodinámica',title:'Habitar y producir con una mirada integral.',description:'Un espacio para las prácticas de permacultura y biodinámica. Referentes y modalidades de acompañamiento por incorporar.',people:[],topics:['Permacultura','Biodinámica','Diseño integral']},
    {id:'transicion',name:'As. Transición y Regeneración',title:'Cada transición tiene su camino.',description:'Una mirada sobre los procesos de cambio y regeneración de sistemas productivos. Referentes y propuestas específicas por incorporar.',people:[],topics:['Transición','Regeneración','Territorio']},
    {id:'veterinario',name:'As. Veterinario',title:'Salud animal y cuidado cotidiano.',description:'Espacio de asesoramiento veterinario de la red. Profesionales, disponibilidad y modalidades de atención por incorporar.',people:[],topics:['Salud animal','Cuidado','Producción']},
    {id:'psicologico',name:'As. Psicológico',title:'Cuidar también a quienes cuidan la tierra.',description:'Salud mental rural y ecoansiedad. Un espacio para reconocer la dimensión humana de la vida y el trabajo en el campo. Profesionales y modalidades de atención por incorporar.',people:[],topics:['Salud mental rural','Ecoansiedad','Bienestar']},
    {id:'bioconstruccion',name:'As. Bioconstrucción',title:'Construir una forma de habitar.',description:'Un acercamiento a la bioconstrucción y a los saberes de Edgardo para pensar los espacios que habitamos.',people:['edgardo'],topics:['Bioconstrucción','Hábitat','Materiales']}
  ],
  proposals: [
    {id:'conferencias',name:'Conferencias',title:'El conocimiento se enriquece al compartirlo.',description:'Charlas y conversaciones sobre agroecología, experiencias productivas y vida rural. Mientras preparamos las próximas propuestas, podés recorrer los encuentros registrados en nuestra videoteca.',action:'Explorar las conversaciones',href:'#quienes-somos/contenido-mediatico',note:'La próxima agenda se publicará aquí.'},
    {id:'voluntariados',name:'Voluntariados',title:'Aprender haciendo. Compartir la vida rural.',description:'El voluntariado abre un encuentro entre personas, territorios y formas de producir. Workaway es una plataforma externa para explorar oportunidades de intercambio.',action:'Explorar Workaway',link:'workaway',note:'El enlace lleva a la plataforma general. Las oportunidades propias del grupo se incorporarán cuando estén confirmadas.'},
    {id:'workshops',name:'Workshops',title:'Saberes que pasan de mano en mano.',description:'Talleres para aprender a partir de la práctica. Conocé las actividades del Programa de Apicultura de la UNRC, coordinado por Paula Melegatti.',action:'Conocer el programa de apicultura',link:'apicultura',note:'Consultá fechas, inscripción y condiciones directamente en el programa.'}
  ],
  gastronomy: [
    {id:'tiendas',name:'Tiendas Agroecológicas'}, {id:'ferias',name:'Ferias'}, {id:'venta-directa',name:'Venta Directa'}, {id:'experiencias',name:'Experiencias & AgroTurismo'}, {id:'slow-food',name:'Slow Food Farms'}
  ],
  products: [
    {id:'pollo-de-campo',name:'Pollos Pastoriles',producer:'La Mandinga',participant:'la-mandinga',symbol:'01',description:'Producción avícola pastoril de La Mandinga, en Almafuerte.'},
    {id:'lechones',name:'Lechones a pasto',producer:'El Arroyito',participant:'el-arroyito',symbol:'02',description:'Crianza a pasto de El Arroyito.'},
    {id:'quesos',name:'Quesos',producer:'La Pequelette',participant:'la-pequelette',symbol:'03',description:'Quesos de La Pequelette, en el valle de Calamuchita.'},
    {id:'miel',name:'Miel',producer:'Micaela BEDANO y Paula MELEGATTI',participant:'paula-edgardo',symbol:'04',description:'Miel y saberes apícolas compartidos por Micaela BEDANO y Paula MELEGATTI.',people:['micaela','paula']},
    {id:'pollitos',name:'Pollitos',producer:'Ivana · 3 Acequias',participant:'tres-acequias',symbol:'05',description:'Pollitos de la producción de Ivana, de 3 Acequias.'},
    {id:'girgolas',name:'Gírgolas',producer:'Carolina',symbol:'06',description:'Gírgolas de la producción de Carolina.'},
    {id:'huevos',name:'Huevos de Campo',producer:'Ivi MACAGNO y Darío COLANERI',symbol:'07',description:'Huevos de producción agroecológica, compartidos por Ivi MACAGNO y Darío COLANERI.',people:['ivanaMandinga','dario']}
  ],
  experiences: [
    {id:'merienda-con-cabras',name:'La Pequelette',title:'Merienda con cabras',location:'Calamuchita',participant:'la-pequelette',description:'Un encuentro con La Pequelette y sus cabras para compartir una merienda en el campo.'},
    {id:'merienda-a-campo',name:'El Alto Lindo',title:'Visita Guiada Reserva Serrana',location:null,participant:'el-alto-lindo',description:'Una invitación a conocer la vida a campo y el entorno natural de El Alto Lindo.'}
  ],
  about: [
    {id:'agroecologia',name:'Qué es la Agroecología'}, {id:'historia',name:'Historia del Grupo'}, {id:'participantes',name:'Emprendimientos & Participantes'}, {id:'contenido-mediatico',name:'Contenido Mediático'}, {id:'20-anos',name:'20 años Nueva Semilla'}, {id:'bibliografia',name:'Bibliografía'}, {id:'contacto',name:'Contacto'}
  ],
  participants: [
    {id:'el-buen-vivir',name:'El Buen Vivir',location:'Alpa Corral',description:'Establecimiento de la red en Alpa Corral, vinculado a la experiencia de Viviana PEIRÓ.',people:['viviana']},
    {id:'el-milagro',name:'El Milagro',location:'Coronel Moldes',description:'Establecimiento de la red en Coronel Moldes, compartido por Luci SAGRIPANTI y Laura MEINERO.',people:['luciana','laura']},
    {id:'la-ponderosa',name:'La Ponderosa',location:'Coronel Moldes',description:'Establecimiento de la red en Coronel Moldes, compartido por Gloria POCHETTINO.',people:['gloria']},
    {id:'el-arroyito',name:'El Arroyito',location:'Reducción',description:'Establecimiento de la red en Reducción, compartido por Claudio DEMO. Ofrece lechones a pasto.',people:['demo'],links:[['Lechones a pasto','#gastronomia/venta-directa/lechones']]},
    {id:'la-pequelette',name:'La Pequelette',location:'Calamuchita',description:'Quesos y encuentros en el campo junto a Magali GUIGON y Héctor NÚÑEZ.',people:['magali','hector'],links:[['Conocer los quesos','#gastronomia/venta-directa/quesos'],['Merienda con cabras','#gastronomia/experiencias/merienda-con-cabras']],externalLinks:[['Instagram de La Pequelette','pequelette']]},
    {id:'la-mandinga',name:'La Mandinga',location:'Almafuerte',description:'Ivi MACAGNO y Guillermo comparten sus experiencias de producción hortícola y bovina. La Mandinga también ofrece pollos pastoriles.',people:['ivanaMandinga','guillermo'],links:[['Pollos Pastoriles','#gastronomia/venta-directa/pollo-de-campo'],['Asesoramiento hortícola','#asesoramiento/horticola']]},
    {id:'los-chanaritos',name:'Los Chanaritos',location:'Villa María',description:'Francisco FONTANETO y Carolina participan desde la experiencia de Los Chanaritos.',people:['carolina','francisco'],links:[['Asesoramiento bovino','#asesoramiento/bovino']],externalLinks:[['Instagram de Los Chanaritos','chanaritos']]},
    {id:'paula-edgardo',name:'Paula Melegatti & Edgardo',location:null,activities:'Apicultura · Bioconstrucción',description:'Paula comparte sus saberes apícolas y coordina el Programa de Apicultura de la UNRC. Edgardo participa del espacio de bioconstrucción.',people:['paula','edgardo'],links:[['Asesoramiento apícola','#asesoramiento/apicola'],['Bioconstrucción','#asesoramiento/bioconstruccion']]},
    {id:'tres-acequias',name:'Campo de Ivana · 3 Acequias',location:'3 Acequias',description:'Ivana participa del asesoramiento avícola de la red y de la propuesta de venta directa de pollitos.',people:['ivanaAcequias'],links:[['Pollitos','#gastronomia/venta-directa/pollitos'],['Asesoramiento avícola','#asesoramiento/avicola']]},
    {id:'el-alto-lindo',name:'El Alto Lindo',location:null,activities:'Visitas guiadas',description:'Una visita guiada por la reserva serrana junto a Micaela BEDANO y Facundo.',people:['micaela','facundo'],links:[['Visita Guiada Reserva Serrana','#gastronomia/experiencias/merienda-a-campo']],externalLinks:[['Instagram de El Alto Lindo','altoLindo']]}
  ],
  timeline: [
    ['2006','Una invitación que se vuelve red','Comienzan los encuentros entre productores interesados en la agroecología. Claudio Sarmiento y Darío Colaneri forman parte de ese primer recorrido.','https://www.unirioeditora.com.ar/wp-content/uploads/2022/11/978-987-688-504-1.pdf'],
    ['2017','Compartir el camino','La Tinta documenta once años de Nueva Semilla y sus encuentros entre productores. La serie Córdoba Agroecológica registra experiencias del territorio.','https://latinta.com.ar/2017/09/08/redes-de-agroecologia-alimentos-sanos-y-diversos/'],
    ['2018–2019','Las experiencias toman la palabra','Revista MU presenta al grupo y la UNRC publica un estudio de observación participante sobre sus reuniones, prácticas y vínculos.','https://www.biodiversidadla.org/Articulos/Argentina_-_Lo_nuevo_Cordoba_agroecologica_grupo_de_productores_Nueva_semilla'],
    ['2021','Quince años construyendo agroecología','La experiencia del grupo llega al Congreso Argentino de Agroecología. Tierra sobre la mesa recoge las voces de Luciana Sagripanti y Claudio Sarmiento.','https://www.youtube.com/watch?v=JZJZ2YEg2bo'],
    ['2022','Saberes que quedan escritos','Agroecología a la Carta incluye el capítulo de Darío Colaneri sobre Nueva Semilla. Un webinar de la UNSAM reúne a Sagripanti, Colaneri y Sarmiento.','https://www.youtube.com/watch?v=wKgoLgUATLA'],
    ['2023–2024','Nuevas conversaciones','Entrevistas y seminarios continúan acercando las experiencias de producción, el trabajo de campo y la defensa de las semillas.','https://www.youtube.com/watch?v=pjRo4IxrBWg'],
    ['2025–2026','Territorios que se hacen visibles','El proyecto ALdeA, impulsado por Claudio Sarmiento junto a Daniel Bellomo, hace visible la agricultura libre de agroquímicos del centro-sur cordobés.','https://www.ayv.unrc.edu.ar/2026/06/02/nueva-publicacion-el-mapa-de-la-agricultura-libre-de-agroquimicos-del-centro-sur-de-cordoba-2025/'],
    ['2026','Veinte años de Nueva Semilla','Celebramos una historia hecha de encuentros, aprendizajes y distintas maneras de cuidar la tierra. El archivo audiovisual del grupo reúne parte de esa memoria.','#quienes-somos/20-anos']
  ],
  media: [
    ['2024','Video','Experiencias concretas de agricultura y ganadería','Luciana Sagripanti · Seminarios REDAE, INTA Balcarce','https://www.youtube.com/watch?v=pjRo4IxrBWg'],
    ['2023','Video','Entrevistas que hemos tejido durante 2023','Luciana Sagripanti · Caminos Ancestrales. Año referido en el título.','https://www.youtube.com/watch?v=Se1gttA932A'],
    ['2022','Video','Agroecología en grupos de productores agropecuarios','Luciana Sagripanti, Darío Colaneri y Claudio Sarmiento · UNSAM','https://www.youtube.com/watch?v=wKgoLgUATLA'],
    ['2022','Video','La UNRC apuesta por la agroecología','Claudio Sarmiento · UniRío TV','https://www.youtube.com/watch?v=lFXgudSlk8U'],
    ['2021','Video','Regenerar desde el suelo','Tierra sobre la mesa, capítulo 2 · La Tinta','https://www.youtube.com/watch?v=JZJZ2YEg2bo'],
    ['2021','Video','15 años de producción agroecológica','INTA Esperanza y Castellanos · 16 de junio','https://www.youtube.com/watch?v=mMWeO46HApY'],
    ['2017','Video','Granja El Buen Vivir, Alpa Corral','Córdoba Agroecológica · UniRío TV','https://www.youtube.com/watch?v=EARlNnaVDQY'],
    ['2017','Video','Agroecología y tratamiento de malezas','Claudio Sarmiento · Pantalla Libre','https://www.youtube.com/watch?v=wQQ7BVTBZBk'],
    ['2012','Video','Producción orgánica','Entrevista a Claudio Sarmiento','https://www.youtube.com/watch?v=-Hjn0UVoOsU'],
    ['Sin fecha confirmada','Video','La agroecología en el campo de experimentación de la UNRC','Luciana Sagripanti','https://www.youtube.com/watch?v=nrdsFpv0mIM'],
    ['Sin fecha confirmada','Video','Agroecología: saberes y experiencias','César Gramaglia y Luciana Sagripanti','https://www.youtube.com/watch?v=0L6ZVG3QSGw'],
    ['Sin fecha confirmada','Video','Testimonio: Luciana Sagripanti','Resistencia Ambiental · T1 E19','https://www.youtube.com/watch?v=xJZIYQs4LI4'],
    ['2026','Lectura','La agroecología en forma de mapa','Agencia Tierra Viva · El proyecto ALdeA','https://agenciatierraviva.com.ar/la-agroecologia-en-forma-de-mapa-15-000-hectareas-productivas-sin-venenos/'],
    ['2025','Lectura','Si nos íbamos al pueblo, nos moríamos de pena','Luciana Sagripanti · Bichos de Campo','https://bichosdecampo.com/si-nos-ibamos-al-pueblo-nos-moriamos-de-pena-la-decision-de-luciana-de-quedarse-en-las-100-hectareas-de-la-milagrosa-y-pasar-del-tambo-a-hacer-cria-con-base-agroecologica/'],
    ['2025','Lectura','Dulzura y bravura en la producción agroecológica','Luciana Sagripanti · Perfil / Nuestra Tierra','https://www.perfil.com/noticias/ecologia/dulzura-y-bravura-las-dos-aptitudes-claves-que-los-pequenos-productores-deben-tener-para-llevar-adelante-un-proyecto-agroecologico-en-el.phtml'],
    ['2024','Lectura','Por la defensa de las semillas','Claudio Demo · Agencia Tierra Viva','https://agenciatierraviva.com.ar/por-la-defensa-de-las-semillas-y-en-rechazo-a-la-privatizacion-que-impulsa-el-gobierno/'],
    ['2023','Lectura','La agroecología es una forma de pararse ante el mundo','Entrevista a Claudio Sarmiento · El Resaltador','https://elresaltador.com.ar/la-agroecologia-es-una-forma-de-pararse-ante-el-mundo/'],
    ['2021','Lectura','El espinal, ese bosque secreto','La Tinta · Territorio, conservación y experiencias agroecológicas','https://latinta.com.ar/2021/08/11/espinal-bosque-secreto/'],
    ['2021','Lectura','La agroecología como oportunidad: desandando mitos','Área Ambiente y Política · UNSAM','https://aapepyg.com/2021/07/01/la-agroecologia-como-oportunidad-desandando-mitos/'],
    ['2020','Lectura','Vivir y trabajar en el campo es una situación de conciencia','Entrevista a Luciana Sagripanti · LV16','https://www.lv16.com.ar/sg/nota-141530/vivir-y-trabajar-en-el-campo-es-una-situacion-de-conciencia'],
    ['2019','Lectura','El alimento sano como esencia del todo','Darío Colaneri y Viviana Peiró · La Tinta','https://latinta.com.ar/2019/04/05/alimento-sano-esencia-todo/'],
    ['2018','Lectura','Córdoba agroecológica: grupo de productores Nueva Semilla','Revista MU · Reproducida por Biodiversidad en América Latina','https://www.biodiversidadla.org/Articulos/Argentina_-_Lo_nuevo_Cordoba_agroecologica_grupo_de_productores_Nueva_semilla'],
    ['2017','Lectura','Redes de agroecología, alimentos sanos y diversos','La Tinta · Encuentros de Nueva Semilla','https://latinta.com.ar/2017/09/08/redes-de-agroecologia-alimentos-sanos-y-diversos/']
  ],
  books: [
    {name:'Agroecología a la Carta',meta:'Claudio Sarmiento, compilador · UniRío Editora · 2022',description:'Experiencias y reflexiones de quienes construyen la agroecología desde el territorio. Incluye el capítulo “Nueva Semilla. Territorios agroecológicos”, de Darío Colaneri, con el recorrido de los primeros encuentros y la construcción colectiva del grupo.',file:'assets/Compilacion Agroecologia a la Carta.pdf',featured:true},
    {name:'Agroecología a la Carta · Nueva Semilla',meta:'Selección de páginas · PDF',description:'El recorte del libro dedicado a Nueva Semilla, conservado en el archivo del grupo.',file:'assets/Agroecologia a la carta seleccion paginas Nueva Semilla.pdf'},
    {name:'Revista MU · número 122',meta:'Revista MU / lavaca · PDF',description:'La edición que presenta la experiencia de los productores de Nueva Semilla.',file:'assets/mu122.pdf'},
    {name:'MU 122 · selección Nueva Semilla',meta:'Selección de páginas · PDF',description:'Las páginas sobre el grupo, reunidas para una lectura directa.',file:'assets/mu122 seleccion paginas Nueva Semilla.pdf'},
    {name:'Nueva Semilla: una experiencia de observación participante',meta:'A. Porporato · FAV-UNRC · 2019 · PDF',description:'Trabajo sobre los encuentros, prácticas y vínculos del grupo Cambio Rural Nueva Semilla, incluido en la sección Economía, Extensión y PSC de Ab Intus.',file:'assets/6-economia-extension-psc-1.pdf'}
  ]
};
