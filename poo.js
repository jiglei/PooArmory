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

function createLookup(arr)
{
	ret = {}
	$.each(arr, function(k,v){
		ret[v.name] = v
	})
	return ret
}

var g_scrollLookup = createLookup(g_scrolls)

var g_weaponLookup = createLookup(g_weapons)


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
	"bracelet": g_bracelets,
	"necklace": g_necklaces

}

var g_minor_infusions = [
	
]

var g_armour_infusions = g_minor_infusions.concat([
	"+100 Def"
])

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
	"necklace": g_major_infusions,
}

var g_lookups = {};
$.each(g_items, function(k,v){
	g_lookups[k] = createLookup(v)
})


var g_enhanceLookups = {};
$.each(g_enhancementEffects, function(k,v){
	g_enhanceLookups[k] = createLookup(v)
})

var g_usedIds = {
}

function createInputBox(placeholder, path, width, height)
{
	width = width||"100%"
	
	if (height === undefined)
	{
		height = "25%"
	}
	var ret= $("<input type='text' class='saveable my-input-box'/>")
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
	
	var truncPath = path.map(function(v) { return v.substring(0,3) })
	
	var id = truncPath.join("-")
	var i = 2
	if (id in g_usedIds && $("#"+id).length > 0)
	{
		var candidate = id + i
		while(candidate in g_usedIds && $("#"+candidate).length > 0)
		{
			++i
			candidate = id + i
		}
		id = candidate
	}
	ret.attr("id", id)
	ret.data('path', path)
	g_usedIds[id] = true
	return ret
}

function dumpToJson()
{
	var state = []
	$(".saveable").each(function (k,v)
	{
		var id = $(this).attr("id") || ""
		state.push([id, $(this).val()])
	})
	
	return JSON.stringify(state)
}

	
function loadFromJson(j)
{
	j = JSON.parse(j)
	
	$.each(j, function(i, v)
	{
		var id = v[0]
		var val = v[1]
		var target = $("#"+id)
		var path = target.data('path')
		target.val(val)
		target.trigger("change")
		target.trigger("blur")
	})
	
	$(".MyDialog").dialog("close")
	
	var activeObj = document.activeElement
	
	$(activeObj).trigger("blur")

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


var getWeaponFragments = function (name)
{
	var	ret = []
	try{
		var level = g_setLevels[name] || 0
		ret.push({'name': name, 'stats':g_weaponFragments[name]})
		$.each(g_weaponSide[level], function(k,v){
			ret.push({'name':v, 'stats':g_weaponFragments[v]})
		})
	}catch(err)
	{
	}
	return ret
}

var makeColWithWidth = function(wid)
{
	var ret = $("<div />")
	ret.attr('class','col-xs-'+wid)
	return ret
}

var makeDialogId = function(loc)
{
	return loc+"-dialog"
}

var guessSetName = function(name)
{
	return name.split(" ")[0]
}

var makeDialog = function(name, loc)
{
	var ret = $( "<div class='MyDialog' title='Choose your weapon properties'></div>" )
	ret.attr("id", makeDialogId(loc))
	var container = $("<div class='container' />")
	container.css("width", "100%")
	ret.append(container)
	
	var frags = getWeaponFragments(guessSetName(name)) // ugh
	if(frags.length < 1)
	{
		return
	}
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
			input = createInputBox('', [loc, frag.name, stat], null, null)
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

function createSquare(id, loc, cb, scrolls)
{	
	if (scrolls === undefined)
	{
		scrolls = true
	}
	
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
	var enh = createInputBox('+', [loc, "enh"])
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
	
	var prefix = createInputBox('Prefix', [loc, 'Prefix'])
	var suffix = createInputBox('Suffix', [loc, 'Suffix'])
	var item = createInputBox(toTitleCase(loc), [loc, 'item'])
	item.css("text-overflow","ellipsis")
	var inf = createInputBox('Infusion', [loc, 'inf'])
	
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
				// I really hate this bit
				var dialogId = makeDialogId(loc)
				var dialogSel = '#'+dialogId
				
				if( $(dialogSel).length && $(dialogSel).dialog("isOpen") )
				{
					return
				}
				
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
					$(dialogSel).remove()
				}
				
				if(!$(dialogSel).length)
				{
					var dialog = makeDialog(entry.name, loc)	
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
				if( !$(dialogSel).dialog("isOpen") )
				{
					$(dialogSel).dialog("open")
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

function createStatSection(inputs, statName)
{
	var ret = $("<div class='row' >")
	
	ret.data('inputs', [])
	var wrap = $("<div class='col-xs-12' >")
	ret.append(wrap)
	
	var balTips = inputs.tips
	
	var balDefaults = inputs.defaults
	
	var balLabels = inputs.labels
	
	var colsPerRow = 2
	var numCells = balTips.length
	var numRows = Math.ceil(numCells / colsPerRow)
	
	for (var rowNum = 0; rowNum < numRows; rowNum++)
	{		
		var balRow = $("<div class='row' > </div>")
		for (var i = 0; i < colsPerRow; ++i)
		{
			var cellNum = rowNum*colsPerRow + i
			var thisCol = $("<div class='col-xs-6' />")
			
			thisCol.css("padding-top", 0)
			thisCol.css("padding-left", 0)
			thisCol.css("padding-right", 0)
			
			thisCol.css("margin-top", 0)
			thisCol.css("margin-left", 0)
			thisCol.css("margin-right", 0)
		
			var balInput = createInputBox(statName, [statName, ""+cellNum] , "70%", null)
			balInput.css("margin-right", "0.2em")
			balInput.attr("title", balTips[cellNum])
			balInput.tooltip()
			balInput.val(balDefaults[cellNum])
			balInput.css("text-align", "center")
			var thisLabel = $("<div/>")
			thisLabel.html(balLabels[cellNum])
			thisCol.append(thisLabel)
			thisCol.append(balInput)
			balRow.append(thisCol)
			ret.data('inputs').push(balInput)
		}	
		wrap.append(balRow)
	}
	
	return ret
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
	
	var critSecLabel = $("<div class='row stat-head'>Crits from...</div>")
	var critSpec = {
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
		
	var critSec = createStatSection(critSpec, "crit")
	
	var critInputs = critSec.data('inputs')
	
	statsDiv
	.append(critSecLabel)
	.append(critSec)
	
	var balLabel = $("<div class='row stat-head'>Balance from...</div>")
	var balSpec = {
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
	var balRow = createStatSection(balSpec, "bal")
	var balInput = balRow.data('inputs')[0]
	var balInput2 = balRow.data('inputs')[1]
	
	statsDiv
	.append(balLabel)
	.append(balRow)
	
	var speedLabel = $("<div class='row stat-head'>Speed from... ?</div>")
	var speedRow = $("<div class='row' />")
	var speedInput = createInputBox("speed", ["speed", "other"], "30%",null)
	speedRow.append(speedInput)
	speedInput.css("text-align", "center")
	speedInput.val(0)
	
	// TODO: Formatting on these
	statsDiv
	.append(speedLabel)
	.append(speedRow)
	
	var statRowString = "<div class='row m-top-bot' />"
	var target = $("#"+id)
	target.html("")
	target.css("background-color","#aaaaaa")
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
		statCol.html("Bal: " + (stats.bal + valOf(balInput) + valOf(balInput2)))
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
	
	$.each([balInput,speedInput, balInput2].concat(critInputs), function(k,v){
		v.on('change', function(){
			writeStats(target.data('stats'))
		})
	})
	
	return target	
}
