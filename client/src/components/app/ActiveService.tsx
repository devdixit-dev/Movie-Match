import { Calendar } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

const ActiveServicePage = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className=" flex flex-col md:flex-row p-6 mt-4">
      {/* LEFT SIDE */}
      <div className="md:w-full flex flex-col justify-center p-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-gray-900">
          There's even more to watch.
        </h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Get recommendation?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Movie Match</strong> has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals and more. Get recommendations as much as you want, anytime you want.
        </p>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="md:w-full bg-white rounded-2xl p-8 mt-10 md:mt-0">
        <form className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-base font-medium">Title</Label>
            <Input id="title" type="text" placeholder="Enter a title" />
          </div>

          <div>
            <Label htmlFor="email" className="text-base font-medium">Email</Label>
            <div className="flex items-center gap-2">
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="genre" className="text-base font-medium">Genre</Label>
              <Select>
                <SelectTrigger className="w-full">
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
              <Input id="count" type="number" min={1} max={10} defaultValue={5} />
            </div>

            <div>
              <Label htmlFor="day" className="text-base font-medium">Email Day</Label>
              <Select>
                <SelectTrigger className="w-full">
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
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <Input id="date" type="text" readOnly value={today} />
            </div>
          </div>

          <Button type="submit" className="w-full mt-4 bg-gray-600 text-white cursor-pointer hover:opacity-90">
            Activate email recommendation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ActiveServicePage;