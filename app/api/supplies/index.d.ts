const suppliesList = [
  "ID_card",
  "backpack",
  "blanket",
  "candle",
  "candy",
  "canned_tuna",
  "chocolate_bar",
  "compass",
  "first_aid_kit",
  "flashlight",
  "heat_pack",
  "instant_noodles",
  "knife",
  "lighter",
  "map",
  "mask",
  "matches",
  "radio",
  "rope",
  "sleeping_bag",
  "solid_fuel",
  "thermal_blanket",
  "tissue",
  "toiletries",
  "towel",
  "umbrella",
  "water",
  "water_purification_tablets",
  "whistle",
  "ziplock_bag",
] as const;

type SuppliesType = Record<(typeof suppliesList)[number], boolean>;
