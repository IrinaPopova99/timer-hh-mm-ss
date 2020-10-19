# timer-hh-mm-ss

This is the function which implements countdown timer for sites.

## Getting Started

It is just a Javascript file. You can copy the code and paste into your code or download this file. See deployment for notes on how to deploy the project on a live system.

## Deployment

Call function `TimerHHMMSS` and pass 2 parameters:

#### idBlock

This is the id of the block where the timer is.
In your HTML it can be like:

```
<div class="timer-numbers" id="timer">
  <span class="hours">18</span>
  <span>:</span>
  <span class="minutes">20</span>
  <span>:</span>
  <span class="seconds">11</span>
</div>
```

then idBlock: `timer`.
Besides that, please note where numbers are. `span` has a class name and is used in a function. You should name your classes for blocks with numbers as well or change the function here:

```
hours = timer.querySelector('.hours'),
minutes = timer.querySelector('.minutes'),
seconds = timer.querySelector('.seconds'),
```

#### deadline

This is the end date.

