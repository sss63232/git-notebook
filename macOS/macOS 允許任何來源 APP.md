# macOS 允許任何來源 APP

關閉 Gatekeeper

```shell
sudo -s

sudo spctl --master-disable

```



重新開啟 Gatekeeper

```shell
sudo spctl --master-enable
```

