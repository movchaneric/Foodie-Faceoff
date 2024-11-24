const Box = ({ restuarant }) => {
  return (
    <div className="btn btn-neutral w-max text-lg bg-red-500 border-red-600 text-neutral flex items-center justify-center">
      <p className="text-center">{restuarant.name}</p>
    </div>
  );
};

export default Box;
