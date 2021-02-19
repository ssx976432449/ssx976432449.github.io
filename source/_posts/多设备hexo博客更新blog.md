---
title: 多设备hexo博客更新blog
date: 2021-02-02 13:03:00
desc: 自己笔记本和台式都部署了hexo博客，在不迁移博客的同时又在两个设备上同时更新博客。
categories: 
	- hexo
tags: 
    - 多设备更新blog
---
　　暂时没空写怎么部署两台同时更新blog，先空着吧，把更新要用的操作先记录下来。
　　**更新、提交blog的操作**
　　按顺序依次执行：<span class="hideWord">下面代码中的hexo换成自己的远端分支名称</span>
```
▷ git pull
▷ 写blog
▷ git add -A
▷ git commit -m "..."
▷ git push origin hexo
▷ hexo clean
▷ hexo g
▷ hexo s
▷ hexo d
```