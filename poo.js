// God, why is this still necessary?
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
	
	return null
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

var g_qualityLookups = {};
$.each(g_qualityEffects, function(k,v){
	g_qualityLookups[k] = createLookup(v)
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
	
	//var truncPath = path.map(function(v) { return v.substring(0,3) })
	var truncPath = path
	
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

function setSelectAllFocus(el)
{
	el.focus(function(){
		$(this)[0].setSelectionRange(0,$(this).val().length)
	})
}

function dumpToJson()
{
	var state = []
	$(".saveable").each(function (k,v)
	{
		var id = $(this).attr("id") || ""
		state.push([id, $(this).val()])
	})
	
	return LZString.compressToBase64(JSON.stringify(state))
}

function getUrl()
{
	var url = window.location.origin + window.location.pathname
	
	var params = {"saveString":dumpToJson()}
	
	return url + "?" + $.param( params )
}

function loadFromUrl()
{
	var ss = getQueryVariable("saveString")
	loadFromJson(ss)
}
	
function loadFromJson(j)
{
	j = JSON.parse(LZString.decompressFromBase64(j))
	
	$.each(j, function(i, v)
	{
		var id = v[0]
		var val = v[1]
		var target = $("#"+$.escapeSelector(id))
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

var modPat  = /.*Mod/i;

function formatStats(stats)
{
	if (!stats)
	{
		return ""
	}
	return txt = $.map(stats, function(k,v) { 
			var sep = "+"
			if(modPat.exec(v))
			{
				sep = ":"
			}
			if (k == 0)
			{
				return null
			}
			if (k < 0)
			{
				return v + k
			}
			return v + sep + k
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

var makeDialogId = function(loc)
{
	return loc+"-dialog"
}

var guessSetName = function(name)
{
	return name.split(" ")[0]
}

var makeColWithWidth = function(wid)
{
	var ret = $("<div />")
	ret.attr('class','col-xs-'+wid)
	return ret
}

var makeDialog = function(name, loc)
{
	var ret = $( "<div class='MyDialog' title='Choose your weapon properties'></div>" )
	ret.attr("id", makeDialogId(loc))
	var container = $("<div class='container-fluid' />")
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
	ret.data("numCols", numCols)
	var width = Math.floor(12/numCols);
	var headWidth = 12 - width*numCols+width
	if(headWidth > width)
	{
		headWidth -= 1
	}
	
	// piece 
	var	pieceHead = makeColWithWidth(headWidth)
	pieceHead.html("Part")
	pieceHead.css("text-align", "right")
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
		var piece = makeColWithWidth(headWidth)
		piece.css("margin-left", 0)
		piece.css("padding-left", 0)
		piece.css("text-align","right")
		piece.html(frag.name)
		row.append(piece)
		$.each(stats, function(stat){
			var inputCol = makeColWithWidth(width)
			var input = createInputBox('', [loc, frag.name, stat], null, null)
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
		ret["matt"] = ret["att"]
		return ret
	})
	
	
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
	
	var btnRow = $("<div class='row'/>")
	btnRow.append($("<div class='col-xs-8' />"))
	
	var btnCol = $("<div class='col-xs-4' />")
	btnCol.append(btn)
	btnCol.append(max)
	btnRow.append(btnCol)
	btnRow.css("padding-top", "0.5em")

	ret.append(btnRow)
	return ret
}

function ValueData()
{
	this.scrolls = g_scrolls
	this.items = g_items
}

function StateManager(statSheetDisplayId, equipId)
{
	var rows = 7;
	var cols = 3;
	var container = $("<div class='row' />")
	var view = $("<div class='col-xs-11'/>")
	
	for (var row = 0; row < rows; ++row)
	{
		var rowEl = $("<div class='row m-big-top-bot'/>")
		
		for (var col = 0; col < cols; ++col)
		{
			var colEl = $("<div class='col-xs-4'/>")
						
			var boxEl = $("<div/>")
			boxEl.attr('id', "box"+(1+ row*cols+ col) )
			
			colEl.append(boxEl)
			rowEl.append(colEl)
			
		}
		view.append(rowEl)
	}
	container.append(view)
	$("#"+equipId).append(container)
	this.boxes = []
	this.vd = new ValueData()

	
	this.statSheet = createStatsSheet(statSheetDisplayId)
	
	this.accumulateBoxes = function()
	{
		var stats = {}
		var boxes = this.boxes
		$.each(boxes, function(k,v){
			var boxStats = v.data("stats")
			if(boxStats)
			{
				for (k in boxStats)
				{
					if (k in stats)
					{
						stats[k] += boxStats[k]
					}
					else
					{
						stats[k] = boxStats[k]
					}
				}
			}
		})
		return stats
	}
	
	this.displayTotals = function ()
	{
		var stats = this.accumulateBoxes()
		var fn = this.statSheet.data('update')
		fn(stats)
	}

	this.triggerUpdate = function(el)
	{
		this.displayTotals()
	}
	
	this.registerBox = function(box)
	{
		this.boxes.push(box)
	}
	
	var i = 1

	createSquare("box"+(i++), "earrings", this)
	createSquare("box"+(i++), "hat", this)
	createSquare("box"+(i++), "wings", this)
	createSquare("box"+(i++), "weapon", this)
	createSquare("box"+(i++), "chest", this)
	createSquare("box"+(i++), "offhand", this)
	createSquare("box"+(i++), "secondary", this)
	createSquare("box"+(i++), "legs", this)
	createSquare("box"+(i++), "gloves", this)
	createSquare("box"+(i++), "belt", this)
	createSquare("box"+(i++), "feet", this)
	createSquare("box"+(i++), "brooch", this)
	createSquare("box"+(i++), "rings", this)
	createSquare("box"+(i++), "artifact", this)
	createSquare("box"+(i++), "rings", this)
	createSquare("box"+(i++), "bracelet", this, false)
	createSquare("box"+(i++), "", this)
	createSquare("box"+(i++), "bracelet", this, false)
	createSquare("box"+(i+2), "necklace", this)
}

var setOpenOnFocus = function(el)
{
	el.on("focus", function(){	$(this).autocomplete("search", $(this).val())})
}

function createSquare(id, loc, mgr, scrolls)
{	
	if (scrolls === undefined)
	{
		scrolls = true
	}
	
	var target = $("#"+id)
	
	var box = $("<div class='row' />")

	var leftBox = $("<div class='col-xs-3'/>")
	leftBox.css("padding","1px")
	leftBox.css("margin",0)
	leftBox.css("z-index",100)
	leftBox.css("overflow","visible")
	var innerBox = $("<div class='col-xs-9'/>")
	innerBox.css("border-style",'solid')
	innerBox.css("border-color", "black")
	innerBox.css("padding",0)
	innerBox.css("margin",0)
	
	box.append(leftBox)
	box.append(innerBox)
	leftBox.css("width", "2em")
	leftBox.css("height", "8em")
	innerBox.css("height", "8em")
	innerBox.css("width", "8em")
	innerBox.css("border-style", "solid")
	innerBox.css("background-image", "url('resource/poo.png')")
	innerBox.css("background-size", "cover")
	target.append(box)
	   
	if (!loc || !(loc in mgr.vd.items))
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
		var q = box.data("quality")
		
		var statMod = 1
		var attMod = 1
		if(q)
		{
			attMod = q.stats["Att Mod"]
			statMod = q.stats["Stat Mod"]
		}
	
		var contributions = ['prefix', 'suffix', 'item', 'inf', 'enh']
		
		var stats = {}
		$.each( box.data(), function(k,v){
			if(-1 != $.inArray(k,contributions))
			{
				if ("stats" in v)
				{
					thisStats = v.stats
					for (stat in thisStats)
					{
						var thisContrib = thisStats[stat]
						if(k == 'item')
						{
							if (stat == 'att' || stat == 'matt')
							{
								thisContrib *= attMod
							}
							else if (stat in g_qualityStats)
							{
								thisContrib *= statMod
							}
						}
						if(stat in stats)
						{
							stats[stat] += thisContrib
						}
						else
						{
							stats[stat] = thisContrib
						}
					}
				}
			}
		})

		box.data("stats", stats)
		var txt = formatStats(stats)
		$("#console").html(txt)
		
		mgr.triggerUpdate(box)
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
						"modal":true,
						"width" : ((1+dialog.data("numCols")) * 6) + "em"
						})
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
	
	var src = $.map(mgr.vd.items[loc], function(k,v) {
		return k.name
	})

	item.autocomplete($.extend({},sharedOpts,
	{
		source:src, 
		"close": propSet("item", mgr.vd.items[loc]),
		"open": openCb(g_lookups[loc])
	}))
	// TODO: set this on other boxes too
	item.on('change', propSet("item", mgr.vd.items[loc]))
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
			}
			else
			{
				var match = statPat.exec(val);
				if (match && match.length > 2)
				{
					var num = parseInt(match[1])
					var stat = match[2]
					var s = {}
					s[stat] = num
					box.data("inf", {"name":val, "stats":s})
				}
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
	
	if (loc in g_quality)
	{
		var push = $("<div />")
		push.css("height", "25%")
		leftBox.append(push)
		
		var star = String.fromCharCode(0x2605)
		var qual = createInputBox(star, [loc, "quality"])
		qual.css("overflow","visible")
		qual.css("text-align", "center")
		qual.css("margin-top", "1px")
		qual.css("margin-left", "1px")
		qual.autocomplete($.extend({},sharedOpts,
		{
			source : [1+star, 2+star, 3+star, 4+star, 5+star],
					change: propSet("quality", g_qualityEffects[loc]),
					"close": propSet("quality", g_qualityEffects[loc]),
					"open": openCb(g_qualityLookups[loc])
		}))
		qual.val(2+star)
		setOpenOnFocus(qual)
		leftBox.append(qual)
		/*
		qual.position({
			"my": "right top",
			"at": "left top",
			"of": suffix
		})
		*/;
		setSelectAllFocus(qual)
	}
	
	if (loc in g_enhanceable)
	{
		var enh = createInputBox('+', [loc, "enh"])
		enh.css("overflow","visible")
		enh.css("text-align", "center")
		enh.css("margin-left", "1px")
		enh.autocomplete($.extend({},sharedOpts,
		{
			source : ["+0", "+10", "+11", "+12", "+13","+14","+15"],
					change: propSet("enh", g_enhancementEffects[loc]),
					"close": propSet("enh", g_enhancementEffects[loc]),
					"open": openCb(g_enhanceLookups[loc])
		}))
		setOpenOnFocus(enh)
		leftBox.append(enh)
		
		/*
		enh.position({
			"my": "right top",
			"at": "left top",
			"of": item
		})
		*/
	}
	
	mgr.registerBox(box)
	return box
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
			if(cellNum >= numCells)
			{
				break;
			}
			var thisCol = $("<div class='col-xs-6' />")
			
			thisCol.css("padding-top", 0)
			thisCol.css("padding-left", 0)
			thisCol.css("padding-right", 0)
			
			thisCol.css("margin-top", 0)
			thisCol.css("margin-left", 0)
			thisCol.css("margin-right", 0)
		
			var balInput = createInputBox(statName, [statName, ""+cellNum] , "70%", null)
			balInput.addClass(statName+"-input")
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
function createStatsSheet(id)
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
	
	var charaRow = $("<div class='row' />")
	var charaSelect = createInputBox("character", ["character"] , "100%", null)
	
	charaRow.css("margin-right", "0.18em")
	charaRow.append(charaSelect)
	statsDiv.append(charaRow)
	
	var critSecLabel = $("<div class='row stat-head'>Crit from...</div>")
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
	
	var specificStats = $("<div class='container-fluid' />")
	specificStats.css("margin",0)
	specificStats.css("padding",0)
	
	statsDiv.append(specificStats)
	
	
	
	
	
	var chara = ""
	
	
	
	
	
	
	
	
	
	
	
	
	
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
		statCol.html("Bal: " + ((stats.balance||0) + valOf(balInput) + valOf(balInput2)))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		
		var addlCrit = 3 + critInputs.reduce(function(total, e){ return total + valOf(e) }, 0)
		
		statCol.html("Crit: " + ( (stats.crit||0) + addlCrit ))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		statCol.html("Speed: " + (stats.speed||0))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		row.append(statCol)
		//statsWrap.append(row)
		target.data('stats',stats)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		
		if(chara == "Fiona")
		{			
			var gearAtt = Math.floor(stats.att||0)

			var baseAtt = 485
			var otherAtt = 0
			$.each($(".att-input"), function(k,v)
			{
				otherAtt += valOf($(v))
			})
			var totalAtt = Math.floor(valOf($(".str-input"))*2.7 + gearAtt) + baseAtt + otherAtt
			statCol.html("Total Att: " + (totalAtt) + "(beta/estimate)")
			row.append(statCol)
			statsWrap.append(row)
		}
		else
		{
			var basemAtt = 700
			var othermAtt = 0
			$.each($(".matt-input"), function(k,v)
			{
				othermAtt += valOf($(v))
			})
			var gearmAtt = Math.floor(stats.matt||0)
			var totalmAtt = Math.floor(valOf($(".int-input"))*2 + gearmAtt) + basemAtt + othermAtt
			statCol.html("Total Att: " + (totalmAtt) + "(beta/estimate)")
			row.append(statCol)
			statsWrap.append(row)
		}

		target.data('stats',stats)
	}
	writeStats({crit:0, bal:0, speed:0})
	target.data('update', writeStats)
	
	var allStatBoxes = [balInput, balInput2]
	allStatBoxes = allStatBoxes.concat(critInputs)
	
	$.each(allStatBoxes, function(k,v){
		v.on('change', function(){
			writeStats(target.data('stats'))
		})
	})
	
	
	var initStats = function()
	{
		if (chara == $(this).val())
		{
			return
		}
		chara = $(this).val()
		specificStats.empty()
		
		var theseInputs = []
		if(chara == "Fiona")
		{
			var strLabel  = $("<div class='row stat-head'>Str in stats page</div>")
			var strSpec = {
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
			var strRow = createStatSection(strSpec, "str")
			var strInput = strRow.data('inputs')[0]


			specificStats
			.append(strLabel)
			.append(strRow)
			
			var attLabel  = $("<div class='row stat-head'>Other sources of Att</div>")
			var attSpec = {
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
			var attRow = createStatSection(attSpec, "att")
			var attInputs = attRow.data('inputs')
			
			specificStats
			.append(attLabel)
			.append(attRow)
			
			theseInputs = attInputs.concat([strInput])
		}
		else if (chara == "Ebie")
		{
			var intLabel  = $("<div class='row stat-head'>Int in stats page</div>")
			var intSpec = {
				"tips" : [
					"Total int from all equipment (stay tuned for updates that help you calculate this!)"
				],
				"defaults": [
					2500
				],
				"labels": [
					"Total Int",
				]
			}
			var intRow = createStatSection(intSpec, "int")
			var intInput = intRow.data('inputs')[0]


			specificStats
			.append(intLabel)
			.append(intRow)
			
			var mattLabel  = $("<div class='row stat-head'>Other sources of mAtt</div>")
			var mattSpec = {
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
			var mattRow = createStatSection(mattSpec, "matt")
			var mattInputs = mattRow.data('inputs')
			
			specificStats
			.append(mattLabel)
			.append(mattRow)
			
			theseInputs = mattInputs.concat([intInput])
		}
		
		$.each(theseInputs, function(k,v){
			v.on('change', function(){
				writeStats(target.data('stats'))
			})
		})
		writeStats(target.data('stats'))
	}
	
	var sharedOpts = 
	{
		delay: 100,
		minLength: 0,
		position: {my:"top", at :"bottom"},		
		messages: {
			noResults: '',
			results: function() {}
		},
		source: g_characters,
		change: initStats,
		"close": initStats,
	//	"open": openCb(g_scrollLookup)
	}
	charaSelect.autocomplete(sharedOpts)
	setOpenOnFocus(charaSelect)
	
	return target	
}
