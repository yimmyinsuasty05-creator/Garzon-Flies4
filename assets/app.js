/* 37 DESTINATIONS DATABASE */
        const allDestinations = [
            // EUROPA
            { id: "paris", nombre: "París, Francia", precio: 150, region: "europa", rating: "4.9 (210)", seccion: "popular", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La 'Ciudad de la Luz'. Camina por los Campos Elíseos, contempla la Torre Eiffel y descubre obras maestras en el Museo del Louvre." },
            { id: "santorini", nombre: "Santorini, Grecia", precio: 320, region: "europa", rating: "4.9 (185)", seccion: "popular", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Casas encaladas sobre acantilados volcánicos frente al mar Egeo. Famosa por sus atardeceres dorados en Oia." },
            { id: "london", nombre: "Londres, Reino Unido", precio: 210, region: "europa", rating: "4.8 (190)", seccion: "popular", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El Big Ben, el Palacio de Buckingham y galerías culturales de prestigio mundial en la capital británica." },
            { id: "barcelona", nombre: "Barcelona, España", precio: 190, region: "europa", rating: "4.8 (200)", seccion: "popular", img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La Sagrada Familia, el Park Güell de Gaudí y la animada vida en Las Ramblas a orillas del Mediterráneo." },
            { id: "praga", nombre: "Praga, República Checa", precio: 180, region: "europa", rating: "4.8 (142)", seccion: "popular", img: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La 'Ciudad de las Cien Torres'. El histórico Puente de Carlos, el Reloj Astronómico y el Castillo de Praga." },
            { id: "atenas", nombre: "Atenas, Grecia", precio: 200, region: "europa", rating: "4.8 (178)", seccion: "popular", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Cuna de la civilización occidental. Contempla la majestuosa Acrópolis y el Partenón iluminado." },
            { id: "viena", nombre: "Viena, Austria", precio: 220, region: "europa", rating: "4.9 (165)", seccion: "popular", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Elegancia imperial, palacios de la dinastía Habsburgo y la famosa ópera clásica." },
            { id: "milan", nombre: "Milán, Italia", precio: 175, region: "europa", rating: "4.7 (130)", seccion: "popular", img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La capital mundial de la moda y el diseño. Visita la majestuosa catedral Duomo y la Galleria Vittorio Emanuele." },
            { id: "madrid", nombre: "Madrid, España", precio: 165, region: "europa", rating: "4.9 (210)", seccion: "popular", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El Museo del Prado, el Parque del Retiro, la Plaza Mayor y la exquisita gastronomía de tapas." },
            { id: "roma", nombre: "Roma, Italia", precio: 220, region: "europa", rating: "4.9 (240)", seccion: "oferta", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El Coliseo Romano, la Fontana di Trevi y la Basílica de San Pedro en una ciudad imperial." },
            { id: "reikiavik", nombre: "Reikiavik, Islandia", precio: 450, region: "europa", rating: "4.9 (155)", seccion: "oferta", img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Tierra de auroras boreales, géiseres ardientes y la famosa Laguna Azul." },
            { id: "estambul", nombre: "Estambul, Turquía", precio: 420, region: "europa", rating: "4.8 (195)", seccion: "oferta", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Puente entre Asia y Europa. Contempla la grandiosidad de Hagia Sophia y la Mezquita Azul." },
            { id: "zurich", nombre: "Zúrich, Suiza", precio: 390, region: "europa", rating: "4.8 (110)", seccion: "oferta", img: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Elegancia alpina a orillas del lago. Alta relojería y la puerta a las estaciones de esquí en los Alpes." },
            { id: "berlin", nombre: "Berlín, Alemania", precio: 180, region: "europa", rating: "4.8 (150)", seccion: "oferta", img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Vanguardia e historia. Visita la Puerta de Brandeburgo y el arte urbano sobre los restos del Muro de Berlín." },
            { id: "amsterdam", nombre: "Ámsterdam, Países Bajos", precio: 200, region: "europa", rating: "4.9 (178)", seccion: "oferta", img: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Canales románticos, paseos en bicicleta y colecciones de arte en el Museo Van Gogh." },
            { id: "monaco", nombre: "Mónaco", precio: 690, region: "europa", rating: "4.9 (95)", seccion: "oferta", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El glamour de la Costa Azul. Yates de lujo, el célebre Casino de Montecarlo y el circuito de Fórmula 1." },

            // AMÉRICA
            { id: "cusco", nombre: "Cusco, Perú", precio: 480, region: "america", rating: "4.9 (220)", seccion: "popular", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Capital del Imperio Inca y puerta de entrada a la enigmática ciudadela de Machu Picchu." },
            { id: "ny", nombre: "Nueva York, EE.UU.", precio: 410, region: "america", rating: "4.9 (310)", seccion: "popular", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Times Square, musicales en Broadway y caminatas legendarias por Central Park." },
            { id: "rio", nombre: "Río de Janeiro, Brasil", precio: 530, region: "america", rating: "4.8 (175)", seccion: "popular", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El Cristo Redentor, el Pan de Azúcar y el ambiente festivo en las playas de Copacabana." },
            { id: "buenosaires", nombre: "Buenos Aires, Argentina", precio: 350, region: "america", rating: "4.8 (150)", seccion: "popular", img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Shows de tango en San Telmo, arquitectura de estilo europeo y excelente gastronomía en Palermo." },
            { id: "toronto", nombre: "Toronto, Canadá", precio: 420, region: "america", rating: "4.8 (160)", seccion: "popular", img: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La icónica Torre CN, un ambiente cosmopolita vibrante e islas serenas en el lago Ontario." },
            { id: "vancouver", nombre: "Vancouver, Canadá", precio: 460, region: "america", rating: "4.9 (140)", seccion: "popular", img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Fusión perfecta de rascacielos costeros, montañas nevadas y el inmenso Stanley Park." },
            { id: "bariloche", nombre: "Bariloche, Argentina", precio: 390, region: "america", rating: "4.8 (115)", seccion: "popular", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El centro de la Patagonia argentina. Lagos alpinos, arquitectura de madera y chocolaterías artesanales." },
            { id: "pasto", nombre: "Pasto, Colombia", precio: 95, region: "america", rating: "4.9 (340)", seccion: "popular", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Visita el majestuoso Santuario de Las Lajas sobre el cañón del río Guáitara y la Laguna de la Cocha." },
            { id: "losangeles", nombre: "Los Ángeles, EE.UU.", precio: 440, region: "america", rating: "4.8 (210)", seccion: "popular", img: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Hollywood, el Paseo de la Fama, las mansiones de Beverly Hills y el muelle de Santa Mónica." },
            { id: "miami", nombre: "Miami, EE.UU.", precio: 380, region: "america", rating: "4.8 (230)", seccion: "popular", img: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "South Beach, arquitectura Art Déco, vida nocturna deslumbrante y compras de primer nivel." },
            { id: "hawaii", nombre: "Hawái, EE.UU.", precio: 750, region: "america", rating: "4.9 (190)", seccion: "oferta", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Playas volcánicas, cultura aloha, volcanes activos y olas espectaculares para el surf." },
            { id: "banff", nombre: "Banff, Canadá", precio: 580, region: "america", rating: "4.9 (140)", seccion: "oferta", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Naturaleza impresionante en las Montañas Rocosas con lagos de turquesa deslumbrante como Lake Louise." },
            { id: "sanfrancisco", nombre: "San Francisco, EE.UU.", precio: 480, region: "america", rating: "4.8 (160)", seccion: "oferta", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El famoso puente Golden Gate, los tranvías históricos y la mística prisión de Alcatraz." },
            { id: "costarica", nombre: "Costa Rica", precio: 320, region: "america", rating: "4.9 (175)", seccion: "oferta", img: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Pura Vida. Selvas tropicales biodiversas, volcanes activos y tirolesa entre las copas de los árboles." },

            // ASIA & OCEANÍA
            { id: "kioto", nombre: "Kioto, Japón", precio: 650, region: "asia-oceania", rating: "4.9 (205)", seccion: "popular", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Santuarios torii rojos, bosques de bambú en Arashiyama y templos budistas milenarios." },
            { id: "sydney", nombre: "Sídney, Australia", precio: 850, region: "asia-oceania", rating: "4.9 (190)", seccion: "popular", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La icónica Casa de la Ópera en la bahía y el surf de clase mundial en Bondi Beach." },
            { id: "pekin", nombre: "Pekín, China", precio: 510, region: "asia-oceania", rating: "4.8 (160)", seccion: "popular", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La impresionante Gran Muralla China, la Ciudad Prohibida y la Plaza de Tiananmen." },
            { id: "singapur", nombre: "Singapur", precio: 620, region: "asia-oceania", rating: "4.9 (165)", seccion: "popular", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La ciudad jardín futurista. Descubre los Supertrees en Gardens by the Bay y Marina Bay Sands." },
            { id: "bali", nombre: "Bali, Indonesia", precio: 520, region: "asia-oceania", rating: "4.9 (260)", seccion: "oferta", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Terrazas de arroz verde esmeralda en Ubud y templos espirituales a orillas del mar." },
            { id: "maldivas", nombre: "Las Maldivas", precio: 950, region: "asia-oceania", rating: "5.0 (320)", seccion: "oferta", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Villas de lujo sobre aguas cristalinas turquesas con arrecifes de coral a tus pies." },
            { id: "seoul", nombre: "Seúl, Corea del Sur", precio: 700, region: "asia-oceania", rating: "4.9 (180)", seccion: "oferta", img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Rascacielos ultra modernos, tecnología K-Pop y palacios reales de la dinastía Joseon." },
            { id: "tokio", nombre: "Tokio, Japón", precio: 680, region: "asia-oceania", rating: "4.9 (350)", seccion: "oferta", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "El famoso cruce de Shibuya, la cultura otaku en Akihabara y la mejor gastronomía Michelin." },

            // ÁFRICA & ORIENTE
            { id: "cabo", nombre: "Ciudad del Cabo, Sudáfrica", precio: 720, region: "africa-oriente", rating: "4.8 (145)", seccion: "popular", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "La Montaña de la Mesa y colonias de pingüinos en Boulders Beach." },
            { id: "dubai", nombre: "Dubái, Emiratos Árabes", precio: 590, region: "africa-oriente", rating: "4.9 (290)", seccion: "oferta", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Rascacielos impresionantes como el Burj Khalifa y safaris de lujo por el desierto." },
            { id: "cairo", nombre: "El Cairo, Egipto", precio: 390, region: "africa-oriente", rating: "4.8 (215)", seccion: "oferta", img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Las milenarias Pirámides de Giza, la Esfinge y cruceros románticos por el Nilo." }
        ];

        /* REAL HOTELS DATABASE FOR ALL 37 DESTINATIONS */
        const hotelesReales = {
            "París, Francia": [
                { name: "Novotel Paris Les Halles 4⭐", price: 120 },
                { name: "Ritz Paris 5⭐", price: 650 }
            ],
            "Cusco, Perú": [
                { name: "JW Marriott El Convento 5⭐", price: 180 },
                { name: "Belmond Hotel Monasterio 5⭐", price: 280 }
            ],
            "Kioto, Japón": [
                { name: "Kyoto Granbell Hotel 4⭐", price: 110 },
                { name: "The Ritz-Carlton Kyoto 5⭐", price: 450 }
            ],
            "Nueva York, EE.UU.": [
                { name: "The New Yorker Hotel 4⭐", price: 180 },
                { name: "The Plaza Hotel 5⭐", price: 700 }
            ],
            "Sídney, Australia": [
                { name: "Meriton Suites World Tower 4⭐", price: 130 },
                { name: "Four Seasons Hotel Sydney 5⭐", price: 350 }
            ],
            "Ciudad del Cabo, Sudáfrica": [
                { name: "Radisson RED V&A Waterfront 4⭐", price: 100 },
                { name: "The Silo Hotel 5⭐", price: 500 }
            ],
            "Río de Janeiro, Brasil": [
                { name: "Hotel Emiliano Rio 5⭐", price: 210 },
                { name: "Copacabana Palace A Belmond Hotel 5⭐", price: 380 }
            ],
            "Santorini, Grecia": [
                { name: "Astro Palace Hotel & Suites 4⭐", price: 150 },
                { name: "Canaves Oia Luxury Suites 5⭐", price: 500 }
            ],
            "Dubái, Emiratos Árabes": [
                { name: "Rove Downtown 3⭐", price: 100 },
                { name: "Burj Al Arab Jumeirah 7⭐", price: 1200 }
            ],
            "Bali, Indonesia": [
                { name: "Hard Rock Hotel Bali 4⭐", price: 80 },
                { name: "AYANA Resort Bali 5⭐", price: 300 }
            ],
            "Roma, Italia": [
                { name: "Hotel Artemide 4⭐", price: 140 },
                { name: "Hassler Roma 5⭐", price: 400 }
            ],
            "Las Maldivas": [
                { name: "Kurumba Maldives 4⭐", price: 250 },
                { name: "Soneva Fushi Resort 5⭐", price: 1500 }
            ],
            "Reikiavik, Islandia": [
                { name: "Fosshotel Reykjavik 4⭐", price: 130 },
                { name: "The Reykjavik EDITION 5⭐", price: 400 }
            ],
            "El Cairo, Egipto": [
                { name: "Steigenberger Hotel El Tahrir 4⭐", price: 90 },
                { name: "Marriott Mena House 5⭐", price: 200 }
            ],
            "Banff, Canadá": [
                { name: "Banff Ptarmigan Inn 3⭐", price: 120 },
                { name: "Fairmont Banff Springs 5⭐", price: 450 }
            ],
            "Tokio, Japón": [
                { name: "Shinjuku Washington Hotel 3⭐", price: 90 },
                { name: "Park Hyatt Tokyo 5⭐", price: 600 }
            ],
            "Seúl, Corea del Sur": [
                { name: "Lotte Hotel Seoul 5⭐", price: 160 },
                { name: "The Shilla Seoul 5⭐", price: 320 }
            ],
            "Ámsterdam, Países Bajos": [
                { name: "Park Plaza Victoria Amsterdam 4⭐", price: 140 },
                { name: "Conservatorium Hotel 5⭐", price: 480 }
            ],
            "Barcelona, España": [
                { name: "W Barcelona 5⭐", price: 220 },
                { name: "Hotel Arts Barcelona 5⭐", price: 390 }
            ],
            "Praga, República Checa": [
                { name: "Grandior Hotel Prague 5⭐", price: 110 },
                { name: "Four Seasons Hotel Prague 5⭐", price: 360 }
            ],
            "Atenas, Grecia": [
                { name: "Electra Metropolis Athens 5⭐", price: 130 },
                { name: "Hotel Grande Bretagne 5⭐", price: 380 }
            ],
            "Vancouver, Canadá": [
                { name: "Pan Pacific Vancouver 5⭐", price: 170 },
                { name: "Rosewood Hotel Georgia 5⭐", price: 340 }
            ],
            "Londres, Reino Unido": [
                { name: "The Tower Hotel London 4⭐", price: 160 },
                { name: "The Savoy 5⭐", price: 650 }
            ],
            "Estambul, Turquía": [
                { name: "Hilton Istanbul Bosphorus 5⭐", price: 130 },
                { name: "Raffles Istanbul 5⭐", price: 380 }
            ],
            "Singapur": [
                { name: "Marina Bay Sands 5⭐", price: 420 },
                { name: "Raffles Singapore 5⭐", price: 750 }
            ],
            "Zúrich, Suiza": [
                { name: "Hotel Central Plaza Zurich 4⭐", price: 190 },
                { name: "Baur au Lac 5⭐", price: 580 }
            ],
            "San Francisco, EE.UU.": [
                { name: "The Westin St. Francis 4⭐", price: 170 },
                { name: "Fairmont San Francisco 5⭐", price: 410 }
            ],
            "Pekín, China": [
                { name: "The Peninsula Beijing 5⭐", price: 240 },
                { name: "Rosewood Beijing 5⭐", price: 380 }
            ],
            "Viena, Austria": [
                { name: "Hotel Sacher Wien 5⭐", price: 280 },
                { name: "Palais Coburg Residenz 5⭐", price: 620 }
            ],
            "Berlín, Alemania": [
                { name: "InterContinental Berlin 5⭐", price: 140 },
                { name: "Hotel Adlon Kempinski 5⭐", price: 390 }
            ],
            "Toronto, Canadá": [
                { name: "Fairmont Royal York 5⭐", price: 160 },
                { name: "The Ritz-Carlton Toronto 5⭐", price: 320 }
            ],
            "Buenos Aires, Argentina": [
                { name: "Faena Hotel Buenos Aires 5⭐", price: 180 },
                { name: "Alvear Palace Hotel 5⭐", price: 310 }
            ],
            "Milán, Italia": [
                { name: "Armani Hotel Milano 5⭐", price: 380 },
                { name: "Mandarin Oriental Milan 5⭐", price: 690 }
            ],
            "Costa Rica": [
                { name: "Tabacón Thermal Resort & Spa 5⭐", price: 220 },
                { name: "Nayara Tented Camp 5⭐", price: 540 }
            ],
            "Bariloche, Argentina": [
                { name: "Llao Llao Resort Golf & Spa 5⭐", price: 190 },
                { name: "Charming Luxury Lodge & Spa 5⭐", price: 320 }
            ],
            "Pasto, Colombia": [
                { name: "Hotel Cuellar's 4⭐", price: 45 },
                { name: "Hotel San Blass Boutique 4⭐", price: 70 }
            ],
            "Mónaco": [
                { name: "Hôtel Hermitage Monte-Carlo 5⭐", price: 480 },
                { name: "Hôtel de Paris Monte-Carlo 5⭐", price: 950 }
            ],
            "Madrid, España": [
                { name: "Hotel Riu Plaza España 4⭐", price: 150 },
                { name: "Four Seasons Hotel Madrid 5⭐", price: 520 }
            ],
            "Los Ángeles, EE.UU.": [
                { name: "The Beverly Hills Hotel 5⭐", price: 450 },
                { name: "JW Marriott LA LIVE 4⭐", price: 210 }
            ],
            "Miami, EE.UU.": [
                { name: "Fontainebleau Miami Beach 5⭐", price: 280 },
                { name: "The Setai South Beach 5⭐", price: 620 }
            ],
            "Hawái, EE.UU.": [
                { name: "The Royal Hawaiian 5⭐", price: 350 },
                { name: "Four Seasons Resort Hualalai 5⭐", price: 890 }
            ]
        };

        const currencies = {
            "EUR": { symbol: "€", rate: 1.0, prefix: false },
            "USD": { symbol: "$", rate: 1.08, prefix: true },
            "COP": { symbol: "$", rate: 4500, prefix: true }
        };

        let currentCurrency = "EUR";
        let currentFlightPriceEUR = 0;
        let currentDestinationName = "";
        let currentActiveFilter = "todos";

        function formatPrice(amountEUR) {
            const curr = currencies[currentCurrency];
            const converted = Math.round(amountEUR * curr.rate);
            if(currentCurrency === "COP") {
                return `${curr.symbol}${converted.toLocaleString('es-CO')}`;
            }
            return curr.prefix ? `${curr.symbol}${converted}` : `${converted}${curr.symbol}`;
        }

        function changeCurrency(newCurr) {
            currentCurrency = newCurr;
            renderDestinationsGrid(currentActiveFilter);
            calculateTotal();
            
            document.querySelectorAll(".price-display-150").forEach(e => e.innerText = "Desde " + formatPrice(150));
            document.querySelectorAll(".price-display-480").forEach(e => e.innerText = "Desde " + formatPrice(480));
            document.querySelectorAll(".price-display-650").forEach(e => e.innerText = "Desde " + formatPrice(650));
            document.querySelectorAll(".price-display-410").forEach(e => e.innerText = "Desde " + formatPrice(410));
            
            document.getElementById("carbon-tag-price").innerText = formatPrice(15);
            showToast(`Moneda cambiada a ${newCurr}`);
        }

        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                if (preloader) {
                    preloader.style.opacity = '0';
                    preloader.style.visibility = 'hidden';
                    setTimeout(() => preloader.remove(), 600);
                }
            }, 1200);

            const dateInput = document.getElementById("fecha-vuelo");
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.setAttribute("min", today);
                dateInput.value = today;
            }

            const selectDestino = document.getElementById("input-destino");
            if(selectDestino) {
                const sortedNames = [...allDestinations].map(d => d.nombre).sort((a, b) => a.localeCompare(b));
                sortedNames.forEach(name => {
                    const option = document.createElement("option");
                    option.value = name;
                    option.textContent = name;
                    selectDestino.appendChild(option);
                });
            }

            renderDestinationsGrid("todos");
        });

        function filterDestinations(category, btn) {
            currentActiveFilter = category;
            document.querySelectorAll(".filter-btn").forEach(b => {
                b.className = "filter-btn px-4 py-2 rounded-xl text-slate-600 hover:text-[#274b97] transition";
            });
            btn.className = "filter-btn px-4 py-2 rounded-xl bg-[#274b97] text-white shadow-sm transition font-semibold";
            renderDestinationsGrid(category);
        }

        function renderDestinationsGrid(category) {
            const grid = document.getElementById("grid-destinos");
            if(!grid) return;

            let filtered = allDestinations;
            if(category === "oferta") {
                filtered = allDestinations.filter(d => d.seccion === "oferta");
            } else if(category !== "todos") {
                filtered = allDestinations.filter(d => d.region === category);
            }

            let html = "";
            filtered.forEach(dest => {
                html += `
                    <div onclick="openDestModal('${dest.id}')" class="group cursor-pointer rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 relative h-72 border border-slate-200 hover:-translate-y-2 bg-slate-200">
                        <img src="${dest.img}" alt="${dest.nombre}" onerror="this.src='https://placehold.co/800x600/274b97/ffffff?text=${encodeURIComponent(dest.nombre)}'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                        
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow">
                            ⭐ ${dest.rating}
                        </div>

                        ${dest.seccion === "oferta" ? '<span class="absolute top-4 right-4 bg-[#fd7a15] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">VIP</span>' : ''}
                        
                        <div class="absolute bottom-5 left-5 text-white pr-4">
                            <h3 class="text-xl font-bold mb-0.5 break-words">${dest.nombre}</h3>
                            <p class="text-[#fd7a15] font-extrabold text-sm">Desde ${formatPrice(dest.precio)}</p>
                        </div>
                    </div>
                `;
            });

            grid.innerHTML = html;
        }

        function openModal(id, title = "", content = "") {
            if(title) document.getElementById("info-modal-title").innerText = title;
            if(content) document.getElementById("info-modal-content").innerText = content;
            document.getElementById(id).classList.remove("hidden");
        }

        function closeModal(id) {
            document.getElementById(id).classList.add("hidden");
        }

        function openDestModal(id) {
            const dest = allDestinations.find(d => d.id === id);
            if(!dest) return;
            
            currentDestinationName = dest.nombre;
            currentFlightPriceEUR = dest.precio;

            document.getElementById("modal-title").innerText = dest.nombre;
            document.getElementById("modal-img").src = dest.img;
            document.getElementById("modal-price").innerText = formatPrice(dest.precio);
            document.getElementById("modal-desc").innerText = dest.desc;
            
            document.getElementById("itinerary-content").classList.add("hidden");

            openModal("destination-modal");
        }

        function toggleItinerary() {
            document.getElementById("itinerary-content").classList.toggle("hidden");
        }

        function openBookingPanel() {
            closeModal("destination-modal");
            
            document.getElementById("booking-dest-name").innerText = currentDestinationName;
            document.getElementById("flight-price-display").innerText = formatPrice(currentFlightPriceEUR);
            
            const select = document.getElementById("hotel-select");
            select.innerHTML = '<option value="0">Solo Vuelo (+0)</option>';
            
            const cityHotels = hotelesReales[currentDestinationName] || [
                { name: "Grand Central Hotel 4⭐", price: 80 },
                { name: "Luxury Palace & Spa 5⭐", price: 220 }
            ];

            cityHotels.forEach(h => {
                select.innerHTML += `<option value="${h.price}">${h.name} (+${formatPrice(h.price)} / noche)</option>`;
            });

            document.getElementById("carbon-toggle").checked = false;
            calculateTotal(); 
            openModal("booking-modal");
        }

        function calculateTotal() {
            const hotelSelect = document.getElementById("hotel-select");
            const hotelEUR = hotelSelect ? (parseInt(hotelSelect.value) || 0) : 0;
            const carbonEUR = (document.getElementById("carbon-toggle") && document.getElementById("carbon-toggle").checked) ? 15 : 0;
            
            const rowHotel = document.getElementById("hotel-price-row");
            const rowCarbon = document.getElementById("carbon-price-row");

            if(rowHotel) {
                if(hotelEUR > 0) {
                    rowHotel.classList.remove("hidden");
                    document.getElementById("hotel-price-display").innerText = formatPrice(hotelEUR);
                } else {
                    rowHotel.classList.add("hidden");
                }
            }

            if(rowCarbon) {
                if(carbonEUR > 0) {
                    rowCarbon.classList.remove("hidden");
                    document.getElementById("carbon-price-display").innerText = formatPrice(carbonEUR);
                } else {
                    rowCarbon.classList.add("hidden");
                }
            }

            const totalEUR = currentFlightPriceEUR + hotelEUR + carbonEUR;
            const totalDisplay = document.getElementById("total-price-display");
            if(totalDisplay) totalDisplay.innerText = formatPrice(totalEUR);
        }

        function showToast(msg, isError = false) {
            const container = document.getElementById("toast-container");
            const toast = document.createElement("div");
            toast.className = `px-5 py-3.5 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold text-white flex items-center gap-2.5 ${isError ? 'bg-red-500' : 'bg-emerald-500'} transition-all transform translate-x-full opacity-0`;
            toast.innerHTML = `<span>✓</span> ${msg}`;
            container.appendChild(toast);
            
            setTimeout(() => toast.classList.remove("translate-x-full", "opacity-0"), 50);
            setTimeout(() => {
                toast.classList.add("translate-x-full", "opacity-0");
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        }

        function setTripType(type) {
            document.getElementById("btn-ida-vuelta").className = type === "ida-vuelta" ? "px-5 py-2 rounded-lg bg-white text-[#274b97] shadow-sm transition font-semibold" : "px-5 py-2 rounded-lg text-slate-500 hover:text-[#274b97] transition font-semibold";
            document.getElementById("btn-ida").className = type === "ida" ? "px-5 py-2 rounded-lg bg-white text-[#274b97] shadow-sm transition font-semibold" : "px-5 py-2 rounded-lg text-slate-500 hover:text-[#274b97] transition font-semibold";
        }

        function handleSearch(e) {
            e.preventDefault();
            const destName = document.getElementById("input-destino").value;
            if(!destName) {
                showToast("Por favor, selecciona un destino.", true);
                return;
            }
            showToast(`Buscando vuelos hacia ${destName}...`);
            const target = allDestinations.find(d => d.nombre === destName);
            setTimeout(() => {
                if(target) openDestModal(target.id);
            }, 700);
        }

        function submitBooking(e) {
            e.preventDefault();
            const btn = document.getElementById("btn-confirm-booking");
            const originalText = btn.innerText;
            btn.innerText = "Procesando...";
            
            setTimeout(() => {
                closeModal("booking-modal");
                showToast("¡Reserva y Pago confirmados exitosamente!");
                btn.innerText = originalText;
            }, 1800);
        }

        function handleLogin(e) {
            e.preventDefault();
            closeModal('account-modal');
            
            const userContainer = document.getElementById('user-btn-container');
            if(userContainer) {
                userContainer.innerHTML = `
                    <div class="flex items-center gap-2.5 bg-blue-50 border border-blue-100 rounded-full pl-2 pr-4 py-1 shadow-sm">
                        <div class="w-8 h-8 rounded-full bg-[#274b97] text-white font-bold flex items-center justify-center text-xs">JI</div>
                        <div class="flex flex-col text-left">
                            <span class="text-xs font-bold text-[#274b97] leading-tight">Jimmy Insuasty</span>
                            <span class="text-[9px] font-bold text-[#fd7a15] uppercase">VIP Platinum</span>
                        </div>
                    </div>
                `;
            }
            showToast('¡Bienvenido Jimmy Insuasty!');
        }

        function toggleChatbot() {
            document.getElementById("chatbot-window").classList.toggle("hidden");
        }

        function sendQuickReply(txt) {
            document.getElementById("chat-input").value = txt;
            sendMessage();
        }

        function sendMessage() {
            const input = document.getElementById("chat-input");
            const txt = input.value.trim();
            if(!txt) return;
            
            const msgs = document.getElementById("chat-messages");
            msgs.innerHTML += `<div class="flex justify-end"><div class="bg-[#274b97] text-white p-3 rounded-2xl shadow-sm max-w-[85%]">${txt}</div></div>`;
            input.value = "";
            msgs.scrollTop = msgs.scrollHeight;

            setTimeout(() => {
                let reply = "Puedes seleccionar cualquier destino de nuestra lista de 37 ciudades reales en el menú desplegable superior.";
                const q = txt.toLowerCase();
                
                if (q.includes("barato") || q.includes("economico") || q.includes("oferta")) {
                    const cheapest = allDestinations.reduce((min, cur) => cur.precio < min.precio ? cur : min, allDestinations[0]);
                    reply = `El vuelo más económico en nuestro sistema es a <b>${cheapest.nombre}</b> por solo <b>${formatPrice(cheapest.precio)}</b>. ¡Selecciónalo para reservar!`;
                } 
                else if (q.includes("hotel") || q.includes("alojamiento") || q.includes("hospedaje")) {
                    reply = "¡Contamos con hoteles reales mapeados en las 37 ciudades! Por ejemplo: Fairmont Royal York & Ritz-Carlton en Toronto, Ritz Paris, Marina Bay Sands en Singapur o Burj Al Arab en Dubái.";
                } 
                else if (q.includes("equipaje") || q.includes("maleta")) {
                    reply = "Todos los tiquetes incluyen 1 pieza de equipaje de mano de 10kg sin costo. Puedes añadir equipaje de bodega de 23kg durante el pago.";
                }

                msgs.innerHTML += `
                    <div class="flex gap-2.5">
                        <div class="w-7 h-7 bg-blue-100 text-[#274b97] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">GF</div>
                        <div class="bg-white p-3 rounded-2xl shadow-sm max-w-[85%] text-slate-700 leading-relaxed">${reply}</div>
                    </div>`;
                msgs.scrollTop = msgs.scrollHeight;
            }, 600);
        }
