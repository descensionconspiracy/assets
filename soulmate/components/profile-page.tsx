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
  verse: "shadow" | "ghost"
}

export default function ProfilePage({ onBack, verse }: ProfilePageProps) {
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
      title: "The Deep-Sea Diver",
      description:
        "An exploration of ACHERON's Self-Annihilation and the pain of forgetting. This study delves into ACHERON's deep dependance on her sword, Naught, examining themes of identity loss, comfort in familiar objects, and her attachment to Frebass.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5ceq5zvo4.png" style="height: 100%" /></header>

<div class="acheron-post">Memory is a <u>malfunction</u>. A data fragment from a <u>corrupted drive</u>, phasing into bytes as it struggles to be processed. It's not a portent: THEY do not bother with omens. It's just an echo, triggered by a glitch in the sensory input—the precise angle of a stranger's back, or the cold press of a night that feels like a place I can no longer name.<br /><br />A phantom reel. Toasted marshmallows beneath the light of a <u>nebula</u>, their color <em>faded</em>, the sweetness a ghost on my tongue. The faint sting of a rebuke over charred treats. Watching the stars, not for the spectacle, but for the hope that one may birth a black hole. The memories are worn thin, the ghosts of ghosts. Useless baggage that even THEY failed to erase.<br /><br />I pursue the trigger-image through the crowd. An old, deeply ingrained habit from a life filed for deletion. And for a sliver of a second, the universe plays a cruel joke: the figure turns, and a connection <em>almost</em> sparks. Fate grants me a moment.<br /><br />There, the spark dies. <u>I do not know this face</u>. And if it recognizes me, it gives no sign. My senses overload. The world dissolves into a roar of static, their voice lost in the noise. My eyes fix on their lips, trying to parse meaning from shapes, but the data is gone. I am a relic of the past, trying to read a dead language.<br /><br />My hand clenches, reaching for the hilt of a sword that is not there. (This world forbids the open carry of blades. A trivial rule, but beyond my habit.)<br /><br />The absence is a physical pain, a void where my purpose should be. So I <em>run</em>. The last expression I register is disgust. An appropriate response. Coming into encounter with me is sufficient to ruin anyone's day.<br /><br />The world is monochrome. Every street is the same gray corridor on a path to nowhere. Every gaze is a pinprick, a reminder of what abyss lies within me, and what gazes back at them. <u>Stop looking at me</u>.<br /><br />My legs are leaden. The meal I ate turns to lava, and it wishes to erupt. My heart hammers, a frantic drumbeat counting down to my own dissolution. Comfort is a lie. Stability is an illusion. There is only the sword. I will not be whole—or what passes for whole—until I hold it.<br /><br />I keep running. My body begins to fail. Vision blurs at the edges. I collide with something, someone. Irrelevant. The building. The stairs. (The lift is out of service. <em>Of course </em>it's fucking broken.) I claw my way to my room.<br /><br />My first and only instinct: the blade. I search pathetically. Not by the bed. Not in the closet. The world tilts, collapsing into darkness before I remember. The mattress. A compartment. There, nestled between cheap linen, lies <strong>NAUGHT</strong>. My <strong><em>Origin</em></strong>.<br /><br />I draw it onto my hands. The cold scabbard is a shock to the system, a hard reset. I lay it across the bed, my fingers tracing its lines. I grasp the handle, unsheathing it just enough that <strong>a sliver of red light</strong> reflects in my eye. The only color left. A reminder.<br /><br />(This. This is the one truth I have left to wield.)<br /><br />With the blade comes <strong>remembrance</strong>, sharp and clean. The memory of her. Her standing on the edge of <u>everything</u>, clad in scrap metal and discarded oxygen tanks. A self-made medallion gleaming on her chest, a final, futile piece of identity before the plunge. She was <strong>smiling</strong>.<br /><br />I remember the dead weight of her lead boots, designed to pull her down, to ensure she sank into the nothingness she craved. She was so proud of them. I remember her stride into her own grave, with the joy of a pilgrim reaching a holy site. She ran toward the very thing that erased me.<br /><br />I, who was forged in a dying star's last light, could only stand and watch this tiny spark seek its own deliberate end.<br /><br />For a moment, a clinical curiosity. Will there be an end to this slow decay? How much more of me can THEY whittle away? My memories, my senses, my friendship, my history, my past, my very name. Will I be reduced to <strong>NAUGHT</strong>, or is this the point? An endless, grinding torture?<br /><br />But amid the static and the fading light, there is one certainty.<br /><br />A truth as cold and hard as the edge of my blade.<br /><br /><strong>She surely must have found what she was looking for, and I will meet her there, at the End of Nihility.</strong></div>
</div>
</div>`,
    },
    {
      title: "A LITANY OF GHOSTS // THE PEERLESS FLOWER",
      description:
        "A study covering the entirety of ACHERON's backstory, from the birth of the Almighty Thunder, to the Bearer of Origin, until reaching the Emanator of Nihility.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header">
<video class="acheron-avatar" controls="" src="https://cdn.imgchest.com/files/yxkczgmqgq7.mp4" style="height: 100%">&nbsp;</video>
</header>

<div class="acheron-post">The first lie they teach you in Izumo is that a sword is for peace. It is a pretty lie, told to children so they do not choke on the ash of their ancestors. A sword is a question, and its only answer is a wound. Children learned this before they had a name that was truly for themselves.<br /><br />She was born <u>into the gloaming of a dying world</u>, a planet locked in a suffocating embrace with its twin, Takamagahara, both circling <u>a hungry void</u> they mistook for a sun. From this twin planet bled the Kami. They were annihilation given shape, a divinity measured only in the thoroughness of their slaughter.<br /><br />Izumo's answer was to commit a grave and terrible sin. They learned to kill their gods. Taking the divine offal of the slain Sovereigns, the flesh and bone of their nightmares, they forged the twelve Edict Edges. To wield one was to invite the taint of the heavens into your blood, to become <strong>Oni</strong>.<br /><br />It was the only way to survive.<br /><br />In this age of fire and blood, the third blade, <span style="color:#7c5cff;">Howl</span>, was quenched. Forged from the still-thrumming heart of the <font color="#7c5cff">Almighty Thunder</font>, it was a weapon that screamed with the fury of a dying god. When the forging was done, the blade chose its master not from the ranks of grizzled warlords, but from the quiet solitude of the <font color="#7c5cff">Raiden</font>. It chose a girl with eyes like <font color="#7c5cff">orchids in shadow</font>, a child already ancient beyond her years. It chose <span class="name">Raiden Bōsenmori Mei</span>.<br /><br />Her swordsmanship was a thing of terrifying stillness, a doctrine born of necessity. By day, she practiced the rigid, unyielding forms of the Executor clans. By night, her father, hiding his disgrace beneath a costume of a cartoon, 'Swordmaster HOMU', had taught her in secret. It was a fluid, almost playful style, through which he sought to impart the compassion of a warrior. She never knew its name, nor that he was her father; she only knew the guilt of their gentleness.<br /><br /><span class="name">Mei </span>built upon this foundation, her style a contradiction between the serenity of a still pool and the fluidity of the <font color="#7c5cff">lightning strike</font>. It was the <em><font color="#7c5cff">Tengoku no Ittō</font></em>, the study of a single, perfect cut, the principle of the swordsmanship—<em>iaijutsu</em>—refined to an almost preternatural degree. One motion, one heartbeat, one life extinguished. It was a mercy, of a kind.<br /><br />She was the <span class="name">calm before a storm, and its most fervent element</span><font color="#7c5cff">. </font><br /><br />For this, they called her <font color="#7c5cff">the Almighty Thunder</font>, after the slain Kami that birthed her blade.<br /><br /><em>It was a lie she carried with grace.</em><br /><br />To live for so long is to become a graveyard of memories. Her dearest ghosts were those she fought beside in the long war against the Kami.<br /><br />Hakuhatsu Ki, the White Oni, her oldest friend and bitterest rival, the brilliant sun to her cold moon, whose hands held together against the world. They had walked the same path of duty until their ideologies cleaved them apart. He, a pragmatic soul worn down by endless slaughter, saw humanity's flaws as a terminal illness, to be healed by the Oni's curse. Their debates, shared over games of Go, once impassioned, grew as cold and sharp as the steel they wielded.<br /><br />There were the vanguards of the early war, a fellowship of fleeting warmth. The Bearer of Flare, a flame-haired warrior whose laughter was as fierce as her blade, who fell defending a city that would later turn to ash. The Wisdom Supreme, a stoic guardian, her mind a fortress of forgotten histories. The Weaver of Truth, a prodigy whose mastery of technology made her a ghost in their own machine. There were others still, brief, tragic sparks.<br /><br />A young outworlder, a princess of condemnation, whose grand pronouncements of fate were swallowed by the miasma, and a girl of two aspects, one dark and one light, death and rebirth, forced apart by a fractured society.<br /><br />Before all of them still came the <span style="color:#6c3b1c;">First</span>. A man whose wisdom was an ossuary, he had outlived his own era to become a mentor to theirs. He had handed them the chisel and the hammer, and watched as one chose to carve a future, and the other, a perfect, final grave.<br /><br />Then came <span style="color:#ffc0cb;">Elysia</span>. She was a flower of impossible colour. She smelled of petals in a world that knew only the stench of blood and rot. Where others saw flawed, fleeting mortal lives, <span style="color:#ffc0cb;">Elysia</span> saw beauty. She loved humanity, and she loved the quiet, sorrowful warrior who fought for them.<br /><br />In a secret garden, <span style="color:#ffc0cb;">Elysia</span> gave Mei a silver ring, fashioned with crystalline flowers of pink zircon.<br />"So you remember," she had whispered, her voice like the shattering of a thousand tiny crystals, "that the strongest of flowers can <em>bloom in the dark</em>." Mei has never taken it off, not once. Today, it is tied to the hilt of a sword <span style="color:#ffc0cb;">Elysia</span> would never see. A sword she <em>couldn't</em> ever see.<br /><br />It was this love that set her against Hakuhatsu Ki's grand, terrible design. Faced with the encroaching curse of the Kami, he proposed to weave a global dreamscape: to seize the splintered Edict Edges of their fallen comrades, and weave the souls of all humanity into a single, perfect, unending dream; so that all would become <strong>Oni</strong>, and therefore impervious to the miasma condemning them. A final, beautiful prison. A promise of heaven built upon the death of faith.<br /><br /><span class="name">Mei refused</span>. To trade the messy, vibrant struggle of life for a sterile, unchanging dream was a betrayal of everything humanity was; a betrayal of what <span style="color:#ffc0cb;">Elysia</span> imparted on to her.<br /><br />Their final conflict was inevitable. For Mei to stand against Hakuhatsu Ki and his master plan, she required a weapon powerful enough to sway the hearts of humans themselves, who could never desire to awaken from perfect dreams into such a terrible nightmare.<br /><br />The consummation of her bond with <span style="color:#ffc0cb;">Elysia</span> was not one of flesh, but of divine sacrifice. Their wedding bed was an altar of black steel. With a final, tearless kiss, <span style="color:#ffc0cb;">Elysia</span> offered her own divine body, so that it may become the hopes and dreams of humanity. Her flesh, the core of a being who transcended her kind, was rendered down and fused with the silent <font color="#7c5cff"><em>Howl</em> </font>and splinters of the other eleven blades.<br /><br />In this crucible of supreme love and fathomless sorrow, the blade of <span style="color:#ffc0cb;">Origin </span>was forged. They met in a shattered dreamscape, the twin bearers of Izumo's destiny. The clash of Origin and End was a war of philosophies made manifest. When the dust settled, both blades were broken: Mei stood victorious.<br /><br />But, in her victory, she saw the ultimate, soul-crushing truth.<br /><br />The black sun was not a star; they had long since stepped into <u>THEIR</u> Shadow.<br /><br />Their millennia of war, the lives lost, the love shared, the sacrifices made... all were utterly <u>meaningless</u>. They were a momentary ripple in a sea of entropy, a story without so much as a footnote in the annals of history. On the edge of that final, silent despair, her soul yearned for the peace of <u>NIHILITY</u>. But her fingers found the cool metal of the ring on her hilt. A memory. A promise.<br /><br /><strong>A single, crimson tear</strong>, the last of her remaining humanity, <u>cried in the cold silence</u> of her world and fell upon the shattered remains of <font color="#ffc0cb">Origin</font>. With that drop of blood and memory, she gave the blade her very existence. <span style="color:#ffc0cb;">Origin</span>, the blade of <strong>Life</strong>—of <span style="color:#ffc0cb;">love</span>—was forged into <strong>Naught</strong>.<br /><br />"If I must be the last light of this world," she vowed, with the shattered <span style="color:#ffc0cb;">corpse</span> of humanity's hopes in her hand, "then I will shine until the end." <br /><br />She slashed at that horrifying, all-consuming abyss, and, from it, the very history of her world spilled forth, as blood from a seeping wound. She was consumed, remade, and cast out into the cosmos, an <u>Emanator</u> of the very path she had defied, and a <u>destroyer</u> of the very world she once protected.<br /><br /><span class="name">Raiden Bōsenmori Mei</span> sank into the grace of the sleeping and shapeless, from which <strong>ACHERON</strong> was born. Now, she wanders the cosmos, her name known by none.<br /><br />She never draws her blade, for its edge is the <u>shard of the abyss</u> itself. But sometimes, in the quiet between worlds, her fingers trace the shape of a small, silver ring tied to its hilt, a final, defiant memory of <span style="color:#ffc0cb;">a flower that once dared to bloom in the <u>dark</u></span>.</div>
</div>
</div>`,
    },
    {
      title: "Romance Chart",
      description:
        "A small compatibility chart done for fun, outlining ACHERON's preferences and potential relationship dynamics. Do not take it too seriously, but it's kind of accurate.",
      content: `<div class="acheron-body">
    <div class="acheron-container">
        <div class="profile-container">
            <div class="profile-content">
                <div class="header">
                    <h1>Romance Chart</h1>
                </div>

                <div class="top-section">
                    <div class="basic-info">
                        <div class="info-item">
                            <div class="label">Name</div>
                            <div class="meicolor">Raiden Bosenmori Mei</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Gender</div>
                            <div class="lesbian-gradient"><font color="#b21919">Lesbian</font></div>
                        </div>
                        <div class="info-item">
                            <div class="label">SOULMATE</div>
                            <div><strong>None known.</strong></div>
                        </div>
                        <div class="info-item">
                            <div class="label">Race/Species</div>
                            <div><strong>Oni</strong></div>
                        </div>
                        <div class="info-item">
                            <div class="label">Role</div>
                            <div>Nomad, odd-jobs.<br /><br /><strong>Watcher of the River.</strong></div>
                        </div>
                        <div class="info-item">
                            <div class="label">Alignment</div>
                            <div>Chaotic Neutral</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Star Sign</div>
                            <div>Cancer Sun and Moon</div>
                        </div>
                    </div>

                    <div class="avatar-section">
                        <img alt="Arlecchino" src="https://cdn.imgchest.com/files/y2pck6mxak7.png" />
                    </div>

                    <div class="challenge-section">
                        <div class="label">Challenge Rating</div>
                        <div class="hearts">
                            <div class="heart"></div>
                            <div class="heart"></div>
                            <div class="heart"></div>
                            <div class="heart"></div>
                        </div>
                        <div>Easy<br />Intermediate<br />Difficult<br /><b class="meicolor">Nightmare</b></div>

                        <div class="love-languages">
                            <div class="label">Love Languages</div>
                            <div class="checkbox-group">
                                <label class="checkbox-container">Acts of Service
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Physical Touch
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Quality Time
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Words of Affirmation
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Receiving/Giving Gifts
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="identity-sections">
                    <div class="identity-section">
                        <div class="label">Romantic Identity</div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Shy</span> <span class="acolor">Confident</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="75" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Delusional</span> <span class="acolor">Rational</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="90" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Cold</span> <span class="acolor">Warm</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="70" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Jealous</span> <span class="acolor">Understanding</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="100" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Greedy</span> <span class="acolor">Giving</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="100" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Paranoid</span> <span class="acolor">Carefree</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="100" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Monogamous</span> <span class="acolor">Polyamorous</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="30" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Impulsive</span> <span class="acolor">Calculated</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="80" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Pessimistic</span> <span class="acolor">Optimistic</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="70" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Submissive</span> <span class="acolor">Dominant</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="100" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Aromantic</span> <span class="acolor">Romantic</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="50" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Asexual</span> <span class="acolor">Deviant</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="30" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Vanilla</span> <span class="acolor">Kinky</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="50" />
                        </div>
                    </div>

                    <div class="identity-section">
                        <div class="label">Ideal Partner</div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Timid</span> <span class="acolor">Confident</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="50" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Serious</span> <span class="acolor">Playful</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="70" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Aloof</span> <span class="acolor">Romantic</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="100" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Kind</span> <span class="acolor">Cruel</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="50" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Stiff</span> <span class="acolor">Sassy</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="70" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Relaxed</span> <span class="acolor">Ambitious</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="50" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Feral</span> <span class="acolor">Elegant</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="50" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Evil</span> <span class="acolor">Good</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="30" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Vanilla</span> <span class="acolor">Deviant</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="90" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Submissive</span> <span class="acolor">Dominant</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="10" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Poor</span> <span class="acolor">Rich</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="30" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Possessive</span> <span class="acolor">Carefree</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="35" />
                        </div>
                        <div class="scale-item">
                            <div class="scale-labels"><span>Thoughtful</span> <span class="acolor">Outspoken</span></div>
                            <input class="scale-slider" max="100" min="0" type="range" value="90" />
                        </div>
                    </div>
                </div>

                <div class="bottom-sections">
                    <div class="gifts-section">
                        <div class="section-title">Gifts to Woo</div>
                        <div class="two-column-content">
                            <div class="checkbox-group">
                                <label class="checkbox-container">A Lock of Hair
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Poetry
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Pet
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Property
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Vacation
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Flowers/Plants
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Food/Cooking
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                            </div>
                            <div class="checkbox-group">
                                <label class="checkbox-container">Gemstones
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Jewellry
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Enemy's Head
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Love Letters
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">A New Weapon
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Painting
                                    <input checked="checked" type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                                <label class="checkbox-container">Money
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="dates-section">
                        <div class="section-title">Ideal Date</div>
                        <div class="two-column-content">
                            <div class="ideal-date-column">
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Rural Picnic</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Nature Walk</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Sunset Watching</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Dancing</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Heists</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Dining Out</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Spa Day</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Baking</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="ideal-date-column">
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Shopping</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Skinny Dipping</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Nap Together</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Starwatching</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Theatre</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Hunting</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Sex</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="ideal-date-item">
                                    <span class="ideal-date-label">Defeating Foes</span>
                                    <div class="ideal-date-circles">
                                        <div class="circle filled"></div>
                                        <div class="circle filled"></div>
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flags-section">
                    <div>
                        <div class="label">Green Flags</div>
                        <ul>
                            <li>Will cook for you</li>
                            <li>Will stand up for you</li>
                            <li>Great guidance, insightful</li>
                            <li>Strives to understand you</li>
                        </ul>
                    </div>
                    <div>
                        <div class="label">Red Flags</div>
                        <ul>
                            <li>Aloof, distant, detached</li>
                            <li>Forgetful & bad with directions--will always miss dates</li>
                            <li>Never settles, always on the move</li>
                            <li>Will traumatize you</li>
                        </ul>
                    </div>
                </div>

                <div class="footer-section">
                    <div>
                        <div class="label">Attachment Style</div>
                        <div class="acolor">Anxious-avoidant</div>
                    </div>
                    <div>
                        <div class="label">Song</div>
                        <div><a href="https://soundcloud.com/formless-409122475/pitter-patter">Death Contract - BLACK KIRIN</a></div>
                    </div>
                    <div>
                        <div class="label">Flower</div>
                        <div class="acolor"><font color="#b21919"><b>Red Spider Lily (Higanbana)</b></font></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    },
    {
      title: "On names and memory",
      description:
        "A study on monologues, and ACHERON's reasoning for keeping her identity obscured from Welt. An alternate route for their conversation in Penacony.",
      content: `<div class="acheron-body">
<div class="acheron-container">
<header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar" src="https://cdn.imgchest.com/files/yd5celw6la4.jpg" style="height: 100%" /></header>

<div class="acheron-post"><span style="color: #6c3b1c;">"Still unwilling to reveal your true identity?"</span><br /><br />She meets his eyes. For a moment, there's a flicker of something old, exhausted, behind her own.<br /><br />"I wish I could," she says, her voice a low murmur. "But I can't."<br /><br />"Believe it or not: Galaxy Ranger, <u>ACHERON</u>...", she recites, "those are the names I go by to this very day."<br /><br />Her eyes fall upon him once more: empty as the void of space.<br /><br />"Suppose you see a new thing. Something that has never <em>been</em> before, and thus, it has no name." She makes a small, almost imperceptible gesture, as if tracing a line on an invisible map.<br /><br />"You have, at that moment, gazed upon reality. And yet..." Her focus tightens for a barest second. "You cannot tell <strong>anyone</strong>. Not <em>really</em>, not <strong><em>truly</em></strong>."<br /><br />"Someone will ask you," she continues with the cadence of a fading memory, "'What have you seen?' And you must try to answer. You might say... the first ice."<br /><br />'It is clear like water, but it is hard like rock. It bites, like a serpent.'<br /><br />She gives a slight, humorless smile. It doesn't reach her eyes.<br /><br />"They will nod. And they will think of water, and rock, and serpents."<br /><br />"But they cannot <em>know</em> the thing. They can only know <em>of</em> it, a phantom constructed from the ghosts of other things."<br /><br />The train of thought is lost. She picks at the hilt of her sword, fingers examining its intricate shape curiously... until the thought resumes.<br /><br />"Then," she continues, her focus snapping back, her voice dropping, losing its faint, questioning tone. "Its naming comes. 'Ice.' And the world <em>murders</em> the miracle it once was. It builds a cage around reality, so that it can be carried from place to place."<br /><br />"In exchange, they forget the miracle of the unknown. They only view the label they have hung upon it."<br /><br />Her voice drops, becoming colder, closer to the truth of her being.<br /><br />"But the world is still full of stories that have never been told. Of phenomena never once experienced. There was once a great, burning sun looming over the limb of a forgotten world, bleeding the remains of its corpse. It is none of these things, and it is all of them."<br /><br />She finally looks directly at Welt, and for a fleeting instant, he feels the impossible gravity of her gaze. It's not a threat, but a statement of <strong>fact</strong>.<br /><br />"To look upon reality is to be struck <strong>silent</strong>, to find that all naming has failed you."<br /><br />I have looked upon such things, and <u>THEY</u> have gazed upon me. I have stared into <u>THEIR</u> heart.<br /><br />"I've come so far, and I can't sum up all of that in just a few words."<br /><br />"Everyone has their own unspeakable past," she says, the mask of the weary traveler settling back over her features. "Secrets they don't want revealed. As such, I won't be asking any further questions..."<br /><br />"... such as why the Astral Express is roaming the cosmos with a Stellaron on board."</div>
</div>
</div>`,
    },
  ]

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
        headcanons: (
          <div className="space-y-2">
            <p>
              <b>MAKEUP</b> Though she mostly uses little to no make-up, she still carries a fresh set commonly with
              her, both as a way to remember what little she can of her old land, and to 'help' women who might need
              them.
            </p>
            <p>
              <b>MUSIC</b> Once, in the past, she desired to learn musical instruments, but she did not have much time
              between her obligations as a warrior and leisure. Still, she appreciates musicians deeply to this day, and
              certain types of music bring her great relaxation.
            </p>
            <p>
              <b>REMEMBRANCE</b> ACHERON is capable of recovering her memories when touching the hilt of her blade. This
              is not a magical property of the sword, rather, it is a result of a lifetime of practice in fencing, and
              the <i>bushido</i>, which has instilled a strong emotional release with the act of drawing the blade, and
              vice versa. These emotions are what clear the fog in her mind, if only at the price of tormenting her with
              her greatest failures, and are one of the reasons she does not unsheathe her blade recklessly.
            </p>
            <p>
              <b>MEMORY</b> 'Some things are hard to remember, others, hard to forget.' For <b>ACHERON</b>, it is
              awfully difficult, if not outright impossible, to forget certain things, such as the{" "}
              <span className="altcolor">Origin</span> of her own name, and her encounter with Black Swan.
            </p>
            <p>
              <b>LOVE</b> Even someone like <b>ACHERON</b> has once been held fondly in{" "}
              <span className="altcolor">someone</span>'s heart. She keeps a ring attached to the hilt of Naught, her
              sword, given to her by her wife on the day of their marriage. One of the few mementos she still keeps from
              her lost homeland. <br />
              <br />
              This was also the day of her <span className="altcolor">wife</span>'s passing—a story she does not often
              share.
              <br />
              <br />
              "So you remember," <span className="altcolor">she</span> had whispered, "a flower can bloom even in the
              darkest places."
            </p>
            <p>
              <b>FEAR</b> Presently, there is virtually nothing she fears; the certainty of{" "}
              <span className="meicolor">NIHILITY</span> is oddly reassurring. Her only fear is forgetting the days
              spent with her trailblazing companion, Frebass.
            </p>
            <p>
              <b>KENDO</b> She learned the Art of the Sword from a strange cartoonish character,{" "}
              <MoreInfo className="meicolor" info="<img src='https://cdn.imgchest.com/files/7lxcp6g5lo7.webp'>">
                'Swordmaster HOMU'
              </MoreInfo>
              ; never finding out it was indeed her father in disguise, hoping to breach his shameful exile solely to
              pass down a kinder form of fencing to his beloved daughter.
            </p>
            <p>
              <b>COOKING</b> She came to develop great cooking skills in her life, but, as a result of her worsening
              tastebuds, she's often heavyheanded with seasoning, spices and garlic, placing the largest amounts
              of chopped garlic on ramen known to all beings.
            </p>
          </div>
        ),
        extra: (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#7c5cff] mb-4 font-['D-DIN']">Character Studies</h3>
              <p className="text-sm text-gray-300 mb-4 font-['D-DIN']">
                Some studies, drabbles, writings, headcanon exploration and other pieces exploring ACHERON's character and voice.
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
                    <p className="text-xs text-gray-400 leading-relaxed font-['D-DIN']">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>
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
              ACHERON
            </MoreInfo>
            {", or "}
            <MoreInfo
              className="acolor"
              info="Yomi/Huángquán, the Japanese Underworld/'Yellow River', the River of the Dead, where the souls of the departed reside."
            >
              黄泉
            </MoreInfo>
            {"."}
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
            <b>GENDER</b> <span className="lesbian-gradient">Lesbian</span>
          </p>
          <p>
            <b>AGE</b> <span className={`spoiler revealed`}>At least a few centuries, appears to be</span> in her late
            twenties
          </p>
          <p>
            <b>EPITHET</b>{" "}
            <MoreInfo
              className="acolor"
              info="A title she was once called in Izumo, having usurped it from the slain Kami whose very flesh was rendered to craft her first blade, the Third Edict Edge 'Howl'."
            >
              The Almighty Thunder
            </MoreInfo>
            {" (past)"},{" "}
            <MoreInfo
              className="meicolor"
              info="They are beings with power directly granted by the Aeons, incomparably more powerful than mere mortals. Acheron presides over the concept of NIHILITY, or nothingness—and in her particular arrangement, can draw power almost infinitely from this deity-like existence."
            >
              Emanator of Nihility
            </MoreInfo>
            {"."}
          </p>
          <p>
            <b>SOULMATE</b> None known.
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
            than ten amber eras. The consequence was little: only the very destiny of their world. Two paths were forged
            to save that world: <span className="altcolor">Origin</span> and End. Two futures, held by two rivals, a
            clash of ideologies to determine the saviour of their world.
          </p>

          <p>
            <span className="title">She stood victorious, And the universe laughed.</span> Their sun was no sun, but a{" "}
            <span className="acolor">black hole</span>. Their entire history—the war, the sacrifice, the hope—all of it
            was nothing but the final, frantic twitching of a corpse before the rot sets in. A story told in a closed
            room, with no one left to hear it.
          </p>

          <p>
            <span className="title">EVEN FACING A BLACK HOLE––WE STILL HAVE A CHOICE.</span> But though it appears
            meaningless, she still <span className="acolor">FIGHTS</span>. Acheron stands guard at the{" "}
            <MoreInfo
              className="acolor"
              info="The Horizon of Existence, also known as the Border of Nihility, is a phenomenon that marks the boundary between existence and nihility, that is, nothingness, the state of non-existence."
            >
              Horizon of Existence
            </MoreInfo>
            , leading the{" "}
            <MoreInfo
              className="acolor"
              info="Sin Thirsters are, essentially, lost souls who, in the River of Woe, reenact the obsessions of their lives aimlessly, under the illusion that they can control their fate."
            >
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
            <b>REMEMBRANCE</b> ACHERON is capable of recovering her memories when touching the hilt of her blade. This
            is not a magical property of the sword, rather, it is a result of a lifetime of practice in fencing, and the{" "}
            <i>bushido</i>, which has instilled a strong emotional release with the act of drawing the blade, and vice
            versa. These emotions are what clear the fog in her mind, if only at the price of tormenting her with her
            greatest failures, and are one of the reasons she does not unsheathe her blade recklessly.
          </p>
          <p>
            <b>MEMORY</b> 'Some things are hard to remember, others, hard to forget.' For <b>ACHERON</b>, it is awfully
            difficult, if not outright impossible, to forget certain things, such as the{" "}
            <span className="altcolor">Origin</span> of her own name, and her encounter with Black Swan.
          </p>
          <p>
            <b>LOVE</b> Even someone like <b>ACHERON</b> has once been held fondly in{" "}
            <span className="altcolor">someone</span>'s heart. She keeps a ring attached to the hilt of Naught, her
            sword, given to her by her wife on the day of their marriage. One of the few mementos she still keeps from
            her lost homeland. <br />
            <br />
            This was also the day of her <span className="altcolor">wife</span>'s passing—a story she does not often
            share.
            <br />
            <br />
            "So you remember," <span className="altcolor">she</span> had whispered, "a flower can bloom even in the
            darkest places."
          </p>
          <p>
            <b>FEAR</b> Presently, there is virtually nothing she fears; the certainty of{" "}
            <span className="meicolor">NIHILITY</span> is oddly reassurring. Her only fear is forgetting the days spent
            with her trailblazing companion, Frebass.
          </p>
          <p>
            <b>KENDO</b> She learned the Art of the Sword from a strange cartoonish character,{" "}
            <MoreInfo className="meicolor" info="<img src='https://cdn.imgchest.com/files/7lxcp6g5lo7.webp'>">
              'Swordmaster HOMU'
            </MoreInfo>
            ; never finding out it was indeed her father in disguise, hoping to breach his shameful exile solely to pass
            down a kinder form of fencing to his beloved daughter.
          </p>
          <p>
            <b>COOKING</b> She came to develop great cooking skills in her life, but, as a result of her worsening
            tastebuds, she's often heavyheanded with seasoning, spices and garlic, known to place the largest amounts of
            chopped garlic on ramen known to all beings.
          </p>
        </div>
      ),
      extra: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[#7c5cff] mb-4 font-['D-DIN']">Character Studies</h3>
            <p className="text-sm text-gray-300 mb-4 font-['D-DIN']">
                Some studies, drabbles, writings, headcanon exploration and other pieces exploring ACHERON's character and voice.
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
                  <p className="text-xs text-gray-400 leading-relaxed font-['D-DIN']">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
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
                  onClick={() => handleTabChange("extra")}
                  variant={activeTab === "extra" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${
                    activeTab === "extra"
                      ? "bg-[#b21919] border-[#b21919] text-white"
                      : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                  }`}
                >
                  Extra
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
                    value="extra"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    Extra
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
                        <b>HONKAI: STAR RAIL</b>, drawing heavy inspiration and parallels with HONKAI IMPACT 3RD.
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

                  <TabsContent value="extra" className="mt-0">
                    {verseContent.extra}
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
