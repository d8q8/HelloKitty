@echo off
if exist error.txt  del error.txt /f /q
echo ����������Ŀ��������Ŀ������...[��ɺ��Զ��رձ�����,��������,��־�������error.txt��]
cd..
egret build HelloKitty -e
cd HelloKitty