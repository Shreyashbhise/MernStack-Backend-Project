import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => { 
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      if(res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      
    }
  }
  return (
    <nav className="bg-green-500 text-white px-4 py-2 flex justify-between items-center">
      {/* Navbar Title */}
      <div className="text-lg font-bold">
        To-Do List
      </div>
      
      {/* Logout Button */}
      <button onClick={logoutHandler} className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
