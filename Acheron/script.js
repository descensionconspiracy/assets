document.addEventListener('DOMContentLoaded', () => {
    // Tab Management
    document.addEventListener("click", (e) => {
        if (e.target.matches(".tab-button")) {
            const tabs = document.querySelectorAll(".tab-button")
            const contents = document.querySelectorAll(".tab-content")

            tabs.forEach((t) => t.classList.remove("active"))
            contents.forEach((c) => c.classList.remove("active"))

            e.target.classList.add("active")
            document.getElementById(e.target.dataset.tab).classList.add("active")
        }
    })

    const characterImage = document.getElementById("characterImage")
    const images = {
        default: "https://cdn.imgchest.com/files/4z9cvev2k27.gif",
        spoiler: "https://cdn.imgchest.com/files/46acqqmeaz7.gif",
    }

    // Spoiler Management
    let spoilersRevealed = false;
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('spoiler')) {
            e.target.classList.add('revealed');
        }
    });

    characterImage.addEventListener('click', () => {
        spoilersRevealed = !spoilersRevealed;
        characterImage.src = spoilersRevealed ? images.spoiler : images.default;

        document.querySelectorAll('.spoiler').forEach(spoiler => {
            if (spoilersRevealed) {
                spoiler.classList.add('revealed');
            } else {
                spoiler.classList.remove('revealed');
            }
        });
        tabs[0].innerHTML = spoilersRevealed ? 'EMANATOR OF NIHILITY' : 'THE RANGER';
    });

    // Audio Player
    const audioPlayer = document.getElementById("audioPlayer")
    const playPauseBtn = document.querySelector(".play-pause")
    const progress = document.querySelector(".progress")
    const progressContainer = document.querySelector(".progress-container")
    const currentTimeDisplay = document.getElementById("currentTime")
    const volumeSlider = document.querySelector(".volume-slider")
    const trackItems = document.querySelectorAll(".track-item")
    const songTitle = document.querySelector(".song-title")
    let trackPos = 0;

    // Format time function
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = Math.floor(seconds % 60)
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    // Play/Pause
    playPauseBtn.addEventListener("click", togglePlayPause)

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play()
        } else {
            audioPlayer.pause()
        }
    }

    // Update progress bar
    audioPlayer.addEventListener("timeupdate", updateProgress)

    function updateProgress() {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100
        progress.style.width = `${percentage}%`
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime)
    }

    // Click on progress bar
    progressContainer.addEventListener("click", (e) => {
        const clickPosition = e.offsetX / progressContainer.offsetWidth
        audioPlayer.currentTime = clickPosition * audioPlayer.duration
    })

    // Volume control
    volumeSlider.addEventListener("input", (e) => {
        audioPlayer.volume = e.target.value
        updateVolumeSliderColor()
    })

    // Volume slider color update
    function updateVolumeSliderColor() {
        const value = ((volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min)) * 100
        volumeSlider.style.background = `linear-gradient(to right, var(--sub-color) 0%, rgba(255, 255, 255, 0.1) ${value}%, rgba(255, 255, 255, 0.1) ${value}%, rgba(255, 255, 255, 0.1) 100%)`
    }

    function playTrack(track) {
        trackItems.forEach((t) => t.classList.remove("active"))
        track.classList.add("active")
        audioPlayer.src = track.dataset.src
        songTitle.textContent = track.querySelector(".track-name").textContent
        audioPlayer.play()
        trackPos = trackItems.findIndex(track);
    }

    // Track selection
    trackItems.forEach((track) => {
        track.addEventListener("click", () => {
            playTrack(track)
        })
    })

    // Update play/pause button state
    audioPlayer.addEventListener("play", () => {
        playPauseBtn.classList.add("playing")
    })

    audioPlayer.addEventListener("pause", () => {
        playPauseBtn.classList.remove("playing")
    })

    audioPlayer.addEventListener("ended", () => {
        trackPos = trackPos == trackItems.length ? 0 : trackPos + 1;
        nextTrack = trackItems[trackPos];
        playTrack(nextTrack);
    })

    // Initialize volume
    audioPlayer.volume = volumeSlider.value
    updateVolumeSliderColor();

    // Verse Management
    const annihilationButton = document.getElementById("annihilationButton")
    const verses = document.querySelectorAll(".verses a")
    const bioContent = document.getElementById("bio")
    const verse_story = document.getElementById("verse-story")

    const verseData = {
        "self-annihilator": {
            buttonText: "SELF-ANNIHILATOR",
            bio: `<b>NAME</b> <span class="spoiler gradient-text">Raiden Bosenmori Mei</span>, known as <span
                        class="acolor">ACHERON.</span><br>
                    <b>HEIGHT</b> 178 cm, 5'10"<br>
                    <b>SPECIES</b> <span class="spoiler">Oni</span><br>
                    <b>PLANET OF ORIGIN</b> <span class="spoiler">Izumo</span><br>
                    <b>ALLEGIANCE</b> <span class="acolor">Galaxy Rangers</span> <span
                        class="spoiler">(allegedly)</span>, <span class="meicolor spoiler more-info" data-info="Beings consumed by the concept of <b>NIHILITY</b>, existing in a state of purposelessness.">Self-Annihilators</span><br>
                    <b>PATH</b> Nihility <br>
                    <b>WEAPON</b> 180 cm/70 inch-long Ōdachi by the name of <span class="meicolor">Naught</span><br>
                    <br>

                    The existence of Nihility is a mystery itself, <b>THEIR</b> form enshrouded by layers of
                    mist.
                    IX doesn't interact with the other Aeons. <b>THEY </b>believe that the ultimate fate of the
                    multiverse is nothingness, and therefore, <u>worthless</u>.<br><br>

                    <span class="spoiler">Self-Annihilators; beings who have been rendered purposeless by some
                        <i>unknown entity</i>, unable
                        to
                        do anything but watch as even their own existence disappear, as if
                        consumed
                        by the event horizon of a black hole. They are beings that <b>should not exist</b> in this
                        universe.</span>`,
            content: `<span class="title">NEVER TURN BACK––THE PATH BEHIND IS <b>GONE</b>.</span> One day,
                    demonic beasts
                    known
                    as the <span class="meicolor spoiler">KAMI</span> descended from <span
                        class="spoiler">Takamagahara–her planet's twin</span>–with the
                    sole purpose of erradicating its inhabitants. Those of <span class="spoiler">Izumo</span> found
                    themselves in a long, protracted
                    war, rapidly accelerating the planet's development. <br><br>As the war came to a close, <span
                        class="acolor">Acheron</span> and <span class="altcolor spoiler">Hakuhatsu Ki</span> fought to
                    <span class="spoiler">determine
                        Izumo's future.</span> A meaningless
                    effort; for both <span class="spoiler">Izumo and Takamagahara</span> had long been sinking into the
                    <span class="meicolor spoiler">Shadow of IX.</span> As Acheron
                    realized the futility of their actions, she was consumed by the concept of <span
                        class="meicolor spoiler">NIHILITY</span>, becoming a <span
                        class="meicolor spoiler">Self-Annihilator</span>, losing the belief of all meaning to her own
                    existence.

                    <br><br><span class="spoiler">After all, if these outer gods–the Aeons–are truly above
                        all beings,
                        why would
                        <b>THEY</b> care
                        about
                        the emotions of mortals? </span><br><br>At least, it is true that man has no control; even over
                    his own will.
                    <br><br>
                    <span class="title">I ENDED THAT MAN'S LIFE––<b>ALONE</b>.</span> With her sense of
                    self, feelings
                    and
                    memories wholly
                    devastated by <span class="meicolor spoiler">NIHILITY</span>, the <span
                        class="spoiler">self-proclaimed</span> <span class="acolor">Galaxy
                        Ranger</span> aimlessly traverses the cosmos without
                    a planet to call home,
                    <span class="spoiler">casting the Shadow of <b>IX</b> wherever she steps upon.</span>
                    <br><br>
                    <span class="title">EVEN FACING A BLACK HOLE––WE STILL HAVE A <b>CHOICE</b>.</span> But
                    though
                    it appears meaningless, she still <span class="acolor">FIGHTS</span>. Acheron <span
                        class="spoiler">stands guard at the
                        Horizon of Existence</span>, leading people from the nothingness of <span
                        class="meicolor spoiler">NIHILITY</span>,
                    the very same which once consumed her, so that none may suffer what she once did.
                    <br><br>
                    Having become the <span class="acolor spoiler">Emanator of Nihility</span>–the very concept
                    she
                    wishes to
                    destroy–it is through raw defiance that Acheron lives day by day, and even as her very
                    memories fade to nothingness, her purpose forever stands <b>clear.</b>`,
        },
        "wanderer": {
            buttonText: "WANDERER SWORDSWOMAN",
            bio: `<b>NAME</b> Raiden Mei, known as <span class="acolor">THE WANDERER</span><br>
                <b>HEIGHT</b> 178 cm, 5'10"<br>
                <b>SPECIES</b> Human<br>
                <b>ORIGIN</b> Feudal Japan<br>
                <b>ALLEGIANCE</b> None<br>
                <b>PATH</b> Bushido<br>
                <b>WEAPON</b> Katana named <span class="meicolor">Thunder's Echo</span>`,
            content: `A masterless samurai, Mei wanders the land seeking to perfect her swordsmanship and find meaning in a world torn by war and strife. Her blade, as quick as lightning, has become legendary among both allies and foes.`,
        },
        "hashira": {
            buttonText: "THE HASHIRA",
            bio: `<b>NAME</b> Mei Bosenmori, known as <span class="acolor">THE LIGHTNING HASHIRA</span><br>
                <b>HEIGHT</b> 178 cm, 5'10"<br>
                <b>SPECIES</b> Human<br>
                <b>ORIGIN</b> Taisho Era Japan<br>
                <b>ALLEGIANCE</b> Demon Slayer Corps<br>
                <b>RANK</b> Hashira<br>
                <b>BREATHING STYLE</b> Thunder Breathing<br>
                <b>WEAPON</b> Nichirin Blade imbued with lightning`,
            content: `As the Lightning Hashira, Mei stands as one of the most powerful demon slayers. Her mastery of Thunder Breathing allows her to move and strike with the speed and force of lightning, making her a formidable foe against even the strongest demons.`,
        },
    }

    // Use event delegation for verse selection
    document.addEventListener("click", (e) => {
        if (e.target.matches(".verses a")) {
            e.preventDefault()
            const selectedVerse = e.target.dataset.verse
            updateVerse(selectedVerse)
            document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"))
            document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))
            document.querySelector('[data-tab="verse-story"]').classList.add("active")
            document.getElementById("verse-story").classList.add("active");
        }
    })

    function updateVerse(verse) {
        const data = verseData[verse]
        document.getElementById("verse-title").innerHTML = verse;
        bioContent.innerHTML = data.bio
        verse_story.innerHTML = data.content

        verses.forEach((v) => v.classList.remove("active"))
        document.querySelector(`[data-verse="${verse}"]`).classList.add("active")
    }

    // Initialize with the default verse
    updateVerse("self-annihilator")

    // More Info Popup Management
    const moreInfoElements = document.querySelectorAll(".more-info")
  
    moreInfoElements.forEach((element) => {
      const popup = document.createElement("span")
      popup.className = "popup"
      popup.innerHTML = element.dataset.info
      element.appendChild(popup)
    })
})



