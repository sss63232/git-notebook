## CSS Positioning Explained By Building An Ice Cream Sundae
### The Ice Cream Sundae as HTML
![clipboard](http://i.imgur.com/Hr9CDDO.png)
```html
 <div class="fullSundae">
  <div class="cherry"></div>
  <div class="whippedCream"></div>
  <div class="iceCreamScoop"></div>
  <div class="iceCreamScoop"></div>
  <div class="glass">
    <div class="iceCreamScoop"></div>
    <div class="iceCreamScoop"></div>
    <div class="iceCreamScoop"></div>
  </div>
</div>
```
+ These 5 scoops have a total height of 500 pixels 
+ Our fullSundae div, in that case, would have a height of 500px to indicate that it can only handle those 5 scoops, and no more.
+ This is an example of the **default position, static**. We use this to show that the height is unrelated to any container div.

### Next, just give each iceCreamScoop a height of 100px 

+ they would match the height of the fullSundae div.
+ the glass div would be 300px by default.

### Let's look at it another way.

+ the glass div contains three of the five scoops
+ the glass div is 60% of the height if the fullSundae div

### Opportunity for **position relative**

+ You can set the glass div to position relative and give it a height of 60%. 
+ The glass div will look at the height of the entire fullSundae div, and take up 60% of that space. 
+ The percentage is relative to the height of the container div, which was stated explicitly as 500px.

#### Set each iceCreamScoop within the glass div to **position relative** 

+ each scoop will calculate its height based on the height of the glass div. 
+ The glass can fit three scoops, so each scoop should have a height of 33.3%.

```CSS
.fullSundae{
  height: 500 px;
  postition: static;
}

//選擇父元素為 fullSundae的 iceCreamScoop元素
.fullSundae > iceCreamScoop{
  height: 100 px;
} 

.glass{
  position: relative;
  height: 60%;
}

// 選擇 .glass內的 iceCreamScoop元素
.glass .iceCreamScoop{
  height: 33.3%;
  position: relative;
}
```
### Position Fixed
+ A position fixed element will be stuck in place no mattr now far the body extends.
+ In ice cream terms, this is the **whipped cream** on top.
+ No matter how many ice cream scoops that you try and stack, the whipped cream will still be on top, with the exact same relationship to the scoops. It is positioned relative to the body, not to the containing div.
+ The whipped cream is independent of the series of ice cream scoops. The amount of whipped cream does not affect the maximum number of scoops that you can have in the full sundae. It stays in a consistent spot on the page.
+ You commonly see position fixed in headers and footers. These are the elements that stick in position, even when you scroll the page or div.
### Position Absolute: The Cherries
+ you can put cherries almost anywhere in this ice cream sundae.
+ they don't obey the same rules as the position static and position relative elements.
+ you can remove them without disturbing any other elements.
#### Key components of **position absolute**
+ Position absolute elements do not disturb the placement of other elements, but you must state their position explicitly. 
+ If you do not, they default to the upper left corner of the body. 
+ Or, if one of their parents has position relative, they go to the top left corner of that div.
#### Check out this cherry-filled sundae
![clipboard](http://i.imgur.com/PahSx2w.png)
+ There are cherries added in a bunch of places, and they do not disturb the flow of the other elements. 
+ you cannot stack the cherries like you stack ice cream scoops. Cherries do not stack. You must place each explicitly.
#### position absolute is calculated based on the nearest parent that is position relative
If there is no parent that is position relative, it is calculated based on the entire body. So, in the case above, the cherries within the glass are positioned based on the height of the glass div, not based on the height of the fullSundae div.


## Source:
[CSS Positioning Explained By Building An Ice Cream Sundae](https://medium.freecodecamp.com/css-positioning-explained-by-building-an-ice-cream-sundae-831cb884bfa9#.ditucydqb)