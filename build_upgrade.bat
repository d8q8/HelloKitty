@echo off
if exist error.txt  del error.txt /f /q
echo 正在升级项目并编译项目和引擎...[完成后自动关闭本窗口,若发错误,日志将输出到error.txt内]
egret upgrade