import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [Nama, setNama] = useState("");
  const [Id, setId] = useState("");
  const [Tgl_lahir, setTgl_lahir] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [noHp, setnoHp] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()
  const SignUp = async () => {
    try {
      await axios.post("http://localhost:5000/user", {
        Nama: Nama,
        Id: Id,
        Tgl_lahir: Tgl_lahir,
        Alamat: Alamat,
        noHp: noHp,
        Username: Username,
        Password: Password,
        confPassword: Password,
      });
      navigate("/LoginPage")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="registration-form">
      <h2>Sign Up</h2>
      <form
        onSubmit={SignUp}
      >
        <label for="fullName">Full Name</label>
        <input
                  value={Nama}
                  onChange={(e) => setNama(e.target.value)}
          type="text"
          placeholder="John Doe"
          required
        />

        <label for="id">ID</label>
        <input
          value={Id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="3173071709020002"
          required
        />

        <label for="birthdate">Birthdate</label>
        <input
          value={Tgl_lahir}
          onChange={(e) => setTgl_lahir(e.target.value)}
          type="text"
          placeholder="MM/DD/YYYY"
          required
        />

        <label for="address">Address</label>
        <input
          value={Alamat}
          onChange={(e) => setAlamat(e.target.value)}
          type="text"
          placeholder="JL KS TUBUN III NO 23"
          required
        />

        <label for="phone">Phone Number</label>
        <input
          value={noHp}
          onChange={(e) => setnoHp(e.target.value)}
          type="tel"
          placeholder="081384002161"
          required
        />

        <label for="email">Email</label>
        <input
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          placeholder="faisal.ahmadgifari@gmail.com"
          required
        />

        <label for="password">Password</label>
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Type here"
          required
        />

        <label>
          <input type="checkbox" name="policy" required />
          <span class="terms">
            By selecting "Create account", you are confirming that you have read
            and agree to
            <a href="#">24Bali's Terms of Use</a> and
            <a href="#">Privacy Policy</a>
          </span>
        </label>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
