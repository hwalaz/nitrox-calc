const Nitrox = {
  // Atmospheres absolute of pressure (ATA) = Depth (in meters of sea water) ÷ 10 + 1
  ata: depth => Number((depth / 10 + 1).toFixed(2)),
  // Maximum operating depth (MOD) = 10 x [(ppO2/FO2)-1]
  mod: (ppO2, ean) => Number((10 * (ppO2 / (ean / 100) - 1)).toFixed(2)),
  // Fraction of Oxygen (FO2) = Enriched Air Percentage (EAN) ÷ 100
  fo2: ean => Number((ean / 100).toFixed(2)),
  // Fraction of Nitrogen (FN2) = 100 - Enriched Air Percentage (EAN)
  fn2: ean => Number(((100 - ean) / 100).toFixed(2)),
  // Enriched Air Percentage (EAN) = Fraction of Oxygen (FO2) * 100
  ean: FO2 => Number((FO2 * 100).toFixed(0)),
  // Best Mix = Partial Pressure of Oxygen (ppO2) ÷ Atmospheres absolute of pressure (ATA)
  bestMix: (ppO2, ata) => Number(((ppO2 / ata) * 100).toFixed(0)),
  // Equivalent air depth (EAD) = (Depth + 10) * Fraction of Nitrogen (FN2) ÷ 0.79 − 10
  ead: (depth, fn2) => Number((((depth + 10) * fn2) / 0.79 - 10).toFixed(1)),
  // Actual partial pressure Oxygen = Atmospheres absolute of pressure (ATA)  * Fraction of Oxygen (FO2)
  appO2: (ata, fo2) => ata * fo2
};

module.exports = Nitrox;
