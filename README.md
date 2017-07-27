# ember-handlebars-conditions

It is a Ember addon to allow more flexibility on the conditional manipulation in handlebars (such as: equal, less than, greater than, isEmpty, etc)

## Installation

* ember install ember-handlebars-conditions

## Usage
|Helper|Logic|Syntax|Remarks
|:---|:---|:---|:---|
|eq|`if (a==b)`|`{{ if (eq a b) }}`|Non-strict comparison|
|seq|`if (a===b)`|`{{ if (seq a b) }}`|Strict comparison|
|not|`if (!a)`|`{{ if (not a) }}`|---|
|gt|`if (a > b)`|`{{ if (gt a b) }}`|---|
|gte|`if (a >= b)`|`{{ if (gte a b) }}`|---|
|lt|`if (a < b)`|`{{ if (lt a b) }}`|---|
|lte|`if (a <= b)`|`{{ if (lte a b) }}`|---|
|and|`if (a && b)`|`{{ if (and a b) }}`|---|
|or|<code>if (a &#124;&#124; b)</code>|`{{ if (or a b) }}`|---|
|xor|<code>if (!a && b &#124;&#124; !b && a)</code>|`{{ if (xor a b) }}`|---|
|isBlank|`if (Ember.isBlank(a))`|`{{ if (isBlank a) }}`|---|
|isEmpty|`if (Ember.isEmpty(a))`|`{{ if (isEmpty a) }}`|---|
|isNone|`if (Ember.isNone(a))`|`{{ if (isNone a) }}`|---|

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
