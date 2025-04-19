import Image from 'next/image';
import expand from './icons/expand.svg';

export default function UserProfile() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto bg-white w-full rounded-lg border border-neutral-300 p-2 min-w-0">
      {/* avatar */}
      <div className="flex-none">
        <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center font-bold">
          CC
        </div>
      </div>
      {/* divider */}
      <div className="hidden sm:block border-l border-neutral-300 h-8" />
      {/* user info */}
      <div className="flex flex-col flex-1 text-center sm:text-left min-w-0">
        <h1 className="font-semibold break-words">
          Cristian Cebotari
        </h1>
        <small className="text-xs text-neutral-500 break-words">
          cristian.cebotari@endava.com
        </small>
      </div>
      {/* expand button */}
      <button className="hidden cursor-pointer sm:flex items-top gap-1 text-sm text-neutral-500 hover:text-neutral-600">
        <Image src={expand} alt="expand icon" className="w-4" />
      </button>
    </div>
  );
}
