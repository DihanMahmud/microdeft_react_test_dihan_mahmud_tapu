import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLogin((login) => {
      return {
        ...login,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(login);
  };
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="w-full mx-6 sm:w-[32rem] flex flex-col gap-5">
        <form
          action=""
          onSubmit={submitHandler}
          className="border shadow-sm  flex flex-col items-start p-6 gap-3 rounded-md"
        >
          <div className="flex flex-col w-full font-medium gap-1">
            <label htmlFor="email">Email Address</label>
            <input
              className="border rounded outline-none px-3 py-2"
              type="email"
              name="email"
              value={login.email}
              id="email"
              onChange={changeHandler}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col w-full font-medium gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded outline-none px-3 py-2"
              type="password"
              name="password"
              value={login.password}
              id="password"
              onChange={changeHandler}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className=" px-5 py-2 bg-black text-white font-medium rounded outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
