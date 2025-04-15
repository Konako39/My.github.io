// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 0;
    
    window.addEventListener('scroll', function() {
        if (nav && window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else if (nav) {
            nav.classList.remove('scrolled');
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 表单提交处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('请填写所有必填字段！');
                return;
            }
            
            // 这里只是模拟表单提交
            // 在实际项目中，你需要将表单数据发送到服务器
            alert('感谢您的留言！我会尽快回复。');
            contactForm.reset();
        });
    }
    
    // 项目卡片淡入效果 - 仅用于旧版页面
    const projectCards = document.querySelectorAll('.project-card');
    
    // 检查元素是否在视口中
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // 添加淡入动画
    function fadeInElements() {
        projectCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('fade-in');
            }
        });
    }
    
    // 页面加载和滚动时检查元素
    window.addEventListener('load', fadeInElements);
    window.addEventListener('scroll', fadeInElements);
    
    // 创建CSS样式
    const styleEl = document.createElement('style');
    
    // 添加动画CSS
    let cssRules = `
        .fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        nav.scrolled {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            background-color: rgba(255, 255, 255, 0.98);
        }
    `;
    
    // 图片加载动画效果 - 用于新版画廊
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach((item, index) => {
            // 添加延迟加载动画
            setTimeout(() => {
                item.classList.add('fade-in');
            }, index * 100);
        });
        
        // 添加画廊项目的CSS
        cssRules += `
            .gallery-item {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .gallery-item.fade-in {
                opacity: 1;
                transform: translateY(0);
            }
        `;
    }
    
    // 应用所有CSS规则
    styleEl.innerHTML = cssRules;
    document.head.appendChild(styleEl);
    
    // 初始设置，让项目卡片开始是隐藏的
    projectCards.forEach(card => {
        card.style.opacity = '0';
    });
    
    // 立即检查一次
    fadeInElements();
    
    // 鼠标悬停效果增强
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
    
    // 当前页面高亮
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    const languageLinks = document.querySelectorAll('.language-selector a');
    languageLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (filename === href || (filename === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}); 