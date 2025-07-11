"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Star, Sword, Book, Users, Crown, Info } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("basic")

  const tabs = [
    { id: "basic", label: "BASIC INFO", icon: Users },
    { id: "physical", label: "PHYSICAL", icon: Star },
    { id: "personality", label: "PERSONALITY", icon: Heart },
    { id: "background", label: "BACKGROUND", icon: Book },
    { id: "abilities", label: "ABILITIES", icon: Sword },
    { id: "trivia", label: "TRIVIA", icon: Info },
    { id: "relationships", label: "CONNECTIONS", icon: Crown },
  ]

  const profileData = {
    basic: {
      name: "Arlecchino",
      aliases: "'Knave', 'Perrie', 'Arle', 'Father'",
      titles: "The Knave, Lord, The Bloody Marquess",
      age: "Early 40s",
      species: "Cursed Human",
      birthday: "August 22",
      occupation: "Fatui Harbinger, Diplomat, Father of the House of Hearth",
      sexuality: "Butch Lesbian",
      pronouns: "he/she, masc titles",
    },
    physical: {
      height: "188cm/6'2\"",
      weight: "86kg/180lbs",
      hair: "White with streaks of black, occasional red strand",
      eyes: "Black irises, crossed-out ✗ crimson pupils",
      features:
        "multiple scars on arms, limbs blackened, X-shaped scar on back over right shoulderblade, black widow tattoo on tongue, diamond-shaped stitch-scars around neck from having survived a beheading attempt. occasional 'too many eyes' opening on his skin, appearing where they should not...",
      description:
        "a scarred body, telling of the struggles it has undergone. blackened arms and legs, with a gradient, inky black reminiscent of charcoal covering his limbs until reaching the knee/elbow. sharp claws with which to eviscerate. white, healthy teeth, sharp canines. a broad, strong nose, wide shoulders and quite a large build in general.",
    },
    personality: {
      qualities: "Loyal, dependable, caring (to his children), cunning, powerful asset",
      traits: "Blunt, observant, calculating, harsh but fair, excellence-focused",
      flaws: "Ruthless, controlling, emotionally distant, manipulative, merciless",
      description:
        "Arlecchino is a mass of exaggerated half-truths and personifications of lies and deceit spread among the people, portraying the Knave as a wolf in heep's clothing, a cunning and bloodthirsty patriarch whose tongue draws just as much blood as the blade he seldom wields.\n\nHis very name carries an aura that paralyzes opponents who hear even the slightest hint of his existence, and his fiery presences scorches the flesh of those who are left frozen in place. Mothers hear this name and bring their kids back inside the houses; it causes everyone to move aside and let him pass. He's everything they say: a boogeyman—the icy breath you feel down your neck in your last waking moments.\n\nArlecchino is the shadows lurking around corners in the dead of the night; the thin veneer of an aloof diplomat that barely conceals the true mania beneath its surface.\n\nA single parent whose problematic household led him to keeping his children under strict discipline, yet an even tighter leash on himself.\n\nTo his children, he allows sporadic reprieve—turning a blind eye when they snatch cookies before supper, and letting them keep any critters they find.\n\nOn himself, he is harsh and ruthless, keeping every moment of his day as strict as the schedule he had growing up. The Knave prizes excellence, and will settle for no less.\n\nAfter all, he was like them, once—alone in a cold, uncaring world. What he has learned to survive, he passes on to his family. This is how he loves: by giving people the most important gift he can–the tools to survive, to stand on their own two feet, for he knows that, in this world, nobody will protect them but themselves.\n\nArlecchino cares little for concepts such as 'morality' and 'justice.' The world does not judge, but people are self-serving, cold and cruel.\n\nWhat matters to him are results: that those he cares about—his family—are safe, and given a better chance in life than the one he was afforded. That they have a choice.\n\nTo that end, the Knave will show no mercy.",
    },
    background: {
      origin: "Orphan of the House of the Hearth under the former Harbinger, Crucabena, manifesting a strange curse upon his flesh",
      transformation: "Killed 'Mother' Crucabena after enduring years of abuse",
      exile: "Renamed by the Tsaritsa, he spent ten years in missions proving his worth to his Majesty",
      return: "Appointed as new 'Father' of the Hearth and Snezhnayan diplomatic representative",
      mission: "Mend Fontaine-Snezhnaya relations while training new agents, the children",
      children: "At least 50+ in the House of the Hearth",
      philosophy: "Strength through unity, protection through preparation, survival through control",
    },
    abilities: {
      vision: "Pyro Vision & Delusion",
      weapon: "Scythe, Sword",
      curse: "Balemoon Bloodfire - Ancient curse manifesting through his bloodline",
      cursedBloodAbilities: [
        {
          name: "Vision & Delusion",
          description:
            "Arlecchino possesses multiple ways to manifest flame. Traditionally, they come into combat in the use of conflagrations, such as setting something ablaze, extending the range of his attacks with fire, or furnishing objects from it—from projectile spears, to spikes, spider threads, and even a throne for his to seat upon.",
        },
        {
          name: "Cursed Blood",
          description:
            "To consign this truth of ancestry, he proclaimed herself to be of Fontainian lineage—however, Arlecchino had been cursed, from a young age, to carry flame in his very blood.\n\nIts main difference from his usual flame is its penchant for destruction—each burst is often concentrated in energy spheres that burst into scorching hellfire, or extracted by hand from a portal–in the latter, the ‘illusion’ that his hands phase into another realm before dragging out baleful fire in the form of accursed blood.\n\nIt is said that, in the night prior to committing matricide, Arlecchino had a vision of a crimson moon turning its single eye upon his. Those entrapped by his threads may be granted the honour to view it before their inevitable demise.\n\nOverusing this curse can lead the black markings in his skin to etch deeper, as if rendering his very flesh a kindling–and enemies perihed by it will become shades, haunting his with their voice, memories, or with their very presence.",
        }
      ],
      combat:
        "Forged in the Hearthfire into a master combatant, the Knave has expertise in hand-to-hand combat and fencing. He prefers to wield a scythe, but spears and swords are not beyond his scope. His fluidity in combat resembles that of a gymnast—strict, graceful, and drilled into his body from the earliest age his frail hands could hold a weapon.",
      specialties: "Fire manipulation",
    },
    trivia: {
      quirks: [
        "Skeptical of spices and seasoning, but accepts them in cultural contexts (such as Inazuman cuisine)",
        "Often locked himself in libraries as a child, finding solace in books. Learned many lexicons from other languages, though superficially",
        "Flirts with far too many women during his travels, but feigns chastity and claims to be a virgin with 'no need for sexual desire'",
        "Knows of his sickening reputation but does little to alter it. Lets people believe what they will, so long as it is useful to him",
        "Does not like to be cold, and is not afraid to use his cursed blood to stave it off",
        "Has a sweet tooth that he rarely indulges. Though his drinks of choice are often bitter, such as whiskey, coffee, tea, he will add terrifying amounts of sugar if he is alone",
        "Has a very dry sense of humour, and typically does not make jokes, unless it is to get someone to drop their guard around him—often as manipulation",
        "Takes great pride in his hospitality. If someone so much as touches a guest room door handle without the intent to clean it, he will display irrational amounts of anger, even if there are no guests to come for the foreseeable future",
        "Considers himself an introvert; though he enjoys social activities, they can often burn him out and he engages for extended periods of time",
        "Favourite dessert is 'Vanilla cupcakes with buttercream and cherries as topping'",
      ],
    },
    relationships: {
      status: "Under Construction",
      note: "Detailed relationship information will be added in future updates",
    },
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-center bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black"></div>
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30"></div>
      </div>

      {/* Header */}
      <header className="z-10 p-4 md:p-6 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-crimson transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display text-sm tracking-wider">RETURN</span>
        </Link>
        <div className="text-white/40 text-sm font-display tracking-wider">PROFILE</div>
      </header>

      {/* Content */}
      <main className="z-10 flex-1 flex flex-col lg:flex-row gap-8 px-4 py-8 max-w-7xl mx-auto w-full">
        {/* Portrait Section */}
        <div className="lg:w-1/3">
          <div className="sticky top-8">
            <div className="relative aspect-[3/4] mb-6">
              <Image
                src="/images/arlecchino-profile.jpg"
                alt="Arlecchino Profile"
                fill
                className="object-cover border border-crimson/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>

            <div className="text-center mb-6">
              <h1 className="main-title text-2xl mb-2">THE KNAVE</h1>
              <p className="font-quote text-white/60 italic">Fourth of the Fatui Harbingers</p>
              <p className="font-quote text-white/60 italic text-sm">Father of the House of the Hearth</p>
            </div>

            {/* Quick Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Height:</span>
                <span className="text-crimson">188cm/6'2"</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Nation:</span>
                <span className="text-crimson">Fontaine/Snezhnaya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Vision & Delusion:</span>
                <span className="text-crimson">Pyro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Weapon:</span>
                <span className="text-crimson">Scythe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:w-2/3">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-crimson/30 pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-display tracking-wider transition-colors ${
                    activeTab === tab.id ? "text-crimson border-b-2 border-crimson" : "text-white/60 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {activeTab === "basic" && (
              <div className="space-y-4">
                <h2 className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
                  BASIC INFORMATION
                </h2>
                {Object.entries(profileData.basic).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-white/10">
                    <div className="font-display text-crimson uppercase tracking-wider text-sm">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </div>
                    <div className="md:col-span-2 text-white/90">{value}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "physical" && (
              <div className="space-y-4">
                <h2 className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
                  PHYSICAL DESCRIPTION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {Object.entries(profileData.physical)
                      .filter(([key]) => !["features", "description"].includes(key))
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1 border-b border-white/10">
                          <span className="font-display text-crimson uppercase text-sm">{key}:</span>
                          <span className="text-white/90 text-sm">{value}</span>
                        </div>
                      ))}
                  </div>
                  <div>
                    <h3 className="font-display text-crimson text-sm mb-2">DISTINGUISHING FEATURES:</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{profileData.physical.features}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-crimson text-sm mb-2">FIRST IMPRESSION:</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{profileData.physical.description}</p>
                </div>
              </div>
            )}

            {activeTab === "personality" && (
              <div className="space-y-4">
                <h2 className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
                  PERSONALITY PROFILE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-crimson text-sm mb-2">QUALITIES:</h3>
                    <p className="text-white/80 text-sm">{profileData.personality.qualities}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-crimson text-sm mb-2">TRAITS:</h3>
                    <p className="text-white/80 text-sm">{profileData.personality.traits}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-crimson text-sm mb-2">FLAWS:</h3>
                    <p className="text-white/80 text-sm">{profileData.personality.flaws}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-crimson text-sm mb-3">CHARACTER ANALYSIS:</h3>
                  <div className="bg-black/30 border border-crimson/30 p-6">
                    <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                      {profileData.personality.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "background" && (
              <div className="space-y-4">
                <h2 className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
                  BACKGROUND & HISTORY
                </h2>
                {Object.entries(profileData.background).map(([key, value]) => (
                  <div key={key} className="py-3 border-b border-white/10">
                    <h3 className="font-display text-crimson uppercase tracking-wider text-sm mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "abilities" && (
              <div className="space-y-4">
                <h2 className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
                  ABILITIES & COMBAT
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="py-2 border-b border-white/10">
                      <span className="font-display text-crimson uppercase text-sm whitespace-pre-line">Vision: </span>
                      <span className="text-white/90 text-sm">{profileData.abilities.vision}</span>
                    </div>
                    <div className="py-2 border-b border-white/10">
                      <span className="font-display text-crimson uppercase text-sm whitespace-pre-line">Weapon: </span>
                      <span className="text-white/90 text-sm">{profileData.abilities.weapon}</span>
                    </div>
                    <div className="py-2 border-b border-white/10">
                      <span className="font-display text-crimson uppercase text-sm whitespace-pre-line">Curse: </span>
                      <span className="text-white/90 text-sm">{profileData.abilities.curse}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="py-2 border-b border-white/10">
                      <span className="font-display text-crimson uppercase text-sm whitespace-pre-line">Combat: </span>
                      <span className="text-white/90 text-sm">{profileData.abilities.combat}</span>
                    </div>
                    <div className="py-2 border-b border-white/10">
                      <span className="font-display text-crimson uppercase text-sm whitespace-pre-line">Specialties: </span>
                      <span className="text-white/90 text-sm">{profileData.abilities.specialties}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-crimson text-lg mb-3 whitespace-pre-line">ABILITIES:</h3>
                  {profileData.abilities.cursedBloodAbilities.map((ability, index) => (
                    <div key={index} className="bg-black/30 border border-crimson/30 p-4">
                      <h4 className="font-display text-crimson text-base mb-2">{ability.name}</h4>
                      <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{ability.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "trivia" && (
              <div className="space-y-4">
                <h2 className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
                  QUIRKS & HABITS
                </h2>
                <div className="space-y-2">
                  {profileData.trivia.quirks.map((quirk, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm py-2 border-b border-white/10">
                      <span className="text-crimson mt-1">•</span>
                      <span className="text-white/80">{quirk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "relationships" && (
              <div className="text-center py-8">
                <h3 className="font-display text-crimson text-lg mb-2">UNDER CONSTRUCTION</h3>
                <p className="text-white/60 text-sm">
                  Detailed relationship information will be added in future updates.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
