@echo off
if exist error.txt  del error.txt /f /q
echo 正在编译项目...[完成后自动关闭本窗口,若发错误,日志将输出到error.txt内]
cd C:\Users\d8q8\AppData\Roaming\npm\node_modules\egret\tools\bin
egret build -e