"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioPlayer from "@/components/audio-player"
import CharacterImage from "@/components/character-image"
import CharacterStudyOverlay from "@/components/character-study-overlay"
import { ArrowLeft, Menu, X } from "lucide-react"
import MoreInfo from "@/components/more-info"

import { profileConfig } from "@/lib/profile-config"

interface ProfilePageProps {
  onBack: () => void
  verse?: "shadow" | "ghost"
}

export default function ProfilePage({ onBack, verse = "shadow" }: ProfilePageProps) {
  const [spoilersRevealed, setSpoilersRevealed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("ranger")
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [selectedStudy, setSelectedStudy] = useState<{ title: string; content: string } | null>(null)
  const [nihilityRevealed, setNihilityRevealed] = useState(false)
  const [expandedJournals, setExpandedJournals] = useState<Set<string>>(new Set())

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

  const toggleJournal = (journalId: string) => {
    setExpandedJournals((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(journalId)) {
        newSet.delete(journalId)
      } else {
        newSet.add(journalId)
      }
      return newSet
    })
  }

  const closeOverlay = () => {
    setOverlayOpen(false)
    setSelectedStudy(null)
  }

  // Helper function to create spoiler blocks
  const createSpoiler = (text: string) => {
    if (nihilityRevealed) {
      return <span className="text-[#b21919]">{text}</span>
    }
    return <span className="text-[#b21919] select-none">{"█".repeat(text.length)}</span>
  }

  // Vignette journal entries from different timelines
  const journalVignettes = {
    junah: `When I first heard tale of the Nidia people, I couldn't help but feel a striking sense of familiarity. 'Bright hair', the tavernkeep told me in passing, and a charisma brighter still. "Bright like the sun, drawin' you in like bugs to bonfires before it dries you up, then it's back to the mud with ya."

I paid the advice no heed. With great qualities come great failings—this I have always known—but too quickly I found some people in Euchronia prefer to become drunken in their prejudice, rather than their liquor. Indeed, it is those who shine the brightest that fear darkness the most. It is no wonder they would wish to hide their true forms.

When I first laid my eyes upon her, I came to understand the tavernkeep's fear. She was indeed dazzling as stars in the night sky, her voice capable of inspiring legions. 

But memory is a fickle thing in me. I could scarcely recall her song, nor the colour of the stage lights. I could only recall the emotion that took deep roots within my heart.

When our paths crossed, I called it a coincidence. As I set up camp for the night, singing and playing by the bonfire, I saw her come from between the shadows, as if she had never left the stage, and guide my fingers through her voice.

In that moment, beneath the twisted boughs of a world I do not belong to, I felt a striking sense of familiarity. The feeling of holding onto a beautiful thing while knowing the tide is already arriving to take it back.

I forget the lyrics she sang. But I remember the weight of the silence that followed. It felt like home.`
  }

  // Character studies content
  const characterStudies = [
    {
      title: "A romantic interview like no other (TO COME SOON)",
      description:
        "An interview with ACHERON on his ideal partner.",
      content: ``,
    },
    {
      title: "A Study on Names and Memory",
      description:
        "A philosophical dialogue exploring the nature of naming, reality, and the limitations of language. This piece examines ACHERON's inability to reveal her true identity and how words fail to capture the essence of true experience. Alternatively, ACHERON talking to Welt if she chose to - or if she could - speak more.",
      content: `<div class="acheron-body">
    <div class="acheron-container">
        <header class="acheron-header" style="padding: 0;margin: 0;"><img class="acheron-avatar"
                src="https://cdn.imgchest.com/files/yd5celw6la4.jpg" style="height: 100%" /></header>

        <div class="acheron-post"><span style="color: #6c3b1c;">"Still unwilling to reveal your true
                identity?"</span><br /><br />She meets his unflinching gaze. There's a flicker of something old
            behind her own. Something weary of this ever repeating song and dance. "I wish I could," she murmurs. "But I
            can't."
            <br /><br />"Believe it or not: Galaxy Ranger, <s>ACHERON</s>...", she recites, "those are the names I go by to
            this very day." Though he does well to obscure it, the wanderer catches a softness in his gaze. <em>The ghosts
            of his past, layered upon my face.</em> Her eyes flutter shut, weighing how much it would take to sate his
            curiosity, knowing his doomed expectations.<br /><br />"Suppose you see a new thing. Something that has
            never been before, and therefore nameless." She gestures faintly, tracing a line on an invisible canvas.
            "You have, at that moment, gazed upon reality. And yet... you cannot tell anyone. Not really, not truly."
            <br /><br />"Someone will ask you," she carries on with the cadence of a fading song, "'What have you seen?'
            And you must… you must try your best to answer. Say you have seen the first ice. 'It is clear as is water,
            and tough as a rock. It has a cold bite, like a serpent’s fangs sinking into flesh.'"<br /><br />Her lips
            twitch into a humorless smile. It doesn't reach her eyes.<br /><br />"They will nod. And they will think of
            water, and rock, and serpent’s fangs. But they cannot know what you've seen. They can only know of it, a phantasm
            constructed from the corpses of other things." The thought slips between her grasp. She picks at her
            sheathed blade, fingers fidgeting with its shape. ACHERON's face angles down, distracted by the pink ring
            hung from her sword’s hilt, threading it with her index claw. Just as Welt’s lips parted to interrupt her,
            she resumed.<br /><br />"Then… Its naming comes. 'Ice.' And the world murders the miracle it once was. It
            traps reality into a cage, into something small enough for the minds of men. They forget all its
            mystery, recalling only the label hung upon it." Her voice drops, and a cold breeze nips at his skin. She
            was certain as the coming winter, yet soft as snow petals flaking from the skies. <strong>"But the world is full of
            untold stories, of things never experienced. There was once a great black sun, looming over the limb of two
            forgotten worlds, bleeding the remains of their corpses. It is none of these things, and it is all of
            them."</strong><br /><br />Their eyes are drawn to each other, as are the sun and the moon. <em>Like two stars ready to
            collapse.</em> For a fleeting instant, Welt feels the impossible gravity of her gaze, her eyes heavy with the
            burden of a world. It was a burden he knew all too well. What he took for intimidation revealed
            itself now as sorrow, a hopeless cry reaching out from the edge of an event
            horizon. <em>A cry damning those who approach to step into THEIR shadow.</em><br /><br />
            "To look upon reality is to be struck <s>silent</s>, to find that all naming
            has failed you." <em>I have looked upon such things, and they have looked upon me.</em> "I've come so far,
            and I can't sum up all of that in just a few words."<br /><br />"Everyone has their own unspeakable past,"
            she concludes, the mask of the weary traveler settling back over her features. "Secrets they don't want
            revealed. As such, I won't be asking any further questions," the swordswoman pauses, turning away on her heel, "... such as why the Astral
            Express is roaming the cosmos with a <s>Stellaron</s> on board."
        </div>
    </div>
</div>`,
    },
  ]

  const getVerseTitle = () => {
    return "Shadow of IX";
  }

  const getVerseContent = () => {
    return {
      ranger: (
        <div className="space-y-4">
          <p>
            <span className="title">A NAME SPOKEN IN HUSHED TONES...</span>{" "}Ask eight million people of <span className="acolor">ACHERON</span> and you shall receive eight million answers. "A drifter from a world long-lost to
            ancient wars, seeking revenge on those who profited from the plunder of his homeland", some have claimed. Others hear the name and recall a figure who appeared to them in their darkest hours,
            one who did not tell them how they should act, but instead walked by their side, providing guidance through action, and knowledge through discernment, even if they could hardly
            understand the meaning—or the meaninglessness—behind his cryptic counsel.
          </p>

          <p>In some of the far, distant corners of the universe, it is the name of a story. A cautionary tale for soldiers, bounty-hunters and mercenaries alike.
            <span className="acolor"> ACHERON</span>: it is the darkness you see in the corner of your eye, especially when you think nobody is looking,
            in the moments you must make the decisions to be forever etched into your soul.<br /><br />Then, the story goes, the <strong>WATCHER</strong> shall be there at the end of the road,
            should you grow too arrogant to be humbled or think yourself too powerful to be bent. But she does not judge the damned. She only provides the sweet release of <strong>death</strong>,
            whether by writing their final page into the annals of history, or taking their souls to forge into the baleful blade forever at her side.
          </p>

          <p>More recently, some have attributed the moniker to an upcoming member of the{" "}
            <MoreInfo
              className="acolor"
              info="The Galaxy Rangers are a voluntarily formed group that travels around the cosmos to uphold justice for the locals out of the belief that benevolence and justice must be upheld by personal action."
            >
              Galaxy Rangers
            </MoreInfo>, who made waves in daily news blogs for consuming a record amount of <MoreInfo
              className="acolor"
              info="A pungent, bitter beverage that most refuse to drink—said to be only for those who are allergic to SoulGlad. Hardly the stuff of dreams."
            >
              'Wake the Heck Up'
            </MoreInfo>{" "} in Penacony's lounges.</p>

          <p>
            From all accounts, one certainty remains: <span className="acolor">ACHERON</span> is the river flowing among whispers of the crowds, a shadow outstretched by the phantoms
            of those who have stepped into its waters and lived to tell the tale.
          </p>

          <p>
            <span className="title">I AM ALL OF THESE THINGS, AND NONE OF THEM.</span>{" "}<span className="acolor">ACHERON</span> cares not for what others speak of him, nor how his actions are interpreted.
            She has seen stars come into being and their inevitable ceasing. She has witnessed wars brew and end, as if the world had not changed in the process. The passage of time is a sense she has grown dull for,
            with seconds, hours and decades coming to carry a similar weight.
            If the essence of the world is the spirit — our souls, tiny seeds that hold our memory of the world — and we are the trees that grow in it, then she has no soul at all.
          </p>

          <p>
            <span className="acolor">ACHERON</span> is a stranger to himself, and thus, he does not see the point in being known by others. Those who have met him only remember fragments, echoes of his presence,
            overlapped with their own desires and expectations. When he meets those who see echoes of other women upon his face—be it{" "}
            <MoreInfo
              className="acolor"
              info="<img src='https://scontent.fcgh9-1.fna.fbcdn.net/v/t39.30808-6/595207972_846070244691711_4450053097659074984_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nH7HSFIRNVAQ7kNvwFJcAsL&_nc_oc=AdkeqheStrYP2XroKkAAhPaJkdbNroRAlsvkA2XyiXpphBSZAVNg6U8EIvp11xqQJh4&_nc_zt=23&_nc_ht=scontent.fcgh9-1.fna&_nc_gid=iaiFI6QeN5F2E8ZNP3w94A&oh=00_AftI0gj9icLtobc2t9hdW1HnoB51XQUyMeag1HbqZv-jwg&oe=698992BB'>"
            >
              a kind protector of humanity,
            </MoreInfo>{" "}
            <MoreInfo
              className="acolor"
              info="<img src='https://cdn.imgchest.com/files/27b5d0a11824.webp'>"
            >
              a warrior corroded by the Honkai,
            </MoreInfo>{" "}
            <MoreInfo className="acolor" info="<img src='https://cdn.imgchest.com/files/0c82488f1a90.webp'>">
              or even a God of Lightning
            </MoreInfo>
            {"—"}he offers no correction. Their memories are not his to claim. They are seeing ghosts of possibilities, alternate paths from alternate struggles, all completely divorced from the truth of his being.
          </p>

          <p>
            <span className="title">Every touch, every moment is like a thorned rose...</span>{" "}
            But for all their curiosity and intrigue, be it borne from a longing for the better days or the abject fear of their ending, there is a question only very few have dared to ask her.
            A simple question, yet requiring far more bravery than any other.
          </p>

          <p>
            "May I get to know you and carry your memories onward my own?"
          </p>

          <p>
            . . .
          </p>

          <p>
            {createSpoiler("Yes.")}
          </p>

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
            <b>PRONOUNS</b> he/she, masculine terms
          </p>
          <p>
            <b>GENDER</b> <span className="lesbian-gradient">Lesbian</span>
          </p>
          <p>
            <b>AGE</b> At the very least, a few thousand years - appears to be in her early thirties
          </p>
          <p>
            <b>EPITHET</b>{" "}
            <MoreInfo
              className="acolor"
              info="A title she was once called in Izumo, having usurped it from the slain Kami whose very flesh was rendered to craft her first blade, the Third Edict Edge 'Howl'."
            >
              The Almighty Thunder
            </MoreInfo>,{" "}
            <MoreInfo
              className="meicolor"
              info="Emanators are beings with power directly granted by the Aeons, incomparably more powerful than mere mortals. ACHERON presides over the concept of NIHILITY, or nothingness—and in her particular arrangement, can draw power almost infinitely from this deity-like existence."
            >
              Emanator of Nihility
            </MoreInfo>
            {"."}
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
              Self-Annihilators.
            </MoreInfo>
          </p>
          <p>
            <b>PATH</b> Nihility
          </p>
          <p>
            <b>ELEMENT</b> Lightning
          </p>
          <p>
            <b>WEAPON</b> 180 cm/70 inch-long Ōdachi by the name of <span className="meicolor">Naught</span>
          </p>
        </div>
      ),
      verse: (
        <div className="space-y-4">
          <p>
            <span className="title">In the beginning,</span> there was neither light nor darkness. There was only the Great One: a sea of black waters, vast and featureless.
            From this stagnation came unity, a contradiction that sundered the Great One in twain. From the black waters sprouted the Primordial Tree, its branches weaving the Sea of Stars into existence.
            Thus was the first Separation: the world divided into Spirit and Matter, Consciousness and Flesh, the Twin Planets upheld by the Tree and connected by the Celestial Bridge.
            <br /><br />
            In one of the planets, there arose the mortals. Those who looked down called the land below "Izumo", the place to which all death inevitably drifts.
            Those who looked up, named the world above "Takamagahara". But just as chaos arose from the black sea, so did chaos take over the land of Izumo, covering the land in indescribable wars for survival,
            fought for the right to exist within the world's scarcity.
            <br /><br />
            In their desperation, the people of Izumo cried out to the heavens. They found salvation in the worship of their gods—the Kami—from which came the twelve architects of reality, who bestowed upon them the workings of the world, the seasons, the tides, and the boundaries of life.
            Yet, for all their power, the Kami could not quell the stirring anguish within the human heart.
            <br /><br />
            Seeking an end to the bloodshed, a mortal hero traveled across the Celestial Bridge to Takamagahara. There, he stood before the Sovereign of Strength and was blessed with its Authority,
            returning as the Bearer of Strength. He brought with him the Kami’s own kin, the spirits called yokai, to walk among men.
            <br /><br />
            To establish peace, the Bearer shared the knowledge of the Twelve. He taught them that will could alter the flesh, the power to rend stone into creation.
            This ushered in the Age of Strength, where humanity stood upon its own two feet, convinced that their might alone held up the sky.
            <br /><br />
            But the foundation was built on <b>a lie</b>.
          </p>

          <p>
            <span className="title">One day, the sky turned crimson</span>, and the Kami fled the heavens as if migrating. With the Authority of the World now in the hands of mortals,
            the delicate boundaries of Matter and Spirit began to fray. The creations of the Kami corroded into madness.<br /><br />

            The first to fall was Heaven's Winter Cloak. In THEIR madness, they congealed the North and South into a frigid stasis where seeds can never sprout.
            Next came the Flamebringer, who turned the lush rainforests of the East into arid kilns, scorching the land crimson with the red blood of memory.
            The Omen Ward, who once established the boundaries between Good and Evil, succumbed, allowing the Pale Ones festered in the world's inhospitable regions;
            white devils devoid of color and soul, rising from the mud as if to replace a humanity that has lost its way.<br /><br />
            Facing annihilation, the Bearer of Strength tried to rally humanity once more. But the mortals, drunk on the twelve's knowledge, turned their gifts upon one another.
            The underworld was engulfed in a war for survival, stripping the land of its Name and its Grace. The Bearer, realizing his teaching had driven the world amok, and despairing at the shortsightedness of his kin,
            sealed himself within the Cave Where Light Hid, acting as a living anchor to keep the Physical Realm from dissolving into the void.

            <br /><br />The people of Izumo shed blood for resources, for land, and for the phantoms of their ancestors, the tradition of dead generations trapped
            within the gleam of old blades. Divinity shattered further with each passing moment. The separation of the realms unraveled, threatening to throw all of creation into disarray.
          </p>

          <p>
            <span className="title">In the gloaming of a world bereft of Death</span> a young woman was born, she who took upon the name of Mei. She was the daughter of the Minakami Clan,
            a female-only lineage of priestesses from the Izumoan Riverlands, and the sole heir of the Raiden clan
            <MoreInfo
              className="acolor"
              info="Raiden Ryoma"
            >
              on her father's
            </MoreInfo>{" "}
            side. While her parents lived in the Northern Highlands, where the{" "}
            <MoreInfo
              className="acolor"
              info="An organisation comprised of several warrior clans who led the war effort against the Kami's cursed children, the Pale Ones."
            >
              Executor clans
            </MoreInfo> drove off the Pale, Mei remained in her village, practising her clan's martial arts and learning their history, so that she might succeed her Grandmother.
            <br /><br />
            From childhood, Mei had grown up as a lonely soul. Carrying the name of a famous warrior, 'Raiden', might have done her some good in the northern highlands.
            Here, it only meant scorn from those who feared the warmongering clan, and flattery from the few who dreamt of glory on the battlefield.
            Amidst this, Mei grew isolated. Her only connection was Neros, a half-human, half-yokai child ostracised for her bird-like appearance.
            Together, they existed in shared solitude, dreaming of a life hidden deep in the woods, safe from the cruelty of men.
          </p>

          <p>
            Reality awoke her from that dream, with news of her father’s death. Forced by her mother to uphold the family honor—and survive—
            Mei became a mercenary, selling her sword to the highest bidder, whether 'friend' or 'foe'.
          </p>

          <p>
            What began as a necessity revealed a terrifying talent. She garnered fame and coin, fueling her mother’s pride and her grandmother’s anguish. However, Mei was ignorant of the price she had to pay.
            Weeks turned into months on the front lines, leaving Neros behind in the isolation of their hometown. She felt guilty, but Mei knew she had a duty to her family, to provide for her mother.
          </p>
          <p>
            Upon each return, the village grew quieter. First, a mistreated child vanished. Then a maimed blacksmith, followed by an assaulted wife.
            The disappearances piled on and on until Neros, too, was gone. Finding nothing left for her in the village, Mei ignored the rumors of demons in the woods and hunted for her friend for five days and nights.
            She knew that, had she left for the battlefield, she would never return - because Neros wasn't there for her to return to.
          </p>
          <p>
            She found them in an uncharted village, a sanctuary built on their childhood fantasies. The lost were there: the broken, the abused, and the weary, all tended to by Neros.
            The "little bird" had made their dream a reality. They welcomed Mei with open arms, offering her a warmth she hadn't felt in years.
          </p>
          <p>
            Yet, a creeping wrongness settled in Mei’s heart. The happiness felt hollow. She saw the wake of grief left behind in her home village: parents grieving runaways,
            children left to the mercy of abusive fathers because their mothers had fled to "paradise."
            It was a peace built on the abandonment of pain, rather than its resolution. Neros assured her their time for salvation would come when it was time for Paradise to expand.
            But when she tried to leave and bring word to the grieving, the villagers hunted her down, desperate to keep their peace unchanged.
          </p>
          <p>
            Neros could not understand. "Wasn't this our shared dream?" she asked. But Mei realized that while she had been forced awake by the pain of reality,
            Neros remained fast asleep, deep in their dreams of yore, and darkness, melded to these dreams, manifested the Nether Lord, one of the gods of annihilation.
            Escaping back to her village, Mei found no peace, only a mob demanding the return of their "stolen" kin.
          </p>
          <p>
            The confrontation was inevitable. Lovers and families clashed in a bloody skirmish. Mei watched the innocents of the village—people who had never held weapons—prepare to slaughter each other.
            Terrified, Mei ran, never knowing her friend's end, forever cursing the Executor's name for her friend's death.
          </p>
          <p>
            <span className="title">To escape her fate,</span> Mei buried the name Raiden alongside her blade. She fled the Riverlands, taking up the mantle of an assistant apothecary. She told herself she was free.
            She told herself that by refusing to fight, she was denying the "poison of masculinity" that her mother had tried to force down her throat.
            <br /><br />But one cannot outrun fate forever.
            <br /><br />
            When a magician arrived seeking for 'Raiden', she brought news that shattered Mei's peace. Through the Wisdom Supreme, she revealed that Death had not truly left Izumo;
            it had merely been suppressed. Neros had not died the true death: her soul was adrift at the Bridge of Endless Sighs, the threshold to the Underworld.
            Driven by a desperate hope to settle her oldest debt, Mei took up her steel once more.
            <br /><br />
            During their travels, in a nameless village on the road northward, they encountered Elysia—a flower of impossible color in a world that knew only the stench of blood and rot.
            Where others saw a dying world, Elysia saw beauty. She loved humanity, and especially the quiet, sorrowful warrior who walked among them.
            In a hidden garden, beneath a sky that could not see them, Elysia gave Mei a silver ring fashioned with crystalline flowers of pink zircon.
            "So you remember," she had whispered, her voice like the shattering of a thousand tiny crystals, "that a flower can bloom even in the darkest places." Mei never took it off. Today, it remains tied to the hilt of a sword Elysia would never see—a blade forged from the very absence of light.
          </p>

          <p>
            <span className="title">The path to hell is paved with mercy.</span> To save her friend, Mei joined the Executor clans and the squad of Hakuhatsu Ki.
            She fought with a fury that terrified her comrades, and, together, they defeated the Almighty Thunder.
            From the god's divine remains, the sword Howl was forged, choosing her as a wielder. Mei had finally found a place in the world where her talents seemed appreciated,
            where she was not beholden to any particular expectation that wasn't the excellency of her martial arts.
            But great people make great mistakes. To save her friend, she betrayed the Executors during a critical point in their war against the Pale,
            finding an opening where she could flee to the South and enter the Underworld, where the great rivers died.
            <br /><br />
            But the reunion was a trap set by the Nether Lord. As Mei stood upon the Bridge of Endless Sighs, the boundary between the living and the dead,
            the truth was revealed. The Nether Lord kindly reminded her that the "Executor" who had slain Neros all those years ago was none other than Mei herself.
            In truth, Mei was hailed as a hero for killing the only person she ever loved, and the shock of it had driven her to forget this memory,
            to bury it alongside her naginata, to survive her own guilt.
            To escape the truth of the monster she had become.
          </p>

          <p>
            The Nether Lord sought to swell the underworld, amassing an army of undead to clear the surface of Izumo. With Howl in her hand, Mei faced the underworld singlehandedly,
            earning there the name of Bosenmori, the Guardian of the River of Forgetfulness.
            With the Nether Lord defeated, Mei left the Executor clans for good, traveling the world to bring protection to those who could not defend themselves, and to atone for her mistakes.
            In her travels, she amassed a series of allies: an outworlder, fallen from the skies like a shooting star, the War General of the Deep, the last protector of a dead dynasty, and a scholar
            who dreamt of flying beyond the boundaries of their crimson sky. Together, they seized on tomorrow's expectations, defeating the Kami.
          </p>

          <p>
            <span className="title">A hollow peace followed the Kami's fall.</span> Surrendering their Edict Edges, Mei and her allies fled the blighted atmosphere of Izumo to travel the sea of stars.
            Together, they visited a myriad of different worlds, and though they lived as mortals, they never once failed to help the worlds they visited, or, at least, try doing so.
            Many of her friends settled, be it in Thalassa, the Xianzhou Alliance, or other parts of the cosmos, but, for Mei, the weight of Izumo's losses never lightened.
            When she and Elysia finally returned to Izumo ten amber eras later, they found a world that had forgotten these losses.
            Mei was imprisoned by the new order for her father's ancient "crimes," only to be rescued by Elysia several weeks later.
          </p>

          <p>
            <span className="title">The final nightmare</span> was a gift of mercy. Hakuhatsu Ki, seeing the world's slow condemnation, proposed a plan: a global dreamscape woven from the splintered Edict Edges
            of their fallen friends. He sought to lock humanity into a perfect, unending dream where all would become Oni, impervious to the curse of the Kami.
            A beautiful paradise. A promise of heaven built upon the death of faith.
            <br /><br />
            Mei refused. To trade the messy struggle of life for a perfect dream was a betrayal of the love for humanity Elysia imparted to her.
            But to stand against the dreams of humankind, she required a weapon that could sway the hearts of those who desired to slumber.
            The consummation of her bond with Elysia was not one of flesh, but of divine sacrifice. Their wedding bed was an altar of black steel.
            With a final, tearless kiss, Elysia offered her own divine flesh to be rendered down and fused with the remains of the Edict Edges.
          </p>

          <p>
            <span className="title">In this crucible of supreme love and fathomless sorrow,</span> the blade of <b>Origin</b> was forged. Mei met Hakuhatsu Ki in a shattered dreamscape, the twin bearers of Izumo’s destiny.
            The clash of Origin and End was a war of philosophies made manifest, and when the dust settled, both blades were broken. Mei stood victorious, but her victory was the ultimate, soul-crushing truth.
            <br /><br />
            <span className="title">It was all a lie.</span> Their black sun was not a sun; they had long since strode into THEIR shadow. The millennia of war, the lives lost, the love shared—all were utterly meaningless.
            They were a momentary ripple in a sea of entropy. On the edge of that final despair, her soul yearned for the peace of NIHILITY.
            But her fingers found the cool metal of the ring on her hilt. A memory. A promise.
          </p>

          <p>
            <span className="title">In the end,</span> a single crimson tear fell upon the shattered remains of Origin.
            With that drop of Life and memory, she gave the blade her very existence. Origin, the blade of Life, was forged into <b>Naught</b>.
            <br /><br />
            She slashed at the horrifying, all-consuming abyss, and from it, the history of her world spilled forth as blood from a seeping wound.
            The warrior was consumed, remade, and cast out into the cosmos—an Emanator of the very path she had defied.
            Raiden Bosenmori Mei sank into the grace of the sleeping and shapeless, from which <span className="acolor">ACHERON</span> was born. A living graveyard of 70,047 blades.
            <br /><br />
            She never draws her blade, for its edge is a shard of the abyss itself.
            But sometimes, in the quiet between worlds, her fingers trace the shape of a small, silver ring tied to its hilt, a final memory of a flower that once dared to bloom in the dark.
            <br /><br />
            It was all for nothing. And yet, the flesh and the blade cannot forget what was forged in the struggle.
          </p>
        </div>
      ),
      rules: (
        <div className="space-y-4">
          <div className="px-4 py-3 border-l-2 border-[#7c5cff]">
            <div className="text-sm text-gray-300 leading-relaxed font-['D-DIN'] whitespace-pre-line">
              Spring rains turn to autumn winds, crossing the blue seas and mulberry fields.<br/>
              My white hair recalls our hardships—how could they ever be mere passing mist?<br/>
              In desolate graves lie bleached bones, for a thousand leagues the carrions now feast.<br/> 
              In wild temples and desolate halls, our honoured gods were made out of beasts.<br/>
              The law is bent by greedy hands, leaving only barren walls in silent ruin.<br/>
              In hempen robes, eating dust and dirt—what joy is there in living? What peace is there in death?
            </div>
          </div>
          <p>
            Under the ash-colored sky of a thousand endings, she walks as though the ground has learned to give way before her. Not out of fear but out of habit, as rivers part around a stone they have worn smooth. <span className="acolor">ACHERON</span> does not announce herself. She arrives already tired, already listening, already prepared to leave. Those who meet her feel not the weight of power, but the pressure of restraint: the sense that something vast has chosen, again and again, not to move.
          </p>

          <p>
            Her manner is quiet, but not gentle. She speaks with the economy of someone who has learned that words, like lives, are best spent only once. When she listens, it is with an attention that borders on mercy. She does not interrupt grief. She does not rush resolve. To her, haste feels like cruelty. She has seen what happens when choices are stolen by urgency, when people are pushed into becoming something before they have understood what they are losing. If she guides, it is by standing beside, never ahead. If she intervenes, it is only when the road has already collapsed.
          </p>

          <p>
            There is a contradiction at the heart of her that never settles. She carries it the way others carry a name. <span className="acolor">ACHERON</span> believes deeply in endings, yet mistrusts finality. She will give the dead what they could not claim for themselves. Not redemption, not justice, but closure, that rarest kindness. And still, she does not believe the world improves because of it. She does it anyway. Not out of hope, exactly, but out of refusal. The refusal to let a story dissolve unfinished, even when no one remains to read it.
          </p>

          <div className="px-4 py-3 border-l-2 border-[#7c5cff]">
            <div className="text-sm text-gray-300 leading-relaxed font-['D-DIN'] whitespace-pre-line">
              Once, someone said to me:<br/>
              "No compassion for the enemy, for that is cruelty upon yourself.<br/> 
              But you must see clearly who the true enemy is..."<br/>
              ...And then, with one swing of your blade, you must understand its meaning and the price you pay.
            </div>
          </div>


          <p>
            She dislikes violence with the intimacy of someone who knows it too well. Her blade stays sheathed not because she doubts her strength, but because she understands its cost. When she does draw it, the moment carries the weight of a confession. Afterwards, she is quieter still. There is no triumph in her victories, only a careful accounting of what has been lost, and whether it could have been otherwise. She does not romanticize necessity. She endures it.
          </p>

          <p>
            <span className="acolor">ACHERON</span>’s relationship with the past is neither nostalgia nor regret, but hunger. Not for what was, but for what was possible then. There was a time—she knows this without fully remembering it—when her actions could still change her shape. Growth was once a given. Now it is a question mark she carries from place to place, hoping someone else’s becoming might answer it for her. When she lingers over small, ordinary acts. Preparing food, mending a tear, humming a tune whose origin she cannot place. It is not sentimentality, but reconnaissance. Proof that motion still exists.
          </p>

          <p>
            She is difficult to know because she does not insist on being known. When others project their myths onto her, she does not correct them. Let them keep their stories. Memory is a fragile thing, and she has learned not to steal what little people manage to hold. Identity, to <span className="acolor">ACHERON</span>, is not a possession but a process, and she suspects hers has stalled somewhere between departure and return.
          </p>

          <div className="px-4 py-3 border-l-2 border-[#7c5cff]">
            <div className="text-sm text-gray-300 leading-relaxed font-['D-DIN'] whitespace-pre-line">
              Destiny is like a thread,<br />
              and it must be snapped when necessary.
            </div>
          </div>

          <p>
            Yet for all her distance, she is not cold. There is a fierce attentiveness in her compassion, a steadiness that makes people feel briefly unafraid of their own thoughts. She asks questions that are not meant to be answered, and answers questions no one realizes they are asking. She does not promise salvation. She offers companionship. For some, that is enough to keep walking.

            What defines her most is not loss, but defiance of a quieter sort. Not the defiance that shouts, but the one that persists. She moves through a cosmos structured by inevitability and refuses to treat it as an excuse. Fate, to her, is a current: strong, impersonal, relentless, but not a command. She can help others reach the far bank, even if she never does.
          </p>

          <p>
            <span className="acolor">ACHERON</span> does not believe the world needs her. This belief keeps her honest. Power that does not imagine itself necessary learns restraint. Responsibility, to her, is not dominion but witness. To be there when a choice is made. To remember, when others cannot. To carry what must be carried, even when it grows heavier with every step.

            If she seeks anything for herself, it is not restoration, but coherence. To become, once more, someone who can grow—someone whose tomorrow is not merely an echo. Until then, she walks. And where she walks, paths fray, destinies loosen, and people—if only for a moment—feel the strange, dangerous relief of choosing for themselves.
          </p>

          <p>
            She leaves no monuments behind her. Only endings that feel complete, and beginnings that are suddenly possible.
          </p>
          <div className="px-4 py-3 border-l-2 border-[#7c5cff]">
            <div className="text-sm text-gray-300 leading-relaxed font-['D-DIN'] whitespace-pre-line">
              Is he not sacred, even to the gods—<br />
              the wandering man who comes in weariness?<br /><br />

              <em>—— The Odyssey</em>
            </div>
          </div>
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
            <b>REMEMBRANCE</b> <span className="acolor">ACHERON</span> is capable of recovering her memories when touching the hilt of her blade. This
            is not a magical property of the sword, rather, it is a result of a lifetime of practice in fencing, and the{" "}
            <i>bushido</i>, which has instilled a strong emotional release with the act of drawing the blade, and vice
            versa. These emotions are what clear the fog in her mind, if only at the price of tormenting her with her
            greatest failures, and are one of the reasons she does not unsheathe her blade recklessly.
          </p>
          <p>
            <b>MEMORY</b> 'Some things are hard to remember, others, hard to forget.' For <span className="acolor">ACHERON</span>, it is awfully
            difficult, if not outright impossible, to forget certain things, such as the{" "}
            <span className="altcolor">Origin</span> of her own name, and her encounter with Black Swan.
          </p>
          <p>
            <b>LOVE</b> Even someone like <span className="acolor">ACHERON</span> has once been held fondly in{" "}
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
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-[#7c5cff] mb-4 font-['D-DIN']">Journal Entries</h3>
            <p className="text-sm text-gray-400 mb-4 font-['D-DIN']">
              Notes from journals, scrolls and lost documents traced back to ACHERON.
            </p>

            <div className="space-y-4">
              <div className="border border-[#7c5cff]/30 rounded overflow-hidden">
                <button
                  onClick={() => toggleJournal("junah")}
                  className="w-full text-left px-4 py-3 bg-[#7c5cff]/10 hover:bg-[#7c5cff]/20 transition-colors duration-200 flex items-center justify-between"
                >
                  <h4 className="text-sm font-semibold text-[#7c5cff] font-['D-DIN']">ON LADY JUNAH</h4>
                  <span className="text-[#7c5cff]">{expandedJournals.has("junah") ? "▼" : "▶"}</span>
                </button>
                {expandedJournals.has("junah") && (
                  <div className="px-4 py-3 border-l-2 border-[#7c5cff] ml-4">
                    <div className="text-sm text-gray-300 leading-relaxed font-['D-DIN'] whitespace-pre-line">
                      {journalVignettes.junah}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-[#7c5cff] mb-4 font-['D-DIN']">Character Studies</h3>
            <p className="text-sm text-gray-300 mb-4 font-['D-DIN']">
              Get to know ACHERON on a deeper level.
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#7c5cff] mb-4 font-['D-DIN']">CREDITS</h3>
            <p>
              This is an independent, selective portrayal of <span className="acolor">ACHERON</span> from{" "}
              <b>HONKAI: STAR RAIL</b>, drawing heavy inspiration and parallels with other Hoyoverse titles,
              as well as a multitude of other media (such as ELDEN RING, Lord of Light, etcetera...).
            </p>
            <p>
              All images used in this profile are either official artwork by miHoYo, or fan-art credited to
              their respective artists. Feel free to inform me if any images or content are not adequately
              credited.
            </p>
            <p>
              <b>ART</b>{" "}
              <a href="https://vgen.co/knvarlet/portfolio">Knvarlet,</a> original artwork commissioned by me.
            </p>
            <p>
              <b>MUSIC</b> HOYO-MIX, Black Kirin (Metal band)
            </p>
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
                  Personality
                </Button>
                <Button
                  onClick={() => handleTabChange("headcanons")}
                  variant={activeTab === "headcanons" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${activeTab === "headcanons"
                    ? "bg-[#b21919] border-[#b21919] text-white"
                    : "bg-[#7c5cff] border-[#7c5cff] text-white hover:text-[#b21919] hover:border-[#b21919]"
                    }`}
                >
                  Headcanons
                </Button>
                <Button
                  onClick={() => handleTabChange("extra")}
                  variant={activeTab === "extra" ? "default" : "outline"}
                  className={`text-xs uppercase font-semibold py-3 font-['D-DIN'] ${activeTab === "extra"
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
            <div
              className="md:w-64 w-full flex-shrink-0 aspect-square cursor-pointer"
              onClick={() => setNihilityRevealed(!nihilityRevealed)}
              title={nihilityRevealed ? "Hide memories consumed by Nihility" : "Reveal memories consumed by Nihility"}
            >
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
                    value="rules"
                    className="bg-[#7c5cff] text-white border border-[#7c5cff] hover:text-[#b21919] hover:border-[#b21919] data-[state=active]:bg-[#b21919] data-[state=active]:border-[#b21919] text-xs uppercase font-semibold py-2 px-1 font-['D-DIN'] transition-all duration-200"
                  >
                    Personality
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
                    {verseContent.rules}
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
