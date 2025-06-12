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
}

export default function ProfilePage({ onBack }: ProfilePageProps) {
  const [spoilersRevealed, setSpoilersRevealed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedVerse, setSelectedVerse] = useState<"self-annihilator" | "almighty">("self-annihilator")
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

  // Responsive tab labels
  const getTabLabel = (fullLabel: string, shortLabel: string, screenSize: "sm" | "md" | "lg") => {
    if (screenSize === "sm") return shortLabel
    if (screenSize === "md") return shortLabel
    return fullLabel
  }

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
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${activeTab === "ranger"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                    }`}
                >
                  The First Step
                </Button>
                <Button
                  onClick={() => handleTabChange("bio")}
                  variant={activeTab === "bio" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${activeTab === "bio"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                    }`}
                >
                  Into Its Shadow
                </Button>
                <Button
                  onClick={() => handleTabChange("verse")}
                  variant={activeTab === "verse" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${activeTab === "verse"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                    }`}
                >
                  Emanator of Nihility
                </Button>
                <Button
                  onClick={() => handleTabChange("rules")}
                  variant={activeTab === "rules" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${activeTab === "rules"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                    }`}
                >
                  Rules
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
                {/* Desktop Tab Navigation - Responsive */}
                <TabsList className="hidden md:grid w-full grid-cols-5 gap-1 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="ranger"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs lg:text-sm xl:text-sm uppercase font-semibold py-2 px-1 lg:px-2 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">The First Step</span>
                    <span className="hidden lg:inline xl:hidden">First Step</span>
                    <span className="lg:hidden">Step</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="bio"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs lg:text-sm xl:text-sm uppercase font-semibold py-2 px-1 lg:px-2 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Into Its Shadow</span>
                    <span className="hidden lg:inline xl:hidden">Shadow</span>
                    <span className="lg:hidden">Bio</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="verse"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs lg:text-sm xl:text-sm uppercase font-semibold py-2 px-1 lg:px-2 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Emanator of Nihility</span>
                    <span className="hidden lg:inline xl:hidden">Emanator</span>
                    <span className="lg:hidden">Verse</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="rules"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs lg:text-sm xl:text-sm uppercase font-semibold py-2 px-1 lg:px-2 font-['D-DIN'] transition-all duration-200"
                  >
                    Rules
                  </TabsTrigger>
                </TabsList>

                <div className="mt-4 min-h-[400px] max-h-[60vh] overflow-y-auto text-sm leading-relaxed font-['D-DIN']">
                  <TabsContent value="ranger" className="mt-0">
                    <div className="space-y-4">
                      <p>
                        <span className="title">MERELY A BORROWED NAME.</span>{" "}
                        <MoreInfo
                          className="acolor"
                          info="The Galaxy Rangers are a voluntarily formed group that travels around the cosmos to uphold justice for the locals out of the belief that benevolence and justice must be upheld by personal action."
                        >
                          GALAXY RANGER
                        </MoreInfo>
                        ,<span className="acolor">{" "}ACHERON...</span> those are the names she is now called. She is but a
                        wanderer without origin and name, traversing the cosmos with nothing but her blade in hand.
                      </p>
                      <p>
                        A name is a tether. She has none.
                      </p>

                      <p>
                        Her blade flicks out like lashing lightning, but it's the scabbard that strikes. The sword itself, always sheathed, is for ideas that have grown too loud. For endings.
                        The former, a warning. The latter, a sentence.
                      </p>

                      <p>
                        <span className="title">I ENDED THAT MAN'S LIFE––ALONE.</span> With her sense of self,
                        feelings and memories wholly devastated by <span className="meicolor">NIHILITY</span>, the
                        self-proclaimed <span className="acolor">Galaxy Ranger</span> aimlessly traverses the cosmos
                        without a planet to call home, casting the{" "}
                        <MoreInfo
                          className="meicolor"
                          info="A Shadow of IX or Shadow of Nihility is an unintended creation of IX, the Aeon of Nihility, that exists in many forms across the universe."
                        >
                          Shadow of IX
                        </MoreInfo>{" "}
                        wherever she steps upon, yet, she is the <b>WATCHER</b> who guides lost souls away from <b>THEIR</b> endless void.
                      </p>

                      <p>
                        She is the <b>pestilence</b> and the <i>unwelcome cure</i>.
                      </p>

                      <p>
                        <span className="title">All other memories, both prior and subsequent, paled and slowly ebbed away.</span>{" "}
                        The warmth of a shared meal—a marshmallow, maybe, toasted over a dying ember? The face of a friend?
                        The memory is a frayed cloth, its colors bled into a uniform grey. The attempt to recall it is like catching smoke.
                      </p>

                      <p>
                        <span className="title">She is a river of sorrow carrying the debris of a dead world.</span>{" "}
                        When she meets those who see echoes of other women in her face—a genius Doctor, a valiant warrior, a God of Lightning—she offers no correction. 
                        Their memories are not hers to claim. They are seeing ghosts of possibilities, alternate paths from alternate struggles. It has nothing to do with her.
                      </p>

                      <p>
                        She is alone, not by choice, but as a fundamental state of being.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="bio" className="mt-0">
                    <div className="space-y-2">
                      <p>
                        <b>NAME</b>{" "}
                        <span className={`spoiler revealed gradient-text`}>
                          Raiden Bosenmori Mei
                        </span>
                        , known as{" "}
                        <MoreInfo className="acolor" info="The River of Woe, where lost souls and the newly dead are ferried by ACHERON into Hades.">
                          ACHERON,  
                        </MoreInfo>{" "}
                        <MoreInfo className="acolor" info="The Japanese concept for the Land of the Dead.">
                          Yomi, 
                        </MoreInfo> and <MoreInfo className="acolor" info="The Chinese underworld.">
                          Huángquán 
                        </MoreInfo>.
                      </p>
                      <p>
                        <b>HEIGHT</b> 178 cm, 5'10"
                      </p>
                      <p>
                        <b>WEIGHT</b> 72 kg, 158lbs
                      </p>
                      <p>
                        <b>AGE</b>{" "}
                        <span className={`spoiler revealed`}>
                          At least a few centuries, appears to be
                        </span>{" "}
                        in her late twenties
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
                        <b>PATH</b> Nihility
                      </p>
                      <p>
                        <b>WEAPON</b> 180 cm/70 inch-long Ōdachi by the name of <span className="meicolor">Naught</span>
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="verse" className="mt-0">
                    <div className="space-y-4">
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {/* <Button
                          onClick={() => setSelectedVerse("self-annihilator")}
                          variant={selectedVerse === "self-annihilator" ? "default" : "outline"}
                          className={`text-xs font-['D-DIN'] ${selectedVerse === "self-annihilator" ? "bg-[#b21919] border-[#b21919]" : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"}`}
                        >
                          EMANATOR OF NIHILITY (Present)
                        </Button>
                        <Button
                          onClick={() => setSelectedVerse("almighty")}
                          variant={selectedVerse === "almighty" ? "default" : "outline"}
                          className={`text-xs font-['D-DIN'] ${selectedVerse === "almighty" ? "bg-[#b21919] border-[#b21919]" : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"}`}
                        >
                          THE ALMIGHTY THUNDER (Past)
                        </Button> */}
                      </div>

                      {selectedVerse === "self-annihilator" ? (
                        <div className="space-y-4">
                          <p>
                            <span className="title">There was a world.</span>{" "}
                            Or was there? Sometimes, the memory is sharp, like shattered glass. 
                            A planet named Izumo, drowning in a forever-war with its own shadow in the sky—Takamagahara, 
                            a heaven filled with demonic gods that came only to kill, 
                            and the oppressive black sun they revolved around.
                            She was forged in that struggle. An Executor. A weapon molded by the flames of duty.
                          </p>

                          <p>
                            <span className="title">“A blade must cut forward—or rust where it stands.”</span>{" "} The war ended. Progress, born of necessity, blossomed into a terrible hubris. 
                            They sought to steal fire from their gods, to build a future on their cinders.
                            And so they did, soaring higher than their executioners could ever hope, in less than two millenia.
                            The consequence was little: only the very destiny of their world.
                            Two paths were forged to save that world: Origin and End. 
                            Two futures, held by two rivals, a clash of ideologies to determine the saviour of their world.
                          </p>

                          <p><span className="title">She stood victorious. And the universe laughed.</span>{" "}Their sun was no sun. It was a black hole. 
                          Their entire history—the war, the sacrifice, the hope—all of it was nothing but the final, frantic twitching 
                          of a corpse before the rot sets in. 
                          A story told in a closed room, with no one left to hear it.
                          </p>

                          <p>
                            <span className="title">EVEN FACING A BLACK HOLE––WE STILL HAVE A CHOICE.</span> But though
                            it appears meaningless, she still <span className="acolor">FIGHTS</span>. Acheron stands
                            guard at the{" "}
                            <MoreInfo info="The Horizon of Existence, also known as the Border of Nihility, is a phenomenon that marks the boundary between existence and nihility, that is, nothingness, the state of non-existence.">
                              Horizon of Existence
                            </MoreInfo>
                            , leading people from the nothingness of <span className="meicolor">NIHILITY</span>, the
                            very same which once consumed her, so that none may suffer what she once did.
                          </p>

                          <p>
                            Having become the <span className="acolor">                        <MoreInfo
                          className="meicolor"
                          info="They are beings with power directly granted by the Aeons, incomparably more powerful than mere mortals. Acheron presides over the concept of NIHILITY, or nothingness—and in her particular arrangement, can draw power almost infinitely from this deity-like existence."
                        >
                          Emanator of Nihility
                        </MoreInfo></span>–the very concept she
                            wishes to destroy–it is through raw defiance that Acheron lives day by day, and even as her
                            very memories fade to nothingness, her purpose forever stands <b>clear.</b>
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p>
                            <span className="title">
                              IN THE HEART OF STRUGGLE, THE FAINTEST SPARK CAN ILLUMINATE THE VOID.
                            </span>{" "}
                            One day uninscribed in the annals, the Yaoyorozu-no-kami descended from Takamagahara. These
                            demonic beasts named <b>Kami</b> overturned the skies, burned the rivers and oceans, and
                            shattered the land — People realized in horror that it was not an invasion for rulership,
                            dominance, or plunder. The evil Kami came only to <b>kill</b>.
                          </p>

                          <p>
                            Yet the sky turned dark and the great sun pulled the tides, and the Kami left numerous
                            trails as if migrating. The Yaoyorozu no Magakami manifested and slaughtered without mercy,
                            yet little did they expect their peerless authority to be stolen and taken.
                          </p>

                          <p>
                            Such was the world Raiden Bōsenmori Mei was born into: a world perpetually at war, where the
                            enemy stood over her skies at all times, always a haunting threat. From her earliest age,
                            she was taught of this history, and learned to make peace with it, shutting out the fear of
                            those who lie above with pride for her planet's history.
                          </p>

                          <p>
                            <span className="title">A SWORD IS FORGED IN FIRE, BUT ITS PURPOSE LIES IN PEACE.</span>{" "}
                            From a young age, Mei excelled in her training, coming to wield the Edict Edge{" "}
                            <MoreInfo info="The Almighty Thunder: It could summon lightning to tear the sky, and the soaring meteors and thunder dealt divine justice.">
                              Howl.
                            </MoreInfo>{" "}
                            Her mastery of its divine mantra set her apart, earning her admiration and fear among her
                            peers. But her most significant bond was with a young, white-haired woman: Kiana, a fellow
                            sentinel, who saw beyond Mei's stoic exterior and reminded her of the warmth she often
                            denied herself.
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="rules" className="mt-0">
                    <div className="space-y-4">
                      <p>
                        This is an independent, selective portrayal of <span className="acolor">ACHERON</span> from{" "}
                        <b>HONKAI: STAR RAIL.</b>
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
                          <b>*</b> Spontaneity over discussion; no pre-made greetings
                        </p>
                        <p>
                          <b>*</b> Just say hi & preferred genres, or throw banter
                        </p>
                        <p>
                          <b>*</b> Casual stories & status banter based
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
