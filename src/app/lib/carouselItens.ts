export interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: '/placeholder.svg?height=400&width=800',
    title: 'Pesquisa Inovadora',
    description: 'Descobrindo novas fronteiras na síntese de materiais cerâmicos',
  },
  {
    id: 2,
    image: '/placeholder.svg?height=400&width=800',
    title: 'Equipe Especializada',
    description: 'Profissionais dedicados à excelência em materiais cerâmicos',
  },
  {
    id: 3,
    image: '/placeholder.svg?height=400&width=800',
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos para síntese e análise de cerâmicas',
  },
];
