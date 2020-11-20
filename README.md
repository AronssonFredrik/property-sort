# Property Sort
[![npm](https://img.shields.io/npm/v/property-sort.svg)](https://www.npmjs.com/package/property-sort)

`property-sort` provides a method that lets you setup sorting in alphabetical, numerical ordering and more. No more hassle sorting your arrays.

## Getting started

Install the package...

```bash
npm install property-sort
```

## Usage
### Plain TypeScript:
```TypeScript
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

### `sortByProperty` (method):
```Javascript
sortByProperty(collection: any[], options: SortOptions): any[]
```
| Property    | Type                   | Description                                      |
| -----       | -----                  | -----                                            |
| collection  | `array`                | array to sort                                    |
| options     | `SortOptions`          | options on sorting                               |

### `SortOptions` (interface):
| Property    | Type                   | Description                                      |
| -----       | -----                  | -----                                            |
| sortKey     | `string` or `string[]` | array to sort                                    |
| direction   | `SortDirection`        | Sets sort to ascending/descending order          |
| locale      | [`LanguageCode`](https://github.com/AronssonFredrik/language-code)         | Enum for locale coe (ISO 639-1)                  |
| numeric     | `boolean`              | Used when comparing strings using numeric values |

### `SortDirection` (interface)
| Key         | Value                  | Description                                      |
| -----       | -----                  | -----                                            |
| None        | 0                      | Used to reset sorting                            |
| Ascending   | 1                      | Used to sort in ascending order                  |
| Descending  | 2                      | Used to sort in descending order                 |
