// Controller - Business logic and event handling
const controller = {
    // Initialize application
    init() {
        // Render options
        const config = model.getConfig();
        view.renderOptions(config, this);

        // Setup event listeners
        this.setupEventListeners();

        // Initial command generation
        this.updateCommand();
    },

    // Setup event listeners
    setupEventListeners() {
        // Target input
        const targetInput = document.getElementById('target');
        if (targetInput) {
            targetInput.addEventListener('input', (e) => {
                model.setTarget(e.target.value);
                this.updateCommand();
            });
        }

        // Target type radio buttons
        const targetTypeRadios = document.querySelectorAll('input[name="targetType"]');
        targetTypeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                model.setTargetType(e.target.value);
                this.updateCommand();
            });
        });

        // OS selection
        const osSelect = document.getElementById('osSelect');
        if (osSelect) {
            osSelect.addEventListener('change', (e) => {
                model.setOS(e.target.value);
                this.updateCommand();
            });
        }
    },

    // Handle option toggle
    handleOptionToggle(optionKey, option, checked) {
        model.toggleOption(optionKey, option, checked);
        
        // Show/hide value input if needed
        if (option.valueType) {
            view.toggleValueInput(optionKey, checked);
        }
        
        this.updateCommand();
    },

    // Handle value change
    handleValueChange(optionKey, value) {
        model.setOptionValue(optionKey, value);
        this.updateCommand();
    },

    // Update command output
    updateCommand() {
        const command = model.generateCommand();
        view.updateCommand(command);
    },

    // Copy command to clipboard
    copyCommand() {
        const command = model.generateCommand();
        
        // Use modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(command)
                .then(() => {
                    view.showCopyFeedback(true);
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                    this.fallbackCopy(command);
                });
        } else {
            // Fallback for older browsers
            this.fallbackCopy(command);
        }
    },

    // Fallback copy method
    fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            view.showCopyFeedback(successful);
        } catch (err) {
            console.error('Fallback copy failed:', err);
            view.showCopyFeedback(false);
        }
        
        document.body.removeChild(textArea);
    },

    // Export configuration (optional utility)
    exportConfig() {
        const state = model.getState();
        const json = JSON.stringify(state, null, 2);
        console.log('Current configuration:', json);
        return json;
    },

    // Import configuration (optional utility)
    importConfig(jsonString) {
        try {
            const state = JSON.parse(jsonString);
            
            // Restore state
            model.state = state;
            
            // Update UI
            document.getElementById('target').value = state.target;
            document.getElementById('osSelect').value = state.os;
            
            // Update checkboxes and inputs
            for (const [key, option] of Object.entries(state.selectedOptions)) {
                view.updateCheckbox(key, true);
                if (option.valueType) {
                    view.toggleValueInput(key, true);
                    view.updateInputValue(key, option.value);
                }
            }
            
            this.updateCommand();
        } catch (err) {
            console.error('Failed to import configuration:', err);
        }
    }
};
