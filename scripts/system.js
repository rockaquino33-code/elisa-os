/**
 * @file scripts/system.js
 * @description Kernel do sistema - Gerenciador de eventos e processos
 * @author ELISA OS Team
 * @version 1.0.0
 */

/**
 * ELISA OS - Sistema Operacional Web
 * Arquitetura modular com suporte a múltiplas variações
 */

class ELISAOSKernel {
    /**
     * Inicializa o kernel do ELISA OS
     * @param {Object} config - Configuração do sistema
     */
    constructor(config = {}) {
        this.version = '1.0.0';
        this.variant = config.variant || 'standard'; // standard, gamer, business, studio, medical
        this.config = config;
        this.windows = [];
        this.processes = [];
        this.eventListeners = {};
        this.theme = 'dark';
        
        console.log(`🚀 ELISA OS v${this.version} (${this.variant}) inicializado`);
    }
    
    /**
     * Sistema de eventos global
     */
    on(event, callback) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(callback);
    }
    
    emit(event, data) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach(callback => callback(data));
        }
    }
    
    /**
     * Gerenciamento de processos
     */
    createProcess(name, callback) {
        const process = {
            id: Date.now(),
            name: name,
            status: 'running',
            created: new Date(),
            callback: callback
        };
        this.processes.push(process);
        return process;
    }
    
    killProcess(processId) {
        this.processes = this.processes.filter(p => p.id !== processId);
    }
    
    /**
     * Gerenciamento de tema
     */
    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        this.emit('theme-changed', theme);
    }
    
    /**
     * Inicialização do sistema
     */
    boot() {
        console.log('🔧 Inicializando ELISA OS...');
        this.emit('boot-start');
        
        // Inicializa componentes
        this.initializeComponents();
        
        this.emit('boot-complete');
        console.log('✅ ELISA OS pronto para uso');
    }
    
    initializeComponents() {
        // Será chamado por outros módulos
    }
}

// Instância global
const elisaOS = new ELISAOSKernel({
    variant: 'standard'
});
