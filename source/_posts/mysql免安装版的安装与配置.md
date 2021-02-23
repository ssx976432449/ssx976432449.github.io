---
title: mysql免安装版的安装与配置
date: 2021-02-23 17:01:13
desc: 本篇主要写mysql免安装版，也就是压缩包的安装与配置。
categories:
	- 数据库
tags:
	- mysql数据库
---
# 一、Mysql的安装

　　Mysql是一种关系数据库管理系统，所使用的SQL语言是用于访问数据库最常用的标准化语言。其特点为体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，在 Web应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。

　　在本文中，主要以Mysql免安装版为例，说明Mysql的安装与配置。

## 1.1下载安装包：

　　在[Mysql官网](https://www.mysql.com/)中，点击“DOWNLOADS”。
　　跳转到对应界面后往下拉，如下图，框起来的就是Mysql社区版，点击链接进入页面。
　　选择Mysql社区版（MySQL Community Server）
　　下载免安装版即可。下载完成后解压在你想存放的目录，路径中避免出现中文名。

# 二、Mysql的配置

## 2.1 Mysql的配置：

　　以<span style="color:red;">管理员身份</span>打开CMD，如果不是管理员身份打开，后续部分命令会出现权限问题。
　　转到mysql的bin目录下。
　　安装mysql的服务：mysqld --install
　　初始化mysql：mysqld --initialize --console
　　初始化完成后，会产生一个随机密码，用于接下来的登录。
　　开启mysql服务：net start mysql
　　登录验证mysql是否安装成功。（上面产生的随机密码不包括前面符号前面的空格，否则会登陆失败）登陆成功如下图所示。

## 2.2 修改密码：

　　也就是修改上面随机产生的密码，便于我们登录mysql。
　　修改密码（登录进入mysql中修改）：alter user 'root'@'localhost' identified by '123456';
　　再次登录验证修改的密码。

## 2.3 设置系统全局变量：

　　为了方便不需要进入mysql的bin目录下就能使用mysql命令，我们需要设置一个全局变量：
　　“我的电脑”->“属性”->“高级系统设置”->“环境变量”，新建一个系统变量，变量名为mysql，变量值为mysql的根目录。
　　把新建的mysql变量添加到Path路径变量中，点击确定即可。
　　配置完成后，不需要再进入到mysql根目录下就能使用mysql命令。

## 2.4 创建配置文件：

　　在mysql根目录下创建一个ini或cnf配置文件，里面写的代码是mysql的一些基本配置。
　　创建完成后，免安装版的Mysql就安装并配置完成了。

　　<span class="hideWord">Ohhhhhhhh</span>