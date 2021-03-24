# What is this?

Great moving with bgs
and great transition

# Installation

`git clone https://github.com/vonelaf/djakle.git`

Then...

```
import djakle from 'djakle';

djak({
    to: "div",
    moveX: 250,
    moveY: 100,
    easing: 'ease',
    bg: 'red',
    duration: 3
})
```

## Options

Djakle supports 5 options, 4 of which are optional:

* *to* - _string | selector_ (Defaults to NaN)
* *moveX* - _number | in px_ (Defaults to 0)
* *moveY* - _number | in px_ (Defaults to 0)
* *bg* - _string | bgColor_ (Defaults to NaN)
* *easing* - _string | easing(in css with transition)_ (Defaults to NaN)
* *duration* - _number | in seconds_ (Defaults to 1)
