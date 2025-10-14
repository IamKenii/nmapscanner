// Model - Data management
const model = {
    // State
    state: {
        targetType: 'single',
        target: '',
        os: 'linux',
        selectedOptions: {} // {categoryKey_index: {flag, value}}
    },

    // Get configuration
    getConfig() {
        return nmapConfig;
    },

    // Set target type
    setTargetType(type) {
        this.state.targetType = type;
    },

    // Set target
    setTarget(target) {
        this.state.target = target;
    },

    // Set OS
    setOS(os) {
        this.state.os = os;
    },

    // Toggle option
    toggleOption(key, option, checked) {
        if (checked) {
            this.state.selectedOptions[key] = {
                flag: option.flag,
                value: '',
                valueType: option.valueType,
                placeholder: option.placeholder || ''
            };
        } else {
            delete this.state.selectedOptions[key];
        }
    },

    // Set option value
    setOptionValue(key, value) {
        if (this.state.selectedOptions[key]) {
            this.state.selectedOptions[key].value = value;
        }
    },

    // Generate command
    generateCommand() {
        let command = 'nmap';
        const flags = [];

        // Add selected options with their values
        for (const [key, option] of Object.entries(this.state.selectedOptions)) {
            let flagStr = option.flag;
            
            // If option has a value type and a value is provided
            if (option.valueType && option.value) {
                // Check if flag already has '=' in it (like --script=)
                if (flagStr.includes('=')) {
                    // Replace the default value after '='
                    const parts = flagStr.split('=');
                    flagStr = `${parts[0]}=${option.value}`;
                } else {
                    // Add space and value
                    flagStr = `${flagStr} ${option.value}`;
                }
            } else if (option.valueType && !option.value) {
                // If value type exists but no value provided, skip this option
                continue;
            }
            
            flags.push(flagStr);
        }

        // Add flags to command
        if (flags.length > 0) {
            command += ' ' + flags.join(' ');
        }

        // Add target
        if (this.state.target) {
            command += ' ' + this.state.target;
        }

        return command;
    },

    // Get current state
    getState() {
        return this.state;
    },

    // Check if option is selected
    isOptionSelected(key) {
        return key in this.state.selectedOptions;
    },

    // Get option value
    getOptionValue(key) {
        return this.state.selectedOptions[key]?.value || '';
    }
};
