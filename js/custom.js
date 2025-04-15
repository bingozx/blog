// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画类
    document.body.classList.add('loaded');
    
    // 为所有链接添加过渡动画
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是外部链接或特殊链接，不添加动画
            if (this.getAttribute('target') === '_blank' || 
                this.getAttribute('href').startsWith('#') ||
                this.getAttribute('href').startsWith('javascript:')) {
                return;
            }
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // 添加页面退出动画
            document.body.classList.add('page-exit');
            
            // 等待动画完成后跳转
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});

// 滚动动画
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    // 导航栏透明度变化
    const navbar = document.querySelector('.navbar-custom');
    if (scrolled > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
    
    // 滚动时显示文章预览动画
    const posts = document.querySelectorAll('.post-preview');
    posts.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (postTop < windowHeight * 0.8) {
            post.classList.add('post-visible');
        }
    });
}); 