import { Clapperboard } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Logo = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="p-4 cursor-pointer" onClick={() => {navigate('/')}}>
        <Clapperboard className="text-gray-500 p-2 w-[50px] h-[50px] rounded-md" />
      </div>
    </div>
  )
}

export default Logo