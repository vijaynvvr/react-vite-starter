import React from "react";
import reactLogo from "./assets/react.svg";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="h-screen bg-black flex flex-col gap-10 text-6xl justify-center items-center">
			<img
				src={reactLogo}
				alt="img-example"
				className="w-72 animate-spin"
			/>

            <ul className="flex gap-8">
                <Link to="/" className="px-3 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-slate-200 text-xl">Home</Link>
                <Link to="/dashboard" className="px-3 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-slate-200 text-xl">Dashboard</Link>
            </ul>

			<p className="text-white">
                <Routes>
                    <Route path="/" element={<h1>React Vite Starter</h1>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                </Routes>
            </p>
		</div>
	);
};

export default App;
