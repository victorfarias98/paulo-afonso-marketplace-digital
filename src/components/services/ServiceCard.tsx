
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceProps {
  id: number;
  title: string;
  provider: {
    id: number;
    name: string;
    avatar: string;
  };
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  price?: string;
  className?: string;
  appointmentAvailable?: boolean;
}

const ServiceCard = ({
  id,
  title,
  provider,
  category,
  rating,
  reviewCount,
  location,
  image,
  price,
  className,
  appointmentAvailable = true,
}: ServiceProps) => {
  return (
    <Link to={`/services/${id}`} className={cn("service-card flex flex-col", className)}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center mb-3">
          <img 
            src={provider.avatar} 
            alt={provider.name} 
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-sm text-muted-foreground">{provider.name}</span>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500 mr-2">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount} avaliações)</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          {price && (
            <div className="text-paulo-blue font-semibold">
              {price}
            </div>
          )}
          
          {appointmentAvailable && (
            <div className="flex items-center text-xs text-green-600">
              <Calendar size={14} className="mr-1" />
              <span>Agendamento disponível</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
