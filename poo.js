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

var locations =
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

var armor_types = [
	"plate",
	"heavy",
	"light",
	"cloth"
]

var types =
{
	"weapon":["longsword","longhammer"],
	"offhand":["smallshield", "largeshield", "book"],
	"hat": armor_types,
	"chest" : armor_types,
	"gloves" : armor_types,
	"legs" : armor_types,
	"feet" : armor_types,
	
}

var scrolls = [
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
]

var weapons = [
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
}
]

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

function createSquare(id, loc)
{	
	var target = $("#"+id)
	var box = $("<div />")
	box.css("height", "12em")
	box.css("width", "12em")
	box.css("border-style", "solid")
	box.css("background-image", "url('resource/poo.png')")
	box.css("background-size", "cover")
	
	var prefix = createInputBox()
	var suffix = createInputBox()
	var item = createInputBox()
	var display = $("<div />")
	display.css("background-color",'white')
	
	var update = function ()
	{
		var p = box.data("prefix")
		var s = box.data("suffix")
		var w = box.data("weapon")
		
		var bal = 0
		var crit = 0
		var spd =0 
		
		$.each([p,s,w], function(k,x)
		{
			if(x && x.stats)
			{
				bal += x.stats.balance || 0
				crit += x.stats.crit || 0 
				spd += x.stats.spd|| 0
			}
		})
		
		display.html(["bal="+bal, "crit="+crit, "spd="+spd].join(","))
	}
	
	var scrollSet = function(key, thing)
	{
		return function(){
			var name = thing.val().toLowerCase()
			$.each(scrolls, function(k,v)
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
	return function(state, cb)
		{
			var term = $.ui.autocomplete.escapeRegex(state.term)
			var re = new RegExp(term, "i")
			var ret = []
			var weapon = box.data("weapon") || {"type":null}
			var type = weapon["type"]
			$.each(scrolls, function(k,v)
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
	
	prefix.autocomplete( {
		source: scrollSource(true),
		change: scrollSet("prefix", prefix),
		"close": scrollSet("prefix", prefix),
		delay: 250,
		minLength:0,
		position: {my:"left top", at :"right bottom"}
	}
	)
	prefix.on("focus", function(){	prefix.autocomplete("search", prefix.val())})
	
	suffix.autocomplete({source: scrollSource(false),
	position: {my:"left top", at :"right bottom"},
	change: scrollSet("suffix", suffix),
	"close": scrollSet("suffix", suffix),
	minLength:0,
	})
	suffix.on("focus", function(){	
		suffix.autocomplete("search", suffix.val())
		}
	)
	
	var updateWeapon = function()
	{
		var name = item.val().toLowerCase()
		$.each(weapons, function(k,v)
		{
			if (v.name.toLowerCase() == name)
			{
				box.data("weapon", v)
				return false 
			}
		})
		update()
	}
	
	item.autocomplete({source:["Poo hammer","Poo longsword"], 
	"close":updateWeapon, 
	"change":updateWeapon,
	minLength:0,
	position: {my:"left top", at :"right bottom"}
	})
	item.on("focus", function(){item.autocomplete("search", item.val())})
	
	
	box.append(prefix)
	box.append(suffix)
	box.append(item)
	box.append(display)
	
	target.append(box)
}