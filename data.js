var g_characters = [
	"Fiona",
	"Ebie"
]

var g_attackStats = {
	"Fiona" : "att",
	"Ebie" : "matt",
	"Delia": "att",
	"Arisha": "matt"
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

var g_enhancementEffects = {
	"weapon":[
	{
		"name" : "+0",
		"stats": {
		}
	},
	{
		"name" : "+10",
		"stats": {
			"speed":15,
			"att":1000,
			"matt":1000
		}
	},
	{
		"name" : "+11",
		"stats": {
			"speed":19,
			"att":1500,
			"matt":1500
		}
	},
	{
		"name" : "+12",
		"stats": {
			"speed":23,
			"att":2000,
			"matt":2000
		}
	},
	{
		"name" : "+13",
		"stats": {
			"speed":28,
			"att":2600,
			"matt":2600
		}
	},
	{
		"name" : "+14",
		"stats": {
			"speed":33,
			"att":3300,
			"matt":3300
		}
	},
	{
		"name" : "+15",
		"stats": {
			"speed":38,
			"att":4100,
			"matt":4100
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
	}
]

var g_rings = [
	{
		"name":"Thunder Ring"
	},
	{
		"name":"Crescent Moon Announcement"
	},
	{
		"name":"Crescent Moonlight Ring"
	},
	{
		"name":"Ocean Depths Monster"
	},
	{
		"name":"Cold Thorn",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	},
	{
		"name":"Cold Dagger",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	},
	{
		"name":"Cold Desire",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	},
	{
		"name":"Cold Witch",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	}
]

var g_belts = [
	{
		"name":"Belt of Poo"
	},
	{
		"name":"Belt of new Poo",
		"stats":{
			"balance":2
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
		"type":"book",
		"stats":{
			"crit":3
		}
	}
]

var g_earrings = [
	{
		"name":"Earrings"
	},
	{
		"name":"Innocent Cry",
		"stats":{
			"crit":1
		}

	},
	{
		"name":"Innocent Tear",
		"stats":{
			"crit":1
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
		"name":"10k"
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
	"weapon": true
}

var g_quality = {
	"weapon": true
}

var g_weaponFragments = {
	"Regina" : { 
		"speed" : [3,4],
		"att": [6584, 7080]
	},
	"Braha" : { 
		"speed" : [3,4],
		"att": [6584, 7080]
	},
	"Terminus" : { 
		"speed" : [3,4],
		"att": [6584, 7080]
	},
	"Lugh" : { 
		"speed" : [3,4],
		"att": [6584, 7080]
	},
	
	"Perfect" : {
		"att": [4390, 4720]
	},
	"Keen" : {
		"balance": [27,30],
		"crit": [28,31]
	},
	"Stable" : {
		"balance": [41,45]
	},
	"Lightweight" : {
		"crit": [19,21],
		"speed": [4,5]
	},
	
	"Dullahan": {
		"speed": [3],
		"att": [8258,8880]
	},
	"C.Perfect" : {
		"att" : [5506,5920]
	},
	"C.Keen" : {
		"balance": [24,27],
		"crit": [36,40]
	},
	"C.Stable" : {
		"balance": [37,41]
	},
	"C.Lightweight" : {
		"crit": [24,27],
		"speed": [4,5]
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

var g_genericStats = [
	{
		"label":"Crit from...",
		"stat":"crit",
		"spec":{
			"tips" : [
				"Crit Mastery adds up to 28 crit",
				"Each 133.3 Wil gives 1 crit, up to a max of 15 crit  at 2,000 Wil",
				"Full gold Einrach gives 3 crit, full silver gives 1 crit",
			"Clearing Neamhain gives up to 5 crit (+1 for 5, +2 for 50, +3 for 75, and +5 for 100 clears)"
			],
			"defaults": [
				28,
				15,
				3,
				5
			],
			"labels": [
				"Mastery",
				"Wil",
				"Ein",
				"Neam"
			]
		}
	},
	{
		"label":"Balance from...",
		"stat":"bal",
		"spec":{
			"tips" : [
				"Full gold at Einrach gives 5 balance; silver gives 3",
				"You can get 2 bal from Outfit/Avatar if you want to fund Nexon's evil empire"
			],
			"defaults": [
				5,
				0
			],
			"labels": [
				"Ein",
				"P2W"
			]
		}
	}
]

var g_charaStats = {
	"Fiona":[
		{
			"label":"Str in stats page",
			"stat": "str",
			"spec": {
				"tips" : [
					"Total str from all equipment (stay tuned for updates that help you calculate this!)"
				],
				"defaults": [
					2500
				],
				"labels": [
					"Total Str",
				]
			}
		},
		{
			"label": "Other sources of Att",
			"stat":"att",
			"spec": {
				"tips" : [
					"Outfitter gives some Att (20 for cheap, 70 for premium pieces, and 150 for having 5 parts equipped)",
					"Einrach titles give some Att (silver: +84, gold:176)",
					"Other sources of att (eg Bracelets that I haven't implemented)",
					"VIP gives 171 att if you are maxed level. I think?"
				],
				"defaults": [
					500,
					176,
					0,
					0
					
				],
				"labels": [
					"Outfitter",
					"Ein",
					"Other",
					"VIP etc"
				]
			}
		}
	],
	"Ebie": [
		{
			"label":"Int in stats page",
			"stat":"int",
			"spec": {
				"tips" : [
					"Total int from all equipment (stay tuned for updates that help you calculate this!)"
				],
				"defaults": [
					3000
				],
				"labels": [
					"Total Int",
				]
			}
		},
		{
			"label":"Other sources of mAtt",
			"stat":"matt",
			"spec": {
				"tips" : [
					"Outfitter gives some mAtt (20 for cheap, 70 for premium pieces, and 150 for having 5 parts equipped)",
					"Einrach titles give some mAtt (silver: +84, gold:176)",
					"Other sources of mAtt (eg Bracelets that I haven't implemented)",
					"VIP gives 171 mAtt if you are maxed level. I think?",
					"Evie gets 700 free mAtt because I hate her"
				],
				"defaults": [
					500,
					176,
					0,
					0,
					700
					
				],
				"labels": [
					"Outfitter",
					"Ein",
					"Other",
					"VIP etc",
					"Magic mastery"
				]
			}
		}
	]
}