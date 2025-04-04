# appshop - E-commerce Moderno

## 🚀 Instrucciones de Ejecución

1. Clonar repositorio:
```bash
git clone [url-del-repositorio]
```
2. Instalar dependencias:
```bash
npm install
```
3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

## 🌟 Características Implementadas
- 🛒 Sistema de carrito de compras con persistencia
- ❤️ Lista de favoritos interactiva
- 🔐 Autenticación de usuarios
- 🎨 Diseño responsive con Tailwind CSS
- 🌐 Consumo de Fake Store API con react-query
- ⚡ Optimizaciones de rendimiento con Next.js 15

### 4. Integración con API Externa
- **Problema**: Consumo eficiente de datos desde Fake Store API
- **Solución**: Implementación de react-query para caching y re-fetching
- **Resultado**: Tiempos de carga optimizados + manejo de estados de carga/error

## 🧠 Decisiones Técnicas
### Arquitectura
- App Router de Next.js para enrutamiento
- Layouts anidados para estructura de tienda
- React Server Components para renderizado eficiente

### Estado Global
- Zustand para gestión de estado (carrito, favoritos, UI)
- Persistencia en localStorage/sessionStorage

### Estilos
- Tailwind CSS con configuración personalizada
- Variables CSS para temas y colores
- Animaciones personalizadas para transiciones

## 🛠 Desafíos y Soluciones
### 1. Persistencia de Estado
- **Problema**: Mantener estado entre recargas
- **Solución**: Implementación de middlewares en Zustand + localStorage

### 2. Diseño Responsive
- **Problema**: Adaptación a móviles
- **Solución**: Uso intensivo de Tailwind CSS + Grid/Flex

### 3. Optimización de Imágenes
- **Problema**: Carga lenta de imágenes
- **Solución**: Componente Image de Next.js + lazy loading

---

## 🚧 Desarrollo Futuro
- [ ] Sistema de pagos integrado
- [ ] Búsqueda en tiempo real
- [ ] Internacionalización

## 📄 Licencia
MIT License

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# appshop
