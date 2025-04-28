"use client"; // Ensures the component is client-side

import Link from "next/link";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "@/utils/auth"; // Import authentication functions

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);  // State to track authentication

  useEffect(() => {
    const authenticated = isAuthenticated();  // Check authentication on mount
    setIsAuth(authenticated);
  }, []);  // Empty dependency array ensures this only runs once on mount

  const handleLogout = () => {
    logout(); // Call the logout function
    setIsAuth(false);  // Immediately update auth state to false
  };

  if (isAuth === null) {
    return <div className="flex justify-center items-center min-h-screen text-xl text-gray-700">Loading...</div>;  // Center loading state
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-blue-500">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-4 shadow-lg border-b-2 border-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-green-300">
            My IAM System
          </Link>
          <div className="space-x-6 flex items-center">
            {isAuth ? (
              <>
                <Link href="/dashboard" className="text-lg hover:text-blue-300 transition duration-300 font-medium">Dashboard</Link>
                {/* Logout button */}
                <button
                  onClick={handleLogout} // Trigger logout and update the auth state
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-lg hover:text-blue-300 transition duration-300 font-medium">Login</Link>
                <Link href="/register" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-white rounded-t-xl shadow-lg mt-8 mx-4 sm:mx-8 lg:mx-16">
        <div className="container mx-auto">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-6">
        <p className="text-sm">&copy; 2025 My IAM System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
