// Imports
import luau_modules from './src/assets/data/luau-modules.json' with { type: 'json' };

// Local functions

// Set up luau modules
/**
 * 
 * @param {HTMLElement} table_container_element 
 */
function setUpLuauModules_table(table_container_element) {
    const url_keys = ['Demo', 'DevForum', 'GitHub', 'Roblox', 'Wally'];

    // Create table
    const table_element = document.createElement('table');

    // Table headers
    {
        const row_element = document.createElement('tr');
        row_element.style.textAlign = 'center';
        const name_data_element = document.createElement('th');
        name_data_element.style.maxWidth = '25vw';
        row_element.appendChild(name_data_element);
        for (const key of url_keys) {
            const data_element = document.createElement('th');
            data_element.innerText = key;
            data_element.style.maxWidth = '15vw';
            row_element.appendChild(data_element);
        }
        table_element.appendChild(row_element);
    }

    // Create items
    for (const entry of luau_modules) {
        const row_element = document.createElement('tr');
        const name_data_element = document.createElement('td');
        name_data_element.innerText = entry.name;
        row_element.appendChild(name_data_element);
        for (const key of url_keys) {
            const data_element = document.createElement('td');
            data_element.style.textAlign = 'center';
            if (Object.hasOwn(entry, key)) {
                // Create anchor with hyperlink
                const anchor_element = document.createElement('a');
                anchor_element.setAttribute('href', entry[key]);
                anchor_element.innerText = 'link';

                // Store anchor
                data_element.appendChild(anchor_element);
            }
            row_element.appendChild(data_element);
        }
        table_element.appendChild(row_element);
    }
    table_container_element.appendChild(table_element);
}

function setUpLuauModules_list(list_element) {
    const url_keys = ['Demo', 'DevForum', 'GitHub', 'Roblox', 'Wally'];

    // Create items
    for (const entry of luau_modules) {
        const list_item = document.createElement('li');
        list_item.innerText = `${entry.name} -`;
        for (const key of url_keys) {
            if (Object.hasOwn(entry, key)) {
                // Create anchor with hyperlink
                const anchor_element = document.createElement('a');
                anchor_element.setAttribute('href', entry[key]);
                anchor_element.innerText = key;

                // Store anchor
                list_item.innerHTML += ' ';
                list_item.appendChild(anchor_element);
            }
        }
        list_element.appendChild(list_item);
    }
}

function setUpLuauModules() {
    const list_element = document.getElementById('luau-modules-list');

    // Create list
    {
        // Details wrapper
        const details_element = document.createElement('details');
        const summary_element = document.createElement('summary');
        summary_element.innerText = 'List form';
        details_element.appendChild(summary_element);
        details_element.setAttribute('open', true);

        // Add list
        const sub_list_element = document.createElement('ul');
        setUpLuauModules_list(sub_list_element);
        details_element.appendChild(sub_list_element);
        const details_list_item = document.createElement('li');
        details_list_item.appendChild(details_element);
        list_element.appendChild(details_list_item);
    }

    // Create table
    {
        // Details wrapper
        const details_element = document.createElement('details');
        const summary_element = document.createElement('summary');
        summary_element.innerText = 'Tabular form';
        details_element.appendChild(summary_element);
        details_element.setAttribute('open', true);

        // Add table
        setUpLuauModules_table(details_element);
        const details_list_item = document.createElement('li');
        details_list_item.appendChild(details_element);
        list_element.appendChild(details_list_item);
    }
}

// Main
document.addEventListener('DOMContentLoaded', () => {
    setUpLuauModules();
});
