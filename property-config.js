/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - HOTEL WHITE LABEL
 */

const propertyConfig = {
  // 1. SEO
  seo: {
    title: "Hotel Cerca de Corferias: Elegancia y Rentabilidad Estratégica",
    description: "Venta de Hotel en Quinta Paredes, Bogotá. Ubicación estratégica a media cuadra de Corferias. 144m² lote, 600m² construidos. 14 habitaciones + Penthouse y zona húmeda.",
    keywords: "Hotel en Venta, Quinta Paredes, Corferias, Inversión Hotelera, Bogotá, Rentabilidad, Edificio Comercial",
    ogUrl: "",
    ogImage: "assets/portada.png",
    author: "", 
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "❤️ ¡Oportunidad de Inversión! 🏨",
    tituloHtml: "HOTEL CERCA DE CORFERIAS BOGOTÁ - ELEGANCIA Y RENTABILIDAD ESTRATÉGICA",
    precioVenta: "$2.500.000.000",
    valorAdmin: "No aplica",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles
  detalles: [
    { label: "Área Lote", value: "144 m²", icon: "📐" },
    { label: "Área Const.", value: "~493 m²", icon: "🏗️" },
    { label: "Habitaciones", value: "14 + PH", icon: "🛏️" },
    { label: "Niveles", value: "4 Pisos", icon: "🏢" },
    { label: "Rentabilidad", value: "Alta", icon: "📈" },
    { label: "Ubicación", value: "Q. Paredes", icon: "📍" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Nivel 1: Lobby, Chimenea, 5 Habs", emoji: "🛋️" },
    { name: "Nivel 2: 6 Habs (Grupos)", emoji: "🛏️" },
    { name: "Nivel 3: 3 Habs, Sauna, Lavandería con Patio", emoji: "🧖‍♀️" },
    { name: "Nivel 4: Penthouse 1 Hab + Cocina Ind.", emoji: "👨‍🍳" },
    { name: "Reja de Seguridad Reforzada", emoji: "🛡️" },
    { name: "Sala de Espera y Comedor", emoji: "🍽️" }
  ],
  destacadoInterno: "Distribución optimizada. El tercer nivel cuenta con zona de lavandería completa y patio de ropas, permitiendo ofrecer servicio de lavandería como valor agregado.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "A media cuadra de Corferias", emoji: "🎪" },
    { name: "Zona de Alto Tráfico", emoji: "🚶" },
    { name: "Barrio Quinta Paredes", emoji: "🏘️" },
    { name: "Cerca a Aeropuerto (15 min)", emoji: "✈️" }
  ],
  destacadoUbicacion: "Ubicación Premium: El epicentro de negocios y ferias más importante del país. Ideal para turismo corporativo y feriantes.",

  // 6. Mapa
  mapa: {
    urlEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.852899450946!2d-74.09289262415166!3d4.63139364234559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd2a0614481%3A0x6bd7787364239726!2sQuinta%20Paredes%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco", 
    titulo: "Ubicación Quinta Paredes"
  },

  // 7. Descripción Final
  descripcionFinal: {
    titulo: "💎 Activo Estratégico en Corferias",
    texto: `
    <div class="roi-item">
      <p><strong>Potencial Financiero:</strong> Ingresos Brutos estimados entre $28M (Baja) y $54M (Feria). *Sujeto a deducción de gastos operativos.</p>
      <p><strong>Infraestructura Completa:</strong> Operando actualmente con staff optimizado.</p>
      <div style="margin-top: 30px; text-align: center;">
          <a href="analisis.html" class="btn-analisis">
             📊 VER ANÁLISIS FINANCIERO DETALLADO
          </a>
      </div>
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "assets/Video_H_Corferias.mp4", 
    videoThumbnail: "assets/portada.png",
    imagesCount: 20, 
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: [
      "assets/portada.png",
      "assets/1.1.png", "assets/1.3.png",
      "assets/2.jpeg", "assets/3.jpeg", "assets/4.jpeg",
      "assets/5.png",
      "assets/6.jpeg", "assets/7.jpeg", "assets/8.jpeg", "assets/9.jpeg",
      "assets/10.jpeg", "assets/11.jpeg", "assets/12.jpeg", "assets/13.jpeg",
      "assets/14.jpeg", "assets/15.jpeg", "assets/16.jpeg", "assets/17.jpeg",
      "assets/18.jpeg", "assets/19.jpeg", "assets/20.jpeg", "assets/21.jpeg"
    ]
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏨 *HOTEL CERCA DE CORFERIAS - ELEGANCIA Y RENTABILIDAD*

💰 *Precio:* $2.500.000.000
📍 *Ubicación:* Quinta Paredes (Media cuadra de Corferias)
📐 *Área:* 600m² construidos.
🛏️ *Capacidad:* 14 Habitaciones + Penthouse

✨ *Rentabilidad:* Potencial ingresos brutos hasta $54M/mes (Ferias)
🏢 *Estado:* Operando activamente

🔗 *Ver Fotos y Análisis Financiero:*
https://vecy-bienes-raices.github.io/Hotel-en-Venta-Quinta-Paredes-Bogota/`
  }
};
