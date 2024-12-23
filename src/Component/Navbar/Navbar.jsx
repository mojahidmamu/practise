const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Users", path: "/users" },
    { id: 3, name: "Service", path: "/service" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
  return (
    <nav>
      <h1 className="text-2xl font-extrabold border-2 rounded-full p-5 mt-2">Mojahid</h1>
      <ul className=" md:flex ">
      {
        routes.map(route => <li className="mr-5" key={route.id}><a href={`route.path`}></a> {route.name}</li>)
      
      }
      </ul>
    </nav>
    
  );
};

export default Navbar;
