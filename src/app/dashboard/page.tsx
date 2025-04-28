"use client";

import { useState, useEffect } from "react";
import axios from "axios";

// Define the API endpoint for fetching login history
const LOGIN_HISTORY_URL = process.env.lOGIN_HISTORY_URL;;

const Dashboard = () => {
  const [loginHistory, setLoginHistory] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState<boolean>(true);

  useEffect(() => {
    // Ideally, this should come from your authentication context or JWT token
    const username = "johndoe";  // Replace with actual user data, e.g., from context or cookies

    const fetchLoginHistory = async () => {
      try {
        // Make sure to update the API URL if needed
        const response = await axios.get(`${LOGIN_HISTORY_URL}/${username}`);
        console.log("Fetched Login History:", response.data);  // Log response to check the data
        setLoginHistory(response.data);
      } catch (error) {
        console.error("Error fetching login history:", error);
      } finally {
        setLoadingHistory(false);
      }
    };

    fetchLoginHistory();
  }, []);

  // Helper function to format the timestamp to a readable date
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();  // You can adjust the format based on your preference
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold">Login History</h2>

      {/* Display Login History */}
      <div className="mt-8">
        {loadingHistory ? (
          <p>Loading login history...</p>
        ) : loginHistory.length === 0 ? (
          <p>No login history available</p>
        ) : (
          <ul className="mt-4">
            {loginHistory.map((entry: any, index: number) => (
              <li key={index} className="border p-4 m-2 w-80">
                <p><strong>Date:</strong> {formatDate(entry.timestamp)}</p>
                <p><strong>Status:</strong> {entry.status}</p>
                <p><strong>Message:</strong> {entry.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
