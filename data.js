var icons = {
	atm: L.icon({
		iconUrl: "Icons/atm.png",
		iconSize: [40, 40],
	}),
	bus: L.icon({
		iconUrl: "Icons/bus-stop.png",
		iconSize: [40, 40],
	}),
	evcharger: L.icon({
		iconUrl: "Icons/ev-charger.png",
		iconSize: [40, 40],
	}),
	gaspump: L.icon({
		iconUrl: "Icons/gas-pump.png",
		iconSize: [40, 40],
	}),
	// clovercoins: L.icon({
	//     iconUrl: "Icons/clover-coin.png",
	//     iconSize: [40, 40],
	// }),
	// greenguardian: L.icon({
	//     iconUrl: "Icons/green-guardian.png",
	//     iconSize: [40, 40],
	// }),

	smallhouse: L.icon({
		iconUrl: "Icons/small-house.png",
		iconSize: [40, 40],
	}),
	mediumhouse: L.icon({
		iconUrl: "Icons/medium-house.png",
		iconSize: [40, 40],
	}),
	largehouse: L.icon({
		iconUrl: "Icons/large-house.png",
		iconSize: [40, 40],
	}),
	singletrailer: L.icon({
		iconUrl: "Icons/trailer-single.png",
		iconSize: [40, 40],
	}),
	doubletrailer: L.icon({
		iconUrl: "Icons/trailer-double.png",
		iconSize: [40, 40],
	}),
	cabin: L.icon({
		iconUrl: "Icons/cabin.png",
		iconSize: [40, 40],
	}),
	building: L.icon({
		iconUrl: "Icons/building.png",
		iconSize: [40, 40],
	}),
}

const lists = [0, 3]

var layers = [
	{
		id: 1,
		group_id: 0,
		name: "ATMs",
		icon: "Icons/atm.png",
		layer: L.layerGroup([
			L.marker([-627.43, 260.09], { icon: icons.atm}),
			L.marker([-693.52, 535.6], { icon: icons.atm }),
			L.marker([-776.82, 184.7], { icon: icons.atm }),
			L.marker([-842.44, 193.54], { icon: icons.atm }),
			L.marker([-774.49, 277.78], { icon: icons.atm }),
			L.marker([-725.16, 298.25], { icon: icons.atm }),
			L.marker([-762.39, 554.22], { icon: icons.atm }),
			L.marker([-439.41, 487.67], { icon: icons.atm }),
			L.marker([-314.69, 801.34], { icon: icons.atm }),
			L.marker([-338.42, 810.18], { icon: icons.atm }),
			L.marker([-398.93, 788.77], { icon: icons.atm }),
		])
	},
	{
		id: 2,
		group_id: 0,
		name: "Bus Stops",
		icon: "Icons/bus-stop.png",
		layer: L.layerGroup([
			L.marker([-674.67, 225.91], { icon: icons.bus }),
			L.marker([-682.42, 350.58], { icon: icons.bus }),
			L.marker([-783.8, 221], { icon: icons.bus }),
			L.marker([-831.74, 288.01], { icon: icons.bus }),
			L.marker([-677.23, 522.11], { icon: icons.bus }),
			L.marker([-755.41, 561.2], { icon: icons.bus }),
			L.marker([-366.35, 768.3], { icon: icons.bus }),
			L.marker([-332.84, 857.19], { icon: icons.bus }),
			L.marker([-319.81, 801.8], { icon: icons.bus }),
			L.marker([-703.70, 287.84], { icon: icons.bus }),
			L.marker([-858.26, 248.92], { icon: icons.bus }),
		])
	},
	{
		id: 3,
		group_id: 0,
		name: "EV Chargers",
		icon: "Icons/ev-charger.png",
		layer: L.layerGroup([
			L.marker([-735.4, 211.69], { icon: icons.evcharger }),
			L.marker([-735.4, 211.69], { icon: icons.evcharger }),
			L.marker([-818.89, 318.70], { icon: icons.evcharger }),
			L.marker([-818.89, 321.09], { icon: icons.evcharger }),
			L.marker([-772.17, 233.56], { icon: icons.evcharger }),
			L.marker([-772.17, 233.56], { icon: icons.evcharger }),
			L.marker([-663.19, 258.66], { icon: icons.evcharger }),
			L.marker([-663.19, 261], { icon: icons.evcharger }),
			L.marker([-663.19, 263.39], { icon: icons.evcharger }),
			L.marker([-430.11, 483.48], { icon: icons.evcharger }),
			L.marker([-430.11, 483.48], { icon: icons.evcharger }),
			L.marker([-285.81, 800.36], { icon: icons.evcharger }),
			L.marker([-288.16, 800.36], { icon: icons.evcharger }),
			L.marker([-290.63, 800.36], { icon: icons.evcharger }),
			L.marker([-357.19, 607.36], { icon: icons.evcharger }),
			L.marker([-357.19, 609.80], { icon: icons.evcharger }),
			L.marker([-648.28, 157.78], { icon: icons.evcharger }),
			L.marker([-650.69, 157.78], { icon: icons.evcharger }),
			L.marker([-653.09, 157.78], { icon: icons.evcharger }),
			L.marker([-315.16, 621.7], { icon: icons.evcharger }),
			L.marker([-317.02, 621.7], { icon: icons.evcharger }),
			L.marker([-388.23, 783.33], { icon: icons.evcharger }),
			L.marker([-390.59, 783.33], { icon: icons.evcharger }),
			L.marker([-395.25, 783.33], { icon: icons.evcharger }),
			L.marker([-397.66, 783.33], { icon: icons.evcharger }),
			L.marker([-669.78, 489.53], { icon: icons.evcharger }),
			L.marker([-669.78, 494.18], { icon: icons.evcharger }),
			L.marker([-669.78, 492.32], { icon: icons.evcharger }),
			L.marker([-669.78, 487.2], { icon: icons.evcharger }),
			L.marker([-669.78, 485.34], { icon: icons.evcharger }),
			L.marker([-754.95, 590.05], { icon: icons.evcharger }),
			L.marker([-754.95, 591.91], { icon: icons.evcharger }),
			L.marker([-754.95, 594.24], { icon: icons.evcharger }),
			L.marker([-754.95, 596.1], { icon: icons.evcharger }),
			L.marker([-692, 191.45], { icon: icons.evcharger }),
			L.marker([-694.47, 191.45], { icon: icons.evcharger }),
		])
	},
	{
		id: 4,
		group_id: 3,
		name: "Postal Codes",
		cluster: false,
		tooltip: false,
		layer: L.layerGroup([
			L.marker([-817.78, 178.65], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "200" + "</b>"
				})
			}),
			L.marker([-819.17, 231.7], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "201" + "</b>"
				})
			}),
			L.marker([-819.17, 274.05], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "202" + "</b>"
				})
			}),
			L.marker([-819.17, 319.66], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "203" + "</b>"
				})
			}),
			L.marker([-815.91, 375.04], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "204" + "</b>"
				})
			}),
			L.marker([-771.24, 180.04], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "205" + "</b>"
				})
			}),
			L.marker([-770.31, 228.91], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "206" + "</b>"
				})
			}),
			L.marker([-769.37, 272.66], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "207" + "</b>"
				})
			}),
			L.marker([-769.37, 319.66], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "208" + "</b>"
				})
			}),
			L.marker([-716.32, 167.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "210" + "</b>"
				})
			}),
			L.marker([-736.33, 227.51], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "211" + "</b>"
				})
			}),
			L.marker([-731.21, 272.19], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "212" + "</b>"
				})
			}),
			L.marker([-730.75, 318.73], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "213" + "</b>"
				})
			}),
			L.marker([-666.06, 241.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "216" + "</b>"
				})
			}),
			L.marker([-681.42, 318.73], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "217" + "</b>"
				})
			}),
			L.marker([-749.83, 373.65], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "218" + "</b>"
				})
			}),
			L.marker([-675.83, 373.18], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "219" + "</b>"
				})
			}),
			L.marker([-860.13, 226.12], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "220" + "</b>"
				})
			}),
			L.marker([-860.13, 274.05], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "221" + "</b>"
				})
			}),
			L.marker([-860.13, 318.26], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "222" + "</b>"
				})
			}),
			L.marker([-922.02, 314.54], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "223" + "</b>"
				})
			}),
			L.marker([-885.26, 153.52], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "224" + "</b>"
				})
			}),
			L.marker([-781.94, 96.74], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "225" + "</b>"
				})
			}),
			L.marker([-815.91, 490.46], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "300" + "</b>"
				})
			}),
			L.marker([-815.91, 546.31], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "301" + "</b>"
				})
			}),
			L.marker([-810.79, 636.59], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "302" + "</b>"
				})
			}),
			L.marker([-769.84, 490.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "303" + "</b>"
				})
			}),
			L.marker([-769.37, 542.58], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "304" + "</b>"
				})
			}),
			L.marker([-666.99, 482.08], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "305" + "</b>"
				})
			}),
			L.marker([-729.35, 490.46], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "306" + "</b>"
				})
			}),
			L.marker([-730.75, 541.65], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "307" + "</b>"
				})
			}),
			L.marker([-622.31, 482.08], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "308" + "</b>"
				})
			}),
			L.marker([-689.79, 547.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "309" + "</b>"
				})
			}),
			L.marker([-730.75, 596.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "310" + "</b>"
				})
			}),
			L.marker([-769.84, 636.13], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "311" + "</b>"
				})
			}),
			L.marker([-869.43, 634.73], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "312" + "</b>"
				})
			}),
			L.marker([-869.43, 546.31], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "313" + "</b>"
				})
			}),
			L.marker([-876.41, 436.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "314" + "</b>"
				})
			}),
			L.marker([-666.06, 76.73], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "400" + "</b>"
				})
			}),
			L.marker([-660.01, 170.74], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "401" + "</b>"
				})
			}),
			L.marker([-621.85, 219.14], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "402" + "</b>"
				})
			}),
			L.marker([-633.02, 281.5], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "403" + "</b>"
				})
			}),
			L.marker([-635.34, 337.35], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "404" + "</b>"
				})
			}),
			L.marker([-587.41, 192.14], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "405" + "</b>"
				})
			}),
			L.marker([-561.81, 308.96], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "406" + "</b>"
				})
			}),
			L.marker([-542.26, 370.39], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "407" + "</b>"
				})
			}),
			L.marker([-546.45, 71.14], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "408" + "</b>"
				})
			}),
			L.marker([-538.54, 190.28], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "409" + "</b>"
				})
			}),
			L.marker([-519, 283.36], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "410" + "</b>"
				})
			}),
			L.marker([-497.59, 367.6], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "411" + "</b>"
				})
			}),
			L.marker([-498.05, 184.7], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "412" + "</b>"
				})
			}),
			L.marker([-681.42, 629.61], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "500" + "</b>"
				})
			}),
			L.marker([-599.04, 628.68], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "501" + "</b>"
				})
			}),
			L.marker([-614.87, 533.27], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "502" + "</b>"
				})
			}),
			L.marker([-566, 462.07], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "503" + "</b>"
				})
			}),
			L.marker([-546.45, 537.46], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "504" + "</b>"
				})
			}),
			L.marker([-544.59, 585.4], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "505" + "</b>"
				})
			}),
			L.marker([-507.36, 574.23], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "506" + "</b>"
				})
			}),
			L.marker([-505.03, 629.14], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "507" + "</b>"
				})
			}),
			// L.marker([-898.29, 83.24], {
			//     icon: L.divIcon({
			//       iconSize: "auto",
			//       html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "508" + "</b>"
			//     })
			// }),
			L.marker([-544.13, 628.68], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "509" + "</b>"
				})
			}),
			L.marker([-525.98, 679.41], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "510" + "</b>"
				})
			}),
			L.marker([-640, 684.06], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "511" + "</b>"
				})
			}),
			L.marker([-499.45, 474.17], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "600" + "</b>"
				})
			}),
			L.marker([-457.56, 527.69], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "601" + "</b>"
				})
			}),
			L.marker([-430.57, 455.09], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "602" + "</b>"
				})
			}),
			L.marker([-385.89, 492.32], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "603" + "</b>"
				})
			}),
			L.marker([-422.19, 572.83], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "604" + "</b>"
				})
			}),
			L.marker([-418.47, 671.96], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "605" + "</b>"
				})
			}),
			L.marker([-431.04, 78.12], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "700" + "</b>"
				})
			}),
			L.marker([-473.39, 187.49], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "701" + "</b>"
				})
			}),
			L.marker([-475.25, 291.74], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "702" + "</b>"
				})
			}),
			L.marker([-431.97, 380.63], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "703" + "</b>"
				})
			}),
			L.marker([-413.82, 173.99], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "704" + "</b>"
				})
			}),
			L.marker([-413.82, 255.9], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "705" + "</b>"
				})
			}),
			L.marker([-416.61, 323.85], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "706" + "</b>"
				})
			}),
			L.marker([-385.43, 379.23], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "707" + "</b>"
				})
			}),
			L.marker([-361.23, 173.99], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "708" + "</b>"
				})
			}),
			L.marker([-363.56, 256.83], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "709" + "</b>"
				})
			}),
			L.marker([-333.31, 332.23], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "710" + "</b>"
				})
			}),
			L.marker([-300.73, 240.54], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "711" + "</b>"
				})
			}),
			L.marker([-311.43, 366.67], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "800" + "</b>"
				})
			}),
			L.marker([-254.65, 362.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "801" + "</b>"
				})
			}),
			L.marker([-181.12, 373.18], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "802" + "</b>"
				})
			}),
			L.marker([-244.42, 218.67], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "803" + "</b>"
				})
			}),
			L.marker([-126.67, 313.61], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "804" + "</b>"
				})
			}),
			L.marker([-197.88, 281.03], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "805" + "</b>"
				})
			}),
			L.marker([-103.4, 400.64], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "806" + "</b>"
				})
			}),
			L.marker([-156.92, 483.01], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "900" + "</b>"
				})
			}),
			L.marker([-162.04, 554.68], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "901" + "</b>"
				})
			}),
			L.marker([-183.92, 621.7], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "902" + "</b>"
				})
			}),
			L.marker([-245.35, 503.02], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "903" + "</b>"
				})
			}),
			L.marker([-228.13, 587.72], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "904" + "</b>"
				})
			}),
			L.marker([-224.4, 666.38], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "905" + "</b>"
				})
			}),
			L.marker([-301.19, 678.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "906" + "</b>"
				})
			}),
			L.marker([-289.56, 594.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "907" + "</b>"
				})
			}),
			L.marker([-332.37, 634.26], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "908" + "</b>"
				})
			}),
			L.marker([-327.72, 518.85], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "909" + "</b>"
				})
			}),
			L.marker([-368.67, 673.36], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "910" + "</b>"
				})
			}),
			L.marker([-183.92, 757.59], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1100" + "</b>"
				})
			}),
			L.marker([-209.98, 834.85], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1101" + "</b>"
				})
			}),
			L.marker([-236.97, 769.23], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1102" + "</b>"
				})
			}),
			L.marker([-250.47, 904.65], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1103" + "</b>"
				})
			}),
			L.marker([-304.45, 787.38], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1104" + "</b>"
				})
			}),
			L.marker([-316.55, 839.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1105" + "</b>"
				})
			}),
			L.marker([-309.57, 888.83], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1106" + "</b>"
				})
			}),
			L.marker([-373.33, 792.5], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1107" + "</b>"
				})
			}),
			L.marker([-369.61, 839.03], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1108" + "</b>"
				})
			}),
			L.marker([-366.35, 918.62], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1109" + "</b>"
				})
			}),
			L.marker([-405.91, 792.5], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1110" + "</b>"
				})
			}),
			L.marker([-406.84, 865.56], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1111" + "</b>"
				})
			}),
			L.marker([-449.65, 792.96], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1112" + "</b>"
				})
			}),
			L.marker([-357.04, 744.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1113" + "</b>"
				})
			}),
			L.marker([-453.38, 900.47], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1200" + "</b>"
				})
			}),
			L.marker([-596.25, 766.43], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1201" + "</b>"
				})
			}),
			L.marker([-621.85, 850.67], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1202" + "</b>"
				})
			}),
			L.marker([-684.67, 920.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1203" + "</b>"
				})
			}),
			L.marker([-743.31, 773.42], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1204" + "</b>"
				})
			}),
			L.marker([-769.84, 921.87], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1205" + "</b>"
				})
			}),
			L.marker([-838.72, 842.76], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1206" + "</b>"
				})
			}),
			L.marker([-885.26, 727.34], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text postal-codes' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1207" + "</b>"
				})
			}),
		])
	},
	{
		id: 5,
		group_id: 3,
		name: "Areas",
		cluster: false,
		tooltip: false,
		inflatable: true,
		layer: L.layerGroup([
			L.marker([-346.34, 815.3], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SPRINGFIELD" + "</b>"
				})
			}),
			L.marker([-411.03, 248.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "HOUSING SUBURBS" + "</b>"
				})
			}),
			L.marker([-761, 288.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "DOWNTOWN RIVER CITY" + "</b>"
				})
			}),
			L.marker([-691.65, 859.98], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "HIGH ROCK PARK" + "</b>"
				})
			}),
			L.marker([-457.1, 586.79], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-30px, -15px); font-stretch: extra-condensed; width: 60px; height: 30px;'>" + "FARMS" + "</b>"
				})
			}),
			L.marker([-754.02, 517.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "INDUSTRIAL PARK" + "</b>"
				})
			}),
			L.marker([-544.13, 590.05], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-60px, -15px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "TRAILER PARK" + "</b>"
				})
			}),
			L.marker([-189.03, 522.11], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-60px, -15px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "SPRING LAKE" + "</b>"
				})
			}),
			L.marker([-748.43, 373.65], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-30px, -20px); font-stretch: extra-condensed; width: 60px; height: 30px;'>" + "CITY PARK" + "</b>"
				})
			}),
			L.marker([-689.79, 247.53], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-60px, -15px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "FOUNTAIN" + "</b>"
				})
			}),
			L.marker([-842.91, 846.02], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text' style='transform: translate(-100px, -20px); font-stretch: extra-condensed; width: 200px; height: 40px; font-size: 13px; line-height: 20px;'>" + "PARK<br>CAMPGROUNDS" + "</b>"
				})
			}),
		])
	},
	{
		id: 6,
		group_id: 3,
		name: "Street Names",
		icon: false,
		tooltip: false,
		layer: L.layerGroup([
			L.marker([-137.84, 473.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; font-size: 10px;'>" + "HIGHWAY 55" + "</b>"
				})
			}),
			L.marker([-374.26, 716.64], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -6.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg); font-size: 10px;'>" + "HIGHWAY 55" + "</b>"
				})
			}),
			L.marker([-640, 716.64], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg); font-size: 10px;'>" + "HIGHWAY 55" + "</b>"
				})
			}),
			L.marker([-345.41, 627.75], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "MAPLE STREET" + "</b>"
				})
			}),
			L.marker([-345.41, 818.09], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "MAPLE STREET" + "</b>"
				})
			}),
			L.marker([-259.77, 610.99], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "LAKEVIEW COURT" + "</b>"
				})
			}),
			L.marker([-303.99, 657.53], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "LAKEVIEW CT." + "</b>",
				}),
			}),
			L.marker([-302.12, 610.99], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "IRON ROAD" + "</b>",
				}),
			}),
			L.marker([-259.31, 449.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "SPRING CREEK RD." + "</b>"
				})
			}),
			L.marker([-302.59, 566.78], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "SPRING CREEK RD." + "</b>"
				})
			}),
			L.marker([-275.6, 818.09], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "CEDAR ROAD" + "</b>"
				})
			}),
			L.marker([-424.52, 791.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GRAND ST." + "</b>"
				})
			}),
			L.marker([-385.89, 764.57], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "ELM STREET" + "</b>"
				})
			}),
			L.marker([-315.62, 764.57], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "CEDAR ST." + "</b>"
				})
			}),
			L.marker([-310.04, 861.37], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "TERRACE DRIVE" + "</b>"
				})
			}),
			L.marker([-384.5, 818.09], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "OAK VALLEY DR." + "</b>"
				})
			}),
			L.marker([-492, 818.09], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "OAK VALLEY DRIVE" + "</b>"
				})
			}),
			L.marker([-565.53, 762.71], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "OAK VALLEY DR." + "</b>"
				})
			}),
			L.marker([-224.87, 403.9], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [95, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
				}),
			}),
			L.marker([-352.85, 403.43], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
				}),
			}),
			L.marker([-417.54, 461.6], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "COLONIAL DRIVE" + "</b>"
				})
			}),
			L.marker([-463.61, 561.66], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(45deg);'>" + "COLONIAL DRIVE" + "</b>",
				}),
			}),
			L.marker([-526.91, 604.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "VINE STREET" + "</b>"
				})
			}),
			L.marker([-544.13, 560.27], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(280deg);'>" + "LEE ST." + "</b>",
				}),
			}),
			L.marker([-565.07, 660.79], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GIBSON LANE" + "</b>"
				})
			}),
			L.marker([-565.07, 537], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GIBSON LANE" + "</b>"
				})
			}),
			L.marker([-571.12, 604.01], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "COLONIAL DRIVE" + "</b>",
				}),
			}),
			L.marker([-666.99, 604.48], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "COLONIAL DRIVE" + "</b>",
				}),
			}),
			L.marker([-630.69, 654.28], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "VINE STREET" + "</b>",
				}),
			}),
			L.marker([-619.05, 465.33], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "GIBSON LANE" + "</b>",
				}),
			}),
			L.marker([-652.56, 437.4], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "INDEPENDENCE PARKWAY" + "</b>"
				})
			}),
			L.marker([-463.61, 403.43], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
				}),
			}),
			L.marker([-579.96, 403.43], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
				}),
			}),
			L.marker([-711.67, 403.43], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
				}),
			}),
			L.marker([-794.97, 410.88], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FREEDOM AVENUE" + "</b>"
				})
			}),
			L.marker([-794.97, 588.19], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FREEDOM AVENUE" + "</b>"
				})
			}),
			L.marker([-794.97, 228.91], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FREEDOM AVENUE" + "</b>"
				})
			}),
			L.marker([-751.69, 517.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GEORGIA AVENUE" + "</b>"
				})
			}),
			L.marker([-712.6, 517.45], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "ORCHARD BOULEVARD" + "</b>"
				})
			}),
			L.marker([-794.97, 517.92], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "CROSS STREET" + "</b>",
				}),
			}),
			L.marker([-750.76, 465.33], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "INDUSTRIAL ROAD" + "</b>",
				}),
			}),
			L.marker([-841.04, 516.99], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "MADISON COURT" + "</b>"
				})
			}),
			L.marker([-750.76, 570.51], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [107, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "CLINE STREET" + "</b>",
				}),
			}),
			L.marker([-840.58, 299.18], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "SOUTHERN AVENUE" + "</b>"
				})
			}),
			L.marker([-711.67, 320.59], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "ORCHARD BOULEVARD" + "</b>"
				})
			}),
			L.marker([-879.67, 299.18], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "LIBERTY WAY" + "</b>"
				})
			}),
			L.marker([-755.88, 253.11], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "DURHAM ROAD" + "</b>",
				}),
			}),
			L.marker([-794.97, 292.2], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "MAIN STREET" + "</b>",
				}),
			}),
			L.marker([-750.76, 345.26], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "PARK STREET" + "</b>",
				}),
			}),
			L.marker([-833.6, 345.26], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "LIBERTY WAY" + "</b>",
				}),
			}),
			L.marker([-652.56, 297.32], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "INDEPENDENCE PARKWAY" + "</b>"
				})
			}),
			L.marker([-732.61, 203.31], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "SANDSTONE ROAD" + "</b>",
				}),
			}),
			L.marker([-750.76, 298.25], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GRAND AVENUE" + "</b>"
				})
			}),
			L.marker([-687.47, 169.81], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "HILLVIEW RD." + "</b>"
				})
			}),
			L.marker([-695.38, 137.69], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "FAIRFAX ROAD" + "</b>",
				}),
			}),
			L.marker([-610.21, 188.89], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(330deg);'>" + "FAIRFAX ROAD" + "</b>",
				}),
			}),
			L.marker([-556.69, 281.03], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(330deg);'>" + "FAIRFAX ROAD" + "</b>",
				}),
			}),
			L.marker([-525.05, 366.67], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FAIRFAX ROAD" + "</b>"
				})
			}),
			L.marker([-590.2, 248.92], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "ARBOR LANE" + "</b>",
				}),
			}),
			L.marker([-505.5, 249.39], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "ARBOR LANE" + "</b>",
				}),
			}),
			L.marker([-750.76, 174.46], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FAIRFAX RD." + "</b>"
				})
			}),
			L.marker([-682.35, 345.26], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "PARK ST." + "</b>",
				}),
			}),
			L.marker([-682.35, 291.74], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "MAIN ST." + "</b>",
				}),
			}),
			L.marker([-565.53, 106.98], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(300deg);'>" + "VALLEY DRIVE" + "</b>",
				}),
			}),
			L.marker([-524.58, 192.14], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "VALLEY DRIVE" + "</b>"
				})
			}),
			L.marker([-384.5, 256.83], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FRANKLIN COURT" + "</b>"
				})
			}),
			L.marker([-448.26, 256.83], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FRANKLIN COURT" + "</b>"
				})
			}),
			L.marker([-335.17, 256.83], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "PINEVIEW CIRCLE" + "</b>"
				})
			}),
			L.marker([-418.01, 120.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "ACADEMY PL." + "</b>"
				})
			}),
			L.marker([-416.14, 301.05], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "JOYNER RD." + "</b>",
				}),
			}),
			L.marker([-416.14, 213.09], {
				icon: L.divIcon({
					iconSize: "auto",
					iconAnchor: [94, 15],
					html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "EMERSON RD." + "</b>",
				}),
			}),

			// L.marker([-898.29, 83.24], {
			//   icon: L.divIcon({
			//     iconSize: "auto",
			//     iconAnchor: [94, 15],
			//     html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "---_---" + "</b>",
			//   }),
			// }),
			// L.marker([-898.29, 83.24], {
			//   icon: L.divIcon({
			//     iconSize: "auto",
			//     iconAnchor: [107, 15],
			//     html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "--_--" + "</b>",
			//   }),
			// }),
			// L.marker([-898.29, 83.24], {
			//   icon: L.divIcon({
			//     iconSize: "auto",
			//     html: "<b class='area-text road-names' style='transform: translate(-100px, -7.5px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "-_-" + "</b>"
			//   })
			// }),
		])
	},
	{
		id: 7,
		removed: true,
		group_id: 3,
		name: "Buildings",
		icon: false,
		tooltip: false,
		layer: L.layerGroup([
			L.marker([-717.72, 169.81], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC FIRE DEPT." + "</b>"
				})
			}),
			L.marker([-621.85, 280.57], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-40px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "JEWELRY STORE" + "</b>"
				})
			}),
			L.marker([-617.19, 336.41], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "HOSPITAL" + "</b>"
				})
			}),
			L.marker([-666.99, 309.42], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "THREE GUYS" + "</b>"
				})
			}),
			L.marker([-687.93, 302.91], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "VALLEY TRANSIT" + "</b>"
				})
			}),
			L.marker([-731.21, 307.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "RC PARKING GARAGE" + "</b>"
				})
			}),
			L.marker([-763.79, 304.3], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "NEWS STATION" + "</b>"
				})
			}),
			L.marker([-774.49, 178.65], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC BANK" + "</b>"
				})
			}),
			L.marker([-815.45, 307.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "DEALERSHIP" + "</b>"
				})
			}),
			L.marker([-661.4, 161.89], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "GUN STORE" + "</b>"
				})
			}),
			L.marker([-725.16, 231.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC MOD SHOP" + "</b>"
				})
			}),
			L.marker([-848.03, 187.49], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC GAS-N-GO" + "</b>"
				})
			}),
			L.marker([-853.61, 323.85], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "LA MESA" + "</b>"
				})
			}),
			L.marker([-819.64, 233.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "DMV" + "</b>"
				})
			}),
			L.marker([-779.15, 243.8], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "LIBERTY CAFE" + "</b>"
				})
			}),
			L.marker([-780.54, 301.98], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "RIVERSIDE RECORDS" + "</b>"
				})
			}),
			L.marker([-688.4, 481.15], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "POLICE DEPT." + "</b>"
				})
			}),
			L.marker([-735.4, 593.77], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-75px, -25px); font-stretch: extra-condensed; width: 150px; height: 60px;'>" + "DEPARTMENT OF TRANSPORTATION" + "</b>"
				})
			}),
			L.marker([-625.57, 584.93], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "COUNTY JAIL" + "</b>"
				})
			}),
			L.marker([-819.17, 542.58], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "WASTE CENTER" + "</b>"
				})
			}),
			L.marker([-579.96, 288.01], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "TOOL STORE" + "</b>"
				})
			}),
			L.marker([-613.47, 479.75], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "POST OFFICE" + "</b>"
				})
			}),
			L.marker([-436.16, 492.32], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "FARMS<br>GAS-N-GO" + "</b>"
				})
			}),
			L.marker([-391.94, 794.36], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SF GAS-N-GO" + "</b>"
				})
			}),
			L.marker([-373.79, 832.98], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SF MOD SHOP" + "</b>"
				})
			}),
			L.marker([-309.57, 839.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SF PARKING GARAGE" + "</b>"
				})
			}),
			L.marker([-357.51, 806.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-30px, -10px); font-stretch: extra-condensed; width: 60px; height: 40px;'>" + "SF FIRE DEPT." + "</b>"
				})
			}),
			L.marker([-357.04, 797.62], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "LIBERTY<br>APPAREL" + "</b>"
				})
			}),
			L.marker([-333.31, 786.91], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "BARBER SHOP" + "</b>"
				})
			}),
			L.marker([-332.84, 826.93], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "RICK AND<br>JOHN'S" + "</b>"
				})
			}),
			L.marker([-332.84, 833.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "SPRING<br>BAKERY" + "</b>"
				})
			}),
			L.marker([-356.11, 839.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "THEATER" + "</b>"
				})
			}),
			L.marker([-369.61, 619.84], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-60px, -10px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "SHERIFF'S OFFICE" + "</b>"
				})
			}),
			L.marker([-858.26, 237.29], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "DRAGON<br>SHOP" + "</b>"
				})
			}),
			L.marker([-621.85, 263.35], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-40px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "GADGET SHACK" + "</b>"
				})
			}),
			L.marker([-724.7, 535.6], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "RC GAS DEPOT" + "</b>"
				})
			}),
			L.marker([-609.28, 636.59], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-40px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "CHOP<br>SHOP" + "</b>"
				})
			}),
			L.marker([-511.08, 175.86], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text buildings' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "CAMPING<br>STORE" + "</b>"
				})
			}),
		])
	},
	{
		id: 8,
		group_id: 0,
		name: "Gas Pumps",
		icon: "Icons/gas-pump.png",
		layer: L.layerGroup([
			L.marker([-830.34, 186.56], { icon: icons.gaspump }),
			L.marker([-810.33, 186.56], { icon: icons.gaspump }),
			L.marker([-823.36, 186.56], { icon: icons.gaspump }),
			L.marker([-816.38, 186.56], { icon: icons.gaspump }),
			L.marker([-426.85, 474.17], { icon: icons.gaspump }),
			L.marker([-432.43, 474.17], { icon: icons.gaspump }),
			L.marker([-440.81, 474.17], { icon: icons.gaspump }),
			L.marker([-448.26, 474.17], { icon: icons.gaspump }),
			L.marker([-412.42, 805.53], { icon: icons.gaspump }),
			L.marker([-412.42, 791.1], { icon: icons.gaspump }),
			L.marker([-412.42, 798.55], { icon: icons.gaspump }),
			L.marker([-412.42, 784.12], { icon: icons.gaspump }),
		])
	},
	{
		id: 9,
		group_id: 0,
		name: "Houses",
		sub_layers: [10, 11, 12, 13, 14]
	},
	{
		id: 10,
		sub_layer: true,
		parent_layer: 9,
		name: "Small House",
		icon: "Icons/small-house.png",
		layer: L.layerGroup([
			L.marker([-463.61, 200.99], { icon: icons.smallhouse }),
			L.marker([-433.36, 256.83], { icon: icons.smallhouse }),
			L.marker([-463.61, 268], { icon: icons.smallhouse }),
			L.marker([-433.36, 337.81], { icon: icons.smallhouse }),
			L.marker([-403.58, 341.07], { icon: icons.smallhouse }),
			L.marker([-399.39, 232.17], { icon: icons.smallhouse }),
			L.marker([-399.86, 199.13], { icon: icons.smallhouse }),
			L.marker([-371, 278.24], { icon: icons.smallhouse }),
		])
	},
	{
		id: 11,
		sub_layer: true,
		parent_layer: 9,
		name: "Medium House",
		icon: "Icons/medium-house.png",
		layer: L.layerGroup([
			L.marker([-441.74, 113.49], { icon: icons.mediumhouse }),
			L.marker([-464.08, 176.79], { icon: icons.mediumhouse }),
			L.marker([-431.5, 191.68], { icon: icons.mediumhouse }),
			L.marker([-431.97, 229.84], { icon: icons.mediumhouse }),
			L.marker([-431.5, 281.96], { icon: icons.mediumhouse }),
			L.marker([-465.01, 294.06], { icon: icons.mediumhouse }),
			L.marker([-401.25, 319.2], { icon: icons.mediumhouse }),
			L.marker([-401.25, 258.23], { icon: icons.mediumhouse }),
			L.marker([-401.25, 163.29], { icon: icons.mediumhouse }),
			L.marker([-352.39, 258.69], { icon: icons.mediumhouse }),
			L.marker([-350.52, 231.24], { icon: icons.mediumhouse }),
			L.marker([-317.02, 580.74], { icon: icons.mediumhouse }),
			L.marker([-276.99, 596.1], { icon: icons.mediumhouse }),
			L.marker([-276.99, 625.89], { icon: icons.mediumhouse }),
			L.marker([-250.93, 660.79], { icon: icons.mediumhouse }),
			L.marker([-243.49, 613.32], { icon: icons.mediumhouse }),
			L.marker([-364.95, 887.44], { icon: icons.mediumhouse }),
			L.marker([-258.84, 869.29], { icon: icons.mediumhouse }),
		])
	},
	{
		id: 12,
		sub_layer: true,
		parent_layer: 9,
		name: "Large House",
		icon: "Icons/large-house.png",
		layer: L.layerGroup([
			L.marker([-396.13, 124.2], { icon: icons.largehouse }),
			L.marker([-433.36, 164.69], { icon: icons.largehouse }),
			L.marker([-463.61, 232.17], { icon: icons.largehouse }),
			L.marker([-432.9, 313.15], { icon: icons.largehouse }),
			L.marker([-464.08, 321.52], { icon: icons.largehouse }),
			L.marker([-399.86, 285.22], { icon: icons.largehouse }),
			L.marker([-369.61, 240.08], { icon: icons.largehouse }),
			L.marker([-352.39, 288.48], { icon: icons.largehouse }),
			L.marker([-284.9, 549.1], { icon: icons.largehouse }),
			L.marker([-288.63, 578.88], { icon: icons.largehouse }),
			L.marker([-289.09, 643.11], { icon: icons.largehouse }),
			L.marker([-245.35, 631.94], { icon: icons.largehouse }),
			L.marker([-245.35, 589.59], { icon: icons.largehouse }),
			L.marker([-330.51, 896.74], { icon: icons.largehouse }),
			L.marker([-281.65, 893.49], { icon: icons.largehouse }),
		])
	},
	{
		id: 13,
		sub_layer: true,
		parent_layer: 9,
		name: "Trailer",
		icon: "Icons/trailer-single.png",
		layer: L.layerGroup([
			L.marker([-588.8, 164.22], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-575.77, 156.31], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-568.79, 143.28], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-551.57, 158.64], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-562.28, 174.92], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-573.45, 570.97], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-554.83, 584], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-550.64, 570.51], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-552.97, 546.77], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-535.75, 590.98], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-535.75, 575.16], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-534.82, 553.29], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-533.42, 538.86], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-515.27, 530.48], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-507.83, 548.63], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-517.6, 570.04], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-515.74, 590.98], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-459.89, 756.66], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
			L.marker([-461.75, 772.95], { icon: icons.doubletrailer }).bindTooltip("Double Trailer"),
			L.marker([-445.93, 777.6], { icon: icons.singletrailer }).bindTooltip("Single Trailer"),
		])
	},
	{
		id: 14,
		sub_layer: true,
		parent_layer: 9,
		name: "Cabin",
		icon: "Icons/cabin.png",
		layer: L.layerGroup([
			L.marker([-607.42, 855.79], { icon: icons.cabin }),
			L.marker([-612.07, 879.52], { icon: icons.cabin }),
			L.marker([-720.97, 908.84], { icon: icons.cabin }),
			L.marker([-728.42, 930.25], { icon: icons.cabin }),
			L.marker([-765.65, 942.82], { icon: icons.cabin }),
			L.marker([-791.71, 936.77], { icon: icons.cabin }),
			L.marker([-821.03, 914.43], { icon: icons.cabin }),
			L.marker([-800.09, 892.55], { icon: icons.cabin }),
		])
	},
	{
		id: 15,
		group_id: 3,
		name: "Building Numbers",
		cluster: false,
		tooltip: false,
		layer: L.layerGroup([
			L.marker([-847.56, 188.42], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2001" + "</b>"
				})
			}),
			L.marker([-819.64, 215.41], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2011" + "</b>"
				})
			}),
			L.marker([-820.1, 233.56], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2012" + "</b>"
				})
			}),
			L.marker([-846.16, 234.03], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2013" + "</b>"
				})
			}),
			L.marker([-857.33, 238.22], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2201" + "</b>"
				})
			}),
			L.marker([-874.55, 235.43], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2202" + "</b>"
				})
			}),
			L.marker([-850.35, 264.74], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2211" + "</b>"
				})
			}),
			L.marker([-850.82, 279.64], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2212" + "</b>"
				})
			}),
			L.marker([-867.57, 263.35], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2213" + "</b>"
				})
			}),
			L.marker([-866.64, 278.71], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2214" + "</b>"
				})
			}),
			L.marker([-889.45, 266.61], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2231" + "</b>"
				})
			}),
			L.marker([-867.11, 313.15], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2222" + "</b>"
				})
			}),
			L.marker([-854.54, 323.85], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2221" + "</b>"
				})
			}),
			L.marker([-815.45, 307.56], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2031" + "</b>"
				})
			}),
			L.marker([-809.86, 327.57], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2032" + "</b>"
				})
			}),
			L.marker([-773.56, 179.58], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2051" + "</b>"
				})
			}),
			L.marker([-765.19, 226.12], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2061" + "</b>"
				})
			}),
			L.marker([-759.6, 240.08], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2062" + "</b>"
				})
			}),
			L.marker([-779.61, 244.27], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2063" + "</b>"
				})
			}),
			L.marker([-761, 265.21], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2071" + "</b>"
				})
			}),
			L.marker([-777.29, 265.21], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2073" + "</b>"
				})
			}),
			L.marker([-758.67, 281.5], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2072" + "</b>"
				})
			}),
			L.marker([-780.08, 281.96], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2074" + "</b>"
				})
			}),
			L.marker([-762.86, 305.23], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2081" + "</b>"
				})
			}),
			L.marker([-763.32, 320.13], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2082" + "</b>"
				})
			}),
			L.marker([-769.84, 334.55], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2083" + "</b>"
				})
			}),
			L.marker([-778.22, 302.44], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2084" + "</b>"
				})
			}),
			L.marker([-778.22, 315.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2085" + "</b>"
				})
			}),
			L.marker([-717.25, 170.74], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2101" + "</b>"
				})
			}),
			L.marker([-724.23, 233.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2111" + "</b>"
				})
			}),
			L.marker([-732.14, 272.19], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2121" + "</b>"
				})
			}),
			L.marker([-731.68, 307.56], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2131" + "</b>"
				})
			}),
			L.marker([-731.68, 328.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2132" + "</b>"
				})
			}),
			L.marker([-690.26, 248.92], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2161" + "</b>"
				})
			}),
			L.marker([-688.4, 303.37], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2172" + "</b>"
				})
			}),
			L.marker([-666.99, 309.89], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2171" + "</b>"
				})
			}),
			L.marker([-681.88, 331.76], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2173" + "</b>"
				})
			}),
			L.marker([-695.84, 365.27], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "2191" + "</b>"
				})
			}),
			L.marker([-660.01, 162.82], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4011" + "</b>"
				})
			}),
			L.marker([-621.38, 281.5], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4031" + "</b>"
				})
			}),
			L.marker([-616.26, 336.88], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4041" + "</b>"
				})
			}),
			L.marker([-816.84, 483.01], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3001" + "</b>"
				})
			}),
			L.marker([-820.57, 505.82], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3002" + "</b>"
				})
			}),
			L.marker([-819.17, 543.05], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3011" + "</b>"
				})
			}),
			L.marker([-769.37, 502.56], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3031" + "</b>"
				})
			}),
			L.marker([-772.63, 557.01], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3041" + "</b>"
				})
			}),
			L.marker([-737.26, 506.75], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3061" + "</b>"
				})
			}),
			L.marker([-722.84, 539.79], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3071" + "</b>"
				})
			}),
			L.marker([-735.4, 594.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3101" + "</b>"
				})
			}),
			L.marker([-689.33, 480.69], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3051" + "</b>"
				})
			}),
			L.marker([-698.17, 530.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3091" + "</b>"
				})
			}),
			L.marker([-613.93, 480.22], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "3081" + "</b>"
				})
			}),
			L.marker([-625.57, 586.33], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5021" + "</b>"
				})
			}),
			L.marker([-573.91, 570.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5022" + "</b>"
				})
			}),
			L.marker([-552.5, 546.77], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5041" + "</b>"
				})
			}),
			L.marker([-535.28, 552.82], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5042" + "</b>"
				})
			}),
			L.marker([-533.42, 538.86], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5043" + "</b>"
				})
			}),
			L.marker([-515.74, 530.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5044" + "</b>"
				})
			}),
			L.marker([-550.64, 570.04], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5053" + "</b>"
				})
			}),
			L.marker([-555.3, 584], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5054" + "</b>"
				})
			}),
			L.marker([-536.21, 574.69], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5051" + "</b>"
				})
			}),
			L.marker([-536.21, 590.98], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5052" + "</b>"
				})
			}),
			L.marker([-508.29, 548.63], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5061" + "</b>"
				})
			}),
			L.marker([-517.6, 570.04], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5062" + "</b>"
				})
			}),
			L.marker([-516.2, 590.52], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "5063" + "</b>"
				})
			}),
			L.marker([-583.22, 385.28], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4071" + "</b>"
				})
			}),
			L.marker([-589.27, 164.22], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4052" + "</b>"
				})
			}),
			L.marker([-575.77, 155.38], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4053" + "</b>"
				})
			}),
			L.marker([-562.28, 174.46], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4054" + "</b>"
				})
			}),
			L.marker([-568.79, 143.28], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4055" + "</b>"
				})
			}),
			L.marker([-551.57, 158.64], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4056" + "</b>"
				})
			}),
			L.marker([-511.55, 175.86], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "4121" + "</b>"
				})
			}),
			L.marker([-502.71, 504.89], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "6001" + "</b>"
				})
			}),
			L.marker([-436.62, 492.32], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "6021" + "</b>"
				})
			}),
			L.marker([-442.21, 112.56], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7001" + "</b>"
				})
			}),
			L.marker([-395.67, 123.73], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7002" + "</b>"
				})
			}),
			L.marker([-465.48, 175.39], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7011" + "</b>"
				})
			}),
			L.marker([-464.08, 200.52], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7012" + "</b>"
				})
			}),
			L.marker([-463.61, 231.7], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7013" + "</b>"
				})
			}),
			L.marker([-464.08, 268], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7021" + "</b>"
				})
			}),
			L.marker([-465.48, 293.6], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7022" + "</b>"
				})
			}),
			L.marker([-464.54, 321.52], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7023" + "</b>"
				})
			}),
			L.marker([-401.25, 163.29], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7041" + "</b>"
				})
			}),
			L.marker([-400.32, 199.13], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7042" + "</b>"
				})
			}),
			L.marker([-434.29, 162.82], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7043" + "</b>"
				})
			}),
			L.marker([-431.97, 191.68], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7044" + "</b>"
				})
			}),
			L.marker([-400.32, 231.7], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7054" + "</b>"
				})
			}),
			L.marker([-401.72, 257.76], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7052" + "</b>"
				})
			}),
			L.marker([-400.79, 285.69], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7053" + "</b>"
				})
			}),
			L.marker([-432.43, 229.84], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7054" + "</b>"
				})
			}),
			L.marker([-433.83, 256.37], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7055" + "</b>"
				})
			}),
			L.marker([-431.97, 281.96], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7056" + "</b>"
				})
			}),
			L.marker([-401.72, 319.2], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7061" + "</b>"
				})
			}),
			L.marker([-404.04, 340.6], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7062" + "</b>"
				})
			}),
			L.marker([-433.36, 313.15], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7063" + "</b>"
				})
			}),
			L.marker([-433.36, 337.81], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7064" + "</b>"
				})
			}),
			L.marker([-350.99, 231.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7091" + "</b>"
				})
			}),
			L.marker([-352.39, 258.69], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7092" + "</b>"
				})
			}),
			L.marker([-352.39, 288.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7093" + "</b>"
				})
			}),
			L.marker([-370.54, 239.61], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7094" + "</b>"
				})
			}),
			L.marker([-371, 278.24], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "7095" + "</b>"
				})
			}),
			L.marker([-369.61, 620.77], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9101" + "</b>"
				})
			}),
			L.marker([-245.35, 589.12], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9041" + "</b>"
				})
			}),
			L.marker([-243.49, 612.86], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9042" + "</b>"
				})
			}),
			L.marker([-245.81, 631.94], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9043" + "</b>"
				})
			}),
			L.marker([-251.4, 660.33], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9044" + "</b>"
				})
			}),
			L.marker([-276.99, 625.89], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9061" + "</b>"
				})
			}),
			L.marker([-289.56, 643.11], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9062" + "</b>"
				})
			}),
			L.marker([-288.63, 578.42], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9071" + "</b>"
				})
			}),
			L.marker([-277.46, 596.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9072" + "</b>"
				})
			}),
			L.marker([-319.81, 635.19], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9081" + "</b>"
				})
			}),
			L.marker([-317.48, 580.74], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9082" + "</b>"
				})
			}),
			L.marker([-393.34, 794.36], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11101" + "</b>"
				})
			}),
			L.marker([-258.84, 868.82], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11032" + "</b>"
				})
			}),
			L.marker([-282.11, 893.49], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11031" + "</b>"
				})
			}),
			L.marker([-330.98, 896.28], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11091" + "</b>"
				})
			}),
			L.marker([-364.95, 887.44], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11092" + "</b>"
				})
			}),
			L.marker([-445.93, 777.6], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11121" + "</b>"
				})
			}),
			L.marker([-459.89, 756.66], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11122" + "</b>"
				})
			}),
			L.marker([-461.75, 772.48], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11123" + "</b>"
				})
			}),
			L.marker([-332.84, 792.96], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11041" + "</b>"
				})
			}),
			L.marker([-308.64, 807.39], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11042" + "</b>"
				})
			}),
			L.marker([-333.77, 839.5], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11051" + "</b>"
				})
			}),
			L.marker([-357.97, 791.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11071" + "</b>"
				})
			}),
			L.marker([-357.04, 839.97], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11081" + "</b>"
				})
			}),
			L.marker([-374.72, 832.05], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "11082" + "</b>"
				})
			}),
			L.marker([-607.42, 855.79], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12021" + "</b>"
				})
			}),
			L.marker([-612.07, 879.06], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12022" + "</b>"
				})
			}),
			L.marker([-721.44, 908.38], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12051" + "</b>"
				})
			}),
			L.marker([-728.42, 929.79], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12052" + "</b>"
				})
			}),
			L.marker([-765.65, 942.35], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12053" + "</b>"
				})
			}),
			L.marker([-792.18, 936.77], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12054" + "</b>"
				})
			}),
			L.marker([-800.56, 892.55], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12055" + "</b>"
				})
			}),
			L.marker([-821.5, 914.43], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "12056" + "</b>"
				})
			}),
			L.marker([-285.37, 549.1], {
				icon: L.divIcon({
					iconSize: "auto",
					html: "<b class='area-text building-numbers' style='transform: translate(-50px, -7.5px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "9073" + "</b>"
				})
			}),
		])
	},
	{
		id: 16,
		group_id: 0,
		name: "Buildings",
		icon: "Icons/building.png",
		layer: L.layerGroup([
			L.marker([-716.92, 170.86], { icon: icons.building }).bindTooltip("Buildings (RC Fire Department)"),
			L.marker([-621.70, 281.84], { icon: icons.building }).bindTooltip("Buildings (Jewelry Store)"),
			L.marker([-615.64, 337.34], { icon: icons.building }).bindTooltip("Buildings (Hospital)"),
			L.marker([-666.45, 310.77], { icon: icons.building }).bindTooltip("Buildings (Three Guys)"),
			L.marker([-687.04, 303.88], { icon: icons.building }).bindTooltip("Buildings (Valley Transit)"),
			L.marker([-730.50, 308.03], { icon: icons.building }).bindTooltip("Buildings (RC Parking Garage)"),
			L.marker([-762.43, 305.72], { icon: icons.building }).bindTooltip("Buildings (News Station)"),
			L.marker([-772.83, 178.90], { icon: icons.building }).bindTooltip("Buildings (RC Bank)"),
			L.marker([-813.88, 306.38], { icon: icons.building }).bindTooltip("Buildings (Dealership)"),
			L.marker([-660.94, 162.41], { icon: icons.building }).bindTooltip("Buildings (Gun Store)"),
			L.marker([-724.22, 232.99], { icon: icons.building }).bindTooltip("Buildings (RC Mod Shop)"),
			L.marker([-847.43, 188.06], { icon: icons.building }).bindTooltip("Buildings (RC Gas-N-Go)"),
			L.marker([-852.66, 324.75], { icon: icons.building }).bindTooltip("Buildings (La Mesa)"),
			L.marker([-819.91, 233.28], { icon: icons.building }).bindTooltip("Buildings (DMV)"),
			L.marker([-778.78, 244.28], { icon: icons.building }).bindTooltip("Buildings (Liberty Cafe)"),
			L.marker([-778.09, 302.01], { icon: icons.building }).bindTooltip("Buildings (Riverside Records)"),
			L.marker([-732.5, 593.88], { icon: icons.building }).bindTooltip("Buildings (Department of Transportation)"),
			L.marker([-623.64, 584.57], { icon: icons.building }).bindTooltip("Buildings (County Jail)"),
			L.marker([-819.09, 542.68], { icon: icons.building }).bindTooltip("Buildings (Waste Center)"),
			L.marker([-579.34, 288.45], { icon: icons.building }).bindTooltip("Buildings (Tool Store)"),
			L.marker([-613.11, 479.61], { icon: icons.building }).bindTooltip("Buildings (Post Office)"),
			L.marker([-436.58, 492.29], { icon: icons.building }).bindTooltip("Buildings (Farms Gas-N-Go)"),
			L.marker([-393, 794.06], { icon: icons.building }).bindTooltip("Buildings (SF Gas-N-Go"),
			L.marker([-376.38, 837.33], { icon: icons.building }).bindTooltip("Buildings (SF Mod Shop)"),
			L.marker([-309.88, 839.85], { icon: icons.building }).bindTooltip("Buildings (SF Parking Garage)"),
			L.marker([-357.70, 806.90], { icon: icons.building }).bindTooltip("Buildings (SF Fire Department)"),
			L.marker([-357.70, 796.56], { icon: icons.building }).bindTooltip("Buildings (Liberty Apparel)"),
			L.marker([-332.83, 786.22], { icon: icons.building }).bindTooltip("Buildings (Barber Shop)"),
			L.marker([-332.74, 826.95], { icon: icons.building }).bindTooltip("Buildings (Rick and John's)"),
			L.marker([-333.39, 834.21], { icon: icons.building }).bindTooltip("Buildings (Spring Bakery)"),
			L.marker([-356.78, 839.85], { icon: icons.building }).bindTooltip("Buildings (Theater)"),
			L.marker([-369.5, 620.56], { icon: icons.building }).bindTooltip("Buildings (Sheriff's Office"),
			L.marker([-857.26, 238.15], { icon: icons.building }).bindTooltip("Buildings (Dragon Shop)"),
			L.marker([-621.70, 263.52], { icon: icons.building }).bindTooltip("Buildings (Gadget Shack)"),
			L.marker([-722.71, 538.90], { icon: icons.building }).bindTooltip("Buildings (RC Gas Depot)"),
			L.marker([-608.45, 636.89], { icon: icons.building }).bindTooltip("Buildings (Chop Shop)"),
			L.marker([-511.07, 175.76], { icon: icons.building }).bindTooltip("Buildings (Redwood Outdoor Camping Store)"),
			L.marker([-687.34, 479.48], { icon: icons.building }).bindTooltip("Buildings (RC Police Department)"),
		])
	},
]