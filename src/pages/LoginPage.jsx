import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/context/AuthContext';
import GoogleIcon from '@/components/icons/GoogleIcon';

const LoginPage = () => {
  const { toast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Login Successful",
      description: "Welcome back! Redirecting you now...",
      duration: 3000,
    });
    login({ email, name: email.split('@')[0] });
    navigate('/frostlab', { replace: true });
    //navigate(from, { replace: true });
  };
  
  const handleSocialLogin = (provider) => {
    toast({
      title: `🚧 ${provider} Login `,
      description: `Social login with ${provider} `,
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Login - VirtualLab</title>
        <meta name="description" content="Login to your VirtualLab account to access remote hardware labs, manage bookings, and continue your embedded development projects." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30">
        <motion.div
          className="w-full max-w-md p-8 space-y-8 glass-effect rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <LogIn className="mx-auto h-12 w-12 text-blue-400" />
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">
              Sign in to VirtualLab
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              New to VirtualLab?{' '}
              <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300">
                Create an account
              </Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </Label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700/50 text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password"className="block text-sm font-medium text-gray-300">
                Password
              </Label>
               <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700/50 text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
              >
                Sign in
              </Button>
            </div>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400 rounded-md">Or continue with</span>
            </div>
          </div>

          <div>
            <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700" onClick={() => handleSocialLogin('Google')}>
              <GoogleIcon className="w-5 h-5 mr-2" /> Google
            </Button>
          </div>

        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;