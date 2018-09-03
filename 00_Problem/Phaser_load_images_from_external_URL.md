# Phaser, load images from external URL

## set crossOrigin to 'anonymous'

```javascript
    this.load.crossOrigin = 'anonymous';
    this.load.image('imgur', "https://i.imgur.com/Yf9JDFK.jpg");
```