$(document).ready(function(){

	var faction = "";
	
	var ship = {
		  "rebels": [
		    { "full_name": "Assault Frigate Mark II A",
		      "name": "Mk II A",
		      "points": 81
		    },
		    { "full_name": "Assault Frigate Mark II B",
		      "name": "Mk II B",
		      "points": 72
		    },
		    { "full_name": "CR90 Corvette A",
		      "name": "CR90 A",
		      "points": 44
		    },
		    { "full_name": "CR90 Corvette B",
		      "name": "CR90 B",
		      "points": 39
		    },
		    { "full_name": "Nebulon-B Escort Frigate",
		      "name": "Neb-B Escort",
		      "points": 57
		    },
		    { "full_name": "Nebulon-B Supply Frigate",
		      "name": "Neb-B Supply",
		      "points": 51
		    },
		  ],
		  "imperials": [
		    { "full_name": "Victory I-class Star Destoyer",
		      "name": "Victory I",
		      "points": 73
		    },
		    { "full_name": "Victory II-class Star Destoyer",
		      "name": "Victory II",
		      "points": 85
		    },
		    { "full_name": "Gladiator I-class Star Destoyer",
		      "name": "Gladiator I",
		      "points": 56
		    },
		    { "full_name": "Gladiator II-class Star Destoyer",
		      "name": "Gladiator II",
		      "points": 62
		    }
		  ]
		};

	var squadron = {
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
	//$(".ship-select").change(function() {
		// Find the total number of .ship-select divs
		var index = $(".ship-select").length;
		var new_index = index + 1;

		var ship_select_div = "<div>" +  
				"<label for='ship'>Ship: </label>" +
				"<select id='ship-" + new_index + "' class='ship-select' name='ship'></select>" +
				"</div>";

		$( ship_select_div ).insertAfter( $("#ship-" + index).parent() );
		
		// Add the select options
		build_select_options("#ship-" + new_index, faction, "ship");
		
	});

	var armada_reset = function() {
		// remove all ship options
		$("#flagship-select").empty();
		$("#squadron-select").empty();
	};



	// Create a new div with a ship select input inside
	var create_new_ship_select = function() {

	};

	// Create a new div with a squadron select input inside
	var create_new_squadron_select = function() {

	};
});