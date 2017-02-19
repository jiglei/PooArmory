

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

var all_acc = [ 
	"rings", "earrings", "artifact", "brooch", "necklace", "belt"
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
	"name":"Righteous",
	"locations":["weapon"],
	"stats":{
		"speed":8,
		"balance":2,
		"crit":2
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
		"balance":1,
		"speed":2,
		"crit":2
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
	"locations":["gloves", "feet"] ,
	"types":["light","cloth"],
	"stats":{
		"balance":4,
		"speed":1
	},
	"prefix":false
},
{	"name":"Echo",
	"locations":["hands", "feet"] ,
	"types":["heavy","plate"],
	"stats":{
		"balance":4,
		"speed":1
	},
	"prefix":false
},
{	"name":"Remembering",
	"locations":["hat", "legs"] ,
	"types":["heavy","plate"],
	"stats":{
		"balance":1,
		"crit":2,
		"speed":2
	},
	"prefix":true
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
{	"name":"Diamond",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"Def":0.1
	},
	"prefix":false
},
{	"name":"Fast",
	"locations":all_acc,
	"stats":{
		"speed":5,
		"balance":-8
	},
	"prefix":true
},
{	"name":"Significant",
	"locations":all_acc,
	"stats":{
		"speed":1
	},
	"prefix":true
},
{	"name":"Subdued",
	"locations":["belt"] ,
	"stats":{
		"speed":1,
		"crit":2
	},
	"prefix":true
},
{	"name":"Passion",
	"locations":all_acc ,
	"stats":{
		"Def": 200
	},
	"prefix":false
},
{	"name":"Reinforced",
	"locations":["gloves","feet"] ,
	"types":["plate", "heavy"],
	"stats":{
		"crit":1,
		"balance":2,
		"speed":2
	},
	"prefix":true
},
{	"name":"Echoing",
	"locations":["gloves","feet"] ,
	"types":["heavy","plate"],
	"stats":{
		"crit":1,
		"balance":2,
		"speed":2
	},
	"prefix":false
},
{	"name":"Sobbing/Crying",
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
}
]

function createLookup(arr)
{
	ret = {}
	$.each(arr, function(k,v){
		ret[v.name] = v
	})
	return ret
}

var g_scrollLookup = createLookup(g_scrolls)

var g_weapons_old = [
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

var g_weaponLookup = createLookup(g_weapons)

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

var g_items = {
	"weapon" : g_weapons,
	"chest": g_chests,
	"gloves": g_gloves,
	"feet": g_feet,
	"rings": g_rings,
	"offhand": g_offhands,
	"hat":g_hats,
	"legs": g_legs,
	"belt": g_belts,
	"artifact": g_artifacts,
	"brooch": g_brooches,
	"earrings": g_earrings,
	"bracelet": g_bracelets
}

var g_minor_infusions = [
	
]

var g_armour_infusions = g_minor_infusions.concat([
	"+100 Def"
])

var g_major_infusions = [
	"+2 crit",
	"+1 crit",
	"+2 balance",
	"+1 balance",
	"+1 speed",
]

var g_infusions = {
	"weapon" : g_major_infusions.concat(['att']),
	"chest": g_armour_infusions,
	"gloves": g_armour_infusions,
	"feet": g_armour_infusions,
	"rings": g_major_infusions,
	"offhand": g_major_infusions,
	"hat":g_armour_infusions,
	"legs": g_armour_infusions,
	"belt": g_major_infusions,
	"brooch": g_major_infusions,
	"earrings": g_major_infusions,
}

var g_lookups = {};
$.each(g_items, function(k,v){
	g_lookups[k] = createLookup(v)
})

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
			"speed":15
		}
	},
	{
		"name" : "+11",
		"stats": {
			"speed":19
		}
	},
	{
		"name" : "+12",
		"stats": {
			"speed":23
		}
	},
	{
		"name" : "+13",
		"stats": {
			"speed":28
		}
	},
	{
		"name" : "+14",
		"stats": {
			"speed":33
		}
	},
	{
		"name" : "+15",
		"stats": {
			"speed":38
		}
	}
	]
}

var g_enhanceLookups = {};
$.each(g_enhancementEffects, function(k,v){
	g_enhanceLookups[k] = createLookup(v)
})


function createInputBox(placeholder, width="100%", id=null, height="25%")
{
	var ret= $("<input type='text' />")
	ret.css("width", width)
	if(height)
	{
		ret.css("height", height)
	}
	ret.css("background", "rgba(255,255,255,0.5)")
	
	if(placeholder)
	{
		ret.attr("placeholder", placeholder)
	}
	
	if(id)
	{
		ret.attr("id", id)
	}
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
	if (!stats)
	{
		return ""
	}
	return txt = $.map(stats, function(k,v) { 
			if (k == 0)
			{
				return null
			}
			if (k < 0)
			{
				return v + k
			}
			return v + "+" + k
		}).join(", ")
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

var g_enhanceable = {
	"weapon": true
}

var g_weaponFragments = {
	"Regina" : { 
		"speed" : [3,4]
	},
	"Braha" : { 
		"speed" : [3,4]
	},
	"Terminus" : { 
		"speed" : [3,4]
	},
	"Lugh" : { 
		"speed" : [3,4]
	},
	
	"Perfect" : {
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
		"speed": [3]
	},
	"C.Perfect" : {
		
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

var getWeaponFragments = function (name)
{
	var	ret = []
	var level = g_setLevels[name]
	ret.push({'name': name, 'stats':g_weaponFragments[name]})
	$.each(g_weaponSide[level], function(k,v){
		ret.push({'name':v, 'stats':g_weaponFragments[v]})
	})
	return ret
}

var makeColWithWidth = function(wid)
{
	var ret = $("<div />")
	ret.attr('class','col-xs-'+wid)
	return ret
}

var makeDialog = function(name)
{
	var ret = $( "<div class='MyDialog' title='Choose your weapon properties'></div>" )
	var container = $("<div class='container' />")
	container.css("width", "100%")
	ret.append(container)
	
	var frags = getWeaponFragments(name.split(" ")[0]) // ugh
	var headings = $("<div class = 'row' />")
	container.append(headings)
	
	var stats = {}
	$.each(frags, function(i,frag){
		$.each(frag.stats, function(stat, range){
			stats[stat] = true
		})
	})
	
	var numCols = Object.keys(stats).length + 1
	var width = Math.floor(12/numCols);
	
	// piece 
	var	pieceHead = makeColWithWidth(width)
	pieceHead.html("Part")
	pieceHead.css("font-weight", 'bold')
	headings.append(pieceHead)
	// headings for each stat
	var inputs = {}
	$.each(stats, function(name, v){
		var statHead = makeColWithWidth(width)
		statHead.html(toTitleCase(name))
		statHead.css("font-weight", 'bold')
		headings.append(statHead)
		inputs[name] = []
	})
	
	
	$.each(frags, function(k,frag){
		var row = $("<div class = 'row' />")
		var piece = makeColWithWidth(width)
		piece.css("margin-left", 0)
		piece.css("padding-left", 0)
		piece.html(frag.name)
		row.append(piece)
		$.each(stats, function(stat){
			var inputCol = makeColWithWidth(width)
			var input = $("<input type='text' />")
			input.css('maxwidth', "100%")
			input.css('width', "100%")
			if ('stats' in frag && stat in frag.stats){
				var statRange = frag.stats[stat]
				input.val(Math.floor((statRange[0]+statRange[statRange.length-1])/2))
				input.data('range', statRange)
				input.attr("title", statRange.join(" to "))
				// Why doesn't this work?
				input.tooltip({'position': {
									my: "left center", 
									at: "right center"
								}})
				input.css('text-align','center')
				inputs[stat].push(input)
			}
			else{
				input.attr('disabled', 'disabled')
			}
			inputCol.append(input)
			row.append(inputCol)
			
		})
		container.append(row)
	})
	var btn = $("<Button >Ok</button>")
	btn.click(function (k,v) {
		$(ret).dialog("close")
	})
	
	ret.data('getStats', function(){
		var ret = {}
		$.each(inputs, function(name, inputBoxes){
			ret[name] = 0
			$.each(inputBoxes, function(k,v){
				ret[name] += parseInt(v.val())
			})
		})
		return ret
	})
	
	ret.append(btn)
	
	var max = $("<Button>Max</button>")
	max.click(function(){
		$.each(inputs, function(name, inputBoxes){
			$.each(inputBoxes, function(k,v){
					if(!v.prop('disabled'))
					{
						var range = v.data('range')
						if(range)
						{
							v.val(range[range.length-1])
						}
					}
				})
		})
	})
	ret.append(max)
	return ret
}

function createSquare(id, loc, cb, scrolls=true)
{	
	var target = $("#"+id)
	
	var box = $("<div class='row' />")
	//box.css("margin-left","3em")
	
	var leftBox = $("<div class='col-xs-3'/>")
	leftBox.css("padding",0)
	leftBox.css("margin",0)
	leftBox.css("z-index",100)
	leftBox.css("overflow","visible")
	var innerBox = $("<div class='col-xs-9'/>")
	innerBox.css("border-style",'solid')
	innerBox.css("border-color", "black")
	innerBox.css("padding",0)
	innerBox.css("margin",0)
	
	//target.append(padding)
	box.append(leftBox)
	box.append(innerBox)
	leftBox.css("width", "2em")
	leftBox.css("height", "8em")
	//leftBox.css("float", "left")
	var enh = createInputBox('+')
	enh.css("overflow","visible")
	enh.css("text-align", "center")
	if( loc in g_enhanceable )
	{
		leftBox.append(enh)
	}
	
	//innerBox.css("float", "left")
	innerBox.css("height", "8em")
	innerBox.css("width", "8em")
	innerBox.css("border-style", "solid")
	innerBox.css("background-image", "url('resource/poo.png')")
	innerBox.css("background-size", "cover")
	target.append(box)
	   
	if (!loc || !(loc in g_items))
	{
		var overlay = $("<div />")
		overlay.css("background-color", "rgba(0,0,0,0.5)")
		overlay.css("height", "100%")
		overlay.css("weight", "100%")
		innerBox.append(overlay)
		return box
	}
	
	var prefix = createInputBox('Prefix')
	var suffix = createInputBox('Suffix')
	var item = createInputBox(toTitleCase(loc))
	item.css("text-overflow","ellipsis")
	var inf = createInputBox('Infusion')
	
	var display = $("<div />")
	display.css("background-color",'white')
	
	var update = function ()
	{
		var p = box.data("prefix")
		var s = box.data("suffix")
		var w = box.data("item")
		var i = box.data("inf")
		
		var contributions = ['prefix', 'suffix', 'item', 'inf', 'enh']
		
		var stats = {"bal":0, "crit":0, "speed": 0}
		$.each( box.data(), function(k,v){
			if(-1 != $.inArray(k,contributions))
			{
				if ("stats" in v)
				{
					stats.bal += v.stats.balance || 0
					stats.crit += v.stats.crit || 0 
					stats.speed += v.stats.speed|| 0
				}
			}
		})

		box.data("stats", stats)
		var txt = formatStats(stats)
		$("#console").html(txt)
		
		cb(box)
		return true
	}
	
	// arrayOfItems should be g_scrolls or g_items[loc]
	var propSet = function(key, arrayOfItems)
	{
		return function(){
			var name = $(this).val().toLowerCase()
			var entry = null
			$.each(arrayOfItems, function(k,v)
			{
				if (v.name.toLowerCase() == name)
				{
					entry = v
					return false 
				}
			})
			if(!entry)
			{
				box.removeData(key)
			}
			else if ('level' in entry && entry['level'] >= 90)
			{
				var x = $(this)
				var existing = box.data(key)
				box.data(key, {})
				x.blur()
				var existingLevel = 0
				if (existing)
				{
					existingLevel = existing.level||0
				}
				
				if (entry['level'] != existingLevel)
				{
					$('.MyDialog').remove()
				}
				
				if(!$('.MyDialog').length)
				{
					var dialog = makeDialog(entry.name)	
					dialog.dialog( {
						"dialogClass" : "no-close",
						"close": function(){
									var userEntry = JSON.parse(JSON.stringify(entry))
									userEntry["stats"] = dialog.data("getStats")()
									box.data(key, userEntry)
									update()
									x.next().focus()			
								} , 
						"modal":true})
				}
				if( !$('.MyDialog').dialog("isOpen") )
				{
					$('.MyDialog').dialog("open")
					return
				}
			}
			else
			{
				box.data(key, entry)
			}
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
	
	var openCb = function(lookupMap){
		return function(e,ui) {			
			var x = $(".ui-menu-item-wrapper")
			$.each(x, function(k,v){
				var data = lookupMap[v.innerHTML]
				if(data)
				{
					$(v).attr("title", formatStats(data.stats))
					$(v).tooltip()
				}
			})
        }
	}
	
	var sharedOpts = {
		delay: 100,
		minLength: 0,
		position: {my:"left center", at :"right center"},		
		messages: {
			noResults: '',
			results: function() {}
		}
	}
	

	
	var setOpenOnFocus = function(el)
	{
		el.on("focus", function(){	$(this).autocomplete("search", $(this).val())})
	}
	if (loc in g_enhanceable)
	{
		enh.autocomplete($.extend({},sharedOpts,
		{
			source : ["+0", "+10", "+11", "+12", "+13","+14","+15"],
					change: propSet("enh", g_enhancementEffects[loc]),
					"close": propSet("enh", g_enhancementEffects[loc]),
					"open": openCb(g_enhanceLookups[loc])
		}))
		setOpenOnFocus(enh)
	}
	
	var setBlur = function(loc)
	{
		return function()
		{		
			var x = box.data(loc)
			if (!x)
			{
				$(this).val("")
			}
		}
	}
	
	prefix.autocomplete($.extend({},sharedOpts,
	{
		source: scrollSource(true),
		change: propSet("prefix", g_scrolls),
		"close": propSet("prefix", g_scrolls),
		"open": openCb(g_scrollLookup)
	}))
	setOpenOnFocus(prefix)
	prefix.on('blur', setBlur('prefix'))
	
	suffix.autocomplete($.extend({},sharedOpts,
	{
		source: scrollSource(false),
		change: propSet("suffix", g_scrolls),
		"close": propSet("suffix", g_scrolls),
		"open": openCb(g_scrollLookup)
	}))
	setOpenOnFocus(suffix)
	suffix.on('blur', setBlur('suffix'))
	
	
	var src = $.map(g_items[loc], function(k,v) {
		return k.name
	})

	item.autocomplete($.extend({},sharedOpts,
	{
		source:src, 
		"close": propSet("item", g_items[loc]),
		//"change": propSet("item", g_items[loc]),
		"open": openCb(g_lookups[loc])
	}))
	// TODO: set this on other boxes too
	item.on('change', propSet("item", g_items[loc]))
	item.on('blur', setBlur('item'))
	setOpenOnFocus(item)
	
	var statPat = /[+-]?(\d)\s*(.*)/;
	var updateInf = function(loc)
	{
		return function()
		{
			var val = $(this).val()
			if ($.inArray(val, g_infusions[loc]) == -1)
			{
				$(this).val("")
				box.removeData('inf')
				return
			}
			var match = statPat.exec(val);
			if (match && match.length > 2)
			{
				var num = parseInt(match[1])
				var stat = match[2]
				var s = {}
				s[stat] = num
				box.data("inf", {"name":val, "stats":s})
			}
			update()
		}
	}
	
	inf.autocomplete($.extend({},sharedOpts,
	{
		source: g_infusions[loc], 
		"close":updateInf(loc), 
		"change":updateInf(loc)
	}))
	setOpenOnFocus(inf)
	inf.on('blur', setBlur('inf'))
	
	innerBox.append(prefix)
	innerBox.append(suffix)
	if(!scrolls)
	{
		prefix.attr("disabled","disabled")
		prefix.css("background-color","gray")
		suffix.attr("disabled","disabled")
		suffix.css("background-color","gray")
	}
	innerBox.append(item)
	
	if(loc in g_infusions)
	{
		innerBox.append(inf)
	}
	
	enh.position({
		"my": "right top",
		"at": "left top",
		"of": item
	});
	
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
	// base stats
	
	var valOf = function(el)
	{
		var ret = parseInt(el.val())
		if (isNaN(ret))
		{
			return 0
		}
		return ret
	}
	var statsDiv = $("<div class='col-xs-6'/>")
	var critInputs = []
	var tooltips = [
	"Crit Mastery adds up to 28 crit",
	"Each 133.3 Wil gives 1 crit, up to a max of 15 crit  at 2,000 Wil",
	"Full gold Einrach gives 3 crit, full silver gives 1 crit",
	"Clearing Neamhain gives up to 5 crit (+1 for 5, +2 for 50, +3 for 75, and +5 for 100 clears)"
	]
	$.each(['Crit (mastery, wil)', '(ein, numa)'], function(rowNum,v)
	{
		var critRow = $("<div class='row'/>")
		for (var i = 0; i < 2; ++i)
		{
			var ci = createInputBox("crit", "30%", null, null)
			
			ci.attr("title", tooltips[rowNum*2+i])
			ci.tooltip()
			
			ci.css("margin-right", "0.2em")
			ci.css("text-align", "center")
			critRow.append(ci)
			critInputs.push(ci)
		}
		statsDiv
		.append($("<div class='row'><span>"+v+"</span></div>"))
		.append(critRow)
	})
	
	// oh god
	critInputs[0].val(28)
	critInputs[1].val(15)
	critInputs[2].val(3)
	critInputs[3].val(5)
	
	var balLabel = $("<div class='row'>Balance (ein)</div>")
	var balRow = $("<div class='row' > </div>")
	var balInput = createInputBox("bal", "30%", null, null)
	balInput.attr("title", "Full gold at Einrach gives 5 balance; silver gives 3")
	balInput.tooltip()
	balRow.append(balInput)
	balInput.val(5)
	balInput.css("text-align", "center")
	var speedLabel = $("<div class='row'>Speed (other)</div>")
	var speedRow = $("<div class='row' />")
	var speedInput = createInputBox("speed", "30%", null,null)
	speedRow.append(speedInput)
	speedInput.css("text-align", "center")
	speedInput.val(0)
	
	// TODO: Formatting on these
	statsDiv
	.append(balLabel)
	.append(balRow)
	.append(speedLabel)
	.append(speedRow)
	
	var statRowString = "<div class='row m-top-bot' />"
	var target = $("#"+id)
	target.html("")
	target.css("background-color","#aaaaaa")
	
	//target.css("height", "30em")
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
	row.append(statsDiv)
	
	
	target.append(row)
	
	var statsWrap = $("<div class='col-xs-12'/>")
	target.append(statsWrap)
	
	var writeStats = function(stats)
	{
		statsWrap.html(" ")
		row = $(statRowString)
		var statCol = $("<div class='col-xs-6'/>")
		statCol.html("Bal: " + (stats.bal + valOf(balInput)))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		
		var addlCrit = 3 + critInputs.reduce(function(total, e){ return total + valOf(e) }, 0)
		
		statCol.html("Crit: " + (stats.crit + addlCrit ))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		statCol.html("Speed: " + (stats.speed + valOf(speedInput)))
		row.append(statCol)
		statsWrap.append(row)
		target.data('stats',stats)
	}
	writeStats(stats)
	target.data('update', writeStats)
	
	$.each([balInput,speedInput].concat(critInputs), function(k,v){
		v.on('change', function(){
			writeStats(target.data('stats'))
		})
	})
	
	return target	
}
