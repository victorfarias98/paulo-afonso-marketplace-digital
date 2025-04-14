
import { Star } from 'lucide-react';

export interface ReviewProps {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
  providerResponse?: string;
}

const ReviewCard = ({ user, rating, date, comment, providerResponse }: ReviewProps) => {
  return (
    <div className="border border-border rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
          <Star size={16} className="text-yellow-500" fill="currentColor" />
          <span className="ml-1 text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm">{comment}</p>
      </div>
      
      {providerResponse && (
        <div className="bg-muted p-3 rounded-md border-l-4 border-paulo-blue">
          <p className="text-xs font-medium mb-1">Resposta do profissional:</p>
          <p className="text-sm">{providerResponse}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
