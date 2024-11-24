const Location = ({ setModalIsOpen }) => {
  return (
    <div className="flex justify-center p-4">
      <button
        className="btn btn-neutral"
        onClick={() => setModalIsOpen((prev) => !prev)}
      >
        {" "}
        Add location
      </button>
    </div>
  );
};

export default Location;
