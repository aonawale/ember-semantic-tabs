# ember-semantic-tabs

The missing ui-tab component in ember-semantic addon.

## Installation

  `ember install ember-semantic-tabs`

## Usage

```
  {{ui-tab text="All" id="all" selectedTab=selectedTab onSelect=(action (mut selectedTab))}}
```

with block

```
  {{#ui-tab id="all" selectedTab=selectedTab onSelect=(action (mut selectedTab))}}
    All
  {{/ui-tab}}
```

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
