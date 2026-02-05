// ============================================
// PROFILE CONFIGURATION
// Edit this file to customize all profile content
// ============================================

export const profileConfig = {
  // Basic Character Information
  character: {
    name: "ACHERON",
    subtitle: "Self-Annihilator • Emanator of Nihility",
    description: 'A wanderer who has lost her past to the Shadow of IX',
    portraitUrl: "https://cdn.imgchest.com/files/49zc2aml5wy.png",
    backgroundImageUrl: "https://cdn.imgchest.com/files/7lxcppod2r7.png",
    patternImageUrl: "https://cdn.imgchest.com/files/7lxcpam98b7.png",
  },

  // Navigation Button Text
  navigation: {
    enterButtonText: "STEP INTO THE SHADOW OF IX.",
    backButtonText: "Back",
  },

  // Profile Tabs Configuration
  tabs: {
    ranger: {
      label: "GALAXY RANGER",
      characterImageUrl: "https://cdn.imgchest.com/files/l4neceg9687.png",
      bioTitle: "ACHERON - Shadow of IX",
      bioContent: `A lone wanderer who walks the path of Nihility, severing the threads of fate itself. Once known as Raiden Bosenmori Mei, she now exists as an Emanator—a living vessel of IX's ultimate truth: that all existence is meaningless, and that meaning itself is the cruelest illusion.

Her blade Naught drinks deep of endings, and with each draw, entire narratives cease to be. She is not a hero. She is not a villain. She simply is—a constant in an ever-changing cosmos, the final period at the end of every sentence.`,
      audioUrl: "/audio/shadow.mp3",
      audioLabel: "Shadow of IX Theme",
    },
    origins: {
      label: "ORIGINS",
      characterImageUrl: "https://cdn.imgchest.com/files/g7p6cdn9op7.png",
      bioTitle: "The Path to Nihility",
      bioContent: `Born on the war-torn planet of Izumo, Raiden Bosenmori Mei was once humanity's greatest champion. She wielded Howl, the Third Edict Edge forged from the heart of the Almighty Thunder, and stood as Izumo's shield against the divine horrors known as the Kami.

But victory came at a terrible price. The loss of her beloved Elysia to the void fractured her completely. In her grief and rage, she drew her blade against the Aeon IX itself—and instead of perishing, she became something far worse: its Emanator. The woman who fought to preserve meaning became the harbinger of its erasure.`,
      audioUrl: "/audio/origins.mp3",
      audioLabel: "Izumo's Lament",
    },
    relationships: {
      label: "RELATIONSHIPS",
      characterImageUrl: "https://cdn.imgchest.com/files/b49zc96lj67.png",
      bioTitle: "Bonds and Memories",
      bioContent: `Most connections fade like rain in the void. But some echoes persist, however faint:

• **Elysia (Lost Love)**: The Peerless Flower. A light that once banished her darkness. Now just a name she struggles to remember, a wound that will never heal.

• **The Nameless**: Fellow travelers on the Astral Express. They remind her of a time when she still believed in tomorrow.

• **Other Self-Annihilators**: Those who, like her, have touched IX and survived. They understand what words cannot convey—the weight of carrying oblivion within oneself.

She keeps her distance. Not from coldness, but from mercy. To know her is to stand at the edge of the abyss.`,
      audioUrl: "/audio/memory.mp3",
      audioLabel: "Fading Memories",
    },
  },

  // Journal Vignettes - Edit the text content here
  journalVignettes: {
    izumo: {
      title: "Izumo - The Beginning",
      content: `The dojo smells of incense and sweat. My hands are small against the bokken, but my form is flawless. Master Tanaka nods—that rare gesture of approval that means everything. "Again," he commands, and I move through the kata for the hundredth time that day. My legs burn. My arms shake. But I don't stop. The Bōsenmori name demands perfection.

Outside, the city glitters with possibility. Tournaments await. Sponsorships. Fame. They'll call me "Almighty Thunder" and bow before me. Father watches from the shadows, pride in his eyes even as he hides behind that ridiculous HOMU mask.

But here, in this moment, I am simply a student learning the weight of centuries. The blade is not yet mine. But soon. Soon.`,
    },
    takamagahara: {
      title: "Takamagahara - The Loss",
      content: `The courtroom is cold. Fluorescent lights drain color from the world—or maybe that's just me now. My lawyer speaks in a language of loopholes and technicalities, but I understand the essential truth: we've lost.

Takamagahara Consolidated smiles from across the table. Their lawyers smile. The judge smiles. Everyone smiles except [REDACTED], whose name I can no longer quite hold onto. She's fading even as I sit here trying to fight for her.

"Unfit to care for herself," they declare. The words feel like blades. I want to scream that it's a lie, but what good are words against corporate power? What good is memory when it dissolves like morning mist?

The facility they send me to is sterile and kind in the way that expensive things are kind. But it's still a cage. And I'm on the inside now, watching the world disappear behind walls I can't breach.`,
      spoilers: ["Cyrene"], // Words that will be redacted until spoilers revealed
    },
    frebass: {
      title: "Frebass - The Escape",
      content: `The facility has routines. Guards on rotation. Security systems with patterns. I've memorized them all. Not because I planned this—I didn't. I've never been one to plan anymore. But desperation teaches you things you didn't know you needed to learn.

The night I leave, it's raining. The world is gray, grayer than usual. Or maybe I've always seen it this way and just didn't know there was another option. I walk down a road I don't recognize toward a destination I can't name.

Someone mentions a planet. Frebass. Someone mentions a person with kind eyes. Maybe a companion. Maybe [REDACTED]. The memory is already fading.

All I know is the sword is heavy in my hands, and the rain tastes like salt. Or maybe that's tears. I can't tell anymore.`,
      spoilers: ["someone who reminded me of Cyrene"],
    },
    present: {
      title: "Present - The Shadow",
      content: `I stand at the edge of worlds now. The cosmos spreads before me like ink spilled across parchment, and I am the hand that wipes it clean.

They call me ACHERON. A borrowed name for a borrowed existence. Galaxy Ranger, they say, as if I chose this path. As if I chose anything at all.

The sword sits in its sheath, patient. It remembers what I cannot. Each draw is an ending—not mine, but the stories that have grown too tangled to continue. The Void calls through me, and I answer. Not because I want to, but because [REDACTED].

Some days I try to remember [REDACTED] face. Some days I'm grateful I can't quite manage it, because the trying doesn't hurt as much as the remembering does.

I am alone. Not by choice, but as a fundamental state of being. The Shadow of IX follows where I walk, and I have learned to call it home.`,
      spoilers: ["it's all I have left", "her"],
    },
  },

  // Character Studies Configuration
  characterStudies: [
    {
      title: "She Died Doing What She Loved",
      description:
        "A melancholic exploration of memory fragmentation and the pain of forgetting. This piece delves into Acheron's struggle with lost memories and her deep connection to her sword Naught, examining themes of identity loss and the comfort found in familiar objects.",
      content: `<div class="acheron-body"><div class="acheron-container"><header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5ceq5zvo4.png" style="height: 100%" /></header><div class="acheron-post">Memory is a <u>malfunction</u>. A data fragment from a <u>corrupted drive</u>, phasing into bytes as it struggles to be processed. It's not a portent: THEY do not bother with omens. It's just an echo, triggered by a glitch in the sensory input—the precise angle of a stranger's back, or the cold press of a night that feels like a place I can no longer name.<br /><br />A phantom reel. Toasted marshmallows beneath the light of a <u>nebula</u>, their color <em>faded</em>, the sweetness a ghost on my tongue. The faint sting of a rebuke over charred treats. Watching the stars, not for the spectacle, but for the hope that one may birth a black hole. The memories are worn thin, the ghosts of ghosts. Useless baggage that even THEY failed to erase.<br /><br />I pursue the trigger-image through the crowd. An old, deeply ingrained habit from a life filed for deletion. And for a sliver of a second, the universe plays a cruel joke: the figure turns, and a connection <em>almost</em> sparks. Fate grants me a moment.<br /><br />There, the spark dies. <u>I do not know this face</u>. And if it recognizes me, it gives no sign. My senses overload. The world dissolves into a roar of static, their voice lost in the noise. My eyes fix on their lips, trying to parse meaning from shapes, but the data is gone. I am a relic of the past, trying to read a dead language.<br /><br />My hand clenches, reaching for the hilt of a sword that is not there. (This world forbids the open carry of blades. A trivial rule, but beyond my habit.)<br /><br />The absence is a physical pain, a void where my purpose should be. So I <em>run</em>. The last expression I register is disgust. An appropriate response. Coming into encounter with me is sufficient to ruin anyone's day.<br /><br />The world is monochrome. Every street is the same gray corridor on a path to nowhere. Every gaze is a pinprick, a reminder of what abyss lies within me, and what gazes back at them. <u>Stop looking at me</u>. Stop perceiving this empty vessel stumbling through your reality. I am a void in the shape of a person. An absence cosplaying as presence.<br /><br />I find a corner. Press myself into it. The edges of buildings offer false comfort—if I could fold myself small enough, maybe I could disappear. Maybe the world would forget to render me. A tempting prospect.<br /><br />Focus. Breathe. Old protocols from a life with better coping mechanisms. In... out... in... The panic ebbs. The static recedes. Colors resume their assault on my senses. I am here. Unfortu</div></div></div>`,
    },
    {
      title: "Litany of Ghosts & The Peerless Flower",
      description:
        "A comprehensive backstory covering Acheron's origins on Izumo, her relationships with fallen comrades, and her tragic love story with Elysia. This extensive piece chronicles her transformation from a warrior protecting humanity to an Emanator of Nihility.",
      content: `<!-- Add full HTML content here -->`,
    },
    {
      title: "Romance Chart",
      description:
        "A detailed compatibility analysis exploring Acheron's romantic preferences, ideal partner traits, and relationship dynamics. This interactive chart provides insight into her love languages, attachment style, and what makes her heart flutter—or flee.",
      content: `<!-- Add full HTML content here -->`,
    },
  ],

  // Additional Info Configuration
  moreInfo: {
    title: "More Information",
    sections: [
      {
        heading: "About This Profile",
        content:
          "This is a character profile for Acheron, also known as Raiden Bosenmori Mei, from Honkai: Star Rail. The profile explores her backstory, personality, and the tragic journey that led her to become an Emanator of Nihility.",
      },
      {
        heading: "Content Warnings",
        content:
          "This profile contains themes of loss, grief, memory loss, existential dread, and references to death. Some sections contain spoilers for Honkai: Star Rail's story.",
      },
      {
        heading: "Credits",
        content:
          "Character and setting © HoYoverse. Profile design and writing by the community. Images sourced from official Honkai: Star Rail promotional materials.",
      },
    ],
  },
}
