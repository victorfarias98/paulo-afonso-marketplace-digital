
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

interface BookingFormProps {
  serviceId: number;
  serviceName: string;
}

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00'
];

const BookingForm = ({ serviceId, serviceName }: BookingFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const { toast } = useToast();
  
  const handleBooking = () => {
    if (!date || !time) {
      toast({
        variant: "destructive",
        title: "Erro no agendamento",
        description: "Por favor, selecione data e horário para continuar."
      });
      return;
    }
    
    toast({
      title: "Agendamento realizado!",
      description: `Você agendou ${serviceName} para ${format(date, "dd 'de' MMMM", { locale: ptBR })} às ${time}.`,
    });
  };
  
  return (
    <div className="border border-border rounded-lg p-4">
      <h3 className="text-lg font-medium mb-4">Agendar serviço</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Selecione uma data</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                ) : (
                  <span>Selecione uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => 
                  date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                  date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                }
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Selecione um horário</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant={time === slot ? "default" : "outline"}
                className={`text-sm py-1 h-auto ${time === slot ? 'bg-paulo-blue text-white' : ''}`}
                onClick={() => setTime(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={handleBooking}
          className="w-full bg-paulo-blue hover:bg-paulo-dark"
          disabled={!date || !time}
        >
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  );
};

export default BookingForm;
