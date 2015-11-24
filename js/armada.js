$(document).ready(function(){

  var faction = "";

  var objective = {
    "defense" : [
      {
        "name":   "Hyperspace Assault",
        "points":  0,
        "text": [
          "Setup: Before deploying fleets, the sceond player sets aside 1 of his small or medium ships and up to 3 of his squadrons; he does not deploy them during setup.  Then he places 3 objective tokens in the play area beyond distance 3 of both players' edges.",
          "Special Rule: At the start of any round after the first round, the second player can deploy the ship and squadrons that he set aside at distance 1 of 1 objective token.  Then remove all objective tokens.  The ship can be deployed overlapping squadrons as though the ship had overlapped them while executing a maneuver.",
          "If the second player does not deploy, he may move each objective token to within distance 1 of its current position."
        ]
      },

      {
        "name":   "Fire Lanes",
        "points":  15,
        "text": [
          "Setup: After placing obstacles, the second player places 3 objective tokens in the setup area beyond distance 4 of both players' edges.  Then the first player may move each objective token to within distance 1-2 of its current location.",
          "End of Round: Each player gains 1 victory token for each objective token he controls.  To determine control of each token, players measure attack range and line of sight from each of their ships' hull zones as if performing attacks with battery armament targeting that objective token.  The player with the highest total number of dice in his combined attack pools controls that token.  If a player's ship or squadron overlaps an objective token, his opponent controls that token; if both players' ships or squadrons overlap the same token, neither player controls it."
        ]
      },

      {
        "name":   "Fleet Ambush",
        "points":  0,
        "text": [
          "Setup: The portion of the setup area that is beyond distance 5 of any edge of the setup area is the Ambush Zone.  Players mark the corners of the ambush zone with objective tokens.",
          "Players take turns deploying fleets as normal, but must deploy all ships before deploying any squadrons.  The first player must deploy ships within the ambush zone on his odd-numbered deployment turns, starting with his first turn.  He cannot deploy ships or squadrons overlapping obstacles in the ambush zone.  After setup is complete, he removes all objective tokens from the play area."
        ]
      },

      {
        "name":   "Contested Outpost",
        "points":  20,
        "text": [
          "Setup: Place obstacles as normal excluding the station.  Then the second player places the station in the setup area beyond distance 1 of all obstacles and beyond distance 5 of both players' edges.",
          "Special Rule: The station does not obstruct attacks and does not have the ability to discard damage cards of recover hull points.",
          "End of Round: Each player sums the command values of his ships at distance 1 of the station.  The player with the highest total gains 1 victory token."
        ]
      }
    ],

    "assault" : [
      {
        "name":   "Most Wanted",
        "points":  0,
        "text": [
          "Setup: After deploying fleets, the second player chooses 1 of his ships and 1 of the first player's ships to be objective ships.",
          "Special Rule: While attacking an objective ship, the attacker may add 1 die of any color that is alread in its attack pool to its attack pool.",
          "End of Round: The fleet point cost of a destroyed objective ship is doubled.  Do not double the cost of its upgrade cards."
        ]
      },

      {
        "name":   "Precision Strike",
        "points":  15,
        "text": [
          "Setup: After deploying fleets, each of the second player's ships gains a Concentrate Fire token.",
          "Special Rule: When a squadron with BOMBER or a ship is attacking, it may spend 1 die with a Hit icon to flip 1 random facedown damage card on the defender faceup.",
          "After a squadron with BOMBER or a ship performs an attack, its owner gains 1 victory token for each damage card that was dealt faceup or flipped faceup during that attack."
        ]
      },

      {
        "name":   "Opening Salvo",
        "points":  0,
        "text": [
          "Setup: After deploying fleets, assign 1 objective token to each ship.",
          "Special Rule: The first time a ship performs an attack against another ship, discard the attacker's objective token.  If the attacker belongs to the first player, he adds 2 red dice to the attack pool.  If the attacker belongs to the second player, he adds 2 dice, each of any color, to the attack pool.",
          "End of Round: Each player increases his final score by half the fleet point cost of each enemy ship in the play area that has at least 1 damage card, rounded up."
        ]
      },

      {
        "name":   "Advanced Gunnery",
        "points":  0,
        "text": [
          "Setup: After deploying fleets, each player chooses 1 of his ships to be an objective ship, starting with the first player.",
          "Special Rule: The first player's objective ship may perform each of its attacks from the same hull zone.  It cannot target the same hull zone or squadron more than once each round with that hull zone.",
          "The second player's objective ship may perform each of its attacks from the same hull zone, and it may do so against the same targets.",
          "End of Game: The fleet point cost of a destroyed objective ship is doubled.  Do not double the cost of its upgrade cards."
        ]
      }
    ],

    "navigation" : [
      {
        "name":   "Minefields",
        "points":  0,
        "text": [
          "Setup: The second player places all obstacles.  He can place them anywhere in the setup area (even in deployment zones) and must place them beyond distance 5 of each other.  Then he places 6 objective tokens.  Each objective token must be places at distance 1 of an obstacles and beyond distance 1 of all other objective tokens.",
          "Special Rule: If a ship ends its movement at distance 1 of an objective token, remove that objective token from the play area and roll 2 blue dice.  That ship is dealt 1 facedown damage card for each Hit or Crit icon rolled.  If there is at least 1 Crit icon, deal the first damage card faceup."
        ]
      },

      {
        "name":   "Superior Positions",
        "points":  15,
        "text": [
          "Setup: The first player must deploy all of his ships and squadrons before the second player.",
          "Special Rule: After a ship or squadron performs an attack against the rear hull zone of another ship, if the defender suffered at least 1 damage, the attacker's owner gains 1 victory token."
        ]
      },

      {
        "name":   "Intel Sweep",
        "points":  0,
        "text": [
          "Setup: After placing obstacles, the players alternate placing a total of 5 objective tokens in the setup area, starting with the second player.  Each token must be placed in the play area beyond distance 5 of both players'edges and beyond distance 3 of all other objective tokens.  Then each player chooses one of his ships to be an objective ship, starting with the first player.",
          "Special Rule: When a player's objective ship reveals a command dial, that player may choose 1 objective token at distance 1 of that ship and remove it from the play area to gain 1 victory token.",
          "End of Game: If a player has more victory tokens than his opponent, increase his final score by 75."
        ]
      },

      {
        "name":   "Dangerous Territory",
        "points":  15,
        "text": [
          "Setup: Obstacles must be placed in the setup area beyond distance 5 of both players'edges.  After placing obstacles, place 1 objective token on each obstacles.",
          "Special Rule: When a ship overlaps an obstacle, the ship's owner may remove the objective token on that obstacle to gain 1 victory token.",
          "When one of the second player's ships overlaps an asteroid field or debris field, that obstacle has no effect."
        ]
      }
    ]
  };

  var ship = {
    "rebel" : [
      { 
        "full_name":       "Assault Frigate Mark II A",
        "name":            "Mk II A",
        "type":            "Assault Frigate",
        "points":          81,
        "hull":            6,
        "command":         3,
        "squadron":        2,
        "engineering":     4,
        "defense_tokens":  [ "evade", "brace", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
          "front_battery": { "black": 0, "blue": 1, "red": 2 },
          "left_battery":  { "black": 0, "blue": 1, "red": 3 },
          "right_battery": { "black": 0, "blue": 1, "red": 3 },
          "rear_battery":  { "black": 0, "blue": 1, "red": 2 }
        },
        "shields": {
          "front": 4,
          "left":  3,
          "right": 3,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 1 ],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "defensive-retrofit", "turbolasers"]
      },

      { 
        "full_name":       "Assault Frigate Mark II B",
        "name":            "Mk II B",
        "type":            "Assault Frigate",
        "points":          72,
        "hull":            6,
        "command":         3,
        "squadron":        3,
        "engineering":     4,
        "defense_tokens":  [ "evade", "brace", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 0, "blue": 0, "red": 2 },
          "left_battery":  { "black": 0, "blue": 1, "red": 3 },
          "right_battery": { "black": 0, "blue": 1, "red": 3 },
          "rear_battery":  { "black": 0, "blue": 0, "red": 2 }
        },
        "shields": {
          "front": 4,
          "left":  3,
          "right": 3,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 1 ],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "defensive-retrofit", "turbolasers"]
      },

      { 
        "full_name":       "CR90 Corvette A",
        "name":            "CR90 A",
        "type":            "CR90",
        "points":          44,
        "hull":            4,
        "command":         1,
        "squadron":        1,
        "engineering":     2,
        "defense_tokens":  [ "redirect", "evade", "evade"],
        "armament": {
        	"anti_squadron": { "black": 0, "blue": 1, "red": 0 },
        	"front_battery": { "black": 0, "blue": 1, "red": 2 },
        	"left_battery":  { "black": 0, "blue": 1, "red": 1 },
        	"right_battery": { "black": 0, "blue": 1, "red": 1 },
        	"rear_battery":  { "black": 0, "blue": 0, "red": 1 }
        },
        "shields": {
        	"front": 2,
        	"left":  2,
        	"right": 2,
        	"rear":  1
        },
        "speed": {
        	"1": [ 2 ],
        	"2": [ 1, 2 ],
        	"3": [ 0, 1, 2 ],
        	"4": [ 0, 1, 1, 2 ]
        },
        "upgrades": ["officer", "support-team", "defensive-retrofit", "turbolasers"]
      },

      { 
        "full_name":       "CR90 Corvette B",
        "name":            "CR90 B",
        "type":            "CR90",
        "points":          39,
        "hull":            4,
        "command":         1,
        "squadron":        1,
        "engineering":     2,
        "defense_tokens":  [ "redirect", "evade", "evade"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 0, "blue": 3, "red": 0 },
          "left_battery":  { "black": 0, "blue": 2, "red": 0 },
          "right_battery": { "black": 0, "blue": 2, "red": 0 },
          "rear_battery":  { "black": 0, "blue": 1, "red": 0 }
        },
        "shields": {
          "front": 2,
          "left":  2,
          "right": 2,
          "rear":  1
        },
        "speed": {
          "1": [ 2 ],
          "2": [ 1, 2 ],
          "3": [ 0, 1, 2 ],
          "4": [ 0, 1, 1, 2 ]
        },
        "upgrades": ["officer", "support-team", "defensive-retrofit", "ion-cannons"]
      },

      { 
        "full_name":       "MC30c Torpedo Frigate",
        "name":            "MC30c Torpedo",
        "type":            "MC30c",
        "points":          63,
        "hull":            4,
        "command":         2,
        "squadron":        1,
        "engineering":     3,
        "defense_tokens":  [ "evade", "evade", "redirect", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 2, "blue": 1, "red": 0 },
          "left_battery":  { "black": 3, "blue": 2, "red": 0 },
          "right_battery": { "black": 3, "blue": 2, "red": 0 },
          "rear_battery":  { "black": 1, "blue": 1, "red": 0 }
        },
        "shields": {
          "front": 3,
          "left":  3,
          "right": 3,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 2 ],
          "4": [ 0, 1, 1, 0 ]
        },
        "upgrades": ["officer", "weapons-team", "defensive-retrofit", "ordnance", "turbolasers"]
      },

      { 
        "full_name":       "MC30c Scout Frigate",
        "name":            "MC30c Scout",
        "type":            "MC30c",
        "points":          69,
        "hull":            4,
        "command":         2,
        "squadron":        1,
        "engineering":     3,
        "defense_tokens":  [ "evade", "evade", "redirect", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 2, "blue": 0, "red": 1 },
          "left_battery":  { "black": 3, "blue": 0, "red": 2 },
          "right_battery": { "black": 3, "blue": 0, "red": 2 },
          "rear_battery":  { "black": 1, "blue": 0, "red": 1 }
        },
        "shields": {
          "front": 3,
          "left":  3,
          "right": 3,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 2 ],
          "4": [ 0, 1, 1, 0 ]
        },
        "upgrades": ["officer", "weapons-team", "defensive-retrofit", "ordnance", "turbolasers"]
      },

      { 
        "full_name":       "MC80 Command Cruiser",
        "name":            "MC80 Command",
        "type":            "MC80",
        "points":          106,
        "hull":            8,
        "command":         3,
        "squadron":        4,
        "engineering":     4,
        "defense_tokens":  [ "brace", "redirect", "redirect", "contain"],
        "armament": {
          "anti_squadron": { "black": 1, "blue": 1, "red": 0 },
          "front_battery": { "black": 0, "blue": 2, "red": 1 },
          "left_battery":  { "black": 0, "blue": 3, "red": 3 },
          "right_battery": { "black": 0, "blue": 3, "red": 3 },
          "rear_battery":  { "black": 0, "blue": 2, "red": 1 }
        },
        "shields": {
          "front": 4,
          "left":  4,
          "right": 4,
          "rear":  3
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [],
          "4": []
        },
        "upgrades": ["officer", "support-team", "offensive-retrofit", "defensive-retrofit", "ion-cannons", "turbolasers"]
      },

      { 
        "full_name":       "MC80 Assault Cruiser",
        "name":            "MC80 Assault",
        "type":            "MC80",
        "points":          114,
        "hull":            8,
        "command":         3,
        "squadron":        3,
        "engineering":     4,
        "defense_tokens":  [ "brace", "redirect", "redirect", "contain"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
          "front_battery": { "black": 0, "blue": 1, "red": 2 },
          "left_battery":  { "black": 0, "blue": 2, "red": 4 },
          "right_battery": { "black": 0, "blue": 2, "red": 4 },
          "rear_battery":  { "black": 0, "blue": 1, "red": 2 }
        },
        "shields": {
          "front": 4,
          "left":  4,
          "right": 4,
          "rear":  3
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [],
          "4": []
        },
        "upgrades": ["officer", "support-team", "defensive-retrofit", "defensive-retrofit", "ion-cannons", "turbolasers"]
      },

      { 
        "full_name":       "Nebulon-B Escort Frigate",
        "name":            "Nebulon-B Escort",
        "type":            "Nebulon-B",
        "points":          57,
        "hull":            5,
        "command":         2,
        "squadron":        2,
        "engineering":     3,
        "defense_tokens":  [ "evade", "brace", "brace"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
          "front_battery": { "black": 0, "blue": 0, "red": 3 },
          "left_battery":  { "black": 0, "blue": 1, "red": 1 },
          "right_battery": { "black": 0, "blue": 1, "red": 1 },
          "rear_battery":  { "black": 0, "blue": 0, "red": 2 }
        },
        "shields": {
          "front": 3,
          "left":  1,
          "right": 1,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 2 ],
          "4": []
        },
        "upgrades": ["officer", "support-team", "turbolasers"]
      },

      { 
        "full_name":       "Nebulon-B Support Refit",
        "name":            "Nebulon-B Support",
        "type":            "Nebulon-B",
        "points":          51,
        "hull":            5,
        "command":         2,
        "squadron":        1,
        "engineering":     3,
        "defense_tokens":  [ "evade", "brace", "brace"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 0, "blue": 0, "red": 3 },
          "left_battery":  { "black": 0, "blue": 1, "red": 1 },
          "right_battery": { "black": 0, "blue": 1, "red": 1 },
          "rear_battery":  { "black": 0, "blue": 0, "red": 2 }
        },
        "shields": {
          "front": 3,
          "left":  1,
          "right": 1,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 2 ],
          "4": []
        },
        "upgrades": ["officer", "support-team", "turbolasers"]
      }
    ],

    "imperial" : [
      { 
        "full_name":       "Gladiator I-class Star Destoyer",
        "name":            "Gladiator I",
        "type":            "Gladiator",
        "points":          56,
        "hull":            5,
        "command":         2,
        "squadron":        2,
        "engineering":     3,
        "defense_tokens":  [ "evade", "brace", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 2, "blue": 0, "red": 2 },
          "left_battery":  { "black": 4, "blue": 0, "red": 0 },
          "right_battery": { "black": 4, "blue": 0, "red": 0 },
          "rear_battery":  { "black": 1, "blue": 0, "red": 1 }
        },
        "shields": {
          "front": 3,
          "left":  2,
          "right": 2,
          "rear":  1
        },
        "speed": {
          "1": [ 2 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 1 ],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "support-team", "ordnance"]
      },

      { 
        "full_name":       "Gladiator II-class Star Destoyer",
        "name":            "Gladiator II",
        "type":            "Gladiator",
        "points":          62,
        "hull":            5,
        "command":         2,
        "squadron":        2,
        "engineering":     3,
        "defense_tokens":  [ "evade", "brace", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
          "front_battery": { "black": 2, "blue": 0, "red": 2 },
          "left_battery":  { "black": 3, "blue": 0, "red": 1 },
          "right_battery": { "black": 3, "blue": 0, "red": 1 },
          "rear_battery":  { "black": 1, "blue": 0, "red": 1 }
        },
        "shields": {
          "front": 3,
          "left":  2,
          "right": 2,
          "rear":  1
        },
        "speed": {
          "1": [ 2 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 1 ],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "support-team", "ordnance"]
      },

      { 
        "full_name":       "Imperial I-class Star Destoyer",
        "name":            "Imperial I",
        "type":            "Imperial",
        "points":          110,
        "hull":            11,
        "command":         3,
        "squadron":        4,
        "engineering":     4,
        "defense_tokens":  [ "brace", "redirect", "redirect", "contain"],
        "armament": {
          "anti_squadron": { "black": 1, "blue": 1, "red": 0 },
          "front_battery": { "black": 3, "blue": 2, "red": 3 },
          "left_battery":  { "black": 2, "blue": 0, "red": 2 },
          "right_battery": { "black": 2, "blue": 0, "red": 2 },
          "rear_battery":  { "black": 0, "blue": 2, "red": 1 }
        },
        "shields": {
          "front": 4,
          "left":  3,
          "right": 3,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 1],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "offensive-retrofit", "ion-cannons", "turbolasers"]
      },

      { 
        "full_name":       "Imperial II-class Star Destoyer",
        "name":            "Imperial II",
        "type":            "Imperial",
        "points":          120,
        "hull":            11,
        "command":         3,
        "squadron":        4,
        "engineering":     4,
        "defense_tokens":  [ "brace", "redirect", "redirect", "contain"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
          "front_battery": { "black": 0, "blue": 4, "red": 4 },
          "left_battery":  { "black": 0, "blue": 2, "red": 2 },
          "right_battery": { "black": 0, "blue": 2, "red": 2 },
          "rear_battery":  { "black": 0, "blue": 2, "red": 1 }
        },
        "shields": {
          "front": 4,
          "left":  3,
          "right": 3,
          "rear":  2
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 1, 1 ],
          "3": [ 0, 1, 1],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "defensive-retrofit", "ion-cannons", "turbolasers"]
      },

      { 
        "full_name":       "Raider I-class Corvette",
        "name":            "Raider I",
        "type":            "Raider",
        "points":          44,
        "hull":            4,
        "command":         1,
        "squadron":        1,
        "engineering":     2,
        "defense_tokens":  [ "evade", "evade", "brace"],
        "armament": {
          "anti_squadron": { "black": 2, "blue": 0, "red": 0 },
          "front_battery": { "black": 2, "blue": 2, "red": 0 },
          "left_battery":  { "black": 1, "blue": 1, "red": 0 },
          "right_battery": { "black": 1, "blue": 1, "red": 0 },
          "rear_battery":  { "black": 0, "blue": 1, "red": 0 }
        },
        "shields": {
          "front": 2,
          "left":  2,
          "right": 2,
          "rear":  2
        },
        "speed": {
          "1": [ 2 ],
          "2": [ 2, 2 ],
          "3": [ 0, 1, 1 ],
          "4": [ 0, 1, 1, 1]
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "ordnance"]
      },

      { 
        "full_name":       "Raider II-class Corvette",
        "name":            "Raider II",
        "type":            "Raider",
        "points":          48,
        "hull":            4,
        "command":         1,
        "squadron":        1,
        "engineering":     2,
        "defense_tokens":  [ "evade", "evade", "brace"],
        "armament": {
          "anti_squadron": { "black": 1, "blue": 1, "red": 0 },
          "front_battery": { "black": 1, "blue": 3, "red": 0 },
          "left_battery":  { "black": 1, "blue": 1, "red": 0 },
          "right_battery": { "black": 1, "blue": 1, "red": 0 },
          "rear_battery":  { "black": 0, "blue": 1, "red": 0 }
        },
        "shields": {
          "front": 2,
          "left":  2,
          "right": 2,
          "rear":  2
        },
        "speed": {
          "1": [ 2 ],
          "2": [ 2, 2 ],
          "3": [ 0, 1, 1 ],
          "4": [ 0, 1, 1, 1]
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "ion-cannons"]
      },

      { 
        "full_name":       "Victory I-class Star Destoyer",
        "name":            "Victory I",
        "type":            "Victory",
        "points":          73,
        "hull":            8,
        "command":         3,
        "squadron":        3,
        "engineering":     4,
        "defense_tokens":  [ "brace", "redirect", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 3, "blue": 0, "red": 3 },
          "left_battery":  { "black": 1, "blue": 0, "red": 2 },
          "right_battery": { "black": 1, "blue": 0, "red": 2 },
          "rear_battery":  { "black": 0, "blue": 0, "red": 2 }
        },
        "shields": {
          "front": 3,
          "left":  3,
          "right": 3,
          "rear":  1
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 0, 1 ],
          "3": [],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "ordnance", "turbolasers"]
      },

      { 
        "full_name":       "Victory II-class Star Destoyer",
        "name":            "Victory II",
        "type":            "Victory",
        "points":          85,
        "hull":            8,
        "command":         3,
        "squadron":        3,
        "engineering":     4,
        "defense_tokens":  [ "brace", "redirect", "redirect"],
        "armament": {
          "anti_squadron": { "black": 0, "blue": 1, "red": 0 },
          "front_battery": { "black": 0, "blue": 3, "red": 3 },
          "left_battery":  { "black": 0, "blue": 1, "red": 2 },
          "right_battery": { "black": 0, "blue": 1, "red": 2 },
          "rear_battery":  { "black": 0, "blue": 0, "red": 2 }
        },
        "shields": {
          "front": 3,
          "left":  3,
          "right": 3,
          "rear":  1
        },
        "speed": {
          "1": [ 1 ],
          "2": [ 0, 1 ],
          "3": [],
          "4": []
        },
        "upgrades": ["officer", "weapons-team", "offensive-retrofit", "ion-cannons", "turbolasers"]
      }
    ]
  };

	var squadron = {
    "rebel" : [
  		{	
        "name":    "A-wing Squadron",
        "type":    "A-wing",
  			"points":   11,
        "speed":    5,
        "hull":     4,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": ["counter2"]
  		},

      { 
        "name":    "Tycho Celchu",
        "type":    "A-wing",
        "points":   20,
        "speed":    5,
        "hull":     4,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "counter2" ],
        "defense_tokens": [ "brace", "scatter" ],
        "special-text": "You are not prevented from moving or attacking ships while you are engaged."
      },

  		{	
        "name":    "B-wing Squadron",
        "type":    "B-wing",
  			"points":   14,
        "speed":    2,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 1, "red": 0 }
          },
        "keywords": [ "bomber" ]
  		},

      { 
        "name":    "Keyan Farlander",
        "type":    "B-wing",
        "points":   20,
        "speed":    2,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 2, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "While attacking a ship, if the defending hull zone has no shields, you may reroll any number of dice in your attack pool."
      },

  		{	
        "name":    "X-wing Squadron",
        "type":    "X-wing",
  			"points":   13,
        "speed":    3,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 0, "blue": 0, "red": 1 }
          },
        "keywords": [ "bomber", "escort" ]
  		},

      { 
        "name":    "Luke Skywalker",
        "type":    "X-wing",
        "points":   20,
        "speed":    3,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "escort" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "While attacking a ship, treat the defender as having no shields."
      },

      { 
        "name":    "Wedge Antilles",
        "type":    "X-wing",
        "points":   19,
        "speed":    3,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "escort" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "While attacking an activated squadron, you may add 2 blue dice to your attack pool."
      },

  		{	
        "name":    "Y-wing Squadron",
        "type":    "Y-wing",
  			"points":   10,
        "speed":    3,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "heavy" ]
  		},

  		{	
        "name":    "Dutch Vander",
        "type":    "Y-wing",
  			"points":   16,
        "speed":    3,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "heavy" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "When a squadron you attack suffers at least 1 damage, you may toggle its activation slider to the activated side.  If it was already activated, it suffers 1 additional damage instead."
  		},

      { 
        "name":    "YT-1300",
        "type":    "YT-1300",
        "points":   13,
        "speed":    2,
        "hull":     7,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "counter1", "escort" ]
      },

      { 
        "name":    "Han Solo",
        "type":    "Millennium Falcon",
        "points":   26,
        "speed":    3,
        "hull":     7,
        "armament": {
            "anti_squadron": { "black": 2, "blue": 2, "red": 0 },
            "battery":       { "black": 1, "blue": 1, "red": 0 }
          },
        "keywords": [ "grit, rogue" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "At the start of the Ship Phase, you may activate as if you were activated by a Squadron command."
      },

      { 
        "name":    "YT-2400",
        "type":    "YT-2400",
        "points":   16,
        "speed":    4,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "rogue" ]
      },

      { 
        "name":    "Dash Rendar",
        "type":    "Outrider",
        "points":   24,
        "speed":    4,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "rogue" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "While attacking, you may reroll 1 die for each enemy squadron or enemy ship at distance 1."
      },

      { 
        "name":    "HWK-290",
        "type":    "HWK-290",
        "points":   12,
        "speed":    3,
        "hull":     4,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "counter2", "intel" ]
      },

      { 
        "name":    "Jan Ors",
        "type":    "Moldy Crow",
        "points":   19,
        "speed":    3,
        "hull":     4,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "counter2", "intel" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "While a friendly squadron at distance 1-2 is defending, it can spend your defense tokens."
      },

      { 
        "name":    "Scurrg H-6 Bomber",
        "type":    "Scurrg H-6 Bomber",
        "points":   16,
        "speed":    3,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
            "battery":       { "black": 1, "blue": 1, "red": 0 }
          },
        "keywords": [ "bomber", "grit", "heavy" ]
      },

      { 
        "name":    "Nym",
        "type":    "Havoc",
        "points":   21,
        "speed":    3,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
            "battery":       { "black": 1, "blue": 1, "red": 0 }
          },
        "keywords": [ "bomber", "grit" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "Blue Crit: If the defender is a ship, you may choose and discard 1 of its defense tokens."
      }
    ],

    "imperial" : [
  		{	
        "name":    "TIE Advanced Squadron",
  			"type":    "TIE Advanced",
        "points":   12,
        "speed":    4,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "escort" ]
  		},

      { 
        "name":    "Darth Vader",
        "type":    "TIE Advanced",
        "points":   21,
        "speed":    4,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 1, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "escort" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "While attacking each of your critical icons adds 1 damage to the damage total."
      },

  		{	
        "name":    "TIE Bomber Squadron",
  			"type":    "TIE Bomber",
        "points":   9,
        "speed":    4,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 1, "blue": 0, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "heavy" ]
  		},

      { 
        "name":    "Major Ryhmer",
        "type":    "TIE Bomber",
        "points":   16,
        "speed":    4,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 1, "blue": 1, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "bomber", "heavy" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "Friendly squadrons at distance 1 can attack enemy ships at close-medium range using all dice in their battery armament."
      },

  		{	
        "name":    "TIE Fighter Squadron",
  			"type":    "TIE Fighter",
        "points":   8,
        "speed":    4,
        "hull":     3,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "swarm" ]
  		},

      { 
        "name":    "Howlrunner",
        "type":    "TIE Fighter",
        "points":   16,
        "speed":    4,
        "hull":     3,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "swarm" ],
        "defense_tokens": [ "brace", "scatter" ],
        "special-text": "While another friendly squadron with swarm at distance 1 is attacking a squadron, it may add 1 blue die to its attack pool."
      },

      { 
        "name":    "Mauler Mithel",
        "type":    "TIE Fighter",
        "points":   15,
        "speed":    4,
        "hull":     3,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "swarm" ],
        "defense_tokens": [ "brace", "scatter" ],
        "special-text": "After you move, each squadron engaged with you suffers 1 damage."
      },

  		{	
        "name":    "TIE Interceptor Squadron",
  			"type":    "TIE Interceptor",
        "points":   11,
        "speed":    5,
        "hull":     3,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "counter2", "swarm" ]
  		},

  		{	
        "name":    "Sontir Fel",
  			"type":    "TIE Interceptor",
        "points":   18,
        "speed":    5,
        "hull":     3,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "counter2", "swarm" ],
        "defense_tokens": [ "brace", "scatter" ],
        "special-text": "After a squadron you are engaged with performs a non-counter attack, it suffers 1 damage if it did not attack you."
  		},

      { 
        "name":    "Firespray-31",
        "type":    "Firespray-31",
        "points":   18,
        "speed":    3,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 0, "blue": 2, "red": 0 }
          },
        "keywords": [ "bomber", "rogue" ]
      },

      { 
        "name":    "Boba Fett",
        "type":    "Slave I",
        "points":   26,
        "speed":    3,
        "hull":     6,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 1, "red": 0 }
          },
        "keywords": [ "bomber", "rogue" ],
        "defense_tokens": [ "brace", "brace" ],
        "special-text": "When you activate, choose 1 enemy ship or squadron at distance 1.  That ship or squadron suffers 1 damage."
      },

      { 
        "name":    "YV-666",
        "type":    "YV-666",
        "points":   15,
        "speed":    2,
        "hull":     7,
        "armament": {
            "anti_squadron": { "black": 2, "blue": 2, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "grit", "heavy", "rogue" ]
      },

      { 
        "name":    "Bossk",
        "type":    "Hound's Tooth",
        "points":   23,
        "speed":    3,
        "hull":     7,
        "armament": {
            "anti_squadron": { "black": 4, "blue": 0, "red": 0 },
            "battery":       { "black": 1, "blue": 1, "red": 0 }
          },
        "keywords": [ "grit", "rogue" ],
        "defense_tokens": [ "brace" ],
        "special-text": "While attacking, if you have 6 or fewer hull points remaining, you may add 1 blue die set to the Accuracy icon to your attack pool."
      },

      { 
        "name":    "Aggressor Assault Fighter",
        "type":    "Aggressor Assault Fighter",
        "points":   16,
        "speed":    3,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "counter1", "rogue" ]
      },

      { 
        "name":    "IG-88",
        "type":    "IG-2000",
        "points":   21,
        "speed":    5,
        "hull":     5,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 4, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "counter2", "rogue" ],
        "defense_tokens": [ "scatter" ],
        "special-text": "You ignore the ESCORT and COUNTER keywords on enemy squadrons."
      },

      { 
        "name":    "JumpMaster 5000",
        "type":    "JumpMaster 5000",
        "points":   12,
        "speed":    4,
        "hull":     4,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 2, "red": 0 },
            "battery":       { "black": 0, "blue": 1, "red": 0 }
          },
        "keywords": [ "intel", "swarm" ]
      },

      { 
        "name":    "Dengar",
        "type":    "Punishing One",
        "points":   20,
        "speed":    4,
        "hull":     4,
        "armament": {
            "anti_squadron": { "black": 0, "blue": 3, "red": 0 },
            "battery":       { "black": 1, "blue": 0, "red": 0 }
          },
        "keywords": [ "intel", "swarm" ],
        "defense_tokens": [ "brace", "scatter" ],
        "special-text": "While another friendly squadron is at distance 1-2, it has COUNTER 1 or increases its COUNTER value by 1."
      }
    ]
	};

  var upgrade = {
    "commander" : {
      "rebel" : [
        {
          "name"   : "General Dodonna",
          "points" : 20,
          "text"   : ["Before an enemy ship is dealt a faceup damage card, look at the top 4 cards of the damage deck, place 1 on top of the deck, and discard the others."]
        },

        {
          "name"   : "Garm Bel Iblis",
          "points" : 25,
          "text"   : ["At the start of the first round and the fifth round, each friendly ship may gain a number of command tokens equal to its command value."]
        },

        {
          "name"   : "Mon Mothma",
          "points" : 30,
          "text"   : ["When a friendly ship resolves the Evade token effect, it can cancel 1 die at medium range or reroll 1 die at close range or distance 1."]
        },

        {
          "name"   : "General Rieekan",
          "points" : 30,
          "text"   : ["When a friendly ship or friendly unique squadron is destroyed, it remains in the play area and is treated as if it was not destroyed until the end of the Status Phase."]
        },

        {
          "name"   : "Admiral Ackbar",
          "points" : 38,
          "text"   : ["Before a friendly ship's Attack Step, it may choose to attack from only its left and right hull zones this round.  If it does, it may add 2 red dice to its attack pool while attacking a ship."]
        }
      ],

      "imperial" : [

      ]
    },

    "title" : {
      "rebel" : {
        "CR90" : [
          {
            "name"   : "Dodonna's Pride",
            "points" : 6,
            "text"   : ["Blue Crit: Cancel all attack dice to deal 1 faceup damage card to the defender."]
          },

          {
            "name"   : "Jaina's Light",
            "points" : 2,
            "text"   : ["You can ignore the effects of overlapping obstacles.", "Your attacks cannot be obstructed."]
          },

          {
            "name"   : "Tantive IV",
            "points" : 3,
            "text"   : ["Before you gain a command token, 1 friendly ship at distance may gain that token instead."]
          }
        ],

        "Nebulon_B" : [
          {
            "name"   : "Salvation",
            "points" : 7,
            "text"   : ["While attacking a ship from your front hull zone, your Crit icons count as 2 damage instead of 1."]
          },

          {
            "name"   : "Yavaris",
            "points" : 5,
            "text"   : ["Squadron: Each squadron you activate can attack twice if it does not move."]
          },

          {
            "name"   : "Redemption",
            "points" : 8,
            "text"   : ["When a friendly ship at distance 1-5 resolves a Repair command, it gains 1 additional engineering point."]
          }
        ],

        "Assault_Frigate" : [
          {
            "name"   : "Paragon",
            "points" : 5,
            "text"   : ["While attacking a ship you have already attacked this round, add 1 black die to your attack pool."]
          },

          {
            "name"   : "Gallant Haven",
            "points" : 8,
            "text"   : ["Before a friendly squadron at distance 1 suffers damage from an attack, reduce the total damage by 1."]
          }
        ],

        "MC30c" : [
          {
            "name"   : "Admonition",
            "points" : 8,
            "text"   : ["While defending, during the Spend Defense Tokens Step, you may discard a defense token to cancel 1 attack die."]
          },

          {
            "name"   : "Foresight",
            "points" : 8,
            "text"   : ["When you resolve the Evade defense effect, you can affect 1 additional die.",
                        "When you resolve the Redirect defense effect, you can choose 1 additional hull zone to suffer damage."]
          }
        ],

        "MC80" : [
          {
            "name"   : "Home One",
            "points" : 7,
            "text"   : ["While another friendly ship at distance 1-5 is attacking, it may change 1 die to a face with an Accuracy icon."]
          },

          {
            "name"   : "Independence",
            "points" : 8,
            "text"   : ["Squadron: Each squadron you activate may increase its speed to 4 until the end of its activation.  Squadrons that change speed in this way cannot attack this activation."]
          },

          {
            "name"   : "Defiance",
            "points" : 5,
            "text"   : ["While attacking a ship that has already activated this round, add 1 die of any color to your attack pool."]
          }
        ]
      },

      "imperial" : [

      ]
    },


  };

	// On faction selection, scroll to flagship select
	$(".faction-select").click(function(){
		// clear the previous selections
		armada_reset();

		// store the selected faction
		faction = this.getAttribute("value");

		// generate ship select options
		build_select_options("#flagship-select", faction, "ship");

		// generate squadron select options
		build_select_options("#initial-squadron-select", faction, "squadron");

		// Show the hidden Ship data button on xs displays
		$("#ship-data").removeClass("hidden").addClass("visible-xs");
		// Show the hidden fleet list div
		$("#fleet-list").removeClass("hidden");

	});

	// Params:
	//		target - the #id or .class to target
	//		faction - rebel or imperial
	//		ship_type - ship or squadron
	var build_select_options = function(target, faction, ship_type) {
		var select = $(target);

		select.append("<option selected disabled>Choose a " + ship_type + " </option>");

		var type = {};
		if (ship_type == "ship")
			type = ship;
		else
			type = squadron;

		for (var i = 0; i < type[faction].length; i++) {
			select.append(
				"<option value=" + type[faction][i].points + ">" +
				type[faction][i].name + " - (" +
				type[faction][i].points + ")</option>");
		}		
	};


	$("#flagship-select").change(function() {
		// If no ship selects have been created yet...
		if (! $(".ship-select").length) {
			//... create one
			var ship_select_div = " \
				<div> \
				<label for='ship'>Ship: </label> \
				<select id='ship-1' class='ship-select' name='ship'></select> \
				</div>";

			$( ship_select_div ).insertAfter( $("#flagship-select").parent() );
			
			// Add the select options
			build_select_options("#ship-1", faction, "ship");
		}
	});

	$(document).on('change', '.ship-select', function() {
		// Find the total number of .ship-select divs
		var index = $(".ship-select").length;

		// Check if the last .ship-select is in its default state
		if ($(".ship-select")[index - 1].selectedIndex == 0)
			return;

		var new_index = index + 1;

		var ship_select_div = "<div>" +  
				"<label for='ship'>Ship: </label>" +
				"<select id='ship-" + new_index + "' class='ship-select' name='ship'></select>" +
				"</div>";

		$( ship_select_div ).insertAfter( $("#ship-" + index).parent() );
		
		// Add the select options
		build_select_options("#ship-" + new_index, faction, "ship");
		
	});

	$("#initial-squadron-select").change(function() {
		// If no ship selects have been created yet...
		if (! $(".squadron-select").length) {
			//... create one
			var squadron_select_div = " \
				<div> \
				<label for='squadron'>Squadron: </label> \
				<select id='squadron-1' class='squadron-select' name='squadron'></select> \
				</div>";

			$( squadron_select_div ).insertAfter( $("#initial-squadron-select").parent() );
			
			// Add the select options
			build_select_options("#squadron-1", faction, "squadron");
		}
	});

	$(document).on('change', '.squadron-select', function() {
		// Find the total number of .squadron-select divs
		var index = $(".squadron-select").length;

		// Check if the last .squadron-select is in its default state
		if ($(".squadron-select")[index - 1].selectedIndex == 0)
			return;

		var new_index = index + 1;

		var squadron_select_div = "<div>" +  
				"<label for='squadron'>Squadron: </label>" +
				"<select id='squadron-" + new_index + "' class='squadron-select' name='squadron'></select>" +
				"</div>";

		$( squadron_select_div ).insertAfter( $("#squadron-" + index).parent() );
		
		// Add the select options
		build_select_options("#squadron-" + new_index, faction, "squadron");
		
	});

	var armada_reset = function() {
		// empty the flagship select options list
		$("#flagship-select").empty();
		// remove generated ship select elements
		$(".ship-select").parent().remove();
		// empty initial squadron select options list
		$("#initial-squadron-select").empty();
		// remove generated squadron select elements
		$(".squadron-select").parent().remove();
	};

});
