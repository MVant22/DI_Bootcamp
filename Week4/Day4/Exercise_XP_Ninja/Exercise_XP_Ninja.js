function createCalendar(year, month) {
    // Create the calendar container div
    const container = document.getElementById('calendar-container');

    // Get the first day of the month and the number of days in the month
    const firstDay = new Date(year, month - 1, 1).getDay();  // Month is 0-indexed
    const daysInMonth = new Date(year, month, 0).getDate();
    
    // Adjust for Monday start of the week (JavaScript's getDay() returns Sunday as 0)
    const adjustedFirstDay = firstDay === 0 ? 7 : firstDay;  // If Sunday (0), treat it as 7
    
    // Create the table element
    const table = document.createElement('table');
    
    // Create the table header with weekdays
    const header = document.createElement('tr');
    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        header.appendChild(th);
    });
    table.appendChild(header);
    
    // Create the days for the calendar
    let currentDay = 1;  // Start with the first day of the month
    let isFirstRow = true;  // Track if we're on the first row
    
    for (let i = 0; i < 6; i++) {  // Loop over 6 rows (maximum rows in a month)
        const row = document.createElement('tr');
        
        for (let j = 0; j < 7; j++) {  // Loop over each day of the week
            const cell = document.createElement('td');
            
            // If it's the first row and we haven't reached the first day of the month
            if (i === 0 && j < adjustedFirstDay - 1) {
                cell.textContent = '.';  // Empty cell before the first day of the month
            } else if (currentDay <= daysInMonth) {
                cell.textContent = currentDay;  // Display the current day
                currentDay++;
            } else {
                cell.textContent = '.';  // Empty cells after the last day of the month
            }
            
            row.appendChild(cell);
        }
        
        // Stop creating rows once all the days have been filled
        if (currentDay > daysInMonth) {
            break;
        }
        
        table.appendChild(row);
    }
    
    // Append the table to the calendar container
    container.appendChild(table);
}

// Call the function to create the calendar for a specific month
createCalendar(2012, 9);
