document.addEventListener('DOMContentLoaded', function() {
    const timeDisplay = document.getElementById('time');
    const zoneDisplay = document.getElementById('zone');
    const changeModeButton = document.getElementById('change-mode');
    const testButton = document.getElementById('test-button');
    const soundCrickets = document.getElementById('sound-crickets');
    const soundMorning = document.getElementById('sound-morning');
    const soundCicadas = document.getElementById('sound-cicadas');

    // Set audio elements to loop
    soundCrickets.loop = true;
    soundMorning.loop = true;
    soundCicadas.loop = true;

    const timeZones = ['local', 'Asia/Tokyo', 'America/New_York'];
    const timeZoneDisplayNames = {
        'local': 'Local Time',
        'Asia/Tokyo': 'Tokyo (JST)',
        'America/New_York': 'New York (EST)'
    };
    let currentZoneIndex = 0;
    let currentSound = null;
    let testModeIndex = 0; // Index for test modes
    let isTestModeActive = false; // Flag to check if test mode is active

    function updateTime() {
        // Skip the regular update if test mode is active
        if (isTestModeActive) {
            return;
        }

        const now = new Date();
        const timeZone = timeZones[currentZoneIndex];
        const timeInZone = timeZone === 'local' ? now : new Date(now.toLocaleString("en-US", { timeZone: timeZone }));

        timeDisplay.textContent = timeInZone.toLocaleTimeString();
        zoneDisplay.textContent = timeZoneDisplayNames[timeZone];

        updateBackgroundAndSound(timeInZone);
    }

    function updateBackgroundAndSound(date) {
        const hour = date.getHours();
        let className, newSound;

        if (hour >= 18 || hour < 6) {
            className = 'crickets';
            newSound = soundCrickets;
        } else if (hour >= 6 && hour < 10) {
            className = 'birds';
            newSound = soundMorning;
        } else if (hour >= 10 && hour < 14) {
            className = 'midday';
            newSound = null;
        } else {
            className = 'cicadas';
            newSound = soundCicadas;
        }

        document.body.className = className;
        changeModeButton.className = className; // Change button color

        if (newSound !== currentSound) {
            pauseAllSounds();
            currentSound = newSound;
            if (currentSound) {
                currentSound.play();
            }
        }
    }

    function pauseAllSounds() {
        soundCrickets.pause();
        soundCrickets.currentTime = 0;
        soundMorning.pause();
        soundMorning.currentTime = 0;
        soundCicadas.pause();
        soundCicadas.currentTime = 0;
    }

    function cycleTestModes() {
        isTestModeActive = true; // Activate test mode
        const testTimes = [23, 6, 12, 16]; // Hours representing each time period
        const simulatedDate = new Date();
        simulatedDate.setHours(testTimes[testModeIndex]);

        updateBackgroundAndSound(simulatedDate);
        testModeIndex = (testModeIndex + 1) % testTimes.length; // Advance to next test mode
    }

    changeModeButton.addEventListener('click', function() {
        currentZoneIndex = (currentZoneIndex + 1) % timeZones.length;
        isTestModeActive = false; // Deactivate test mode when changing timezone
        updateTime();
    });

    testButton.addEventListener('click', function() {
        cycleTestModes();
    });

    setInterval(updateTime, 1000);
    updateTime();
});
