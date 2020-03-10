# Get IP through WebRTC

## get private IP 方法(Safari 不適用)

```javascript
getPrivateIP() {
    return new Promise(r => {
        var w = window,
            a = new(w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({
                iceServers: []
            }),
            b = () => {};
        a.createDataChannel("");
        a.createOffer(c => a.setLocalDescription(c, b, b), b);
        a.onicecandidate = c => {
            try {
                c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
            } catch (e) {}
        }
});

getPrivateIP()
    .then(
        ip=>{
            // ip = "192.168.xxx.xxx"
            // then you can do what you what
        });
```

## 在 getPrivateIP 的 Promise 增加 reject

```javascript
getPrivateIP() {
    return new Promise(
        (res, rej) => {
            var w = window,
                a = new(w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({
                    iceServers: []
                }),
                b = () => {};
            a.createDataChannel("");
            a.createOffer(c => a.setLocalDescription(c, b, b), b);
            a.onicecandidate = c => {
                try {
                    c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(res)
                } catch (e) {
                    rej(e);
                }
            }
        });
}

getPrivateIP()
    .then(
        ip => {
            // do something
        })
    .catch(
        reason => {
            // error handler
        });
```
## 參考資料

https://stackoverflow.com/questions/46925857/get-the-client-ip-address-with-javascript-on-safari
