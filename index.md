---
layout: default
title: Home
---
<!-- 首页导航锚点 -->
<div id="home"></div>
<!-- {% include header.html %} -->

<!-- 加 id 让导航可锚点跳转 -->
<section id="projects">
{% include carousel.html %}
<div class="section-spacer"></div>
{% include project_list.html %}

<section id="about">
  <h2>About Us</h2>
  <p>这里填写关于实验室的信息。</p>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>联系方式和其他说明。</p>
</section>
