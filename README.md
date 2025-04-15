# 个人主页

我的个人主页

## 预览

在线预览：[https://Konako39.github.io/My.github.io](https://Konako39.github.io/My.github.io)

## 更改颜色方案

编辑 `css/styles.css` 文件中的颜色变量:

- 主要颜色: `#3498db` (蓝色)
- 次要颜色: `#2c3e50` (深蓝色)
- 渐变背景: `linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)`

### 添加项目

在 `index.html` 中的项目部分，复制项目卡片模板并更改内容：

```html
<div class="project-card">
    <img src="path/to/your/project-image.jpg" alt="项目名称">
    <h3>项目名称</h3>
    <p>项目描述...</p>
    <div class="project-links">
        <a href="#" target="_blank"><i class="fab fa-github"></i> 源代码</a>
        <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i> 演示</a>
    </div>
</div>
```

### 添加或修改技能

在 `index.html` 中的技能部分，编辑技能列表：

```html
<div class="skill-category">
    <h3>类别名称</h3>
    <ul class="skill-list">
        <li>技能 1</li>
        <li>技能 2</li>
        <!-- 添加更多技能... -->
    </ul>
</div>
```

## 部署到GitHub Pages

将仓库命名为 `你的用户名.github.io`（这将自动启用GitHub Pages）