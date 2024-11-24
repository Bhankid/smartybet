const matchesData = [
  {
    id: 1,
    type: "NSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 2,
    type: "JSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 3,
    type: "Sharks",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 4,
    type: "JSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 5,
    type: "Sharks",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 6,
    type: "NSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 7,
    type: "JSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 8,
    type: "JSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 9,
    type: "JSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
  {
    id: 10,
    type: "JSMQ",
    match: "Sch1... VS Sch2... VS Sch3...",
    popularity: "1054...",
  },
];

export function Matches() {
  return (
    <div className="shadow-md mt-6 mb-6">
      <div className="bg-blue-600 text-white text-center rounded-tl-lg rounded-tr-lg py-2">
        <h1 className="text-lg font-semibold">
          Top 10 hottest matches in the past hour
        </h1>
        <p className="text-sm">Refresh every 10 minutes</p>
      </div>
      <div className="bg-white shadow-md rounded-b-2xl">
        <div className="grid grid-cols-3 text-gray-500 text-sm font-semibold py-2 px-4 border-b">
          <div>Match</div>
          <div></div>
          <div className="text-right">Popularity</div>
        </div>
        {matchesData.map((match, index) => (
          <div key={match.id} className="flex items-center py-2 px-4 border-b">
            <div className="text-blue-600 font-semibold">{match.id}</div>
            <div className="flex-1 ml-4">
              <div className="text-gray-700 font-semibold">{match.type}</div>
              <div className="text-gray-500 text-sm">{match.match}</div>
            </div>
            <div className="text-right text-red-500 font-semibold">
              {match.popularity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
