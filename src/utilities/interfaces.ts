export interface Beer {
abv: number
attenuation_level: number
boil_volume: {unit: string, value: number}
brewers_tips: string
contributed_by: string
description: string
ebc: number
first_brewed: string
food_pairing: string[]
ibu: number
id: number
image_url: string
ingredients: {hops: Hops[], malt: Malt[], yeast: string}
method:{fermentation: Fermintation , mash_temp: MashTemp , twist: any}
name: string
ph: number
srm: number
tagline: string
target_fg: number
target_og: number
volume: AmountOrTemp
}

export interface Hops {
  add: string
  amount: AmountOrTemp
  attribute: string
  name: string
}

export interface Malt {
  amount: AmountOrTemp
  name: string
}

export interface Fermintation {
  temp: AmountOrTemp
}

export interface MashTemp {
  duration: number
  temp: AmountOrTemp
}

export interface AmountOrTemp {
  unit: string
  value: number
}

export interface CartBeer {
  [key: string]: number
}
