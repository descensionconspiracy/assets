"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioPlayer from "@/components/audio-player"
import CharacterImage from "@/components/character-image"
import CharacterStudyOverlay from "@/components/character-study-overlay"
import { ArrowLeft, Menu, X } from "lucide-react"
import MoreInfo from "@/components/more-info"

interface ProfilePageProps {
  onBack: () => void
}

export default function ProfilePage({ onBack }: ProfilePageProps) {
  const [spoilersRevealed, setSpoilersRevealed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("ranger")
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [selectedStudy, setSelectedStudy] = useState<{ title: string; content: string } | null>(null)

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

  const openStudy = (title: string, content: string) => {
    setSelectedStudy({ title, content })
    setOverlayOpen(true)
  }

  const closeOverlay = () => {
    setOverlayOpen(false)
    setSelectedStudy(null)
  }

  // Character studies content
  const characterStudies = [
    {
      title: "The Weight of Forgetting",
      description:
        "A deep dive into Mei's daily struggle with frontotemporal dementia in Celestia's Crossing. This piece explores how she navigates memory loss while trying to maintain her independence and dignity in a small farming community.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5ceq5zvo4.png" style="height: 100%" /></header>

<div class="acheron-post">The notebook is her lifeline. Small, leather-bound, worn from constant handling. Inside, her handwriting grows shakier with each page—names, faces, important dates, fragments of conversations she's afraid to lose.<br /><br /><em>Harvey - town doctor, kind eyes, reminds me to take medication</em><br /><em>Evelyn - elderly woman, brings cookies, lives near the town square</em><br /><em>Gus - owns the saloon, patient when I forget my order</em><br /><br />Some entries are written multiple times, in different handwriting, as if different versions of herself tried to preserve the same memory. The pages dedicated to <span style="color:#ffc0cb;">Cyrene</span> are the most worn, touched so often the ink has begun to fade.<br /><br /><em>She loved sunflowers. I think. Or was it daisies? The color is gone from my world, but I remember she said they were bright like her smile.</em><br /><br />The mornings are the hardest. She wakes in a bed that feels too big, in a house that sometimes feels foreign. The routine saves her—check the notebook, read yesterday's entry, remember where she is. <strong>Celestia's Crossing. Safe. Home.</strong><br /><br />But some mornings, she wakes reaching for someone who isn't there, calling a name that dissolves like morning mist the moment she tries to grasp it. The phantom pain of loss without the mercy of remembering what was lost.<br /><br />The townspeople have learned her patterns. Robin reinforced the locks after the night she wandered to the beach, confused and calling for someone who would never answer. Marnie leaves fresh eggs by her door when she forgets to eat. Lewis checks on her farm when she loses track of the seasons.<br /><br />They don't pity her. They simply adapt, the way a river flows around stones. In their quiet kindness, she finds something she can't name but desperately needs—acceptance of what she's becoming, even as she forgets what she was.<br /><br />The sword remains. When everything else fades, muscle memory endures. In the pre-dawn darkness, she practices forms her body remembers even when her mind cannot. Each movement precise, deadly, beautiful. A ghost of the warrior she once was, performing a dance for an audience of one.<br /><br />Sometimes, in those moments of perfect motion, clarity returns. She remembers the weight of responsibility, the sound of steel on steel, the feeling of being <em>needed</em>. Then the moment passes, and she's just a woman with a sword, standing alone in a field of crops she can't remember planting.<br /><br />But she continues. Because forgetting doesn't mean the end. It means learning to live in the spaces between memories, finding new ways to be whole.</div>
</div>
</div>`,
    },
    {
      title: "Colors in Grayscale",
      description:
        "An exploration of Mei's achromatopsia and how she experiences the vibrant world of Celestia's Crossing through touch, sound, and the kindness of others who help her navigate a world drained of color.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5celw6la4.jpg" style="height: 100%" /></header>

<div class="acheron-post">The world is silver and shadow now. Where others see the golden wheat of autumn or the deep green of summer leaves, she sees only gradients of gray. The condition came with everything else—another piece of herself stolen by time and trauma.<br /><br />But Celestia's Crossing teaches her new ways to see.<br /><br />Abigail describes the purple of her hair as "the color of twilight storms," and Mei learns to associate that particular shade of gray with the electric feeling before rain. Sam tells her his hair is "sunshine yellow," and she begins to understand that the bright gray she sees carries warmth, like the feeling of morning light on her face.<br /><br />The flowers in her garden become a study in texture and scent rather than hue. She plants by feel—the velvet softness of what Evelyn calls "red roses," the papery delicacy of "white daisies," the sturdy stems of "yellow sunflowers." Each has its own personality beyond color.<br /><br />In the saloon, Gus describes his dishes with colors she can't see but can taste. "The red of tomatoes—sharp and bright on the tongue." "The green of fresh herbs—clean and alive." She learns to experience color through flavor, through the way foods make her feel.<br /><br />The hardest moments come when she tries to remember <span style="color:#ffc0cb;">Cyrene</span>. She knows her love was beautiful, knows there were colors in her world then, but the memories are gray now, drained of their vibrancy. Sometimes she stares at the sunset, trying to will the colors back, but sees only the slow fade from light gray to dark.<br /><br />Penny, patient and kind, sits with her sometimes and describes the world. "The ocean today is the color of sadness," she'll say, "but peaceful sadness, like the end of a good cry." Or, "The leaves are the color of fire, but gentle fire, like a hearth in winter."<br /><br />Through their words, Mei builds a new vocabulary of color—not the scientific names she once knew, but emotional ones. Colors become feelings, memories, associations. The gray world gains depth through the kindness of others who lend her their eyes.<br /><br />She learns that sight is only one way to experience beauty. The world is still full of wonder, even in grayscale. Perhaps especially in grayscale, where she must work harder to find it, making each discovery more precious.<br /><br />And sometimes, just sometimes, when she draws her sword and the metal catches the light just right, she swears she sees a flash of red. The only color that remains, or perhaps the only one that matters.</div>
</div>
</div>`,
    },
    {
      title: "The Farmer's Daughter",
      description:
        "A bittersweet look at Mei's attempts to build a new life through farming, her struggles with the simple tasks that once came naturally, and how the community of Celestia's Crossing becomes her chosen family.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5ceq5zvo4.png" style="height: 100%" /></header>

<div class="acheron-post">The farm was supposed to be a fresh start. A place where she could build something new from the ashes of everything she'd lost. But farming, she discovers, requires the one thing she struggles with most—memory.<br /><br />She plants seeds and forgets to water them. She starts to harvest and loses track of time, leaving crops to wither. The seasons blur together in her mind, spring becoming summer becoming autumn without her notice. What should be simple becomes impossibly complex when your mind is a sieve.<br /><br />But Celestia's Crossing doesn't let her fail alone.<br /><br />Marnie appears with a watering can when the parsnips start to droop. "Just happened to be in the neighborhood," she says, though her ranch is on the other side of town. Pierre slips extra seeds into her purchases, "samples," he claims, though they're always exactly what she needs to replant what she's lost.<br /><br />Lewis helps her set up a simple irrigation system, claiming it's "good for the whole valley's water management." Robin builds her raised beds that are easier to tend, "testing a new design," she insists. Clint repairs her tools without being asked, leaving them sharp and ready by her door.<br /><br />The children are the most honest in their help. Jas and Vincent simply show up after school, small hands helping with weeding, chattering about their day while they work. They don't ask why she forgets things or why she sometimes stops mid-task, staring at nothing. They just accept her as she is.<br /><br />Slowly, she learns to work with her limitations rather than against them. She plants in patterns that make sense even when she can't remember why. She leaves herself notes tied to stakes: <em>Water Tuesday. Harvest when tall as Vincent. Don't forget the scarecrow.</em><br /><br />The farm becomes a collaboration between her past self and her present one, between her failing memory and the community's quiet support. It's not the farm she imagined, but it's hers. Imperfect, struggling, but alive.<br /><br />On good days, when the morning is clear and her mind feels sharp, she stands among her crops and feels something like pride. The vegetables are small, sometimes misshapen, but they're real. She grew them. Despite everything, she created life.<br /><br />On bad days, when she can't remember what she planted or why, she finds notes from neighbors tucked between the plants. <em>These are turnips - Evelyn</em>. <em>Ready to harvest - Sam</em>. <em>You're doing great - Penny</em>.<br /><br />The farm teaches her that growth doesn't require perfection. Seeds find ways to sprout even in poor soil. Plants adapt to neglect and still bear fruit. Life persists, even when memory fails.<br /><br />And in the evening, when she sits on her porch with a cup of tea and looks over her small, imperfect farm, she feels something she thought she'd lost forever—hope. Not for the person she was, but for the person she's becoming.</div>
</div>
</div>`,
    },
    {
      title: "The Sword in the Stone",
      description:
        "An examination of how Mei's relationship with her ancestral blade serves as both anchor and torment, the last connection to her identity as a master swordswoman and the weight of a legacy she can barely remember.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5celw6la4.jpg" style="height: 100%" /></header>

<div class="acheron-post">The sword remembers what she cannot.<br /><br />Hidden beneath her bed, wrapped in cloth that smells of old incense and fading memories, lies the last Bōsenmori blade. 180 centimeters of folded steel, a masterwork that took generations to perfect. In her hands, it feels like coming home. In her mind, it's a stranger's weapon.<br /><br />Every morning, before the town wakes, she takes it to the field behind her house. The forms flow through her like water—<em>chiburi</em>, <em>noto</em>, the precise angles of <em>iaijutsu</em> that her body knows even when her mind doesn't. Muscle memory is kinder than conscious thought; it doesn't judge, doesn't question, simply <em>is</em>.<br /><br />The blade cuts through morning mist with whispered precision. Each movement is a prayer to a god she can't name, a conversation with a past she can't fully access. Her feet find the proper stance without thought. Her breathing falls into the rhythm her father—or was it someone else?—taught her decades ago.<br /><br />Sometimes, in the middle of a form, clarity strikes like lightning. She remembers the weight of responsibility, the sound of her name spoken with respect and fear: <em>Almighty Thunder</em>. She remembers competitions where grown men stepped aside rather than face her blade. She remembers the pride in her sensei's eyes, the weight of centuries of tradition resting on her shoulders.<br /><br />Then the moment passes, and she's just a woman with a sword, standing alone in a field of turnips.<br /><br />The townspeople have learned not to interrupt these sessions. Harvey, making his morning rounds, gives her space. Marnie, heading to tend her animals, nods respectfully from a distance. They sense something sacred in these moments, even if they don't understand it.<br /><br />Only once did someone intrude. A group of young men from the city, visiting for the Luau, stumbled upon her practice. They laughed, made crude jokes about the "crazy farmer lady playing with swords." The laughter died when she moved—not to attack, but simply to demonstrate. A single cut, so fast it seemed the air itself had been divided. The practice dummy she'd been using fell in two perfect halves.<br /><br />They left quickly, and word spread quietly through town: don't disturb Mei during her morning practice.<br /><br />The sword is both blessing and curse. It grounds her when everything else feels uncertain, but it also reminds her of everything she's lost. Sometimes she traces the characters etched into the blade—her family name, her lineage, words in a language that feels familiar but foreign.<br /><br />She knows she was someone important once. Someone feared and respected. The sword tells her this in the way it fits her grip, in the way her body responds to its weight. But knowing and remembering are different things, and the gap between them is a chasm she can't cross.<br /><br />Still, she practices. Every morning, without fail. Because the sword remembers, even when she cannot. And in its memory, she finds fragments of herself—not enough to rebuild who she was, but perhaps enough to discover who she might become.</div>
</div>
</div>`,
    },
  ]

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
            <span className="text-sm text-gray-400 uppercase tracking-wider font-['D-DIN']">Celestia's Crossing</span>
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
                  The Woman in Gray
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
                  Biography
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
                  Backstory
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
                  Daily Life
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
                  onClick={() => handleTabChange("extra")}
                  variant={activeTab === "extra" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "extra"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  Studies
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
                {/* Desktop Tab Navigation */}
                <TabsList className="hidden md:grid w-full grid-cols-6 gap-1 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="ranger"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">The Woman in Gray</span>
                    <span className="hidden lg:inline xl:hidden">Woman</span>
                    <span className="lg:hidden">Gray</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="bio"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Biography</span>
                    <span className="hidden lg:inline xl:hidden">Bio</span>
                    <span className="lg:hidden">Bio</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="verse"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Backstory</span>
                    <span className="hidden lg:inline xl:hidden">Story</span>
                    <span className="lg:hidden">Past</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="headcanons"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    <span className="hidden xl:inline">Daily Life</span>
                    <span className="hidden lg:inline xl:hidden">Daily</span>
                    <span className="lg:hidden">Life</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="rules"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    Rules
                  </TabsTrigger>
                  <TabsTrigger
                    value="extra"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    Studies
                  </TabsTrigger>
                </TabsList>

                <div className="mt-4 min-h-[400px] max-h-[60vh] overflow-y-auto text-sm leading-relaxed font-['D-DIN']">
                  <TabsContent value="ranger" className="mt-0">
                    <div className="space-y-4">
                      <p>
                        <span className="title">THE PERFECT STRIKE.</span> She was once the heir to centuries of
                        tradition, a master of{" "}
                        <MoreInfo className="acolor" info="Okinawan martial arts focusing on traditional weapons">
                          Okinawan kobudō
                        </MoreInfo>
                        , specializing in{" "}
                        <MoreInfo className="acolor" info="The art of Japanese swordsmanship">
                          kenjutsu
                        </MoreInfo>
                        . The <span className="meicolor">Bōsenmori</span> name was synonymous with the pursuit of the
                        perfect swordstrike, a lineage that made even samurai wielding their blades feared as sword
                        gods.
                      </p>
                      <p>
                        <span className="title">ALMIGHTY THUNDER.</span> In the competitive circuit, her skill with all
                        weapons of the kobudō was said to be nigh incomparable. Her life was one of rigid discipline and
                        immense pressure, the apparent heir to a tradition spanning centuries.
                      </p>
                      <p>
                        <span className="title">THERE IS NO NEGOTIATION.</span>{" "}
                        <MoreInfo
                          className="acolor"
                          info="A massive corporation that absorbed dojos, temples, and historical sites through hostile takeovers"
                        >
                          Takamagahara Consolidated
                        </MoreInfo>{" "}
                        came for everything. Through predatory legal battles and hostile takeovers, they devoured dojos,
                        temples, and historical sites, stealing names and reputations to brand their products. In this
                        world, power only listens to <b>money</b>, and so do the courts.
                      </p>
                      <p>
                        <span className="title">SHE LOST EVERYTHING.</span>{" "}
                        <span
                          className="spoiler altcolor"
                          onClick={(e) => {
                            const target = e.target as HTMLElement
                            target.classList.add("revealed")
                          }}
                        >
                          Cyrene
                        </span>{" "}
                        sacrificed everything, from  savings, reputation, art galleries, all to fund the legal defense. With
                        Mei's worsening mental health, she gave her entire being to take care of her love.
                        The losses piled up. She died an early death, and by then, Mei could hardly remember her name.
                      </p>
                      <p>
                        <span className="title">DEEMED UNFIT.</span> After losing in court, she was declared unfit to
                        care for herself and sent to a "charitable organization" funded by Takamagahara Consolidated.
                        Until she escaped to <span className="acolor">Celestia's Crossing</span>.
                      </p>
                      <p>
                        <span className="title">THE WOMAN IN GRAY.</span> Now she sees the world without color, her
                        memories fading like morning mist. But in this small farming community, she's learning that
                        healing doesn't require remembering—sometimes it just requires being allowed to exist as you
                        are.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="bio" className="mt-0">
                    <div className="space-y-2">
                      <p>
                        <b>NAME</b> <span className={`spoiler revealed gradient-text`}>Raiden Bōsenmori Mei</span>.
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
                        <b>HERITAGE</b> Okinawan-Japanese
                      </p>
                      <p>
                        <b>FORMER OCCUPATION</b> Master of Okinawan kobudō, competitive fencer, heir to the Bōsenmori
                        sword school
                      </p>
                      <p>
                        <b>CURRENT OCCUPATION</b> Farmer (struggling), occasional odd jobs
                      </p>
                      {/* <p>
                        <b>CONDITIONS</b>{" "}
                        <MoreInfo className="meicolor" info="Complex Post-Traumatic Stress Disorder">
                          CPTSD
                        </MoreInfo>
                        ,{" "}
                        <MoreInfo
                          className="meicolor"
                          info="A progressive brain disorder affecting memory, personality, and behavior"
                        >
                          early-onset frontotemporal dementia
                        </MoreInfo>
                        ,{" "}
                        <MoreInfo className="meicolor" info="Inability to experience pleasure in activities">
                          anhedonia
                        </MoreInfo>
                        ,{" "}
                        <MoreInfo className="meicolor" info="Complete color blindness, seeing only in grayscale">
                          achromatopsia
                        </MoreInfo>
                        ,{" "}
                        <MoreInfo className="meicolor" info="Loss of memories formed before the onset of amnesia">
                          retrograde amnesia
                        </MoreInfo>
                        ,{" "}
                        <MoreInfo className="meicolor" info="Obsessive-Compulsive Disorder">
                          OCD
                        </MoreInfo>
                      </p> */}
                      <p>
                        <b>DEMEANOR</b> Withdrawn and forgetful. She struggles with memory loss and sees the world in
                        grayscale. Often found staring blankly or performing repetitive tasks.
                      </p>
                      <p>
                        <b>WEAPON</b> 180 cm/70 inch-long Ōdachi, one of the last Bōsenmori blades. Hidden beneath her
                        bed, it's one of the few things she still remembers how to use properly.
                      </p>
                      <p>
                        <b>COMMON BELONGINGS</b> A worn leather notebook for recording important information, faded
                        photographs she can't quite remember, gardening gloves with soil permanently stained into the
                        fabric.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="verse" className="mt-0">
                    <div className="space-y-4">
                      <p>
                        <span className="title">THE BŌSENMORI LEGACY.</span> For centuries, the Bōsenmori family had
                        been guardians of traditional Okinawan martial arts. Their dojo was not only a training grounds, 
                        but a love letter to their heritage, preserving techniques that dated back to the Ryukyu Kingdom. 
                        Mei was the chosen heir, trained from childhood in the way of the sword.
                      </p>

                      <p>
                        <span className="title">ALMIGHTY THUNDER.</span> In competitive circles, she was unmatched. Her
                        mastery of <i>iaijutsu</i> was legendary. She could cut through steel as easily as silk, 
                        her movements so precise they seemed to bend reality itself. 
                        The title "Almighty Thunder" was fitting, even if she didn't see it that way, for her opponents
                        would often liken her strikes to lightning and thunder itself: agile, merciless, and
                        you would only perceive it coming after she has long struck you.
                      </p>

                      <p>
                        <span className="title">THE CORPORATE INVASION.</span> Takamagahara Consolidated's interests
                        initially manifested as a pursuit for profit, but profit does not care for the blood squeezed
                        alongside their coin. The most profitable avenue lied in exploiting historical institutions,
                        and so they did it, using legal warfare to seize properties and then commercializing the names 
                        and histories to promote their products. Ancient dojos became themed restaurants. 
                        Sacred temples became tourist attractions.
                      </p>

                      <p>
                        <span className="title">THE ARTIST'S SACRIFICE.</span>{" "}
                        <span
                          className="spoiler altcolor"
                          onClick={(e) => {
                            const target = e.target as HTMLElement
                            target.classList.add("revealed")
                          }}
                        >
                          Cyrene
                        </span>{" "}
                        was a Russian artist who had moved to preserve cultural heritage through her work. She fell in
                        love with both Mei and the traditions she represented. When the legal battles began, she
                        liquidated her galleries, sold her art, spent her life savings on lawyers and legal fees. She
                        gave everything to save what Mei loved most.
                      </p>

                      <p>
                        <span className="title">THE SLOW DECLINE.</span> The stress culminated with Mei's early-onset
                        dementia. As the legal battles dragged on, she began forgetting names, faces, even basic tasks.{" "}
                        <span
                          className="spoiler altcolor"
                          onClick={(e) => {
                            const target = e.target as HTMLElement
                            target.classList.add("revealed")
                          }}
                        >
                          Cyrene
                        </span>{" "}
                        became her caregiver, her anchor, her everything. But the strain was too much. When she was transported
                        to a 'mental health facility', she was informed of her lover's passing, supposedly due to the stress
                        of having to care for her. 
                      </p>

                      <p>
                        <span className="title">ESCAPE TO CELESTIA'S CROSSING.</span> Declared unfit to care for
                        herself, Mei was sent to a Takamagahara-funded 'mental health' facility. But some spark of her old self
                        remained. She escaped with nothing but her sword and the clothes on her back, eventually finding
                        her way to a small farming community where no one knew her past—and no one judged her present.
                      </p>

                      <p>
                        <span className="title">A NEW KIND OF STRENGTH.</span> In Celestia's Crossing, she's learning
                        that there are different ways to be strong. Not the strength of the perfect cut or the
                        unbreakable will, but the strength to accept help, to live with loss, to find meaning in small
                        moments of connection.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="headcanons" className="mt-0">
                    <div className="space-y-2">
                      <p>
                        <b>HIDING HER STRUGGLES</b> Mei does not easily comment on her past nor her conditions. Though she is 
                        fully aware of them, the idea that others may look down on her for things she cannot change brings
                        extreme dread, and is one she is better off not thinking about. In her eyes, it's better if others regard her
                        as incompetent, rather than inherently unable to match their expectations without the proper assistance or accessibilities.
                        Above all, she fears the idea of being 'too much' for others to care for.
                      </p>
                      <p>
                        <b>MORNING ROUTINE</b> Every dawn, she practices sword forms in the field behind her house. It's
                        the one time her body remembers what her mind has forgotten. The townspeople have learned to
                        give her space during these sacred moments.
                      </p>
                      <p>
                        <b>THE NOTEBOOK</b> She carries a small leather journal everywhere, filled with names, faces,
                        and important reminders. Some entries are written multiple times in different handwriting, as if
                        different versions of herself tried to preserve the same memory.
                      </p>
                      <p>
                        <b>FARMING STRUGGLES</b> Her farm is barely functional. She forgets to water crops, loses track
                        of seasons, and sometimes stares at tools as if seeing them for the first time. 
                        <span
                          className="spoiler"
                          onClick={(e) => {
                            const target = e.target as HTMLElement
                            target.classList.add("revealed")
                          }}
                        >
                          This is mainly because she is not adequated with Celestia's Crossing's crops nor climate;
                          being in comfortable situations, or scenarios she has executed to the point of being able to perform them thoughtlessly,
                          is best for her. Having to understand new crops and their adequate conditions is overwhelming,
                          translating into this seemingly unfamiliarity with farming.
                        </span>{" "}
                      </p>
                      <p>
                        <b>COLOR BLINDNESS</b> Her achromatopsia means she sees the world in grayscale. She asks people
                        to describe colors to her, building a new vocabulary of emotion-based hues. "The color of
                        sadness," one might say about the ocean, "but peaceful sadness."
                      </p>
                      <p>
                        <b>COOKING DISASTERS</b> Her memory loss and dulled tastebuds affected her cooking abilities. 
                        She often forgets ingredients or steps, leading to strange combinations at times, or excessive
                        amounts of seasoning in others. <span
                          className="spoiler"
                          onClick={(e) => {
                            const target = e.target as HTMLElement
                            target.classList.add("revealed")
                          }}
                        >
                          Curiously, she is still a very capable cook: but as is with most things, she works best when directed,
                          as having to focus on less aspects of an activity, such as what dish to make or what steps to follow,
                          allow her to perform their manual tasks to excellence.
                        </span>{" "}
                      </p>
                      <p>
                        <b>PHANTOM MEMORIES</b> Sometimes she reaches for someone who isn't there, calling out a name
                        she can't quite remember. She will occasionally cook for two people out of habit, 
                        setting two places at the table, then stare at the empty chair in confusion.
                      </p>
                      <p>
                        <b>MUSCLE MEMORY</b> While her episodic memory fails, her procedural memory for martial arts
                        remains strong. She can still perform complex sword techniques flawlessly, even when she can't
                        remember her own name.
                      </p>
                      <p>
                        <b>REPETITIVE BEHAVIORS</b> Her OCD manifests in checking locks multiple times, organizing tools
                        in specific patterns, and restarting tasks if they don't feel "right." The repetitive nature of
                        farm work actually soothes these compulsions, though they may grow into paranoia if unchecked.
                      </p>
                      <p>
                        <b>GOOD DAYS AND BAD DAYS</b> Some mornings she wakes clear-headed and more lucid. Others, she's
                        lost and confused. She fears that these bad days may grow as time goes on.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="rules" className="mt-0">
                    <div className="space-y-4">
                      <p>
                        This is an independent AU portrayal of {" "}
                        <span className="acolor">ACHERON</span> from <b>HONKAI: STAR RAIL</b>.
                      </p>
                      <p>
                        <b>CONTENT WARNINGS:</b> This portrayal deals with themes of dementia, memory loss, trauma,
                        grief, and mental health struggles. Please feel free to criticize my portrayal if you feel
                        that I am not adequately handling these topics; much of it is drawn from my own experiences,
                        but there are some others that, admittedly, I am not so well versed in. Still, I'll do my best 
                        to study what I must, in order to portray her accurately.
                      </p>
                      <p>
                        <b>INTERACTION GUIDELINES:</b> Please be mindful when interacting with this character. Her
                        conditions are not plot devices but integral parts of her identity. Avoid "miracle cures" or
                        dismissive attitudes toward her struggles, unless, of course, if you wish to earn her animosity.
                      </p>
                      <p>
                        All images used in this profile are either official artwork by miHoYo, or fan-art credited to
                        their respective artists. Feel free to inform me if any images or content are not adequately
                        credited.
                      </p>
                      <p>
                        <b>ART</b>{" "}
                        <a href="https://zephyrine-gale.tumblr.com/post/754278829130924032/acheron">Zephyrine Gale, </a>
                        <a href="https://x.com/llmia4/status/1772928568869196049">Llmia4.</a>
                      </p>
                      <p>
                        <b>MUSIC</b> HOYO-MIX, Black Kirin (Metal band)
                      </p>
                    </div>
                  </TabsContent>

                  {/* <TabsContent value="extra" className="mt-0">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#7c5cff] mb-4 font-['D-DIN']">Character Studies</h3>
                        <p className="text-sm text-gray-300 mb-4 font-['D-DIN']">
                          Explore deeper aspects of Mei's life in Celestia's Crossing through these detailed studies and
                          analyses.
                        </p>
                        <div className="space-y-3">
                          {characterStudies.map((study, index) => (
                            <div key={index} className="border border-[#7c5cff]/30 p-3 rounded">
                              <button
                                onClick={() => openStudy(study.title, study.content)}
                                className="text-[#7c5cff] hover:text-[#b21919] font-semibold text-sm mb-2 transition-colors duration-200 font-['D-DIN'] underline"
                              >
                                {study.title}
                              </button>
                              <p className="text-xs text-gray-400 leading-relaxed font-['D-DIN']">
                                {study.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-[#7c5cff]/30 pt-4">
                        <h4 className="text-md font-semibold text-[#7c5cff] mb-2 font-['D-DIN']">
                          About Celestia's Crossing
                        </h4>
                        <p className="text-sm text-gray-300 font-['D-DIN']">
                          A tight-knit farming community where everyone knows everyone. The town features various small
                          businesses including farms, personal clinics, and shops. Main attractions include the mines,
                          the ocean, and the mysterious Calico Sumeru desert filled with dangerous creatures and ancient
                          relics. It's a place where people look out for each other, especially those who need extra
                          care.
                        </p>
                      </div>

                      <div className="border-t border-[#7c5cff]/30 pt-4">
                        <h4 className="text-md font-semibold text-[#7c5cff] mb-2 font-['D-DIN']">
                          Mental Health Representation
                        </h4>
                        <p className="text-sm text-gray-300 font-['D-DIN']">
                          This portrayal aims to represent dementia and related conditions with dignity and accuracy.
                          Mei's struggles are real and ongoing, but so is her resilience and the community's support.
                          Her story is one of adaptation, not tragedy—finding new ways to live meaningfully despite
                          significant challenges.
                        </p>
                      </div>
                    </div>
                  </TabsContent> */}
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

      {/* Character Study Overlay */}
      {selectedStudy && (
        <CharacterStudyOverlay
          isOpen={overlayOpen}
          onClose={closeOverlay}
          title={selectedStudy.title}
          content={selectedStudy.content}
        />
      )}
    </div>
  )
}
