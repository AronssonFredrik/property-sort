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
import sortByProperty, { SortDirections, SortOptions, SortObject } from 'property-sort';
import LanguageCode from 'language-code';

...
let collection: SortObject<YourItem[]> = ...;
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
sortByProperty(collection: SortObject<UnknownObject[]>, options: SortOptions): SortObject<UnknownObject>
```
| Property    | Type                                                       | Description                                 |
| -----       | -----                                                      | -----                                       |
| collection  | [`SortObject<UnknownObject[]>`](#sortobjectunknownobject-type) | array to sort                               |
| options     | [SortOptions](#sortoptions-interface)                      | options on sorting                          |

### `SortOptions` (interface):
| Property    | Type                                        | Description                                      |
| -----       | -----                                       | -----                                            |
| sortKey     | [SortType](#sorttype-type)                  | Key to sort the array by                         |
| direction   | [SortDirection](#sortdirection-interface)   | Sets sort to ascending/descending order          |
| locale?     | [LocaleType](#localetype-type)              | Used to compare in chosen locale                 |
| numeric?    | `boolean`                                   | Used when comparing strings using numeric values |

### `SortDirection` (interface)
| Key         | Value                  | Description                                      |
| -----       | -----                  | -----                                            |
| None        | 0                      | Used to reset sorting                            |
| Ascending   | 1                      | Used to sort in ascending order                  |
| Descending  | 2                      | Used to sort in descending order                 |

### `SortObject<UnknownObject[]>` (type)
`SortObject` is a generic type, which takes in an array of unknown objects. This will allow you to to work with your own interfaces while benefitting from writing typed.

### `LocaleType` (type)
A standardized nomenclature used to classify languages. The `LocaleType` accepts a wildcard string or an ENUM using [`LanguageCode`](https://github.com/AronssonFredrik/language-code). As a fallback `LocaleType` will be set to "en" (English), this will be done when leaving it as undefined or an invalid `LocaleType`.

### `SortType` (type)
`SortType` is a type which accepts a string or array of strings, which represents the key you would like to sort the array by.

