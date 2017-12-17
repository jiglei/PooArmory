var g_characters = [
	"Fiona",
	"Evie",
	"Delia",
	"Karok",
	"Vella",
	"Miri",
	"Kai",
	"Sylas",
	"Arisha",
	"Hurk",
	"Lynn",
	"Lann"
]

var g_charactersLookup = {
	"Fiona":"Best class",
	"Evie":"Healslut",
	"Delia":"Also slut",
	"Karok":"Carrot",
	"Vella":"Marta is angry",
	"Sylas":"Korea",
	"Miri":"Boobs",
	"Arisha":"More boobs",
	"Lynn":"Stupid jailbait",
	"Kai":"Robina",
	"Hurk":"Biggus dickus",
	"Lann":"What is this again?"
	
}

var g_weaponTypes = {
	"Fiona":{
		"longsword":true,
		"long_hammer":true,
		"smallshield":true,
		"largeshield":true
	},
	"Evie":{
		"staff" :true,
		"battle_scythe" :true,
		"book": true,
		"fomorian": true
	},
	"Delia":{
		"bastard_sword" :true,
		"book": true
	},
	"Karok":{
		"cestuse" :true,
		"pillar" :true,
		"book": true
	},
	"Kai":{
		"bow" : true,
		"cross_gun": true,
		"book": true
	},
	"Vella":{
		"twin_chainblade":true,
		"twin_sword":true,
		"book": true
	},
	"Lann":{
		"twin_spear":true,
		"twin_sword":true,
		"book": true
	},
	"Lynn":{
		"glaive":true,
		"blute":true,
		"book": true
	},
	"Arisha":{
		"spellsword":true,
		"focus":true,
		"whip":true
	},
	"Miri":{
		"dragonspine":true,
		"book": true
	},
	"Sylas":{
		"phantom_dagger":true,
		"book": true,
		"fomorian":true
	},
	"Hurk":{
		"greatsword":true,
		"teide":true,
		"book": true
	}
}

var g_attackStats = {
	"Fiona" : "att",
	"Evie" : "matt",
	"Delia": "att",
	"Karok": "att",
	"Arisha": "matt",
	"Lynn": "att",
	"Sylas": "matt",
	"Hurk": "att",
	"Miri": "att",
	"Lann": "att",
	"Kai": "att",
	"Vella": "att"
	
}

// prettified casing
var g_niceStrings = {
	"att":"Att",
	"matt":"mAtt"
}

var g_baseAtt = {
	"att":485,
	"matt":700
}

var g_qualityStats = {
	"str":true,
	"wil":true,
	"int":true,
	"agi":true
}

var g_locations =
{
	"hat":1,
	"weapon":2,
	"offhand":3,
	"chest":4,
	"gloves":5,
	"legs":6,
	"feet":7,
	"rings":8,
	"earrings":9,
	"artifact":10,
	"brooch":11,
	"necklace":12
}

var g_scrollable = 
{
	"earrings": true,
	"hat": true,
	"wings": false,
	"weapon": true,
	"chest": true,
	"offhand": true,
	"secondary":false,
	"legs": true,
	"gloves": true,
	"belt": true,
	"feet": true,
	"brooch": true,
	"rings": true,
	"artifact": true,
	"bracelet": false,
	"necklace": true
}

var g_qualityEffects= {	
	"weapon": [
		{
			"name":'1'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 0.8,
				"Att Mod": 0.96
			}
		},
		{
			"name":'2'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.0,
				"Att Mod": 1.0
			}
		},
		{
			"name":'3'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.15,
				"Att Mod": 1.02
			}
		},
		{
			"name":'4'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.2,
				"Att Mod": 1.04
			}
		},
		{
			"name":'5'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.25,
				"Att Mod": 1.06
			}
		}
	]
}

var g_armourEnhancementEffects = [
	{
		"name" : "+0",
		"stats": {
		}
	},
	{
		"name" : "+10",
		"stats": {
			"add":130
		}
	},
	{
		"name" : "+11",
		"stats": {
			"add":200
		}
	},
	{
		"name" : "+12",
		"stats": {
			"add":300
		}
	},
	{
		"name" : "+13",
		"stats": {
			"add":400
		}
	},
	{
		"name" : "+14",
		"stats": {
			"add":500
		}
	},
	{
		"name" : "+15",
		"stats": {
			"add":600
		}
	}
]

var g_enhancementEffects = {
	"hat": g_armourEnhancementEffects,
	"chest": g_armourEnhancementEffects,
	"gloves": g_armourEnhancementEffects,
	"feet": g_armourEnhancementEffects,
	"legs": g_armourEnhancementEffects,
	"weapon":[
	{
		"name" : "+0",
		"stats": {
		}
	},
	{
		"name" : "+10",
		"stats": {
			"speed":20,
			"att":1000,
			"matt":1000,
			"add":650
		}
	},
	{
		"name" : "+11",
		"stats": {
			"speed":23,
			"att":1500,
			"matt":1500,
			"add":1000
		}
	},
	{
		"name" : "+12",
		"stats": {
			"speed":26,
			"att":2000,
			"matt":2000,
			"add":1500
		}
	},
	{
		"name" : "+13",
		"stats": {
			"speed":30,
			"att":2600,
			"matt":2600,
			"add":2000
		}
	},
	{
		"name" : "+14",
		"stats": {
			"speed":34,
			"att":3300,
			"matt":3300,
			"add":2500
		}
	},
	{
		"name" : "+15",
		"stats": {
			"speed":38,
			"att":4100,
			"matt":4100,
			"add":3000
		}
	}
	]
}


var g_major_infusions = [
	"+2 crit",
	"+1 crit",
	"+2 balance",
	"+1 balance",
	"+1 speed",
]


var g_chests = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	},
		{
		"name":"Dullahan",
		"type":"plate"
	}
]

var g_legs = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	},
		{
		"name":"Dullahan",
		"type":"plate"
	}
]

var g_feet = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	},
		{
		"name":"Dullahan",
		"type":"plate"
	}
]

var g_gloves = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	},
	{
		"name":"Dullahan",
		"type":"plate"
	}
]

var g_hats = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	},
		{
		"name":"Dullahan",
		"type":"plate"
	}
]

var g_rings = [
	{
		"name":"Thunder Ring",
		"stats":{
			"str":120,
			"agi":60,
			"wil":60,
			"int":60
		},
	},
	{
		"name":"Crescent Moon Announcement",
		"stats":{
			"str":130,
			"agi":70,
			"wil":70,
			"int":70,
			"hp":100
		},
	},
	{
		"name":"Crescent Moonlight Ring",
		"stats":{
			"str":60,
			"agi":60,
			"wil":60,
			"int":120
		},
	},
	{
		"name":"Ocean Depths Monster",
		"stats":{
			"str":70,
			"agi":70,
			"wil":70,
			"int":130,
			"hp":100
		},
	},
	{
		"name":"Frozen Thorn",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
	{
		"name":"Frozen Dagger",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
	{
		"name":"Frozen Will",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
	{
		"name":"Frozen Witch",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	}
]

var g_belts = [
	{
		"name":"Emerald Belt",
		"stats":{
			"str":95,
			"agi":80,
			"wil":80
		}
	},
	{
		"name":"Peridot Belt",
		"stats":{
			"str":120,
			"agi":90,
			"wil":90
		}
	},
	{
		"name":"Ruby Belt",
		"stats":{
			"int":95,
			"agi":80,
			"wil":80
		}
	},
	{
		"name":"Amethyst Belt",
		"stats":{
			"int":188,
			"agi":90,
			"wil":90
		}
	},
	{
		"name":"Grim Belt",
		"stats":{
			"balance":2,
			"int":140,
			"agi":90,
			"wil":100
		}
	},
	{
		"name":"Woeful Belt",
		"stats":{
			"balance":2,
			"str":140,
			"agi":90,
			"wil":100
		}
	}
]

var g_artifacts  = [
	{
		"name":"Poo statue"
	},
	{
		"name":"Greater Poo statue"
	}
]

var g_offhands = [
	{
		"name":"Shield",
		"type":"smallshield"
	},
	{
		"name":"Fomorian Book",
		"type":"fomorian",
		"stats":{
			"crit":3,
			"int":80
		}
	},
	{
		"name":"The Book of Legacy",
		"type":"book",
		"stats":{
			"crit":3,
			"def":40,
			"str":60,
			"int":80,
			"critres":1
		}
	},
	{
		"name":"Runic Focus",
		"type":"focus",
		"stats":{
			"matt":545,
			"def":700,
			"agi":51,
			"int":144,
			"wil":49,
			"critres":7
		}
	},
    {
        "name": "Altar Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 43,
            "def": 916,
            "speed": 0,
            "critres": 10,
            "wil": 30,
            "agi": 40
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Godwing Targe",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 26,
            "def": 1001,
            "speed": 0,
            "critres": 11,
            "wil": 34,
            "agi": 58
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Kraken's Small Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 32,
            "def": 1100,
            "speed": 0,
            "critres": 7,
            "wil": 30,
            "agi": 50
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Majesty Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 42,
            "def": 1243,
            "speed": 0,
            "critres": 9,
            "wil": 27,
            "agi": 30
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Nighthawk Small Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 35,
            "def": 1200,
            "speed": 0,
            "critres": 9,
            "wil": 35,
            "agi": 45
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Armageddon Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 50,
            "def": 1640,
            "speed": 0,
            "critres": 7,
            "wil": 56,
            "agi": 83
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Heremon Small Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 55,
            "def": 1600,
            "speed": 0,
            "critres": 6,
            "wil": 50,
            "agi": 60
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Noblesse Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 74,
            "def": 1414,
            "speed": 0,
            "critres": 9,
            "wil": 52,
            "agi": 105
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Pirate Small Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 49,
            "def": 1540,
            "speed": 0,
            "critres": 9,
            "wil": 63,
            "agi": 70
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Skeleton Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 64,
            "def": 1462,
            "speed": 0,
            "critres": 8,
            "wil": 82,
            "agi": 90
        },
        "level": 80,
        "type": "smallshield"
    }
]

var g_earrings = [
	{
		"name":"Earrings"
	},
	{
		"name":"Innocent Cry",
		"stats":{
			"crit":1,
			"str":120,
			"agi":45,
			"wil":53,
			"stamina":3
		}

	},
	{
		"name":"Innocent Tear",
		"stats":{
			"crit":1,
			"int":162,
			"agi":45,
			"wil":53,
			"stamina":3
		}
	}
]

var g_brooches = [
	{
		"name":"Brooch"
	},
	{
		"name":"Blue Kitty brooch",
		"stats":{
			"crit":1
		}
	},
	{
		"name":"White Kitty brooch",
		"stats":{
			"speed":2
		}
	}
]

var g_bracelets = [
	{
		"name":"Bracelet",
		"components": {
			"list":["ruby", "emerald", "sapphire", "diamond"]
		}
	},
	{
		"name":"Bracelet (combined)",
		"components": {
			"list":["combined_gem"]
		}
	}
]

var g_necklaces = [
	{
		"name":"Blue Kitty Necklace",
	},
	{
		"name":"Kitty Necklace",
	}
]


var all_armor = [
"hat", "chest", "gloves", "legs", "feet"
]

var all_acc = [ 
	"rings", "earrings", "artifact", "brooch", "necklace", "belt"
]

var armor_types = [
	"plate",
	"heavy",
	"light",
	"cloth"
]

var g_enhanceable = {
	"weapon": true,
	"smallshield": true,
	"largeshield": true,
	"gloves": true,
	"hat": true,
	"chest": true,
	"legs": true,
	"feet": true,
	"offhand": true
}

var g_quality = {
	"weapon": true,
	"offhand": true,
	"gloves": true,
	"hat": true,
	"chest": true,
	"legs": true,
	"feet": true,
	"earrings": true,
	"brooch": true,
	"necklace": true,
	"rings": true
}

var g_weaponFragments = {
	"Regina" : {
		"name" : "Regina",
		"stats": {
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	"Braha" : {
		"name" : "Braha",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	"Terminus" : { 
		"name" :"Terminus",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	"Lugh" : { 
		"name" : "Lugh",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	
	"Perfect" : {
		"name" : "Perfect",
		"stats":{
			"att": [4390, 4720]
		}
	},
	"Keen" : {
		"name" : "Keen",
		"stats":{
			"balance": [27,30],
			"crit": [28,31]
		}
	},
	"Stable" : {
		"name" :"Stable",
		"stats":{
			"balance": [41,45]
		}
	},
	"Lightweight" : {
		"name" : "Lightweight",
		"stats":{
			"crit": [19,21],
			"speed": [4,5]
		}
	},
	"Dullahan": {
		"name" : "Dullahan",
		"stats":{
			"speed": [3],
			"att": [8258,8880]
		}
	},
	"C.Perfect" : {
		"name" : "C.Perfect",
		"stats":{
			"att" : [5506,5920]
		}
	},
	"C.Keen" : {
		"name" : "C.Keen",
		"stats":{
			"balance": [24,27],
			"crit": [36,40]
		}
	},
	"C.Stable" : {
		"name" : "C.Stable",
		"stats":{
			"balance": [37,41]
		}
	},
	"C.Lightweight" : {
		"name" : "C.Lightweight",
		"stats":{
			"crit": [24,27],
			"speed": [4,5]
		}
	}
}

var g_braceGems = {
	"ruby" : {
		"name" : "Ruby",
		"stats" : {
			"att": [25,115],
			"matt": [25,115],
			"def": [25,115],
			"hp": [75,650]
		},
	},
	"emerald" : {
		"name":"Emerald",
		"stats":{
			"att": [25,115],
			"matt": [25,115],
			"def": [50,583],
			"hp": [25,115]
		}
	},
	"sapphire" : {
		"name":"Sapphire",
		"stats":{
			"att": [25,115],
			"matt": [50,505],
			"def": [25,115],
			"hp": [25,115]
		}
	},
	"diamond" : {
		"name": "Diamond",
		"stats":{
			"att": [50,503],
			"matt": [25,115],
			"def": [25,115],
			"hp": [25,115]
		}
	},
	"combined_gem": {
		"name" : "Total",
		"stats":{
			"att": [25,848],
			"matt": [25, 850],
			"def": [25, 928],
			"hp" : [25,995] 
		}
	}
}
var braceSideComment = "Up to 25 for a normal gem, 70 for a Fine, 115 for a Superior"
var g_braceGemComments = {
	"ruby" : {
		"att": braceSideComment,
		"matt": braceSideComment,
		"def": braceSideComment,
		"hp": "75-250 for a normal gem,\n 175-450 for a Fine,\n 300-650 for a Superior"
	},
	"emerald" : {
		"att": braceSideComment,
		"matt": braceSideComment,
		"def": "50-225 for a normal gem, 150-450 for a Fine, 275-583 for a Superior",
		"hp": braceSideComment,
	},
	"sapphire" : {
		"att": braceSideComment,
		"matt": "50-175 for a normal gem, 125-350 for a Fine, 250-505 for a Superior",
		"def": braceSideComment,
		"hp": braceSideComment,
	},
	"diamond" : {
		"att": "50-175 for a normal gem, 125-350 for a Fine, 250-503 for a Superior",
		"matt": braceSideComment,
		"def": braceSideComment,
		"hp": braceSideComment,
	}	
}


var g_weaponSide = {
	90 : ['Perfect', 'Keen', 'Stable', 'Lightweight'],
	95 : ['C.Perfect', 'C.Keen', 'C.Stable', 'C.Lightweight']
}

var g_setLevels = {
	"Regina": 90,
	"Lugh": 90,
	"Terminus": 90,
	"Braha": 90,
	"Dullahan": 95
}

var g_charaStats = {
	"Fiona":[
		{
			"label": "Other sources of Att",
			"stat":"att",
			"spec": {
				"tips" : [
					"Other sources of att (eg scroll bonuses that I haven't implemented)",
					"VIP gives 171 att if you are maxed level. I think?"
				],
				"defaults": [
					0,
					0
					
				],
				"labels": [
					"Other",
					"VIP etc"
				]
			}
		}
	],
	"Evie": [
		{
			"label":"Other sources of mAtt",
			"stat":"matt",
			"spec": {
				"tips" : [
					"Other sources of mAtt (eg scroll bonuses that I haven't implemented)",
					"VIP gives 171 mAtt if you are maxed level. I think?",
				],
				"defaults": [
					0,
					0,
					
				],
				"labels": [
					"Other",
					"VIP etc",
				]
			}
		}
	]
}

var g_einDetail = {
	"name": "Einrach",
	"placeholder": "tier",
	"options": [
		{
			"name" : "Bronze",
			"stats" : {
				"att": 10,
				"matt": 10
			},
		},
		{
			"name" : "Silver",
			"stats" : {
				"att": 50,
				"matt": 50,
				"balance": 1,
				"crit": 1
			}
		},
		{
			"name" : "Silver (no pots)",
			"stats" : {
				"att": 50,
				"matt": 50,
				"balance": 3,
				"crit": 1
			}
		},
		{
			"name" : "Gold",
			"stats" : {
				"att": 176,
				"matt": 176,
				"balance": 5,
				"crit": 3
			}
		}
	]
}


var g_neamDetail = {
	"name": "Neamhain",
	"placeholder":"run count",
	"options": [
		{
			"name" : "5",
			"stats" : {
				"crit": 1,
			}
		},
		{
			"name" : "25",
			"stats" : {
				"HP": 1000,
				"crit": 1
			}
		},
		{
			"name" : "50",
			"stats" : {
				"HP": 1000,
				"att": 500,
				"matt": 500,
				"crit": 2
			}
		},
		{
			"name" : "75",
			"stats" : {
				"HP": 1000,
				"att": 500,
				"matt": 500,
				"crit": 3,
				"uncap": 300
			}
		},
				{
			"name" : "100",
			"stats" : {
				"HP": 1000,
				"att": 1000,
				"matt": 1000,
				"crit": 5,
				"uncap": 300
			}
		}
	]
}

var g_statComments = {
	"str" : "1 str grants 2.7 Att [Str is not calculated from gear - enter your totals for now!]",
	"int" : "1 int grants 2.0 mAtt [Int is not calculated from gear - enter your totals for now!]",
	"wil": "133 wil grants 1 Crit (up to a max of 2000 wil for 15 crit)  [Wil is not calculated from gear - enter your totals for now!]",
	"agi": "2 agi grants 1 Def",
}

var g_achievementsSpec = {
	"title": "Achievements",
	"simple": false,
	"id":"ach",
	"specs" : [
		g_neamDetail,
		g_einDetail
	]
}

var g_p2wSpec = {
	"title": "p2w stuff",
	"simple": true,
	"id":"p2w",
	"specs" : [
		{ 
			"stat": "att", 
			"placeholder": "(m)Att", 
			"caption": "(m)Att",
			"comment":"Expensive avatar pieces give 70 (m)Att, others give 20. You also get 150 (m)Att for having any 5 avatar pieces equipped",
			"default":500
		} ,
		{ 
			"stat": "balance", 
			"placeholder": "balance", 
			"caption": "Balance",
			"comment":"Expensive avatar body and skirt give 1 Bal each",
			"default":2
		} 
	]
}

var g_skillSpecs = {
	"title": "Passive skills",
	"id":"passives",
	"simple": true,
	"specs" : [
		{ 
			"stat": "crit", 
			"placeholder": "crit", 
			"caption": "Crit Mastery",
			"comment":"Crit Mastery grants up to 28 crit",
			"default":28
		} 
	]
}

var g_charaSpecs = {
	"Evie" : [
		{ 
			"stat": "matt",
			"placeholder": "mAtt", 
			"caption": "Magic Mastery",
			"comment":"Evie gets 700 free mAtt because I hate her",
			"default":700
		} 
	]
}

var g_setStats = [
	{
		"name" : "Lv90Rings",
		"stats": [
			{
			}
			,
			{
			}
			,
			{
				"crit" : 1
			}
		]
	}
]

var g_statDisplayNames = {
	"speed": "Speed",
	"balance": "Bal",
	"crit": "Crit",
	"att": "Att",
	"matt": "mAtt",
	"add": "Additional Damage"
}

var g_displayableStatsCommon = {
	"speed" : true,
	"balance": true,
	"crit": true,
	"add": true
}
