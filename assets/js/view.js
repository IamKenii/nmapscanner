// View - UI rendering
const view = {
    // Render all scan options
    renderOptions(config, controller) {
        const container = document.getElementById('scanOptions');
        container.innerHTML = '';

        for (const [categoryKey, category] of Object.entries(config)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-group';

            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.textContent = category.name;
            categoryDiv.appendChild(categoryHeader);

            const optionsGrid = document.createElement('div');
            optionsGrid.className = 'options-grid';

            category.options.forEach((option, index) => {
                const optionKey = `${categoryKey}_${index}`;
                const optionDiv = this.createOptionElement(option, optionKey, controller);
                optionsGrid.appendChild(optionDiv);
            });

            categoryDiv.appendChild(optionsGrid);
            container.appendChild(categoryDiv);
        }
    },

    // Create individual option element
    createOptionElement(option, optionKey, controller) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'checkbox-option';
        optionDiv.dataset.key = optionKey;

        // Checkbox header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'checkbox-header';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = optionKey;
        checkbox.value = option.flag;
        checkbox.addEventListener('change', (e) => {
            controller.handleOptionToggle(optionKey, option, e.target.checked);
        });

        const label = document.createElement('div');
        label.className = 'checkbox-label';
        label.innerHTML = `<strong>${option.name}</strong><span>${option.desc}</span>`;

        headerDiv.appendChild(checkbox);
        headerDiv.appendChild(label);
        optionDiv.appendChild(headerDiv);

        // Value input if needed
        if (option.valueType) {
            const valueContainer = this.createValueInput(option, optionKey, controller);
            optionDiv.appendChild(valueContainer);
        }

        // Click handler for the whole box (except checkbox)
        optionDiv.addEventListener('click', (e) => {
            if (e.target !== checkbox && e.target.tagName !== 'INPUT') {
                checkbox.checked = !checkbox.checked;
                controller.handleOptionToggle(optionKey, option, checkbox.checked);
            }
        });

        return optionDiv;
    },

    // Create value input container
    createValueInput(option, optionKey, controller) {
        const container = document.createElement('div');
        container.className = 'value-input-container';
        container.id = `value_${optionKey}`;

        const inputLabel = document.createElement('label');
        inputLabel.textContent = this.getInputLabel(option.valueType);
        inputLabel.htmlFor = `input_${optionKey}`;
        container.appendChild(inputLabel);

        const input = document.createElement('input');
        input.id = `input_${optionKey}`;
        input.type = this.getInputType(option.valueType);
        input.placeholder = option.placeholder || '';
        input.addEventListener('input', (e) => {
            controller.handleValueChange(optionKey, e.target.value);
        });

        // Prevent click propagation
        input.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        container.appendChild(input);
        return container;
    },

    // Get input label based on type
    getInputLabel(valueType) {
        const labels = {
            'text': 'Waarde:',
            'number': 'Nummer:',
            'ip': 'IP Adres:',
            'ports': 'Poorten:'
        };
        return labels[valueType] || 'Waarde:';
    },

    // Get input type
    getInputType(valueType) {
        return valueType === 'number' ? 'number' : 'text';
    },

    // Toggle value input visibility
    toggleValueInput(optionKey, show) {
        const container = document.getElementById(`value_${optionKey}`);
        const optionDiv = document.querySelector(`[data-key="${optionKey}"]`);
        
        if (container) {
            if (show) {
                container.classList.add('active');
                optionDiv.classList.add('active');
            } else {
                container.classList.remove('active');
                optionDiv.classList.remove('active');
                // Clear input value
                const input = document.getElementById(`input_${optionKey}`);
                if (input) input.value = '';
            }
        }
    },

    // Update checkbox state
    updateCheckbox(optionKey, checked) {
        const checkbox = document.getElementById(optionKey);
        if (checkbox) {
            checkbox.checked = checked;
        }
    },

    // Update input value
    updateInputValue(optionKey, value) {
        const input = document.getElementById(`input_${optionKey}`);
        if (input) {
            input.value = value;
        }
    },

    // Update command output
    updateCommand(command) {
        const output = document.getElementById('commandOutput');
        if (output) {
            output.textContent = command;
        }
    },

    // Show copy feedback
    showCopyFeedback(success = true) {
        const btn = document.querySelector('.copy-btn');
        if (!btn) return;

        const originalText = btn.textContent;
        const originalBg = btn.style.background;

        if (success) {
            btn.textContent = '✓ Gekopieerd!';
            btn.style.background = '#48bb78';
        } else {
            btn.textContent = '✗ Kopiëren mislukt';
            btn.style.background = '#f56565';
        }

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = originalBg;
        }, 2000);
    }
};
