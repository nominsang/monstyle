---
layout: post
title:  "在蒙古文书写模式下的逻辑属性修改"
date:   2024-04-29 15:22:58 +0800
categories: blog
---

自从书写模式（`writing-mode`）确定之后，基于书写模式的其他 CSS 属性的定义就
出现了很多的问题。尤其是有关位置（`position`）和定位的属性，很多都需要重新
定义或者修改。

1. 定位相关属性：
   1. margin 和 padding：两者的简写形式不再使用，默认的解析形式对竖写模式不能
   兼容。如果要使用可以将其分开：例如 `margin: 0 2rem;` 只能写成 `margin-inline: 2rem;`
    和 `margin-block: 0;`；
   2. width 和 height：网页内的该值使用 `inline-size` 和 `block-size`；
   3. float 和 text-align：`float: ` 的值使用 `inline-start` 或 `inline-end`, 
   `text-aligin: `的值则是 `start` 或 `end`；
   4. position：其四个值都需要使用类似 `inset-block-start` 的形式。
2. 媒体查询与自适应设计：原有的媒体查询在竖写模式下 `width` 变为 `height`，相应
的断点值需要重新设计。另外，竖写的版式也同横写版式不同；
3. 滚动条与滚轮：滚动条默认应该出现在浏览器的下方，对应的滚轮的滚动应该时将
页面向左滚动；
4. 链接样式：默认的链接是以链接文字的下方出现横线为提醒，但是在竖写模式下，
则会出现在字的一侧，如果是 `vertical-lr` 模式，线应该出现在字的右侧，相反的
`vertical-rl` 模式下，线需要出现在字的左侧，这些细节需要注意到。

除了以上这些，在适应性最好的 Firefox 浏览器中，还有一个 BUG 没有解决：就是竖写
模式下的 `select` 表单的列表并不会竖向显示，这个问题存在很久了。
