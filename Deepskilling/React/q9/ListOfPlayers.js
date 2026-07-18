import React from "react";

function ListOfPlayers() {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 65 },
    { name: "Gill", score: 82 },
    { name: "Rahul", score: 55 },
    { name: "Hardik", score: 78 },
    { name: "Jadeja", score: 60 },
    { name: "Ashwin", score: 72 },
    { name: "Bumrah", score: 50 },
    { name: "Shami", score: 68 },
    { name: "Siraj", score: 74 },
    { name: "Pant", score: 88 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h2>Players with Score below 70</h2>

      {filteredPlayers.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListOfPlayers;