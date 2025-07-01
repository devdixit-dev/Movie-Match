import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

const ActiveServicePage = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className=" flex flex-col md:flex-row p-6 mt-4">
      {/* LEFT SIDE */}
      <div className="md:w-full flex flex-col justify-center items-center p-2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
          There's even more to watch.
        </h1>
        <h2 className="text-2xl font-semibold text-blue-600">
          Get recommendation?
        </h2>
        <div className="p-4 rounded-md">
          <p className="border-1 border-gray-300 rounded-md p-3 mt-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer"><strong>Step 1 :</strong> Enter your email address</p>
          <p className="border-1 border-gray-300 rounded-md p-3 mt-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer"><strong>Step 2 :</strong> Choose your preferred genres</p>
          <p className="border-1 border-gray-300 rounded-md p-3 mt-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer"><strong>Step 3 :</strong> Set the number of recommendations (up to 10)</p>
          <p className="border-1 border-gray-300 rounded-md p-3 mt-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer"><strong>Step 4 :</strong> Select the day you'd like to receive your recommendations</p>
          <p className="mt-2"><strong>You're all set!</strong> We’ll deliver personalized movie suggestions to your inbox.</p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="md:w-full bg-white rounded-2xl p-8 mt-10 md:mt-0">
        <form className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-base font-medium">Email</Label>
            <div className="flex items-center gap-2 mt-2">
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="genre" className="text-base font-medium">Genre</Label>
              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent className="bg-gray-600 text-white">
                  <SelectItem className="hover:cursor-pointer" value="action">Action</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="comedy">Comedy</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="drama">Drama</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="anime">Anime</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="count" className="text-base font-medium">Count</Label>
              <Input id="count" type="number" min={1} max={10} defaultValue={5} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="day" className="text-base font-medium">Email Day</Label>
              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent className="bg-gray-600 text-white">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <SelectItem className="hover:cursor-pointer" key={day} value={day.toLowerCase()}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="date" className="text-base font-medium">Today's Date</Label>
            <div className="flex items-center gap-2 mt-2">
              <Input id="date" type="text" readOnly value={today} />
            </div>
          </div>

          <Button type="submit" className="w-full mt-2 bg-gray-600 text-white cursor-pointer hover:opacity-90">
            Activate email recommendation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ActiveServicePage;