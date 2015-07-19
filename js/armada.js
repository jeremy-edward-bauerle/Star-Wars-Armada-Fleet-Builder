$(document).ready(function(){

	var faction = "";
	
	var ships = {
		  "rebels": [
		    { "name": "Assault Frigate Mark II A",
		      "name_abbr": "Mk II A",
		      "points": 81
		    },
		    { "name": "Assault Frigate Mark II B",
		      "name_abbr": "Mk II B",
		      "points": 72
		    },
		    { "name": "CR90 Corvette A",
		      "name_abbr": "CR90 A",
		      "points": 44
		    },
		    { "name": "CR90 Corvette B",
		      "name_abbr": "CR90 B",
		      "points": 39
		    },
		    { "name": "Nebulon-B Escort Frigate",
		      "name_abbr": "Neb-B Escort",
		      "points": 57
		    },
		    { "name": "Nebulon-B Supply Frigate",
		      "name_abbr": "Neb-B Supply",
		      "points": 51
		    },
		  ],
		  "imperials": [
		    { "name": "Victory I-class Star Destoyer",
		      "name_abbr": "Victory I",
		      "points": 73
		    },
		    { "name": "Victory II-class Star Destoyer",
		      "name_abbr": "Victory II",
		      "points": 85
		    },
		    { "name": "Gladiator I-class Star Destoyer",
		      "name_abbr": "Gladiator I",
		      "points": 56
		    },
		    { "name": "Gladiator II-class Star Destoyer",
		      "name_abbr": "Gladiator II",
		      "points": 62
		    }
		  ]
		};

	var squadrons = {
		"rebels": [
			{	"name": "A-wings",
				"points": 11
			},
			{	"name": "B-wings",
				"points": 14
			},
			{	"name": "X-wings",
				"points": 13
			},
			{	"name": "Y-wings",
				"points": 10
			},
			{	"name": "Dutch Vander",
				"points": 16
			},
			{	"name": "Keyan Farlander",
				"points": 20
			},
			{	"name": "Luke Skywalker",
				"points": 20
			},
			{	"name": "Tycho Celchu",
				"points": 16
			},
			{	"name": "Wedge Antilles",
				"points": 19
			}
		],
		"imperials": [
			{	"name": "Tie Advanceds",
				"points": 12
			},
			{	"name": "Tie Bombers",
				"points": 9
			},
			{	"name": "Tie Fighters",
				"points": 8
			},
			{	"name": "Tie Interceptors",
				"points": 11
			},
			{	"name": "Darth Vader",
				"points": 21
			},
			{	"name": "Howlrunner",
				"points": 16
			},
			{	"name": "Major Ryhmer",
				"points": 16
			},
			{	"name": "Mauler Mithel",
				"points": 15
			},
			{	"name": "Sontir Fel",
				"points": 18
			}
		]
	};

	// On faction selection, 
	// scroll to flagship select
	$(".faction-select").click(function(){
		// clear the previous selections
		armada_reset();

		// store the selected faction
		faction = this.getAttribute("value");

		// generate ship select options
		var flagship_select = document.getElementById("flagship-select");

		$("#flagship-select").append("<option selected disabled>Choose your flagship</option>");

		for (var i = 0; i < ships[faction].length; i++) {
			var opt = document.createElement('option');
			opt.value = ships[faction][i].name;
			opt.innerHTML = ships[faction][i].name_abbr + " - (" + 
			                ships[faction][i].points + ")";
			flagship_select.appendChild(opt);
		}

		// generate squadron select options
		var squadron_select = document.getElementById("squadron-select");

		$("#squadron-select").append("<option selected disabled>Choose a squadron</option>");

		for (var i = 0; i < squadrons[faction].length; i++) {
			var opt = document.createElement('option');
			opt.value = squadrons[faction][i].name;
			opt.innerHTML = squadrons[faction][i].name + " - (" + 
			                squadrons[faction][i].points + ")";
			squadron_select.appendChild(opt);
		}


		// Show the hidden Ship data button on xs displays
		$("#ship-data").removeClass("hidden").addClass("visible-xs");
		// Show the hidden fleet list div
		$("#fleet-list").removeClass("hidden");

	});

	var armada_reset = function() {
		// remove all ship options
		$("#flagship-select").empty();
		$("#squadron-select").empty();
	};

	// Create a new div with a ship select input inside
	var create_new_ship_select() = function() {

	};

	// Create a new div with a squadron select input inside
	var create_new_squadron_select() = function() {

	};
});