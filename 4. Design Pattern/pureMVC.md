# pureMVC

主要有三個概念

【Model, Proxy】 負責將數值變數存起來, 當數值被更改時, 就發送通知, 然後就什麼事也不做了。
【View,Mediator】 一個Mediator就對映一個View(視覺元件), 當View做了某件事情後, 發送通知。
【Controller,Command】 當 Mediator 被通知到後, 就執行事件做作好的Command



