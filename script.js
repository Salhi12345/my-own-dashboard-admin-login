// UnlockTool Admin Login - Adam Der SEO
class NeonCyberLoginForm {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.passwordToggle = document.getElementById('passwordToggle');
        this.submitButton = this.form.querySelector('.neon-button');
        this.successMessage = document.getElementById('successMessage');
        
        // Admin credentials (demo – replace with real backend)
        this.ADMIN_EMAIL = "adam@unlocktool.com";
        this.ADMIN_PASSWORD = "Admin2025";
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupPasswordToggle();
        this.setupCyberEffects();
        this.setBranding();
    }
    
    setBranding() {
        console.log('%c[ UnlockTool · Admin Portal ]', 'color: #00ff41; font-size: 14px; font-weight: bold;');
        console.log('%cAdam Der SEO — Secure Terminal', 'color: #ff0080;');
    }
    
    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.emailInput.addEventListener('blur', () => this.validateEmail());
        this.passwordInput.addEventListener('blur', () => this.validatePassword());
        this.emailInput.addEventListener('input', () => this.clearError('email'));
        this.passwordInput.addEventListener('input', () => this.clearError('password'));
        
        this.emailInput.setAttribute('placeholder', ' ');
        this.passwordInput.setAttribute('placeholder', ' ');
    }
    
    setupPasswordToggle() {
        this.passwordToggle.addEventListener('click', () => {
            const type = this.passwordInput.type === 'password' ? 'text' : 'password';
            this.passwordInput.type = type;
            this.passwordToggle.classList.toggle('toggle-active', type === 'text');
            this.triggerCyberGlitch(this.passwordToggle);
        });
    }
    
    setupCyberEffects() {
        [this.emailInput, this.passwordInput].forEach(input => {
            input.addEventListener('focus', (e) => {
                this.triggerCyberScan(e.target.closest('.cyber-field'));
            });
            input.addEventListener('blur', (e) => {
                this.stopCyberScan(e.target.closest('.cyber-field'));
            });
        });
        this.startRandomGlitches();
    }
    
    triggerCyberScan(field) {
        const scanner = field.querySelector('.cyber-scanner');
        if (scanner) scanner.style.opacity = '1';
    }
    
    stopCyberScan(field) {
        const scanner = field.querySelector('.cyber-scanner');
        if (scanner) scanner.style.opacity = '0.3';
    }
    
    triggerCyberGlitch(element) {
        element.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            element.style.filter = '';
        }, 200);
    }
    
    startRandomGlitches() {
        setInterval(() => {
            const titleGlitch = document.querySelector('.title-glitch');
            if (titleGlitch && Math.random() < 0.1) {
                titleGlitch.style.animation = 'none';
                titleGlitch.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                titleGlitch.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
                setTimeout(() => {
                    titleGlitch.style.animation = '';
                    titleGlitch.style.transform = '';
                    titleGlitch.style.filter = '';
                }, 100);
            }
        }, 2000);
    }
    
    validateEmail() {
        const email = this.emailInput.value.trim();
        if (!email) {
            this.showError('email', '[ ERROR: ADMIN_EMAIL_REQUIRED ]');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.showError('email', '[ ERROR: INVALID_ADMIN_EMAIL ]');
            return false;
        }
        this.clearError('email');
        return true;
    }
    
    validatePassword() {
        const password = this.passwordInput.value;
        if (!password) {
            this.showError('password', '[ ERROR: ADMIN_KEY_REQUIRED ]');
            return false;
        }
        if (password.length < 6) {
            this.showError('password', '[ ERROR: KEY_TOO_SHORT ]');
            return false;
        }
        this.clearError('password');
        return true;
    }
    
    checkAdminCredentials(email, password) {
        return email === this.ADMIN_EMAIL && password === this.ADMIN_PASSWORD;
    }
    
    showError(field, message) {
        const cyberField = document.getElementById(field).closest('.cyber-field');
        const errorElement = document.getElementById(`${field}Error`);
        cyberField.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
        this.triggerCyberGlitch(cyberField);
    }
    
    clearError(field) {
        const cyberField = document.getElementById(field).closest('.cyber-field');
        const errorElement = document.getElementById(`${field}Error`);
        cyberField.classList.remove('error');
        errorElement.classList.remove('show');
        setTimeout(() => {
            errorElement.textContent = '';
        }, 300);
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        const isEmailValid = this.validateEmail();
        const isPasswordValid = this.validatePassword();
        if (!isEmailValid || !isPasswordValid) {
            this.triggerSystemGlitch();
            return;
        }
        
        const email = this.emailInput.value.trim();
        const password = this.passwordInput.value;
        
        if (!this.checkAdminCredentials(email, password)) {
            this.showError('password', '[ ERROR: INVALID_ADMIN_CREDENTIALS ]');
            this.triggerSystemGlitch();
            return;
        }
        
        this.setLoading(true);
        try {
            console.log('[ UnlockTool ] Verifying admin credentials...');
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.showMatrixSuccess();
        } catch (error) {
            this.showError('password', '[ ERROR: AUTH_FAILED ]');
        } finally {
            this.setLoading(false);
        }
    }
    
    setLoading(loading) {
        this.submitButton.classList.toggle('loading', loading);
        this.submitButton.disabled = loading;
        if (loading) {
            this.startLoadingGlitches();
        }
    }
    
    startLoadingGlitches() {
        const glitchInterval = setInterval(() => {
            if (!this.submitButton.classList.contains('loading')) {
                clearInterval(glitchInterval);
                return;
            }
            const terminal = document.querySelector('.cyber-terminal');
            terminal.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                terminal.style.filter = '';
            }, 50);
        }, 500);
    }
    
    triggerSystemGlitch() {
        const terminal = document.querySelector('.cyber-terminal');
        terminal.style.animation = 'none';
        terminal.style.transform = 'translate(2px, -1px)';
        terminal.style.filter = 'hue-rotate(270deg)';
        setTimeout(() => {
            terminal.style.animation = '';
            terminal.style.transform = '';
            terminal.style.filter = '';
        }, 200);
    }
    
    showMatrixSuccess() {
        this.form.style.transform = 'scale(0.9)';
        this.form.style.opacity = '0';
        this.form.style.filter = 'blur(2px)';
        setTimeout(() => {
            this.form.style.display = 'none';
            this.successMessage.classList.add('show');
            this.triggerSuccessGlitch();
        }, 300);
        setTimeout(() => {
            console.log('[ UNLOCKTOOL ] Admin access granted. Redirecting to dashboard...');
            // window.location.href = '/admin/dashboard';
        }, 4000);
    }
    
    triggerSuccessGlitch() {
        setTimeout(() => {
            const successTitle = document.querySelector('.success-title');
            if (successTitle) {
                successTitle.style.animation = 'textGlitch 0.5s ease-in-out';
                setTimeout(() => {
                    successTitle.style.animation = '';
                }, 500);
            }
        }, 1500);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NeonCyberLoginForm();
});