import Image from "next/image";
import compass from "./icons/compass.png";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center gap-2">
        <Image src={compass} alt="compass image" className="w-6" />
        <h1 className="text-xl font-semibold">Compass</h1>
      </div>
      <h1>&#183;</h1>
      <h1>v1.0</h1>
    </div>
  );
}
