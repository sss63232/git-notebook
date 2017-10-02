# audiosprite with howler.js

## When to use them 

play short sound effects on a website/web application/game,  there's 2 handy tools which i'd highly recommend: 

Audiosprite (<https://github.com/tonistiigi/audiosprite>) 

howler.js (<https://github.com/goldfire/howler.js>)

## Do audiosprite

Install audiosprite, then command like:

```shell
audiosprite --output sound -f howler *.wav
```

By default, we'll get an sound.ogg, sound.mp3, sound.m4a and sound.ac3 file. You'll also see the above outputs a json file containing the timing information needed for the next step.

## Use howler.js to play sound

We need to include the howler.js library on our page. We can then create a new Howl instance.

```javascript
var effects = new Howl({
    urls: ['effects.ogg','effects.m4a','effects.mp4','effects.ac3'],
    "sprite": {
        "doorbell": [
            0,
            1462.3582766439908
        ],
        "car": [
            3000,
            3266.802721088435
        ],
        "dog": [
            6200,
            1266.802721088435
        ]
    }
});
```

You'll notice the url/sprite information has been copied from the json file that audiosprite output.

To play the actual sounds we call the play function with the name of the sound effect we want to play:

```
effects.play('doorbell');
effects.play('car');
effects.play('dog');

```

There's plenty more functionality detailed on the howler.js github page such as being able to stop/pause, mute, loop, change volume and fade sounds in or out.

> **Note:** The above example was originally written for version 1 of howler.js however version 2 is now out. If you're using version 2 note that **you need to change the'urls'parameter in the example above to'src'.**

```javascript
var effects = new Howl({
    src: ['effects.ogg','effects.m4a','effects.mp4','effects.ac3'],
    "sprite": {
        "doorbell": [
            0,
            1462.3582766439908
        ],
        "car": [
            3000,
            3266.802721088435
        ],
        "dog": [
            6200,
            1266.802721088435
        ]
    }
});
```



## source and reference 

https://www.nomisoft.co.uk/articles/audio-sprites-with-howler-js

