(() => {
'use strict';
const D = window.NuevaSemilla;
const main = document.querySelector('#main');
const nav = document.querySelector('#primary-navigation');
const menu = document.querySelector('.menu-toggle');
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const asset = path => escape(encodeURI(path));
const ext = (url,label,cls='text-link') => `<a class="${cls}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} <span aria-hidden="true">↗</span></a>`;
const internal = (url,label,cls='text-link') => `<a class="${cls}" href="${escape(url)}">${escape(label)} <span aria-hidden="true">→</span></a>`;
const download = (file,label) => `<a class="text-link" href="${asset(file)}" download>${escape(label)} <span aria-hidden="true">↓</span></a>`;
const eyebrow = text => `<p class="eyebrow">${escape(text)}</p>`;
const names = {'asesoramiento':'Asesoramiento Profesional','propuestas':'Propuestas Pedagógicas','gastronomia':'Propuestas de Productos y Agroturismo','mapa':'Mapa','quienes-somos':'Quiénes Somos'};
const intros = {
  asesoramiento:['Saberes en común','El conocimiento nace de la experiencia y crece cuando se comparte. Encontrá el área que acompaña tu proyecto.'],
  propuestas:['Aprender en el encuentro','Conferencias, voluntariados y talleres para compartir saberes y acercarse a la vida del grupo.'],
  gastronomia:['Del campo a la mesa','Alimentos con origen, fitomedicina, personas que producen y experiencias para volver a encontrarnos alrededor de la mesa.'],
  mapa:['Territorios conectados','Una invitación a conocer la agricultura libre de agroquímicos del centro-sur de Córdoba.'],
  'quienes-somos':['Una historia compartida','Productores, familias y saberes que se encuentran para construir otras formas de habitar y producir.']
};
function intro(section) {
  const [tag,description] = intros[section];
  return `<div class="wrap page-intro"><nav class="breadcrumb" aria-label="Ubicación"><a href="#inicio">Inicio</a><span aria-hidden="true">/</span><span>${names[section]}</span></nav><div class="page-title-row"><div>${eyebrow(tag)}<h1>${names[section]}</h1></div><p>${description}</p></div></div>`;
}
function subnav(items,base,active,cls='subnav',label='Secciones') {
  return `<nav class="${cls}" aria-label="${escape(label)}">${items.map(item=>`<a href="#${base}/${item.id}" ${item.id===active?'aria-current="page"':''}>${escape(item.name)}${cls==='side-nav'?'<span aria-hidden="true">↗</span>':''}</a>`).join('')}</nav>`;
}
function personDetails(p) {
 return `<p>${escape(p.role)}</p>${placeDetails(p)}`;
}
function placeDetails(p, showUnknown = false) {
 const entries = [['Establecimiento', p.establishment], ['Ubicación', p.location || (showUnknown ? 'Por confirmar' : '')], ['Actividades', p.activities]].filter(([,value])=>value);
 return entries.length ? `<dl class="profile-facts">${entries.map(([label,value])=>`<div><dt>${label}:</dt><dd>${escape(value)}</dd></div>`).join('')}</dl>` : '';
}
function people(ids) {
  return `<div class="people-grid">${ids.map(id=>{const p=D.people[id];return `<article class="person">${p.photo?`<img class="portrait" src="${asset(p.photo)}" alt="${escape(p.name)}" title="${escape(p.credit)}" width="78" height="92" loading="lazy">`:`<div class="initials" aria-hidden="true">${escape(p.initials)}</div>`}<div><h4>${escape(p.name)}</h4>${personDetails(p)}${p.photo?'':'<small>Retrato por incorporar</small>'}</div></article>`}).join('')}</div>`;
}
function participantLinks(p) {
 const internalLinks=(p.links||[]).map(([text,href])=>internal(href,text));
 const externalLinks=(p.externalLinks||[]).map(([text,key])=>ext(D.links[key]||key,text));
 return internalLinks.concat(externalLinks).join('');
}
function participantExternal(id) {
 const p=D.participants.find(x=>x.id===id);
 return p ? (p.externalLinks||[]).map(([text,key])=>ext(D.links[key]||key,text)).join('') : '';
}
function photoArchive() {
 return `<section class="photo-archive"><div class="section-heading"><div>${eyebrow('Archivo de participantes')}<h3>Más personas, más historias.</h3></div><p>Estos retratos forman parte del archivo recibido. La actividad o el establecimiento de algunas personas queda pendiente de confirmar.</p></div><div class="people-grid">${(D.photoArchive||[]).map(item=>{const p=item.person?D.people[item.person]:null;const name=p?.name||item.name;const role=p?.role||item.note||'Perfil por confirmar';const src=p?.photo||item.photo;const alt=p?.name||item.alt||name;return `<article class="person"><img class="portrait" src="${asset(src)}" alt="${escape(alt)}" title="Fotografía: archivo de participantes de Nueva Semilla." width="78" height="92" loading="lazy"><div><h4>${escape(name)}</h4>${p?personDetails(p):`<p>${escape(role)}</p>`}</div></article>`}).join('')}</div></section>`;
}
function home(){
 return `<section class="hero wrap" aria-labelledby="hero-title"><div class="hero-copy">${eyebrow('Nueva Semilla · Territorios agroecológicos')}<h1 id="hero-title">La tierra<br>nos reúne.<br><em>El encuentro<br>nos hace crecer.</em></h1><p class="lead">Somos una red de productores y familias de Córdoba. Desde 2006 compartimos saberes, alimentos y otras formas de habitar la tierra.</p><div class="actions">${internal('#explorar','Explorar la Nueva Semilla','button')}${internal('#quienes-somos/historia','Nuestra historia')}</div></div><figure class="hero-visual"><img class="hero-photo" src="assets/archivo-85.png" width="960" height="540" alt="Infancias explorando un cultivo: un recuerdo del archivo de Nueva Semilla" fetchpriority="high"><div class="anniversary-stamp" aria-label="20 años, 2006 a 2026"><strong>20</strong><small>AÑOS EN RED</small><small>2006 — 2026</small></div><span class="photo-label">La vida que crece entre nosotros.</span><figcaption class="photo-credit">Archivo del grupo · 20 años de Nueva Semilla</figcaption></figure></section>
 <div class="intro-strip wrap"><p>Una red hecha de personas,<br>saberes y territorios.</p><div class="strip-item"><strong>20</strong><span>años compartiendo<br>el camino</span></div><div class="strip-item"><strong>Córdoba</strong><span>nuestro<br>territorio</span></div><div class="strip-item"><strong>En red</strong><span>producimos<br>y aprendemos</span></div></div>
 <section id="explorar" class="section wrap"><div class="section-heading"><div>${eyebrow('Conocé la red')}<h2>Muchas formas<br>de sembrar.</h2></div><p>Asesorarse, aprender, compartir alimentos y conocer a quienes están detrás de cada experiencia.</p></div><div class="explore-grid">${[
 ['asesoramiento','Asesoramiento Profesional','Saberes para acompañar tu proyecto.'],
 ['propuestas','Propuestas Pedagógicas','Aprender haciendo, junto a otros.'],
 ['gastronomia','Propuestas de Productos y Agroturismo','Alimentos, fitomedicina y encuentros con origen.'],
 ['mapa','Mapa','Encontrarnos en el territorio.'],
 ['quienes-somos','Quiénes Somos','Las personas y la historia de la red.']
 ].map(([id,name,desc],i)=>`<a class="explore-card" href="#${id}"><small>0${i+1}</small><h3>${name}</h3><p>${desc}</p><span class="arrow" aria-hidden="true">↗</span></a>`).join('')}</div></section>
 <section class="section community-section"><div class="wrap community-inner"><figure><img class="community-image" src="assets/archivo-15.png" width="960" height="540" alt="Un encuentro entre generaciones, en el archivo de Nueva Semilla" loading="lazy"><figcaption class="photo-credit">Memoria compartida · Archivo del grupo</figcaption></figure><div class="community-copy">${eyebrow('Desde 2006')}<h2>La agroecología<br>también se cultiva<br><em>entre personas.</em></h2><p>De campo en campo, de reunión en reunión, Nueva Semilla fue construyendo un lugar para intercambiar experiencias, acompañar procesos y compartir la vida rural.</p><p>Hoy esa historia vive en quienes producen, en los alimentos y en cada nuevo encuentro.</p>${internal('#quienes-somos/participantes','Conocer a quienes hacen la red')}</div></div></section>
 <section class="section wrap"><div class="section-heading"><div>${eyebrow('Nuestra memoria, en movimiento')}<h2>Voces de la tierra.</h2></div>${internal('#quienes-somos/contenido-mediatico','Explorar el archivo')}</div><div class="journal-grid">
 <article class="journal-card"><img class="media-cover" src="assets/luciana-sagripanti.jpeg" width="750" height="375" alt="Luciana Sagripanti en el campo" loading="lazy"><small>ENTREVISTAS · EXPERIENCIAS</small><h3>Quedarse, producir,<br>seguir aprendiendo.</h3><p>La voz de Luciana y otras historias del grupo, en la prensa y el archivo audiovisual.</p>${internal('#quienes-somos/contenido-mediatico','Escuchar nuestras voces')}</article>
 <article class="journal-card"><a class="media-cover real-book-cover" href="#quienes-somos/bibliografia" aria-label="Conocer el libro Agroecología a la Carta"><img src="assets/portada-agroecologia-horizontal.png" width="775" height="734" alt="Portada de Agroecología a la Carta, compilado por Claudio Sarmiento" loading="lazy"></a><small>BIBLIOGRAFÍA · 2022</small><h3>Una historia<br>que queda escrita.</h3><p>El recorrido de Nueva Semilla en el capítulo de Darío Colaneri.</p>${internal('#quienes-somos/bibliografia','Conocer el libro')}</article>
 <article class="journal-card"><div class="media-cover anniversary-cover" aria-hidden="true"><strong>20</strong><span>AÑOS<br>DE ENCUENTROS</span></div><small>MEMORIA COLECTIVA · 2006–2026</small><h3>Veinte años<br>cultivando comunidad.</h3><p>Imágenes, personas y momentos de un camino compartido.</p>${internal('#quienes-somos/20-anos','Ver nuestro recorrido')}</article>
 </div></section>`;
}
function advice(id){
 const item=D.advice.find(x=>x.id===id)||D.advice[0];
 return intro('asesoramiento')+`<div class="wrap page-body advice-layout">${subnav(D.advice,'asesoramiento',item.id,'side-nav','Especialidades de asesoramiento')}<div><section class="detail-intro">${eyebrow(item.name)}<h2>${escape(item.title)}</h2><p>${escape(item.description)}</p><div class="tags">${item.topics.map(t=>`<span>${escape(t)}</span>`).join('')}</div></section>${item.people.length?`<div class="people-heading"><h3>Personas que comparten este saber</h3></div>${people(item.people)}`:'<p class="notice">Próximamente incorporaremos las personas referentes de esta especialidad.</p>'}<div class="detail-actions actions">${item.link?ext(D.links[item.link],item.linkLabel,'button'):''}${internal('#quienes-somos/contacto','Contacto')}</div></div></div>`;
}
function proposals(id){
 const item=D.proposals.find(x=>x.id===id)||D.proposals[0];
 const image=item.id==='workshops'?'archivo-190.png':item.id==='voluntariados'?'archivo-130.png':'archivo-45.png';
 const projects=item.projects?.length?`<section class="volunteer-projects"><h3>Estos son los proyectos del grupo que aceptan voluntarios:</h3><div class="volunteer-project-grid">${item.projects.map(project=>`<article class="volunteer-project"><h4>${escape(project.name)}</h4>${project.workaway?ext(project.workaway,'Perfil de Workaway','button secondary'):''}<p>Contacto directo por WhatsApp: <span>próximamente.</span></p></article>`).join('')}</div></section>`:'';
 return intro('propuestas')+`<div class="wrap page-body">${subnav(D.proposals,'propuestas',item.id,'subnav','Tipos de propuestas')}<article class="proposal"><div class="proposal-copy">${eyebrow(item.name)}<h2>${escape(item.title)}</h2><p>${escape(item.description)}</p>${item.link?ext(D.links[item.link],item.action,'button'):internal(item.href,item.action,'button')}<p class="small">${escape(item.note)}</p>${projects}</div><figure class="proposal-art"><img src="assets/${image}" alt="Encuentros y prácticas compartidas, archivo audiovisual de Nueva Semilla" width="960" height="540"></figure></article><p class="photo-credit">Fotografías del archivo de los 20 años de Nueva Semilla.</p></div>`;
}
function gastronomy(id,detail){
 const active=D.gastronomy.find(x=>x.id===id)?.id||'tiendas';
 let body='';
 if(active==='tiendas') body=`<article class="split-feature"><div>${eyebrow('Villa María')}<h2 class="section-title">Almacén De Mi Tierra</h2><p>Un punto de encuentro con alimentos agroecológicos y sus productores en Villa María. Conocé el almacén y su propuesta.</p></div><aside class="feature-aside"><strong>Alimentos con origen.</strong><p>Visitá el sitio del almacén para consultar su oferta y formas de contacto.</p>${ext(D.links.tienda,'Visitar De Mi Tierra')}</aside></article>`;
 if(active==='ferias') body=`<article class="split-feature"><div>${eyebrow('Alpa Corral')}<h2 class="section-title">Encontrarnos en la feria.</h2><p>La Feria de Artesanos y Productores Locales de Alpa Corral es uno de los espacios donde Darío Colaneri acerca sus productos y comparte el trabajo del campo.</p><p>Conocé la feria a través de la información municipal. Consultá la programación vigente antes de viajar.</p></div><aside class="feature-aside"><strong>De las manos<br>de quienes producen.</strong><p>Alimentos, oficios y encuentros del territorio.</p>${ext(D.links.feria,'Conocer la feria de Alpa Corral')}</aside></article>`;
 if(active==='venta-directa'){
  const item=D.products.find(x=>x.id===detail);
  body=`${eyebrow('Conocer el origen')}<h2 class="section-title">Del productor a tu mesa.</h2>${subnav(D.products,'gastronomia/venta-directa',detail,'nested-nav','Productos de venta directa')}`;
  body+=item?`<article class="detail-intro product-detail">${eyebrow(item.producer)}<h2>${escape(item.name)}</h2><p class="description">${escape(item.description)}</p>${item.people?.length?`<div class="people-heading"><h3>Personas que comparten esta producción</h3></div>${people(item.people)}`:''}<p class="notice">Disponibilidad, presentaciones, precios y modalidades de entrega por confirmar con el emprendimiento.</p><div class="actions">${item.participant?internal('#quienes-somos/participantes/'+item.participant,'Conocer el emprendimiento'):item.id==='huevos'?internal('#asesoramiento/fitomedicina','Conocer el asesoramiento en fitomedicina'):internal('#asesoramiento/fungicultura','Conocer a Carolina')}${participantExternal(item.participant)}${internal('#quienes-somos/contacto','Contacto')}</div></article>`:`<div class="product-grid">${D.products.map(p=>`<a href="#gastronomia/venta-directa/${p.id}" class="product-card"><div class="product-icon" aria-hidden="true">${p.symbol}</div><h3>${escape(p.name)}</h3><p>${escape(p.producer)}</p><span class="text-link">Conocer el producto <span aria-hidden="true">↗</span></span></a>`).join('')}</div>`;
 }
 if(active==='experiencias'){
  const item=D.experiences.find(x=>x.id===detail);
  body=`${eyebrow('Experiencias & AgroTurismo')}<h2 class="section-title">Compartir el tiempo del campo.</h2>${subnav(D.experiences.map(x=>({...x,name:x.title+' · '+x.name})),'gastronomia/experiencias',detail,'nested-nav','Experiencias rurales')}`;
  body+=item?`<article class="detail-intro product-detail">${eyebrow('Establecimiento: '+item.name)}<h2>${escape(item.title)}</h2>${placeDetails(item,true)}<p class="description">${escape(item.description)}</p><p class="notice">Fechas, duración, valores y reservas se incorporarán cuando el emprendimiento confirme su propuesta.</p><div class="actions">${internal('#quienes-somos/participantes/'+item.participant,'Conocer el emprendimiento')}${participantExternal(item.participant)}${internal('#quienes-somos/contacto','Contacto')}</div></article>`:`<div class="experience-grid">${D.experiences.map(x=>`<article class="experience-card">${eyebrow(x.name)}<h2>${escape(x.title)}</h2><p>${escape(x.description)}</p>${internal('#gastronomia/experiencias/'+x.id,'Conocer la experiencia')}</article>`).join('')}</div>`;
 }
 if(active==='slow-food')body=`<article class="split-feature"><div>${eyebrow('Slow Food Farms')}<h2 class="section-title">El alimento, el territorio<br>y sus tiempos.</h2><p>Un espacio para acercarnos a iniciativas que ponen en el centro el origen de los alimentos, la biodiversidad y el vínculo con quienes producen.</p></div><aside class="feature-aside"><strong>Un espacio en construcción.</strong><p>Las granjas, su participación en Slow Food y sus propuestas se incorporarán una vez confirmadas.</p></aside></article>`;
 return intro('gastronomia')+`<div class="wrap page-body">${subnav(D.gastronomy,'gastronomia',active,'subnav','Secciones de Propuestas de Productos y Agroturismo')}${body}</div>`;
}
function map(){
 return intro('mapa')+`<div class="wrap page-body"><section class="map-feature"><div class="map-copy">${eyebrow('ALdeA · Agricultura libre de agroquímicos')}<h2>Otra agricultura<br>ya está<br><em>echando raíces.</em></h2><p>Explorá las experiencias reunidas en el mapa de la Agricultura Libre de Agroquímicos del centro-sur de Córdoba.</p><p>Un proyecto coordinado por Claudio Sarmiento, junto a Daniel Bellomo, que hace visibles distintas formas de producir y habitar el territorio.</p>${ext(D.links.mapa,'Abrir el mapa interactivo','button')}</div><div class="map-art"><svg viewBox="0 0 500 390" role="img" aria-label="Ilustración de territorios conectados; no representa ubicaciones geográficas"><g fill="none" stroke="#bec8ac" stroke-width="1.5"><path d="M-20 90Q130-50 290 100T540 40M-20 120Q140-20 300 130T540 70M-20 150Q150 10 310 160T540 100M-20 180Q160 40 320 190T540 130M-20 210Q170 70 330 220T540 160M-20 240Q180 100 340 250T540 190M-20 270Q190 130 350 280T540 220M-20 300Q200 160 360 310T540 250M-20 330Q210 190 370 340T540 280M-20 360Q220 220 380 370T540 310"/></g><path d="M160 76L244 160L359 105M244 160L174 278L338 299L359 105" fill="none" stroke="#798a63" stroke-width="2" stroke-dasharray="5 7"/><g fill="#253d30" stroke="#e2e7d6" stroke-width="8"><circle cx="160" cy="76" r="13"/><circle cx="244" cy="160" r="18"/><circle cx="359" cy="105" r="12"/><circle cx="174" cy="278" r="13"/><circle cx="338" cy="299" r="12"/></g><circle cx="244" cy="160" r="7" fill="#e5b260"/><text x="240" y="228" fill="#253d30" font-family="Georgia,serif" font-size="35">Córdoba</text></svg><small>Territorios conectados · Ilustración conceptual</small></div></section></div>`;
}
function mediaItems(filter='Todos'){
 return D.media.filter(x=>filter==='Todos'||x[1]===filter).sort((a,b)=>(parseInt(b[0])||0)-(parseInt(a[0])||0)).map(([year,type,title,desc,url])=>`<a class="media-item" href="${escape(url)}" target="_blank" rel="noopener noreferrer"><span class="media-symbol" aria-hidden="true">${type==='Video'?'▷':'≡'}</span><div><small>${escape(year)} · ${type==='Video'?'AUDIOVISUAL':'ENTREVISTA / ARTÍCULO'}</small><h3>${escape(title)}</h3><p>${escape(desc)}</p></div><span aria-hidden="true">↗</span></a>`).join('');
}
function archiveMedia(){
 const long='assets/“Si nos íbamos al pueblo, nos moríamos de pena”_ La decisión de Luciana de quedarse en las 100 hectáreas de La Milagrosa y pasar del tambo a hacer cría con base agroecológica – Bichos de Campo.mht';
 return `<details class="archive-details"><summary>Archivos de prensa conservados por el grupo</summary><p class="small muted">Copias de archivo en formato MHT para descargar y conservar.</p>${download('assets/redes-de-agroecologia-la-tinta.mht','Redes de agroecología · La Tinta')}${download('assets/webinar-agroecologia-unsam.mht','Webinar de agroecología · Noticias UNSAM')}${download(long,'La experiencia de Luciana · Bichos de Campo')}${ext('https://www.youtube.com/watch?v=0DU_IKDcAzE','Tierra sobre la mesa · Registro alternativo')}${ext('https://play.cine.ar/INCAA/produccion/8834','Tierra sobre la mesa · Cine.ar')}${ext('http://noqueremosinundarnos.blogspot.com/2017/12/cordoba-agroecologica-granja-malky-amboy.html','Córdoba Agroecológica · Granja Malky')}</details>`;
}
function bibliography(){
 const book=D.books[0];
 return `<article class="book-feature"><div class="book-object" aria-hidden="true"><small>CLAUDIO SARMIENTO<br>COMPILADOR</small><strong>Agroecología<br>a la Carta</strong><span>LECTURAS DEL TERRITORIO · 2022</span></div><div class="book-info">${eyebrow('Lectura destacada')}<h2>${book.name}</h2><p class="small">${escape(book.meta)}</p><p>${escape(book.description)}</p><div class="actions">${ext(encodeURI(book.file),'Leer el libro','button')}${download(book.file,'Descargar PDF')}</div></div></article><div class="documents">${D.books.slice(1).map(book=>`<article class="document"><small>${escape(book.meta)}</small><h3>${escape(book.name)}</h3><p>${escape(book.description)}</p><div class="actions">${ext(encodeURI(book.file),'Leer PDF')}${download(book.file,'Descargar')}</div></article>`).join('')}</div><details class="archive-details"><summary>Más fuentes y documentos del recorrido</summary>${ext('https://www.unirioeditora.com.ar/wp-content/uploads/2022/11/978-987-688-504-1.pdf','Agroecología a la Carta · Edición de UniRío')}${ext('http://www.unirioeditora.com.ar/wp-content/uploads/2020/12/978-987-688-419-8.pdf','Córdoba agroecológica · Sarmiento y Rossi')}${ext('https://rdu.unc.edu.ar/items/3064ac2c-114e-41c7-96a9-83cec45a7b68','Trabajo académico sobre La Mandinga · UNC')}${ext('https://www.ungs.edu.ar/wp-content/uploads/2021/10/Programa-Detallado-II-CAAE-2021.pdf','II Congreso Argentino de Agroecología · Programa 2021')}${ext('https://www.unrc.edu.ar/unrc/n_comp.cdc?nota=35761','Proyecto de alimentos y bioinsumos con Nueva Semilla · UNRC')}${ext('https://www.unrc.edu.ar/unrc/HojaAparte/pdf/HA_XXXIII_1066.pdf','Taller de rescate de enjambres · UNRC')}${ext('https://www.ayv.unrc.edu.ar/2026/06/02/nueva-publicacion-el-mapa-de-la-agricultura-libre-de-agroquimicos-del-centro-sur-de-cordoba-2025/','Publicación del Mapa ALdeA 2025 · FAV-UNRC, 2026')}${download('assets/Nueva_Semilla_Dossier_actualizado.docx','Dossier de fuentes del grupo · Septiembre 2026')}</details>`;
}
function about(id,detail){
 const active=D.about.find(x=>x.id===id)?.id||'agroecologia';
 let body='';
 if(active==='agroecologia')body=`<section class="reading-layout"><div><h2>Una forma de producir.<br>Una forma de relacionarnos.</h2><p>En Nueva Semilla entendemos la agroecología desde la experiencia compartida: cuidar el suelo, reconocer la diversidad, producir alimentos y sostener la vida de quienes habitan el campo.</p><p>Ese camino se construye con conocimientos técnicos y saberes de las familias productoras, con preguntas, ensayos y aprendizajes que circulan de un territorio a otro.</p><div class="principles"><article class="principle"><h3>Cuidar la tierra</h3><p>Mirar el suelo, el agua, las plantas, los animales y sus relaciones como parte de un sistema vivo.</p></article><article class="principle"><h3>Compartir saberes</h3><p>Aprender de la experiencia, escuchar a otras personas y acompañar los procesos de cada campo.</p></article><article class="principle"><h3>Acercar los alimentos</h3><p>Reconocer a quienes producen y crear vínculos entre la producción, la mesa y el territorio.</p></article></div><div class="detail-actions">${internal('#quienes-somos/bibliografia','Profundizar en nuestras lecturas')}</div></div><figure class="reading-photo"><img src="assets/archivo-85.png" width="960" height="540" alt="Infancias descubriendo la vida en un cultivo, archivo del grupo"><figcaption>Aprender junto a la tierra · Archivo de Nueva Semilla.</figcaption></figure></section>`;
 if(active==='historia')body=`<div class="timeline">${D.timeline.map(([year,title,desc,source])=>`<article class="timeline-item"><div class="timeline-year">${year}</div><div><h3>${escape(title)}</h3><p>${escape(desc)}</p>${source.startsWith('#')?internal(source,'Ver el recorrido'):ext(source,'Consultar la fuente')}</div></article>`).join('')}</div>`;
 if(active==='participantes'){
  const p=D.participants.find(x=>x.id===detail)||D.participants[0];
  const hasPhoto=(p.people||[]).some(id=>D.people[id]?.photo);
  const notice=hasPhoto?'La ficha seguirá creciendo con más historias, imágenes y detalles del establecimiento.':'Estamos completando esta ficha con fotografías y la presentación de sus participantes.';
  body=`<div class="participant-layout">${subnav(D.participants,'quienes-somos/participantes',p.id,'side-nav','Emprendimientos y participantes')}<article class="participant-panel">${eyebrow(p.id==='paula-edgardo'?'Participantes':'Establecimiento')}<h2>${escape(p.name)}</h2>${placeDetails(p,true)}<p>${escape(p.description)}</p>${p.people?people(p.people):''}<div class="actions">${participantLinks(p)}</div><p class="notice">${notice}</p></article></div>${detail?'':photoArchive()}`;
 }
 if(active==='contenido-mediatico')body=`<div class="media-filters" aria-label="Filtrar el archivo"><button type="button" class="filter-button" data-filter="Todos" aria-pressed="true">Todo</button><button type="button" class="filter-button" data-filter="Video" aria-pressed="false">Audiovisuales</button><button type="button" class="filter-button" data-filter="Lectura" aria-pressed="false">Lecturas</button><span class="result-count" role="status">${D.media.length} registros</span></div><div class="media-list">${mediaItems()}</div>${archiveMedia()}`;
 if(active==='20-anos')body=`<section><div class="anniversary-intro"><strong class="anniversary-number" aria-hidden="true">20</strong><div>${eyebrow('2006 — 2026 · Memoria colectiva')}<h2>Veinte años de encuentros.</h2><p>Personas, campos, aprendizajes y momentos que fueron haciendo a Nueva Semilla. Un recorrido audiovisual compartido por el grupo.</p></div></div><video class="anniversary-video" controls playsinline preload="metadata" poster="assets/archivo-15.png"><source src="assets/20-anos-de-nueva-semilla.mp4" type="video/mp4">Tu navegador no reproduce este video. Podés descargarlo con el enlace de abajo.</video><p class="video-caption">20 años de Nueva Semilla · Archivo del grupo.</p>${download('assets/20-anos-de-nueva-semilla.mp4','Descargar el video')}</section>`;
 if(active==='bibliografia')body=bibliography();
 if(active==='contacto')body=`<section class="contact-layout"><div>${eyebrow('Sigamos en contacto')}<h2>Todo empieza<br>con un encuentro.</h2><p>¿Querés conocer más sobre Nueva Semilla, acercarte a una experiencia o explorar los saberes que comparte la red?</p><p>Podés visitar la página de Facebook del grupo. Los canales directos de consulta se incorporarán próximamente.</p><div class="detail-actions">${ext(D.links.facebook,'Visitar Nueva Semilla en Facebook','button')}</div></div><div><article class="contact-card"><h3>Consultas y actividades</h3><p>Estamos preparando los canales de consulta por WhatsApp y por la web para acercarte a las personas y propuestas de la red.</p></article><article class="contact-card"><h3>Productos y experiencias</h3><p>La disponibilidad, las reservas y las formas de pago se confirmarán con cada emprendimiento. Las consultas y los pagos todavía no están habilitados en este sitio.</p></article></div></section>`;
 return intro('quienes-somos')+`<div class="wrap page-body">${subnav(D.about,'quienes-somos',active,'subnav','Secciones de Quiénes Somos')}${body}</div>`;
}
const aliases={'contenido-mediatico':'quienes-somos/contenido-mediatico','bibliografia':'quienes-somos/bibliografia','veinte-anos':'quienes-somos/20-anos'};
let firstRender=true;
function route(){
 let hash=location.hash.slice(1)||'inicio';
 if(aliases[hash]){hash=aliases[hash];history.replaceState(null,'','#'+hash);}
 const [section,id,detail]=hash.split('/');
 const renders={asesoramiento:()=>advice(id),propuestas:()=>proposals(id),gastronomia:()=>gastronomy(id,detail),mapa:()=>map(),'quienes-somos':()=>about(id,detail)};
 main.innerHTML=renders[section]?renders[section]():home();
 document.title=(names[section]?names[section]+' · ':'')+'Nueva Semilla · Territorios agroecológicos';
 nav.querySelectorAll('a').forEach(a=>{if(a.dataset.section===section)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 nav.classList.remove('open');menu.setAttribute('aria-expanded','false');
 if(!firstRender)main.focus({preventScroll:true});
 if(hash==='explorar')document.querySelector('#explorar')?.scrollIntoView({behavior:'auto'});else window.scrollTo({top:0,behavior:'instant'});
 firstRender=false;
}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}});
document.addEventListener('click',e=>{
 const link=e.target.closest('a');
 if(!link)return;
 if(link.classList.contains('skip-link')){e.preventDefault();main.focus();return;}
 if(link.getAttribute('href')==='#inicio'&&location.hash==='#inicio'){
  e.preventDefault();main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});
 }
});
main.addEventListener('click',e=>{
 const button=e.target.closest('[data-filter]');
 if(!button)return;
 main.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const filter=button.dataset.filter;
 main.querySelector('.media-list').innerHTML=mediaItems(filter);
 main.querySelector('.result-count').textContent=D.media.filter(x=>filter==='Todos'||x[1]===filter).length+' registros';
});
window.addEventListener('hashchange',route);
route();
})();
