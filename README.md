# 个人主页

这是一个可以部署在GitHub Pages上的个人主页模板。它具有响应式设计，并包含多个部分来展示你的个人信息、项目和技能。

## 预览

在线预览：[https://你的用户名.github.io](https://你的用户名.github.io)

## 功能

- 响应式设计，适配所有设备屏幕
- 干净现代的界面
- 平滑滚动效果
- 项目展示部分
- 技能展示
- 联系表单

## 如何使用

1. Fork 这个仓库到你的GitHub账户
2. 克隆仓库到本地
   ```
   git clone https://github.com/你的用户名/你的用户名.github.io.git
   ```
3. 编辑 `index.html` 文件，替换示例内容为你的个人信息
4. 根据需要修改 `css/styles.css` 中的样式
5. 将你的项目图片放在 `images` 文件夹中 (需要创建)
6. 提交并推送更改到GitHub
   ```
   git add .
   git commit -m "个性化我的个人主页"
   git push origin main
   ```
7. 启用GitHub Pages:
   - 访问你的仓库设置
   - 向下滚动到GitHub Pages部分
   - 选择 `main` 分支作为源
   - 点击保存
   - 等待几分钟，你的站点将被部署

## 自定义

### 更改颜色方案

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

要将此网站部署到GitHub Pages，你需要:

1. 将仓库命名为 `你的用户名.github.io`（这将自动启用GitHub Pages）
2. 或者，将其命名为任何其他名称，然后在仓库设置中启用GitHub Pages

## 许可

MIT

## 联系

如有任何问题或建议，请通过以下方式联系：

- 邮箱: your.email@example.com
- GitHub: [你的GitHub名](https://github.com/你的用户名) 