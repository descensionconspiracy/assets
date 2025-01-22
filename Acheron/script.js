document.addEventListener("DOMContentLoaded", () => {
  // Tab Management
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab

      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      button.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  const characterImage = document.getElementById("characterImage")
  const images = {
    default: "https://cdn.imgchest.com/files/46acqqmeaz7.gif",
    spoiler: "https://cdn.imgchest.com/files/4z9cvev2k27.gif",
  }

  // Spoiler Management
  let spoilersRevealed = false

  characterImage.addEventListener("click", () => {
    spoilersRevealed = !spoilersRevealed
    characterImage.src = spoilersRevealed ? images.spoiler : images.default

    document.querySelectorAll(".spoiler").forEach((spoiler) => {
      if (spoilersRevealed) {
        spoiler.classList.add("revealed")
      } else {
        spoiler.classList.remove("revealed")
      }
    })
  })

  // Audio Player
  const audioPlayer = document.getElementById("audioPlayer")
  const playPauseBtn = document.querySelector(".play-pause")
  const progress = document.querySelector(".progress")
  const progressContainer = document.querySelector(".progress-container")
  const currentTimeDisplay = document.getElementById("currentTime")
  const volumeSlider = document.querySelector(".volume-slider")
  const trackItems = document.querySelectorAll(".track-item")
  const songTitle = document.querySelector(".song-title")
  let trackPos = 0

  // Add these new variables and functions
  const audioPrompt = document.getElementById("audioPrompt")
  const stopMusicBtn = document.getElementById("stopMusic")
  const continueMusicBtn = document.getElementById("continueMusic")
  let promptTimeout

  function showAudioPrompt() {
    audioPrompt.classList.add("show")
    promptTimeout = setTimeout(() => {
      hideAudioPrompt()
      audioPlayer.play()
    }, 3000)
  }

  function hideAudioPrompt() {
    audioPrompt.classList.remove("show")
    clearTimeout(promptTimeout)
  }

  stopMusicBtn.addEventListener("click", () => {
    hideAudioPrompt()
    audioPlayer.pause()
  })

  continueMusicBtn.addEventListener("click", () => {
    hideAudioPrompt()
    audioPlayer.play()
  })

  // Format time function
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Play/Pause
  playPauseBtn.addEventListener("click", togglePlayPause)

  // Update the togglePlayPause function
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPrompt.play()
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

  // Play Track Function
  function playTrack(index) {
    trackItems.forEach((t) => t.classList.remove("active"))
    const track = trackItems[index]
    track.classList.add("active")
    audioPlayer.src = track.dataset.src
    songTitle.textContent = track.querySelector(".track-name").textContent
    audioPlayer.play()
    trackPos = index
  }

  // Track selection
  trackItems.forEach((track, index) => {
    track.addEventListener("click", () => {
      playTrack(index)
    })
  })

  // Modify the existing audio player code
  audioPlayer.addEventListener("play", () => {
    playPauseBtn.classList.add("playing")
  })

  audioPlayer.addEventListener("pause", () => {
    playPauseBtn.classList.remove("playing")
  })

  // Prevent autoplay and show prompt instead
  audioPlayer.autoplay = false
  showAudioPrompt()

  audioPlayer.addEventListener("ended", () => {
    trackPos = (trackPos + 1) % trackItems.length
    playTrack(trackPos)
  })

  audioPlayer.load()
  audioPlayer.volume = volumeSlider.value
  updateVolumeSliderColor()
  playTrack(0)
  // Verse Management
  const verses = document.querySelectorAll(".verses a")
  const bioContent = document.getElementById("bio")
  const verse_story = document.getElementById("verse-story")

  verses.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const selectedVerse = e.target.dataset.verse
      updateVerse(selectedVerse)

      document.querySelector('[data-tab="verse-story"]').classList.add("active")
      document.getElementById("verse-story").classList.add("active")
    })
  })

  const verseData = {
    "self-annihilator": {
      buttonText: "EMANATOR OF NIHILITY",
      bio: `<b>NAME</b> <span class="spoiler gradient-text">Raiden Bosenmori Mei</span>, known as <span
                        class="acolor more-info" data-info="<b>WATCHER OF THE ACHERON RIVER.</b>">ACHERON.</span><br>
                    <b>HEIGHT</b> 178 cm, 5'10"<br>
                    <b>WEIGHT</b> 72 kg, 158lbs<br>
                    <b>AGE</b> <span class="spoiler">At least a few centuries, appears to be</span> in her late twenties<br>
                    <b>EPITHET</b> <span class="acolor">The Almighty Thunder</span> (past), <span class="meicolor more-info" data-info="They are beings with power directly granted by the Aeons, 
                    incomparably more powerful than mere mortals. Acheron presides over the concept of <b>NIHILITY</b>, or nothingness—and in her particular arrangement, can draw
                    power almost infinitely from this deity-like existence.">Emanator of Nihility</span> <br>
                    <b>SPECIES</b> <span class="spoiler">Oni</span><br>
                    <b>PLANET OF ORIGIN</b> Izumo<br>
                    <b>ALLEGIANCE</b> <span class="acolor more-info" data-info="The Galaxy Rangers is a voluntarily formed group that travels around the cosmos 
                    to uphold justice for the locals out of the belief that benevolence and justice must be upheld by personal action.">
                    Galaxy Rangers</span> (self-proclaimed) </span>, 
                    <span class="meicolor more-info" data-info="Beings who, after inadvertently stepping into the IX's shadow, 
                    have become consumed by the concept of <b>NIHILITY</b>, becoming cursed to a state of nothingness and meaninglessness,
                    wandering aimlessly across the world, spreading the Shadow of IX where they set foot.
                    Each and every aspect of theirs, be it memories, emotions or feelings, are condemned to fade and wither away, until the very evidence of their existence disappears,
                    as if consumed by a black hole at the end of the horizon.">Self-Annihilators</span><br>
                    <b>PATH</b> Nihility <br>
                    <b>WEAPON</b> 180 cm/70 inch-long Ōdachi by the name of <span class="meicolor">Naught</span><br>
                    <br>
                    `,
      content: `<span class="title">NEVER TURN BACK––THE PATH BEHIND IS <b>GONE</b>.</span> One day,
                    demonic beasts
                    known
                    as the <span class="meicolor">KAMI</span> descended from Takamagahara–her planet's twin</span>–with the
                    sole purpose of erradicating its inhabitants. Those of Izumo found
                    themselves in a long, protracted
                    war, rapidly accelerating the planet's development. <br><br>As the war came to a close, <span
                        class="acolor">Acheron</span> and <span class="altcolor more-info" data-info="One of her best friends, and the responsible for attempting to transform all of Izumo's people into spirits, locked in an eternal, perfect dream. In Acheron's world, 
   he could be likened to Kevin Kaslana, from Honkai Impact 3rd.">Hakuhatsu Ki</span> fought to
                    determine
                        Izumo's future. A meaningless
                    effort; for both Izumo and Takamagahara had long been sinking into the
                    <span class="meicolor more-info" data-info="A Shadow of IX or Shadow of Nihility is an unintended creation of IX, the Aeon of Nihility, 
                    that exists in many forms across the universe.">Shadow of IX.</span> As Acheron
                    realized the futility of their actions, she was consumed by the concept of <span class="meicolor more-info" data-info="Nihility here refers to the Aeon of Nihility—
                    that is, the primordial outer god governing the concept of non-existence, 
                    of which Acheron is an Emanator, or 'Avatar' of. <br>
                    You may gaze deep into the vast grandeur of the stars, but do not glance at the abyss of the void... 
                    for it holds nothing except for the ability to make mortals lose all reason and thought."><b>NIHILITY</b></span>, becoming a <span class="meicolor more-info" data-info="Beings who, after inadvertently stepping into the IX's shadow, 
                    have become consumed by the concept of <b>NIHILITY</b>, becoming cursed to a state of nothingness and meaninglessness,
                    wandering aimlessly across the world, spreading the Shadow of IX where they set foot.
                    Each and every aspect of theirs, be it memories, emotions or feelings, are condemned to fade and wither away, until the very evidence of their existence disappears,
                    as if consumed by a black hole at the end of the horizon.">Self-Annihilator</span>, losing the belief of all meaning to her own
                    existence.
<br><br>
                    <span class="title">I ENDED THAT MAN'S LIFE––<b>ALONE</b>.</span> With her sense of
                    self, feelings
                    and
                    memories wholly
                    devastated by <span class="meicolor">NIHILITY</span>, the self-proclaimed <span class="acolor">Galaxy
                        Ranger</span> aimlessly traverses the cosmos without
                    a planet to call home,
                    casting the <span class="meicolor more-info" data-info="A Shadow of IX or Shadow of Nihility is an unintended creation of IX, the Aeon of Nihility, 
                    that exists in many forms across the universe.">Shadow of IX.</span> wherever she steps upon.
                    <br><br>
                    <span class="title">EVEN FACING A BLACK HOLE––WE STILL HAVE A <b>CHOICE</b>.</span> But
                    though
                    it appears meaningless, she still <span class="acolor">FIGHTS</span>. Acheron stands guard at the
                        <span class="more-info" data-info="The Horizon of Existence, also known as the Border of Nihility, 
                        is a phenomenon that marks the boundary between existence and nihility, that is, nothingness, 
                        the state of non-existence. It is not a material realm, but the conceptual end of reality.
                        Dead souls that have become lost are guided into this realm, and it is here that Acheron watches over them,
                        whether to lead them into Nihility, or to guide away the souls reluctant to unite with it.">
                        Horizon of Existence</span>, leading people from the nothingness of <span
                        class="meicolor">NIHILITY</span>,
                    the very same which once consumed her, so that none may suffer what she once did.
                    <br><br>
                    Having become the <span class="acolor">Emanator of Nihility</span>–the very concept
                    she
                    wishes to
                    destroy–it is through raw defiance that Acheron lives day by day, and even as her very
                    memories fade to nothingness, her purpose forever stands <b>clear.</b>`,
    },
    almighty: {
      buttonText: "THE ALMIGHTY THUNDER",
      bio: `<b>NAME</b> <span class="acolor">Raiden Mei</span><br>
                <b>HEIGHT</b> 173 cm, 5'8"<br>
                <b>WEIGHT</b> 72 kg, 158lbs<br>
                <b>AGE</b> 19-24 years old<br>
                <b>EPITHET</b> <span class="acolor">The Almighty Sovereign of Thunder</span>, the Third Sentinel<br>
                <b>SPECIES</b> Oni <br>
                <b>PLANET OF ORIGIN</b> Izumo<br>
                <b>ALLEGIANCE</b> The Twelve Sentinels<br>
                <b>WEAPON</b> Ōdachi named <span class="meicolor">Howl</span>, eventually coming to wield Origin.`,
      content: `<span class="title">IN THE HEART OF STRUGGLE, THE FAINTEST SPARK CAN ILLUMINATE THE VOID.</span>
One day uninscribed in the annals, the Yaoyorozu-no-kami descended from Takamagahara.
These demonic beasts named <b>Kami</b> overturned the skies, burned the rivers and oceans, and shattered the land
— People realized in horror that it was not an invasion for rulership, dominance, or plunder.
The evil Kami came only to <b>kill</b>.<br><br>
Yet the sky turned dark and the great sun pulled the tides, and the Kami left numerous trails as if migrating.
The Yaoyorozu no Magakami manifested and slaughtered without mercy, yet little did they expect their peerless authority
to be stolen and taken.
<br><br>
Such was the world Raiden Bōsenmori Mei was born into: a world perpetually at war,
where the enemy stood over her skies at all times, always a haunting threat.
From her earliest age, she was taught of this history, and learned to make peace with it,
shutting out the fear of those who lie above with pride for her planet's history.
<br><br>
Her family, an ancient Executor lineage, was among the last guardians of the
<span class="more-info"
    data-info="Also known as the Twelve Sentinels, the Edict Edges were weapons forged by the people of Izumo in order to combat the kami. 
   It is said the first of them was forged from the body of the first beast slain by the people of Izumo: the Sovereign of Revelation.">Edict
    Edges.</span>
Mei was raised with the weight of centuries on her shoulders, her life molded by the mantra of duty:
sacrifice for survival, discipline above desire, and the unyielding belief that humanity must prevail, no matter the
cost.
Amid this rigid existence, Mei harbored a quiet hope—a dream of a world where swords were sheathed, and
battles fought only in memory.
<br><br>
<span class="title">A SWORD IS FORGED IN FIRE, BUT ITS PURPOSE LIES IN PEACE.</span>
From a young age, Mei excelled in her training, coming to wield the Edict Edge <span class="more-info"
    data-info="The Almighty Thunder: It could summon lightning to tear the sky, and the soaring meteors and thunder dealt divine justice.">Howl.</span>
Her mastery of its divine mantra set her apart, earning her admiration and fear among her peers.
But her most significant bond was with a young, white-haired woman: Asuka, a fellow sentinel,
who saw beyond Mei’s stoic exterior and reminded her of the warmth she often denied herself.
Together, they dreamed of a brighter future, even as the world they fought for grew darker.
<br><br>
<span class="title">Progress is born of necessity—but what is born of progress?</span>
The Yaoyorozu-no-Kami appeared defeated, and Izumo’s golden age blossomed, fueled by the remains of the fallen
Sovereigns.
Neon cities stretched toward the heavens, technology eclipsed the natural world; but the scars of the millenia of
warfare ran deep.
<br><br>
Mei saw the first signs of its cracks: some factions clinging to obsolete traditions,
others discarding humanity’s essence in their pursuit of progress, and the growing allure of their machinations.
<br><br>It was <span class="altcolor more-info" data-info="One of her best friends, and the responsible for attempting to transform all of Izumo's people into spirits, locked in an eternal, perfect dream. In Acheron's world, 
   he could be likened to Kevin Kaslana, from Honkai Impact 3rd.">Hakuhatsu Ki</span>
who embodied this divide most profoundly—a childhood friend turned rival,
whose brilliance and charisma drew countless followers to his vision.
<br><br>
<span class="title">There is no salvation in stagnation. A blade must cut forward—or rust where it stands.</span>
Mei and <span class="altcolor">Hakuhatsu Ki</span>’s ideologies clashed, their debates growing colder as the world around them spiraled toward
collapse.
Takamagahara’s shadow deepened, and strange miasmas began to seep into Izumo’s skies.<br><br>
It was only when her best friend, Asuka, had her life threatened,
that Mei finally did give in to <span class="altcolor">Hakuhatsu Ki</span>'s ideology, much to Asuka's own chagrin. It was, after all, the only
way to save her. But cities vanished into the void, their lights extinguished by an insatiable darkness: such was the
price
for usurping the Kami's sovereignity. Amidst the chaos, Asuka fell, despite the enactment of <span class="altcolor">Hakuhatsu Ki</span>'s plan.
<br><br>
<span class="title">Thus came the twin Bearers of the world's destiny.</span>
The underworld was cleared out, the wars called to a halt, and the twelve blades broken and locked. In the
emptiness the dead souls grew restless. The price of every victory was a world in its entirety, and, in the end, that
entirety was lost.<br><br>
And so Izumo splintered the Twelve Sentinels, forging them into two bearers under the black sun.
The first was named "Origin", and the second was "End". Only one could save Izumo.<br><br>
<span class="acolor">Raiden Mei</span> and <span class="altcolor">Hakuhatsu Ki</span>
fought within the shattered dreamscape: the clash of Origin and End, a fight to decide who would have the right to
decide Izumo's future.
After what seemed to be an eternal battle, both blades were shattered: but Raiden Mei stood victorious.
<br><br>It was then that she realized: there was no Origin nor End to their world, for long had they stepped into <b>the Shadow
    of IX.</b> Their millenia of struggle was meaningless: Izumo and Takamagara, Humans and Kami alike, were all doomed
to fade into the black hole they thought to be their sun, as if they had never even existed, with nothing or nobodyy to remember
them by.
<br><br>
<span class="title">It is at the end of its life that a star shines brightest.</span>
Mei’s radiant strength dimmed, her hope shattered in an instant. She stood on the edge of despair, her blade heavy
in her hands,
her soul yearning for surrender. But as Nihility loomed over her,
Mei gripped the hilt of Origin, standing her ground. Shedding a crimson tear, her broken blade of Life became
<b>Naught.</b>
<br><br>
<span class="title">"If I must be the last light of this world, then so be it—I will shine until the end."</span>
    It was a battle she could not win, yet she fought on, even as the miasma coiled tighter around her soul, and the
    corrupted amalgamations of Nihility encroached on her.
    With each step, she lost something—memories of Asuka’s smile, the warmth of her family and friends, even the
    sound of her own name.<br><br>
    As Izumo crumbled into non-existence, Mei’s defiance burned brighter. The Aeon of Nihility took everything from
    her—but even as her world's colours faded to a monochrome, she would ensure to show it the <b>red of her undying
        will.</b>
    In a final gambit—she wielded her blade against the Aeon, attempting to cut down the concept of
    Nihility—non-existence itself. Thus did Raiden Mei sink into the <span class="meicolor more-info" data-info="A Shadow of IX or Shadow of Nihility is an unintended creation of IX, the Aeon of Nihility, that exists in many forms across the universe."><b>Shadow of IX...</b></span>`,
    },
  }

  function updateVerse(verse) {
    const data = verseData[verse]
    document.getElementById("verse-title").innerHTML = data.buttonText
    bioContent.innerHTML = data.bio
    verse_story.innerHTML = data.content

    verses.forEach((v) => v.classList.remove("active"))
    document.querySelector(`[data-verse="${verse}"]`).classList.add("active")

    // More Info Popup Management
    const moreInfoElements = document.querySelectorAll(".more-info")

    moreInfoElements.forEach((element) => {
      const popup = document.createElement("span")
      popup.className = "popup"
      popup.innerHTML = element.dataset.info
      document.body.appendChild(popup)
      element.addEventListener("mouseenter", (e) => {
        const rect = element.getBoundingClientRect()
        popup.style.left = `${rect.left + rect.width / 2}px`
        popup.style.bottom = `${window.innerHeight - rect.top}px`
        popup.style.visibility = "visible"
        popup.style.opacity = 1
      })

      element.addEventListener("mouseleave", () => {
        const popup = document.querySelectorAll(".popup")
        popup.forEach((p) => {
          p.style.visibility = "hidden"
          p.style.opacity = 0
        })
      })
    })
  }

  // Initialize with the default verse
  updateVerse("self-annihilator")

  // Add this new code for the collapsible navigation
  const menuToggle = document.getElementById("menuToggle")
  const tabs = document.querySelector(".tabs")

  menuToggle.addEventListener("click", () => {
    tabs.classList.toggle("show")
  })

  // Close the menu when a tab is clicked
  tabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-button")) {
      tabs.classList.remove("show")
    }
  })
})