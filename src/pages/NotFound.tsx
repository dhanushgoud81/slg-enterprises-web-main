import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <img 
              src="/images/companylogo.png" 
              alt="SLG Enterprises Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-corporate-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-corporate-grey-dark mb-4">Page Not Found</h2>
        <p className="text-lg text-corporate-grey mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-corporate-blue hover:bg-corporate-blue-dark">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
