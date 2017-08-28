# jbweb testing server 建置

## 基礎環境

[Node.js](https://nodejs.org/en/)
[JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
[SmartFoxServer 2X Community Edition v2.13](http://www.smartfoxserver.com/download/sfs2x#p=installer)

## 備份檔

docker_bak 與 table_simulator 解壓縮到 D 槽

## 安裝 docker 

### 安裝 docker for windows
* 進 BIOS 開啟 visualisation
* 開啟 hyper-v, containers
![](https://i.imgur.com/f60qi7r.png)
* [Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

### 安裝完成後

* share D 槽
![](https://i.imgur.com/O9glqVd.png)

* 安裝 Kitematic 並移動到 docker 目錄下
![](https://i.imgur.com/aWTnsD2.png)


## 安裝 image

* CentOS
* SmartFox

用 cmd 執行 build
![](https://i.imgur.com/jM4tWjm.png)

## 安裝 DB

把 `D:\docker_bak\db\share` 裡的 data 解壓縮到同目錄
修改 run.bat 中的目錄位置後，用 cmd 執行。

### 檢查 DB 狀況

執行 dbvis_windows-x64_9_5_7
![](https://i.imgur.com/1q2KlJ2.png)
帳密： jbweb / jbweb

## 安裝 MQ

1. https://hub.docker.com/r/rmohr/activemq/
2. 檢查： 打開 `localhost:8161`
3. 帳密： admin / admin
4. 看 queue 有沒有進來
5. 設定 docker MQ port
![](https://i.imgur.com/Du8f8uM.png)


## 安裝 game-server, result-proxy, result-server 

![](https://i.imgur.com/YJhDYC0.png)
 
* 有 Dockerfile，就要先執行 build 再 run
* 修改 run.bat 中的目錄位置後，用 cmd 執行

### 安裝 game-server

1. 用 cmd 執行 build
1. 修改 run.bat 中的目錄位置後，用 cmd 執行

### 安裝 result-proxy

1. 修改 run.bat 中的目錄位置後，用 cmd 執行

### 安裝 reulst-server

1. 用 cmd 執行 build
1. 修改 run.bat 中的目錄位置後，用 cmd 執行

## 設定 SmartFox 

### 參照 result-server 設定

* 把 `D:\docker_bak\result-server\share\SFS2X\extensions` 
的 GameExtension, context 複製到 
`C:\Users\newtchen.JUMBO\SmartFoxServer_2X\SFS2X\extensions`
* 把 `D:\docker_bak\result-server\share\SFS2X\extensions\__lib__` 
裡的所有東西複製到 
`C:\Users\newtchen.JUMBO\SmartFoxServer_2X\SFS2X\extensions\__lib__`
* 把 `D:\docker_bak\image\Smartfox\attach_file\zones`
的 JDB_ZONE_GAME.zone.xml 複製到
`C:\Users\newtchen.JUMBO\SmartFoxServer_2X\SFS2X\zones`

### 修改 SmartFox 設定

#### 服務改成 manual

![](http://i.imgur.com/NF3fJgI.png)


#### 執行 SmartFox

`C:\Users\newtchen.JUMBO\SmartFoxServer_2X\SFS2X\sfs2x.bat`

#### 進入後台

localhsot:8080 
帳密一樣

修改設定如下：
![](https://i.imgur.com/s7wdrpm.png)

重啟 SmartFox

### 開啟測試 server 簡要流程

關閉防火牆
開啟 docker 中的 DB, MQ
修改 result-proxy 中設定檔的 ip 位置
開啟 SmartFox
開啟 result-proxy, result-server
開啟 simulator
修改html_game 專案 loginData 的 ip 位置
開啟專案