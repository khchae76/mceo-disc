// 17 份报告 + 四种顾客成交提醒——仅服务端使用
module.exports = {
    "types": {
        "D": {
            "name": {
                "zh": "主导者 D",
                "en": "The Driver (D)"
            },
            "letter": "D",
            "positioning": {
                "zh": "以结果为导向、果断推进的行动派。",
                "en": "A decisive, results-first mover."
            },
            "color": "#E23D3D"
        },
        "I": {
            "name": {
                "zh": "影响者 I",
                "en": "The Motivator (I)"
            },
            "letter": "I",
            "positioning": {
                "zh": "热情、擅长表达与激励的关系高手。",
                "en": "A warm, expressive people-energizer."
            },
            "color": "#F5B301"
        },
        "S": {
            "name": {
                "zh": "稳健者 S",
                "en": "The Supporter (S)"
            },
            "letter": "S",
            "positioning": {
                "zh": "可靠、耐心、重视和谐的稳定力量。",
                "en": "A dependable, patient, harmony-keeping anchor."
            },
            "color": "#2E9E5B"
        },
        "C": {
            "name": {
                "zh": "谨慎者 C",
                "en": "The Analyst (C)"
            },
            "letter": "C",
            "positioning": {
                "zh": "严谨、理性、追求准确与高标准的思考者。",
                "en": "A precise, logical, standards-driven thinker."
            },
            "color": "#2F6BD6"
        }
    },
    "sell_to": {
        "D": {
            "zh": "面对 D 型顾客：他们重视结果、速度、选择与掌控感。沟通要直接、有重点，别铺垫太长的背景，别试图替他做主；给明确选项和清楚的下一步，让他觉得一切在自己手上。",
            "en": "Selling to a D customer: they value results, speed, choice and control. Be direct and concise, skip long build-ups, and never try to decide for them; give clear options and a clear next step so they feel in charge."
        },
        "I": {
            "zh": "面对 I 型顾客：他们重视感觉、互动、认同与可能性。多用故事、案例和愿景，让他参与讨论、感到被欣赏；别只丢冷冰冰的资料。最关键的是——聊得再热络，最后一定要帮他把决定落实下来。",
            "en": "Selling to an I customer: they value feelings, interaction, recognition and possibility. Use stories, cases and vision, let them join in and feel appreciated; don't hand over only dry data. Crucially — however warm the chat, always help them lock the decision in at the end."
        },
        "S": {
            "zh": "面对 S 型顾客：他们重视安全、信任、稳定与支持。不要催促或制造过度压力；说清楚流程与售后安排，给他思考的空间，并明确告诉他成交后你会如何一路陪伴。",
            "en": "Selling to an S customer: they value safety, trust, stability and support. Don't rush or over-pressure; explain the process and after-sales clearly, give space to think, and spell out how you'll support them after the sale."
        },
        "C": {
            "zh": "面对 C 型顾客：他们重视资料、准确、逻辑与标准。提供证据、细节和比较，不要夸大承诺，也不要回避风险问题；允许他检查、求证、慢慢想清楚。",
            "en": "Selling to a C customer: they value data, accuracy, logic and standards. Provide evidence, detail and comparisons, don't overpromise, and don't dodge risk questions; let them verify and think it through."
        }
    },
    "primary": {
        "D": {
            "s2_pattern": {
                "zh": "你天生以目标和结果为中心，喜欢掌握主动、快速推进。面对选择倾向当机立断，宁愿边做边修正，也不愿停在原地等待。快节奏和强烈的方向感，是你的底色。",
                "en": "You naturally center on goals and results, like taking the initiative, and move fast. You'd rather decide quickly and correct as you go than wait. A fast pace and a strong sense of direction are your baseline."
            },
            "s3_strengths": {
                "zh": "果断、有魄力、敢于承担。在混乱或高压中，你能迅速理清重点、带领大家往前，把想法快速变成行动——是团队里推动结果的引擎。",
                "en": "Decisive, gutsy and willing to take charge. In chaos or pressure you cut to what matters and move people forward, turning ideas into action fast — the engine that drives results."
            },
            "s4_blindspots": {
                "zh": "优势用过头时，可能显得强势、没耐心、忽略别人的感受与细节。你容易独断、把话说得太冲，或在别人还没准备好时就催着往前。",
                "en": "Overused, this can look forceful and impatient, overlooking feelings and details. You may decide alone, come across too blunt, or push ahead before others are ready."
            },
            "s5_communication": {
                "zh": "你喜欢直接、简短、有重点的沟通，不爱绕圈子。给你结论和选项，比给你长篇背景更有效。",
                "en": "You like communication that's direct, brief and to the point. Give you the conclusion and the options rather than a long backstory."
            },
            "s6_decision_buying": {
                "zh": "你做决定快，重视效率、掌控感和明确的回报。买东西时你要的是「这能帮我拿到什么结果」，不喜欢被过度推销或拖延。",
                "en": "You decide fast and value efficiency, control and a clear payoff. When buying, you want to know \"what result this gets me,\" and dislike being over-sold or stalled."
            },
            "s7_sales_strength": {
                "zh": "你敢开口、敢要求成交，能果断带领顾客走到决定那一步，尤其擅长面对同样果断、讲效率的顾客。",
                "en": "You're willing to ask for the sale and can lead a customer decisively to the decision — especially strong with customers who are equally direct and time-conscious."
            },
            "s8_lose_customer": {
                "zh": "你最容易流失 S 型顾客——他们重视安全感、需要时间，会被你的快节奏和压力吓退；对爱问细节的 C 型顾客，你也可能因不够耐心而失去。",
                "en": "You most easily lose S-style customers — they value safety and need time, and your pace and pressure can scare them off; you may also lose detail-seeking C-style customers by running short on patience."
            },
            "s9_how_to_reach_you": {
                "zh": "想打动你，就直接给重点、给你选择权、聚焦结果和下一步；别用冗长的背景和情感包装，也别试图控制你。",
                "en": "To reach you: be direct, give you choices, focus on outcomes and the next step; skip long backstory and emotional packaging, and don't try to control you."
            },
            "s10_7day": {
                "zh": [
                    "每天在下判断前，刻意多问一个问题。",
                    "在一次对话里，先让对方把话完整说完。",
                    "给一位同事或顾客多一点时间，不催促。",
                    "决策前，写下一个你可能忽略的风险。",
                    "把一句命令式的话，改成请求式。",
                    "主动具体地肯定一位队友的贡献。",
                    "周末复盘：这周哪一次「慢一点」带来了更好的结果？"
                ],
                "en": [
                    "Each day, deliberately ask one more question before you judge.",
                    "In one conversation, let the other person finish fully first.",
                    "Give a colleague or customer a little more time — don't rush them.",
                    "Before deciding, write down one risk you might be overlooking.",
                    "Turn one command into a request.",
                    "Give one teammate specific, genuine recognition.",
                    "Weekend review: where did \"slowing down\" get you a better result this week?"
                ]
            },
            "sales": {
                "natural_close": {
                    "zh": "你最自然的成交方式是直接、自信地提出成交：制造适度紧迫感，给明确选项，快速推进到决定。",
                    "en": "Your natural close is direct and confident: create some urgency, offer clear options, and move quickly to the decision."
                },
                "common_mistake": {
                    "zh": "你最容易犯的成交错误是太快、太强——把 S\/C 型顾客推得太急，或在他们的顾虑还没被满足时就要求成交。",
                    "en": "Your most common closing mistake is going too fast and too hard — pushing S\/C customers before they're ready, or asking for the close before their concerns are met."
                }
            }
        },
        "I": {
            "s2_pattern": {
                "zh": "你天生热情、外向、乐观，喜欢与人连接。你靠感觉和关系做事，能快速带动气氛、让人感到被看见。表达和影响他人，是你最自在的状态。",
                "en": "You're naturally warm, outgoing and optimistic, and you love connecting with people. You work through feelings and relationships, lift the mood fast, and make people feel seen. Expressing and influencing others is where you're most at home."
            },
            "s3_strengths": {
                "zh": "有感染力、善沟通、会鼓励人。你能激发热情、化解僵局、把一群人凝聚起来，为团队带来能量和创意。",
                "en": "Inspiring, communicative and encouraging. You spark enthusiasm, break deadlocks and bring people together, bringing energy and ideas to a team."
            },
            "s4_blindspots": {
                "zh": "优势用过头时，可能不够聚焦、虎头蛇尾、忽略细节和跟进；也容易凭感觉承诺、话多过行动，或回避不愉快的现实。",
                "en": "Overused, this can mean losing focus, strong starts with weak finishes, and missed details and follow-through; you may over-promise on feeling, talk more than you act, or avoid uncomfortable realities."
            },
            "s5_communication": {
                "zh": "你喜欢互动、有温度、带点故事和画面的沟通。被认可和有参与感时，你最投入；冷冰冰的资料会让你失去兴趣。",
                "en": "You like communication that's interactive, warm and painted with a bit of story. You're most engaged when recognized and involved; cold data loses you."
            },
            "s6_decision_buying": {
                "zh": "你做决定偏向凭感觉和信任，看重体验、关系和「这让我兴奋吗」。买东西时容易被愿景和好感打动，但也可能因一时冲动而后悔，需要有人帮你落地。",
                "en": "You decide by feeling and trust, valuing experience, relationship and \"does this excite me?\" You're easily moved by vision and rapport when buying, but can act on impulse and later hesitate — you need help making it concrete."
            },
            "s7_sales_strength": {
                "zh": "你天生会建立关系、营造氛围、让顾客喜欢你。你擅长用热情和故事打动人，尤其面对同样重感觉的 I 型顾客如鱼得水。",
                "en": "You naturally build rapport, set the mood and make customers like you. You move people with warmth and story — especially in your element with feeling-driven I-style customers."
            },
            "s8_lose_customer": {
                "zh": "你最容易流失 C 型顾客——他们要数据、要证据，会觉得你太热情、不够扎实；对讲效率的 D 型顾客，你也可能因铺垫太久、迟迟不收尾而失去。",
                "en": "You most easily lose C-style customers — they want data and proof, and may find you too effusive and not solid enough; you may also lose efficiency-minded D-style customers by warming up too long and never closing."
            },
            "s9_how_to_reach_you": {
                "zh": "想打动你，就给你互动与认可、留出表达的空间、保持友好正向的氛围；同时帮你把兴奋转成清楚的下一步。",
                "en": "To reach you: give interaction and recognition, leave room to express yourself, keep the tone friendly and positive — and help turn your excitement into a clear next step."
            },
            "s10_7day": {
                "zh": [
                    "每天挑一件事，做到完整收尾再开始下一件。",
                    "一次对话里，刻意多听、少说三成。",
                    "把一个口头承诺写下来，并定个期限。",
                    "跟进一位你「聊得很好但没结果」的顾客。",
                    "开会前先列三个要点，避免发散。",
                    "面对一个不愉快的事实，如实说出来。",
                    "周末复盘：这周哪一次「先落地再兴奋」带来了成果？"
                ],
                "en": [
                    "Each day, pick one thing and finish it fully before starting the next.",
                    "In one conversation, deliberately listen more and talk 30% less.",
                    "Write down one verbal promise and put a deadline on it.",
                    "Follow up with one customer you \"clicked with but never closed.\"",
                    "Before a meeting, list three key points to stay on track.",
                    "Face one uncomfortable truth and say it plainly.",
                    "Weekend review: where did \"grounding it before getting excited\" pay off this week?"
                ]
            },
            "sales": {
                "natural_close": {
                    "zh": "你最自然的成交方式是用热情、故事和愿景带动顾客，让他因为喜欢你、相信可能性而想买。",
                    "en": "Your natural close uses warmth, story and vision to carry the customer — they buy because they like you and believe in the possibility."
                },
                "common_mistake": {
                    "zh": "你最容易犯的成交错误是只顾建立关系、迟迟不敢开口要成交，或凭感觉承诺却在细节和跟进上掉链子。",
                    "en": "Your most common closing mistake is building rapport but never asking for the sale, or promising on feeling then dropping the ball on details and follow-through."
                }
            }
        },
        "S": {
            "s2_pattern": {
                "zh": "你天生稳重、耐心、重视和谐，喜欢在可预期、有安全感的环境里做事。你不急于抢风头，而是踏实地把事情做稳、把人照顾好，是团队里让人安心的存在。",
                "en": "You're naturally steady, patient and harmony-minded, and you like working in a predictable, safe environment. You don't rush for the spotlight; you keep things stable and take care of people — the presence that puts a team at ease."
            },
            "s3_strengths": {
                "zh": "可靠、忠诚、善倾听、有耐心。你能长期稳定地输出，化解紧张、维系关系，是团队和顾客都愿意信任的人。",
                "en": "Dependable, loyal, a good listener and patient. You deliver steadily over the long run, defuse tension and hold relationships together — someone teams and customers trust."
            },
            "s4_blindspots": {
                "zh": "优势用过头时，可能过度回避冲突、抗拒改变、不敢表达真实想法；也容易把别人的需求放在自己之前，累积压力却不说出口。",
                "en": "Overused, this can mean avoiding conflict too much, resisting change, and holding back your real views; you may put others' needs before your own and quietly build up stress."
            },
            "s5_communication": {
                "zh": "你喜欢温和、真诚、不带压力的沟通，讨厌被逼迫或突然的变动。有安全感时，你才会敞开心说真话。",
                "en": "You like communication that's gentle, sincere and pressure-free, and dislike being pushed or hit with sudden change. You open up and speak honestly once you feel safe."
            },
            "s6_decision_buying": {
                "zh": "你做决定慢而稳，重视信任、保障和「会不会有风险」。买东西时你需要时间、需要被理解，最怕被催；一旦信任你会非常忠诚。",
                "en": "You decide slowly and steadily, valuing trust, security and \"could this go wrong?\" When buying you need time and to feel understood, and hate being rushed; once you trust, you're very loyal."
            },
            "s7_sales_strength": {
                "zh": "你靠真诚和耐心赢得信任，不会让顾客有压迫感。你擅长建立长期关系、做好售后，尤其面对同样重安全感的 S 型顾客最能让人放心。",
                "en": "You win trust through sincerity and patience, and never make customers feel cornered. You're great at long-term relationships and after-sales — especially reassuring to safety-minded S-style customers."
            },
            "s8_lose_customer": {
                "zh": "你最容易流失 D 型顾客——他们要速度和结果，会嫌你太慢、太温；对要求成交、需要你果断推进的时刻，你也可能因不敢开口而错失。",
                "en": "You most easily lose D-style customers — they want speed and results and may find you too slow and soft; you can also miss the moment when a decisive push is needed, because you hold back from asking."
            },
            "s9_how_to_reach_you": {
                "zh": "想打动你，就给你时间和安全感、循序渐进、真诚关怀；把流程和保障讲清楚，别催促、别制造压力。",
                "en": "To reach you: give time and reassurance, go step by step, show sincere care; explain the process and the safeguards, don't rush or pressure you."
            },
            "s10_7day": {
                "zh": [
                    "每天主动表达一次自己的真实想法。",
                    "面对一个小改变，试着先接受再评估。",
                    "在一次讨论中，先说出你的不同意见。",
                    "向一位顾客清楚地提出下一步（哪怕会被拒绝）。",
                    "把一件憋在心里的事，好好说出来。",
                    "为自己的需求争取一次，不先想别人。",
                    "周末复盘：这周哪一次「主动开口」带来了好结果？"
                ],
                "en": [
                    "Each day, voice one of your real thoughts out loud.",
                    "With one small change, try accepting it first before evaluating.",
                    "In one discussion, state your differing view first.",
                    "Clearly propose the next step to a customer (even at the risk of a no).",
                    "Say out loud one thing you've been holding in.",
                    "Advocate once for your own need before thinking of others.",
                    "Weekend review: where did \"speaking up first\" get you a good result this week?"
                ]
            },
            "sales": {
                "natural_close": {
                    "zh": "你最自然的成交方式是用信任、耐心和真诚陪伴顾客，让他在有安全感的状态下自己作决定。",
                    "en": "Your natural close builds trust, patience and sincere companionship, letting the customer decide from a place of safety."
                },
                "common_mistake": {
                    "zh": "你最容易犯的成交错误是太怕给压力、迟迟不敢提出成交，把决定权一直留给顾客，结果错过成交时机。",
                    "en": "Your most common closing mistake is fearing pressure so much that you never ask for the sale, leaving the decision hanging until the moment passes."
                }
            }
        },
        "C": {
            "s2_pattern": {
                "zh": "你天生严谨、理性、注重准确，喜欢在有标准、有逻辑的框架里做事。你相信「把事情做对」比「快速做完」更重要，凡事先想清楚、查明白再行动。",
                "en": "You're naturally precise, logical and accuracy-minded, and you like working within standards and logic. You believe \"getting it right\" beats \"getting it done fast,\" thinking things through and verifying before you act."
            },
            "s3_strengths": {
                "zh": "细致、可靠、有条理、讲逻辑。你能发现别人忽略的漏洞、把质量守住，在需要准确和标准的事情上让人完全放心。",
                "en": "Meticulous, dependable, organized and logical. You catch the gaps others miss and hold the line on quality — completely reliable where accuracy and standards matter."
            },
            "s4_blindspots": {
                "zh": "优势用过头时，可能过度分析、追求完美、决策太慢；也容易挑剔、对人对己都太严，或因怕出错而迟迟不敢行动。",
                "en": "Overused, this can mean over-analysis, perfectionism and slow decisions; you may become critical, too hard on yourself and others, or freeze for fear of a mistake."
            },
            "s5_communication": {
                "zh": "你喜欢有条理、有依据、准确的沟通，讨厌含糊和夸张。给你数据、逻辑和细节，比给你情绪和口号更有说服力。",
                "en": "You like communication that's structured, evidenced and accurate, and dislike vagueness and hype. Data, logic and detail persuade you far more than emotion and slogans."
            },
            "s6_decision_buying": {
                "zh": "你做决定谨慎，重视证据、比较和风险。买东西时你要研究清楚、看规格、比价格，最怕被夸大承诺或催促；资料越透明，你越安心。",
                "en": "You decide carefully, valuing evidence, comparison and risk. When buying you research, check specs and compare prices, and hate being over-promised or rushed; the more transparent the information, the more at ease you feel."
            },
            "s7_sales_strength": {
                "zh": "你专业、可信、不夸大，能用事实和细节建立信任。你擅长面对同样重逻辑、要证据的 C 型顾客，让人相信你说的都靠得住。",
                "en": "You're professional, credible and never over-hyped, building trust with facts and detail. You excel with logic-driven, proof-seeking C-style customers who trust that what you say holds up."
            },
            "s8_lose_customer": {
                "zh": "你最容易流失 I 型顾客——他们要感觉和热情，会觉得你太冷、太较真；对要效率的 D 型顾客，你也可能因给太多细节、决策太慢而失去。",
                "en": "You most easily lose I-style customers — they want feeling and energy and may find you too cool and exacting; you can also lose efficiency-minded D-style customers with too much detail and slow decisions."
            },
            "s9_how_to_reach_you": {
                "zh": "想打动你，就给你数据和逻辑、把细节说明白、留出思考和求证的时间；别夸大、别回避风险、别催你。",
                "en": "To reach you: give data and logic, explain the details, leave time to think and verify; don't exaggerate, don't dodge risk, don't rush you."
            },
            "s10_7day": {
                "zh": [
                    "每天允许一件事「够好就好」，不追求完美。",
                    "在收齐所有资料前，先做一个小决定。",
                    "跟一个人沟通时，先照顾感受再讲道理。",
                    "把一次批评，换成一个具体的建议。",
                    "为一件事设定截止时间并按时交出。",
                    "主动欣赏一位队友的优点，不挑毛病。",
                    "周末复盘：这周哪一次「先行动再完善」反而更好？"
                ],
                "en": [
                    "Each day, let one thing be \"good enough\" instead of perfect.",
                    "Make one small decision before you have all the data.",
                    "With one person, tend to feelings before logic.",
                    "Turn one criticism into a specific suggestion.",
                    "Set a deadline for one task and deliver on time.",
                    "Actively appreciate a teammate's strength instead of finding faults.",
                    "Weekend review: where did \"act first, refine later\" actually work better this week?"
                ]
            },
            "sales": {
                "natural_close": {
                    "zh": "你最自然的成交方式是用专业、证据和透明的资料建立信任，让顾客在充分了解后放心决定。",
                    "en": "Your natural close builds trust with professionalism, evidence and transparent information, letting the customer decide confidently once fully informed."
                },
                "common_mistake": {
                    "zh": "你最容易犯的成交错误是给太多细节、把简单的事复杂化，或因追求完美方案而错过顾客当下想买的时机。",
                    "en": "Your most common closing mistake is over-explaining and over-complicating, or chasing the perfect solution and missing the moment the customer was ready to buy."
                }
            }
        }
    },
    "combo": {
        "DI": {
            "name": {
                "zh": "开拓者（DI）",
                "en": "The Trailblazer (DI)"
            },
            "positioning": {
                "zh": "既能果断推动结果，又能用热情带动人的行动派。",
                "en": "A doer who drives results decisively and rallies people with energy."
            },
            "s2_pattern": {
                "zh": "你以结果为先，但不是单打独斗——你会一边冲、一边把人带动起来。行动快、有魅力、敢开口，喜欢边推进边影响别人。",
                "en": "Results come first, but you don't go it alone — you charge ahead while pulling people with you. Fast, charismatic and vocal, you like to influence as you push forward."
            },
            "s3_strengths": {
                "zh": "果断加感染力：你能快速定方向，又能说服大家一起上，特别适合开局、破冰和攻坚。",
                "en": "Decisiveness plus charisma: you set direction fast and persuade people to move together — ideal for launches, ice-breaking and tough pushes."
            },
            "s4_blindspots": {
                "zh": "可能太急太满，忽略细节和别人的节奏；容易凭气势承诺，或在收尾和跟进上松懈。",
                "en": "You can be too fast and too much, overriding details and others' pace; you may promise on momentum and go slack on finishing and follow-up."
            },
            "s5_communication": {
                "zh": "直接又有热度，喜欢有重点也有互动的对话。给你结果和舞台，你最投入。",
                "en": "Direct and warm, you like conversations that are both pointed and interactive. Give you results and a stage and you're all in."
            },
            "s6_decision_buying": {
                "zh": "决定快、凭结果也凭感觉。买东西时看重「能不能赢、够不够爽」，但需要有人帮你把冲动落到细节。",
                "en": "You decide fast, on results and feel. When buying you weigh \"will this win, is it exciting,\" but need help grounding impulse into detail."
            },
            "s7_sales_strength": {
                "zh": "你能又快又有感染力地带顾客走到成交，面对 D 和 I 型顾客都吃得开。",
                "en": "You lead customers to the close fast and infectiously — strong with both D and I customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 C 型和 S 型顾客——他们要证据或安全感，会被你的速度与气势压得喘不过气。",
                "en": "You most easily lose C and S customers — they want proof or safety and can feel steamrolled by your speed and force."
            },
            "s9_how_to_reach_you": {
                "zh": "给你重点、认可和结果，让你有主导感也有互动；别拖沓、别泼冷水。",
                "en": "Give you the point, recognition and results, with a sense of control and interaction; don't drag or dampen the mood."
            },
            "s10_7day": {
                "zh": [
                    "每天完整收尾一件事再开新的。",
                    "对一位顾客，先问清顾虑再推进。",
                    "放慢一次对话，让对方主导五分钟。",
                    "把一个凭感觉的承诺，落成书面细节。",
                    "给 C\/S 型的人多一点证据或时间。",
                    "肯定一位默默做事的队友。",
                    "复盘：这周哪次「慢半拍」反而更稳？"
                ],
                "en": [
                    "Finish one thing fully before starting the next each day.",
                    "With one customer, surface concerns before pushing on.",
                    "Slow one conversation and let the other lead for five minutes.",
                    "Turn one gut promise into written detail.",
                    "Give C\/S people more proof or time.",
                    "Recognize a quietly hard-working teammate.",
                    "Review: where did \"half a beat slower\" prove steadier this week?"
                ]
            }
        },
        "DS": {
            "name": {
                "zh": "稳进推手（DS）",
                "en": "The Steady Driver (DS)"
            },
            "positioning": {
                "zh": "有推动力也有耐心，能拿结果又让人安心。",
                "en": "Driven yet patient — you get results while keeping people at ease."
            },
            "s2_pattern": {
                "zh": "你以结果为导向，但比典型 D 更沉稳、更顾及人。你会坚定推进，同时守住稳定和关系，是「不慌不忙把事做成」的类型。",
                "en": "Results-oriented, but steadier and more considerate than a typical D. You push firmly while protecting stability and relationships — the \"get it done without the drama\" type."
            },
            "s3_strengths": {
                "zh": "果断与可靠兼具：你能带领也能承接，既推动进度又不牺牲信任，是能扛长期责任的人。",
                "en": "Decisive and dependable: you lead and you carry, driving progress without sacrificing trust — someone who shoulders long-term responsibility."
            },
            "s4_blindspots": {
                "zh": "内心想快、表面求稳，可能压抑真实想法或积压压力；面对必须强硬的时刻，也可能犹豫。",
                "en": "Wanting speed but showing calm, you may suppress real views or bottle up stress; when firmness is required, you can hesitate."
            },
            "s5_communication": {
                "zh": "直接但温和，重点清楚也顾及感受。你喜欢踏实、可信的对话，不爱空谈。",
                "en": "Direct but gentle, clear on the point yet mindful of feelings. You like grounded, credible conversation over hot air."
            },
            "s6_decision_buying": {
                "zh": "决定比一般 D 稳，重视结果也重视保障。买东西要看得到成效，也要感到可靠、不被硬推。",
                "en": "You decide more steadily than a typical D, valuing both results and security. When buying you want visible payoff and a sense of reliability, without being hard-pushed."
            },
            "s7_sales_strength": {
                "zh": "你能果断带方向，又让顾客感到被尊重、不被逼迫，D 型和 S 型顾客都容易接受你。",
                "en": "You lead with direction yet leave customers feeling respected, not pressured — easy for both D and S customers to accept."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 I 型顾客——他们要热度和火花，会觉得你太实在、少了点情绪感染。",
                "en": "You most easily lose I customers — they want heat and spark and may find you too matter-of-fact."
            },
            "s9_how_to_reach_you": {
                "zh": "给你清楚的结果和可靠的保障，稳稳沟通、别硬推，也别拐弯抹角。",
                "en": "Give you clear results and solid assurances, communicate steadily — no hard push, no beating around the bush."
            },
            "s10_7day": {
                "zh": [
                    "每天说一次真实想法，不只求稳。",
                    "该强硬时，明确表达立场一次。",
                    "推进一件搁置的事，定下期限。",
                    "给顾客一个清楚的下一步。",
                    "面对冲突，直接而温和地处理一次。",
                    "为自己的目标争取一次资源。",
                    "复盘：这周哪次「果断一点」带来突破？"
                ],
                "en": [
                    "Say one real thought each day, not just the safe one.",
                    "When firmness is due, state your stance clearly once.",
                    "Move one stalled item forward with a deadline.",
                    "Give a customer one clear next step.",
                    "Handle one conflict directly yet gently.",
                    "Advocate once for a resource for your goal.",
                    "Review: where did \"a bit more decisive\" create a breakthrough this week?"
                ]
            }
        },
        "DC": {
            "name": {
                "zh": "决断规划者（DC）",
                "en": "The Strategist (DC)"
            },
            "positioning": {
                "zh": "既要结果，也要做对——果断与严谨并存。",
                "en": "Wants both results and rigor — decisive and precise at once."
            },
            "s2_pattern": {
                "zh": "你以目标为先，但不会盲冲——你要方向对、逻辑通、结果稳。行动果断，同时讲标准、重质量，是「快而不乱」的推进者。",
                "en": "Goal-first but never reckless — you want the direction right, the logic sound and the result solid. Decisive yet standards-minded, you're a \"fast but not sloppy\" driver."
            },
            "s3_strengths": {
                "zh": "果断加严谨：你能既快又准地拿下复杂任务，看得清目标也看得见风险。",
                "en": "Decisiveness plus rigor: you land complex tasks fast and accurately, seeing both the goal and the risks."
            },
            "s4_blindspots": {
                "zh": "可能对人对己都太严、太挑剔，急着要结果又不容出错，让人压力大；也可能因追求完美而对他人不够耐心。",
                "en": "You can be exacting and critical of self and others, demanding results yet zero errors — stressful for people; perfectionism can shorten your patience."
            },
            "s5_communication": {
                "zh": "直接、精准、讲逻辑，不喜欢废话和情绪化。给你重点加依据，最能说服你。",
                "en": "Direct, precise and logical, with no time for waffle or drama. The point plus the evidence persuades you best."
            },
            "s6_decision_buying": {
                "zh": "决定快但要有依据，重视结果、效率和正确性。买东西要看到成效也要看到证据，讨厌夸大和含糊。",
                "en": "You decide fast but on evidence, valuing results, efficiency and correctness. When buying you want both payoff and proof, and dislike hype and vagueness."
            },
            "s7_sales_strength": {
                "zh": "你专业又果断，能用事实带顾客快速走到决定，面对 D 和 C 型顾客特别有说服力。",
                "en": "Professional and decisive, you use facts to lead customers quickly to a decision — especially persuasive with D and C customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 I 型和 S 型顾客——他们要感觉、关系或安全感，会觉得你太冷、太紧、压力大。",
                "en": "You most easily lose I and S customers — they want feeling, relationship or safety, and may find you too cool, too tight, too intense."
            },
            "s9_how_to_reach_you": {
                "zh": "给你结果加证据、逻辑清楚、别夸大也别拖延；尊重你的判断和标准。",
                "en": "Give you results plus evidence, clear logic, no hype and no delay; respect your judgment and standards."
            },
            "s10_7day": {
                "zh": [
                    "每天让一件事「够好就交」，不苛求完美。",
                    "沟通时先照顾一次对方的感受。",
                    "把一个批评换成具体建议。",
                    "给团队多一点时间，不逼零失误。",
                    "对 I\/S 型的人，先聊人再谈事。",
                    "肯定一次进步，而不是只找问题。",
                    "复盘：这周哪次「宽一点」让关系更好？"
                ],
                "en": [
                    "Each day, let one thing ship at \"good enough.\"",
                    "Tend to someone's feelings first in one conversation.",
                    "Turn one criticism into a concrete suggestion.",
                    "Give the team more time; don't demand zero defects.",
                    "With I\/S people, connect as people before the task.",
                    "Acknowledge one improvement instead of only faults.",
                    "Review: where did \"easing up\" improve a relationship this week?"
                ]
            }
        },
        "ID": {
            "name": {
                "zh": "激励领袖（ID）",
                "en": "The Motivating Leader (ID)"
            },
            "positioning": {
                "zh": "用热情点燃人，也敢带头拿结果。",
                "en": "Ignites people with energy and steps up to drive results."
            },
            "s2_pattern": {
                "zh": "你热情、外向，同时有很强的推动力。你不只带气氛，也想带结果——喜欢激励一群人、然后一起冲向目标。",
                "en": "Warm and outgoing with a strong drive. You don't just lift the mood, you want the outcome — you love inspiring a group and charging at the goal together."
            },
            "s3_strengths": {
                "zh": "感染力加行动力：你能鼓舞人心、快速带动，是天生的号召者和推动者。",
                "en": "Charisma plus drive: you inspire and mobilize fast — a natural rallier and mover."
            },
            "s4_blindspots": {
                "zh": "可能话多、承诺快、太急于表现，忽略细节和跟进；情绪高时容易冲，把人推得太快。",
                "en": "You may talk a lot, promise fast and over-perform, skipping detail and follow-through; on a high you can push people too fast."
            },
            "s5_communication": {
                "zh": "热情又直接，喜欢有能量、有目标的对话。被认可、被看见时你最带劲。",
                "en": "Warm and direct, you like conversations with energy and a target. You're at your best when recognized and seen."
            },
            "s6_decision_buying": {
                "zh": "决定快、凭感觉也凭企图心。买东西看重愿景和「能不能让我更成功」，但需要有人帮你稳住细节。",
                "en": "You decide fast, on feel and ambition. When buying you weigh vision and \"will this make me more successful,\" but need help holding the details."
            },
            "s7_sales_strength": {
                "zh": "你能又热又快地打动顾客并推进成交，面对 I 和 D 型顾客游刃有余。",
                "en": "You move customers warmly and fast toward the close — smooth with I and D customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 C 型和 S 型顾客——他们要证据或安全感，会被你的热度和速度弄得没底。",
                "en": "You most easily lose C and S customers — they want proof or safety and can feel unsteadied by your heat and speed."
            },
            "s9_how_to_reach_you": {
                "zh": "给你认可、舞台和清楚的目标，保持正向又高效；别泼冷水也别拖泥带水。",
                "en": "Give you recognition, a stage and a clear target, positive and efficient; don't dampen the mood or drag."
            },
            "s10_7day": {
                "zh": [
                    "每天把一件事做到收尾。",
                    "对一位顾客，先听完顾虑再推进。",
                    "把一个承诺写下并定期限。",
                    "给 C\/S 型的人多一点资料或时间。",
                    "开口前先想三秒，少一点冲。",
                    "肯定一位不抢镜的队友。",
                    "复盘：这周哪次「稳一点」更有成效？"
                ],
                "en": [
                    "Finish one thing to completion each day.",
                    "With one customer, hear the concern out before pushing.",
                    "Write one promise down with a deadline.",
                    "Give C\/S people more data or time.",
                    "Think three seconds before you speak; less charge.",
                    "Recognize a teammate who doesn't grab the spotlight.",
                    "Review: where did \"steadier\" pay off this week?"
                ]
            }
        },
        "IS": {
            "name": {
                "zh": "亲和联结者（IS）",
                "en": "The Connector (IS)"
            },
            "positioning": {
                "zh": "温暖又可靠，让人喜欢也让人安心。",
                "en": "Warm and dependable — people like you and feel safe with you."
            },
            "s2_pattern": {
                "zh": "你热情但不张扬，既会连接人也会照顾人。你重视关系、氛围和信任，是团队里的黏合剂和顾客的贴心人。",
                "en": "Warm but unshowy, you connect and you care. You value relationship, mood and trust — the team's glue and the customer's confidant."
            },
            "s3_strengths": {
                "zh": "亲和加稳定：你既能带动气氛，又能持续支持，让人愿意亲近也愿意信任。",
                "en": "Warmth plus steadiness: you lift the mood and give lasting support, so people draw close and trust you."
            },
            "s4_blindspots": {
                "zh": "可能太在意别人的看法、太怕冲突，不敢开口要成交或表达不同意见；也容易把自己放到最后。",
                "en": "You may care too much what others think and fear conflict, holding back from asking for the sale or voicing disagreement; you often put yourself last."
            },
            "s5_communication": {
                "zh": "温暖、真诚、体贴，喜欢没有压力的互动。有信任时你会很开放。",
                "en": "Warm, sincere and considerate, you like pressure-free interaction. With trust, you open up fully."
            },
            "s6_decision_buying": {
                "zh": "决定偏慢、重感觉也重安全，看重信任和关系。买东西怕被逼，需要被理解和陪伴。",
                "en": "You decide slowly, on feeling and safety, valuing trust and relationship. When buying you fear pressure and need to feel understood and accompanied."
            },
            "s7_sales_strength": {
                "zh": "你靠真诚和温暖赢得长期信任，顾客愿意回头也愿意介绍朋友；面对 I 和 S 型顾客最自然。",
                "en": "You win long-term trust with sincerity and warmth — customers return and refer; most natural with I and S customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 D 型顾客——他们要效率和果断，会嫌你太软、迟迟不收尾；对 C 型的证据需求，你也可能招架不住。",
                "en": "You most easily lose D customers — they want efficiency and decisiveness and may find you too soft and slow to close; you may also struggle with C customers' demand for proof."
            },
            "s9_how_to_reach_you": {
                "zh": "给你真诚、时间和安全感，友好而不逼迫；帮你把好感转成具体的决定。",
                "en": "Give you sincerity, time and safety, friendly and unpressured; help turn your goodwill into a concrete decision."
            },
            "s10_7day": {
                "zh": [
                    "每天表达一次自己的真实想法。",
                    "向一位顾客明确提出成交，哪怕会被拒。",
                    "面对分歧，温和但清楚地说出立场。",
                    "把一件为自己的事排到前面。",
                    "对 D 型的人，讲重点、给结果。",
                    "设一个界限并守住它。",
                    "复盘：这周哪次「主动开口」有好结果？"
                ],
                "en": [
                    "Voice one real thought each day.",
                    "Clearly ask one customer for the sale, even at risk of a no.",
                    "In a disagreement, state your stance gently but clearly.",
                    "Put one thing for yourself first.",
                    "With D people, lead with the point and the result.",
                    "Set one boundary and hold it.",
                    "Review: where did \"speaking up\" pay off this week?"
                ]
            }
        },
        "IC": {
            "name": {
                "zh": "严谨表达者（IC）",
                "en": "The Advisor (IC)"
            },
            "positioning": {
                "zh": "会沟通也讲依据——有温度的专业感。",
                "en": "Communicates well and backs it with substance — warmth with credibility."
            },
            "s2_pattern": {
                "zh": "你外向、会表达，同时重视准确和逻辑。你既能打动人，也能讲清道理，是「说得动人、也说得有理」的类型。",
                "en": "Outgoing and expressive, yet accuracy- and logic-minded. You move people and make sense — the \"persuasive and well-founded\" type."
            },
            "s3_strengths": {
                "zh": "表达加逻辑：你能把复杂的事讲得又清楚又动听，是很好的顾问、讲师和沟通者。",
                "en": "Expression plus logic: you make complex things clear and compelling — a strong advisor, trainer and communicator."
            },
            "s4_blindspots": {
                "zh": "内在的热情与严谨可能拉扯：有时想感染人、有时又想较真，容易在「热络」与「挑剔」之间摇摆，或想太多而慢下来。",
                "en": "Your warmth and rigor can pull against each other — sometimes wanting to inspire, sometimes to nitpick — so you swing between warm and exacting, or overthink and slow down."
            },
            "s5_communication": {
                "zh": "既要有温度也要有条理，喜欢有内容的交流。给你逻辑和认可，你都受用。",
                "en": "You want both warmth and structure, and like conversations with substance. Logic and recognition both land with you."
            },
            "s6_decision_buying": {
                "zh": "决定时感性与理性并用，先被吸引、再要证据。买东西要既心动也放心，讨厌空洞承诺。",
                "en": "You decide with heart and head — first drawn in, then wanting proof. When buying you need both to be excited and reassured, and dislike empty promises."
            },
            "s7_sales_strength": {
                "zh": "你能用有说服力又有依据的方式打动顾客，面对 I 和 C 型顾客都能对上频率。",
                "en": "You persuade with warmth and evidence — on the same wavelength as both I and C customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 D 型顾客——他们要快、要结果，会嫌你讲太多、太细；对 S 型的慢节奏，你也可能少了点耐心。",
                "en": "You most easily lose D customers — they want speed and results and may find you too wordy and detailed; you may also run short on patience with S customers' slower pace."
            },
            "s9_how_to_reach_you": {
                "zh": "给你有内容也有温度的沟通、逻辑清楚、态度友好；别空谈也别冷冰冰。",
                "en": "Give you communication with both substance and warmth, clear logic and a friendly tone; no empty talk, no coldness."
            },
            "s10_7day": {
                "zh": [
                    "对 D 型的人，一句话讲清重点。",
                    "每天做一个「够好就好」的决定。",
                    "把一次纠结，限时十分钟内定案。",
                    "先认可再指出问题。",
                    "给 S 型的人多一点耐心和时间。",
                    "把一个想法落成具体行动。",
                    "复盘：这周哪次「简单直接」更有效？"
                ],
                "en": [
                    "With D people, land the point in one sentence.",
                    "Make one \"good enough\" decision each day.",
                    "Cap one bout of second-guessing at ten minutes.",
                    "Acknowledge before you point out the problem.",
                    "Give S people more patience and time.",
                    "Turn one idea into a concrete action.",
                    "Review: where did \"simple and direct\" work better this week?"
                ]
            }
        },
        "SD": {
            "name": {
                "zh": "稳中带劲（SD）",
                "en": "The Grounded Driver (SD)"
            },
            "positioning": {
                "zh": "温和可靠，却有默默推进的力量。",
                "en": "Gentle and dependable, with a quiet force that pushes things through."
            },
            "s2_pattern": {
                "zh": "你以稳定和关系为底色，但比典型 S 更有目标感和推动力。你不喧哗，却能坚定地把事做成，是「外柔内韧」的类型。",
                "en": "Steadiness and relationship are your base, but you have more goal-focus and drive than a typical S. Quiet yet firm, you get things done — soft outside, tough inside."
            },
            "s3_strengths": {
                "zh": "可靠加行动：你既让人安心，又能承接责任、推进到底，是团队里靠得住的执行者。",
                "en": "Dependability plus drive: you reassure people and carry responsibility through — a trustworthy executor."
            },
            "s4_blindspots": {
                "zh": "想推进又怕破坏和谐，可能压抑主张、犹豫开口；真正强硬的时刻，容易退一步。",
                "en": "Wanting to push yet fearing you'll disrupt harmony, you may suppress your view and hesitate to speak; in truly firm moments you tend to step back."
            },
            "s5_communication": {
                "zh": "温和但有分量，真诚也有立场。你喜欢踏实、彼此尊重的对话。",
                "en": "Gentle but weighty, sincere with a stance. You like grounded, mutually respectful conversation."
            },
            "s6_decision_buying": {
                "zh": "决定稳中带主见，重信任也看成效。买东西需要安全感，但比一般 S 更快认定方向。",
                "en": "You decide steadily but with a view, valuing trust and payoff. When buying you need safety, but settle on a direction faster than a typical S."
            },
            "s7_sales_strength": {
                "zh": "你能在不给压力的前提下稳稳带顾客往前，S 和 D 型顾客都容易信任你。",
                "en": "You move customers forward steadily without pressure — both S and D customers trust you easily."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 I 型顾客——他们要热度和火花，会觉得你太沉；也可能因不够主动而错过该收尾的时机。",
                "en": "You most easily lose I customers — they want heat and spark and may find you too subdued; you can also miss the moment to close by not being proactive enough."
            },
            "s9_how_to_reach_you": {
                "zh": "给你信任、清楚的方向和稳定的节奏，尊重你的步调；别逼迫也别忽冷忽热。",
                "en": "Give you trust, a clear direction and a steady pace, respecting your rhythm; no pressure and no hot-and-cold."
            },
            "s10_7day": {
                "zh": [
                    "每天主动表达一次主张。",
                    "向一位顾客明确提出下一步。",
                    "该坚持时，守住立场一次。",
                    "把一件拖着的事推进到底。",
                    "对 I 型的人，多给一点热情回应。",
                    "为自己的目标开口争取一次。",
                    "复盘：这周哪次「主动一点」更好？"
                ],
                "en": [
                    "Assert one view proactively each day.",
                    "Propose a clear next step to one customer.",
                    "When it matters, hold your ground once.",
                    "Push one lingering task to completion.",
                    "Give I people a warmer, more animated response.",
                    "Ask once for what your goal needs.",
                    "Review: where did \"more proactive\" work better this week?"
                ]
            }
        },
        "SI": {
            "name": {
                "zh": "温暖协作者（SI）",
                "en": "The Supporter (SI)"
            },
            "positioning": {
                "zh": "稳定又亲和，让人既放心又愉快。",
                "en": "Steady and warm — people feel both safe and at ease with you."
            },
            "s2_pattern": {
                "zh": "你以稳定为主，又带着温暖和人情味。你重视和谐、乐于助人，喜欢在融洽的关系里合作，是团队的暖心后盾。",
                "en": "Stability leads, softened by warmth and heart. You value harmony, love to help, and thrive in easy relationships — the team's warm backbone."
            },
            "s3_strengths": {
                "zh": "耐心加亲和：你能长期稳定地支持人，也能温柔地凝聚团队，让人愿意靠近。",
                "en": "Patience plus warmth: you support people steadily and gather the team gently, so others want to be near you."
            },
            "s4_blindspots": {
                "zh": "非常怕冲突、太在意关系，可能不敢说不、不敢要成交，把自己的需要放到最后。",
                "en": "Very conflict-averse and relationship-focused, you may struggle to say no or ask for the sale, putting your own needs last."
            },
            "s5_communication": {
                "zh": "温柔、体贴、真诚，喜欢和气没有压力的交流。你需要感到安全才会说真话。",
                "en": "Gentle, considerate and sincere, you like kind, pressure-free exchanges. You need to feel safe to speak your truth."
            },
            "s6_decision_buying": {
                "zh": "决定慢、重感觉和信任，最怕被催。买东西需要被理解、被陪伴，一旦信任就很忠诚。",
                "en": "You decide slowly, on feeling and trust, and hate being rushed. When buying you need to feel understood and accompanied — and once you trust, you're loyal."
            },
            "s7_sales_strength": {
                "zh": "你靠真诚和温暖建立深度信任，顾客愿意长期跟着你；面对 S 和 I 型顾客最自在。",
                "en": "You build deep trust with sincerity and warmth — customers stay with you long-term; most at ease with S and I customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 D 型和 C 型顾客——他们要效率或证据，会嫌你太慢、太软或不够扎实。",
                "en": "You most easily lose D and C customers — they want efficiency or proof and may find you too slow, too soft or not rigorous enough."
            },
            "s9_how_to_reach_you": {
                "zh": "给你真诚、耐心和安全感，友好地陪你慢慢来；帮你把信任转成清楚的决定。",
                "en": "Give you sincerity, patience and safety, walking with you gently; help turn your trust into a clear decision."
            },
            "s10_7day": {
                "zh": [
                    "每天练习说一次「不」。",
                    "向一位顾客主动提出成交。",
                    "把一个真实感受清楚说出来。",
                    "对 D\/C 型的人，讲重点也给依据。",
                    "为自己争取一次，不先让别人。",
                    "面对小冲突，直接而温和地处理。",
                    "复盘：这周哪次「说出真话」带来好结果？"
                ],
                "en": [
                    "Practice saying \"no\" once each day.",
                    "Proactively ask one customer for the sale.",
                    "State one real feeling clearly.",
                    "With D\/C people, give the point and the evidence.",
                    "Advocate once for yourself before yielding.",
                    "Handle one small conflict directly yet gently.",
                    "Review: where did \"telling the truth\" help this week?"
                ]
            }
        },
        "SC": {
            "name": {
                "zh": "可靠专家（SC）",
                "en": "The Coordinator (SC)"
            },
            "positioning": {
                "zh": "稳定又细致，把事情做稳也做对。",
                "en": "Steady and meticulous — keeps things stable and gets them right."
            },
            "s2_pattern": {
                "zh": "你以稳定为底，又非常注重准确和流程。你踏实、可靠、有条理，喜欢在清楚的规则里稳稳把事做好，几乎不会出错。",
                "en": "Stability underneath, with a strong eye for accuracy and process. Grounded, reliable and organized, you do things well within clear rules — and rarely slip."
            },
            "s3_strengths": {
                "zh": "耐心加严谨：你能长期稳定地把质量守住，是最让人放心的执行者和守门人。",
                "en": "Patience plus rigor: you hold quality steadily over the long run — the most reassuring executor and gatekeeper."
            },
            "s4_blindspots": {
                "zh": "既怕冲突又怕出错，可能过度谨慎、抗拒改变、决策慢；也容易憋着不说、把压力往肚里吞。",
                "en": "Fearing both conflict and error, you can be over-cautious, change-averse and slow to decide; you may hold back and swallow stress."
            },
            "s5_communication": {
                "zh": "温和、准确、有条理，喜欢清楚、可靠、没有压力的沟通。你不爱夸张也不爱突变。",
                "en": "Gentle, accurate and orderly, you like communication that's clear, reliable and pressure-free. No hype, no sudden changes."
            },
            "s6_decision_buying": {
                "zh": "决定慢而稳，既要安全也要证据。买东西要研究清楚、感到可靠，最怕被催或被夸大。",
                "en": "You decide slowly and steadily, wanting both safety and proof. When buying you research thoroughly and want reliability, and hate being rushed or over-sold."
            },
            "s7_sales_strength": {
                "zh": "你专业、稳重、不夸大，能用可靠和细致建立深度信任；面对 S 和 C 型顾客最能让人安心。",
                "en": "Professional, steady and never over-hyped, you build deep trust through reliability and care — most reassuring to S and C customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 D 型和 I 型顾客——他们要速度或热度，会嫌你太慢、太拘谨、少了点灵活和情绪。",
                "en": "You most easily lose D and I customers — they want speed or heat and may find you too slow and reserved, short on flexibility and feeling."
            },
            "s9_how_to_reach_you": {
                "zh": "给你可靠的资料、清楚的流程和充足的时间，稳稳沟通、别催别夸大。",
                "en": "Give you reliable information, a clear process and enough time, communicating steadily — no rush, no hype."
            },
            "s10_7day": {
                "zh": [
                    "每天让一件事「够好就好」。",
                    "在收齐资料前做一个小决定。",
                    "对一个人先照顾感受再讲规则。",
                    "向一位顾客主动提出下一步。",
                    "面对一个小改变，先试再评。",
                    "把一件憋着的事说出来。",
                    "复盘：这周哪次「快一点、松一点」更好？"
                ],
                "en": [
                    "Let one thing be \"good enough\" each day.",
                    "Make one small decision before all the data is in.",
                    "Tend to feelings before rules with one person.",
                    "Proactively propose a next step to one customer.",
                    "With one small change, try before you judge.",
                    "Say out loud one thing you've held in.",
                    "Review: where did \"faster and looser\" help this week?"
                ]
            }
        },
        "CD": {
            "name": {
                "zh": "精准推动者（CD）",
                "en": "The Driving Perfecter (CD)"
            },
            "positioning": {
                "zh": "追求正确，也追求结果——严谨中有决断。",
                "en": "Chases correctness and results alike — rigor with resolve."
            },
            "s2_pattern": {
                "zh": "你以准确和标准为先，但比典型 C 更有目标感和推动力。你要把事做对，也要把事做成，是「高标准且能落地」的类型。",
                "en": "Accuracy and standards come first, but you have more goal-focus and drive than a typical C. You want it right and done — the \"high-standard and gets it shipped\" type."
            },
            "s3_strengths": {
                "zh": "严谨加果断：你能把复杂的事想清楚再高效执行，既守质量又拿结果。",
                "en": "Rigor plus decisiveness: you think complex things through, then execute efficiently — holding quality while landing results."
            },
            "s4_blindspots": {
                "zh": "对人对己都可能太严、太较真，急着要对的结果，让人压力大；也可能因坚持标准而显得固执或不近人情。",
                "en": "You can be exacting and hard on self and others, pressing for the right result — stressful for people; sticking to standards can read as stubborn or impersonal."
            },
            "s5_communication": {
                "zh": "直接、精准、讲逻辑，重点和依据缺一不可。你不喜欢含糊、情绪化或没准备的沟通。",
                "en": "Direct, precise and logical — you want both the point and the proof. You dislike vagueness, drama or unprepared exchanges."
            },
            "s6_decision_buying": {
                "zh": "决定要有依据也要有效率，重视正确、质量和回报。买东西要证据充分、逻辑成立，讨厌被夸大或被催。",
                "en": "You decide on evidence and efficiency, valuing correctness, quality and return. When buying you want solid proof and sound logic, and hate hype or being rushed."
            },
            "s7_sales_strength": {
                "zh": "你专业、可信又果断，能用事实和逻辑高效说服；面对 C 和 D 型顾客特别有力。",
                "en": "Professional, credible and decisive, you persuade efficiently with facts and logic — especially strong with C and D customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 I 型和 S 型顾客——他们要感觉、关系或安全感，会觉得你太冷、太挑、压力大。",
                "en": "You most easily lose I and S customers — they want feeling, relationship or safety, and may find you too cool, too critical, too intense."
            },
            "s9_how_to_reach_you": {
                "zh": "给你充分证据、清楚逻辑和高效流程，尊重你的标准；别夸大、别含糊、别拖延。",
                "en": "Give you solid evidence, clear logic and an efficient process, respecting your standards; no hype, no vagueness, no delay."
            },
            "s10_7day": {
                "zh": [
                    "每天让一件事「够好就交」。",
                    "先照顾一次对方的感受再讲道理。",
                    "把一个批评换成具体建议。",
                    "对 I\/S 型的人，先聊人再谈事。",
                    "给团队多一点空间，不逼零失误。",
                    "肯定一次进步，而不是只找问题。",
                    "复盘：这周哪次「宽一点」更有成效？"
                ],
                "en": [
                    "Let one thing ship at \"good enough\" each day.",
                    "Tend to feelings once before making the case.",
                    "Turn one criticism into a concrete suggestion.",
                    "With I\/S people, connect first, task second.",
                    "Give the team more room; don't demand zero defects.",
                    "Acknowledge one improvement, not just faults.",
                    "Review: where did \"easing up\" work better this week?"
                ]
            }
        },
        "CI": {
            "name": {
                "zh": "理性沟通者（CI）",
                "en": "The Analytical Communicator (CI)"
            },
            "positioning": {
                "zh": "讲逻辑也会表达——冷静中带着亲和。",
                "en": "Logical yet expressive — level-headed with a personable touch."
            },
            "s2_pattern": {
                "zh": "你以理性和准确为主，又比典型 C 更善于表达和连接人。你能把严谨的内容讲得让人听得懂、愿意听，是「有逻辑也有温度」的沟通者。",
                "en": "Logic and accuracy lead, but you're more expressive and connecting than a typical C. You make rigorous content understandable and engaging — a \"logical yet warm\" communicator."
            },
            "s3_strengths": {
                "zh": "逻辑加表达：你能把复杂的道理讲清楚、讲得动人，是很好的分析型顾问和讲解者。",
                "en": "Logic plus expression: you explain complex ideas clearly and engagingly — a strong analytical advisor and explainer."
            },
            "s4_blindspots": {
                "zh": "理性与想被认可可能拉扯：有时较真、有时想讨好，容易在「挑剔」和「迎合」之间摇摆，或分析过头而犹豫。",
                "en": "Logic and a wish for approval can pull against each other — sometimes exacting, sometimes eager to please — so you swing between critical and accommodating, or over-analyze and stall."
            },
            "s5_communication": {
                "zh": "既讲条理也带温度，喜欢有内容又不失亲和的交流。逻辑和认可对你都重要。",
                "en": "Structured yet warm, you like exchanges with substance and rapport. Both logic and recognition matter to you."
            },
            "s6_decision_buying": {
                "zh": "决定重证据，也受关系影响。买东西既要资料充分，也希望被真诚对待，讨厌夸大也讨厌冷漠。",
                "en": "You decide on evidence but are swayed by relationship. When buying you want solid information and sincere treatment, disliking both hype and coldness."
            },
            "s7_sales_strength": {
                "zh": "你能用清晰的逻辑加友好的态度赢得信任；面对 C 和 I 型顾客都能对上频率。",
                "en": "You win trust with clear logic and a friendly manner — in sync with both C and I customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 D 型顾客——他们要快、要结果，会嫌你分析太多、太慢；对 S 型的慢节奏，你也可能少一点耐心。",
                "en": "You most easily lose D customers — they want speed and results and may find you over-analytical and slow; you may also run short on patience with S customers."
            },
            "s9_how_to_reach_you": {
                "zh": "给你清楚的逻辑和真诚友好的态度，有依据也有温度；别夸大也别冷冰冰。",
                "en": "Give you clear logic and a sincere, friendly manner — evidence with warmth; no hype and no coldness."
            },
            "s10_7day": {
                "zh": [
                    "对 D 型的人，一句话讲清结论。",
                    "每天做一个「资料够了就定」的决定。",
                    "把一次纠结限时收尾。",
                    "先认可再提出改进。",
                    "给 S 型的人多一点耐心。",
                    "把一个分析落成具体建议。",
                    "复盘：这周哪次「果断一点」更好？"
                ],
                "en": [
                    "With D people, land the conclusion in one sentence.",
                    "Make one \"enough data — decide\" call each day.",
                    "Cap one spell of second-guessing with a time limit.",
                    "Acknowledge before proposing an improvement.",
                    "Give S people more patience.",
                    "Turn one analysis into a concrete recommendation.",
                    "Review: where did \"more decisive\" work better this week?"
                ]
            }
        },
        "CS": {
            "name": {
                "zh": "稳健专家（CS）",
                "en": "The Specialist (CS)"
            },
            "positioning": {
                "zh": "专业又有耐心，把事情做对也做稳。",
                "en": "Expert and patient — gets it right and keeps it steady."
            },
            "s2_pattern": {
                "zh": "你以准确和标准为先，又带着稳定和耐心。你严谨、可靠、不急躁，喜欢在有条理、有把握的状态下把事做到位，是深耕专业的类型。",
                "en": "Accuracy and standards first, carried with stability and patience. Rigorous, reliable and unhurried, you like doing things properly with structure and certainty — the deep-expertise type."
            },
            "s3_strengths": {
                "zh": "严谨加稳定：你能长期把质量和细节守到位，在专业领域让人完全信赖。",
                "en": "Rigor plus steadiness: you hold quality and detail over the long run — completely trusted in your field of expertise."
            },
            "s4_blindspots": {
                "zh": "既追求完美又怕冲突，可能过度谨慎、决策很慢、抗拒改变；也容易把不满憋着不说。",
                "en": "Chasing perfection while fearing conflict, you can be over-cautious, very slow to decide and change-averse; you may keep dissatisfaction to yourself."
            },
            "s5_communication": {
                "zh": "温和、准确、有条理，喜欢可靠、清楚、没有压力的沟通，不爱夸张和突变。",
                "en": "Gentle, accurate and orderly, you like reliable, clear, pressure-free communication, and dislike hype and abrupt change."
            },
            "s6_decision_buying": {
                "zh": "决定慢而稳，既要证据也要安全。买东西要研究透、感到可靠，最怕被催或被夸大承诺。",
                "en": "You decide slowly and steadily, wanting both proof and safety. When buying you research thoroughly and want reliability, fearing pressure or overpromising most."
            },
            "s7_sales_strength": {
                "zh": "你专业、稳重、可信，能用扎实和细致建立深度信任；面对 C 和 S 型顾客最让人安心。",
                "en": "Professional, steady and credible, you build deep trust through substance and care — most reassuring to C and S customers."
            },
            "s8_lose_customer": {
                "zh": "最容易流失 D 型和 I 型顾客——他们要速度或热度，会嫌你太慢、太拘谨、少了点灵活和情绪。",
                "en": "You most easily lose D and I customers — they want speed or heat and may find you too slow and reserved, short on flexibility and feeling."
            },
            "s9_how_to_reach_you": {
                "zh": "给你可靠的资料、清楚的流程和充足时间，稳稳沟通、别催、别夸大。",
                "en": "Give you reliable information, a clear process and enough time, communicating steadily — no rush, no hype."
            },
            "s10_7day": {
                "zh": [
                    "每天让一件事「够好就好」。",
                    "在资料收齐前做一个小决定。",
                    "对一个人先照顾感受再讲标准。",
                    "向一位顾客主动提出下一步。",
                    "面对小改变，先试再评估。",
                    "把憋着的一件事说出来。",
                    "复盘：这周哪次「快一点、松一点」更好？"
                ],
                "en": [
                    "Let one thing be \"good enough\" each day.",
                    "Make one small decision before all the data is in.",
                    "Tend to feelings before standards with one person.",
                    "Proactively propose a next step to one customer.",
                    "With a small change, try before evaluating.",
                    "Say out loud one thing you've held in.",
                    "Review: where did \"faster and looser\" help this week?"
                ]
            }
        },
        "ADAPTIVE": {
            "name": {
                "zh": "四维切换者（Adaptive）",
                "en": "The Adaptive Style"
            },
            "positioning": {
                "zh": "四种风格都在你手上，你会随人、随场景灵活切换。",
                "en": "All four styles are within reach — you flex by person and situation."
            },
            "s2_pattern": {
                "zh": "你的 D、I、S、C 分数相当接近，代表你没有单一主导风格，而是能因人、因事灵活调整。你会看场合决定要果断、要热情、要稳住还是要严谨。这份弹性是难得的优势——你能和很多类型的人自然相处。",
                "en": "Your D, I, S and C scores are close, meaning you don't lean on one dominant style but flex by person and situation. You read the moment and choose to be decisive, warm, steady or precise. This flexibility is a rare strength — you connect naturally with many types of people."
            },
            "s3_strengths": {
                "zh": "适应力强、视角全面：你能理解不同风格的人，在团队里常常是很好的协调者和桥梁，能在不同立场之间找到平衡。",
                "en": "Highly adaptable and well-rounded: you understand different styles and often serve as a strong coordinator and bridge, finding balance between differing positions."
            },
            "s4_blindspots": {
                "zh": "灵活的另一面是可能立场不够鲜明、决策时纠结，或让人摸不清你真正的偏好；有时会因为顾及各方而难以坚持自己。",
                "en": "The flip side of flexibility can be a less distinct stance, decision-making that gets stuck, or leaving others unsure of your real preference; accommodating everyone can make it hard to hold your own line."
            },
            "s5_communication": {
                "zh": "你能配合对方的沟通方式——对 D 直接、对 I 热情、对 S 温和、对 C 讲逻辑。关键是也别忘了表达你自己真正的想法。",
                "en": "You can match how others communicate — direct with D, warm with I, gentle with S, logical with C. The key is to remember to voice your own real view too."
            },
            "s6_decision_buying": {
                "zh": "你做决定会综合结果、感觉、安全和证据多方面考量，比较全面，但也可能因为想得太周全而拖延。买东西时你能理解各种卖法，反而需要自己先想清楚要什么。",
                "en": "You weigh results, feeling, safety and evidence together — thorough, but you may stall from over-considering. When buying you see through every sales approach, so the task is to get clear on what you actually want."
            },
            "s7_sales_strength": {
                "zh": "你最大的销售优势就是能读懂并配合不同类型的顾客——对谁都能调到对的频率。这让你几乎能应对任何顾客，前提是你要有意识地切换。",
                "en": "Your greatest sales strength is reading and matching different customer types — you can tune to the right frequency for anyone. That lets you handle almost any customer, as long as you switch consciously."
            },
            "s8_lose_customer": {
                "zh": "你没有特别容易流失的单一类型，但风险在于：如果切换得不够到位、立场不够清楚，任何类型的顾客都可能觉得你「不够专精」或「看不清你的主张」。",
                "en": "You have no single type you especially lose, but the risk is this: if your switching isn't sharp or your stance isn't clear, any customer may feel you're \"not specialized enough\" or \"hard to read.\""
            },
            "s9_how_to_reach_you": {
                "zh": "和你沟通其实很容易，因为你会配合对方；但对方若能直接问你真正的偏好、给你清楚的选项，会帮你更快作决定。",
                "en": "Communicating with you is easy because you adapt; but if others ask directly for your real preference and give you clear options, it helps you decide faster."
            },
            "s10_7day": {
                "zh": [
                    "每天明确表达一次自己的真实偏好。",
                    "面对一个决定，限时定案，别过度权衡。",
                    "刻意练习一次「果断」——快速拍板一件小事。",
                    "在一次对话里，清楚说出你的立场。",
                    "观察自己今天切换了哪几种风格。",
                    "对一位顾客，先判断类型再调整方式。",
                    "复盘：这周哪次「亮明立场」比「面面俱到」更有效？"
                ],
                "en": [
                    "Express one real preference clearly each day.",
                    "On one decision, set a time limit and don't over-weigh.",
                    "Deliberately practice decisiveness — settle one small thing fast.",
                    "In one conversation, state your stance clearly.",
                    "Notice which styles you switched between today.",
                    "With one customer, read the type first, then adapt.",
                    "Review: where did \"taking a clear stand\" beat \"covering all bases\" this week?"
                ]
            }
        }
    }
};
