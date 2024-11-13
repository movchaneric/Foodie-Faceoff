import { HiOutlineCamera } from "react-icons/hi2";

const UpdateImage = () => {
  return (
    <div className=" flex items-center justify-center mt-8">
      <div className="flex flex-col items-center justify-center p-6">
        {/* Profile Picture */}
        <div className="relative inline-block p-1 rounded-full border-2 border-[#2c5ee2]">
          <img
            src="https://picsum.photos/200"
            alt="something"
            className="w-24 h-24 rounded-full"
          />
          {/* Camera Icon */}
          <div className="absolute bottom-0 right-0 bg-[#2c5ee2] p-2 rounded-full text-white font-bold ">
            <label htmlFor="imageFile">
              <HiOutlineCamera />
            </label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              className="hidden"
              // onChange={}
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="text-black text-lg font-semibold">Eric Movchan</h2>
        </div>
      </div>
    </div>
  );
};

export default UpdateImage;
