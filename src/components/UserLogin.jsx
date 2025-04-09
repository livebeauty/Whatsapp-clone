import { useState } from "react";

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState('');

  const handleUser = (e) => {
    e.preventDefault();
    if (!username) return;
    localStorage.setItem("user", username);
    setUser(username);
    localStorage.setItem("avatar", `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`);
    console.log(username);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="absolute top-[24%] left-[25%] w-3/4">
      <form className="flex items-center gap-6" onSubmit={handleUser}>
        <input
          type="text"
          className="w-1/2 h-12 rounded-lg px-3 font-bold"
          placeholder="Enter your name..."
          onChange={handleChange}
          value={username}
        />
        <button
          type="submit"
          className="px-5 py-3 bg-red-400 hover:bg-red-600 font-bold text-white rounded-lg">
          Enter
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
