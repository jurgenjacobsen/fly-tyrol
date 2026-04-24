import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

const en = {
    nav: {
        home: "Home",
        privateBusiness: "Private & Business",
        fleet: "Fleet",
        values: "Values",
        location: "Location",
        contact: "Contact",
    },
    hero: {
        title: "Fly Tyrol. The new quality of travel.",
        subtitle: "Experience executive charter flights for seamless, luxurious travel.",
        imageAlt: "Fly Tyrol",
    },
    privateBusiness: {
        privateCharterTitle: "Private Charter",
        privateCharterBody:
            "Tailored journeys for leisure. Escape on your own schedule with absolute privacy and bespoke on-board service.",
        businessFlightsTitle: "Business Flights",
        businessFlightsBody:
            "Efficiency for the executive. Turn travel time into productive hours in a pressurized, quiet cabin environment.",
        eyebrow: "Our Expertise",
        title: "Exclusivity in Every Mile.",
        description:
            "Fly Tyrol combines Austrian precision with global reach. Our services are designed for those who value time and comfort above all else. From quick alpine hops to transcontinental routes, we curate your flight experience.",
        trust: "Trusted by 500+ corporate partners.",
    },
    fleet: {
        title: "Our Fleet",
        previousAircraft: "Show previous aircraft",
        nextAircraft: "Show next aircraft",
        range: "Range",
        speed: "Speed",
        capacity: "Capacity",
        fullSpecifications: "Full Specifications",
        bookAircraft: "Book This Aircraft",
        aircraft: {
            citationC525: {
                name: "Citation C525",
                description:
                    "Balanced for short and medium-haul routes with a refined cabin and consistent performance.",
            },
            phenom300e: {
                name: "Phenom 300E",
                description:
                    "A modern light jet built for pace, featuring a spacious interior and efficient climb profile.",
            },
            challenger350: {
                name: "Challenger 350",
                description:
                    "Comfort-focused super-midsize travel for longer sectors with premium in-flight productivity.",
            },
        },
    },
    values: {
        eyebrow: "Our Values",
        title: "Built on trust, precision, and discretion.",
        safetyTitle: "Safety Without Compromise",
        safetyBody:
            "From pre-flight checks to crew readiness, every detail is aligned with strict aviation standards and operational discipline.",
        precisionTitle: "Austrian Precision",
        precisionBody:
            "We plan with accuracy, communicate clearly, and execute on schedule so your day runs exactly as intended.",
        discreetTitle: "Discreet Service",
        discreetBody:
            "Our team delivers private, attentive support from booking to arrival, ensuring confidence and comfort throughout your journey.",
    },
    location: {
        eyebrow: "Our Location",
        title: "Visit us at Innsbruck Airport",
        description: "Centrally positioned for fast access to alpine and European routes.",
        directions: "Open Directions",
        mapTitle: "Fly Tyrol location map",
    },
    management: {
        eyebrow: "Leadership",
        title: "The Team Behind Fly Tyrol",
        ceoTitle: "Managing Director",
        ceoDescription: "Helmut Eder leads Fly Tyrol with a vision for excellence in business aviation, ensuring the highest standards of safety and service.",
        opsTitle: "Flight Operations",
        opsDescription: "Sabine Oberleiter oversees our daily operations and dispatch, coordinating seamless flight planning and 24/7 support for our clients.",
        heritageTitle: "Our Heritage",
        heritageDescription: "Founded in 2001, Fly Tyrol has grown from a local Austrian operator into a trusted European partner for executive travel.",
    },
    footer: {
        contact: "Contact",
        location: "Location",
        followUs: "Follow Us",
        officeHours: "Office Hours",
        phone: "T: +43 512 263040",
        fax: "F: +43 512 295530 1798",
        email: "info@flytyrol.com",
        locationLine1: "Innsbruck Airport",
        locationLine2: "Terminal 1, 2nd Floor",
        locationLine3: "6020 Innsbruck, Austria",
        instagram: "Instagram",
        linkedIn: "LinkedIn",
        monThu: "Mon - Thu:",
        friday: "Friday:",
        hoursMonThu: "08:30 - 17:00",
        hoursFriday: "08:30 - 12:00",
        closed: "Sat & Sun: Closed",
        copyright: "{{year}} Fly Tyrol. All rights reserved.",
        certification: "EASA Certified - Austrian AOC #1092",
    },
    language: {
        label: "Language",
        english: "English",
        german: "German",
        russian: "Russian",
        portuguese: "Portuguese",
        spanish: "Spanish",
        french: "French",
    },
}

const de = {
    nav: {
        home: "Startseite",
        privateBusiness: "Privat & Business",
        fleet: "Flotte",
        values: "Werte",
        location: "Standort",
        contact: "Kontakt",
    },
    hero: {
        title: "Fly Tyrol. Die neue Qualität des Reisens.",
        subtitle: "Erleben Sie Executive-Charterflüge für nahtloses, luxuriöses Reisen.",
        imageAlt: "Fly Tyrol",
    },
    privateBusiness: {
        privateCharterTitle: "Privat-Charter",
        privateCharterBody:
            "Maßgeschneiderte Reisen für die Freizeit. Entfliehen Sie nach Ihrem eigenen Zeitplan mit absoluter Privatsphäre und individuellem Service an Bord.",
        businessFlightsTitle: "Business-Flüge",
        businessFlightsBody:
            "Effizienz für Führungskräfte. Verwandeln Sie Reisezeit in produktive Stunden in einer ruhigen Druckkabine.",
        eyebrow: "Unsere Expertise",
        title: "Exklusivität auf jeder Meile.",
        description:
            "Fly Tyrol verbindet österreichische Präzision mit globaler Reichweite. Unsere Dienstleistungen sind für diejenigen konzipiert, die Zeit und Komfort über alles schätzen. Von kurzen Alpengängen bis hin zu transkontinentalen Routen kuratieren wir Ihr Flugerlebnis.",
        trust: "Über 500 Unternehmenspartner vertrauen uns.",
    },
    fleet: {
        title: "Unsere Flotte",
        previousAircraft: "Vorheriges Flugzeug anzeigen",
        nextAircraft: "Nächstes Flugzeug anzeigen",
        range: "Reichweite",
        speed: "Geschwindigkeit",
        capacity: "Kapazität",
        fullSpecifications: "Vollständige Spezifikationen",
        bookAircraft: "Dieses Flugzeug buchen",
        aircraft: {
            citationC525: {
                name: "Citation C525",
                description:
                    "Ausgeglichen für Kurz- und Mittelstrecken mit einer raffinierten Kabine und beständiger Leistung.",
            },
            phenom300e: {
                name: "Phenom 300E",
                description:
                    "Ein moderner Leichtjet für Tempo, mit geräumigem Interieur und effizientem Steigprofil.",
            },
            challenger350: {
                name: "Challenger 350",
                description:
                    "Komfortorientiertes Super-Midsize-Reisen für längere Sektoren mit erstklassiger Produktivität im Flug.",
            },
        },
    },
    values: {
        eyebrow: "Unsere Werte",
        title: "Gebaut auf Vertrauen, Präzision und Diskretion.",
        safetyTitle: "Sicherheit ohne Kompromisse",
        safetyBody:
            "Vom Pre-Flight-Check bis zur Einsatzbereitschaft der Crew ist jedes Detail auf strenge Luftfahrtstandards und operative Disziplin ausgerichtet.",
        precisionTitle: "Österreichische Präzision",
        precisionBody:
            "Wir planen mit Genauigkeit, kommunizieren klar und führen pünktlich aus, damit Ihr Tag genau wie beabsichtigt verläuft.",
        discreetTitle: "Diskreter Service",
        discreetBody:
            "Unser Team bietet private, aufmerksame Unterstützung von der Buchung bis zur Ankunft und sorgt für Vertrauen und Komfort während Ihrer gesamten Reise.",
    },
    location: {
        eyebrow: "Unser Standort",
        title: "Besuchen Sie uns am Flughafen Innsbruck",
        description: "Zentral positioniert für schnellen Zugang zu alpinen und europäischen Routen.",
        directions: "Wegbeschreibung öffnen",
        mapTitle: "Fly Tyrol Standortkarte",
    },
    management: {
        eyebrow: "Führung",
        title: "Das Team hinter Fly Tyrol",
        ceoTitle: "Geschäftsführer",
        ceoDescription: "Helmut Eder leitet Fly Tyrol mit einer Vision für Exzellenz in der Geschäftsluftfahrt und gewährleistet höchste Standards für Sicherheit und Service.",
        opsTitle: "Flugbetrieb",
        opsDescription: "Sabine Oberleiter leitet unseren täglichen Betrieb und Dispatch und koordiniert nahtlose Flugplanung sowie 24/7-Support für unsere Kunden.",
        heritageTitle: "Unser Erbe",
        heritageDescription: "Gegründet im Jahr 2001, hat sich Fly Tyrol von einem lokalen österreichischen Betreiber zu einem vertrauenswürdigen europäischen Partner für Executive-Reisen entwickelt.",
    },
    footer: {
        contact: "Kontakt",
        location: "Standort",
        followUs: "Folgen Sie uns",
        officeHours: "Bürozeiten",
        phone: "T: +43 512 263040",
        fax: "F: +43 512 295530 1798",
        email: "info@flytyrol.com",
        locationLine1: "Flughafen Innsbruck",
        locationLine2: "Terminal 1, 2. Stock",
        locationLine3: "6020 Innsbruck, Österreich",
        instagram: "Instagram",
        linkedIn: "LinkedIn",
        monThu: "Mo - Do:",
        friday: "Freitag:",
        hoursMonThu: "08:30 - 17:00",
        hoursFriday: "08:30 - 12:00",
        closed: "Sa & So: Geschlossen",
        copyright: "{{year}} Fly Tyrol. Alle Rechte vorbehalten.",
        certification: "EASA zertifiziert - Österreichisches AOC #1092",
    },
    language: {
        label: "Sprache",
        english: "Englisch",
        german: "Deutsch",
        russian: "Russisch",
        portuguese: "Portugiesisch",
        spanish: "Spanisch",
        french: "Französisch",
    },
}

const ru = {
    nav: {
        home: "Главная",
        privateBusiness: "Частные и бизнес-рейсы",
        fleet: "Флот",
        values: "Ценности",
        location: "Местоположение",
        contact: "Контакт",
    },
    hero: {
        title: "Fly Tyrol. Новое качество путешествий.",
        subtitle: "Оцените представительские чартерные рейсы для беспрепятственных и роскошных путешествий.",
        imageAlt: "Fly Tyrol",
    },
    privateBusiness: {
        privateCharterTitle: "Частный чартер",
        privateCharterBody:
            "Индивидуальные поездки для отдыха. Отправляйтесь в путь по собственному расписанию с абсолютной конфиденциальностью и индивидуальным обслуживанием на борту.",
        businessFlightsTitle: "Бизнес-рейсы",
        businessFlightsBody:
            "Эффективность для руководителей. Превратите время в пути в продуктивные часы в тихой герметичной кабине.",
        eyebrow: "Наш опыт",
        title: "Эксклюзивность в каждой миле.",
        description:
            "Fly Tyrol сочетает в себе австрийскую точность и глобальный охват. Наши услуги созданы для тех, кто ценит время и комфорт превыше всего. От коротких альпийских перелетов до трансконтинентальных маршрутов — мы организуем ваш полет.",
        trust: "Нам доверяют более 500 корпоративных партнеров.",
    },
    fleet: {
        title: "Наш флот",
        previousAircraft: "Показать предыдущий самолет",
        nextAircraft: "Показать следующий самолет",
        range: "Дальность",
        speed: "Скорость",
        capacity: "Вместимость",
        fullSpecifications: "Полные характеристики",
        bookAircraft: "Забронировать этот самолет",
        aircraft: {
            citationC525: {
                name: "Citation C525",
                description:
                    "Сбалансирован для ближне- и среднемагистральных маршрутов с изысканным салоном и стабильными характеристиками.",
            },
            phenom300e: {
                name: "Phenom 300E",
                description:
                    "Современный легкий джет, созданный для скорости, с просторным интерьером и эффективным профилем набора высоты.",
            },
            challenger350: {
                name: "Challenger 350",
                description:
                    "Комфортабельные перелеты в суперсреднем классе для длительных секторов с премиальной продуктивностью в полете.",
            },
        },
    },
    values: {
        eyebrow: "Наши ценности",
        title: "Построено на доверии, точности и осмотрительности.",
        safetyTitle: "Безопасность без компромиссов",
        safetyBody:
            "От предполетной проверки до готовности экипажа — каждая деталь соответствует строгим авиационным стандартам и операционной дисциплине.",
        precisionTitle: "Австрийская точность",
        precisionBody:
            "Мы планируем с точностью, четко общаемся и выполняем задачи по графику, чтобы ваш день прошел именно так, как задумано.",
        discreetTitle: "Конфиденциальный сервис",
        discreetBody:
            "Наша команда обеспечивает частную и внимательную поддержку от бронирования до прибытия, гарантируя уверенность и комфорт на протяжении всего путешествия.",
    },
    location: {
        eyebrow: "Наше местоположение",
        title: "Посетите нас в аэропорту Инсбрука",
        description: "Центральное расположение для быстрого доступа к альпийским и европейским маршрутам.",
        directions: "Открыть карту",
        mapTitle: "Карта расположения Fly Tyrol",
    },
    management: {
        eyebrow: "Руководство",
        title: "Команда Fly Tyrol",
        ceoTitle: "Управляющий директор",
        ceoDescription: "Хельмут Эдер руководит Fly Tyrol, стремясь к совершенству в бизнес-авиации и обеспечивая высочайшие стандарты безопасности и обслуживания.",
        opsTitle: "Летная эксплуатация",
        opsDescription: "Сабина Оберляйтер курирует наши ежедневные операции и диспетчерскую службу, координируя бесперебойное планирование полетов и круглосуточную поддержку клиентов.",
        heritageTitle: "Наше наследие",
        heritageDescription: "Основанная в 2001 году, компания Fly Tyrol выросла из местного австрийского оператора в надежного европейского партнера в сфере представительских поездок.",
    },
    footer: {
        contact: "Контакт",
        location: "Местоположение",
        followUs: "Подписывайтесь на нас",
        officeHours: "Часы работы",
        phone: "Т: +43 512 263040",
        fax: "Ф: +43 512 295530 1798",
        email: "info@flytyrol.com",
        locationLine1: "Аэропорт Инсбрука",
        locationLine2: "Терминал 1, 2-й этаж",
        locationLine3: "6020 Инсбрук, Австрия",
        instagram: "Instagram",
        linkedIn: "LinkedIn",
        monThu: "Пн - Чт:",
        friday: "Пятница:",
        hoursMonThu: "08:30 - 17:00",
        hoursFriday: "08:30 - 12:00",
        closed: "Сб и Вс: Выходной",
        copyright: "{{year}} Fly Tyrol. Все права защищены.",
        certification: "Сертифицировано EASA - австрийский AOC #1092",
    },
    language: {
        label: "Язык",
        english: "Английский",
        german: "Немецкий",
        russian: "Русский",
        portuguese: "Португальский",
        spanish: "Испанский",
        french: "Французский",
    },
}

const pt = {
    nav: {
        home: "Início",
        privateBusiness: "Privado e Negócios",
        fleet: "Frota",
        values: "Valores",
        location: "Localização",
        contact: "Contacto",
    },
    hero: {
        title: "Fly Tyrol. A nova qualidade de viagem.",
        subtitle: "Experimente voos fretados executivos para viagens luxuosas e sem interrupções.",
        imageAlt: "Fly Tyrol",
    },
    privateBusiness: {
        privateCharterTitle: "Charter Privado",
        privateCharterBody:
            "Viagens personalizadas para lazer. Fuja no seu próprio horário com total privacidade e serviço de bordo sob medida.",
        businessFlightsTitle: "Voos de Negócios",
        businessFlightsBody:
            "Eficiência para o executivo. Transforme o tempo de viagem em horas produtivas num ambiente de cabine pressurizado e silencioso.",
        eyebrow: "A Nossa Especialidade",
        title: "Exclusividade em Cada Milha.",
        description:
            "A Fly Tyrol combina a precisão austríaca com o alcance global. Os nossos serviços são concebidos para aqueles que valorizam o tempo e o conforto acima de tudo. De saltos rápidos nos Alpes a rotas transcontinentais, fazemos a curadoria da sua experiência de voo.",
        trust: "Confiada por mais de 500 parceiros corporativos.",
    },
    fleet: {
        title: "A Nossa Frota",
        previousAircraft: "Mostrar aeronave anterior",
        nextAircraft: "Mostrar próxima aeronave",
        range: "Alcance",
        speed: "Velocidade",
        capacity: "Capacidade",
        fullSpecifications: "Especificações Completas",
        bookAircraft: "Reservar Esta Aeronave",
        aircraft: {
            citationC525: {
                name: "Citation C525",
                description:
                    "Equilibrado para rotas de curta e média distância com uma cabine refinada e desempenho consistente.",
            },
            phenom300e: {
                name: "Phenom 300E",
                description:
                    "Um jato leve moderno construído para a velocidade, com um interior espaçoso e um perfil de subida eficiente.",
            },
            challenger350: {
                name: "Challenger 350",
                description:
                    "Viagens super-midsize focadas no conforto para setores mais longos com produtividade premium em voo.",
            },
        },
    },
    values: {
        eyebrow: "Os Nossos Valores",
        title: "Construído sobre confiança, precisão e discrição.",
        safetyTitle: "Segurança Sem Compromissos",
        safetyBody:
            "Dos controlos pré-voo à prontidão da tripulação, cada detalhe está alinhado com rigorosas normas de aviação e disciplina operacional.",
        precisionTitle: "Precisão Austríaca",
        precisionBody:
            "Planeamos com exatidão, comunicamos de forma clara e executamos dentro do horário para que o seu dia corra exatamente como planeado.",
        discreetTitle: "Serviço Discreto",
        discreetBody:
            "A nossa equipa oferece apoio privado e atento desde a reserva até à chegada, garantindo confiança e conforto durante toda a sua viagem.",
    },
    location: {
        eyebrow: "A Nossa Localização",
        title: "Visite-nos no Aeroporto de Innsbruck",
        description: "Posicionado centralmente para acesso rápido a rotas alpinas e europeias.",
        directions: "Abrir Direções",
        mapTitle: "Mapa de localização da Fly Tyrol",
    },
    management: {
        eyebrow: "Liderança",
        title: "A Equipa por trás da Fly Tyrol",
        ceoTitle: "Diretor Geral",
        ceoDescription: "Helmut Eder lidera a Fly Tyrol com uma vision de excelência na aviação executiva, garantindo os mais elevados padrões de segurança e serviço.",
        opsTitle: "Operações de Voo",
        opsDescription: "Sabine Oberleiter supervisiona as nossas operações diárias e despacho, coordenando um planeamento de voo contínuo e apoio 24/7 para os nossos clientes.",
        heritageTitle: "O Nosso Legado",
        heritageDescription: "Fundada em 2001, a Fly Tyrol cresceu de um operador local austríaco para um parceiro europeu de confiança para viagens executivas.",
    },
    footer: {
        contact: "Contacto",
        location: "Localização",
        followUs: "Siga-nos",
        officeHours: "Horário de Funcionamento",
        phone: "T: +43 512 263040",
        fax: "F: +43 512 295530 1798",
        email: "info@flytyrol.com",
        locationLine1: "Aeroporto de Innsbruck",
        locationLine2: "Terminal 1, 2º Andar",
        locationLine3: "6020 Innsbruck, Áustria",
        instagram: "Instagram",
        linkedIn: "LinkedIn",
        monThu: "Seg - Qui:",
        friday: "Sexta:",
        hoursMonThu: "08:30 - 17:00",
        hoursFriday: "08:30 - 12:00",
        closed: "Sáb e Dom: Fechado",
        copyright: "{{year}} Fly Tyrol. Todos os direitos reservados.",
        certification: "Certificado EASA - AOC Austríaco #1092",
    },
    language: {
        label: "Idioma",
        english: "Inglês",
        german: "Alemão",
        russian: "Russo",
        portuguese: "Português",
        spanish: "Espanhol",
        french: "Francês",
    },
}

const es = {
    nav: {
        home: "Inicio",
        privateBusiness: "Privado y Negocios",
        fleet: "Flota",
        values: "Valores",
        location: "Ubicación",
        contact: "Contacto",
    },
    hero: {
        title: "Fly Tyrol. La nueva calidad de viajar.",
        subtitle: "Experimente vuelos chárter ejecutivos para viajes lujosos y sin contratiempos.",
        imageAlt: "Fly Tyrol",
    },
    privateBusiness: {
        privateCharterTitle: "Chárter Privado",
        privateCharterBody:
            "Viajes a medida para el ocio. Escape según su propio horario con absoluta privacidad y un servicio a bordo personalizado.",
        businessFlightsTitle: "Vuelos de Negocios",
        businessFlightsBody:
            "Eficiencia para el ejecutivo. Convierta el tiempo de viaje en horas productivas en un entorno de cabina presurizada y silenciosa.",
        eyebrow: "Nuestra Experiencia",
        title: "Exclusividad en cada milla.",
        description:
            "Fly Tyrol combina la precisión austriaca con el alcance global. Nuestros servicios están diseñados para quienes valoran el tiempo y la comodidad por encima de todo. Desde rápidos saltos alpinos hasta rutas transcontinentales, organizamos su experiencia de vuelo.",
        trust: "Con la confianza de más de 500 socios corporativos.",
    },
    fleet: {
        title: "Nuestra Flota",
        previousAircraft: "Mostrar avión anterior",
        nextAircraft: "Mostrar siguiente avión",
        range: "Alcance",
        speed: "Velocidad",
        capacity: "Capacidad",
        fullSpecifications: "Especificaciones Completas",
        bookAircraft: "Reservar Este Avión",
        aircraft: {
            citationC525: {
                name: "Citation C525",
                description:
                    "Equilibrado para rutas de corto y medio alcance con una cabina refinada y un rendimiento constante.",
            },
            phenom300e: {
                name: "Phenom 300E",
                description:
                    "Un jet ligero moderno construido para la velocidad, con un interior espacioso y un perfil de ascenso eficiente.",
            },
            challenger350: {
                name: "Challenger 350",
                description:
                    "Viajes de tamaño súper mediano enfocados en la comodidad para sectores más largos con productividad premium en vuelo.",
            },
        },
    },
    values: {
        eyebrow: "Nuestros Valores",
        title: "Construidos sobre la confianza, la precisión y la discreción.",
        safetyTitle: "Seguridad Sin Compromisos",
        safetyBody:
            "Desde los controles prevuelo hasta la preparación de la tripulación, cada detalle está alineado con estrictas normas de aviación y disciplina operativa.",
        precisionTitle: "Precisión Austriaca",
        precisionBody:
            "Planificamos con exactitud, comunicamos con claridad y ejecutamos puntualmente para que su día transcurra exactamente como lo planeó.",
        discreetTitle: "Servicio Discreto",
        discreetBody:
            "Nuestro equipo ofrece un apoyo privado y atento desde la reserva hasta la llegada, garantizando confianza y comodidad durante todo su viaje.",
    },
    location: {
        eyebrow: "Nuestra Ubicación",
        title: "Visítenos en el Aeropuerto de Innsbruck",
        description: "Situado en el centro para un acceso rápido a las rutas alpinas y europeas.",
        directions: "Abrir Direcciones",
        mapTitle: "Mapa de ubicación de Fly Tyrol",
    },
    management: {
        eyebrow: "Liderazgo",
        title: "El equipo detrás de Fly Tyrol",
        ceoTitle: "Director Gerente",
        ceoDescription: "Helmut Eder lidera Fly Tyrol con una visión de excelencia en la aviación ejecutiva, garantizando los más altos estándares de seguridad y servicio.",
        opsTitle: "Operaciones de Vuelo",
        opsDescription: "Sabine Oberleiter supervisa nuestras operaciones diarias y el despacho, coordinando una planificación de vuelo perfecta y soporte 24/7 para nuestros clientes.",
        heritageTitle: "Nuestra Herencia",
        heritageDescription: "Fundada in 2001, Fly Tyrol ha pasado de ser un operador local austriaco a un socio europeo de confianza para viajes ejecutivos.",
    },
    footer: {
        contact: "Contacto",
        location: "Ubicación",
        followUs: "Síganos",
        officeHours: "Horario de Oficina",
        phone: "T: +43 512 263040",
        fax: "F: +43 512 295530 1798",
        email: "info@flytyrol.com",
        locationLine1: "Aeropuerto de Innsbruck",
        locationLine2: "Terminal 1, 2da Planta",
        locationLine3: "6020 Innsbruck, Austria",
        instagram: "Instagram",
        linkedIn: "LinkedIn",
        monThu: "Lun - Jue:",
        friday: "Viernes:",
        hoursMonThu: "08:30 - 17:00",
        hoursFriday: "08:30 - 12:00",
        closed: "Sáb y Dom: Cerrado",
        copyright: "{{year}} Fly Tyrol. Todos los derechos reservados.",
        certification: "Certificado EASA - AOC Austriaco #1092",
    },
    language: {
        label: "Idioma",
        english: "Inglés",
        german: "Alemán",
        russian: "Ruso",
        portuguese: "Português",
        spanish: "Español",
        french: "Francés",
    },
}

const fr = {
    nav: {
        home: "Accueil",
        privateBusiness: "Privé & Affaires",
        fleet: "Flotte",
        values: "Valeurs",
        location: "Emplacement",
        contact: "Contact",
    },
    hero: {
        title: "Fly Tyrol. La nouvelle qualité du voyage.",
        subtitle: "Découvrez des vols charters exécutifs pour des voyages fluides et luxueux.",
        imageAlt: "Fly Tyrol",
    },
    privateBusiness: {
        privateCharterTitle: "Charter Privé",
        privateCharterBody:
            "Voyages sur mesure pour les loisirs. Évadez-vous selon votre propre emploi du temps avec une intimité totale et un service à bord personnalisé.",
        businessFlightsTitle: "Vols d'Affaires",
        businessFlightsBody:
            "L'efficacité au service des cadres. Transformez votre temps de voyage en heures productives dans une cabine pressurisée et silencieuse.",
        eyebrow: "Notre Expertise",
        title: "L'exclusivité à chaque kilomètre.",
        description:
            "Fly Tyrol allie la précision autrichienne à une portée mondiale. Nos services sont conçus pour ceux qui privilégient le temps et le confort avant tout. Des sauts alpins rapides aux routes transcontinentales, nous organisons votre expérience de vol.",
        trust: "Plus de 500 partenaires corporatifs nous font confiance.",
    },
    fleet: {
        title: "Notre Flotte",
        previousAircraft: "Afficher l'avion précédent",
        nextAircraft: "Afficher l'avion suivant",
        range: "Rayon d'action",
        speed: "Vitesse",
        capacity: "Capacité",
        fullSpecifications: "Spécifications complètes",
        bookAircraft: "Réserver cet avion",
        aircraft: {
            citationC525: {
                name: "Citation C525",
                description:
                    "Équilibré pour les trajets courts et moyens avec une cabine raffinée et des performances constantes.",
            },
            phenom300e: {
                name: "Phenom 300E",
                description:
                    "Un jet léger moderne conçu pour la vitesse, avec un intérieur spacieux et un profil de montée efficace.",
            },
            challenger350: {
                name: "Challenger 350",
                description:
                    "Voyage super-midsize axé sur le confort pour les secteurs plus longs avec une productivité premium en vol.",
            },
        },
    },
    values: {
        eyebrow: "Nos Valeurs",
        title: "Bâti sur la confiance, la précision et la discrétion.",
        safetyTitle: "La sécurité sans compromis",
        safetyBody:
            "Des contrôles pré-vol à la préparation de l'équipage, chaque détail est aligné sur des normes aéronautiques strictes et une discipline opérationnelle.",
        precisionTitle: "Précision Autrichienne",
        precisionBody:
            "Nous planifions avec exactitude, communiquons clairement et exécutons selon l'horaire prévu pour que votre journée se déroule exactement comme vous l'aviez imaginé.",
        discreetTitle: "Service Discret",
        discreetBody:
            "Notre équipe offre un soutien privé et attentif, de la réservation à l'arrivée, garantissant confiance et confort tout au long de votre voyage.",
    },
    location: {
        eyebrow: "Notre Emplacement",
        title: "Rendez-nous visite à l'aéroport d'Innsbruck",
        description: "Idéalement situé pour un accès rapide aux routes alpines et européennes.",
        directions: "Ouvrir l'itinéraire",
        mapTitle: "Carte de localisation de Fly Tyrol",
    },
    management: {
        eyebrow: "Direction",
        title: "L'équipe derrière Fly Tyrol",
        ceoTitle: "Directeur Général",
        ceoDescription: "Helmut Eder dirige Fly Tyrol avec une vision d'excellence dans l'aviation d'affaires, garantissant les normes les plus élevées de sécurité et de service.",
        opsTitle: "Opérations de Vol",
        opsDescription: "Sabine Oberleiter supervise nos opérations quotidiennes et la régulation, coordonnant une planification de vol fluide et un support 24/7 pour nos clients.",
        heritageTitle: "Notre Héritage",
        heritageDescription: "Fondée en 2001, Fly Tyrol est passée d'un opérateur autrichien local à un partenaire européen de confiance pour les voyages d'affaires.",
    },
    footer: {
        contact: "Contact",
        location: "Emplacement",
        followUs: "Suivez-nous",
        officeHours: "Heures de bureau",
        phone: "T : +43 512 263040",
        fax: "F : +43 512 295530 1798",
        email: "info@flytyrol.com",
        locationLine1: "Aéroport d'Innsbruck",
        locationLine2: "Terminal 1, 2e étage",
        locationLine3: "6020 Innsbruck, Autriche",
        instagram: "Instagram",
        linkedIn: "LinkedIn",
        monThu: "Lun - Jeu :",
        friday: "Vendredi :",
        hoursMonThu: "08:30 - 17:00",
        hoursFriday: "08:30 - 12:00",
        closed: "Sam & Dim : Fermé",
        copyright: "{{year}} Fly Tyrol. Tous droits réservés.",
        certification: "Certifié EASA - AOC Autrichien #1092",
    },
    language: {
        label: "Langue",
        english: "Anglais",
        german: "Allemand",
        russian: "Russe",
        portuguese: "Portugais",
        spanish: "Espagnol",
        french: "Francés",
    },
}

const resources = {
    en: { translation: en },
    de: { translation: de },
    ru: { translation: ru },
    pt: { translation: pt },
    es: { translation: es },
    fr: { translation: fr },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        supportedLngs: ["en", "de", "ru", "pt", "es", "fr"],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    })

export default i18n
