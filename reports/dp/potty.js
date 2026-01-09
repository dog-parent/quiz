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
    // the dog potty lander
    {
    id: "result_potty_training",
    type: "no-answer",
    question: "Your Dog-Parent Behaviour & Potty-Habits Report",
    media: {
      type: "vimeo",          // 'vimeo' | 'image' | 'video' (video for mp4/webm)
      src: "https://vimeo.com/1152428436",
      // poster: "img/image1.jpg", // optional local poster
    },  
    description: "So… based on everything you shared earlier, especially that part about {answers.petName} having [b]indoor pee/poop accidents no matter how many times you’ve tried to fix it[/b], you’re sitting in a very specific stage of the potty-training journey. And honestly? You’re not alone, lots of loving dog-parents quietly deal with this exact pattern with the exact same breed.\n\nLet’s break down what your answers actually reveal.\n\n---\n\n[size=18px][b]🚩 What’s Really Happening Here[/b][/size]\nRight now, the pattern you described suggests {answers.petName} isn’t struggling out of stubbornness… but from a training gap that was never fully sealed.\nIt often comes from things like:\n\n- mixed or unclear potty signals\n- inconsistent reinforcement loops\n- indoor environments with past “accident scent anchors”\n- timing windows being off by just a little\n- or simply not knowing the exact sequence that makes potty-training stick permanently\n\nNone of this is your fault; most dog-parents are never taught the actual behaviour sequence dogs need.\n\nWhat your answers point to is a familiar stage:\n[b]your dog partially understands what to do… but the final behavioural lock-in never fully clicked.[/b]\nThat’s why you’re still seeing random accidents even after trying different methods.\n\n---\n\n[size=18px][b]📉 The Level You’re Currently At[/b][/size]\nYour dog is somewhere in the “high confusion / low reliability” phase.\nThis stage is where:\n\n- {answers.petName} sometimes does the right thing\n- but can’t repeat it consistently\n- and environmental triggers easily override what they’ve learned\n- meaning you keep getting unpredictable indoor accidents\n\nThis stage feels incredibly frustrating because the dog looks like they “should know better”… but the foundation of the behaviour isn’t actually complete.\n\n---\n\n[size=18px][b]⚠️ What Happens If This Stage Continues[/b][/size]\nIf nothing changes, this level usually progresses into the “habit-solidification stage” where:\n\n- indoor spots become mentally marked as “approved”\n- the dog stops seeing accidents as mistakes\n- the cleanup scent never truly disappears, so the cycle keeps repeating\n- and the dog becomes harder to retrain because an old habit has now become the *default*\n\nThis is the point where dog-parents feel defeated, and the dog gets misunderstood as being disobedient when really the training framework itself was never fully connected.\n\n---\n\n[size=18px][b]🧭 So… What Does a Real Fix Actually Need to Look Like?[/b][/size]\nIf someone in your exact situation went looking for a solution, they would need something that:\n\n- ✔️ Provides a [b]step-by-step potty sequence[/b]\n  Why: Dogs learn behaviours in predictable chains, missing one step breaks the whole routine.\n\n- ✔️ Removes indoor scent anchors properly\n  Why: If the old “accident signal” stays, the dog’s brain reads the room as a valid bathroom.\n\n- ✔️ Uses reinforcement timing that matches dog psychology\n  Why: Rewards at the wrong second… literally teach the *wrong* behaviour.\n\n- ✔️ Works for all dog ages, including older dogs\n  Why: Many online tips only work for puppies, not dogs who already built habits.\n\n- ✔️ Can reset existing bad potty patterns\n  Why: You’re not starting from scratch, you’re correcting something your dog already believes is normal.\n\n- ✔️ Doesn’t need harsh discipline, gadgets or weird gimmicks\n  Why: Dogs respond best to clarity, not punishment or confusion.\n\nThese are the criteria any real solution needs to meet.\nAnd honestly? Most “potty-training hacks” online fail almost every single one of these.\n\n---\n\n[size=18px][b]⭐ The Solution That Actually Meets All the Above Criteria[/b][/size]\nAfter breaking down what your quiz answers reveal and what stage you’re in, the only kind of fix that makes sense for your situation is a [b]structured, behaviour-based potty-training system[/b], something that rebuilds the correct habit from the ground up.\n\nAnd that’s exactly why the [b]Dog Potty Training in 7 Days[/b] program stands out. It perfectly matches you and {answers.petName}'s situation, and the criteria above because:\n\n- it teaches the exact behavioural sequence dogs use\n- it shows you how to erase old accident scent triggers properly\n- it uses timing-based reinforcement methods backed by canine psychology\n- it’s built for puppies and older dogs\n- it resets old habits instead of pretending they don’t exist\n- it keeps everything simple, calm and humane, no punishment, no gimmicks\n\nWe're recommending it because it saves you from digging through hundreds of conflicting tips, YouTube hacks, and outdated training advice that don’t work for dogs {answers.petName}’s age, breed or behaviour pattern.\n\nThis actually uses the same framework professional trainers use; just simplified so any dog-parent can apply it in minutes a day.\n\nAnd honestly? Considering where {answers.petName} is right now (that confusing stage where they “kind of get it but not really”), this is the exact type of help that finally creates consistency and removes those lingering indoor accidents permanently.\n\n---\n\n[size=18px][b]🎯 Why This Recommendation Makes Sense for You[/b][/size]\nBecause of the specific problem you selected earlier, about {answers.petName} having [b]indoor pee/poop accidents even after trying to fix it multiple times[/b]; the program is a perfect fit.\nYou don’t need random hacks…\nYou need [b]clarity, timing, and a reset of {answers.petName}’s potty blueprint[/b].\n\nThis is the fastest and simplest path to:\n\n- eliminating indoor accidents\n- teaching {answers.petName} one clear routine\n- replacing old potty habits with the correct one\n- finally getting peace in your home again\n\nAnd now that all the hard diagnosis work is done for you, you’ve basically skipped months of trial-and-error research most dog-parents get stuck in.\n\n\n[b]We've only just told you the tail of the 7 Day dog potty training guide's fish, so click the button below to learn more on the next page 👇[/b]",
        buttontext: "Learn more!",
    },
    {
    type: "choice",
    // media: { type: "image", src: "../../img/potty.jpg" },
    question: "The 7 Day Dog Potty Training Program: Quick Overview",
    media: {
      type: "vimeo",          // 'vimeo' | 'image' | 'video' (video for mp4/webm)
      src: "https://vimeo.com/1152429054",
      // poster: "img/image1.jpg", // optional local poster
    },  
    description: "[b]This is the program we mentioned on your report for {answers.petName}.[/b]\nIt’s a simple, step-by-step system that guides dog-parents to teach their dog where and when to go to the toilet. It focuses on behavior sequences, timing, and removing the things that make indoor accidents repeat.\n\n----\n\n[b][size=18px]Why this works 🧠✨[/size][/b]\n- It trains the dog’s brain with a clear sequence of cues and rewards, so the dog learns the exact steps to go outside instead of inside.\n- It guides you to remove the leftover smell and daily triggers in the home that keep telling the dog “it’s okay to go here.” In a the professional way.\n- It fits into busy schedules, so owners who work can still follow it consistently.\n\n----\n\n[b][size=18px]Key features 📘🔍[/size][/b]\n- Day-by-day blueprint for 7 days; clear steps for each day.\n- Busy-owner schedules; routines that fit 9–5 life.\n- Signal recognition guide; how to read your dog’s “I need to go” signs.\n- Cleanup and odor removal tips; stop the scent from inviting repeat accidents.\n- Problem-solving section; fixes for nighttime, marking, and relapses.\n- Lifetime access as digital download; start right away on any device.\n- 60-day money-back guarantee (no hassle).\n\n----\n\n[b][size=18px]Benefits for you and {answers.petName} 🐶💛[/size][/b]\n- {answers.petName} will now have fewer or no indoor accidents in days, not months.\n- Less cleaning, less stress, and fewer arguments about the house smell.\n- More confidence in {answers.petName} and in yourself as the owner.\n- Better nights, less waking up to take the dog out.\n- Save money by avoiding repeated carpet/floor repairs and cleaners.\n\n----\n\n[b][size=18px]Our findings from the internet 🌐🔎[/size][/b]\n- Trusted by 12,000+ dog parents who used the system in real homes. We got this from review sites.\n- Most users report clear improvement within the first week. This is from the program's official website.\n- Backed by simple behavior science; the steps match how dogs naturally learn. Says their official website.\n\n> [i]These are summary numbers to show how widely used and effective this approach is to solving potty problem in dogs. The most satisfying so far when compared to other programs in this space[/i]\n\n----\n\n[b][size=18px]Common objections; quickly answered ❗💬[/size][/b]\n- [b]“I don’t have time.”;[/b] The plan is built for busy schedules. Daily tasks take minutes, not hours.\n- [b]“My dog is older. . . will it still work?”;[/b] Yes. The method resets habits; it works for puppies and older dogs.\n- [b]“I’ve tried everything before.”;[/b] If you tried random tips, you saw mixed results. This is a consistent, repeatable system - that’s the difference.\n- [b]“Is it punishment-based?”[/b] No. It uses clear cues and reward timing, not harsh punishment.\n- [b]“What if it fails?”[/b] There’s a 60-day money-back guarantee, so you can try it risk-free.\n\n----\n\n[b][size=18px]How easy it is to use (so simple) 📱➡️🐕[/size][/b]\n1. It's digital, so just purchase on to any phone or laptop.\n2. Then start with the Day 1 plan (takes 5–10 minutes).\n3. Follow the short daily routine and the timing cues.\n4. Use it's professional cleanup guide when accidents happen so they don’t repeat.\n5. Keep consistent for 7 days and watch the habit lock-in. You could still continue.\n\n> [i]It is said on their website that most owners start seeing real change within the first week. It’s designed to be low-effort and high-effect.[/i]\n\n----\n\n[b][size=18px]What makes it different / unique ⭐🐾[/size][/b]\n- It teaches the [b]exact sequence[/b] dogs use so you don’t guess.\n- It includes real-life schedules for busy people, not just theory.\n- It focuses on removing the environment cues that silently in the dog world cause repeat accidents.\n- It’s practical, not preachy, so there are no weird tools, and no harsh discipline, and no super long training sessions.\n\n----\n\n[b][size=18px]Ready to get the guide and fix this for {answers.petName}? 🚀🐶[/size][/b]\nIf you think good about everything we found in your quiz, click the button below to go to the program's official product page to check it out. 👇",
    // options: [
    //   { text: "⚡tap here to activate button first 👈", href: "http://www.betterdailyguide.site/ds24/potty-training-in-7-days#aff=twenty-five", target: "_blank", buttontext: "Check It Out from the Official Website", }
    // ],
    buttontext: "Check It Out Now!",
    completionHref: "http://www.betterdailyguide.site/ds24/potty-training-in-7-days#aff=twenty-five"
    }
]

