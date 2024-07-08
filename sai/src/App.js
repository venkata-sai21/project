import React from 'react';
import "./App.css";
export default function app() {
  return (
    <div className="container">
      <br />
      <input placeholder="username" type="text" /><br />
      <input placeholder= "password" type="password" />
      <div>
      <button>Register</button>
      <button>Login</button>
    </div>
    </div>
  );
}