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

	// On faction selection, 
	// scroll to flagship select
	$(".faction-select").click(function(){
		// clear the previous selections
		armada_reset();

		// store the selected faction
		faction = this.getAttribute("value");

		// generate ship select options
		

		// generate squadron select options

		// Show the hidden Ship data button on xs displays
		$("#ship-data").removeClass("hidden").addClass("visible-xs");
		// Show the hidden fleet list div
		$("#fleet-list").removeClass("hidden");

	});

	var armada_reset = function() {

	};
});