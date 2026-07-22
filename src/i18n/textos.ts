export type Idioma = 'es' | 'ca' | 'de'

export type SerieTexto = {
  titulo: string
  nota: string
  alt: string
  subtitulo?: string
  destacada?: boolean
  historia?: string[]
  resumen?: string
  fuente?: { texto: string; url: string }
}

export type Textos = {
  meta: { titulo: string; descripcion: string }
  nav: { trabajo: string; sobre: string; cv: string; contacto: string }
  hero: { sub: string }
  trabajo: {
    titulo: string
    verMas: string
    verMenos: string
    anterior: string
    siguiente: string
    compartir: string
    copiado: string
    verProyecto: string
  }
  sobre: { titulo: string; p1: string; p2: string }
  cv: {
    titulo: string
    bloques: {
      publicaciones: string
      organizaciones: string
      cine: string
      encurso: string
    }
    spiegel: { titulo: string; detalle: string }
    openarms: { titulo: string; detalle: string }
    fotofija: { titulo: string; detalle: string }
    documental: { titulo: string; detalle: string }
  }
  contacto: { titulo: string; pregunta: string; escribeme: string }
  series: Record<string, SerieTexto>
}

export const textos: Record<Idioma, Textos> = {
  es: {
    meta: {
      titulo: 'Fabian Suspensivo — fotógrafo. Música y fotoperiodismo, Barcelona',
      descripcion:
        'Fabian Suspensivo, fotógrafo chileno en Barcelona. Conciertos, sesiones a artistas y fotoperiodismo. Publicado en Der Spiegel. Colaboración con Open Arms.',
    },
    nav: { trabajo: 'Trabajo', sobre: 'Sobre mí', cv: 'CV', contacto: 'Contacto' },
    hero: {
      sub: 'Fotógrafo. Conciertos, sesiones a artistas y fotoperiodismo. Barcelona.',
    },
    trabajo: {
      titulo: 'Trabajo',
      verMas: 'Ver las {n} fotos',
      verMenos: 'Mostrar menos',
      anterior: 'Anterior',
      siguiente: 'Siguiente',
      compartir: 'Compartir',
      copiado: 'Enlace copiado',
      verProyecto: 'Ver el proyecto',
    },
    sobre: {
      titulo: 'Sobre mí',
      p1: 'Fabian Suspensivo es fotoperiodista y fotógrafo documental chileno, radicado en Barcelona. Fotografía la actualidad y los movimientos sociales de Catalunya, y su trabajo se extiende al retrato, la cobertura de conciertos y la foto fija para cine.',
      p2: 'Autodidacta, ha colaborado con medios y organizaciones en Chile y en Europa, con publicaciones que incluyen Der Spiegel y ADN y colaboraciones como las de Open Arms y Top Manta. Trabaja con la mirada puesta en el reportaje para revistas, periódicos y agencias internacionales.',
    },
    cv: {
      titulo: 'CV',
      bloques: {
        publicaciones: 'Publicaciones',
        organizaciones: 'Organizaciones',
        cine: 'Cine y producción',
        encurso: 'En curso',
      },
      spiegel: {
        titulo: 'Der Spiegel (Alemania)',
        detalle:
          'Reportaje fotográfico del caso de hantavirus del barco Hondius, cubierto desde el puerto de Tenerife con acceso de prensa acreditada.',
      },
      openarms: {
        titulo: 'Open Arms',
        detalle: 'Colaboración fotográfica con la ONG de rescate en el mar.',
      },
      fotofija: {
        titulo: 'Foto fija',
        detalle: 'Fotografía de rodaje para producción audiovisual.',
      },
      documental: {
        titulo: 'Serie documental, Catalunya (2026)',
        detalle:
          'Trabajo fotográfico en curso sobre las problemáticas sociales en Catalunya: vivienda, huelgas, calle.',
      },
    },
    contacto: {
      titulo: 'Contacto',
      pregunta: '¿Un concierto, una sesión, un encargo editorial?',
      escribeme: 'Escríbeme',
    },
    series: {
      'bodas': {
        titulo: 'Bodas',
        nota: 'Fotografía de bodas',
        alt: 'Fotografía de bodas, Fabian Suspensivo',
      },
      'ball-de-nuria': {
        titulo: 'El Ball de Núria',
        subtitulo: 'Este proyecto se expondrá en Perpinyà, en el festival OFF.',
        nota: 'Núria, 85 años, y la vida después de Josep. Blanes.',
        alt: 'Núria, 85 años, en su casa de Blanes; ensayo documental El Ball de Núria',
        destacada: true,
        resumen:
          'A los 14 años, Núria conoció a Josep en un baile; él le pidió matrimonio con una cámara en lugar de un anillo. Hoy, a sus 85 y ya sin él, habita la casa que construyeron juntos: el amor que queda y el baile que nunca ha dejado de sonar.',
        historia: [
          'Blanes, años 50. A los 14 años, los padres de Núria la acompañan a un baile en los Terrassans del pueblo. Allí conoce a Josep. Ante la inminencia del servicio militar y el miedo de ella a enamorarse a través de cartas, Josep decide pedir su mano. Sin dinero para un anillo, le regala una cámara de 120 mm en señal de compromiso. A los 28 años, con sus propias manos, comienzan a construir su casa. Nunca tuvieron hijos, ni sintieron que los necesitasen; se tenían el uno al otro.',
          'Cincuenta y cuatro años después, el baile cambió de ritmo. Tras un diagnóstico de cáncer de colon, Núria se convirtió en las manos y el soporte de Josep, cuidándolo y sosteniendo su peso hasta que su propio cuerpo protestó con un ataque de vértigo. Tras la partida de Josep, luego de sesenta y cuatro años de matrimonio, y para calmar a su familia, Núria aceptó colgarse el botón de teleasistencia de la seguridad social, aunque su espíritu sigue siendo el de la mujer independiente que siempre fue. Menos de un año después, llegó la pandemia del COVID-19, empujándola a una lúcida reflexión: la muerte de Josep, rodeado y despedido por los suyos en paz, fue el último acto de fortuna de su vida en común.',
          'Hoy, a sus 85 años, Núria habita los espacios de la casa construida a cuatro manos. Este proyecto es la foto de esa memoria: un homenaje al amor que queda, a la dignidad del cuidado, a la viudedad habitada con fuerza y a ese primer baile que, a pesar de la ausencia, nunca ha dejado de sonar.',
        ],
      },
      'open-arms-serie': {
        titulo: 'Open Arms',
        nota: 'Rescate en el mar, con la ONG',
        alt: 'Rescate de Open Arms en el mar Mediterráneo',
        historia: [
          'Mediterráneo central, mayo de 2026. El Open Arms zarpa de Barcelona hacia la zona de rescate entre Malta y Libia, la frontera más letal del mundo: desde 2014 han muerto o desaparecido allí cerca de 31.000 personas. Es la misión 126, del 25 de mayo al 11 de junio.',
          'En alta mar, la tripulación encuentra una embarcación precaria con 58 personas a bordo, 24 de ellas menores que viajan sin ningún adulto; la más pequeña tiene 10 años. Esta serie retrata ese pulso: la guardia del horizonte, el rescate, los chalecos naranjas, las manos que sostienen a quien acaba de salir del agua. En el mar, cada minuto cuenta.',
        ],
        fuente: {
          texto: 'Sobre la misión 126 de Open Arms',
          url: 'https://www.openarms.es/es/que-hacemos/misiones/mediterraneo',
        },
      },
      tenerife: {
        titulo: 'El caso Hondius',
        nota: 'Tenerife, publicado en Der Spiegel',
        alt: 'Cobertura del caso de hantavirus del barco Hondius en Tenerife',
        historia: [
          'Tenerife, mayo de 2026. El Hondius, un buque de expediciones polares, vuelve del hemisferio sur con un brote de hantavirus a bordo. Tras semanas de incertidumbre y tres fallecidos desde que zarpó de Sudamérica el 1 de abril, España le permite atracar en el puerto de Tenerife el 10 de mayo con 147 personas a bordo, entre pasajeros y tripulación.',
          'Durante tres días, con acceso restringido a la prensa acreditada, esta serie documenta la llegada y la evacuación: los pasajeros trasladados en aviones militares y del Estado, el cerco sanitario, la espera de las familias pendientes del horizonte. El hantavirus, que se transmite por contacto con roedores, mantuvo al barco aislado mientras el mundo lo miraba de lejos.',
        ],
        fuente: {
          texto: 'Reportaje de Jonah Lemm para Der Spiegel',
          url: 'https://www.spiegel.de/ausland/hantavirus-auf-der-hondius-einer-ruft-wenn-irgendjemand-das-schiff-sieht-sagt-uns-bescheid-a-c741520f-5596-49cd-8c47-e28909ac47f6',
        },
      },
      'top-manta': {
        titulo: 'Top Manta',
        nota: 'Cursa Top Manta y cursa antirracista, Barcelona',
        alt: 'Cursa Top Manta en Barcelona',
        historia: [
          'Barcelona, 2015. Un grupo de vendedores ambulantes, en su mayoría migrantes de África occidental, se organiza en el Sindicat Popular de Venedors Ambulants para defenderse del racismo institucional, la persecución y la criminalización de su manera de ganarse la vida en la manta.',
          'En 2017 el sindicato lanza su propia marca, Top Manta: ropa legal hecha por gente ilegal. Es una cooperativa con talleres de costura y serigrafía y una tienda en el Raval donde diseñan y fabrican ropa, zapatillas y equipación deportiva. Su logo une la forma de una manta y la de un cayuco, el mismo con el que muchos cruzaron el mar.',
          'Más que una marca, es una comunidad: busca un trabajo digno y con papeles que saque a la gente de la calle, y sostiene apoyo legal, deporte antirracista (el fútbol y la cursa) y una lucha diaria por la dignidad. Esta serie retrata ese pulso, del taller a la calle.',
        ],
        fuente: {
          texto: 'Top Manta · Sindicat Popular de Venedors Ambulants',
          url: 'https://www.instagram.com/topmanta_bcn/',
        },
      },
      musica: {
        titulo: 'Música',
        nota: 'Conciertos y sesiones a artistas',
        alt: 'Concierto, fotografía de música en vivo',
      },
      prensa: {
        titulo: 'Prensa',
        nota: 'Selección de fotoperiodismo',
        alt: 'Fotoperiodismo y trabajo de prensa en Barcelona y Catalunya',
      },
    },
  },
  ca: {
    meta: {
      titulo: 'Fabian Suspensivo — fotògraf. Música i fotoperiodisme, Barcelona',
      descripcion:
        'Fabian Suspensivo, fotògraf xilè a Barcelona. Concerts, sessions a artistes i fotoperiodisme. Publicat a Der Spiegel. Col·laboració amb Open Arms.',
    },
    nav: { trabajo: 'Treball', sobre: 'Sobre mi', cv: 'CV', contacto: 'Contacte' },
    hero: {
      sub: 'Fotògraf. Concerts, sessions a artistes i fotoperiodisme. Barcelona.',
    },
    trabajo: {
      titulo: 'Treball',
      verMas: 'Veure les {n} fotos',
      verMenos: 'Mostra’n menys',
      anterior: 'Anterior',
      siguiente: 'Següent',
      compartir: 'Comparteix',
      copiado: 'Enllaç copiat',
      verProyecto: 'Veure el projecte',
    },
    sobre: {
      titulo: 'Sobre mi',
      p1: 'Fabian Suspensivo és fotoperiodista i fotògraf documental xilè, resident a Barcelona. Fotografia l’actualitat i els moviments socials de Catalunya, i el seu treball s’estén al retrat, la cobertura de concerts i la foto fixa per a cinema.',
      p2: 'Autodidacta, ha col·laborat amb mitjans i organitzacions a Xile i a Europa, amb publicacions que inclouen Der Spiegel i ADN i col·laboracions com les d’Open Arms i Top Manta. Treballa amb la mirada posada en el reportatge per a revistes, diaris i agències internacionals.',
    },
    cv: {
      titulo: 'CV',
      bloques: {
        publicaciones: 'Publicacions',
        organizaciones: 'Organitzacions',
        cine: 'Cinema i producció',
        encurso: 'En curs',
      },
      spiegel: {
        titulo: 'Der Spiegel (Alemanya)',
        detalle:
          'Reportatge fotogràfic del cas d’hantavirus del vaixell Hondius, cobert des del port de Tenerife amb accés de premsa acreditada.',
      },
      openarms: {
        titulo: 'Open Arms',
        detalle: 'Col·laboració fotogràfica amb l’ONG de rescat al mar.',
      },
      fotofija: {
        titulo: 'Foto fixa',
        detalle: 'Fotografia de rodatge per a producció audiovisual.',
      },
      documental: {
        titulo: 'Sèrie documental, Catalunya (2026)',
        detalle:
          'Treball fotogràfic en curs sobre les problemàtiques socials a Catalunya: habitatge, vagues, carrer.',
      },
    },
    contacto: {
      titulo: 'Contacte',
      pregunta: 'Un concert, una sessió, un encàrrec editorial?',
      escribeme: 'Escriu-me',
    },
    series: {
      'bodas': {
        titulo: 'Casaments',
        nota: 'Fotografia de casaments',
        alt: 'Fotografia de casaments, Fabian Suspensivo',
      },
      'ball-de-nuria': {
        titulo: 'El Ball de Núria',
        subtitulo: 'Aquest projecte s’exposarà a Perpinyà, al festival OFF.',
        nota: 'La Núria, 85 anys, i la vida després d’en Josep. Blanes.',
        alt: 'La Núria, 85 anys, a casa seva a Blanes; assaig documental El Ball de Núria',
        destacada: true,
        resumen:
          'Als 14 anys, la Núria va conèixer en Josep en un ball; ell li va demanar matrimoni amb una càmera en lloc d’un anell. Avui, als seus 85 i ja sense ell, habita la casa que van construir junts: l’amor que resta i el ball que no ha deixat mai de sonar.',
        historia: [
          'Blanes, anys cinquanta. Als 14 anys, els pares de la Núria l’acompanyen a un ball als Terrassans del poble. Allà coneix en Josep. Davant la imminència del servei militar i la por d’ella a enamorar-se a través de cartes, en Josep decideix demanar-li la mà. Sense diners per a un anell, li regala una càmera de 120 mm com a senyal de compromís. Als 28 anys, amb les seves pròpies mans, comencen a construir casa seva. Mai no van tenir fills, ni van sentir que els necessitessin; es tenien l’un a l’altre.',
          'Cinquanta-quatre anys després, el ball va canviar de ritme. Després d’un diagnòstic de càncer de còlon, la Núria es va convertir en les mans i el suport d’en Josep, cuidant-lo i aguantant-ne el pes fins que el seu propi cos va protestar amb un atac de vertigen. Després de la partida d’en Josep, al cap de seixanta-quatre anys de matrimoni, i per tranquil·litzar la família, la Núria va acceptar penjar-se el botó de teleassistència de la seguretat social, tot i que el seu esperit continua sent el de la dona independent que sempre ha estat. Menys d’un any després, va arribar la pandèmia de la COVID-19, empenyent-la cap a una reflexió lúcida: la mort d’en Josep, envoltat i acomiadat pels seus en pau, va ser l’últim acte de fortuna de la seva vida en comú.',
          'Avui, als seus 85 anys, la Núria habita els espais de la casa construïda a quatre mans. Aquest projecte és la fotografia d’aquesta memòria: un homenatge a l’amor que resta, a la dignitat de la cura, a la viduïtat habitada amb força i a aquell primer ball que, malgrat l’absència, no ha deixat mai de sonar.',
        ],
      },
      'open-arms-serie': {
        titulo: 'Open Arms',
        nota: 'Rescat al mar, amb l’ONG',
        alt: 'Rescat d’Open Arms al mar Mediterrani',
        historia: [
          'Mediterrani central, maig de 2026. L’Open Arms salpa de Barcelona cap a la zona de rescat entre Malta i Líbia, la frontera més letal del món: des del 2014 hi han mort o desaparegut prop de 31.000 persones. És la missió 126, del 25 de maig a l’11 de juny.',
          'En alta mar, la tripulació troba una embarcació precària amb 58 persones a bord, 24 de les quals menors que viatgen sense cap adult; la més petita té 10 anys. Aquesta sèrie retrata aquell pols: la vigilància de l’horitzó, el rescat, les armilles taronges, les mans que sostenen qui acaba de sortir de l’aigua. Al mar, cada minut compta.',
        ],
        fuente: {
          texto: 'Sobre la missió 126 d’Open Arms',
          url: 'https://www.openarms.es/es/que-hacemos/misiones/mediterraneo',
        },
      },
      tenerife: {
        titulo: 'El cas Hondius',
        nota: 'Tenerife, publicat a Der Spiegel',
        alt: 'Cobertura del cas d’hantavirus del vaixell Hondius a Tenerife',
        historia: [
          'Tenerife, maig de 2026. El Hondius, un vaixell d’expedicions polars, torna de l’hemisferi sud amb un brot d’hantavirus a bord. Després de setmanes d’incertesa i tres morts des que va salpar de Sud-amèrica l’1 d’abril, Espanya li permet atracar al port de Tenerife el 10 de maig amb 147 persones a bord, entre passatgers i tripulació.',
          'Durant tres dies, amb accés restringit a la premsa acreditada, aquesta sèrie documenta l’arribada i l’evacuació: els passatgers traslladats en avions militars i de l’Estat, el setge sanitari, l’espera de les famílies pendents de l’horitzó. L’hantavirus, que es transmet pel contacte amb rosegadors, va mantenir el vaixell aïllat mentre el món el mirava de lluny.',
        ],
        fuente: {
          texto: 'Reportatge de Jonah Lemm per a Der Spiegel',
          url: 'https://www.spiegel.de/ausland/hantavirus-auf-der-hondius-einer-ruft-wenn-irgendjemand-das-schiff-sieht-sagt-uns-bescheid-a-c741520f-5596-49cd-8c47-e28909ac47f6',
        },
      },
      'top-manta': {
        titulo: 'Top Manta',
        nota: 'Cursa Top Manta i cursa antiracista, Barcelona',
        alt: 'Cursa Top Manta a Barcelona',
        historia: [
          'Barcelona, 2015. Un grup de venedors ambulants, majoritàriament migrants de l’Àfrica occidental, s’organitza en el Sindicat Popular de Venedors Ambulants per defensar-se del racisme institucional, la persecució i la criminalització de la seva manera de guanyar-se la vida a la manta.',
          'El 2017 el sindicat llança la seva pròpia marca, Top Manta: roba legal feta per gent il·legal. És una cooperativa amb tallers de costura i serigrafia i una botiga al Raval on dissenyen i fabriquen roba, sabatilles i equipament esportiu. El seu logotip uneix la forma d’una manta i la d’un caiuc, el mateix amb què molts van creuar el mar.',
          'Més que una marca, és una comunitat: busca una feina digna i amb papers que tregui la gent del carrer, i sosté suport legal, esport antiracista (el futbol i la cursa) i una lluita diària per la dignitat. Aquesta sèrie retrata aquell pols, del taller al carrer.',
        ],
        fuente: {
          texto: 'Top Manta · Sindicat Popular de Venedors Ambulants',
          url: 'https://www.instagram.com/topmanta_bcn/',
        },
      },
      musica: {
        titulo: 'Música',
        nota: 'Concerts i sessions a artistes',
        alt: 'Concert, fotografia de música en directe',
      },
      prensa: {
        titulo: 'Premsa',
        nota: 'Selecció de fotoperiodisme',
        alt: 'Fotoperiodisme i treball de premsa a Barcelona i Catalunya',
      },
    },
  },
  de: {
    meta: {
      titulo: 'Fabian Suspensivo — Fotograf. Musik und Fotojournalismus, Barcelona',
      descripcion:
        'Fabian Suspensivo, chilenischer Fotograf in Barcelona. Konzerte, Künstlersessions und Fotojournalismus. Veröffentlicht im Spiegel. Zusammenarbeit mit Open Arms.',
    },
    nav: { trabajo: 'Arbeit', sobre: 'Über mich', cv: 'CV', contacto: 'Kontakt' },
    hero: {
      sub: 'Fotograf. Konzerte, Künstlersessions und Fotojournalismus. Barcelona.',
    },
    trabajo: {
      titulo: 'Arbeit',
      verMas: 'Alle {n} Fotos ansehen',
      verMenos: 'Weniger anzeigen',
      anterior: 'Zurück',
      siguiente: 'Weiter',
      compartir: 'Teilen',
      copiado: 'Link kopiert',
      verProyecto: 'Projekt ansehen',
    },
    sobre: {
      titulo: 'Über mich',
      p1: 'Fabian Suspensivo ist ein chilenischer Fotojournalist und Dokumentarfotograf mit Sitz in Barcelona. Er fotografiert das aktuelle Geschehen und die sozialen Bewegungen in Katalonien; seine Arbeit umfasst auch Porträts, Konzertfotografie und Standfotografie fürs Kino.',
      p2: 'Als Autodidakt hat er mit Medien und Organisationen in Chile und Europa zusammengearbeitet, mit Veröffentlichungen unter anderem im Spiegel und bei ADN sowie Kooperationen wie mit Open Arms und Top Manta. Er arbeitet mit Blick auf Reportagen für Magazine, Zeitungen und internationale Agenturen.',
    },
    cv: {
      titulo: 'CV',
      bloques: {
        publicaciones: 'Veröffentlichungen',
        organizaciones: 'Organisationen',
        cine: 'Film und Produktion',
        encurso: 'Laufend',
      },
      spiegel: {
        titulo: 'Der Spiegel (Deutschland)',
        detalle:
          'Fotoreportage zum Hantavirus-Fall des Schiffs Hondius, berichtet aus dem Hafen von Teneriffa mit akkreditiertem Pressezugang.',
      },
      openarms: {
        titulo: 'Open Arms',
        detalle: 'Fotografische Zusammenarbeit mit der Seenotrettungs-NGO.',
      },
      fotofija: {
        titulo: 'Setfotografie',
        detalle: 'Standfotografie für audiovisuelle Produktionen.',
      },
      documental: {
        titulo: 'Dokumentarserie, Katalonien (2026)',
        detalle:
          'Laufende fotografische Arbeit über soziale Fragen in Katalonien: Wohnen, Streiks, Straße.',
      },
    },
    contacto: {
      titulo: 'Kontakt',
      pregunta: 'Ein Konzert, eine Session, ein redaktioneller Auftrag?',
      escribeme: 'Schreib mir',
    },
    series: {
      'bodas': {
        titulo: 'Hochzeiten',
        nota: 'Hochzeitsfotografie',
        alt: 'Hochzeitsfotografie, Fabian Suspensivo',
      },
      'ball-de-nuria': {
        titulo: 'El Ball de Núria',
        subtitulo: 'Dieses Projekt wird in Perpignan beim OFF-Festival ausgestellt.',
        nota: 'Núria, 85 Jahre, und das Leben nach Josep. Blanes.',
        alt: 'Núria, 85 Jahre, in ihrem Haus in Blanes; Dokumentaressay El Ball de Núria',
        destacada: true,
        resumen:
          'Mit 14 lernte Núria bei einem Tanz Josep kennen; er hielt mit einer Kamera statt eines Rings um ihre Hand an. Heute, mit 85 und ohne ihn, bewohnt sie das Haus, das sie gemeinsam bauten: die Liebe, die bleibt, und der Tanz, der nie aufgehört hat zu klingen.',
        historia: [
          'Blanes, in den fünfziger Jahren. Mit 14 Jahren begleiten Núrias Eltern sie zu einem Tanz bei den Terrassans des Dorfes. Dort lernt sie Josep kennen. Angesichts des bevorstehenden Militärdienstes und ihrer Angst, sich über Briefe zu verlieben, beschließt Josep, um ihre Hand anzuhalten. Ohne Geld für einen Ring schenkt er ihr als Zeichen des Versprechens eine 120-mm-Kamera. Mit 28 Jahren beginnen sie, mit ihren eigenen Händen ihr Haus zu bauen. Sie hatten nie Kinder und hatten auch nicht das Gefühl, welche zu brauchen; sie hatten einander.',
          'Vierundfünfzig Jahre später änderte der Tanz seinen Takt. Nach der Diagnose Darmkrebs wurde Núria zu Joseps Händen und Halt: Sie pflegte ihn und trug sein Gewicht, bis ihr eigener Körper mit einem Schwindelanfall protestierte. Nach Joseps Tod, nach vierundsechzig Jahren Ehe, und um ihre Familie zu beruhigen, ließ sich Núria den Notrufknopf des sozialen Hausnotrufs umhängen, auch wenn ihr Geist der einer unabhängigen Frau bleibt, die sie immer war. Weniger als ein Jahr später kam die COVID-19-Pandemie und trieb sie zu einer klaren Erkenntnis: Joseps Tod, im Frieden von seinen Angehörigen umgeben und verabschiedet, war der letzte Glücksfall ihres gemeinsamen Lebens.',
          'Heute, mit 85 Jahren, bewohnt Núria die Räume des mit vier Händen gebauten Hauses. Dieses Projekt ist das Foto jener Erinnerung: eine Hommage an die Liebe, die bleibt, an die Würde der Fürsorge, an das mit Kraft bewohnte Witwendasein und an jenen ersten Tanz, der trotz der Abwesenheit nie aufgehört hat zu klingen.',
        ],
      },
      'open-arms-serie': {
        titulo: 'Open Arms',
        nota: 'Seenotrettung, mit der NGO',
        alt: 'Rettungseinsatz von Open Arms im Mittelmeer',
        historia: [
          'Zentrales Mittelmeer, Mai 2026. Die Open Arms läuft von Barcelona in das Rettungsgebiet zwischen Malta und Libyen aus, die tödlichste Grenze der Welt: Seit 2014 sind dort rund 31.000 Menschen gestorben oder verschwunden. Es ist die Mission 126, vom 25. Mai bis zum 11. Juni.',
          'Auf hoher See findet die Crew ein seeuntüchtiges Boot mit 58 Menschen an Bord, 24 davon Minderjährige, die ohne jede Begleitung reisen; das jüngste ist 10 Jahre alt. Diese Serie zeigt den Puls jener Tage: das Absuchen des Horizonts, die Rettung, die orangefarbenen Westen, die Hände, die jene stützen, die gerade aus dem Wasser kommen. Auf See zählt jede Minute.',
        ],
        fuente: {
          texto: 'Über die Mission 126 von Open Arms',
          url: 'https://www.openarms.es/es/que-hacemos/misiones/mediterraneo',
        },
      },
      tenerife: {
        titulo: 'Der Fall Hondius',
        nota: 'Teneriffa, veröffentlicht im Spiegel',
        alt: 'Berichterstattung zum Hantavirus-Fall des Schiffs Hondius auf Teneriffa',
        historia: [
          'Teneriffa, Mai 2026. Die Hondius, ein Polar-Expeditionsschiff, kehrt aus dem Süden mit einem Hantavirus-Ausbruch an Bord zurück. Nach Wochen der Ungewissheit und drei Todesfällen, seit sie am 1. April Südamerika verlassen hatte, erlaubt Spanien ihr am 10. Mai das Anlegen im Hafen von Teneriffa mit 147 Menschen an Bord, Passagieren und Besatzung.',
          'Drei Tage lang, mit beschränktem Zugang für akkreditierte Presse, dokumentiert diese Serie die Ankunft und die Evakuierung: die Passagiere, die in Militär- und Staatsflugzeugen ausgeflogen werden, die Gesundheitssperre, das Warten der Angehörigen mit Blick auf den Horizont. Das Hantavirus, das durch Kontakt mit Nagetieren übertragen wird, hielt das Schiff isoliert, während die Welt aus der Ferne zusah.',
        ],
        fuente: {
          texto: 'Reportage von Jonah Lemm für Der Spiegel',
          url: 'https://www.spiegel.de/ausland/hantavirus-auf-der-hondius-einer-ruft-wenn-irgendjemand-das-schiff-sieht-sagt-uns-bescheid-a-c741520f-5596-49cd-8c47-e28909ac47f6',
        },
      },
      'top-manta': {
        titulo: 'Top Manta',
        nota: 'Cursa Top Manta und antirassistischer Lauf, Barcelona',
        alt: 'Cursa Top Manta in Barcelona',
        historia: [
          'Barcelona, 2015. Eine Gruppe von Straßenverkäufern, überwiegend Migranten aus Westafrika, schließt sich in der Sindicat Popular de Venedors Ambulants (Volksgewerkschaft der Straßenverkäufer) zusammen, um sich gegen institutionellen Rassismus, Verfolgung und die Kriminalisierung ihres Broterwerbs auf der Decke zu wehren.',
          '2017 bringt die Gewerkschaft ihre eigene Marke heraus: Top Manta, „legale Kleidung von illegalen Menschen“. Es ist eine Kooperative mit Näh- und Siebdruckwerkstätten und einem Laden im Viertel Raval, wo sie Kleidung, Sneaker und Sportbekleidung entwerfen und herstellen. Ihr Logo verbindet die Form einer Decke mit der eines Cayucos, jenes Boots, mit dem viele das Meer überquerten.',
          'Mehr als eine Marke ist es eine Gemeinschaft: Sie sucht würdige, legale Arbeit, die die Menschen von der Straße holt, und trägt Rechtshilfe, antirassistischen Sport (Fußball und den Lauf) und einen täglichen Kampf um die Würde. Diese Serie zeigt diesen Puls, von der Werkstatt bis auf die Straße.',
        ],
        fuente: {
          texto: 'Top Manta · Sindicat Popular de Venedors Ambulants',
          url: 'https://www.instagram.com/topmanta_bcn/',
        },
      },
      musica: {
        titulo: 'Musik',
        nota: 'Konzerte und Sessions',
        alt: 'Konzert, Livemusik-Fotografie',
      },
      prensa: {
        titulo: 'Presse',
        nota: 'Auswahl an Fotojournalismus',
        alt: 'Fotojournalismus und Pressearbeit in Barcelona und Katalonien',
      },
    },
  },
}
