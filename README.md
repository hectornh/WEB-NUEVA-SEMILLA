# Nueva Semilla · Rediseño, septiembre 2026

Sitio estático navegable desde `index.html`. Conserva los documentos y el video locales. No requiere instalación para abrirlo en el equipo.

## Organización

- `index.html`: estructura compartida, cabecera, cinco categorías, pie y metadatos.
- `site.css`: única hoja activa; diseño adaptable, tipografía, navegación y encuadres. Los tamaños comunes se controlan mediante las variables `--text-*` del bloque `:root`.
- `content.js`: personas, especialidades, productos, emprendimientos, enlaces, cronología y bibliografía.
- `script.js`: navegación por fragmentos, vistas, filtros del archivo y menú móvil.
- `assets/`: logo nuevo, video, fotogramas de archivo, foto de Luciana, PDFs, MHT y dossier de fuentes.

Las hojas de estilo de la maqueta anterior permanecen guardadas pero ya no se cargan. La copia de sus archivos de interfaz está en la carpeta hermana `nueva-semilla-anterior-2026-09-13`; los originales de los materiales del grupo tampoco se modificaron.

## Enlaces y revisión editorial

Los enlaces de las secciones se pueden compartir con su fragmento: `#asesoramiento/apicola`, `#gastronomia/venta-directa/quesos`, `#quienes-somos/participantes/la-pequelette`.

Los nombres de los emprendimientos y la asignación de referentes siguen la última indicación de Héctor. Ver `../Pendientes-Nueva-Semilla.md` para los retratos, las ambigüedades de nombres y los datos faltantes. Se distingue El Milagro de La Milagrosa hasta contar con confirmación.

Las fotografías de portada, comunidad y propuestas conservan la proporción 16:9 del MP4 aportado. Los retratos tienen puntos focales en `site.css`, mediante `--portrait-focus`. La portada del libro en el acceso a Bibliografía es la imagen aportada por Héctor y se muestra completa. `redesign.css` y `typography.css` se conservan como antecedentes; no se cargan ni deben editarse para cambios nuevos.

La Feria de Alpa Corral enlaza a información municipal de la feria; no se infieren horarios vigentes. Workaway enlaza a la plataforma general y no implica un perfil del grupo. Slow Food Farms no atribuye una membresía o certificación a ningún campo.

## Preparación para el backend

Esta entrega implementa la vitrina y su navegación. No contiene un formulario operativo ni envíos simulados. Los datos de consulta y pago de `NuevaSemilla.contact` permanecen en `null`. Los identificadores estables de personas, especialidades, productos y experiencias permiten asociar futuras consultas con su contexto sin cambiar el contenido editorial.

Próxima integración, cuando el usuario aporte los canales y autorice su conexión:

1. WhatsApp: enlace al número oficial con texto de consulta y contexto elegido. No confirmar envíos que sólo abran WhatsApp.
2. Consultas web: formulario accesible con validación en cliente y servidor, estados de envío reales, destinatario definido y protección contra abuso. Mostrar éxito sólo tras respuesta satisfactoria del servidor. No colocar claves ni credenciales en estos archivos públicos.
3. Transferencias: instrucciones bancarias del titular autorizado y registro de referencia de pago. La recepción de un comprobante no acredita fondos; el servidor debe distinguir “pendiente de verificación” de “confirmado”.

No se realizó publicación pública. El sitio conserva el flujo local de revisión de esta tarea.
