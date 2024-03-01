"use client"
import { React, useState } from "react";
import LoginIcon from '@mui/icons-material/Login';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin") {
            window.localStorage.setItem('loggedIn', true);
            setTimeout(() => { window.location = "/dashboard" }, 500);
        } else {
            alert('enter admin');
        }
    };

    return (
        <div className="w-full h-screen bg-[#dde5f4] text-black flex flex-wrap justify-center items-center ">
            <div className="lg:w-1/4 w-3/4 h-3/4 *:w-full *:text-center bg-[#ecf5ff] p-6 rounded-2xl">
                <h1 className="text-xl *:text-6xl capitalize font-bold my-5"><LoginIcon/></h1>
                <form onSubmit={handleSubmit} className="w-full h-3/4 justify-center flex flex-wrap items-center *:my-3 *:text-xl">
                    <label htmlFor="username" className="capitalize"> username:</label>
                    <input
                        className="text-black p-2 rounded-xl w-full"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password" className="capitalize">password :</label>
                    <input
                        className="text-black p-2 rounded-xl w-full"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-[#3e4684] w-5/6 active:bg-[#292e57] rounded-full text-white text-xs font-bold py-2 ">login</button>
                </form>
            </div>
            <h1 className="w-full text-black text-center">developed by aliasghar gholami</h1>
        </div>
    );
};

export default LoginPage;

