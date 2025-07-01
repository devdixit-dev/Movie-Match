
const Footer = () => {
  return (
    <div className="w-full flex justify-between bg-gray-100 mt-10 p-6 text-sm">
      <div className="flex flex-col items-center text-center">
        <div className="flex gap-4">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="https://github.com/devdixit-dev/Movie-Match" className="hover:text-blue-500">Github</a>
          <a href="/" className="hover:text-blue-500">Buy me a coffee</a>
        </div>
      </div>
      <div>
        <p className="flex text-sm">Made by Dev Dixit</p>
      </div>
    </div>
  )
}

export default Footer