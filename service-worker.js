self.addEventListener('push', function(event) {
    const options = {
        body: 'It\'s time to track your productivity!',
        icon: 'icon.png',  // Icon for the notification
        badge: 'icon.png'  // Badge icon
    };

    event.waitUntil(
        self.registration.showNotification('Productivity Reminder', options)
    );
});

// Background Sync (Send notification every 30 minutes)
setInterval(function() {
    self.registration.showNotification('Productivity Reminder', {
        body: 'It\'s time to track your productivity!',
        icon: 'icon.png',  // Set the icon for the notification
        badge: 'icon.png'  // Badge for the notification
    });
}, 1800000); // 30 minutes = 1800000 milliseconds
