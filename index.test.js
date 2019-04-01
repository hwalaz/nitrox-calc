const Nitrox = require("./index");

test("ATA at 10m ATA is 2 bar", () => {
  expect(Nitrox.ata(10)).toBe(2.0);
});

test("Mod with ppO2 1.4 and EAN 32 is 33.75 m", () => {
  expect(Nitrox.mod(1.4, 32)).toBe(33.75);
});

test("FO2 with EAN 32 FO2 is 0.32", () => {
  expect(Nitrox.fo2(32)).toBe(0.32);
});

test("FN2 with EAN 32 FN2 is 0.68", () => {
  expect(Nitrox.fn2(32)).toBe(0.68);
});

test("EAN if FO2 is 0.32 EAN is 34", () => {
  expect(Nitrox.ean(0.34)).toBe(34);
});

test("Best Mix with ppO2 1.4 and 4.4 bar (34m) is EAN 32", () => {
  expect(Nitrox.bestMix(1.4, 4.4)).toBe(32);
});

test("EAD at 30 m (4 ATA) with FN2 0.68 (EAN 32) is 24.4m", () => {
  expect(Nitrox.ead(30, 0.68)).toBe(24.4);
});

test("Actual ppO2 at 2 ATA (10m) with FO2 0.32 (EAN 32) is 24.4m", () => {
  expect(Nitrox.appO2(2, 0.32)).toBe(0.64);
});
