# Property Sort
[![npm](https://img.shields.io/npm/v/property-sort.svg)](https://www.npmjs.com/package/property-sort)

`property-sort` is a function designed to simply setup sorting for your array. `property-sort` lets you setup sorting in alphabetical, numerical ordering and more.


## Getting started

Install the package...

```bash
npm install property-sort
```

## Usage
Plain JavaScript:
```JavaScript
import sortByProperty, { SortDirections, SortOptions } from 'property-sort';
import LanguageCode from 'language-code';

...
let collection: item[] = ...;
let options: SortOptions = {
  direction: SortDirections.Ascending,
  sortKey: ['adress', 'suite'],
  locale: LanguageCode.en,
  numeric: true
};

collection = sortByProperty(collection, options);
```

## Properties

For `sortByProperty`:
| Property    | Type                   | Description                                      |
| -----       | -----                  | -----                                            |
| collection  | `array`                | array to sort                                    |
| options     | `SortOptions`          | options on sorting                               |

for `SortOptions`:
| Property    | Type                   | Description                                      |
| -----       | -----                  | -----                                            |
| sortKey     | `string` or `string[]` | array to sort                                    |
| direction   | `SortDirection`        | Sets sort to ascending/descending order          |
| locale      | [`LanguageCode`](https://github.com/AronssonFredrik/language-code)         | Enum for locale coe (ISO 639-1)                  |
| numeric     | `boolean`              | Used when comparing strings using numeric values |

For `SortDirection`
| Key         | Value                  | Description                                      |
| -----       | -----                  | -----                                            |
| None        | 0                      | Used to reset sorting                            |
| Ascending   | 1                      | Used to sort in ascending order                  |
| Descending  | 2                      | Used to sort in descending order                 |

-----

To be continued (..)
