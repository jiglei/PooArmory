// Define a class like this
function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

// Add methods like this.  All Person objects will be able to invoke this
Person.prototype.speak = function(){
    alert("Howdy, my name is" + this.name);
};

// Instantiate new objects with 'new'
//var person = new Person("Bob", "M");

// Invoke methods like this
//person.speak(); // alerts "Howdy, my name is Bob"

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

var all_armor = [
"hat", "chest", "gloves", "legs", "feet"
]

var armor_types = [
	"plate",
	"heavy",
	"light",
	"cloth"
]

var g_types =
{
	"weapon":["longsword","longhammer"],
	"offhand":["smallshield", "largeshield", "book"],
	"hat": armor_types,
	"chest" : armor_types,
	"gloves" : armor_types,
	"legs" : armor_types,
	"feet" : armor_types,
	
}

var g_scrolls = [
{
	"name":"Immoral",
	"locations":["weapon"],
	"stats":{
		"speed":4,
		"crit":8
	},
	"prefix":true 
},
{
	"name":"Leopard",
	"locations":["weapon"],
	"stats":{
		"speed":8,
		"balance":2
	},
	"prefix":true
},
{
	"name":"Valor",
	"locations":["weapon"],
	"stats":{
		"balance":5,
		"speed":4
	},
	"prefix":false
},
{
	"name":"Judgment",
	"locations":["weapon"],
	"stats":{
		"balance":-1,
		"speed":3,
		"crit":4
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
	"name":"Enlightenment",
	"locations":["hat", "legs"],
	"types":["light", "cloth"],
	"stats":{
		"balance":2,
		"speed":2,
		"crit":1
	},
	"prefix":true
},
{	"name":"Well-Balanced",
	"locations":all_armor ,
	"types":["light", "cloth"],
	"stats":{
		"balance":1,
		"speed":2,
		"crit":1
	},
	"prefix":true
},
{	"name":"Enthusiastic",
	"locations":all_armor ,
	"types":["light", "cloth"],
	"stats":{
		"balance":5,
		"speed":0,
		"crit":0
	},
	"prefix":false
},
{	"name":"Time's",
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
		"crit":5
	},
	"prefix":false
},
{	"name":"Declaration",
	"locations":["glove", "feet"] ,
	"types":["light","cloth"],
	"stats":{
		"balance":4,
		"speed":1
	},
	"prefix":false
},
{	"name":"Silent",
	"locations":["gloves", "feet"] ,
	"stats":{
		"balance":2,
		"speed":2,
		"crit":1
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
{	"name":"Fresh",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"speed":3
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
]

var g_scrollLookup = {}

$.each(g_scrolls, function(k,v){
	g_scrollLookup[v.name] = v
})

var g_weapons = [
{
	"name":"Poo Longsword",
		"type":"longsword",
	"stats":{
		"speed":9,
		"crit":39,
		"balance":78
	}
},
{
	"name":"Poo Hammer",
	"type":"longhammer",
	"stats":{
		"speed":9,
		"crit":42,
		"balance":69
	}
},
{
	"name":"Poo Staff or some shit",
	"type":"staff",
	"stats":{
		"speed":4,
		"crit":500,
		"balance":69
	}
}
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

var g_offhands = [
	{
		"name":"Shield of Poo",
		"type":"smallshield"
	},
	{
		"name":"Dictionary of Poos",
		"type":"book"
	}
]

var g_items = {
	"weapon" : g_weapons,
	"chest": g_chests,
	"gloves": g_gloves,
	"rings": g_rings,
	"offhand": g_offhands,
	"hat":g_hats
}

function createInputBox()
{
	var ret= $("<input type='text' />")
	ret.css("width", "100%")
	ret.css("background", "rgba(255,255,255,0.5)")
	return ret
}

function passFilter(loc, type, scr, prefix)
{
	// loc not in scroll locs
	if(-1 == $.inArray(loc,scr["locations"]))
	{
		return false;
	}
	
	// scroll has a types filter and item fails it
	if (type && "types" in scr && $.inArray(type, scr["types"]) == -1)
	{
		return false
	}
	
	if (scr["prefix"] != prefix)
	{
		return false
	}
	
	return true;
}

function formatStats(stats)
{
	return txt = $.map(stats, function(k,v) { 
			return v + "=" + k
		}).join(", ")
}

function createSquare(id, loc, cb)
{	
	var target = $("#"+id)
	var box = $("<div />")
	box.css("height", "8em")
	box.css("width", "8em")
	box.css("border-style", "solid")
	box.css("background-image", "url('resource/poo.png')")
	box.css("background-size", "cover")
	target.append(box)
	
	if (!loc || !(loc in g_items))
	{
		return box
	}
	
	var prefix = createInputBox()
	var suffix = createInputBox()
	var item = createInputBox()
	
	var display = $("<div />")
	display.css("background-color",'white')
	
	var update = function ()
	{
		var p = box.data("prefix")
		var s = box.data("suffix")
		var w = box.data("item")

		var stats = {"bal":0, "crit":0, "speed": 0}
		
		$.each([p,s,w], function(k,x)
		{
			if(x && x.stats)
			{
				stats.bal += x.stats.balance || 0
				stats.crit += x.stats.crit || 0 
				stats.speed += x.stats.speed|| 0
			}
		})
		box.data("stats", stats)
		var txt = formatStats(stat)
		$("#console").html(txt)
		
		cb(box)
		return true
	}
	
	var scrollSet = function(key, thing)
	{
		return function(){
			var name = thing.val().toLowerCase()
			$.each(g_scrolls, function(k,v)
			{
				if (v.name.toLowerCase() == name)
				{
					box.data(key, v)
					return false 
				}
			})
			update()
		}
	}
	
	var scrollSource = function (prefix){
	return function(state, cb){
			var term = $.ui.autocomplete.escapeRegex(state.term)
			var re = new RegExp(term, "i")
			var ret = []
			var item = box.data("item") || {"type":null}
			var type = item["type"]
			$.each(g_scrolls, function(k,v)
			{
				if ( passFilter(loc, type, v, prefix) )
				{
					if (-1 != v["name"].search(re))
					{
						ret.push(v["name"])
					}
				}
			})
			cb(ret)
		}
	}
	
	var openCb = function(e,ui) {			
			var x = $(".ui-menu-item-wrapper")
			$.each(x, function(k,v){
				var data = g_scrollLookup[v.innerHTML]
				if(data)
				{
					$(v).attr("title", formatStats(data.stats))
					$(v).tooltip()
				}
			})
			
            //$("input").val();
            //q = $("#ui-active-menuitem").html();
            //$("#ui-active-menuitem").html("<b>"+q+"</b>");
        }
	
	prefix.autocomplete({
		source: scrollSource(true),
		change: scrollSet("prefix", prefix),
		"close": scrollSet("prefix", prefix),
		"open": openCb,
		delay: 250,
		minLength:0,
		position: {my:"left top", at :"right bottom"},
		messages: {
			noResults: '',
			results: function() {}
		}
	}
	)
	prefix.on("focus", function(){	prefix.autocomplete("search", prefix.val())})
	
	suffix.autocomplete({
		source: scrollSource(false),
		position: {my:"left top", at :"right bottom"},
		change: scrollSet("suffix", suffix),
		"close": scrollSet("suffix", suffix),
		"open": openCb,
		minLength:0,
		messages: {
			noResults: '',
			results: function() {}
		}
	})
	suffix.on("focus", function(){	
		suffix.autocomplete("search", suffix.val())
		}
	)
	
	var updateItem = function()
	{
		var name = item.val().toLowerCase()
		$.each(g_items[loc], function(k,v)
		{
			if (v.name.toLowerCase() == name)
			{
				box.data("item", v)
				return false 
			}
		})
		return update()
	}	
	
	var src = $.map(g_items[loc], function(k,v) {
		return k.name
	})

	item.autocomplete({
		source:src, 
		"close":updateItem, 
		"change":updateItem,
		"open": openCb,
		minLength:0,
		position: {my:"left top", at :"right bottom"},
		messages: {
			noResults: '',
			results: function() {	
			}
		}
	})
	item.on("focus", function(){item.autocomplete("search", item.val())})
	
	
	box.append(prefix)
	box.append(suffix)
	box.append(item)
	box.append(display)
	
	
	return box
}

function accumulateBoxes(boxes)
{
	var stats = {"bal":0, "crit":0, "speed":0}
	$.each(boxes, function(k,v){
		var boxStats = v.data("stats")
		if(boxStats)
		{
			stats.bal += boxStats.bal||0
			stats.crit += boxStats.crit||0
			stats.speed += boxStats.speed||0
		}
	})
	return stats
}

// id is a col
function createStatsSheet(id, stats)
{
	var statRowString = "<div class='row m-top-bot' />"
	var target = $("#"+id)
	target.html("")
	
	target.css("height", "30em")
	//sheet.css("width", "100%")
	target.css("border-style", "solid")
	var nameRow = $("<div class='row' />")
	nameRow.html("A poo")
	nameRow.css("text-align", "center")
	nameRow.css("font-size", "2em")
	target.append(nameRow)
	
	// row for picture and title?
	var row = $(statRowString)
	var picdiv = $("<div class='col-xs-6'/>")
	var pic = $("<div />")
	pic.css("background-image", "url('resource/a_cute_poo.png')")
	pic.css("background-size", "cover")
	pic.css("background-position", "10%")
	pic.css("background-color", "pink")

	pic.css("width", "100%")
	pic.css("display", "block")
	pic.css("padding-top", "100%")
	
	pic.css("border-style", "solid")
	
	
	picdiv.append(pic)
	row.append(picdiv)
	target.append(row)
	
	row = $(statRowString)
	var statCol = $("<div class='col-xs-6'/>")
	statCol.html("Bal: " + stats.bal)
	row.append(statCol)
	target.append(row)
	
	row = $(statRowString)
	statCol = $("<div class='col-xs-6'/>")
	statCol.html("Crit: " + stats.crit)
	row.append(statCol)
	target.append(row)
	
	row = $(statRowString)
	statCol = $("<div class='col-xs-6'/>")
	statCol.html("Speed: " + stats.speed)
	row.append(statCol)
	target.append(row)
	
	
}
