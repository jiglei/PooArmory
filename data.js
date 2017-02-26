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
			"att":1000
		}
	},
	{
		"name" : "+11",
		"stats": {
			"speed":19,
			"att":1500
		}
	},
	{
		"name" : "+12",
		"stats": {
			"speed":23,
			"att":2000
		}
	},
	{
		"name" : "+13",
		"stats": {
			"speed":28,
			"att":2600
		}
	},
	{
		"name" : "+14",
		"stats": {
			"speed":33,
			"att":3300
		}
	},
	{
		"name" : "+15",
		"stats": {
			"speed":38,
			"att":4100
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
		"name":"Silky poo",
		"type":"cloth"
	},
	{
		"name":"Light poo",
		"type":"light"
	},
	{
		"name":"Heavy poo",
		"type":"heavy"
	},
	{
		"name":"Stone poo",
		"type":"plate"
	}
]

var g_legs = [
	{
		"name":"Silky poo skirt",
		"type":"cloth"
	},
	{
		"name":"Light poo skirt",
		"type":"light"
	},
	{
		"name":"Heavy poo pants",
		"type":"heavy"
	},
	{
		"name":"Stone poo leg armor",
		"type":"plate"
	}
]

var g_feet = [
	{
		"name":"Silky poo heels",
		"type":"cloth"
	},
	{
		"name":"Light poo shoes",
		"type":"light"
	},
	{
		"name":"Heavy poo boots",
		"type":"heavy"
	},
	{
		"name":"Stone poo greaves",
		"type":"plate"
	}
]

var g_gloves = [
	{
		"name":"Silky poo gloves",
		"type":"cloth"
	},
	{
		"name":"Light poo gloves",
		"type":"light"
	},
	{
		"name":"Heavy poo gauntlets",
		"type":"heavy"
	},
	{
		"name":"Stone poo gauntlets",
		"type":"plate"
	}
]

var g_hats = [
	{
		"name":"Silky poo hat",
		"type":"cloth"
	},
	{
		"name":"Light poo hat",
		"type":"light"
	},
	{
		"name":"Heavy poo hat",
		"type":"heavy"
	},
	{
		"name":"Stone poo hat",
		"type":"plate"
	}
]

var g_rings = [
	{
		"name":"Ring of Poo"
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
		"name":"Shield of Poo",
		"type":"smallshield"
	},
	{
		"name":"Dictionary of Poos",
		"type":"book",
		"stats":{
			"crit":3
		}
	}
]

var g_earrings = [
	{
		"name":"Poo earring"
	},
	{
		"name":"Tears of poo",
		"stats":{
			"crit":1
		}
	}
]

var g_brooches = [
	{
		"name":"Shit Poo"
	},
	{
		"name":"Blue Poo brooch",
		"stats":{
			"crit":1
		}
	},
	{
		"name":"White Poo brooch",
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
		"name":"Blue poo necklace",
	},
	{
		"name":"Poo necklace",
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