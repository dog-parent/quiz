const data = {
  currentUser: {
    image: {
      png: "./images/avatars/anonymous.png",
      webp: "./images/avatars/anonymous.png"
    },
    username: "Anonymous User"
  },

  comments: [
    {
      parent: 0,
      id: 1,
      content: "Just tried that Dog Parent Quiz… honestly didn’t expect it to call me out like that. 😅 Turns out my Benny’s “slowing down” might NOT be just old age.",
      createdAt: "3 days ago",
      score: 180,
      user: {
        image: {
          png: "./images/avatars/profile1.png",
          webp: "./images/avatars/profile1.png"
        },
        username: "Martha Louise Bennett"
      },
      replies: [
        {
          parent: 1,
          id: 1,
          content: "Oh Martha, same thing happened with my Daisy! The quiz suggested joint stiffness and I finally took her in, poor thing needed supplements all along. 💛",
          createdAt: "3 days ago",
          score: 71,
          replyingTo: "marthalouisebennett",
          user: {
            image: {
              png: "./images/avatars/profile2.png",
              webp: "./images/avatars/profile2.png"
            },
            username: "Helen Sullivan"
          }
        },
        {
          parent: 1,
          id: 2,
          content: "Martha, thank you for posting yours. I did the quiz because I saw your comment, and it made me realize my dog’s stiffness wasn’t just “winter blues.” Our pups hide so much. 💛",
          createdAt: "2 days ago",
          score: 53,
          replyingTo: "marthalouisebennett",
          user: {
            image: {
              png: "./images/avatars/profile3.png",
              webp: "./images/avatars/profile3.png"
            },
            username: "Nora Sinclair"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 2,
      content: "I liked the quiz. Simple questions, but it made me think… especially about how often Max drinks water. My vet said increased thirst can be important. Didn’t know!",
      createdAt: "1 week ago",
      score: 986,
      user: {
        image: {
          png: "./images/avatars/profile4.png",
          webp: "./images/avatars/profile4.png"
        },
        username: "George Keller"
      },
      replies: []
    },

    {
      parent: 0,
      id: 3,
      content: "I took it for fun and ended up crying on my couch. It reminded me my last pup had kidney issues I ignored for too long. Grateful for anything that teaches us to pay attention. ❤️‍🩹",
      createdAt: "2 weeks ago",
      score: "1.4K",
      user: {
        image: {
          png: "./images/avatars/profile5.png",
          webp: "./images/avatars/profile5.png"
        },
        username: "Rita Pearson"
      },
      replies: []
    },

    {
      parent: 0,
      id: 4,
      content: "Alright… who made this quiz so accurate?? It told me my dog might be anxious and now I'm watching him like a detective. 🕵️‍♂️😂",
      createdAt: "5 days ago",
      score: 511,
      user: {
        image: {
          png: "./images/avatars/profile17.png",
          webp: "./images/avatars/profile17.png"
        },
        username: "Don Michael Carter"
      },
      replies: [
        {
          parent: 4,
          id: 1,
          content: "Don, mine said the same. These dogs are just like toddlers with fur and constant drama.",
          createdAt: "5 days ago",
          score: 345,
          replyingTo: "donmichaelcarter",
          user: {
            image: {
              png: "./images/avatars/profile7.png",
              webp: "./images/avatars/profile7.png"
            },
            username: "Viola Harper"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 5,
      content: "The quiz said my Luna might be dealing with mild allergies. And guess what? She WAS. One food change later and she’s back to zoomies at 12 years old. 🎉",
      createdAt: "1 week ago",
      score: 716,
      user: {
        image: {
          png: "./images/avatars/profile8.png",
          webp: "./images/avatars/profile8.png"
        },
        username: "Eileen Richards"
      },
      replies: []
    },

    {
      parent: 0,
      id: 6,
      content: "I don't usually trust online things but this one was actually helpful. Took me maybe 3 minutes.",
      createdAt: "2 weeks ago",
      score: "1.8K",
      user: {
        image: {
          png: "./images/avatars/profile9.png",
          webp: "./images/avatars/profile9.png"
        },
        username: "Harold Edward Thompson"
      },
      replies: [
        {
          parent: 6,
          id: 1,
          content: "Same! I expected nonsense but got a full report. Felt like it knew my dog personally. 😄",
          createdAt: "2 weeks ago",
          score: 745,
          replyingTo: "haroldedwardthompson",
          user: {
            image: {
              png: "./images/avatars/profile10.png",
              webp: "./images/avatars/profile10.png"
            },
            username: "Linda Brooks"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 7,
      content: "I love that it doesn’t make you feel guilty. Just… informed. Wish someone told me years ago that “smelly breath” isn’t just “dog breath.” 😬",
      createdAt: "6 days ago",
      score: 807,
      user: {
        image: {
          png: "./images/avatars/profile11.png",
          webp: "./images/avatars/profile11.png"
        },
        username: "Grace Anderson"
      },
      replies: []
    },

    {
      parent: 0,
      id: 8,
      content: "My grandson made me take it. Said, “Grandma, you love Buddy more than us, make sure he’s healthy.” 😂 Kids these days.",
      createdAt: "1 days ago",
      score: 206,
      user: {
        image: {
          png: "./images/avatars/profile12.png",
          webp: "./images/avatars/profile12.png"
        },
        username: "Caroline Smith"
      },
      replies: []
    },

    {
      parent: 0,
      id: 9,
      content: "The part about coat changes hit home. My last lab had thyroid problems and it started with her coat thinning. This quiz would’ve made me look sooner. 😞",
      createdAt: "1 month ago",
      score: "13.7K",
      user: {
        image: {
          png: "./images/avatars/profile13.png",
          webp: "./images/avatars/profile13.png"
        },
        username: "Francis Oliver Hughes"
      },
      replies: [
        {
          parent: 9,
          id: 1,
          content: "Francis, sending a hug. These fur babies leave paw prints forever.",
          createdAt: "1 month ago",
          score: "7.6K",
          replyingTo: "francisoliverhughes",
          user: {
            image: {
              png: "./images/avatars/profile14.png",
              webp: "./images/avatars/profile14.png"
            },
            username: "Joyce Ward"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 10,
      content: "Honestly it’s just fun. I laughed through half of it. But the report was impressively long! Felt like a mini vet visit.",
      createdAt: "4 days ago",
      score: 335,
      user: {
        image: {
          png: "./images/avatars/profile18.png",
          webp: "./images/avatars/profile18.png"
        },
        username: "Sharon Monroe"
      },
      replies: []
    },

    {
      parent: 0,
      id: 11,
      content: "I thought my Cooper was just being dramatic with his “itchy butt dance.” The quiz suggested possible anal gland trouble. Guess who was correct… not me. 😂",
      createdAt: "2 days ago",
      score: 155,
      user: {
        image: {
          png: "./images/avatars/profile16.png",
          webp: "./images/avatars/profile16.png"
        },
        username: "Beatrice Grant"
      },
      replies: []
    },

    {
      parent: 0,
      id: 12,
      content: "I showed the results to my vet and even she said it was a decent early-check tool. Nothing diagnostic, of course, but helpful.",
      createdAt: "1 week ago",
      score: "1.2K",
      user: {
        image: {
          png: "./images/avatars/profile6.png",
          webp: "./images/avatars/profile6.png"
        },
        username: "Clara Jean Mitchell"
      },
      replies: [
        {
          parent: 12,
          id: 1,
          content: "I did the same! She loved the part about behavior changes.",
          createdAt: "6 days ago",
          score: 645,
          replyingTo: "clarajeanmitchell",
          user: {
            image: {
              png: "./images/avatars/profile15.png",
              webp: "./images/avatars/profile15.png"
            },
            username: "Alice Collins"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 13,
      content: "My dog didn't like me taking the quiz. Kept staring like I was telling on him. 🤣",
      createdAt: "2 days ago",
      score: 124,
      user: {
        image: {
          png: "./images/avatars/profile19.png",
          webp: "./images/avatars/profile19.png"
        },
        username: "Vernon Price"
      },
      replies: []
    },

    {
      parent: 0,
      id: 14,
      content: "It brought back memories of our old terrier who had heart murmurs. If I had something like this back then maybe I would’ve noticed her coughing sooner. 💔",
      createdAt: "3 weeks ago",
      score: "15.4K",
      user: {
        image: {
          png: "./images/avatars/profile20.png",
          webp: "./images/avatars/profile20.png"
        },
        username: "Lydia Annabel Wright"
      },
      replies: [
        {
          parent: 14,
          id: 1,
          content: "Your story made me tear up. My last dog also had heart issues and I wish I had tools like this earlier. Sometimes we seniors trust “old age” too much.",
          createdAt: "3 weeks ago",
          score: "8.9K",
          replyingTo: "lydiaannabelwright",
          user: {
            image: {
              png: "./images/avatars/profile21.png",
              webp: "./images/avatars/profile21.png"
            },
            username: "Denise Rivers"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 15,
      content: "Just shared it with my sister. She thinks her pug is “perfectly normal,” meanwhile he sounds like a tiny tractor at night. 😅",
      createdAt: "5 days ago",
      score: 834,
      user: {
        image: {
          png: "./images/avatars/profile22.png",
          webp: "./images/avatars/profile22.png"
        },
        username: "Maggie Harper"
      },
      replies: []
    },

    {
      parent: 0,
      id: 316,
      content: "The hydration question is what got me. I was like “uh oh… do treats count as water?” 😆",
      createdAt: "4 days ago",
      score: 6,
      user: {
        image: {
          png: "./images/avatars/profile23.png",
          webp: "./images/avatars/profile23.png"
        },
        username: "Peter Reed"
      },
      replies: [
        {
          parent: 16,
          id: 1,
          content: "If treats counted as water, my dog would be an ocean.",
          createdAt: "4 days ago",
          score: 233,
          replyingTo: "peterreed",
          user: {
            image: {
              png: "./images/avatars/profile24.png",
              webp: "./images/avatars/profile24.png"
            },
            username: "Sandra Holt"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 17,
      content: "I appreciate how it explains things without scary language. It mentioned early signs of discomfort in older dogs. Made me check my little Bella’s paws and joints.",
      createdAt: "1 week ago",
      score: "1K",
      user: {
        image: {
          png: "./images/avatars/profile25.png",
          webp: "./images/avatars/profile25.png"
        },
        username: "Rose Margaret Lewis"
      },
      replies: []
    },

    {
      parent: 0,
      id: 18,
      content: "I did it to prove my wife wrong… and the quiz took her side. Now I’m monitoring our dog’s weight like it’s the stock market. 📈🐶",
      createdAt: "2 days ago",
      score: 117,
      user: {
        image: {
          png: "./images/avatars/profile26.png",
          webp: "./images/avatars/profile26.png"
        },
        username: "Alfred Barnes"
      },
      replies: []
    },

    {
      parent: 0,
      id: 19,
      content: "The behavior section was spot on. It said sudden clinginess can mean stress, turns out fireworks week had my poor baby shaken.",
      createdAt: "1 week ago",
      score: "1.1K",
      user: {
        image: {
          png: "./images/avatars/profile27.png",
          webp: "./images/avatars/profile27.png"
        },
        username: "Janie Collins"
      },
      replies: [
        {
          parent: 19,
          id: 1,
          content: "Same here. These pups feel everything.",
          createdAt: "1 week ago",
          score: 704,
          replyingTo: "janiecollins",
          user: {
            image: {
              png: "./images/avatars/profile30.png",
              webp: "./images/avatars/profile30.png"
            },
            username: "Myra Powell"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 20,
      content: "I like anything that reminds us to be observant. Dogs hide pain so well. My last golden had arthritis long before she showed it… quizzes like this make you slow down.",
      createdAt: "2 weeks ago",
      score: "5.1K",
      user: {
        image: {
          png: "./images/avatars/profile29.png",
          webp: "./images/avatars/profile29.png"
        },
        username: "Elsa Norah Newton"
      },
      replies: []
    },

    {
      parent: 0,
      id: 21,
      content: "Just took it. Pretty fun. And now I feel like I need to upgrade all of Rufus’s toys. 😂",
      createdAt: "3 days ago",
      score: 132,
      user: {
        image: {
          png: "./images/avatars/profile28.png",
          webp: "./images/avatars/profile28.png"
        },
        username: "Tom Gallagher"
      },
      replies: []
    },

    {
      parent: 0,
      id: 22,
      content: "My niece sent me the link. “Auntie Glo, you and Bandit both need checkups.” Rude but fair. 😂",
      createdAt: "4 days ago",
      score: 685,
      user: {
        image: {
          png: "./images/avatars/profile31.png",
          webp: "./images/avatars/profile31.png"
        },
        username: "Gloria Ziegler"
      },
      replies: [
        {
          parent: 22,
          id: 1,
          content: "SAME. My niece sent it to me too! Maybe it’s a universal niece thing to judge our dog-parenting skills. 😅",
          createdAt: "4 days ago",
          score: 538,
          replyingTo: "gloriaziegler",
          user: {
            image: {
              png: "./images/avatars/profile32.png",
              webp: "./images/avatars/profile32.png"
            },
            username: "Tina Lawson"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 23,
      content: "I liked how it addressed changes in appetite. My terrier went through a phase and I brushed it off. Reading the report made me realize how important that can be.",
      createdAt: "6 days ago",
      score: 884,
      user: {
        image: {
          png: "./images/avatars/profile33.png",
          webp: "./images/avatars/profile33.png"
        },
        username: "Nora Jane Jacobs"
      },
      replies: []
    },

    {
      parent: 0,
      id: 24,
      content: "Whoever made this quiz must own like 12 dogs. No one else understands them this well.",
      createdAt: "1 week ago",
      score: 977,
      user: {
        image: {
          png: "./images/avatars/profile34.png",
          webp: "./images/avatars/profile34.png"
        },
        username: "Edward Lawrence Long"
      },
      replies: [
        {
          parent: 24,
          id: 1,
          content: "Twelve dogs… imagine the food bill. 😅",
          createdAt: "1 week ago",
          score: 805,
          replyingTo: "edwardlawrencelong",
          user: {
            image: {
              png: "./images/avatars/profile35.png",
              webp: "./images/avatars/profile35.png"
            },
            username: "May Suzanne Carter"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 25,
      content: "I shared it to our whole building’s senior group chat. Half of us were up at 2AM talking about our dogs’ weird habits. This quiz started chaos but in a good way. ❤️",
      createdAt: "3 days ago",
      score: 202,
      user: {
        image: {
          png: "./images/avatars/profile37.png",   // placeholder (beyond available 35)
          webp: "./images/avatars/profile37.png"
        },
        username: "Janice Thompson"
      },
      replies: []
    },

    {
      parent: 0,
      id: 26,
      content: "I retook the quiz this morning because I thought maybe I rushed it last night. Nope. Still told me my Charlie’s coughing might matter. Took him in today and the vet caught a tiny infection early. Feeling very grateful. ❤️",
      createdAt: "2 days ago",
      score: 170,
      user: {
        image: {
          png: "./images/avatars/profile38.png",
          webp: "./images/avatars/profile38.png"
        },
        username: "Harriet Diane Douglas"
      },
      replies: []
    },

    {
      parent: 0,
      id: 27,
      content: "Mine flagged “changes in sleep habits.” I thought Molly just liked waking me up at 4AM for fun. Turns out she was uncomfortable. Couple of adjustments and she sleeps better than I do now.",
      createdAt: "5 days ago",
      score: 607,
      user: {
        image: {
          png: "./images/avatars/profile36.png",
          webp: "./images/avatars/profile36.png"
        },
        username: "Gordon Fisher"
      },
      replies: []
    },

    {
      parent: 0,
      id: 28,
      content: "My granddaughter said the quiz was “boomer-friendly,” which I’m choosing to take as a compliment. 😆 But it really did warn me that Oscar’s panting could mean stress, not just laziness.",
      createdAt: "1 week ago",
      score: 873,
      user: {
        image: {
          png: "./images/avatars/profile43.png",
          webp: "./images/avatars/profile43.png"
        },
        username: "Floyd Hayes"
      },
      replies: []
    },

    {
      parent: 0,
      id: 29,
      content: "Lost my terrier years ago because I brushed off little warning signs. I don’t live in regret, but quizzes like this help me feel like I’m making better choices with my new pup. ❤️‍🩹",
      createdAt: "2 months ago",
      score: "23.5K",
      user: {
        image: {
          png: "./images/avatars/profile39.png",
          webp: "./images/avatars/profile39.png"
        },
        username: "Agnes Beatrice Monroe"
      },
      replies: [
        {
          parent: 29,
          id: 1,
          content: "Agnes, sending love. You’re doing amazing with your new fur baby.",
          createdAt: "2 months ago",
          score: "19.7K",
          replyingTo: "agnesbeatricemonroe",
          user: {
            image: {
              png: "./images/avatars/profile41.png",
              webp: "./images/avatars/profile41.png"
            },
            username: "Clara Porter"
          }
        }
      ]
    },

    {
      parent: 0,
      id: 30,
      content: "The part about stomach noises made me laugh. I thought my dog’s “alien noises” were just normal. After reading the report, I changed one snack he eats, he hasn’t sounded like a coffee pot since. 😂",
      createdAt: "4 days ago",
      score: 509,
      user: {
        image: {
          png: "./images/avatars/profile44.png",
          webp: "./images/avatars/profile44.png"
        },
        username: "Ron Phillips"
      },
      replies: []
    },

    {
      parent: 0,
      id: 31,
      content: "Honestly, the quiz comforted me. My dog’s been slowing down and I feared the worst. The report suggested age-related stiffness instead of something scary. Vet agreed. I finally slept last night. 🥺",
      createdAt: "3 days ago",
      score: 130,
      user: {
        image: {
          png: "./images/avatars/profile42.png",
          webp: "./images/avatars/profile42.png"
        },
        username: "Miriam Sarah Stewart"
      },
      replies: []
    },

    {
      parent: 0,
      id: 32,
      content: "After taking the quiz, I realized my Bruno’s “I don’t want to be touched today” attitude might be discomfort. Took him in-sure enough, early arthritis. We caught it early though, and I’m so thankful.",
      createdAt: "6 days ago",
      score: 521,
      user: {
        image: {
          png: "./images/avatars/profile45.png",
          webp: "./images/avatars/profile45.png"
        },
        username: "Leo Jonathan King"
      },
      replies: [
        {
          parent: 32,
          id: 1,
          content: "Good on you for checking. Our dogs rely on us for everything.",
          createdAt: "6 days ago",
          score: 448,
          replyingTo: "leojonathanking",
          user: {
            image: {
              png: "./images/avatars/profile43.png",
              webp: "./images/avatars/profile43.png"
            },
            username: "Margaret Evans"
          }
        }
      ]
    },
  ]
};
