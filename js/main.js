// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
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