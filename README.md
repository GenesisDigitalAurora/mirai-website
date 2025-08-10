# MIRAI - Firma de Abogados

**MIRAI** es la primera firma de abogados en México que ayuda a sus clientes a prevenir contingencias legales acompañada de soluciones tecnológicas. Nuestra misión es brindar asesoría legal especializada, combinando la experiencia tradicional con innovación tecnológica para ofrecer soluciones integrales y preventivas.

## 🏢 Acerca de MIRAI

MIRAI se posiciona como una firma legal innovadora que comprende las necesidades del mercado moderno. Ofrecemos servicios jurídicos especializados en múltiples áreas de práctica e industrias, respaldados por un equipo de profesionales experimentados y una plataforma tecnológica de vanguardia.

### ✨ Características Principales

- **Enfoque Preventivo**: Anticipamos contingencias legales antes de que se conviertan en problemas
- **Soluciones Tecnológicas**: Integramos herramientas digitales para optimizar procesos legales
- **Especialización Sectorial**: Expertise en industrias específicas y áreas de práctica especializadas
- **Equipo Multidisciplinario**: Profesionales con experiencia internacional y local
- **Plataforma Digital**: Portal web moderno con acceso para clientes y socios

## 🛠️ Tecnologías Utilizadas

Este sitio web está desarrollado con tecnologías modernas y escalables:

- **Framework**: [Next.js 15.4.6](https://nextjs.org/) con TypeScript
- **Estilización**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI/UX**: Componentes React responsivos y animaciones fluidas
- **Fuentes**: Mulish (Google Fonts)
- **Optimización**: Imágenes optimizadas con Next.js Image
- **Despliegue**: Optimizado para AWS (Amazon Web Services)

## 📋 Áreas de Práctica

### Prácticas Legales Especializadas
- **ASG/ESG**: Asesoría en criterios ambientales, sociales y de gobernanza
- **Derecho Bancario, Bursátil y Financiero**
- **Derecho Laboral**: Gestión de relaciones laborales y cumplimiento
- **Life Science & Derecho Regulatorio**: Sector farmacéutico y salud
- **Comercio Exterior**: Cumplimiento aduanero y comercio internacional
- **Derecho Corporativo**: Estructuración societaria y fusiones
- **Derecho Migratorio**: Permisos de trabajo y movilidad internacional
- **Fintech**: Regulación de tecnología financiera
- **Propiedad Intelectual**: Protección de activos intangibles
- **Ética y Compliance**: Cumplimiento normativo y prevención
- **Y más...**

### Industrias Especializadas
- **Agroindustria**
- **Alimentos y Bebidas**
- **Automotriz**
- **Energía**
- **Farmacéutica**
- **Fintech y Bancos**
- **FMCG (Fast Moving Consumer Goods)**
- **ONGs**
- **Real Estate**
- **Seguros**
- **Tecnología**
- **Turismo**

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm**, **yarn**, **pnpm** o **bun**
- **Git**

### Clonar el Repositorio

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/mirai.git

# Navega al directorio del proyecto
cd mirai
```

### Instalar Dependencias

```bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install

# Con bun
bun install
```

## 🔧 Desarrollo Local

### Ejecutar en Modo Desarrollo

```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev

# Con bun
bun dev
```

El servidor de desarrollo estará disponible en [http://localhost:3000](http://localhost:3000).

### Comandos Disponibles

```bash
# Desarrollo con Turbopack (más rápido)
npm run dev

# Construcción para producción
npm run build

# Ejecutar en modo producción
npm start

# Linting y verificación de código
npm run lint

# Exportación estática
npm run export
```

## 📦 Construcción para Producción

### Build Estándar

```bash
# Construir la aplicación
npm run build

# Ejecutar en modo producción
npm start
```

### Build para AWS

```bash
# Configurar variables de entorno (si es necesario)
cp .env.example .env.local

# Construir para producción
npm run build

# Verificar la construcción
npm start
```

## 🌐 Despliegue en AWS

### Opción 1: AWS Amplify (Recomendado)

1. **Conectar repositorio**:
   ```bash
   # Subir código a repositorio
   git add .
   git commit -m "Deploy to AWS"
   git push origin main
   ```

2. **Configurar Amplify**:
   - Ir a AWS Amplify Console
   - Conectar repositorio de GitHub/GitLab
   - Configurar settings de build:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

### Opción 2: AWS S3 + CloudFront

1. **Build estático**:
   ```bash
   npm run export
   ```

2. **Configurar S3**:
   ```bash
   # Instalar AWS CLI
   aws configure

   # Subir archivos
   aws s3 sync out/ s3://tu-bucket-mirai --delete
   ```

3. **Configurar CloudFront** para distribución global

### Opción 3: AWS EC2 + PM2

1. **Preparar servidor EC2**:
   ```bash
   # En el servidor EC2
   sudo apt update
   sudo apt install nodejs npm
   npm install -g pm2
   ```

2. **Desplegar aplicación**:
   ```bash
   # Clonar y configurar
   git clone https://github.com/tu-usuario/mirai.git
   cd mirai
   npm install
   npm run build

   # Ejecutar con PM2
   pm2 start npm --name "mirai" -- start
   pm2 save
   pm2 startup
   ```

## 📁 Estructura del Proyecto

```
MIRAI/
├── public/                 # Archivos estáticos
│   ├── icons/             # Iconos de servicios e industrias
│   ├── news/              # Imágenes y PDFs de noticias
│   ├── teammembers/       # Fotos del equipo
│   └── ...                # Logos, videos, imágenes
├── src/
│   ├── components/        # Componentes React reutilizables
│   │   ├── ServiceDetails/ # Detalles de servicios
│   │   └── ...
│   ├── data/              # Archivos JSON con datos
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Páginas de Next.js
│   └── styles/            # Estilos globales
├── README.md              # Este archivo
├── package.json           # Dependencias y scripts
├── next.config.ts         # Configuración de Next.js
├── tailwind.config.js     # Configuración de Tailwind
└── tsconfig.json          # Configuración de TypeScript
```

## 🔐 Funcionalidades

### Portal de Clientes y Socios
- Sistema de autenticación diferenciado
- Acceso a documentos y recursos exclusivos
- Dashboard personalizado por tipo de usuario

### Responsive Design
- Optimizado para desktop, tablet y móvil
- Navegación adaptativa
- Imágenes y videos responsivos

### SEO Optimizado
- Meta tags optimizados
- Estructura semántica
- URLs amigables
- Sitemap automático

### Performance
- Carga lazy de imágenes
- Optimización de assets
- Compresión automática
- CDN ready

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**MIRAI Abogados**
- **Sitio Web**: https://mirai.legal
- **Email**: contacto@mirai.legal
- **Teléfono**: (+52) 56 1055 2829

## 📄 Licencia

Este proyecto es propiedad de MIRAI Abogados. Todos los derechos reservados.

---

**Desarrollado con ❤️ por el equipo de MIRAI**

*Innovando el futuro del derecho en México*