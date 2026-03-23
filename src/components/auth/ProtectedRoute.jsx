import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/components/ui/use-toast";

const ProtectedRoute = ({ children }) => {
    const { user, authLoading  } = useAuth();
    const location = useLocation();
    const { toast } = useToast();

     if (authLoading) {
    return null; // Or a loader like <LoadingSpinner />
  }


    if (!user) {
        toast({
            variant: "destructive",
            title: "Authentication Required",
            description: "You must be logged in to book a slot.",
            duration: 4000,
        });
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;


