// This depends on data.js for all_armor identifier

var g_scrolls = [
{
	"name":"Immoral",
	"locations":["weapon"],
	"stats":{
		"speed":4,
		"crit":8,
		"att":220,
		"matt":220,
		"critres":-5
	},
	"prefix":true 
},
{
	"name":"Leopard",
	"locations":["weapon"],
	"stats":{
		"speed":8,
		"balance":2,
		"att":-240,
		"matt":-240
	},
	"prefix":true
},
{
	"name":"Righteous",
	"locations":["weapon"],
	"stats":{
		"speed":8,
		"balance":2,
		"crit":2,
		"att":430,
		"matt":430
	},
	"prefix":true
},
{
	"name":"Valor",
	"locations":["weapon"],
	"stats":{
		"balance":5,
		"speed":4,
		"att":130,
		"matt":130
	},
	"prefix":false
},
{
	"name":"Bloodlust",
	"locations":["weapon"],
	"stats":{
		"balance":3,
		"speed":5,
		"att":150,
		"matt":150
	},
	"prefix":false
},
{
	"name":"Judgment",
	"locations":["weapon"],
	"stats":{
		"balance":-1,
		"speed":3,
		"crit":4,
		"att":870,
		"matt":870
	},
	"prefix":false
},
{
	"name":"Spirited",
	"locations":["weapon"],
	"stats":{
		"crit":6,
		"att":680,
		"matt":680
	},
	"prefix":false
},
{
	"name":"Chance",
	"locations":["weapon"],
	"stats":{
		"crit":12,
		"balance":-10
	},
	"prefix":false
},
{	"name":"Well-Balanced",
	"locations":all_armor ,
	"stats":{
		"balance":1,
		"speed":2,
		"crit":1,
		"critres":-1
	},
	"prefix":true
},
{	"name":"Enthusiastic",
	"locations":all_armor ,
	"stats":{
		"balance":5,
		"speed":0,
		"crit":0,
		"att":282,
		"matt":282,
		"def":-370
	},
	"prefix":false
},
{	"name":"Temporal",
	"locations":["chest"] ,
	"stats":{
		"balance":-3,
		"crit":4,
		"stamina":5,
		"def":160,
		"critres":6
	},
	"prefix":true
},
{	"name":"Master",
	"locations":["chest"] ,
	"stats":{
		"balance":-1,
		"crit":5,
		"critres":5
	},
	"prefix":false
},
{	"name":"Stigma",
	"locations":["chest"] ,
	"stats":{
		"balance":-1,
		"crit":6,
		"critres":7,
		"def":70,
		"stamina":5
	},
	"prefix":false
},
{	"name":"Echoing",
	"locations":["gloves", "feet"] ,
	"stats":{
		"balance":4,
		"speed":1,
		"att":365,
		"matt":365,
		"def":-260,
	},
	"prefix":false
},
{	"name":"Memorable",
	"locations":["hat", "legs"] ,
	"stats":{
		"balance":1,
		"crit":2,
		"speed":2,
		"def":100,
		"att":245,
		"matt":245,
		"critres":2
	},
	"prefix":true
},
{	"name":"The Dead",
	"locations":["rings"] ,
	"stats":{
		"balance":5,
		"str":-40,
		"critres":5,
		"hp":-450
		
	},
	"prefix":true
},
{	"name":"Crescent Moonlight's",
	"locations":["rings"] ,
	"stats":{
		"balance":2,
		"att":100,
		"matt":100
	},
	"prefix":true
},
{	"name":"Sparkling",
	"locations":["rings"] ,
	"stats":{
		"balance":2,
		"hp":-280,
		"critres":3
	},
	"prefix":true
},
{	"name":"Fresh",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"speed":3,
		"att":55,
		"m.att":55
	},
	"prefix":true
},
{	"name":"Tricky",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"crit":1
	},
	"prefix":true
},
{	"name":"Diamond",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"def":0.1
	},
	"prefix":false
},
{	"name":"Sealed",
	"locations":["offhand"] ,
	"types":["book"],
	"stats":{
		"speed":1,
		"def":500
	},
	"prefix":true
},
{	"name":"Truth",
	"locations":["offhand"] ,
	"types":["book"],
	"stats":{
		"att":230,
		"matt":230,
		"critres":5
	},
	"prefix":false
},
{	"name":"Subdued",
	"locations":["belt"] ,
	"stats":{
		"speed":1,
		"crit":2,
		"stamina":5,
		"critres":-3
	},
	"prefix":true
},
{	"name":"Petite",
	"locations":["belt"] ,
	"stats":{
		"speed":1,
		"crit":1,
		"critres":-3
	},
	"prefix":true
},

{	"name":"Fast",
	"locations":all_acc,
	"stats":{
		"speed":5,
		"balance":-8
	},
	"prefix":true
},
{	"name":"Passion",
	"locations":all_acc,
	"stats":{
		"def": 200,
		"stamina":2
	},
	"prefix":false
},
{	"name":"Berserker",
	"locations":all_acc,
	"stats":{
		"att":30,
		"matt":30
	},
	"prefix":false
},
{	"name":"Significant",
	"locations":all_acc,
	"stats":{
		"speed":1,
		"att":15,
		"matt":15
	},
	"prefix":true
},
{	"name":"Reinforced",
	"locations":["gloves","feet"],
	"stats":{
		"crit":1,
		"balance":2,
		"speed":2,
		"att":145,
		"matt":145,
		"def":150,
		"critres":-1
	},
	"prefix":true
},
{	"name":"Weeping",
	"locations":["gloves","feet"],
	"stats":{
		"crit":2,
		"balance":3,
		"speed":2,
		"att":145,
		"matt":145,
		"def":300,
		"critres":-1
	},
	"prefix":true
},
{	"name":"Heartless",
	"locations":["hat","legs"] ,
	"stats":{
		"crit":2,
		"balance":2,
		"speed":2,
		"def":200,
		"att":245,
		"matt":245,
		"critres":4
	},
	"prefix":true
},
{	"name":"Chaotic",
	"locations":["weapon"],
	"stats":{
		"crit":9,
		"speed":4,
		"att":340,
		"matt":340,
		"critres":-4
	},
	"prefix":true
},
{
	"name":"Deadly",
	"locations":all_armor,
	"types":["light"],
	"stats":{
		"crit":3,
		"balance":-1
	},
	"prefix":false
},
{
	"name":"Divine Punishment",
	"locations":["weapon"],
	"stats":{
		"crit":2,
		"speed":1,
		"matt":677,
		"att":677
	},
	"prefix":false
},
{
	"name":"Maelstrom",
	"locations":["weapon"],
	"stats":{
		"crit":2,
		"speed":1,
		"balance":-2,
		"att":752,
		"matt":752
	},
	"prefix":false
},
{
	"name":"Enhanced",
	"locations":["weapon"],
	"stats":{
		"crit":1,
		"speed":5,
		"balance":1,
		"att":120,
		"matt":120
	},
	"prefix":true
}
]
