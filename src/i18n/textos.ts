export type Idioma = 'es' | 'ca' | 'de'

export type SerieTexto = {
  titulo: string
  nota: string
  alt: string
  subtitulo?: string
  destacada?: boolean
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
      'ball-de-nuria': {
        titulo: 'El Ball de Núria',
        subtitulo: 'Este proyecto se expondrá en Perpinyà, en el festival OFF.',
        nota: 'Núria, 85 años, y la vida después de Josep. Blanes.',
        alt: 'Núria, 85 años, en su casa de Blanes; ensayo documental El Ball de Núria',
        destacada: true,
      },
      'open-arms-serie': {
        titulo: 'Open Arms',
        nota: 'Rescate en el mar, con la ONG',
        alt: 'Rescate de Open Arms en el mar Mediterráneo',
      },
      tenerife: {
        titulo: 'El caso Hondius',
        nota: 'Tenerife, publicado en Der Spiegel',
        alt: 'Cobertura del caso de hantavirus del barco Hondius en Tenerife',
      },
      'top-manta': {
        titulo: 'Top Manta',
        nota: 'Cursa Top Manta y cursa antirracista, Barcelona',
        alt: 'Cursa Top Manta en Barcelona',
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
      'ball-de-nuria': {
        titulo: 'El Ball de Núria',
        subtitulo: 'Aquest projecte s’exposarà a Perpinyà, al festival OFF.',
        nota: 'La Núria, 85 anys, i la vida després d’en Josep. Blanes.',
        alt: 'La Núria, 85 anys, a casa seva a Blanes; assaig documental El Ball de Núria',
        destacada: true,
      },
      'open-arms-serie': {
        titulo: 'Open Arms',
        nota: 'Rescat al mar, amb l’ONG',
        alt: 'Rescat d’Open Arms al mar Mediterrani',
      },
      tenerife: {
        titulo: 'El cas Hondius',
        nota: 'Tenerife, publicat a Der Spiegel',
        alt: 'Cobertura del cas d’hantavirus del vaixell Hondius a Tenerife',
      },
      'top-manta': {
        titulo: 'Top Manta',
        nota: 'Cursa Top Manta i cursa antiracista, Barcelona',
        alt: 'Cursa Top Manta a Barcelona',
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
      'ball-de-nuria': {
        titulo: 'El Ball de Núria',
        subtitulo: 'Dieses Projekt wird in Perpignan beim OFF-Festival ausgestellt.',
        nota: 'Núria, 85 Jahre, und das Leben nach Josep. Blanes.',
        alt: 'Núria, 85 Jahre, in ihrem Haus in Blanes; Dokumentaressay El Ball de Núria',
        destacada: true,
      },
      'open-arms-serie': {
        titulo: 'Open Arms',
        nota: 'Seenotrettung, mit der NGO',
        alt: 'Rettungseinsatz von Open Arms im Mittelmeer',
      },
      tenerife: {
        titulo: 'Der Fall Hondius',
        nota: 'Teneriffa, veröffentlicht im Spiegel',
        alt: 'Berichterstattung zum Hantavirus-Fall des Schiffs Hondius auf Teneriffa',
      },
      'top-manta': {
        titulo: 'Top Manta',
        nota: 'Cursa Top Manta und antirassistischer Lauf, Barcelona',
        alt: 'Cursa Top Manta in Barcelona',
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
