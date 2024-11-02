// Update displayed values for sliders
function updateValue(id, value) {
    document.getElementById(id).textContent = value;
}

// Log Symptoms Functionality
function logSymptoms() {
    const fatigue = document.getElementById("fatigue").value;
    const pain = document.getElementById("pain").value;
    const logMessage = document.getElementById("logMessage");
    const symptomLog = document.getElementById("symptomLog");

    // Display immediate feedback
    logMessage.textContent = `Symptoms logged: Fatigue - ${fatigue}, Pain - ${pain}`;
    logMessage.style.display = 'block';
    logMessage.classList.add('fade-in');

    // Get the current date and time
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Create a new log entry
    const logEntry = document.createElement("li");
    logEntry.textContent = `Date: ${date} Time: ${time} - Fatigue: ${fatigue}, Pain: ${pain}`;
    symptomLog.prepend(logEntry); // Add new entry to the top

    // Auto-hide the log message after a few seconds
    setTimeout(() => {
        logMessage.style.display = 'none';
    }, 3000);
}


// Reminder functionality
function setReminder() {
    const reminderTime = document.getElementById("reminderTime").value;
    const reminderMessage = document.getElementById("reminderMessage");
    const pacingLog = document.getElementById("pacingLog");

    if (reminderTime) {
        // Display immediate feedback for setting the reminder
        reminderMessage.textContent = `Reminder set for ${reminderTime}`;
        reminderMessage.style.display = 'block';

        // Get the current date and time
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        // Create a new log entry
        const logEntry = document.createElement("li");
        logEntry.textContent = `Date: ${date} Time: ${time} - Reminder set for: ${reminderTime}`;
        pacingLog.prepend(logEntry); // Add new entry to the top

        // Auto-hide the reminder message after a few seconds
        setTimeout(() => {
            reminderMessage.style.display = 'none';
        }, 3000);
    } else {
        alert("Please select a time for your reminder.");
    }
}