"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioPlayer from "@/components/audio-player"
import CharacterImage from "@/components/character-image"
import { ArrowLeft, Menu, X } from "lucide-react"
import MoreInfo from "@/components/more-info"

interface ProfilePageProps {
  onBack: () => void
  verse: "shadow" | "ghost"
}

export default function ProfilePage({ onBack, verse }: ProfilePageProps) {
  const [spoilersRevealed, setSpoilersRevealed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("ranger")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (isMobile) {
      setMobileMenuOpen(false)
    }
  }

  // Get verse-specific title
  const getVerseTitle = () => {
    return verse === "shadow" ? "Shadow of IX" : "Vampire: The Masquerade (Low Fantasy/Supernatural/Urban)"
  }

  // Get verse-specific content
  const getVerseContent = () => {
    if (verse === "ghost") {
      return {
        ranger: (
          <div className="space-y-4">
            <p>
              <span className="title">THERE IS NO REDEMPTION.</span> In the streets of New York, she is a ghost that
              doesn't know it's dead. By day, she is a woman who forgets her own address, who stands mesmerized by the
              rain, and who sometimes has to be reminded by a stranger to eat.
              <br />
              <br />
              Her body remembers how to fight—the muscle memory of a thousand kendo drills is a stubborn thing—yet she
              is terribly human. She bleeds. She tires. She can be <strong>broken</strong>.
            </p>
            <p>
              <span className="title">THERE IS NO CORRUPTION.</span> Bosenmori is the quiet woman at the end of the bar
              who never speaks. She is the shadow that stands in the alley just after the deal goes wrong, or observes
              constructions in the city outskirts crumble beneath their poorly planned architecture—who cares, they're
              fucking poor anyway—seemingly drawn to disaster.
              <br />
              <br />
              She is the forgotten tenant in a crumbling Queens apartment who sometimes has to be let in because she
              forgot her keys, and often winds up sleeping in the streets as a result.
            </p>
            <p>
              <span className="title">NOTHING MATTERS. ALL FADES.</span> She wanders the streets of New York because the
              currents of supernatural events have dragged her here. The city is a nexus of stagnant stories.
              <b> Kindred</b> clinging to an eternity they hate, bound spirits unable to let go, of mortals locked in
              cycles of violence and despair, obsessed with terrible sin. <br />
              <br />
              The universe is a river, flowing inexorably towards a silent sea of nothingness. She does not hunt them
              with malice, much less righteousness; her very being is drawn to these knots in the reality, to these
              puddles of stagnant water, compelled to provide the release of a final, clean end.
            </p>
          </div>
        ),
        bio: (
          <div className="space-y-2">
            <p>
              <b>NAME</b> <span className={`spoiler revealed gradient-text`}>Raiden Bosenmori Mei</span>.
            </p>
            <p>
              <b>HEIGHT</b> 178 cm, 5'10"
            </p>
            <p>
              <b>WEIGHT</b> 72 kg, 158lbs
            </p>
            <p>
              <b>AGE</b> In her late twenties.
            </p>
            <p>
              <b>CHARACTERISTICS</b> Mage: Chthonian Orphan, a failed conversion into a Nephandi.
            </p>
            <p>
              <b>PARADIGM</b> Change, decay and finality.
            </p>
            <p>
              <b>COUNTRY OF ORIGIN</b> Japan
            </p>
            <p>
              <b>ALLEGIANCE</b> {"None."}
            </p>
            <p>
              <b>DEMEANOR</b> Loner. She is quiet, distant, and forgetful. She is a stranger to herself, so she sees no
              point in being known by others.
            </p>
            <p>
              <b>WEAPON</b> 180 cm/70 inch-long Ōdachi. A long, red Japanese blade. She is quite attached to it.
            </p>
            <p>
              <b>COMMON BELONGINGS</b> A photo of her and a man wearing a ridiculous cartoon costume. A wooden carving
              of a bear.
            </p>
            <p>
              <b>DOMAINS OF MAGIC </b> Entropy, Mind, Time.
            </p>
          </div>
        ),
        verse: (
          <div className="space-y-4">
            <p>
              <span className="title">THERE WAS AN ISLAND.</span> The memory is a sliver of glass under the skin—a
              sharp, persistent pain you forget is there until you press on it. A people of the Izumo island, maybe,
              hidden in the misty folds of Hokkaido where the boundaries between the reality and the astral were thin.
              They were a chantry of mages who believed reality was a quilt that needed constant mending. <br />
              <br />
              She was a girl then. Her father, a man of two worlds, would don the goofy mask of "Swordmaster HOMU," a
              cartoon hero, to make their ancient traditions a game of joy and love. It is the last warm thing she can
              remember.
            </p>
            <p>
              Their world was dying to the slow, grinding erosion of the modern age. The Technocracy called it progress;
              her people called it the coming of a great silence. They were a reality deviation, a pocket of magic and
              belief that the new Consensus could not tolerate, for they were seen as a risk to the adaptation of mages
              in the modern age.
            </p>
            <p>
              The elders, in their infinite, terminal wisdom, chose to resist. They would perform one great ritual to
              eternalize themselves into the Astral, into beings of pure thought. To do this, they needed a focus. A
              battery. They chose Mei.
            </p>
            <p>
              She stood at the center of it all, the anchor for a future that would never come. And the universe, in its
              infinite, crushing indifference, laughed. The ritual didn't mend the veil; it ripped it wide open and
              shoved her soul through.
              <br />
              <br />
              Her Awakening wasn't an ascension. It was a fall into the Big Quiet, the absolute, silent, screaming
              nothingness of the Abyss. Their names, their faces, their stories, all scoured from the memory of the
              world.
              <br />
              <br />
              What was left of Mei was just the echo of a scream in an empty room. What walked away was a sole, nameless
              survivor, clutching a few trinkets: a hair tie, a worn-out sword, a photo of a man in a dumb mascot suit,
              all which proved she was ever anybody at all.
            </p>
          </div>
        ),
      }
    }

    // Default shadow verse content
    return {
      ranger: (
        <div className="space-y-4">
          <p>
            <span className="title">MERELY A BORROWED NAME.</span>{" "}
            <MoreInfo
              className="acolor"
              info="The Galaxy Rangers are a voluntarily formed group that travels around the cosmos to uphold justice for the locals out of the belief that benevolence and justice must be upheld by personal action."
            >
              GALAXY RANGER
            </MoreInfo>
            ,<span className="acolor"> ACHERON...</span> those are the names she is now called. She is but a wanderer
            without origin and name, traversing the cosmos with nothing but her blade in hand.
          </p>
          <p>A name is a tether. She has none.</p>

          <p>
            Her blade flicks out like lashing lightning, but it's the scabbard that strikes. The sword itself, always
            sheathed, is for ideas that have grown too loud. For endings. The former, a warning. The latter, a sentence.
          </p>

          <p>
            <span className="title">I ENDED THAT MAN'S LIFE––ALONE.</span> With her sense of self, feelings and memories
            wholly devastated by <span className="meicolor">NIHILITY</span>, the self-proclaimed{" "}
            <span className="acolor">Galaxy Ranger</span> aimlessly traverses the cosmos without a planet to call home,
            casting the{" "}
            <MoreInfo
              className="meicolor"
              info="A Shadow of IX or Shadow of Nihility is an unintended creation of IX, the Aeon of Nihility, that exists in many forms across the universe."
            >
              Shadow of IX
            </MoreInfo>{" "}
            wherever she steps upon, yet, she is the <b>WATCHER</b> who guides lost souls away from <b>THEIR</b> endless
            void.
          </p>

          <p>
            She is the <b>pestilence</b> and the <i>unwelcome cure</i>.
          </p>

          <p>
            <span className="title">All other memories, both prior and subsequent, paled and slowly ebbed away.</span>{" "}
            The warmth of a shared meal, a marshmallow, maybe, toasted over a dying ember? The face of a friend? The
            memory is a frayed cloth, its colors bled into a uniform grey. The attempt to recall it is like catching
            smoke.
          </p>

          <p>
            <span className="title">She is a river of sorrow carrying the debris of a dead world.</span> When she meets
            those who see echoes of other women in her face—
            <MoreInfo
              className="acolor"
              info="<img src='https://static.wikia.nocookie.net/honkaiimpact3_gamepedia_en/images/1/19/Dr._MEI_%28Profile%29.jpg'>"
            >
              a genius Doctor,
            </MoreInfo>{" "}
            <MoreInfo
              className="acolor"
              info="<img src='https://i.pinimg.com/736x/4b/fa/79/4bfa7920257bc4a13a439fef78f7d7c8.jpg'>"
            >
              a valiant warrior,
            </MoreInfo>{" "}
            <MoreInfo className="acolor" info="<img src='https://pbs.twimg.com/media/Fpbl9o1aIAAOqB-.jpg'>">
              or even a God of Lightning
            </MoreInfo>
            {"—"}she offers no correction. Their memories are not hers to claim. They are seeing ghosts of
            possibilities, alternate paths from alternate struggles. It has nothing to do with her.
          </p>

          <p>She is alone, not by choice, but as a fundamental state of being.</p>
        </div>
      ),
      bio: (
        <div className="space-y-2">
          <p>
            <b>NAME</b> <span className={`spoiler revealed gradient-text`}>Raiden Bosenmori Mei</span>, known as{" "}
            <MoreInfo
              className="acolor"
              info="The River of Woe, where lost souls and the newly dead are ferried by ACHERON into Hades."
            >
              ACHERON,
            </MoreInfo>
            {" or "}
            <MoreInfo
              className="acolor"
              info="Yomi/Huángquán, the Japanese Underworld/'Yellow River', the River of the Dead, where the souls of the departed reside."
            >
              黄泉,
            </MoreInfo>{" "}
            .
          </p>
          <p>
            <b>HEIGHT</b> 178 cm, 5'10"
          </p>
          <p>
            <b>WEIGHT</b> 72 kg, 158lbs
          </p>
          <p>
            <b>PRONOUNS</b> she/he
          </p>
          <p>
            <b>SEXUALITY</b> <span className="lesbian-gradient">Lesbian</span>
          </p>
          <p>
            <b>AGE</b> <span className={`spoiler revealed`}>At least a few centuries, appears to be</span> in her late
            twenties
          </p>
          <p>
            <b>EPITHET</b> <span className="acolor">The Almighty Thunder</span> (past),{" "}
            <MoreInfo
              className="meicolor"
              info="They are beings with power directly granted by the Aeons, incomparably more powerful than mere mortals. Acheron presides over the concept of NIHILITY, or nothingness—and in her particular arrangement, can draw power almost infinitely from this deity-like existence."
            >
              Emanator of Nihility
            </MoreInfo>
          </p>
          <p>
            <b>SPECIES</b> <span className={`spoiler revealed`}>Oni</span>
          </p>
          <p>
            <b>PLANET OF ORIGIN</b> Izumo
          </p>
          <p>
            <b>ALLEGIANCE</b>{" "}
            <MoreInfo
              className="acolor"
              info="The Galaxy Rangers are a voluntarily formed group that travels around the cosmos to uphold justice for the locals out of the belief that benevolence and justice must be upheld by personal action."
            >
              Galaxy Rangers
            </MoreInfo>{" "}
            (self-proclaimed),{" "}
            <MoreInfo
              className="meicolor"
              info="Beings who, after inadvertently stepping into the IX's shadow, have become consumed by the concept of NIHILITY, becoming cursed to a state of nothingness and meaninglessness, wandering aimlessly across the world, spreading the Shadow of IX where they set foot."
            >
              Self-Annihilators
            </MoreInfo>
          </p>
            <p>
              <b>DEMEANOR</b> Loner. She is quiet, distant, and forgetful. She is a stranger to herself, thus she sees no
              point in being known by others.
            </p>
          <p>
            <b>PATH</b> Nihility
          </p>
          <p>
            <b>WEAPON</b> 180 cm/70 inch-long Ōdachi by the name of <span className="meicolor">Naught</span>
          </p>
        </div>
      ),
      verse: (
        <div className="space-y-4">
          <p>
            <span className="title">There was a world.</span> Or was there? Sometimes, the memory is sharp, like
            shattered glass. A planet named Izumo, drowning in a forever-war with its own shadow in the
            sky—Takamagahara, a heaven filled with demonic gods that came only to kill, and the oppressive black sun
            they revolved around. She was forged in that struggle. An Executor. A weapon molded by the flames of duty.
          </p>

          <p>
            <span className="title">"A blade must cut forward—or rust where it stands."</span> The war ended. Progress,
            born of necessity, blossomed into a terrible hubris. They sought to steal fire from their gods, to build a
            future on their cinders. And so they did, soaring higher than their executioners could ever hope, in less
            than two millenia. The consequence was little: only the very destiny of their world. Two paths were forged
            to save that world: Origin and End. Two futures, held by two rivals, a clash of ideologies to determine the
            saviour of their world.
          </p>

          <p>
            <span className="title">She stood victorious. And the universe laughed.</span> Their sun was no sun. It was
            a black hole. Their entire history—the war, the sacrifice, the hope—all of it was nothing but the final,
            frantic twitching of a corpse before the rot sets in. A story told in a closed room, with no one left to
            hear it.
          </p>

          <p>
            <span className="title">EVEN FACING A BLACK HOLE––WE STILL HAVE A CHOICE.</span> But though it appears
            meaningless, she still <span className="acolor">FIGHTS</span>. Acheron stands guard at the{" "}
            <MoreInfo info="The Horizon of Existence, also known as the Border of Nihility, is a phenomenon that marks the boundary between existence and nihility, that is, nothingness, the state of non-existence.">
              Horizon of Existence
            </MoreInfo>
            , leading the{" "}
            <MoreInfo info="Sin Thirsters are, essentially, lost souls who, in the River of Woe, reenact the obsessions of their lives aimlessly, under the illusion that they can control their fate.">
              Sin Thirsters
            </MoreInfo>{" "}
            from the nothingness of <span className="meicolor">NIHILITY</span>, the very same which once consumed her,
            so that none may suffer what she once did.
          </p>

          <p>
            Having become the{" "}
            <span className="acolor">
              {" "}
              <MoreInfo
                className="meicolor"
                info="They are beings with power directly granted by the Aeons, incomparably more powerful than mere mortals. Acheron presides over the concept of NIHILITY, or nothingness—and in her particular arrangement, can draw power almost infinitely from this deity-like existence."
              >
                Emanator of Nihility
              </MoreInfo>
            </span>
            –the very concept she wishes to destroy–it is through raw defiance that Acheron lives day by day, and even
            as her very memories fade to nothingness, her purpose forever stands <b>clear.</b>
          </p>
        </div>
      ),
      headcanons: (
        <div className="space-y-2">
          <p>
            <b>MAKEUP</b> Though she mostly uses little to no make-up, she still carries a fresh set commonly with her,
            both as a way to remember what little she can of her old land, and to 'help' women who might need them.
          </p>
          <p>
            <b>MUSIC</b> Once, in the past, she desired to learn musical instruments, but she did not have much time
            between her obligations as a warrior and leisure. Still, she appreciates musicians deeply to this day, and
            certain types of music bring her great relaxation.
          </p>
          <p>
            <b>REMEMBRANCE</b> Her ability to recall lost memories upon touching her blade is not a 'magical quality',
            but rather, a recalling of the emotions she felt each and every time she drew her sword, therefore
            remembering the memories in her mind at the time, and the reasons as for why to unsheathe her blade. 
            Similarly, this is the reason why she does not unsheathe it at will.
          </p>
          <p>
            <b>MEMORY</b> 'Some things are hard to remember, others, hard to forget.' For <b>ACHERON</b>, it is awfully
            difficult, if not outright impossible, to forget her first encounter with Black Swan.
          </p>
          <p>
            <b>FEAR</b> Presently, there is virtually nothing she fears; the certainty of{" "}
            <span className="meicolor">NIHILITY</span> is oddly reassurring. Her only fear is forgetting the days spent
            with her trailblazing companion, Frebass.
          </p>
          <p>
            <b>KENDO</b> She learned the Art of the Sword from a strange cartoonish character,{" "}
            <MoreInfo info="<img src='https://cdn.imgchest.com/files/7lxcp6g5lo7.webp'>">'Swordmaster HOMU'</MoreInfo>;
            who was secretly her father, dressing up to entertain his daughter and distract her from their bleak
            reality.
          </p>
          <p>
            <b>COOKING</b> She has great cooking skills. However, they've presently deteriorated along her worsening tastebuds,
            resulting in her cooking skills decreasing as a result. 
          </p>
        </div>
      ),
      credits: (
        <div className="space-y-2">
          <p>
            <b>ART</b> <a href="https://zephyrine-gale.tumblr.com/post/754278829130924032/acheron">Zephyrine Gale, </a> 
            <a href="https://x.com/llmia4/status/1772928568869196049">Llmia4.</a>
          </p>
          <p>
            <b>MUSIC</b> HOYO-MIX, Black Kirin (Metal band)
          </p>
        </div>
      ),
    }
  }

  const verseContent = getVerseContent()

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative font-['D-DIN']">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[10px]"
          style={{
            backgroundImage: "url('https://cdn.imgchest.com/files/7bwckodm357.jpg')",
          }}
        />
        <div
          className="absolute inset-0 opacity-50 bg-repeat"
          style={{
            backgroundImage: "url('https://cdn.imgchest.com/files/7lxcppod2r7.png')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:text-[#b21919] hover:bg-transparent font-['D-DIN']"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Intro
          </Button>

          <div className="text-center">
            <span className="text-sm text-gray-400 uppercase tracking-wider font-['D-DIN']">{getVerseTitle()}</span>
          </div>

          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            className="md:hidden text-white hover:text-[#b21919]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Tab Navigation - Under Header */}
        {isMobile && (
          <div className={`mb-6 transition-all duration-300 ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="bg-black/95 border border-[#b21919] p-4 rounded">
              <div className="grid grid-cols-1 gap-2">
                <Button
                  onClick={() => handleTabChange("ranger")}
                  variant={activeTab === "ranger" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "ranger"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  The First Step
                </Button>
                <Button
                  onClick={() => handleTabChange("bio")}
                  variant={activeTab === "bio" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "bio"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  Into Its Shadow
                </Button>
                <Button
                  onClick={() => handleTabChange("verse")}
                  variant={activeTab === "verse" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "verse"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  {verse === "ghost" ? "THE WOMAN IN GRAY" : "Emanator of Nihility"}
                </Button>
                <Button
                  onClick={() => handleTabChange("headcanons")}
                  variant={activeTab === "headcanons" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "headcanons"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  Headcanons
                </Button>
                <Button
                  onClick={() => handleTabChange("rules")}
                  variant={activeTab === "rules" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "rules"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  Rules
                </Button>
                <Button
                  onClick={() => handleTabChange("credits")}
                  variant={activeTab === "credits" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "credits"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  Credits
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-black/95 border border-[#b21919] p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Character Image */}
            <div className="md:w-64 w-full flex-shrink-0 aspect-square">
              <CharacterImage
                spoilersRevealed={spoilersRevealed}
                onToggleSpoilers={() => setSpoilersRevealed(!spoilersRevealed)}
              />
            </div>

            {/* Content Tabs */}
            <div className="flex-1">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Desktop Tab Navigation - Responsive with smaller font */}
                <TabsList className="hidden md:grid w-full grid-cols-6 gap-1 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="ranger"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">The First Step</span>
                    <span className="hidden lg:inline xl:hidden">First Step</span>
                    <span className="lg:hidden">Step</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="bio"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Into Its Shadow</span>
                    <span className="hidden lg:inline xl:hidden">Shadow</span>
                    <span className="lg:hidden">Bio</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="verse"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">
                      {verse === "ghost" ? "THE WOMAN IN GRAY" : "Emanator of Nihility"}
                    </span>
                    <span className="hidden lg:inline xl:hidden">{verse === "ghost" ? "Woman" : "Emanator"}</span>
                    <span className="lg:hidden">Verse</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="headcanons"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Headcanons</span>
                    <span className="hidden lg:inline xl:hidden">HC</span>
                    <span className="lg:hidden">HC</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="rules"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    Rules
                  </TabsTrigger>
                  <TabsTrigger
                    value="credits"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    Credits
                  </TabsTrigger>
                </TabsList>

                <div className="mt-4 min-h-[400px] max-h-[60vh] overflow-y-auto text-sm leading-relaxed font-['D-DIN']">
                  <TabsContent value="ranger" className="mt-0">
                    {verseContent.ranger}
                  </TabsContent>

                  <TabsContent value="bio" className="mt-0">
                    {verseContent.bio}
                  </TabsContent>

                  <TabsContent value="verse" className="mt-0">
                    {verseContent.verse}
                  </TabsContent>

                  <TabsContent value="headcanons" className="mt-0">
                    {verseContent.headcanons}
                  </TabsContent>

                  <TabsContent value="rules" className="mt-0">
                    <div className="space-y-4">
                      <p>
                        This is an independent, selective portrayal of <span className="acolor">ACHERON</span> from{" "}
                        <b>HONKAI: STAR RAIL,</b> with some optional AUs.
                      </p>

                      <p>
                        This account is open to other verses; the preference is for characters where pre-established
                        connections can be made, and that's simply easier within the Hoyoverse. Verse-specific sections
                        will be added if deemed necessary.
                      </p>

                      <div className="space-y-1">
                        <p>
                          <b>*</b> Status banter is open to everyone; feel free to interact even if someone comments
                        </p>
                        <p>
                          <b>*</b> No smut without plot, no exceptions
                        </p>
                        <p>
                          <b>*</b> Both spontaneity and discussion are welcomed;
                        </p>
                        <p>
                          <b>*</b> Don't feel beholden to big flashy greetings; just say hi and let's talk
                        </p>
                        <p>
                          <b>*</b> Casual stories & status banter based, but not restricted;
                        </p>
                        <p>
                          <b>*</b> My responses may be slow in larger roleplays; be patient
                        </p>
                        <p>
                          <b>*</b> Stories have no fixed post length; can be a paragraph or novella
                        </p>
                        <p>
                          <b>*</b> When it comes to interactions, crossovers are adored
                        </p>
                        <p>
                          <b>*</b> Preferred themes: feudal, sci-fi, (dark) fantasy & more
                        </p>
                        <p>
                          <b>*</b> If you're into The Locked Tomb, A Practical Guide to Evil,
                        </p>
                        <p>
                          <b>*</b> ELDEN RING, Berserk, Vampire: The Masquerade, we'll get along
                        </p>
                        <p>
                          <b>*</b> Triggering themes: minors, do not interact (21+)
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="credits" className="mt-0">
                    {verseContent.credits}
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Audio Player - Auto-play enabled */}
        <div className="mt-6">
          <AudioPlayer autoPlay={true} />
        </div>
      </div>
    </div>
  )
}
