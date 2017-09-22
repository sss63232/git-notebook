# JavaScript 執行順序

雖然 JavaScript 是單線執行，但有異步的功能，所以有時候特別注意執行順序。要確保 JavaScript 照順序執行有幾種作法：

## callback

```javascript
function do_mission_two() {
  console.log('任務二內容');
}

function do_mission_one(do_mission_two) {
  console.log('任務一內容');
  // 其他代碼執行完畢，最後執行回調函數
  do_mission_two && do_mission_two();
}

do_mission_one(do_mission_two);
```

## 隊列機制

```javascript
function do_mission_two() {
  console.log('任務二內容');
}

function do_mission_one(do_mission_two) {
  // 根據事件循環的機制，不用非得將任務二放到最後面了，但它實際上會最後執行
  do_mission_two && setTimeout(do_mission_two, 0);
  console.log('任務一內容');
}

do_mission_one(do_mission_two);
```

## Promise

```javascript
function do_mission_two() {
  console.log('任務二內容');
}

function do_mission_one(do_mission_two) {
  console.log('任務一內容');

  return new Promise(function(resolve, reject){
    if(typeof do_mission_two === "function"){
      resolve(do_mission_two);
    }else{
      reject(`TypeError: ${want} is not a function`);
    }
  });
}

do_mission_one(do_mission_two).then(function(do_mission_two){
  do_mission_two()
});

do_mission_two("1234").catch(function(error){
  console.log(error);
});
```