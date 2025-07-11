import { Products } from "@/interfaces/productInterface";

export const mockproducts: Products[] = [
  {
    id: 1,
    name: "iPhone 11",
    description: "Potencia y elegancia en tus manos. Capturá cada momento con su sistema de doble cámara.",
    price: 870000,
    stock: 10,
    image: "https://www.movilzona.es/app/uploads-movilzona.es/2024/04/iPhone-13-color-rosa.jpg",
    categoryId: 1
  },
  {
    id: 2,
    name: "MacBook Air",
    description: "Diseño liviano y rendimiento potente. Ideal para trabajar desde cualquier lugar.",
    price: 1400000,
    stock: 10,
    image: "https://www.silicon.es/wp-content/uploads/2016/04/MacBook-rosa-1280x720.jpg",
    categoryId: 2
  },
  {
    id: 3,
    name: "iPad Pro",
    description: "Creatividad sin límites con una pantalla impresionante y un rendimiento superior.",
    price: 1100000,
    stock: 10,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-finish-select-202503-pink-wificell_AV1_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=aHYyeWZ6TVBzTWw5WlZ2bFJCZno2aXd3Q2pKamtFTVV6Wk1KTjNUcUZtOXlaMWpMSGFTY3ViNlRlR015bk81L3ZhemVnT2xFOVIyMXRKbWMzTDYyTEVtYW1kMXNQLzdDd2NuUVFzTDNlZmEyTE1mSHgwMHh1SlVoUDJNTksyTUZYUDNFNXVuQVpCeGphNWtvWFpONU5n&traceId=1",
    categoryId: 3
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    description: "Mantenete activo y saludable con seguimiento avanzado de salud y estado físico.",
    price: 650000,
    stock: 15,
    image: "https://www.gizlogic.com/wp-content/uploads/2023/08/Apple-Watch-Series-9.jpg",
    categoryId: 4
  },
  {
    id: 5,
    name: "AirPods Pro",
    description: "Sonido envolvente y cancelación activa de ruido para una experiencia inmersiva.",
    price: 320000,
    stock: 25,
    image: "https://articles-img.sftcdn.net/t_article_cover_xl/auto-mapping-folder/sites/2/2024/03/AirPods-4.jpg",
    categoryId: 5
  },
  {
    id: 6,
    name: "Mac Studio",
    description: "Diseñado para profesionales, ofrece un rendimiento extremo para tareas exigentes.",
    price: 2800000,
    stock: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNfeOByr2pXsEVDvUDd6Imz76quv8V9Bmaw&s",
    categoryId: 2
  }
];
