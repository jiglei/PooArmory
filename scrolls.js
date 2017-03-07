// This depends on data.js for all_armor identifier

var g_scrolls = [
{
	"name":"Immoral",
	"locations":["weapon"],
	"stats":{
		"speed":4,
		"crit":8,
		"att":220
	},
	"prefix":true 
},
{
	"name":"Leopard",
	"locations":["weapon"],
	"stats":{
		"speed":8,
		"balance":2,
		"att":-240
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
		"att":430
	},
	"prefix":true
},
{
	"name":"Valor",
	"locations":["weapon"],
	"stats":{
		"balance":5,
		"speed":4,
		"att": 130,
		"matt": 119
	},
	"prefix":false
},
{
	"name":"Bloodlust",
	"locations":["weapon"],
	"stats":{
		"balance":3,
		"speed":5,
		"att": 150
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
		"att":870
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
{
	"name":"Ornate",
	"locations":["weapon"],
	"types":["longhammer"],
	"stats":{
		"balance":7,
		"speed":5,
		"crit":3
	},
	"prefix":true
},
{
	"name":"Enlightened",
	"locations":["hat", "legs"],
	"types":["light", "cloth"],
	"stats":{
		"balance":1,
		"speed":2,
		"crit":2,
		"att": 210,
		"matt": 210
	},
	"bonuses":[
		{
			"condition": {
				"target":"item",
				"prop":"type",
				"values":["cloth"]
			},
			"stats":{
				"att":35,
				"matt":35
			}
		}
	],
	"prefix":true
},
{	"name":"Well-Balanced",
	"locations":all_armor ,
	"types":["light", "cloth"],
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
	"types":["light", "cloth"],
	"stats":{
		"balance":5,
		"speed":0,
		"crit":0,
		"att":270,
		"matt":282,
		"def":-370
	},
	"prefix":false
},
{	"name":"Temporal",
	"locations":["chest"] ,
	"stats":{
		"balance":-3,
		"crit":4
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
{	"name":"Declaration",
	"locations":["gloves", "feet"] ,
	"types":["light","cloth"],
	"stats":{
		"balance":4,
		"speed":1,
		"att":330,
		"matt":330
	},
	"prefix":false
},
{	"name":"Echo",
	"locations":["gloves", "feet"] ,
	"types":["heavy","plate"],
	"stats":{
		"balance":4,
		"speed":1,
		"att":190,
		"matt":190
	},
	"prefix":false
},
{	"name":"Memorable",
	"locations":["hat", "legs"] ,
	"types":["heavy","plate"],
	"stats":{
		"balance":1,
		"crit":2,
		"speed":2,
		"def":100
	},
	"prefix":true
},
{	"name":"Silent",
	"locations":["gloves", "feet"] ,
	"stats":{
		"balance":2,
		"speed":2,
		"crit":1,
		"att":110,
		"matt":110
	},
	"prefix":true
},
{	"name":"The Dead",
	"locations":["rings"] ,
	"stats":{
		"balance":5
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
{	"name":"Subdued",
	"locations":["belt"] ,
	"stats":{
		"speed":1,
		"crit":2
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
	"locations":all_acc ,
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
	"locations":["gloves","feet"] ,
	"types":["heavy","plate"],
	"stats":{
		"crit":1,
		"balance":2,
		"speed":2
	},
	"prefix":true
},
{	"name":"Sobbing",
	"locations":["gloves","feet"] ,
	"types":["heavy","plate"],
	"stats":{
		"crit":2,
		"balance":3,
		"speed":2
	},
	"prefix":true
},
{	"name":"Chilly",
	"locations":["hat","legs"] ,
	"types":["heavy","plate"],
	"stats":{
		"crit":2,
		"balance":2,
		"speed":2
	},
	"prefix":true
},
{	"name":"Chaotic",
	"locations":["weapon"],
	"stats":{
		"crit":9,
		"speed":4
	},
	"prefix":true
},
{
	"name":"Deadly",
	"locations":all_armor,
	"types":["light"],
	"stats":{
		"crit":3,
		"att":-250,
		"matt":-250
	},
	"prefix":false
},
{
	"name":"Hateful",
	"locations":["weapon"],
	"stats":{
		"crit":4,
		"speed":5
	},
	"prefix":true
},
{
	"name":"Divine Punishment",
	"locations":["weapon"],
	"stats":{
		"crit":2,
		"speed":1,
		"balance":-2,
		"matt":677
	},
	"prefix":false
}
]