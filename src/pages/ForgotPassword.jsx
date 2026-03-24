import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/context/AuthContext';
import { Mail } from 'lucide-react';

const ForgotPassword = () => {
  const { toast } = useToast();
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(email);

      toast({
        title: "📧 Reset Email Sent",
        description: "Check your inbox to reset your password.",
        duration: 4000,
      });

      setEmail('');
    } catch (error) {
      toast({
        title: "❌ Error",
        description: error.message,
        duration: 4000,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password - VirtualLab</title>
      </Helmet>

      <div className="pt-28 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30">
        <div className="w-full max-w-md p-8 space-y-6 glass-effect rounded-xl shadow-2xl">
          
          <div className="text-center">
            <Mail className="mx-auto h-12 w-12 text-blue-400" />
            <h1 className="mt-4 text-2xl font-bold text-white">
              Reset Password
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Enter your email to receive reset link
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-gray-300">Email</Label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700/50 text-white"
                placeholder="you@example.com"
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Send Reset Link
            </Button>
          </form>

        </div>
      </div>
    </>
  );
};

export default ForgotPassword;