import { useNavigate } from "react-router-dom"
import Logo from "../ui/Logo"
import { Coffee, Github, Home } from "lucide-react";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center m-auto">
      <div>
        <Logo />
      </div>
      <div className="rounded-md py-3 px-10">
        <ul className="flex gap-10">
          <div className="flex gap-1 items-center hover:text-black hover:cursor-pointer" onClick={() => navigate('/')}>
            <Home />
            <li className="text-sm font-medium">Home</li>
          </div>
          <a href="https://github.com/devdixit-dev/Movie-Match" target="_blank" className="flex gap-1 items-center hover:text-black hover:cursor-pointer">
            <Github />
            <p className="text-sm font-medium">Github</p>
          </a>
          <div className="flex gap-1 items-center hover:text-black hover:cursor-pointer">
            <Coffee />
            <li className="text-sm font-medium" onClick={() => navigate('/')}>Buy me a coffee</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar