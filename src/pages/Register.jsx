import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Palette, ArrowRight } from "lucide-react";


const Register = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validation
        if (!input.name || !input.email || !input.password || !input.password2) {
            setError('All fields are required');
            setLoading(false);
            return;
        }

        if (input.password !== input.password2) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (input.password.length < 6) {
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            const register = await axios.post('http://localhost:8000/auth/register', {
                name: input.name,
                email: input.email,
                password: input.password,
            });
            if (register.status === 201) {
                setLoading(false);
                navigate('/login', { state: { message: 'Registration successful! Please log in.' } });
            }
            
            
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else if (error.response?.data?.errors) {
                const errorMessages = Object.values(error.response.data.errors).flat();
                setError(errorMessages[0]);
            } else {
                setError('Registration failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            margin: "0", 
            padding: "0", 
            boxSizing: "border-box", 
            background: "linear-gradient(to bottom right, #0f172a, #6b21a8, #0f172a)"
        }}>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
                <div className="w-full max-w-lg">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                                <Palette className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">PortfolioForge</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                            Create Your
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                {" "}Account
                            </span>
                        </h1>
                        <p className="text-white/70 text-lg">Join thousands of creators building amazing portfolios</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6 text-start">
                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="block text-white font-medium text-sm">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="block text-white font-medium text-sm">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={input.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="block text-white font-medium text-sm">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={input.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label className="block text-white font-medium text-sm">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="password2"
                                    value={input.password2}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Sign In Link */}
                            <div className="text-center">
                                <p className="text-white/70">
                                    Already have an account?{' '}
                                    <span
                                        onClick={() => navigate('/login')}
                                        className="text-purple-400 hover:text-purple-300 font-medium transition-colors cursor-pointer"
                                    >
                                        Sign In
                                    </span>
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-slate-900 text-white/50">Or continue with</span>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="flex items-center bg-black justify-center px-4 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                                >
                                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center bg-black justify-center px-4 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                                >
                                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    Apple
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
