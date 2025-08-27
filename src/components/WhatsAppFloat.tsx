
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918106206381?text=Hello! I would like to know more about your services.', '_blank');
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 animate-bounce"
    >
      <MessageCircle size={28} className="sm:w-6 sm:h-6" />
    </div>
  );
};

export default WhatsAppFloat;
