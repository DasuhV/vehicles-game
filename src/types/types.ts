export type Vehicle = {
	id: string | number
	name: string
	title: string
	titleShort: string
	description: string
	icons: IconsVehicle
	level: number|string
	tags: [string]
	nation: Nation
	nationName: string
	typeName: string
	type: VehicleType
	isPremium: boolean
	isClan: boolean
	isSpecial: boolean
	ttc: [VehicleTTC]
	hasGoldPrice: boolean
	modernizations: [VehicleModernization]
	consumables: [VehicleConsumable]
}

type IconsVehicle = {
	large: string
	small: string
	default: string
	medium: string
	contour: string
	contourAlive: string
	contourDead: string
	localSmall: string
}

type Nation = {
	name: string
	title: string
	color: string
	icons: NationIcons
}

type NationIcons = {
	default: string
	tiny: string
	small: string
	medium: string
	large: string
}

type VehicleType = {
	name: string 
	title: string
	titleShort: string
	icons: IconsVehicleClass
}

type IconsVehicleClass = {
	default: string
	special: string
	normal: string
	elite: string
	premium: string
}

type VehicleTTC = {
	title: string
	description: string
	unit: string
	name: string
	value: number
}

type VehicleModernization = {
	id: string | number
	title: string
	titleShort: string
	description: string
	icons: ItemIcons
	name: string
	tags: [string]
	prices: Prices
	ttc: [TTC]
	typeName: string
	type: ItemType
	groupName: string
	group: ItemType
	slot: number
	restrictions: ItemRestrictions
	modernizationSlot: string
}
type ItemIcons= {
default: string
extra: string
}
type ItemTypeIcons ={
default: string
}
type ItemType = {
name: number|string
title: string
icons: ItemTypeIcons
}
type ItemRestrictions = {
subtype: [string]
levels: [number]
}
type VehicleConsumable = {
	id: string | number
	title: string
	titleShort: string
	description: string
	icons: ItemIcons
	name: string
	tags: [string]
	prices: Prices
	ttc: [TTC]
	typeName: string
	type: ItemType
	groupName: string
	group: ItemType
	slot: number
	restrictions: ItemRestrictions
	consumableSlot: string
}
type TTC= {
name: string
value: string
title: string
}
type Prices = {
	credit: number
	gold: number
	xp: number
}