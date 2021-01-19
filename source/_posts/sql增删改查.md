---
title: sql的增删改查
date: 2020-06-03 16:30:00
desc: 记录sql基本的增删改查以及工作中遇到的有关增删改查的操作
categories: 
    - 数据库
tags: 
    - sql
    - 增删改查
---
# 1.增（insert into）：<font color="#9932CC"></font>
> **语法：**
> <font color="#9932CC">insert into</font> table_name(column1,column2,column3,...) <font color="#9932CC">values</font> (value1,value2,value3...)
> **例子：**
> insert into table_name(id,name,age) values ("1","孙小泡","18")
# 2.删（delete）：
> **语法：**
> <font color="#9932CC">delete from</font> table_name <font color="#9932CC">where</font> column=value

　　没有where是删除表中所有行，表的结构、属性、索引保持不变！
> **例子：**
> delete from user where id=1
# 3.改（update）：
> **语法：**
> <font color="#9932CC">update</font> table_name <font color="#9932CC">set</font> column1=value1,column2=value2,... <font color="#9932CC">where</font> column=value
> **例子：**
> update user set name="小泡“ where id=1
# 4.查（select）：
> **语法：**
> <font color="#9932CC">select</font> column_name,column_name <font color="#9932CC">from</font> table_name <font color="#9932CC">where</font> column=value

　　可以用“\*”代替要查询的所有字段，但是，“\*”与列出所有表名比起来会导致查询效率的降低，因为数据库还需要从系统表中查询该表的所有字段。
> **例子：**
> select * from user where id=1