---
title: Java Scanner类
date: 2021-02-01 12:53:00
desc: 平时刷leetcode都是测试样例在function参数里，到笔试的时候就要自己从控制台输入- -所以学习一下java的控制台输入
categories: 
	- java
tags: 
    - Scanner类
---

　　**Java Scanner类**
```
Scanner sc = new Scanner(System.in);
```
　　这是一个最简单的数据输入，在java.util.Scanner中，通过Scanner类来获取输入，并可以通过该类下的next()和nextLine()方法获取输入的字符串。读取前一般使用hasNext()和hasNextLine()判断是否还有输入的数据。