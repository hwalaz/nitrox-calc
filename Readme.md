# Nitrox Calc

Enriched Air Nitrox calculator module

[![Latest Version on NPM](https://img.shields.io/npm/v/:nitrox-calc.svg?style=flat-square&logo=npm)](https://npmjs.com/package/:nitrox-calc) ![Berlin](https://img.shields.io/badge/Built%20in-Berlin-blue.svg?logo=javascript) ![Repo_size](https://img.shields.io/github/repo-size/hwalaz/nitrox-calc.svg?color=green&style=flat-square) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

## Feature

- Atmospheres absolute of pressure (ATA)
- Maximum operating depth (MOD)
- Fraction of Oxygen (FO2)
- Fraction of Nitrogen (FN2)
- Best EAN Mix
- Equivalent air depth (EAD)
- Actual partial pressure Oxygen

## Install

`npm i nitrox-calc`

### Using CommonJS

`const Nitrox = require('nitrox-calc')`

### Using ES6 modules

`import Nitrox from 'nitrox-calc'`

## Usage

### Atmospheres absolute of pressure (ATA)

_Atmosphere absolute of pressure (ATA) is the atmospheric pressure at sea level._

Return the ATA for a given depth expressed in meter

#### Syntax

`Nitrox.ata(depth)`

#### Example

`Nitrox.ata(22)`

### Maximum operating depth (MOD)

_The Maximum Operating Depth (MOD) is the maximum safe depth at which a given nitrox mixture can be used. MOD depends on the allowed partial pressure of oxygen (ppO2), which is related to exposure time and the acceptable risk assumed for central nervous system oxygen toxicity._

Return the Maximum operating depth (MOD) for a given Partial Pressure of Oxygen (ppO2) and Enriched Air Mix (EAN)

#### Syntax

`Nitrox.mod(ppO2,EAN)`

#### Example

`Nitrox.mod(1.4,32)`

### Fraction of Oxygen (FO2)

_The Fraction of Oxygen (FO2) contained in a Nitrox Mix_

Return the Fraction of Oxygen (FO2) for a given Enriched Air Mix (EAN)

#### Syntax

`Nitrox.fo2(EAN)`

#### Example

`Nitrox.fo2(32)`

### Fraction of Nitrogen

_The Fraction of Nitrogen (FN2) contained in a Nitrox Mix_

Return the Fraction of Nitrogen (FN2) for a given Enriched Air Mix (EAN)

#### Syntax

`Nitrox.fn2(EAN)`

#### Example

`Nitrox.fn2(32)`

### Enriched Air Percentage

_The Enriched Air Percentage (EAN) contained in a Mix_

Return the Enriched Air Mix (EAN) for a given Fraction of Oxygen (FO2)

#### Syntax

`Nitrox.ean(FO2)`

#### Example

`Nitrox.ean(0.32)`

### Best mix

_The composition of a nitrox mix can be optimized for a given planned dive profile. This is termed "Best mix", for the dive, and provides the maximum no-decompression time compatible with acceptable oxygen exposure._

Return the Best Mix (BM) for a given Partial Pressure of Oxygen (ppO2) and a depth (ATA)

#### Syntax

`Nitrox.bestMix(ppO2, ATA)`

#### Example

`Nitrox.bestMix(1.4,32)`

### Equivalent air depth (EAD)

_The equivalent air depth for a given nitrox mix and depth is the depth of a dive when breathing air that would have the same partial pressure of nitrogen._

Return the equivalent air depth (EAD) for a given depth expressed in meter and Fraction of Nitrogen (FN2)

#### Syntax

`Nitrox.ead(Depth,FN2)`

#### Example

`Nitrox.ead(10,0.68)`

### Actual partial pressure of Oxygen

_The Actual partial pressure of Oxygen increase with depth_

Return the actual partial pressure Oxygen (ppO2) for a given depth and Fraction of Oxygen (FO2)

#### Syntax

`Nitrox.appO2(ATA,FO2)`

#### Example

`Nitrox.appO2(2,0.32)`

## Examples

List of [sample](./sample.js) usage

## Tests

Tested with [Jest](https://jestjs.io/), check the [tests](./index.test.js)

## Warning

The calculations produced by this application should only be used by Nitrox divers certified by a recognized SCUBA Diving training.

This calculator provides information about gas use in scuba diving. UNDER NO CIRCUMSTANCES is there any implication that any gas mixture is safe or even life supporting at any depth. If you have not recived training in technical scuba diving, Nitrox, Trimix or Heliox you should not attempt to use any of these results. Improper use of gasses in diving can result in injury or DEATH.
