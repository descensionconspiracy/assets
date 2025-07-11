"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, MapPin, User, ThumbsUp, ThumbsDown, Sword, Book } from "lucide-react"

// Chapter content
const chapterContent = {
  hearth: {
    title: "THE HEARTH",
    subtitle: "Fontaine's shadowed institution",
    image: "/images/hearth.gif",
    content: [
      {
        type: "heading",
        text: "THE HOUSE OF THE HEARTH — A historical Fontaine institution",
      },
      {
        type: "paragraph",
        text: "The House of Hearth has been a longstanding institute in Fontaine, presenting itself to the public as a charitable orphanage that provides shelter and education to children who have lost their families. To Chief Justice Neuvillette and the former Hydro Archon Furina, it appeared a model of Fontainian compassion: a testament to the nation's commitment to caring for its most vulnerable citizens, and a strong symbol of the nation's relationships with Snezhnaya.",
      },
      {
        type: "quote",
        text: "The brightest flames cast the darkest shadows.",
      },
      {
        type: "paragraph",
        text: "But that is only the surface of the House's purpose. While they did provide for orphaned children, their ultimate goal is that of molding them into loyal Fatui agents. Among their curriculum, the children receive rigorous training in combat, espionage, and are instilled with loyalty.",
      },
      {
        type: "paragraph",
        text: "The orphans come from various circumstances: some are victims of warfare, children of executed criminals, casualties of industrial accidents, or those abandoned during periodic economic downturns. Some are even taken from regions destabilized by Fatui operations, a fact many view as ironic, while others deem it intentional. Not all children are true orphans; some were sent to the Hearth by desperate families, others rescued from trafficking operations. Regardless of origin, all are given the same choice: join willingly or leave. Resentment breeds insubordination, and the House has no room for the unwilling.",
      },
      {
        type: "heading",
        text: "THE CRUCIBLE — The House's true purpose",
      },
      {
        type: "paragraph",
        text: "Under Crucabena's leadership, the institution's internal project name was 'House of the Crucible', in that it took the children, seen as unrefined metals, and sought to melt them down, until they could be reshaped for the Fatui's purposes. Children were stripped of their identities, assigned codenames or numbers, and subjected to a brutal regimen designed to forge perfect agents through suffering. As a natural response, the children developed a habit to remember each other's names and stories for each other, lest they inevitably forget it.",
      },
      {
        type: "paragraph",
        text: "The culmination of this process was the 'King's Selection'—a culling where children fought to the death. The survivors became elite agents, while the defeated became subjects for physical experimentation, no more than weapons to be discarded, or further broken down to be repurposed. This methodology produced effective operatives, at a great and terrible human cost: broken minds, fractured loyalties, and a legacy of trauma that continues to haunt the House's halls.",
      },
      {
        type: "heading",
        text: "THE DIPLOMATIC INCIDENT",
      },
      {
        type: "paragraph",
        text: "To this day, the House's true nature remains hidden from Fontaine's leadership. However, its activities were threatened when a young orphan named Peruere committed matricide, killing the House's then-leader and 'Mother', Crucabena, the Fourth Fatui Harbinger. Had young Peruere not served as a perfect scapegoat, killing her 'Mother' and children alike, their goal would have been exposed.",
      },
      {
        type: "paragraph",
        text: "Still, the incident stirred a diplomatic crisis between Fontaine and Snezhnaya. The Hydro Archon, Furina, was mortified by the bloodshed, unable to so much as attend the related trials, and Chief Justice Neuvillette, bound by Fontaine's strict laws, sought to imprison the young murderer. However, the Tsaritsa intervened, claiming jurisdiction over what she deemed an internal Fatui matter. Through political maneuvering, she secured Peruere's release to Snezhnayan custody, and ordered the suppression of any information regarding the Hearth—allegedly, to protect the children's privacy and preserve their mental health—leaving relations between the nations strained to this day.",
      },
      {
        type: "quote",
        text: "See, I have refined you, though not as silver; I have tested you in the crucible of affliction.",
      },
      {
        type: "paragraph",
        text: "But nobody understood why the child postered as the Mother's favourite, present in so many of the House's recitals, would have turned against her family. The public narrative painted Peruere as a sickened, mad and ungrateful youth. Ignorant to the House's reality, they did not understand how deep was her love, her crime borne from a desperate attempt to save the other children from Crucabena's unforgiving cold. As she stood over her Mother's body, the voices of all those who had fallen in the King's Selection sang to her, their memories forever imprinted in her flame.",
      },
    ],
    next: "father",
  },
  father: {
    title: "THE FATHER",
    subtitle: "Arlecchino's rise to power",
    image: "/images/arlecchino-alt.png",
    content: [
      {
        type: "heading",
        text: "FROM 'NAMELESS' TO ARLECCHINO",
      },
      {
        type: "paragraph",
        text: "The child who would become Arlecchino arrived at the House of the Hearth nameless and formless, only to be subjected to the House's brutal regimen, as all others. However, the curse assailing her flesh and blood earned her Crucabena's special attention, making her favoured, but also a point for concern from the Harbinger.",
      },
      {
        type: "paragraph",
        text: "When brought before the Tsaritsa after the matricide, the child accepted her fate without regret. Formless she was no more, for she had been forged into a great weapon for Snezhnaya. Despite her treachery, the Tsaritsa could not deny this child's potential. Thus the child was granted a new identity, both to reflect this, and to masque the origins of her previous name. Arlecchino, the Fourth Harbinger.",
      },
      {
        type: "heading",
        text: "THE FATHER'S RETURN",
      },
      {
        type: "quote",
        text: "She who laid her pavement with the mountains of their corpses, bathed in the rivers of their blood, constructed a throne from their bones, and crowned herself with her Mother's skull.",
      },
      {
        type: "paragraph",
        text: "As the new Fourth Harbinger, Arlecchino undertook missions of increasing difficulty and importance, proving her worth and loyalty to Snezhnaya over the course of a decade. Her methods were efficient, her results impressive. But despite growing succes and glory, her loyalty for the children of the House remained. Even from afar, she did all in her efforts to maintain contact with its caretakers, seek sponsorship and ensure their wellbeing, all in an effort to prevent any more from becoming 'weapons'.",
      },
      {
        type: "paragraph",
        text: "She bears many new scars from her missions, which she refuses to conceal, most notably one encircling her neck, resulting from a failed execution attempt. More mysterious are her blackened hands, marked by the curse that both saved and damned her, a constant reminder of all those whose lives were sacrificed in the Hearthfire.",
      },
      {
        type: "quote",
        text: "A vase without fractures is a vase without history. A nicked blade is a blad forged by war. One may call it ugly or unsightly, but all struggles are ugly, unsightly things: why must we mask them so?",
      },
      {
        type: "paragraph",
        text: "After ten years of exile, and having successfully proven her worth to the Tsaritsa, Arlecchino returned to Fontaine as the Father of the House of Hearth, under the condition that she would serve as a Snezhnayan diplomat, tasked with mending the fractured relationship between the nations. The irony was not lost on her: the very person who had caused the rift was now responsible for healing it, but she saw this as no more than one of fate's twisted jokes, and her responsibility to bear.",
      },
      {
        type: "paragraph",
        text: "Under her leadership, the House maintained its dual nature. To the public, it remained a charitable institution. Behind closed doors, the training continued, but Arlecchino's methods differed. The House's strictness remained, but the sadism of its previous dean was thoroughly washed away. Father demanded excellence, but provided protection. The children feared her, certainly, but, at the very least, they were able to believe she would defend and stand up for them, and their defining characteristics were upheld, rather than erased.",
      },
    ],
    next: "journal",
    prev: "hearth",
  },
  journal: {
    title: "FATHER'S JOURNAL",
    subtitle: "Personal reflections",
    image: "/images/journal.png",
    content: [
      {
        type: "heading",
        text: "ENTRY 1 — On returning to the House",
      },
      {
        type: "paragraph",
        text: "For the first time, I have walked these halls as FATHER, not child. The children watched me with the same fear I once felt for 'Mother'. They do not know that I was once like them. Perhaps it is better that way. Authority requires distance.",
      },
      {
        type: "paragraph",
        text: "The interim caretakers have maintained order in my absence, but their methods lack... refinement. Too much cruelty, too little purpose; loyalists to the former director, all of them, so focused on instilling subservience, they have become ignorant to the importance of a creative agent. It is as if they seek to grow strong trees by cutting them at the roots. This shall change under my watch.",
      },
      {
        type: "heading",
        text: "ENTRY 17 — On discipline and care",
      },
      {
        type: "paragraph",
        text: "Punished young Anton today for attempting to escape. The others watched, and I feel they have understood the consequences of their actions. When I summoned him to my office, I evaluated his escape attempt, instructing him to remedy those points to improve his skills as agent, and complimenting him in what was already good. Given his shock, I feel that he may have expected a harsher, violent response, but I am confident in my approach.",
      },
      {
        type: "paragraph",
        text: "'Mother' never understood this balance. She believed fear alone could ensure loyalty. But fear without respect breeds only resentment, and resentment leads to rebellion. I should know.",
      },
      {
        type: "heading",
        text: "ENTRY 42 — On Neuvillette's suspicions",
      },
      {
        type: "paragraph",
        text: "The Iudex sent envoys to visit today, ostensibly to check on the welfare of the children. They appeared well trained. Though they spoke pleasantly enough, I sensed his suspicion through their words. He remembers me, though he cannot yet prove I am the same child behind the Hearth's incident.",
      },
      {
        type: "paragraph",
        text: "I showed them our classrooms, our dormitories, our dining hall. All immaculate, all proper. The children performed their roles perfectly, and all the officials could see were grateful orphans receiving charity. Some details are best kept hidden.",
      },
      {
        type: "heading",
        text: "ENTRY 86 — On political interests",
      },
      {
        type: "paragraph",
        text: "I sometimes question my loyalty to the Tsaritsa. Her goals are not always clear to me, nor do I always agree with her methods. But I remain loyal to these children. They need structure, discipline, purpose, all things I can provide. And if serving the Fatui ensures their safety and future, then so be it. The House of the Hearth must honour its namesake, as a place of warmth amidst a frigid world.",
      },
      {
        type: "heading",
        text: "ENTRY 103 — On Freminet's mother",
      },
      {
        type: "paragraph",
        text: "Found a pendant today during the raid on the moneylenders. This confirms my investigation regarding Freminet's origins—the previous administration lied to him, claiming his mother had abandoned him,  only to create a strong mind scar, to further detach him from this world. I gave him the pendant and told him the truth: his mother sent him here to protect him from the vile men who would have sold him off to pay for her debts. She chose to bear their burdens alone, rather than let him suffer by proxy.",
      },
      {
        type: "paragraph",
        text: "The pendant was rusted, stained with dried blood. I left the boy to process what this meant. Later, I watched him 'borrow' the diving suit for a few hours. The next day, he held his sword tighter, his eyes harder but clearer. While we may not share blood, we share a choice. The choice to protect those you love, even at terrible cost. This is the lesson all of my children must learn.",
      },
      {
        type: "heading",
        text: "ENTRY 127 — On nightmares",
      },
      {
        type: "paragraph",
        text: "Woke again seeing her face in the mirror. Crucabena, smiling with my lips. I smashed the glass before remembering where I was. Had to explain the noise to the children as a fallen shelf.",
      },
      {
        type: "paragraph",
        text: "The stars were bright tonight. I stood on the roof counting constellations until the trembling subdued. The night has always been kind to me, even when nothing else was. But I dare not look at the moon. Not when it's full. Not tonight.",
      },
      {
        type: "heading",
        text: "ENTRY 159 — On children's requests",
      },
      {
        type: "paragraph",
        text: "The children grow bolder with each passing year. When I first returned as Father, they were too frightened to speak unless spoken to. Now they approach me with requests for small treasures they wish to possess, ranging from VIP tickets to Lady Furina's performances, to mementos of their homelands. I fulfill them all, without fail. The Hearth's greatest weakness is, perhaps, that we aim to establish strong roots in a soil that does not belong to us. We are the undesired children. As such, the children must be taught that there is a place for them.",
      },
      {
        type: "heading",
        text: "ENTRY 201 — On love",
      },
      {
        type: "paragraph",
        text: "The younger children occasionally ask me if I will ever grant them a 'Mother'. Emotions do not come naturally to me, love least of all. The principle of cordiality is one I can understand: beneficence to earn benevolence, endless virtue and good words—but romantic love is a liability I cannot afford. It clouds judgment, dulls senses, paralyzes the will. To entrust someone with such authority over my life would be tantamount to self-sabotage.",
      },
    ],
    next: "rules",
    prev: "father",
  },
  rules: {
    title: "RULES OF THE HEARTH",
    subtitle: "Order and discipline",
    image: "/images/rules.png",
    content: [
      {
        type: "quote",
        text: "We are children with no kin, the petty servants on whom no light shines. In our left hand is the shield that protects our home, and our right wields the sword that is the will of the polar star.",
      },
      {
        type: "heading",
        text: "OFFICIAL CHARTER — As presented to authorities",
      },
      {
        type: "rule",
        number: "I",
        text: "The House of Hearth shall provide shelter, sustenance, education, and guidance to orphaned children of Fontaine without discrimination based on origin or circumstance.",
        note: "All children deserve a chance at a better future.",
      },
      {
        type: "rule",
        number: "II",
        text: "Children shall receive comprehensive education in accordance with Fontainian standards, including arts, sciences, history, and ethics.",
        note: "Knowledge is the foundation of growth.",
      },
      {
        type: "rule",
        number: "III",
        text: "Physical education and self-defense training shall be provided to ensure children develop healthy bodies and can protect themselves in Fontaine's sometimes dangerous streets.",
        note: "A sound mind requires a sound body.",
      },
      {
        type: "rule",
        number: "IV",
        text: "Children shall be taught practical skills to ensure their self-sufficiency upon reaching adulthood.",
        note: "Independence is the ultimate goal of education.",
      },
      {
        type: "rule",
        number: "V",
        text: "Discipline shall be administered fairly and without cruelty, with the goal of teaching rather than punishing.",
        note: "Correction guides the path to improvement.",
      },
      {
        type: "heading",
        text: "THE FATHER'S LAW — The true rules of the House",
      },
      {
        type: "rule",
        number: "I",
        text: "Loyalty to the House supersedes all other bonds. You will defend your siblings with your life, and they will do the same for you.",
        note: "Betrayal is punishable by death.",
      },
      {
        type: "rule",
        number: "II",
        text: "The word of the Father is absolute. Questions are permitted; defiance is not. Challenge may be issued through proper channels, but once a decision is made, it is final.",
        note: "Unity of action must prevail over all.",
      },
      {
        type: "rule",
        number: "III",
        text: "Strength without purpose is meaningless. Every skill you learn, every power you gain, serves the House and its objectives. Personal glory is secondary to collective success.",
        note: "Individual ambition must be channeled toward collective goals.",
      },
      {
        type: "rule",
        number: "IV",
        text: "Failure is a teacher, not an endpoint. Learn from your mistakes, but do not repeat them. Consistent failure indicates a lack of either ability or will—both are correctable through proper methods.",
        note: "Those who cannot or will not improve become examples for others.",
      },
      {
        type: "rule",
        number: "V",
        text: "Remember the names and stories of your siblings. Even if all is to be taken away from you, protect your own roots at all costs. They are how we preserve our humanity in a world that would otherwise strip it away.",
        note: "In remembrance, lies resistance against those who would erase us.",
      },
      {
        type: "paragraph",
        text: "The House of the Hearth is, above all, a military institution. As such, while Father is tolerant of, and even encourages criticism, once a decision is made, she tolerates no dissent. A troop's strongest quality is its unity of action; soldiers who doubt their leaders' orders will invariably waver in the field. When the Hearth's rules are trampled upon, Father takes it upon herself to dish out the according punishment, relentlessly, for that is the only way to prepare them to survive the bleak world we live in.",
      },
    ],
    next: "agenda",
    prev: "journal",
  },
  agenda: {
    title: "FATHER'S AGENDA",
    subtitle: "Diplomatic obligations",
    image: "/images/agenda.jpg",
    content: [
      {
        type: "heading",
        text: "OFFICIAL SCHEDULE",
      },
      {
        type: "agenda",
        items: [
          {
            date: "WEDNESDAY, 10:00",
            title: "Quarterly Review with Fontaine Officials",
            location: "Court of Fontaine",
            description: "Standard oversight of orphanage operations",
          },
          {
            date: "THURSDAY, 19:00",
            title: "Fontaine-Snezhnaya Cultural Exchange Gala",
            location: "Court of Fontaine",
            description: "Diplomatic appearance as Snezhnayan representative",
          },
          {
            date: "FRIDAY, 11:00",
            title: "Children's Recital",
            location: "House of Hearth",
            description: "Public demonstration of children's education and talents",
          },
        ],
      },
      {
        type: "heading",
        text: "PRIVATE ENGAGEMENTS — Matters of greater importance",
      },
      {
        type: "agenda",
        items: [
          {
            date: "MONDAY, 23:00",
            title: "Secure Communication with Zapolyarny Palace",
            location: "Private Quarters",
            description: "Report to the Tsaritsa every two months",
          },
          {
            date: "TUESDAY, 22:00",
            title: "Meeting with Fatui Agents",
            location: "Undisclosed Location",
            description: "Coordination of intelligence gathering in Fontaine",
          },
          {
            date: "FRIDAY, 05:00",
            title: "Advanced Training Session",
            location: "Underground Facility",
            description: "Personal instruction for elite students",
          },
          {
            date: "SUNDAY, 22:00",
            title: "Review of Fontaine Political Developments",
            location: "Study",
            description: "Intelligence analysis",
          },
        ],
      },
      {
        type: "quote",
        text: "Our goals are many, and large in escope. With such grand objectives in mind, it is inevitable that we must wear many masks. Switching my masks is something I have always done.",
      },
      {
        type: "paragraph",
        text: "The Father maintains a careful balance of public appearances and private operations with meticulous attention to detail, navigating both her roles as Father and Snezhnayan Diplomat with ease.",
      },
      {
        type: "paragraph",
        text: "To the children of the House, this duality serves as a living lesson in the art of deception, a skill many of them will need to master. They observe how she presents one face to the world while keeping her true purpose hidden, learning that appearances can be weapons as effective as any blade, perhaps even more so.",
      },
      {
        type: "heading",
        text: "MISSION STRUCTURE — The Hearth's operations",
      },
      {
        type: "mission",
        icon: "intelligence",
        title: "Intelligence Gathering (70-80%)",
        description:
          "Intelligence gathering is the Hearth's specialty. Once a target is identified by the Fatui, Hearth operatives are instructed to gather data from various sources, from casual conversations to official, private communication, which is then relayed to other Fatui branches or used for future operations.",
      },
      {
        type: "mission",
        icon: "infiltration",
        title: "Infiltration Operations (15-20%)",
        description:
          "When intelligence cannot be gathered from the outside, agents must go in. Children with appropriate skills are placed in target locations—sometimes for hours, sometimes for years. These embedded agents establish 'vision' (contingency plans and communication protocols) before taking action.",
      },
      {
        type: "mission",
        icon: "combat",
        title: "Combat Missions (5-10%)",
        description:
          "When direct action is required, combat-trained operatives work in carefully selected teams, often handpicked by Father herself, leveraging their complementary skills. The Father personally evaluates all combat missions, but takes combat with more care, often rejecting those deemed too risky for her charges. In cases of high danger, she may undertake the mission herself.",
      },
    ],
    next: "testimonials",
    prev: "rules",
  },
  testimonials: {
    title: "TESTIMONIALS",
    subtitle: "The children speak",
    image: "/images/testimonials.jpg",
    content: [
      {
        type: "heading",
        text: "THE VOICES OF THE HEARTH — As told to visitors",
      },
      {
        type: "testimonial",
        name: "Lyudmila, Age 12",
        years: "4 years at the House",
        text: "Father Arlecchino saved me when no one else would. My parents died in a factory accident, and I was alone on the streets for weeks before he found me. Here, I have food, shelter, education, things I thought I'd never have again, and some I've never had. Yes, the rules are strict, but Father says that's how we learn discipline. I'm grateful every day.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Victor, Age 14",
        years: "7 years at the House",
        text: "The House of Hearth gave me purpose. Father doesn't tolerate laziness or disobedience, and she rewards hard work and loyalty. I've learned more here than I ever would have in a regular school. Father says I have potential for diplomatic work. One day, I hope to make him proud by representing our house and nation abroad.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Elise, Age 9",
        years: "2 years at the House",
        text: "I miss my parents sometimes, but Father says it's better to look forward than back. He says we're a family now. A different kind, but still a family. The older children help teach us, and Father watches over everyone.",
        sentiment: "mixed",
      },
      {
        type: "heading",
        text: "PRIVATE ACCOUNTS — As shared among themselves",
      },
      {
        type: "testimonial",
        name: "Anton, Age 16",
        years: "8 years at the House",
        text: "Father is different from the previous director. He pushes us hard, but there's always a reason behind it. When I tried and failed to flee the House, he didn't punish me, just showed me where I went wrong. Said I was too restricted in my thinking. Since then, I pretty much became the go-to guy for infiltration missions.",
        sentiment: "mixed",
      },
      {
        type: "testimonial",
        name: "Amaru, Age 15",
        years: "10 years at the House",
        text: "I remember the old days, before Father returned. We were just tools then, disposable. Now... we're valuable. Father protects what belongs to him. I've seen him stand against other Harbingers who wanted to use us for their experiments. She told Dottore that her children weren't his lab rats. No one had ever stood up for me like that before.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Koharu, Age 17",
        years: "12 years at the House",
        text: "I know the truth. Father was once one of us. He doesn't speak of it, but... I just know it! When our eyes meet, I can tell he's looking at me, and not... looking down on me. I'm being trained for leadership, to help run the House someday. Father says the cycle must continue, but differently. Not a circle, but a spiral, always moving higher.",
        sentiment: "positive",
      },
      {
        type: "heading",
        text: "FREMINET'S STORY — A mother's sacrifice",
      },
      {
        type: "testimonial",
        name: "Freminet, Age 19",
        years: "12 years at the House",
        text: "When Father took over, everything changed. The previous dean told me my mother abandoned me, that I was worthless to her. I believed it for years. Then one day, Father gave me a pendant—my mother's pendant, found during a raid on moneylenders. He told me the truth: my mother sent me here to protect me from debt collectors who would have used me to pay what she owed. She sacrificed herself for me. The pendant was rusted with her blood. That night, I cried under the sea where no one could see. The next day, I held my sword tighter. I understand now what family means. It's not about blood, it's about who you'd bleed for.",
        sentiment: "positive",
      },
      {
        type: "heading",
        text: "FATHER'S PECULIARITIES — The children's observations",
      },
      {
        type: "paragraph",
        text: "While Father Arlecchino maintains a carefully controlled public image, the children who live under his care observe aspects of her personality that few others ever witness, granting them a far more unique perspective than any other; one that Father cannot always control.",
      },
      {
        type: "testimonial",
        name: "Nikolai, Age 14",
        years: "5 years at the House",
        text: "Father is peculiar about food. I don't think he likes spices... I once saw him eye a curry for a full minute like before taking the smallest possible bite. But when we had children from Inazuma join us, he ensured their traditional dishes were prepared properly, and ate every single dish with a smile on his face. He told me, 'Respecting one's cultural heritage begins at the dining table.' I think he believes food is part of identity, and he's always going on about how that is something we can't lose.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Emma, Age 16",
        years: "9 years at the House",
        text: "Everyone thinks Father is this terrifying figure who never rests, but sometimes I find her napping in the library. She's always covered in books, poetry, dictionaries from different nations. She knows phrases in so many languages. When I asked how she learned them, she just said, 'When I was your age, libraries were a comfort to me.' I don't think she sleeps in her own room much. Too many ghosts, maybe.",
        sentiment: "mixed",
      },
      {
        type: "testimonial",
        name: "Alexei, Age 17",
        years: "5 years at the House",
        text: "Father's reputation with women is... uhm. I've seen her arm around a lot of noblewomen on... official duty, then she plays dumb when I ask her about it he next day. Says she was simply extracting information from them. She knows exactly how people see her, and always uses that to her advantage. Let them see what serves her purpose.",
        sentiment: "mixed",
      },
      {
        type: "testimonial",
        name: "Mei, Age 15",
        years: "7 years at the House",
        text: "Father hates the cold with a passion that's almost funny. During winter, he'll sit unnaturally close to the fire. Once, a blizzard struck during a mission, so he simply gathered everyone in a nearby cave, telling them to make a circle. Then he sat in the center, and heat radiated from her like a furnace. He stayed awake all night just to keep everyone calm, and let us conserve energy. By morning, the cave floor around him had scorch marks.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Luke, Age 13",
        years: "4 years at the House",
        text: "I work in the kitchens sometimes, and I've noticed something funny about Father. In public, he drinks his coffee black and his tea bitter, making faces at desserts. But when he thinks no one is watching? He adds so much sugar to her drinks it's scary. Once I caught her eating vanilla cupcakes with buttercream and cherries straight from the kitchen at 3 AM. He made me promise not to tell anyone, then taught me how to throw knives properly the next day as a 'thank you for your discretion.'",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Irina, Age 16",
        years: "8 years at the House",
        text: "Father doesn't joke around. At least, not normally. His humor is so dry you'd miss it if you weren't paying attention. But when he's trying to get something from someone? Suddenly he's charming and witty. I've watched him during negotiations, making diplomats laugh while subtly extracting exactly what he wants from them. Later, he'll explain to us what he did: 'Humor disarms. People rarely suspect the knife when they're smiling.' It's so cool, how easily he can switch like that.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Tomas, Age 15",
        years: "6 years at the House",
        text: "Never, EVER mess with the guest rooms. Once I tried to hide from chores and hid in an unused guest room, but I think that just made Father find me even faster. And she was MAD. Not the cold, unfeeling Father we usually see, but actually angry. Later she explained: 'Hospitality is sacred. How we treat guests reflects our honor.' Even though we rarely have official guests, those rooms are maintained perfectly. I think it's about respect, for her.",
        sentiment: "mixed",
      },
      {
        type: "testimonial",
        name: "Anya, Age 17",
        years: "10 years at the House",
        text: "People assume Father is always plotting and scheming, constantly surrounded by people. But she's actually quite introverted. After public events or socialization, she retreats to her quarters or the roof for hours. Once, when I was assigned as her aide during a week-long conference, I noticed how she would become more terse, more tightly wound each day. On the final night, she told me, 'The greatest skill a spy can learn is to appear energized in a room that's draining your very soul.' I think she finds most social interaction exhausting but has mastered the art of hiding it.",
        sentiment: "positive",
      },
      {
        type: "testimonial",
        name: "Lanfen, Age 12",
        years: "3 years at the House",
        text: "Father knows all our backgrounds. Where we came from, what languages our parents spoke, what festivals they might have celebrated. For my birthday, he gave me a traditional Liyue lantern, and in my time here, always ensured my education in the Liyue language was prioritized. She said, 'Your mother was from there. You should know her ways.' He does this for all of us, little pieces of our heritage he's somehow tracked down. I asked him why once, and she said, 'Because no one did it for me, and I forgot who I was.' I don't think he's forgotten anymore.",
        sentiment: "positive",
      },
    ],
    next: "connections",
    prev: "agenda",
  },
  connections: {
    title: "CONNECTIONS",
    subtitle: "Allies and adversaries",
    image: "/images/connections.jpg",
    content: [
      {
        type: "heading",
        text: "UNDER CONSTRUCTION",
      },
    ],
    prev: "testimonials",
    next: "credits",
  },
  credits: {
    title: "CREDITS & RULES",
    subtitle: "Image sources & roleplay guidelines",
    image: "/images/credits.jpg",
    content: [
      {
        type: "heading",
        text: "PORTRAYAL DISCLAIMER",
      },
      {
        type: "paragraph",
        text: "This is an independent, selective portrayal of ARLECCHINO from GENSHIN IMPACT, with some creative liberties taken for storytelling purposes.",
      },
      // {
      //   type: "heading",
      //   text: "ROLEPLAY GUIDELINES",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "Status banter is open to everyone; feel free to interact even if someone comments",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "No smut without plot, no exceptions",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "Both spontaneity and discussion are welcomed",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "Don't feel beholden to big flashy greetings; just say hi and let's talk",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "Casual stories & status banter based, but not restricted",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "My responses may be slow in larger roleplays; be patient",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "Stories have no fixed post length; can be a paragraph or novella",
      //   note: "",
      // },
      // {
      //   type: "rule",
      //   number: "•",
      //   text: "When it comes to interactions, crossovers are adored",
      //   note: "",
      // },
      // {
      //   type: "heading",
      //   text: "PREFERRED THEMES & INTERESTS",
      // },
      // {
      //   type: "paragraph",
      //   text: "Preferred themes: feudal, sci-fi, (dark) fantasy, political intrigue, family dynamics, moral ambiguity, and psychological exploration.",
      // },
      // {
      //   type: "paragraph",
      //   text: "If you're into The Locked Tomb, A Practical Guide to Evil, ELDEN RING, Berserk, Vampire: The Masquerade, or similar dark fantasy works, we'll get along wonderfully.",
      // },
      {
        type: "heading",
        text: "CONTENT WARNINGS",
      },
      {
        type: "paragraph",
        text: "This portrayal may contain mature themes including violence, psychological trauma, child abuse (in backstory), political manipulation, and morally grey characters.",
      },
      {
        type: "heading",
        text: "IMAGE CREDITS",
      },
      {
        type: "paragraph",
        text: "All images used in this portrayal are official artwork from Genshin Impact by miHoYo/HoYoverse, fan art credited to their respective artists, or placeholder images. No copyright infringement is intended.",
      },
      {
        type: "paragraph",
        text: "Specific credits:",
      },
      {
        type: "rule",
        number: "•",
        text: "Initial avatar: @zylverxx on Twitter",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Profile avatar: @fthrihvsnnd on Twitter",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Background image: @kattkeyy on Twitter",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Rules of the Hearth Image: @prakshelena on Twitter",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Agenda Image: @keibleh on Twitter",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Testimonials Image: https://www.pixiv.net/en/artworks/118880807",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Connections image: @vyphorium on Twitter/Instagram",
        note: "",
      },
      {
        type: "rule",
        number: "•",
        text: "Credits image: @imperartrixu on Twitter/Instagram",
        note: "",
      },
      {
        type: "heading",
        text: "CONTACT & INTERACTION",
      },
      {
        type: "paragraph",
        text: "Feel free to reach out for plotting, casual interaction, or just to chat about the character. The Father's door is always open to those who approach with respect.",
      },
      {
        type: "quote",
        text: "Where potential is nurtured under the Father's guidance.",
      },
    ],
    prev: "connections",
  },
}

export default function ChapterPage() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const slug = params?.slug as string

  const chapter = chapterContent[slug as keyof typeof chapterContent]

  useEffect(() => {
    if (!chapter) {
      router.push("/chapters")
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [chapter, router, slug])

  if (!chapter) return null

  const renderContent = (item: any, index: number) => {
    if (item.type === "heading") {
      return (
        <h2 key={index} className="font-display text-xl text-crimson border-l-4 border-crimson pl-4 py-2 bg-black/50">
          {item.text}
        </h2>
      )
    } else if (item.type === "paragraph") {
      return (
        <p key={index} className="text-white/90 leading-relaxed">
          {item.text}
        </p>
      )
    } else if (item.type === "quote") {
      return (
        <blockquote key={index} className="border-l-4 border-crimson/50 pl-4 py-2 italic text-white/70 font-quote">
          "{item.text}"
        </blockquote>
      )
    } else if (item.type === "agenda") {
      return (
        <div key={index} className="space-y-4 my-6">
          {item.items.map((agendaItem: any, agendaIndex: number) => (
            <div key={agendaIndex} className="bg-black/30 border border-crimson/30 p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 min-w-[23%] flex flex-col items-center">
                  <Calendar className="w-5 h-5 text-crimson mb-2" />
                  <div className="text-white/70 text-xs">{agendaItem.date}</div>
                </div>
                <div>
                  <h3 className="font-display text-white text-lg">{agendaItem.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-white/60 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{agendaItem.location}</span>
                  </div>
                  <p className="mt-2 text-white/80 text-sm">{agendaItem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    } else if (item.type === "testimonial") {
      return (
        <div
          key={index}
          className={`my-4 p-4 border ${
            item.sentiment === "positive"
              ? "border-crimson/30"
              : item.sentiment === "mixed"
                ? "border-amber-800/30"
                : "border-gray-700"
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-display text-white text-lg">{item.name}</h3>
              <div className="text-white/60 text-xs">{item.years}</div>
            </div>
            <div>
              {item.sentiment === "positive" ? (
                <ThumbsUp className="w-4 h-4 text-crimson/70" />
              ) : item.sentiment === "mixed" ? (
                <div className="flex">
                  <ThumbsUp className="w-4 h-4 text-crimson/70" />
                  <ThumbsDown className="w-4 h-4 text-white/30" />
                </div>
              ) : (
                <ThumbsDown className="w-4 h-4 text-white/30" />
              )}
            </div>
          </div>
          <p className="text-white/80 italic text-sm font-quote">"{item.text}"</p>
        </div>
      )
    } else if (item.type === "connection") {
      return (
        <div key={index} className="my-4 p-4 border border-crimson/30 bg-black/30">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-32 h-32 flex-shrink-0">
              <Image
                src={item.image || `/images/connections/${item.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                alt={item.name}
                fill
                className="object-cover border border-crimson/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
            </div>

            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-white text-lg">{item.name}</h3>
                <div className="text-crimson text-sm font-medium">{item.relationship}</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-white/50" />
                <div className="h-px flex-grow bg-white/20"></div>
              </div>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      )
    } else if (item.type === "rule") {
      return (
        <div key={index} className="my-4 p-4 border border-crimson/30 bg-black/30">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-crimson text-crimson font-display">
              {item.number}
            </div>
            <div className="flex-grow">
              <p className="text-white font-medium">{item.text}</p>
              {item.note && <p className="text-white/60 text-sm italic mt-2 font-quote">— {item.note}</p>}
            </div>
          </div>
        </div>
      )
    } else if (item.type === "mission") {
      return (
        <div key={index} className="my-4 p-4 border border-crimson/30 bg-black/30">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-crimson text-crimson">
              {item.icon === "intelligence" && <Book className="w-5 h-5" />}
              {item.icon === "infiltration" && <User className="w-5 h-5" />}
              {item.icon === "combat" && <Sword className="w-5 h-5" />}
            </div>
            <div className="flex-grow">
              <h3 className="font-display text-white text-lg">{item.title}</h3>
              <p className="text-white/80 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        </div>
      )
    }
    return null
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
        <Link
          href="/chapters"
          className="inline-flex items-center gap-2 text-white/70 hover:text-crimson transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display text-sm tracking-wider">ARCHIVES</span>
        </Link>

        <div className="text-white/40 text-sm font-display tracking-wider">{chapter.title}</div>
      </header>

      {/* Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 flex-1 flex flex-col items-center px-4 py-8"
          >
            <div className="max-w-prose w-full">
              <div className="mb-8 text-center">
                <h1 className="main-title">{chapter.title}</h1>
                <p className="font-quote text-white/60 italic mt-2">{chapter.subtitle}</p>
              </div>

              <div className="relative w-full aspect-[3/2] mb-8">
                <Image
                  src={chapter.image || "/placeholder.svg"}
                  alt={chapter.title}
                  fill
                  className="object-cover border border-crimson/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              <div className="space-y-6">{chapter.content.map((item, index) => renderContent(item, index))}</div>

              <div className="mt-12 flex justify-between">
                {chapter.prev ? (
                  <Link
                    href={`/chapters/${chapter.prev}`}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-crimson transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-display text-sm tracking-wider">PREVIOUS</span>
                  </Link>
                ) : (
                  <div></div>
                )}

                {chapter.next ? (
                  <Link
                    href={`/chapters/${chapter.next}`}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-crimson transition-colors"
                  >
                    <span className="font-display text-sm tracking-wider">NEXT</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
