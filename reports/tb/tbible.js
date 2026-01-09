const surveyConfig = {
  // title: "Welcome!",
  // subtitle: "Tell us a bit about you.",
  themeColor: "#076effff",
  defaultSheetName: "Sheet1",
  disclaimer: "[size=7.5px]This assessment is anonymous and secured. Data/response will not be shared or even stored right after your assessment results and diagnosis.[/size]",
  copyright: "© 2025 Affiliate [a href='https://www.digistore24.com/page/terms/4/en'][u]Terms[/u] & [u]Conditions[/u][/a]",
  completionHref: "https://homedoctorbook.com/book/#aff=twenty-five/",    // last-question CTA link

  fontSizes: {
    question: "16.32px",
    description: "14px",
    answers: "14px",
    input: "14.4px",
    inputLabel: "14.4px",
    comment: "14px",
    btnMain: "16.32px",
    btnSub: "9.6px",
    disclaimer: "10px",
    copyright: "11px"
  },
  transparentBackground: true,  // <-- set true to enable transparent card mode
};

const questions = [
    {
      id: "q_pet_name",
      type: "input",
      media: { type: "image", src: "../../img/banner.jpg" },
      question: "[color=#eb4034][size=14px][i]A Quick Confirmation[/i][/size][/color]\n\nWhat's your dog's name again?",
      // description: "[i]Enter the name so your results feel tailored to {answers.petName}.[/i]",
      inputs: [
        { type: "text", key: "petName", placeholder: "e.g. Max", comment: "Okay, {answer} recalled... your previous quiz results report is on the next page." }
      ]
    },
    {
    id: "result_trainingbible",
    type: "no-answer",
    question: "🐕 Your Quiz Results; Behaviour Report for {answers.petName}",
    media: {
      type: "vimeo",          // 'vimeo' | 'image' | 'video' (video for mp4/webm)
      src: "https://vimeo.com/1152429235",
      // poster: "img/image1.jpg", // optional local poster
    },  
    description: "You told us {answers.petName} “doesn't listen, ignores commands, pulls on the leash, jumps on guests, or barks nonstop for attention.” If any one of these is really the behaviour of {answers.petName}, then that indicates a clear set of communication problems betwenn you two. Here’s what that pattern means, why it happens, and what actually fixes it.\n\n----\n[size=18px][b]🧠 What’s really going on. . .[/b][/size]\nWhen a dog ignores commands and acts out on walks or around people, it usually isn’t spite or stubbornness. It’s a leadership and clarity problem. Tt's your problem. It means {answers.petName} is getting mixed signals or no consistent rules, so they choose whatever gets results faster - attention, access, or avoidance. In short: they learned the wrong thing because the training signals they’re getting are unclear or inconsistent.\n\n----\n[size=18px][b]🔍 Common causes based on your answers[/b][/size]\n- [b]Inconsistent cues and rewards.[/b] If commands are reinforced sometimes and ignored other times, the dog learns that obeying isn’t reliable.\n- [b]No clear sequence or structure.[/b] Short, sloppy training teaches temporary tricks not real obedience.\n- [b]Over-reliance on treats or delayed rewards.[/b] If rewards come at the wrong moment, the dog learns the wrong behavior.\n- [b]Lack of leadership in key moments (walks, guests, attention-seeking).[/b] When you avoid enforcing rules during stress, the dog decides the rules.\n- [b]Partial or patchy training history.[/b] Trying random tips or videos without a single plan leaves gaps that the dog exploits.\n\n----\n[size=18px][b]📈 The level you’re at now[/b][/size]\nFrom your answers, {answers.petName} is in a [b]“confused follower”[/b] stage: they understand a few things sometimes, but they are not consistently obedient. That means progress is possible quickly if you apply a solid system, but piecemeal efforts will only prolong the problem.\n\n----\n[size=18px][b]⚠️ What happens if nothing changes[/b][/size]\nIf this pattern persists, small misbehaviors become normalized. Leash pulling grows worse and makes walks stressful. Jumping on guests turns into social embarrassment and limits where you can bring {answers.petName}. Constant attention-seeking trains anxiety and barking becomes automatic. Over time you’ll lose freedom to take your dog places and your life will be shaped around managing problems instead of enjoying your pet.\n\n----\n[size=18px][b]🔥 The extreme level; what it could become[/b][/size]\nLeft unchecked, confusion becomes defiance, and defiance becomes risky: people could get knocked over by a large dog, repeated complaints from neighbors could escalate, and you might end up paying for professional behavior help repeatedly because the foundation was never built properly. That’s expensive and emotionally draining.\n\n----\n[size=18px][b]🧭 What a real solution must be[/b][/size]\nIf you go looking for help, or searching online or google for a solution to fix the mis comprehension between you and {answers.petName}, only consider a solution legit during search if it meets all these criteria below. A real solution must be;\n\n- [b]A full step-by-step training system.[/b] Why: half-measures teach half-behaviors; only a full sequence creates lasting obedience.\n- [b]Clear timing and reinforcement rules (when to reward).[/b] Why: the dog’s learning depends on precise timing; the right reward at the wrong second teaches the wrong thing.\n- [b]Practical routines for walks, guests, and attention moments.[/b] Why: those are the trigger scenarios; you must practice the right response there.\n- [b]Templates and checklists you can follow daily.[/b] Why: consistency wins; checklists make consistency simple even when life is busy.\n- [b]Guidance for all dog ages and personalities.[/b] Why: a method that only works for one age or temperament will fail in mixed real-life homes.\n- [b]Non-punitive, science-based methods that build leadership and trust.[/b] Why: harsh punishment breaks the bond and creates fear, which will worsen {answers.petName} behavior in the long run.\n- [b]Practical troubleshooting for relapses and edge cases.[/b] Why: problems return if you can’t diagnose what went wrong and fix it fast.\n\n----\n[size=18px][b]📚 The solution we always recommend[/b][/size]\nAfter years of digging through what actually works for real behavior change in dogs, filtering out the hype, the guesswork, and the stuff that falls apart in real life - only one solution consistently meets every requirement above: the Dog Trainer Bible. It’s the only full, proven training system that gives you step-by-step guidance, and practical templates so you actually learn how to understand your dog… {answers.petName} not just collect random tricks. That's why it's a good history to thousands of dog parents.\n\nWhy it’s a good fit for what you told us about {answers.petName}:\n- It provides a [b]complete, structured program[/b] so you stop piecing together conflicting tips.\n- It teaches [b]timing and reinforcement[/b] the right way, so rewards actually produce the behavior you want.\n- It includes [b]walk and guest routines[/b], which are the exact stress points you mentioned.\n- It comes with [b]templates and progress-tracking[/b] tools so your effort is consistent and measurable.\n- It’s built for [b]all ages and common problem types[/b], so it works whether {answers.petName} is a puppy or an older dog with habits.\n- The methods are [b]humane and practical[/b], focusing on clear leadership and positive change rather than punishment.\n\n----\n[size=18px][b]💡 Why this saves you time, money, and stress[/b][/size]\nInstead of paying for individual trainer sessions or trying thousands of conflicting internet tips, this collection puts the proven principles in one place. That means you stop wasting time, try fewer random fixes, and get consistent results faster. You also gain the confidence to manage training yourself; so you don’t keep paying for short-term fixes.\n\n[b]click on the button below to learn even more about the \"Dog Trainer Bible\" and the most secured place to get it on the next page 👇[/b]",
    buttontext: "Learn more!",
    },
    {
    id: "semi_bridge_trainingbible",
    type: "choice",
    // media: { type: "image", src: "../../img/train.png" },
    question: "Dog Trainer Bible; The Practical Fix for {answers.petName}",
    media: {
      type: "vimeo",          // 'vimeo' | 'image' | 'video' (video for mp4/webm)
      src: "https://vimeo.com/1152429818",
      // poster: "img/image1.jpg", // optional local poster
    },  
    description: "You already saw on your results page that your dog is struggling with ignoring commands, or pulling on the leash, or jumping on guests, or even barking nonstop for attention. And the Dog Trainer Bible is the resource we recommended as a fit fix. It’s a clear, step-by-step training system with ready-made templates built to help you fix those exact problems quickly and confidently.\n\n----\n🔧 [size=18px][b]Why this works[/b][/size]\nThe Dog Trainer Bible isn't just a bunch of random tips. It’s a structured training system that teaches you the right sequence, timing, and routines so {answers.petName} learns what you actually mean the way you actually mean. The guides break everything down into small, repeatable steps that dogs can understand, and owners can follow.\n\n----\n📚 [size=18px][b]What’s inside[/b][/size]\n- 37 easy-to-follow eBooks covering basic obedience, leash work, guest manners, and problem behaviors.\n- 1.5-hour audio program with extra tips you can listen to on the go.\n- Ready-made templates: training logs, progress charts, behavior assessments, and checklists.\n- Step-by-step routines for walks, greetings, and attention training.\n- Troubleshooting guides for relapses and difficult cases.\n- Lifetime digital access; open on phone, tablet, or laptop.\n- 60-day money-back guarantee.\n\n----\n🎯 [size=18px][b]What this gives you; benefits [/b][/size]\n- Walks that are calm instead of a daily struggle.\n- Fewer jumps and less barking when guests arrive.\n- Clear, reliable responses to basic commands.\n- Less time and money spent on repeated trainer visits.\n- Better bond with {answers.petName} because training is consistent and fair.\n- Confidence for you: know exactly what to do and when.\n\n----\n📈 [size=18px][b]Real talk on usage & results[/b][/size]\n- Used by thousands of dog owners who needed a single system that actually worked at home.\n- Most people notice clearer responses within a week of following the daily routines.\n- Designed from proven training principles that only pros use, not guesswork; so won't be wasting time on trendy fixes.\n\n----\n❓ [size=18px][b]Quick answers to common objections[/b][/size]\n- [b]“I don’t have time.”[/b] The program is built for busy owners. Daily steps take minutes, not hours.\n- [b]“My dog is too old / too stubborn.”[/b] This teaches habit change, which works for puppies and older dogs alike.\n- [b]“I’ve tried trainers and it didn’t stick.”[/b] Templates and repetition tools keep you consistent, that’s what makes changes permanent.\n- [b]“Is it harsh?”[/b] No. The methods focus on clear signals and fair reinforcement, not punishment.\n- [b]“What if it fails?”[/b] There’s a 60-day money-back guarantee so you can test it risk-free.\n\n----\n🛠️ [size=18px][b]How easy it is to use[/b][/size]\n1. Download the digital pack to any device.\n2. Read Day 1 (5–10 minutes).\n3. Follow the short daily routine and use the templates to track progress.\n4. Use troubleshooting guides if {answers.petName} regresses.\n> [i]The plan is built so owners can actually follow it and see steady progress.[/i]\n\n----\n✨ [size=18px][b]What makes it unique[/b][/size]\n- It’s a [b]field guide[/b], not a single video; it has 37 focused manuals you can dip into whenever you need.\n- It combines [b]training theory + practical templates[/b], so you don’t just learn ideas, you do the work and track it.\n- It’s tailored for real homes; walks, guests, feeding time, and not just studio tricks.\n\n----\n🚀 [size=18px][b]Ready to get the training that actually works for {answers.petName}?[/b][/size]\nThis is your chance to stop the confusion for both you and {answers.petName}. If you want the exact steps that make training actually stick, this is where it starts. Click below to open the official website before you lose the momentum you’ve built today.",
    buttontext: "Check It Out Now!",
    completionHref: "https://www.digistore24.com/redir/557533/twenty-five/"
    }
]

