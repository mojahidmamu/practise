import { useState } from "react";

const SimpleForm = () => {
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password)
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("form submited");
  };
  const [name, setName] = useState('mojahid');
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border-2" type="text" name="name" /> <br />
        <input className="border-2" type="email" name="email" /> <br />
        <input value={name}
          onChange={handlePasswordChange}
          className="border-2"
          type="password"
          required
          name="phone"
        />{" "}
        <br />
        <input className="border-2 mt-3 p-2" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
