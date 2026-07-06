export type Idioma = 'es' | 'ca' | 'de'

export type SerieTexto = {
  titulo: string
  nota: string
  alt: string
}

export type Textos = {
  meta: { titulo: string; descripcion: string }
  nav: { trabajo: string; sobre: string; cv: string; contacto: string }
  hero: { sub: string }
  trabajo: { titulo: string; verMas: string; verMenos: string }
  sobre: { titulo: string; p1: string; p2: string; p3: string; p4: string }
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
    },
    sobre: {
      titulo: 'Sobre mí',
      p1: 'Sale el sol, hago fotos. No sale el sol, pongo el flash.',
      p2: 'Soy Fabian Suspensivo, fotógrafo chileno radicado en Barcelona. Vengo de la música: conciertos, sesiones a artistas y todo lo que pasa alrededor de un escenario.',
      p3: 'La otra mitad de mi trabajo es la calle. Fotoperiodismo y fotografía documental: manifestaciones, huelgas y las problemáticas sociales de Catalunya, donde tengo una serie en curso. He publicado en Der Spiegel y colaborado con Open Arms.',
      p4: 'Trabajo en digital, edito en Lightroom y también hago video: live sessions, reels y aftermovies.',
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
      calle: {
        titulo: 'Calle y huelgas',
        nota: 'Documental en curso, Catalunya 2026',
        alt: 'Fotoperiodismo en las calles de Catalunya, 2026',
      },
      musica: {
        titulo: 'Música',
        nota: 'Festival Tradicionàrius',
        alt: 'Concierto, fotografía de música en vivo',
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
    },
    sobre: {
      titulo: 'Sobre mi',
      p1: 'Surt el sol, faig fotos. No surt el sol, poso el flaix.',
      p2: 'Soc Fabian Suspensivo, fotògraf xilè establert a Barcelona. Vinc de la música: concerts, sessions a artistes i tot el que passa al voltant d’un escenari.',
      p3: 'L’altra meitat de la meva feina és el carrer. Fotoperiodisme i fotografia documental: manifestacions, vagues i les problemàtiques socials de Catalunya, on tinc una sèrie en curs. He publicat a Der Spiegel i he col·laborat amb Open Arms.',
      p4: 'Treballo en digital, edito amb Lightroom i també faig vídeo: live sessions, reels i aftermovies.',
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
      calle: {
        titulo: 'Carrer i vagues',
        nota: 'Documental en curs, Catalunya 2026',
        alt: 'Fotoperiodisme als carrers de Catalunya, 2026',
      },
      musica: {
        titulo: 'Música',
        nota: 'Festival Tradicionàrius',
        alt: 'Concert, fotografia de música en directe',
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
    },
    sobre: {
      titulo: 'Über mich',
      p1: 'Scheint die Sonne, mache ich Fotos. Scheint sie nicht, nehme ich den Blitz.',
      p2: 'Ich bin Fabian Suspensivo, chilenischer Fotograf in Barcelona. Ich komme von der Musik: Konzerte, Sessions mit Künstlerinnen und Künstlern und alles, was rund um eine Bühne passiert.',
      p3: 'Die andere Hälfte meiner Arbeit ist die Straße. Fotojournalismus und Dokumentarfotografie: Demonstrationen, Streiks und die sozialen Fragen Kataloniens, wo ich an einer laufenden Serie arbeite. Veröffentlicht im Spiegel, Zusammenarbeit mit Open Arms.',
      p4: 'Ich arbeite digital, entwickle in Lightroom und mache auch Video: Live-Sessions, Reels und Aftermovies.',
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
      calle: {
        titulo: 'Straße und Streiks',
        nota: 'Laufende Dokumentation, Katalonien 2026',
        alt: 'Fotojournalismus auf den Straßen Kataloniens, 2026',
      },
      musica: {
        titulo: 'Musik',
        nota: 'Tradicionàrius-Festival',
        alt: 'Konzert, Livemusik-Fotografie',
      },
    },
  },
}
