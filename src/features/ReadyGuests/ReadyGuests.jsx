const ReadyGuests = ({ others }) => {
  console.log(others);
  return (
    <div className="pt-4 flex flex-col items-center justify-center gap-8">
      <p>Waiting on everyone else...</p>
      <ul>
        {others.map((other) => {
          return (
            <li key={other.id} className="flex items-center gap-2">
              {other.presence.isReady ? "🔥 " : "😴 "}
              {other.presence.displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReadyGuests;
