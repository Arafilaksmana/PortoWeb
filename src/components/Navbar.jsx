import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="flex justify-between p-6 fixed top-0 left-0 z-10 w-full text-white">
        <div>Dirga</div>
        <div>
          <div className="flex items-center gap-1 px-3 py-0.5 bg-gray-400/10 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 rounded-sm">
            <MdOutlineSubdirectoryArrowRight />
            <a href="" className="font-light">Lets Talk</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
