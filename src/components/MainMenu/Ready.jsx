import { capitalizeFirstLetter } from "../../utils/helpers";

const Ready = ({ broadcast, user }) => {
  return (
    <div className="flex justify-center p-4">
      <button
        onClick={() =>
          broadcast({
            type: "TOAST",
            message: `${capitalizeFirstLetter(user.username)} is ready.`,
          })
        }
        className="btn btn-accent"
      >
        {" "}
        Ready!
      </button>
    </div>
  );
};

export default Ready;
