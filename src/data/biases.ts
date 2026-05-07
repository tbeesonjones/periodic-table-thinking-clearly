import type { CategoryId } from './categories';

export interface Bias {
  id: string;
  name: string;
  chapter: number;
  category: CategoryId;
  summary: string;
  examples: string[];
  research: string;
  defense: string;
  relatedBiasIds: string[];
  deepDive?: {
    title: string;
    content: string;
  };
}

export const biases: Bias[] = [
  {
    id: 'survivorship-bias',
    name: 'Survivorship Bias',
    chapter: 1,
    category: 'causal-reasoning',
    summary:
      'Focus only on successes while ignoring failures, leading to overestimation of success likelihood.',
    examples: [
      'We read about successful entrepreneurs and believe starting a business is easy, ignoring the thousands who failed.',
      'Music labels point to bestselling artists as proof their talent-scouting works, overlooking the many signed artists who flopped.',
      'Self-help books written by billionaires suggest their habits guarantee success, but we never hear from those who followed the same habits and failed.',
    ],
    research:
      'Abraham Wald demonstrated survivorship bias during WWII by recommending armor on bomber areas that returning planes did NOT show damage, reasoning that planes hit in those areas never returned.',
    defense:
      'Whenever you see a pattern of success, actively seek out the failures and dropouts. Visit the graveyard of failed projects before drawing conclusions.',
    relatedBiasIds: [
      'base-rate-neglect',
      'self-selection-bias',
      'cherry-picking',
      'story-bias',
    ],
  },
  {
    id: 'swimmers-body-illusion',
    name: "Swimmer's Body Illusion",
    chapter: 2,
    category: 'causal-reasoning',
    summary: 'Confusing selection factors with results.',
    examples: [
      'We assume swimming gives you a great body, when in reality people with naturally athletic bodies are drawn to competitive swimming.',
      'Harvard graduates earn high salaries not necessarily because of Harvard, but because Harvard selects high-performers.',
      'Models in cosmetics ads make us think the product creates beauty, but the models were already beautiful before using the product.',
    ],
    research:
      'This is related to selection bias research in epidemiology and social science. The concept highlights the difference between selection effects and treatment effects.',
    defense:
      'Ask yourself: does the activity produce the outcome, or does a pre-existing trait attract certain people to the activity? Distinguish selection criteria from results.',
    relatedBiasIds: [
      'false-causality',
      'halo-effect',
      'survivorship-bias',
    ],
  },
  {
    id: 'clustering-illusion',
    name: 'Clustering Illusion',
    chapter: 3,
    category: 'statistical',
    summary: 'Perceiving patterns where none exist in random data.',
    examples: [
      'A basketball player hits three shots in a row and commentators declare a "hot hand," when the sequence is statistically expected.',
      'People see faces in clouds or on toast and assign meaning to random formations.',
      'Investors detect "trends" in stock price charts that are indistinguishable from random walks.',
    ],
    research:
      'Thomas Gilovich, Robert Vallone, and Amos Tversky debunked the "hot hand" fallacy in their 1985 study of basketball shooting streaks.',
    defense:
      'Before declaring a pattern, demand a large enough sample size and statistical significance. Remember that randomness often looks lumpy, not smooth.',
    relatedBiasIds: [
      'gamblers-fallacy',
      'false-causality',
      'coincidence',
      'law-of-small-numbers',
    ],
  },
  {
    id: 'social-proof',
    name: 'Social Proof',
    chapter: 4,
    category: 'social-group',
    summary: 'Believing behavior is correct when others perform it.',
    examples: [
      'Laugh tracks on sitcoms make jokes seem funnier because we hear others laughing.',
      'Restaurants with long lines attract more customers simply because the line signals quality.',
      'Online reviews and star ratings heavily influence purchasing decisions even from strangers.',
    ],
    research:
      'Robert Cialdini extensively documented social proof in "Influence" (1984). Solomon Asch\'s conformity experiments showed people would give obviously wrong answers to match a group.',
    defense:
      'Pause and evaluate whether you are making a decision based on the merits or simply following the crowd. Ask: would I still do this if nobody else were doing it?',
    relatedBiasIds: [
      'groupthink',
      'authority-bias',
      'liking-bias',
      'in-group-out-group-bias',
    ],
  },
  {
    id: 'sunk-cost-fallacy',
    name: 'Sunk Cost Fallacy',
    chapter: 5,
    category: 'decision-making',
    summary:
      'Considering past investments when making future decisions.',
    examples: [
      'You continue watching a terrible movie because you already paid for the ticket.',
      'A company pours more money into a failing project because millions have already been spent.',
      'You stay in a bad relationship because of the years already invested.',
    ],
    research:
      'Hal Arkes and Catherine Blumer demonstrated in 1985 that people who paid more for theater tickets attended more shows regardless of enjoyment. Richard Thaler coined "mental accounting" to explain why sunk costs feel relevant.',
    defense:
      'Focus only on future costs and benefits. Ask: "If I were starting fresh today, would I invest in this?" Ignore what you have already spent.',
    relatedBiasIds: [
      'loss-aversion',
      'endowment-effect',
      'fear-of-regret',
      'effort-justification',
    ],
  },
  {
    id: 'reciprocity',
    name: 'Reciprocity',
    chapter: 6,
    category: 'social-influence',
    summary: 'Feeling obligated to return favors.',
    examples: [
      'Free samples at the supermarket create a sense of obligation to buy the product.',
      'A colleague helps you move, and you feel compelled to help them even at great inconvenience.',
      'Charities include small gifts (address labels, calendars) with donation requests to trigger reciprocity.',
    ],
    research:
      'Robert Cialdini demonstrated the power of reciprocity in multiple experiments. Dennis Regan\'s 1971 study showed people bought more raffle tickets from someone who had given them a free Coca-Cola.',
    defense:
      'Recognize when a favor comes with strings attached. Accept gifts gracefully but make purchasing decisions independently of any feelings of obligation.',
    relatedBiasIds: [
      'liking-bias',
      'because-justification',
      'social-proof',
    ],
  },
  {
    id: 'confirmation-bias',
    name: 'Confirmation Bias',
    chapter: 7,
    category: 'information-processing',
    summary: 'Interpreting evidence to support existing beliefs.',
    examples: [
      'A believer in astrology remembers every correct horoscope prediction and dismisses incorrect ones.',
      'Political partisans watch the same debate but each side sees their candidate as the clear winner.',
      'An investor bullish on a stock seeks out only positive news articles about the company.',
    ],
    research:
      'Peter Wason\'s 1960 card selection task demonstrated that people seek confirming rather than disconfirming evidence. Charles Lord et al. (1979) showed biased assimilation of evidence about capital punishment.',
    defense:
      'Actively seek out disconfirming evidence. Write down your beliefs and list what would have to be true to prove them wrong.',
    relatedBiasIds: [
      'story-bias',
      'cherry-picking',
      'itll-get-worse-before-it-gets-better',
      'availability-bias',
    ],
  },
  {
    id: 'authority-bias',
    name: 'Authority Bias',
    chapter: 8,
    category: 'social-influence',
    summary: 'Over-weighting opinions from authority figures.',
    examples: [
      'Patients follow a doctor\'s advice without question, even when the prescription is clearly wrong.',
      'Celebrity endorsements boost product sales despite the celebrity having no relevant expertise.',
      'Employees implement a CEO\'s flawed strategy without pushback because of hierarchical deference.',
    ],
    research:
      'Stanley Milgram\'s 1961 obedience experiments showed that 65% of participants administered what they believed were dangerous electric shocks simply because an authority figure instructed them to.',
    defense:
      'Evaluate the argument, not the person making it. Ask whether the authority figure has genuine expertise in the relevant domain.',
    relatedBiasIds: [
      'social-proof',
      'halo-effect',
      'chauffeur-knowledge',
      'liking-bias',
    ],
  },
  {
    id: 'contrast-effect',
    name: 'Contrast Effect',
    chapter: 9,
    category: 'social-influence',
    summary: 'Judging things relative to other things rather than on their own merits.',
    examples: [
      'A real estate agent shows you a terrible house first so the next mediocre house looks great by comparison.',
      'A $50 accessory seems cheap after you just bought a $2,000 suit.',
      'An average-looking person appears more attractive when standing next to less attractive friends.',
    ],
    research:
      'The contrast effect has been studied in psychophysics since Weber and Fechner in the 19th century. Tversky and Kahneman extended it to decision-making contexts in their prospect theory work.',
    defense:
      'Evaluate each option in isolation, not relative to what came before. Set your criteria in advance and judge items against that fixed standard.',
    relatedBiasIds: [
      'anchoring',
      'framing',
      'primacy-and-recency-effects',
    ],
  },
  {
    id: 'availability-bias',
    name: 'Availability Bias',
    chapter: 10,
    category: 'information-processing',
    summary:
      'Basing decisions on easily recalled examples rather than actual data.',
    examples: [
      'After seeing news coverage of a plane crash, people overestimate the danger of flying relative to driving.',
      'Doctors may diagnose a rare disease they recently read about more frequently than warranted.',
      'People overestimate crime rates in their neighborhood because violent incidents are vivid and memorable.',
    ],
    research:
      'Amos Tversky and Daniel Kahneman introduced the availability heuristic in 1973, showing that people judge frequency by the ease with which examples come to mind.',
    defense:
      'Seek out actual statistics rather than relying on anecdotes. Ask: am I recalling this easily because it is common, or because it is dramatic?',
    relatedBiasIds: [
      'confirmation-bias',
      'salience-effect',
      'news-illusion',
      'affect-heuristic',
    ],
  },
  {
    id: 'itll-get-worse-before-it-gets-better',
    name: "It'll-Get-Worse-Before-It-Gets-Better",
    chapter: 11,
    category: 'causal-reasoning',
    summary:
      'A variant of confirmation bias: predicting things will worsen first provides an unfalsifiable shield.',
    examples: [
      'A consultant tells a company things will get worse before they improve, making any decline seem like progress.',
      'A therapist warns that treatment may initially increase discomfort, making negative outcomes appear expected.',
      'Economic advisors predict a recession must deepen before recovery, making them right regardless of the near-term outcome.',
    ],
    research:
      'This fallacy is closely related to the concept of unfalsifiability from Karl Popper\'s philosophy of science. If a prediction covers all outcomes, it cannot be tested.',
    defense:
      'Demand specific, testable predictions with timelines. If someone says it will get worse first, ask: how bad, for how long, and what would prove the approach wrong?',
    relatedBiasIds: [
      'confirmation-bias',
      'forecast-illusion',
      'story-bias',
    ],
  },
  {
    id: 'story-bias',
    name: 'Story Bias',
    chapter: 12,
    category: 'information-processing',
    summary:
      'Shaping everything into narrative form, distorting facts to fit a coherent story.',
    examples: [
      'A CEO\'s success is narrated as a visionary journey when in reality luck played a major role.',
      'History textbooks present events as inevitable chains of cause and effect, omitting randomness.',
      'News outlets craft narratives around isolated events, creating the illusion of meaningful trends.',
    ],
    research:
      'Nassim Nicholas Taleb discussed the "narrative fallacy" extensively. Daniel Kahneman described how System 1 thinking creates coherent stories from limited data in "Thinking, Fast and Slow."',
    defense:
      'Be suspicious of seamless narratives. Break stories into independent facts and assess each one separately. Remember that reality is messier than any story.',
    relatedBiasIds: [
      'confirmation-bias',
      'hindsight-bias',
      'conjunction-fallacy',
      'survivorship-bias',
    ],
  },
  {
    id: 'hindsight-bias',
    name: 'Hindsight Bias',
    chapter: 13,
    category: 'memory-perception',
    summary:
      'Everything appears clear in retrospect, making us believe we "knew it all along."',
    examples: [
      'After the 2008 financial crisis, many claimed it was obvious, despite few predicting it beforehand.',
      'Doctors reviewing a case after diagnosis feel the correct answer was evident from the start.',
      'Sports fans claim they predicted the game\'s outcome after the final whistle.',
    ],
    research:
      'Baruch Fischhoff pioneered hindsight bias research in the 1970s, showing that people consistently overestimate what they knew before an event once they learn the outcome.',
    defense:
      'Keep a decision journal. Write down your predictions and reasoning before outcomes are known, then review them honestly afterward.',
    relatedBiasIds: [
      'story-bias',
      'overconfidence-effect',
      'self-serving-bias',
      'falsification-of-history',
    ],
  },
  {
    id: 'overconfidence-effect',
    name: 'Overconfidence Effect',
    chapter: 14,
    category: 'self-deception',
    summary:
      'Systematically overestimating our knowledge and ability to predict.',
    examples: [
      '93% of US drivers rate themselves above average, which is statistically impossible.',
      'Entrepreneurs overestimate their venture\'s chance of success by a wide margin.',
      'Experts consistently set confidence intervals that are far too narrow in forecasting tasks.',
    ],
    research:
      'Daniel Kahneman and Amos Tversky documented overconfidence in calibration studies. Philip Tetlock\'s "Expert Political Judgment" showed that expert forecasters performed barely better than chance.',
    defense:
      'Add a margin of error to every estimate. Assume your confidence interval is too narrow and deliberately widen it. Seek outside opinions.',
    relatedBiasIds: [
      'illusion-of-control',
      'chauffeur-knowledge',
      'forecast-illusion',
      'planning-fallacy',
      'illusion-of-skill',
    ],
  },
  {
    id: 'chauffeur-knowledge',
    name: 'Chauffeur Knowledge',
    chapter: 15,
    category: 'self-deception',
    summary:
      'Appearing to understand a subject without true comprehension, mimicking expertise through rehearsed language.',
    examples: [
      'A TV pundit uses jargon fluently but cannot answer a novel question outside their rehearsed material.',
      'A student memorizes formulas for an exam but cannot apply them to real-world problems.',
      'A CEO delivers polished presentations written by others but struggles in unscripted Q&A sessions.',
    ],
    research:
      'Charlie Munger popularized this concept with the anecdote of Max Planck\'s chauffeur, who memorized Planck\'s lecture so well he could deliver it himself — until someone asked a real question.',
    defense:
      'Distinguish between those who truly understand and those who merely perform understanding. Test knowledge with novel questions that require genuine comprehension.',
    relatedBiasIds: [
      'overconfidence-effect',
      'authority-bias',
      'illusion-of-skill',
    ],
  },
  {
    id: 'illusion-of-control',
    name: 'Illusion of Control',
    chapter: 16,
    category: 'self-deception',
    summary:
      'Believing we influence outcomes more than we actually do.',
    examples: [
      'Gamblers blow on dice or choose their own lottery numbers, believing it improves their odds.',
      'A manager micromanages every detail, assuming their involvement is essential to the project\'s success.',
      'Investors who actively trade believe they can beat the market through skill, when most underperform index funds.',
    ],
    research:
      'Ellen Langer\'s 1975 experiments demonstrated the illusion of control, showing that people behave as if they can influence outcomes determined purely by chance.',
    defense:
      'Distinguish between situations where you have genuine influence and those governed by chance. Focus your energy on what you can actually control.',
    relatedBiasIds: [
      'overconfidence-effect',
      'illusion-of-skill',
      'self-serving-bias',
      'forecast-illusion',
    ],
  },
  {
    id: 'incentive-super-response-tendency',
    name: 'Incentive Super-Response Tendency',
    chapter: 17,
    category: 'social-influence',
    summary:
      'People respond powerfully to incentives, often pursuing self-interest in unexpected and unintended ways.',
    examples: [
      'Surgeons perform more operations when paid per procedure versus a flat salary.',
      'Wells Fargo employees opened millions of fake accounts to meet sales quotas.',
      'Rat bounty programs in colonial Vietnam led people to breed rats for the bounty.',
    ],
    research:
      'Charlie Munger emphasized this as one of the most important psychological tendencies. Steven Levitt and Stephen Dubner explored perverse incentives extensively in "Freakonomics."',
    defense:
      'Always ask "What are the incentives?" before trusting advice. Understand how someone benefits from the recommendation they are giving you.',
    relatedBiasIds: [
      'self-serving-bias',
      'strategic-misrepresentation',
      'motivation-crowding',
    ],
  },
  {
    id: 'regression-to-the-mean',
    name: 'Regression to the Mean',
    chapter: 18,
    category: 'statistical',
    summary:
      'Extreme performance tends to be followed by more average performance, regardless of any intervention.',
    examples: [
      'A sports team has an exceptional season and then performs average the next year; the coach is blamed.',
      'Students who scored very high on one test tend to score closer to average on the next.',
      'A company\'s stock surges and then declines — analysts attribute the decline to management, not regression.',
    ],
    research:
      'Francis Galton discovered regression to the mean in the 1880s while studying the heights of parents and children. Kahneman discussed how Israeli flight instructors mistakenly attributed pilot improvement to punishment rather than regression.',
    defense:
      'After extreme results, expect a natural return toward the average before attributing change to any specific cause or intervention.',
    relatedBiasIds: [
      'false-causality',
      'gamblers-fallacy',
      'illusion-of-skill',
      'clustering-illusion',
    ],
  },
  {
    id: 'outcome-bias',
    name: 'Outcome Bias',
    chapter: 19,
    category: 'professional',
    summary:
      'Evaluating the quality of a decision based on its outcome rather than the quality of the decision process.',
    examples: [
      'A surgeon who took a calculated risk is praised when the patient recovers but condemned if the patient dies, regardless of whether the decision was sound.',
      'A CEO who made a reckless bet is hailed as a genius when it pays off.',
      'A poker player who won with a bad hand is told they played well.',
    ],
    research:
      'Jonathan Baron and John Hershey demonstrated outcome bias in 1988, showing that people rate identical decisions differently depending on whether the outcome was positive or negative.',
    defense:
      'Judge decisions by the information and reasoning available at the time they were made, not by the results. Keep a decision log to separate process from outcome.',
    relatedBiasIds: [
      'hindsight-bias',
      'survivorship-bias',
      'fundamental-attribution-error',
      'self-serving-bias',
    ],
  },
  {
    id: 'paradox-of-choice',
    name: 'Paradox of Choice',
    chapter: 20,
    category: 'decision-making',
    summary:
      'Excessive options create paralysis and dissatisfaction rather than freedom.',
    examples: [
      'A supermarket jam study showed that a display with 24 varieties generated fewer purchases than one with 6.',
      'Employees offered too many 401(k) options are less likely to enroll in any plan.',
      'Dating apps with endless profiles lead to less commitment and more dissatisfaction.',
    ],
    research:
      'Sheena Iyengar and Mark Lepper conducted the famous jam study in 2000. Barry Schwartz popularized the concept in "The Paradox of Choice" (2004).',
    defense:
      'Limit your options deliberately. Set clear criteria in advance, then choose the first option that meets them rather than exhaustively comparing everything.',
    relatedBiasIds: [
      'decision-fatigue',
      'fear-of-regret',
      'hyperbolic-discounting',
      'inability-to-close-doors',
    ],
  },
  {
    id: 'liking-bias',
    name: 'Liking Bias',
    chapter: 21,
    category: 'social-group',
    summary:
      'We buy from, agree with, and help people we like, regardless of the merits.',
    examples: [
      'Tupperware parties succeed because friends sell to friends, leveraging personal liking.',
      'Attractive political candidates receive more votes independent of their policies.',
      'Car salespeople build rapport before negotiating because likability increases compliance.',
    ],
    research:
      'Robert Cialdini identified liking as one of the six key principles of influence. Research shows that physical attractiveness, similarity, and compliments all increase liking and compliance.',
    defense:
      'Separate the person from the proposal. Ask: would I accept this deal from someone I disliked? Judge offers on their own merits.',
    relatedBiasIds: [
      'social-proof',
      'halo-effect',
      'authority-bias',
      'reciprocity',
    ],
  },
  {
    id: 'endowment-effect',
    name: 'Endowment Effect',
    chapter: 22,
    category: 'emotional',
    summary:
      'We value things more simply because we own them.',
    examples: [
      'Homeowners consistently price their houses above market value because they are emotionally attached.',
      'In experiments, people given a mug demand roughly twice as much to sell it as others are willing to pay for it.',
      'Employees resist giving up outdated processes they helped create, even when better alternatives exist.',
    ],
    research:
      'Richard Thaler, Daniel Kahneman, and Jack Knetsch demonstrated the endowment effect in classic mug experiments. It is closely tied to loss aversion in prospect theory.',
    defense:
      'Imagine you do not own the item. Ask: if I did not have this, how much would I pay to acquire it? Use that as the true value.',
    relatedBiasIds: [
      'loss-aversion',
      'sunk-cost-fallacy',
      'default-effect',
      'fear-of-regret',
    ],
  },
  {
    id: 'coincidence',
    name: 'Coincidence',
    chapter: 23,
    category: 'statistical',
    summary:
      'Treating unlikely but inevitable events as meaningful or causal.',
    examples: [
      'You think of an old friend and they call the same day — you forget the hundreds of times you thought of someone and they did not call.',
      'A psychic makes a prediction that happens to come true, and people ignore the many wrong predictions.',
      'Two unrelated events occurring simultaneously are interpreted as connected.',
    ],
    research:
      'Statisticians like Persi Diaconis and Frederick Mosteller have shown that "coincidences" are mathematically expected given the large number of events that occur daily. The law of truly large numbers guarantees seemingly improbable events.',
    defense:
      'Remember that with enough events, unlikely things are guaranteed to happen. Do not assign causality to coincidences without rigorous evidence.',
    relatedBiasIds: [
      'clustering-illusion',
      'false-causality',
      'confirmation-bias',
    ],
  },
  {
    id: 'groupthink',
    name: 'Groupthink',
    chapter: 24,
    category: 'social-group',
    summary:
      'Groups suppress dissent and converge on consensus, avoiding contradiction.',
    examples: [
      'NASA\'s Challenger disaster resulted partly from engineers being pressured not to voice safety concerns.',
      'Board members unanimously approve a CEO\'s risky strategy because no one wants to be the dissenter.',
      'Jury deliberations can produce extreme verdicts when group polarization takes effect.',
    ],
    research:
      'Irving Janis coined the term "groupthink" in 1972 after studying foreign policy fiascoes like the Bay of Pigs invasion. Cass Sunstein explored group polarization in deliberative settings.',
    defense:
      'Appoint a devil\'s advocate in every group meeting. Encourage anonymous feedback and independent opinions before group discussion.',
    relatedBiasIds: [
      'social-proof',
      'authority-bias',
      'social-loafing',
      'in-group-out-group-bias',
    ],
  },
  {
    id: 'neglect-of-probability',
    name: 'Neglect of Probability',
    chapter: 25,
    category: 'statistical',
    summary:
      'Responding to the magnitude of an event rather than its likelihood.',
    examples: [
      'People fear terrorism but not car accidents, despite the latter being far more probable.',
      'Lottery players focus on the size of the jackpot, ignoring the infinitesimal odds of winning.',
      'Parents worry about kidnapping but not swimming pools, even though the latter causes far more child deaths.',
    ],
    research:
      'Cass Sunstein studied probability neglect in the context of risk regulation. Kahneman and Tversky showed that people weight outcomes by emotional impact rather than likelihood.',
    defense:
      'Always combine the magnitude of a potential outcome with its probability. Force yourself to express risks as percentages, not just vivid scenarios.',
    relatedBiasIds: [
      'affect-heuristic',
      'availability-bias',
      'base-rate-neglect',
      'scarcity-error',
    ],
  },
  {
    id: 'scarcity-error',
    name: 'Scarcity Error',
    chapter: 26,
    category: 'emotional',
    summary:
      'Deprivation makes options appear more attractive than they actually are.',
    examples: [
      '"Only 2 left in stock!" messages drive impulse purchases on e-commerce sites.',
      'Collectors pay exorbitant prices for rare stamps not because of intrinsic value but because of scarcity.',
      'A limited-time sale creates urgency that overrides rational cost-benefit analysis.',
    ],
    research:
      'Stephen Worchel\'s 1975 cookie jar experiment showed that cookies from a nearly empty jar were rated as more desirable than identical cookies from a full jar. Cialdini listed scarcity as a key influence principle.',
    defense:
      'Evaluate items based on their utility to you, not their availability. Ask: would I want this if there were unlimited supply?',
    relatedBiasIds: [
      'loss-aversion',
      'endowment-effect',
      'neglect-of-probability',
      'affect-heuristic',
    ],
  },
  {
    id: 'base-rate-neglect',
    name: 'Base-Rate Neglect',
    chapter: 27,
    category: 'statistical',
    summary:
      'Disregarding fundamental population distributions in favor of specific case information.',
    examples: [
      'A positive result on a rare-disease test is treated as definitive, ignoring the low base rate of the disease and high false-positive rate.',
      'A witness identifies a suspect, and jurors focus on the identification while ignoring that the suspect comes from a population of millions.',
      'A startup pitch seems compelling, but the base rate for startup success is extremely low.',
    ],
    research:
      'Kahneman and Tversky demonstrated base-rate neglect with the "taxi cab" problem and the "Tom W." personality sketch experiment in the 1970s.',
    defense:
      'Always start with the base rate. Ask: how common is this in the general population? Then adjust from there based on specific evidence.',
    relatedBiasIds: [
      'neglect-of-probability',
      'survivorship-bias',
      'conjunction-fallacy',
      'availability-bias',
    ],
  },
  {
    id: 'gamblers-fallacy',
    name: "Gambler's Fallacy",
    chapter: 28,
    category: 'statistical',
    summary:
      'Believing that past independent events influence future probabilities.',
    examples: [
      'A roulette player bets on red after a streak of blacks, believing red is "due."',
      'After having three daughters, parents believe a son is more likely next, even though each birth is independent.',
      'A company that missed earnings for three quarters is assumed to be "due for a rebound."',
    ],
    research:
      'The gambler\'s fallacy is a well-documented cognitive bias studied by Tversky and Kahneman. A famous case occurred at the Monte Carlo Casino in 1913 when the ball landed on black 26 times in a row, and gamblers lost millions betting on red.',
    defense:
      'Remember that independent events have no memory. Each coin flip is 50/50 regardless of the previous flips. Check whether events are truly independent.',
    relatedBiasIds: [
      'clustering-illusion',
      'law-of-small-numbers',
      'regression-to-the-mean',
    ],
  },
  {
    id: 'anchoring',
    name: 'Anchoring',
    chapter: 29,
    category: 'information-processing',
    summary:
      'Starting from a known or arbitrary value and adjusting insufficiently from it.',
    examples: [
      'A car dealer sets a high sticker price so that any discount feels like a bargain.',
      'Salary negotiations are heavily influenced by whoever states the first number.',
      'Judges in one experiment gave harsher sentences after rolling a higher number on a die.',
    ],
    research:
      'Tversky and Kahneman introduced anchoring in 1974. Dan Ariely demonstrated that even random numbers (like Social Security digits) anchor willingness-to-pay for unrelated products.',
    defense:
      'Set your own anchor before entering negotiations. Research fair values independently and be aware when someone else sets the first number.',
    relatedBiasIds: [
      'framing',
      'contrast-effect',
      'primacy-and-recency-effects',
    ],
  },
  {
    id: 'induction',
    name: 'Induction',
    chapter: 30,
    category: 'causal-reasoning',
    summary:
      'Drawing universal certainties from individual observations, which can fail catastrophically.',
    examples: [
      'A turkey fed every day for 1,000 days "concludes" that feeding will continue — until Thanksgiving.',
      'Banks assumed housing prices would always rise, based on decades of historical data, until the 2008 crash.',
      'A swimmer who has never encountered a shark believes the water is always safe.',
    ],
    research:
      'David Hume formulated the "problem of induction" in the 18th century. Karl Popper advocated falsification over induction. Nassim Taleb used the turkey metaphor to illustrate Black Swan events.',
    defense:
      'Recognize that no amount of confirming instances proves a universal law. Seek disconfirming evidence and prepare for the possibility that established patterns may break.',
    relatedBiasIds: [
      'black-swan',
      'false-causality',
      'confirmation-bias',
      'forecast-illusion',
    ],
  },
  {
    id: 'loss-aversion',
    name: 'Loss Aversion',
    chapter: 31,
    category: 'decision-making',
    summary:
      'The pain of losing is psychologically about twice as powerful as the pleasure of gaining.',
    examples: [
      'Investors hold losing stocks too long hoping to break even, while selling winners too quickly.',
      'People refuse a bet with a 50% chance to win $200 and 50% chance to lose $100 because the potential loss looms larger.',
      'Employees resist organizational change even when the new system is objectively better, because they focus on what they lose.',
    ],
    research:
      'Kahneman and Tversky\'s prospect theory (1979) established that losses are weighted roughly twice as heavily as equivalent gains. This is a cornerstone of behavioral economics.',
    defense:
      'Reframe losses as costs of potential gains. Ask: "What am I giving up by not acting?" to counterbalance the natural overweighting of loss.',
    relatedBiasIds: [
      'endowment-effect',
      'sunk-cost-fallacy',
      'fear-of-regret',
      'default-effect',
      'ambiguity-aversion',
    ],
  },
  {
    id: 'social-loafing',
    name: 'Social Loafing',
    chapter: 32,
    category: 'social-group',
    summary:
      'Individual effort and performance decrease when working in groups.',
    examples: [
      'In a tug-of-war experiment, individuals pulled less hard as team size increased.',
      'Group projects in school often result in one or two people doing most of the work.',
      'Open-plan office brainstorming sessions produce fewer ideas per person than individual brainstorming.',
    ],
    research:
      'Max Ringelmann discovered this effect in 1913 with rope-pulling experiments. Bibb Latane and colleagues confirmed it in the 1970s and coined the term "social loafing."',
    defense:
      'Make individual contributions visible and measurable. Assign specific responsibilities to each team member rather than vague group tasks.',
    relatedBiasIds: [
      'groupthink',
      'social-proof',
      'in-group-out-group-bias',
    ],
  },
  {
    id: 'exponential-growth',
    name: 'Exponential Growth',
    chapter: 33,
    category: 'statistical',
    summary:
      'Humans have a poor intuitive grasp of exponential growth, consistently underestimating it.',
    examples: [
      'A lily pad doubles in size each day and covers a lake in 48 days. On day 47 it covers only half — most people underestimate how quickly the last half fills.',
      'Compound interest: $1 invested at 10% grows to over $117 in 50 years, but most people guess far lower.',
      'Viral spread of diseases or social media content catches institutions off guard because growth is exponential, not linear.',
    ],
    research:
      'Albert Bartlett famously said "the greatest shortcoming of the human race is our inability to understand the exponential function." Wagenaar and Sagaria (1975) demonstrated that people systematically underestimate exponential growth.',
    defense:
      'When encountering growth rates, calculate the doubling time (rule of 72: divide 72 by the growth rate). Never rely on intuition for exponential phenomena.',
    relatedBiasIds: [
      'neglect-of-probability',
      'planning-fallacy',
      'forecast-illusion',
    ],
  },
  {
    id: 'winners-curse',
    name: "Winner's Curse",
    chapter: 34,
    category: 'professional',
    summary:
      'The winner of an auction often overpays because winning itself required the highest bid.',
    examples: [
      'Companies that win bidding wars for acquisitions frequently overpay and destroy shareholder value.',
      'eBay auction winners often pay more than the item\'s retail price due to competitive bidding.',
      'Oil companies that won drilling rights in sealed-bid auctions in the 1970s consistently lost money.',
    ],
    research:
      'Capen, Clapp, and Campbell identified the winner\'s curse in 1971 in oil lease auctions. Richard Thaler expanded the concept to broader economic contexts.',
    defense:
      'In any competitive bid, assume that winning means you may have overestimated the value. Set a maximum price before bidding and never exceed it.',
    relatedBiasIds: [
      'overconfidence-effect',
      'endowment-effect',
      'sunk-cost-fallacy',
    ],
  },
  {
    id: 'fundamental-attribution-error',
    name: 'Fundamental Attribution Error',
    chapter: 35,
    category: 'professional',
    summary:
      'Overestimating the role of individual character and underestimating situational factors in explaining behavior.',
    examples: [
      'We assume a driver who cuts us off is rude, rather than considering they might be rushing to the hospital.',
      'A company\'s failure is attributed to the CEO\'s incompetence rather than market conditions.',
      'A student doing poorly in school is labeled lazy rather than considering their home environment.',
    ],
    research:
      'Lee Ross coined the term in 1977. Edward Jones and Victor Harris\'s 1967 study showed people attributed attitudes to essay writers even when told the writers had been assigned their position.',
    defense:
      'When judging others, always consider the situation before attributing behavior to character. Ask: "What circumstances might explain this behavior?"',
    relatedBiasIds: [
      'self-serving-bias',
      'halo-effect',
      'hindsight-bias',
    ],
  },
  {
    id: 'false-causality',
    name: 'False Causality',
    chapter: 36,
    category: 'causal-reasoning',
    summary:
      'Confusing correlation with causation — just because two things co-occur does not mean one causes the other.',
    examples: [
      'Ice cream sales and drowning deaths both increase in summer, but ice cream does not cause drowning.',
      'Countries with more storks also have higher birth rates (both correlate with rural populations).',
      'A manager changes the office layout and productivity rises, but the improvement was due to a seasonal trend.',
    ],
    research:
      'The phrase "correlation does not imply causation" is fundamental to scientific method. Bradford Hill established criteria for inferring causality from correlation in 1965.',
    defense:
      'Before concluding that A causes B, consider: could B cause A? Could a third factor C cause both? Demand controlled experiments, not just correlational data.',
    relatedBiasIds: [
      'clustering-illusion',
      'coincidence',
      'association-bias',
      'regression-to-the-mean',
    ],
  },
  {
    id: 'halo-effect',
    name: 'Halo Effect',
    chapter: 37,
    category: 'professional',
    summary:
      'A single impressive aspect of a person or thing prevents objective evaluation of other qualities.',
    examples: [
      'An attractive job candidate is assumed to be more competent and intelligent.',
      'A company with one hit product is assumed to have excellent management across the board.',
      'A person who speaks eloquently is assumed to be trustworthy and knowledgeable on all topics.',
    ],
    research:
      'Edward Thorndike identified the halo effect in 1920 when military officers rated soldiers. Phil Rosenzweig explored how it distorts business analysis in "The Halo Effect" (2007).',
    defense:
      'Evaluate each trait independently. Use structured assessments and separate criteria rather than forming a global impression from one standout quality.',
    relatedBiasIds: [
      'liking-bias',
      'authority-bias',
      'swimmers-body-illusion',
      'fundamental-attribution-error',
    ],
  },
  {
    id: 'alternative-paths',
    name: 'Alternative Paths',
    chapter: 38,
    category: 'causal-reasoning',
    summary:
      'Failing to consider all possible outcomes that could have occurred, focusing only on what actually happened.',
    examples: [
      'A Russian roulette survivor is celebrated for courage, while the five alternative paths leading to death are ignored.',
      'A successful risky investment is praised without considering the scenarios where it could have lost everything.',
      'A daring military strategy that worked is hailed as genius, but the many ways it could have failed are not discussed.',
    ],
    research:
      'Nassim Taleb emphasizes alternative histories in "Fooled by Randomness." The concept relates to counterfactual thinking studied by Daniel Kahneman and Dale Miller.',
    defense:
      'For every success story, mentally simulate what else could have happened. Consider the full range of possible outcomes, not just the one that materialized.',
    relatedBiasIds: [
      'survivorship-bias',
      'outcome-bias',
      'hindsight-bias',
    ],
  },
  {
    id: 'forecast-illusion',
    name: 'Forecast Illusion',
    chapter: 39,
    category: 'self-deception',
    summary:
      'Believing forecasts are reliable despite overwhelming evidence that predictions are consistently poor.',
    examples: [
      'Economic forecasters are wrong more often than right, yet we continue to rely on their predictions.',
      'Weather forecasts beyond a few days are unreliable, yet week-long forecasts are presented with confidence.',
      'Stock analysts\' price targets rarely match actual outcomes, yet new forecasts appear daily.',
    ],
    research:
      'Philip Tetlock\'s two-decade study of expert predictions found that experts barely outperformed random chance. Nassim Taleb argues that the world is too complex for reliable forecasting.',
    defense:
      'Treat all forecasts as rough guides, not precise predictions. Prepare for multiple scenarios rather than betting on one forecast. Assess the track record of any forecaster.',
    relatedBiasIds: [
      'overconfidence-effect',
      'illusion-of-control',
      'planning-fallacy',
      'itll-get-worse-before-it-gets-better',
    ],
  },
  {
    id: 'conjunction-fallacy',
    name: 'Conjunction Fallacy',
    chapter: 40,
    category: 'statistical',
    summary:
      'Perceiving a specific scenario as more probable than a general one, even though the specific one is a subset.',
    examples: [
      'The "Linda problem": people judge Linda as more likely to be a feminist bank teller than just a bank teller, even though the latter includes the former.',
      'People rate "a massive earthquake in California causing a flood that kills thousands" as more likely than "a flood somewhere in North America that kills thousands."',
      'A detailed scenario about a company failing sounds more probable than a vague statement that the company might fail.',
    ],
    research:
      'Tversky and Kahneman introduced the conjunction fallacy with the famous "Linda problem" in 1983. It demonstrates that the representativeness heuristic can override basic probability rules.',
    defense:
      'Remember that adding details to a scenario always makes it less probable, not more. A subset can never be larger than the set that contains it.',
    relatedBiasIds: [
      'story-bias',
      'neglect-of-probability',
      'base-rate-neglect',
    ],
  },
  {
    id: 'framing',
    name: 'Framing',
    chapter: 41,
    category: 'information-processing',
    summary:
      'We react differently to the same information depending on how it is presented.',
    examples: [
      'Ground beef labeled "75% lean" sells better than beef labeled "25% fat," though they are identical.',
      'A surgery with a "90% survival rate" sounds safer than one with a "10% mortality rate."',
      'Politicians frame a policy as "protecting jobs" rather than "restricting trade" to gain support.',
    ],
    research:
      'Tversky and Kahneman\'s 1981 "Asian disease" problem showed that framing outcomes as gains or losses dramatically shifts preferences, even for identical scenarios.',
    defense:
      'Restate every proposition in multiple frames. Convert percentages to absolute numbers. Ask: what is the same information in different words?',
    relatedBiasIds: [
      'anchoring',
      'contrast-effect',
      'salience-effect',
      'loss-aversion',
    ],
  },
  {
    id: 'action-bias',
    name: 'Action Bias',
    chapter: 42,
    category: 'decision-making',
    summary:
      'A compulsion to act even when inaction is the better response, especially under uncertainty.',
    examples: [
      'Soccer goalkeepers dive left or right during penalty kicks, even though staying in the center statistically yields better results.',
      'New managers feel compelled to make immediate changes to justify their role, even when the team is performing well.',
      'Investors buy and sell during market volatility when holding would have been optimal.',
    ],
    research:
      'Michael Bar-Eli and colleagues studied action bias in soccer goalkeepers (2007), finding that staying in the center would save more penalties. The bias is linked to loss aversion and the desire to appear in control.',
    defense:
      'Before acting, ask: "Is doing nothing a valid option?" Sometimes the best action is deliberate inaction. Wait for clarity before committing.',
    relatedBiasIds: [
      'omission-bias',
      'decision-fatigue',
      'illusion-of-control',
    ],
  },
  {
    id: 'omission-bias',
    name: 'Omission Bias',
    chapter: 43,
    category: 'decision-making',
    summary:
      'Preferring harmful inaction over less harmful action — we perceive sins of commission as worse than sins of omission.',
    examples: [
      'Parents who refuse to vaccinate their children fear the small risk of side effects more than the larger risk of disease from non-vaccination.',
      'A manager avoids firing an underperformer (causing team-wide harm) because the act of firing feels worse than the passive damage.',
      'Regulators fail to approve a beneficial drug due to fear of being blamed for side effects, even though more lives would be saved.',
    ],
    research:
      'Ilana Ritov and Jonathan Baron studied omission bias extensively, showing that people judge harmful omissions as less morally wrong than equally harmful commissions.',
    defense:
      'Evaluate the consequences of inaction just as carefully as the consequences of action. Inaction is itself a decision with its own risks.',
    relatedBiasIds: [
      'action-bias',
      'fear-of-regret',
      'default-effect',
    ],
  },
  {
    id: 'self-serving-bias',
    name: 'Self-Serving Bias',
    chapter: 44,
    category: 'self-deception',
    summary:
      'Attributing success to our own abilities and effort while blaming failure on external factors.',
    examples: [
      'A student credits their intelligence for a good grade but blames a bad grade on an unfair test.',
      'A CEO takes credit for strong quarterly results but attributes poor results to market conditions.',
      'A sports team credits their skill for wins and blames the referee for losses.',
    ],
    research:
      'Dale Miller and Michael Ross documented self-serving attributional bias in 1975. The effect is robust across cultures, though stronger in individualistic societies.',
    defense:
      'Systematically review your failures and ask what role you played. Conversely, for successes, ask what external factors contributed.',
    relatedBiasIds: [
      'cognitive-dissonance',
      'fundamental-attribution-error',
      'hindsight-bias',
      'overconfidence-effect',
    ],
  },
  {
    id: 'hedonic-treadmill',
    name: 'Hedonic Treadmill',
    chapter: 45,
    category: 'emotional',
    summary:
      'We adapt to new circumstances, both positive and negative, returning to a baseline level of happiness.',
    examples: [
      'Lottery winners report being no happier than before within a year of their win.',
      'People who move to a bigger house quickly adapt and want an even bigger one.',
      'After a promotion, the initial joy fades and the new salary becomes the new normal.',
    ],
    research:
      'Philip Brickman and Donald Campbell coined the term in 1971. Brickman\'s 1978 study of lottery winners and accident victims showed remarkable adaptation to both extremes.',
    defense:
      'Invest in experiences and relationships rather than material possessions. Recognize that lasting happiness comes from purpose and meaningful connections, not acquisitions.',
    relatedBiasIds: [
      'endowment-effect',
      'expectations',
      'envy',
      'neomania',
    ],
  },
  {
    id: 'self-selection-bias',
    name: 'Self-Selection Bias',
    chapter: 46,
    category: 'statistical',
    summary:
      'When participants choose to be in a study or group, the sample is not representative of the general population.',
    examples: [
      'A survey about customer satisfaction only reaches people who bothered to respond — typically the very happy or very unhappy.',
      'Voluntary drug trials attract participants who may be sicker or more health-conscious than average.',
      'Online product reviews skew extreme because only strongly opinionated customers write them.',
    ],
    research:
      'Self-selection bias is a core concern in epidemiology and survey methodology. James Heckman won the Nobel Prize in Economics partly for his work on correcting selection bias.',
    defense:
      'Ask how participants were selected. If they self-selected, assume the results do not represent the general population. Look for randomized studies.',
    relatedBiasIds: [
      'survivorship-bias',
      'base-rate-neglect',
      'cherry-picking',
    ],
  },
  {
    id: 'association-bias',
    name: 'Association Bias',
    chapter: 47,
    category: 'causal-reasoning',
    summary:
      'Making false connections between unrelated things based on past experience or proximity.',
    examples: [
      'A CEO who announces bad news repeatedly becomes associated with bad news itself, even as the messenger.',
      'Superstitious athletes wear "lucky" socks because they once played well while wearing them.',
      'A brand sponsors a popular event and becomes associated with positive feelings, even though the product is unrelated.',
    ],
    research:
      'Ivan Pavlov\'s classical conditioning experiments laid the groundwork. Charlie Munger highlighted association bias as one of the key psychological tendencies that mislead human judgment.',
    defense:
      'Separate the message from the messenger and the context from the content. Ask whether a true causal connection exists or if it is merely a coincidence of timing.',
    relatedBiasIds: [
      'false-causality',
      'halo-effect',
      'clustering-illusion',
    ],
  },
  {
    id: 'beginners-luck',
    name: "Beginner's Luck",
    chapter: 48,
    category: 'self-deception',
    summary:
      'Early positive results are falsely linked to skill or talent rather than chance.',
    examples: [
      'A first-time poker player wins a few hands and believes they have a natural talent.',
      'An investor makes money on their first stock pick and concludes they have an edge.',
      'A novice golfer hits a great shot and assumes they have mastered the technique.',
    ],
    research:
      'Beginner\'s luck is explained by regression to the mean — initial extreme results naturally regress toward the average over time. Ellen Langer\'s work on the illusion of control also applies.',
    defense:
      'Withhold judgment about skill until you have a large sample of results. Early wins are likely due to chance and will regress to the mean.',
    relatedBiasIds: [
      'regression-to-the-mean',
      'illusion-of-skill',
      'overconfidence-effect',
    ],
  },
  {
    id: 'cognitive-dissonance',
    name: 'Cognitive Dissonance',
    chapter: 49,
    category: 'self-deception',
    summary:
      'When actions conflict with beliefs, we reinterpret events or change our beliefs to reduce psychological discomfort.',
    examples: [
      'A smoker who knows smoking is harmful convinces themselves that "stress kills more people than cigarettes."',
      'After buying an expensive car, people selectively read positive reviews to justify their purchase.',
      'Members of a doomsday cult reinterpret the failed prediction as evidence that their prayers saved the world.',
    ],
    research:
      'Leon Festinger developed cognitive dissonance theory in 1957 after studying a UFO cult whose members intensified their beliefs when predictions failed.',
    defense:
      'Notice when you are rationalizing a decision after the fact. Be willing to admit mistakes and change course rather than distorting reality to preserve your self-image.',
    relatedBiasIds: [
      'self-serving-bias',
      'effort-justification',
      'confirmation-bias',
      'sunk-cost-fallacy',
    ],
  },
  {
    id: 'hyperbolic-discounting',
    name: 'Hyperbolic Discounting',
    chapter: 50,
    category: 'decision-making',
    summary:
      'Preferring now over later is rational. The problem is that we discount the future at an inconsistent rate — steeply for the immediate moment, then almost flat for anything further out. This leads to preference reversals: choices we make today that our future selves would never agree to, and commitments about the future that we reliably break the moment they become the present.',
    examples: [
      'People choose $100 today over $110 tomorrow but would choose $110 in 31 days over $100 in 30 days — the same time gap.',
      'Employees fail to save for retirement because spending now feels more tangible than future comfort.',
      'Dieters eat cake today and promise to exercise tomorrow, a commitment they will break again tomorrow.',
    ],
    research:
      'Richard Thaler and George Ainslie studied how people discount future rewards hyperbolically rather than exponentially. David Laibson developed formal models of present bias.',
    defense:
      'Automate future-oriented decisions (automatic savings, pre-commitments). Make your future self\'s interests as vivid as your present desires.',
    relatedBiasIds: [
      'procrastination',
      'paradox-of-choice',
      'decision-fatigue',
    ],
  },
  {
    id: 'because-justification',
    name: '"Because" Justification',
    chapter: 51,
    category: 'social-influence',
    summary:
      'Simply providing any reason with the word "because" significantly increases compliance, even if the reason is trivial.',
    examples: [
      'In Langer\'s copy machine experiment, "Can I use the copier because I need to make copies?" worked almost as well as a genuine reason.',
      'A manager saying "we need to change this because it\'s important" meets less resistance than providing no reason at all.',
      'A child\'s endless "why?" is satisfied by almost any answer containing "because."',
    ],
    research:
      'Ellen Langer\'s 1978 copy machine experiment showed that the word "because" followed by even a meaningless reason ("because I have to make copies") increased compliance from 60% to 93%.',
    defense:
      'Listen to the actual content of the reason, not just the structure. Ask: does this "because" contain a genuine justification, or is it empty?',
    relatedBiasIds: [
      'authority-bias',
      'social-proof',
      'reciprocity',
    ],
  },
  {
    id: 'decision-fatigue',
    name: 'Decision Fatigue',
    chapter: 52,
    category: 'decision-making',
    summary:
      'The quality of our decisions deteriorates as we make more of them, as willpower and mental energy erode throughout the day.',
    examples: [
      'Judges grant parole significantly more often after meals than at the end of long sessions.',
      'Shoppers who make many choices earlier in the trip are more likely to buy impulsively at the checkout.',
      'After a day of meetings, executives default to the easiest option rather than the best one.',
    ],
    research:
      'Roy Baumeister demonstrated ego depletion — the idea that willpower draws from a limited resource. Shai Danziger\'s study of Israeli judges showed that parole decisions varied dramatically with the time of day.',
    defense:
      'Make important decisions early in the day when willpower is fresh. Reduce the number of trivial decisions through routines and defaults.',
    relatedBiasIds: [
      'action-bias',
      'omission-bias',
      'default-effect',
      'paradox-of-choice',
    ],
  },
  {
    id: 'contagion-bias',
    name: 'Contagion Bias',
    chapter: 53,
    category: 'emotional',
    summary:
      'Unable to ignore connections — objects that have touched something repulsive remain psychologically contaminated.',
    examples: [
      'People refuse to wear a freshly laundered sweater once told it belonged to a serial killer.',
      'A sterilized cockroach dipped in a drink makes people refuse to drink it, even though it is objectively harmless.',
      'Homes where a murder occurred sell at a steep discount despite being physically unchanged.',
    ],
    research:
      'Paul Rozin and colleagues extensively studied contagion thinking, showing that the "once in contact, always in contact" heuristic is deeply embedded in human psychology and related to disgust responses.',
    defense:
      'Recognize that physical contact does not transfer moral or emotional properties. Evaluate objects based on their current state, not their history.',
    relatedBiasIds: [
      'affect-heuristic',
      'association-bias',
      'personification',
    ],
  },
  {
    id: 'problems-with-averages',
    name: 'Problems with Averages',
    chapter: 54,
    category: 'statistical',
    summary:
      'Averages can mask important distributions — the average may describe no actual individual.',
    examples: [
      'The average depth of a river is 3 feet, but you can still drown in the 20-foot-deep spots.',
      'Average income in a city may be high due to a few billionaires, while most residents earn far less.',
      'A medicine that works on average may be highly effective for some patients and harmful to others.',
    ],
    research:
      'Nassim Taleb distinguishes "Mediocristan" (where averages work well) from "Extremistan" (where outliers dominate). The concept is fundamental to statistics and the study of distributions vs. point estimates.',
    defense:
      'Always ask about the distribution behind the average. Request medians, ranges, and standard deviations. Never make decisions based on averages alone.',
    relatedBiasIds: [
      'base-rate-neglect',
      'neglect-of-probability',
      'law-of-small-numbers',
    ],
  },
  {
    id: 'motivation-crowding',
    name: 'Motivation Crowding',
    chapter: 55,
    category: 'emotional',
    summary:
      'Monetary incentives can crowd out intrinsic motivation, actually reducing performance and cooperation.',
    examples: [
      'A daycare that fined parents for late pickups saw tardiness increase — the fine replaced guilt with a paid service.',
      'Volunteers who were offered small payments for blood donation gave less blood than unpaid volunteers.',
      'Paying students for good grades can undermine their genuine love of learning.',
    ],
    research:
      'Uri Gneezy and Aldo Rustichini demonstrated motivation crowding with the daycare fine study. Edward Deci\'s self-determination theory explains how external rewards can diminish intrinsic motivation.',
    defense:
      'Consider whether adding monetary incentives might destroy existing social or intrinsic motivations. Sometimes the best incentive is no financial incentive at all.',
    relatedBiasIds: [
      'incentive-super-response-tendency',
      'affect-heuristic',
      'expectations',
    ],
  },
  {
    id: 'twaddle-tendency',
    name: 'Twaddle Tendency',
    chapter: 56,
    category: 'social-influence',
    summary:
      'Verbose, complex language is used to disguise poor ideas and lack of understanding.',
    examples: [
      'Corporate jargon-filled mission statements that say nothing meaningful.',
      'A consultant\'s 100-page report that could have been summarized in two sentences.',
      'Academic papers that use unnecessarily complex language to appear more profound.',
    ],
    research:
      'Charlie Munger warned against "twaddle" as a tool of obfuscation. George Orwell argued in "Politics and the English Language" that unclear language is used to defend the indefensible.',
    defense:
      'Demand clarity. If you cannot explain an idea simply, you probably do not understand it. Be suspicious of anyone who hides behind jargon and complexity.',
    relatedBiasIds: [
      'chauffeur-knowledge',
      'authority-bias',
      'information-bias',
    ],
  },
  {
    id: 'will-rogers-phenomenon',
    name: 'Will Rogers Phenomenon',
    chapter: 57,
    category: 'statistical',
    summary:
      'Moving items between categories can raise the average of both categories without any actual improvement.',
    examples: [
      'A school has a top set averaging 80% and a bottom set averaging 40%. The worst student in the top set scores 55%. Move them to the bottom set and the top set average rises (the weakest link is gone) while the bottom set average also rises (55% is above their average). Both classes "improved" but nothing actually changed.',
      'Reclassifying cancer stages can make survival rates appear to improve in both early and late stages, even if no patient lives longer.'],
    research:
      'Alvan Feinstein, Daniel Sosin, and Carolyn Wells described this statistical artifact in 1985 in the context of cancer staging. It is named after Will Rogers\' quip about Oklahomans moving to California.',
    defense:
      'When someone claims averages have improved, check whether the composition of the groups has changed. Look for stage migration or reclassification rather than true improvement.',
    relatedBiasIds: [
      'problems-with-averages',
      'cherry-picking',
      'base-rate-neglect',
    ],
  },
  {
    id: 'information-bias',
    name: 'Information Bias',
    chapter: 58,
    category: 'information-processing',
    summary:
      'The false belief that more information always leads to better decisions.',
    examples: [
      'A doctor orders every possible test before making a diagnosis, even when the key symptoms clearly indicate the condition.',
      'Investors who consume more financial news actually make worse trading decisions due to information overload.',
      'A hiring manager collects extensive data on candidates but the additional information adds noise rather than clarity.',
    ],
    research:
      'Paul Slovic showed that experts given more information became more confident but not more accurate. Gerd Gigerenzer argues that simple heuristics often outperform complex analyses fed with excess data.',
    defense:
      'Determine the minimum information needed for a good decision. Additional data beyond that point often adds noise, not signal.',
    relatedBiasIds: [
      'confirmation-bias',
      'availability-bias',
      'story-bias',
      'news-illusion',
    ],
  },
  {
    id: 'effort-justification',
    name: 'Effort Justification',
    chapter: 59,
    category: 'self-deception',
    summary:
      'We overvalue results that required significant effort, regardless of their actual quality.',
    examples: [
      'Fraternity members who endure harsh hazing value their membership more than those who join easily.',
      'A meal you spent hours cooking tastes better to you than a similar restaurant meal.',
      'IKEA furniture that requires assembly is valued more than pre-assembled furniture — the "IKEA effect."',
    ],
    research:
      'Elliot Aronson and Judson Mills demonstrated effort justification in 1959. Michael Norton et al. documented the "IKEA effect" in 2012, showing people value self-assembled products more.',
    defense:
      'Evaluate results by their quality, not by the effort invested. Ask: "If this had been easy, would I value the result the same way?"',
    relatedBiasIds: [
      'sunk-cost-fallacy',
      'cognitive-dissonance',
      'endowment-effect',
    ],
  },
  {
    id: 'law-of-small-numbers',
    name: 'Law of Small Numbers',
    chapter: 60,
    category: 'statistical',
    summary:
      'We instinctively treat small samples as though they are just as reliable as large ones. In reality, small groups produce wildly variable results — extreme highs and extreme lows — simply by chance. A handful of data points tells you almost nothing about the true underlying pattern, yet we routinely draw sweeping conclusions from them. The smaller the sample, the more likely it is to look dramatically different from the population it was drawn from. This is not a subtle statistical footnote; it is one of the most common reasoning errors in everyday life, medicine, business, and policy.',
    examples: [
      'A restaurant gets two bad reviews out of three, and diners avoid it — but three reviews is far too few to judge.',
      'A small school appears to be top-performing because a few gifted students disproportionately affect the average.',
      'A drug trial with 12 patients shows promising results, but the sample is too small to be reliable.',
    ],
    research:
      'Tversky and Kahneman described the "belief in the law of small numbers" in 1971, showing that even trained statisticians overestimate the reliability of small samples. They demonstrated that people expect patterns in random sequences far too early and treat tiny datasets as miniature copies of the population. The mathematical reality is straightforward: variance is inversely proportional to sample size. The smaller the group, the more extreme and unreliable any statistic derived from it will be.',
    defense:
      'Always check sample sizes before drawing conclusions. Demand large, representative samples and be deeply skeptical of results from small groups. When you see a ranking or league table, ask how many observations each entry is based on — the extremes are almost always the smallest samples. Remember: extraordinary results from small samples are not extraordinary at all; they are mathematically inevitable.',
    relatedBiasIds: [
      'gamblers-fallacy',
      'clustering-illusion',
      'self-selection-bias',
      'base-rate-neglect',
    ],
    deepDive: {
      title: 'The Supermarket Crime Paradox',
      content: `Imagine a retail chain decides to investigate crime rates across all of its supermarkets. They rank every store by the number of shoplifting incidents per customer. The results look alarming: the stores at the very top of the crime league table — the apparent hotspots — are almost all tiny convenience stores and small neighbourhood outlets. Management concludes that small stores have a serious crime problem and begins pouring security resources into them.

But there is a catch. If you look at the bottom of the table — the stores with the lowest crime rates — you find the same thing: small stores again. The tiny outlets dominate both extremes.

This is the Law of Small Numbers in action. It has nothing to do with small stores being better or worse at preventing crime. It is pure mathematics. A large supermarket serving thousands of customers per week will produce a crime rate that is stable and close to the true average, simply because it has a large sample. A small store serving a few dozen customers will produce a rate that swings wildly. One bad week with two shoplifters and it rockets to the top of the table. One quiet month and it drops to the bottom. The small sample size means the result is dominated by random noise rather than any real underlying pattern.

This is exactly the same phenomenon that crops up everywhere. The counties with the highest rates of kidney cancer in the United States are mostly small, rural, sparsely populated counties. So are the counties with the lowest rates. Small populations produce extreme statistics — in both directions — because there simply aren't enough data points to smooth out the randomness.

The lesson is profound and counterintuitive: when you see a league table, a ranking, or any comparison between groups, look at the sample sizes first. The entries at the extremes — the best and the worst performers — are overwhelmingly likely to be the smallest groups. Their position tells you almost nothing about whether they are genuinely different. It tells you only that their sample was small enough for chance to dominate.

Before you act on a ranking, ask: "How many observations is this based on?" If the answer is "not many," the ranking is noise dressed up as signal.`,
    },
  },
  {
    id: 'expectations',
    name: 'Expectations',
    chapter: 61,
    category: 'emotional',
    summary:
      'Our expectations shape our subjective experience, often creating self-fulfilling prophecies.',
    examples: [
      'Wine labeled as expensive tastes better in blind tests than the same wine labeled as cheap.',
      'Students perform better when teachers expect them to (the Pygmalion effect).',
      'Patients given placebos experience real improvements when they believe they are receiving medication.',
    ],
    research:
      'Robert Rosenthal and Lenore Jacobson demonstrated the Pygmalion effect in 1968. The placebo effect, documented across medicine, shows that expectations alone can produce physiological changes.',
    defense:
      'Challenge your expectations before evaluating outcomes. Use blind testing where possible to separate the effect of expectations from actual quality.',
    relatedBiasIds: [
      'framing',
      'affect-heuristic',
      'hedonic-treadmill',
      'motivation-crowding',
    ],
  },
  {
    id: 'simple-logic',
    name: 'Simple Logic/Intuition',
    chapter: 62,
    category: 'information-processing',
    summary:
      'Defaulting to intuition and gut feelings rather than systematic reasoning, which often leads to errors.',
    examples: [
      'A bat and ball cost $1.10 together. The bat costs $1.00 more than the ball. Most people intuitively say the ball costs $0.10, when the correct answer is $0.05.',
      'Experienced doctors diagnose by gut feeling and miss rare conditions that systematic checklists would catch.',
      'Managers hire based on "fit" feelings rather than structured interviews, introducing bias.',
    ],
    research:
      'Daniel Kahneman\'s "Thinking, Fast and Slow" describes the interplay between intuitive System 1 and analytical System 2. Shane Frederick\'s Cognitive Reflection Test measures the tendency to override incorrect intuitive answers.',
    defense:
      'When stakes are high, slow down and engage deliberate analytical thinking. Check your intuitive answers with systematic methods and calculations.',
    relatedBiasIds: [
      'affect-heuristic',
      'neglect-of-probability',
      'overthinking',
    ],
  },
  {
    id: 'forer-effect',
    name: 'Forer Effect/Barnum Effect',
    chapter: 63,
    category: 'information-processing',
    summary:
      'We readily identify with vague, general personality descriptions as if they were uniquely tailored to us.',
    examples: [
      'Horoscopes use language general enough to apply to anyone, yet readers feel they are personally targeted.',
      'Personality tests with generic results feel uncannily accurate to each individual test-taker.',
      'Fortune tellers use broad statements like "you have faced a great loss" that apply to virtually everyone.',
    ],
    research:
      'Bertram Forer demonstrated this in 1948 by giving students identical personality profiles (taken from astrology columns) that received an average accuracy rating of 4.26 out of 5.',
    defense:
      'When a description feels personally accurate, ask: "Could this apply to almost anyone?" Be skeptical of personality assessments without rigorous validation.',
    relatedBiasIds: [
      'confirmation-bias',
      'story-bias',
      'introspection-illusion',
    ],
  },
  {
    id: 'volunteers-folly',
    name: "Volunteer's Folly",
    chapter: 64,
    category: 'professional',
    summary:
      'Volunteering time to a cause may be less effective than donating the equivalent monetary value of that time.',
    examples: [
      'A lawyer spending a weekend building houses could have earned $5,000 at their hourly rate and hired professional builders who would do it faster and better.',
      'A CEO volunteering at a food bank for a day could have donated their daily salary to fund a week of professional staffing.',
      'A software engineer tutoring students in math might create more impact by funding a professional tutor for multiple students.',
    ],
    research:
      'Effective altruism research by Peter Singer and William MacAskill emphasizes that comparative advantage applies to charitable work — contribute where your marginal impact is greatest.',
    defense:
      'Calculate the monetary value of your time and compare it to what a professional could achieve with that donation. Volunteer only when your specific skills are irreplaceable.',
    relatedBiasIds: [
      'effort-justification',
      'affect-heuristic',
      'domain-dependence',
    ],
  },
  {
    id: 'affect-heuristic',
    name: 'Affect Heuristic',
    chapter: 65,
    category: 'emotional',
    summary:
      'We make decisions based on current emotions rather than objective analysis.',
    examples: [
      'Investors sell stocks in a panic during a market crash because fear overwhelms rational analysis.',
      'People rate a technology as low-risk if they feel positively about it, regardless of actual safety data.',
      'A hiring manager who likes a candidate overlooks red flags in their resume.',
    ],
    research:
      'Paul Slovic and colleagues identified the affect heuristic, showing that emotional reactions serve as a shortcut for complex risk-benefit analysis. Zajonc demonstrated that preferences can form without conscious cognition.',
    defense:
      'Separate emotional reactions from decisions. Use structured frameworks and checklists to ensure analysis is not driven purely by how you feel in the moment.',
    relatedBiasIds: [
      'neglect-of-probability',
      'simple-logic',
      'overthinking',
      'availability-bias',
    ],
  },
  {
    id: 'introspection-illusion',
    name: 'Introspection Illusion',
    chapter: 66,
    category: 'self-deception',
    summary:
      'We believe that reflection and self-examination will lead to accurate self-knowledge, but introspection is often unreliable.',
    examples: [
      'People asked why they chose a product give elaborate reasons that do not match their actual decision process.',
      'Meditating on a decision does not necessarily improve its quality — it may just increase confidence in a flawed choice.',
      'Therapists and coaches encourage introspection, but people often confabulate reasons that feel true but are not.',
    ],
    research:
      'Timothy Wilson and Richard Nisbett showed in 1977 that people frequently cannot accurately report the reasons for their own behavior. Emily Pronin documented the "introspection illusion" where people trust their own introspection but dismiss others\'.',
    defense:
      'Rely on behavioral evidence and external feedback rather than introspective self-analysis. Track your decisions and outcomes to discover your actual patterns.',
    relatedBiasIds: [
      'overconfidence-effect',
      'self-serving-bias',
      'cognitive-dissonance',
      'forer-effect',
    ],
  },
  {
    id: 'inability-to-close-doors',
    name: 'Inability to Close Doors',
    chapter: 67,
    category: 'decision-making',
    summary:
      'We prefer to keep all options open, even when doing so is costly and prevents us from fully committing to the best option.',
    examples: [
      'A student pursues three majors simultaneously rather than committing to one and excelling.',
      'A professional maintains multiple career paths, investing in none deeply enough to succeed.',
      'A person keeps an expensive apartment in another city "just in case" while paying rent in their current city.',
    ],
    research:
      'Dan Ariely\'s "door" experiments at MIT showed that students would sacrifice earnings to keep irrelevant options open, even when they could not benefit from them.',
    defense:
      'Actively close doors. Commit to fewer options and accept that choosing means losing alternatives. The cost of keeping options open is often greater than the cost of closing them.',
    relatedBiasIds: [
      'paradox-of-choice',
      'fear-of-regret',
      'loss-aversion',
      'sunk-cost-fallacy',
    ],
  },
  {
    id: 'neomania',
    name: 'Neomania',
    chapter: 68,
    category: 'emotional',
    summary:
      'We are drawn to the new and novel, prioritizing novelty over proven benefits or longevity.',
    examples: [
      'People upgrade to the latest smartphone despite their current one working perfectly well.',
      'Companies adopt new management frameworks every few years, abandoning proven methods.',
      'Consumers chase food trends while traditional diets have sustained health for centuries.',
    ],
    research:
      'Nassim Taleb coined "neomania" and argued that old technologies and ideas that have survived are more likely to continue surviving (the Lindy effect). Novelty triggers dopamine responses that bias us toward the new.',
    defense:
      'Apply the Lindy effect: if something has been around for a long time, it is more likely to remain relevant. Do not adopt the new simply because it is new.',
    relatedBiasIds: [
      'hedonic-treadmill',
      'scarcity-error',
      'affect-heuristic',
    ],
  },
  {
    id: 'sleeper-effect',
    name: 'Sleeper Effect',
    chapter: 69,
    category: 'memory-perception',
    summary:
      'Over time, we remember the message but forget its source, allowing propaganda from unreliable sources to become persuasive.',
    examples: [
      'A tabloid rumor is initially dismissed, but months later people remember the claim without remembering its dubious source.',
      'An advertisement from an untrusted brand is ignored at first, but the product message lingers and influences later purchases.',
      'Political propaganda loses its "source tag" over time and becomes accepted as common knowledge.',
    ],
    research:
      'Carl Hovland and colleagues discovered the sleeper effect during WWII while studying propaganda effectiveness. The effect occurs because source memory decays faster than message memory.',
    defense:
      'Always attach credibility assessments to information. When you recall a claim, immediately ask: "Where did I learn this, and was the source reliable?"',
    relatedBiasIds: [
      'availability-bias',
      'confirmation-bias',
      'news-illusion',
    ],
  },
  {
    id: 'alternative-blindness',
    name: 'Alternative Blindness',
    chapter: 70,
    category: 'decision-making',
    summary:
      'We forget to compare our chosen option against other available alternatives.',
    examples: [
      'A manager approves a project without comparing it to other possible uses of the same budget.',
      'A patient accepts a surgery without asking about non-surgical treatment options.',
      'A city builds a new highway without evaluating whether public transit would be more cost-effective.',
    ],
    research:
      'Dobelli emphasizes that we are wired to evaluate options in isolation rather than comparatively. This relates to opportunity cost neglect, studied by Shane Frederick and colleagues.',
    defense:
      'For every decision, explicitly list and evaluate at least two alternatives. Always ask: "What else could I do with these resources?"',
    relatedBiasIds: [
      'paradox-of-choice',
      'default-effect',
      'sunk-cost-fallacy',
    ],
  },
  {
    id: 'social-comparison-bias',
    name: 'Social Comparison Bias',
    chapter: 71,
    category: 'social-group',
    summary:
      'We withhold assistance from potential competitors and feel threatened by those who might outperform us.',
    examples: [
      'A manager avoids hiring candidates who might outshine them.',
      'Experienced employees withhold knowledge from talented newcomers who might take their position.',
      'An established academic gives a harsh peer review to a rising competitor in their field.',
    ],
    research:
      'Leon Festinger\'s social comparison theory (1954) explains how people evaluate themselves relative to others. Stephen Garcia and Avishalom Tor studied how social comparison triggers competitive behavior that undermines group outcomes.',
    defense:
      'Surround yourself with people who are smarter and more talented than you. Their success lifts everyone, and you learn more from being around excellence.',
    relatedBiasIds: [
      'envy',
      'in-group-out-group-bias',
      'liking-bias',
    ],
  },
  {
    id: 'primacy-and-recency-effects',
    name: 'Primacy and Recency Effects',
    chapter: 72,
    category: 'memory-perception',
    summary:
      'First and most recent information disproportionately influence our judgments and memory.',
    examples: [
      'In job interviews, the first and last candidates are remembered most clearly, while middle candidates blur together.',
      'A speech is judged largely by its opening and closing, regardless of the middle content.',
      'In a list of items, we best recall the first few and last few entries.',
    ],
    research:
      'Hermann Ebbinghaus documented serial position effects in memory in the 1880s. Solomon Asch showed in 1946 that the order of adjectives describing a person significantly affects impressions.',
    defense:
      'Be aware that first impressions and recent events carry disproportionate weight. Review all information equally, and pay special attention to the middle of any sequence.',
    relatedBiasIds: [
      'anchoring',
      'contrast-effect',
      'halo-effect',
    ],
  },
  {
    id: 'not-invented-here-syndrome',
    name: 'Not-Invented-Here Syndrome',
    chapter: 73,
    category: 'professional',
    summary:
      'We tend to believe that our own creations are superior to those produced by others.',
    examples: [
      'A software team rewrites a perfectly good open-source library from scratch because they want their own version.',
      'A company develops a proprietary solution instead of adopting an industry standard that would be cheaper and better.',
      'A research team dismisses findings from another lab, insisting on replicating the work themselves.',
    ],
    research:
      'Ralph Katz and Thomas Allen studied NIH syndrome in R&D organizations, finding that established teams systematically undervalue external solutions. The bias is amplified by effort justification.',
    defense:
      'Actively evaluate external solutions before building your own. Ask: "If someone else built this, would we adopt it?" Let outcomes, not origin, determine your choice.',
    relatedBiasIds: [
      'endowment-effect',
      'effort-justification',
      'domain-dependence',
      'deformation-professionnelle',
    ],
  },
  {
    id: 'black-swan',
    name: 'Black Swan',
    chapter: 74,
    category: 'professional',
    summary:
      'Unthinkable events with massive impact that are rationalized after the fact as predictable.',
    examples: [
      'The September 11 attacks were inconceivable beforehand but were explained as "obvious" in retrospect.',
      'The 2008 financial crisis was a Black Swan that most models failed to predict.',
      'The invention of the internet transformed civilization in ways no one forecast.',
    ],
    research:
      'Nassim Nicholas Taleb introduced the Black Swan concept, arguing that rare, high-impact events dominate history and that we are structurally blind to them due to our reliance on past data.',
    defense:
      'Build redundancy and robustness into systems. Do not rely on predictions of the future. Prepare for the improbable rather than optimizing for the expected.',
    relatedBiasIds: [
      'induction',
      'forecast-illusion',
      'hindsight-bias',
      'survivorship-bias',
    ],
  },
  {
    id: 'domain-dependence',
    name: 'Domain Dependence',
    chapter: 75,
    category: 'professional',
    summary:
      'Knowledge and insights gained in one domain fail to transfer to another, even when the underlying principles are identical.',
    examples: [
      'A chess grandmaster who understands strategy deeply may make terrible strategic decisions in business.',
      'A statistician who teaches probability theory may still fall for the gambler\'s fallacy at a casino.',
      'A psychologist who studies biases may still be biased in personal relationships.',
    ],
    research:
      'Research on transfer of learning shows that people struggle to apply abstract principles across domains. Keith Stanovich\'s work on rationality demonstrates that intelligence does not protect against domain-specific blindness.',
    defense:
      'Actively seek to transfer insights from one area of expertise to another. Ask: "Where else does this principle apply?" Build bridges between your knowledge domains.',
    relatedBiasIds: [
      'deformation-professionnelle',
      'not-invented-here-syndrome',
      'chauffeur-knowledge',
    ],
  },
  {
    id: 'false-consensus-effect',
    name: 'False-Consensus Effect',
    chapter: 76,
    category: 'self-deception',
    summary:
      'We overestimate the degree to which others share our opinions, values, and behaviors.',
    examples: [
      'A vegetarian assumes most people would prefer a meatless restaurant.',
      'A political activist is shocked when their candidate loses because "everyone I know voted for them."',
      'A manager assumes the team agrees with a decision because no one has explicitly objected.',
    ],
    research:
      'Lee Ross, David Greene, and Pamela House demonstrated the false-consensus effect in 1977. They showed that people who chose one option systematically overestimated how many others chose the same.',
    defense:
      'Do not assume others think like you. Actively survey opinions and be prepared for genuine disagreement. Your social circle is not a representative sample.',
    relatedBiasIds: [
      'social-proof',
      'in-group-out-group-bias',
      'overconfidence-effect',
    ],
  },
  {
    id: 'falsification-of-history',
    name: 'Falsification of History',
    chapter: 77,
    category: 'memory-perception',
    summary:
      'Our memories are systematically inaccurate — we reconstruct the past to fit our current understanding and self-image.',
    examples: [
      'People misremember their past political opinions to align with their current views.',
      'Couples remember their early relationship as happier or unhappier than it was, depending on the current state.',
      'Investors recall being "always skeptical" about a stock that crashed, even though their portfolio shows they were fully invested.',
    ],
    research:
      'Elizabeth Loftus demonstrated the malleability of memory, showing that memories can be implanted and distorted through suggestion. Daniel Schacter identified seven "sins" of memory, including bias and misattribution.',
    defense:
      'Keep written records of your beliefs, predictions, and decisions. A diary or journal provides an objective record that resists the distortion of memory.',
    relatedBiasIds: [
      'hindsight-bias',
      'self-serving-bias',
      'cognitive-dissonance',
    ],
  },
  {
    id: 'in-group-out-group-bias',
    name: 'In-Group/Out-Group Bias',
    chapter: 78,
    category: 'social-group',
    summary:
      'We form groups based on even minor, arbitrary criteria and then favor our group while discriminating against outsiders.',
    examples: [
      'Fans of rival sports teams view identical plays differently depending on which team is involved.',
      'Students randomly assigned to teams in an experiment immediately start favoring their own team.',
      'Employees in different departments develop rivalries and withhold cooperation.',
    ],
    research:
      'Henri Tajfel\'s "minimal group" experiments in the 1970s showed that people would favor their group even when membership was assigned by coin flip. Jane Elliott\'s "blue eyes/brown eyes" classroom exercise demonstrated the speed of in-group bias formation.',
    defense:
      'Consciously expand your definition of "in-group." Seek common ground with those you perceive as outsiders and evaluate individuals rather than group labels.',
    relatedBiasIds: [
      'social-proof',
      'groupthink',
      'social-comparison-bias',
      'liking-bias',
    ],
  },
  {
    id: 'ambiguity-aversion',
    name: 'Ambiguity Aversion',
    chapter: 79,
    category: 'decision-making',
    summary:
      'We prefer known probabilities over unknown ones, even when the unknown option may have better expected value.',
    examples: [
      'People choose a bag with 50 red and 50 black balls over one with 100 balls of unknown mix, even if the odds are the same.',
      'Investors prefer domestic stocks (known risks) over foreign stocks (unknown risks), missing diversification benefits.',
      'Companies stick with established suppliers rather than trying new ones that might offer better terms.',
    ],
    research:
      'Daniel Ellsberg demonstrated ambiguity aversion in 1961 with his famous paradox, showing that people prefer known risks over unknown ones even when the expected outcomes are identical.',
    defense:
      'Distinguish between risk (known probabilities) and uncertainty (unknown probabilities). Do not automatically avoid uncertainty — sometimes the unknown option has superior expected value.',
    relatedBiasIds: [
      'loss-aversion',
      'default-effect',
      'fear-of-regret',
      'endowment-effect',
    ],
  },
  {
    id: 'default-effect',
    name: 'Default Effect',
    chapter: 80,
    category: 'decision-making',
    summary:
      'We tend to stick with the default option, whatever it is, rather than actively choosing.',
    examples: [
      'Organ donation rates are dramatically higher in countries where donation is the default (opt-out) than where it must be opted into.',
      'Most employees keep the default investment allocation in their retirement plans.',
      'Software users rarely change default settings, even when alternatives would better suit their needs.',
    ],
    research:
      'Eric Johnson and Daniel Goldstein showed in 2003 that organ donation rates varied from 4% to 100% based almost entirely on whether the default was opt-in or opt-out.',
    defense:
      'Actively review and question defaults. Ask: "Would I choose this if it were not the default?" Make deliberate choices rather than passively accepting pre-set options.',
    relatedBiasIds: [
      'loss-aversion',
      'omission-bias',
      'decision-fatigue',
      'ambiguity-aversion',
    ],
  },
  {
    id: 'fear-of-regret',
    name: 'Fear of Regret',
    chapter: 81,
    category: 'decision-making',
    summary:
      'We fail to act because we fear regretting the outcome, leading to missed opportunities.',
    examples: [
      'An investor holds a declining stock because selling and watching it rebound would feel worse than the current loss.',
      'Someone stays in an unsatisfying career because they fear regretting a change.',
      'A person avoids asking someone out because the potential embarrassment of rejection outweighs the potential joy of acceptance.',
    ],
    research:
      'Marcel Zeelenberg and colleagues studied anticipated regret as a driver of decision-making. Thomas Gilovich found that people regret inactions more than actions in the long run.',
    defense:
      'Recognize that in the long run, we regret the things we did not do more than the things we did. Use Gilovich\'s finding to overcome short-term fear of regret.',
    relatedBiasIds: [
      'loss-aversion',
      'sunk-cost-fallacy',
      'omission-bias',
      'inability-to-close-doors',
    ],
  },
  {
    id: 'salience-effect',
    name: 'Salience Effect',
    chapter: 82,
    category: 'information-processing',
    summary:
      'Outstanding, vivid, or unusual features capture our attention and unduly influence our judgments.',
    examples: [
      'A single dramatic crime in a neighborhood changes perception of its safety more than years of low crime statistics.',
      'A flashy presentation wins a contract over a better but dull proposal.',
      'Airline crashes receive enormous attention, making flying seem dangerous, while the far deadlier risk of driving goes unnoticed.',
    ],
    research:
      'Shelley Taylor and Susan Fiske studied salience in the 1970s, showing that visually prominent stimuli disproportionately influence causal attributions and memory.',
    defense:
      'Actively seek out the non-salient information. Ask: "Am I focusing on this because it is important, or because it is vivid and attention-grabbing?"',
    relatedBiasIds: [
      'availability-bias',
      'framing',
      'news-illusion',
      'affect-heuristic',
    ],
  },
  {
    id: 'house-money-effect',
    name: 'House-Money Effect',
    chapter: 83,
    category: 'decision-making',
    summary:
      'We treat money differently depending on its source, taking more risks with "found" money or recent gains.',
    examples: [
      'Casino gamblers who are up take larger bets because they feel they are playing with "the house\'s money."',
      'An investor reinvests stock market gains more aggressively than their original capital.',
      'A person who receives an unexpected bonus spends it frivolously rather than saving it.',
    ],
    research:
      'Richard Thaler described the house-money effect as part of mental accounting theory. People treat different pools of money as non-fungible despite all dollars being equivalent.',
    defense:
      'Treat all money as equivalent regardless of its source. A dollar gained in the stock market, earned at work, or found on the street has the same value.',
    relatedBiasIds: [
      'loss-aversion',
      'endowment-effect',
      'sunk-cost-fallacy',
    ],
  },
  {
    id: 'procrastination',
    name: 'Procrastination',
    chapter: 84,
    category: 'decision-making',
    summary:
      'We delay important actions in favor of less important but more immediately rewarding tasks.',
    examples: [
      'A student cleans their room instead of studying for an exam due tomorrow.',
      'An entrepreneur spends time perfecting a logo rather than building the product.',
      'A manager postpones difficult conversations with underperforming employees for months.',
    ],
    research:
      'Piers Steel\'s meta-analysis of procrastination research found that delay increases with task difficulty and decreases with tangible deadlines. Timothy Pychyl\'s research shows that procrastination is an emotion regulation problem, not a time management one.',
    defense:
      'Break large tasks into small, concrete steps with specific deadlines. Use implementation intentions ("At [time], I will do [task]") to bypass the decision to start.',
    relatedBiasIds: [
      'hyperbolic-discounting',
      'decision-fatigue',
      'action-bias',
    ],
  },
  {
    id: 'envy',
    name: 'Envy',
    chapter: 85,
    category: 'emotional',
    summary:
      'We compare ourselves to others on dimensions like wealth, status, and attractiveness, leading to dissatisfaction.',
    examples: [
      'An employee who was happy with their salary becomes unhappy upon learning a colleague earns more.',
      'Social media makes people miserable by constantly exposing them to curated highlights of others\' lives.',
      'Neighbors upgrade their car and you suddenly feel your perfectly functional car is inadequate.',
    ],
    research:
      'Bertrand Russell wrote extensively about envy as a driver of unhappiness. Research by Sara Solnick and David Hemenway showed that many people prefer to earn less in absolute terms if it means earning more relative to their peers.',
    defense:
      'Stop comparing yourself to others. Measure progress against your own past, not against someone else\'s present. Limit social media exposure.',
    relatedBiasIds: [
      'social-comparison-bias',
      'hedonic-treadmill',
      'scarcity-error',
    ],
  },
  {
    id: 'personification',
    name: 'Personification',
    chapter: 86,
    category: 'emotional',
    summary:
      'We respond more strongly when individual human aspects are visible, empathizing with one identified person more than millions of anonymous victims.',
    examples: [
      'A photo of a single Syrian child on a beach raised more awareness than years of refugee statistics.',
      'Charities feature specific children with names and stories because identified victims generate more donations.',
      'People donate more to save one named whale than to protect an entire endangered species.',
    ],
    research:
      'Paul Slovic documented the "identifiable victim effect" — a single identified life generates more concern and donations than statistical lives. Joseph Stalin cynically noted: "A single death is a tragedy; a million deaths is a statistic."',
    defense:
      'Force yourself to consider statistics alongside stories. Do not let a single vivid case override data about where your resources would have the most impact.',
    relatedBiasIds: [
      'affect-heuristic',
      'salience-effect',
      'availability-bias',
      'story-bias',
    ],
  },
  {
    id: 'illusion-of-attention',
    name: 'Illusion of Attention',
    chapter: 87,
    category: 'memory-perception',
    summary:
      'We are confident we notice everything in our environment, but we actually miss a shocking amount.',
    examples: [
      'In the "invisible gorilla" experiment, half of participants watching a basketball passing video fail to notice a person in a gorilla suit walking through the scene.',
      'Drivers miss motorcycles and bicycles because they are focused on cars.',
      'Radiologists looking for cancer can miss a gorilla image superimposed on a lung scan.',
    ],
    research:
      'Daniel Simons and Christopher Chabris demonstrated inattentional blindness with the "invisible gorilla" experiment in 1999, showing that focused attention creates blind spots.',
    defense:
      'Acknowledge that your attention is limited. Use checklists and systematic scanning processes for critical tasks rather than relying on natural observation.',
    relatedBiasIds: [
      'overconfidence-effect',
      'feature-positive-effect',
      'availability-bias',
    ],
  },
  {
    id: 'strategic-misrepresentation',
    name: 'Strategic Misrepresentation',
    chapter: 88,
    category: 'social-influence',
    summary:
      'As stakes increase, assertions become increasingly exaggerated, with people deliberately overstating benefits and understating costs.',
    examples: [
      'Construction firms systematically underestimate project costs to win bids, then charge overruns.',
      'Startup founders inflate market size projections in pitch decks to attract investors.',
      'Politicians promise unrealistic benefits from proposed policies to win votes.',
    ],
    research:
      'Bent Flyvbjerg studied strategic misrepresentation in large infrastructure projects, finding that cost underestimation and benefit overestimation are not errors but deliberate strategies to get projects approved.',
    defense:
      'Use reference class forecasting — compare current projections to outcomes of similar past projects. Apply an "outside view" rather than trusting optimistic inside estimates.',
    relatedBiasIds: [
      'planning-fallacy',
      'overconfidence-effect',
      'incentive-super-response-tendency',
    ],
  },
  {
    id: 'overthinking',
    name: 'Overthinking',
    chapter: 89,
    category: 'emotional',
    summary:
      'Excessive deliberation can degrade decision quality by overriding valuable emotional wisdom and intuition.',
    examples: [
      'Wine experts asked to explain their preferences made worse choices than those who chose intuitively.',
      'Athletes who overthink a well-practiced movement (like a golf swing) perform worse than when they act automatically.',
      'A couple that overanalyzes every aspect of a vacation destination ends up enjoying it less than those who chose impulsively.',
    ],
    research:
      'Timothy Wilson and Jonathan Schooler showed that analyzing reasons for preferences can reduce satisfaction with choices. Ap Dijksterhuis found that for complex decisions, unconscious deliberation sometimes outperforms conscious analysis.',
    defense:
      'For well-practiced skills and preference-based choices, trust your intuition. Reserve deep analytical thinking for novel situations with clear criteria.',
    relatedBiasIds: [
      'affect-heuristic',
      'simple-logic',
      'decision-fatigue',
    ],
  },
  {
    id: 'planning-fallacy',
    name: 'Planning Fallacy',
    chapter: 90,
    category: 'professional',
    summary:
      'We systematically overestimate benefits, underestimate costs, and discount the time needed for projects.',
    examples: [
      'The Sydney Opera House was planned for 4 years and $7 million; it took 16 years and $102 million.',
      'Home renovations routinely exceed their estimated timelines and budgets by 50% or more.',
      'Software projects are notoriously late — the average project takes 2-3 times the estimated duration.',
    ],
    research:
      'Kahneman and Tversky identified the planning fallacy in 1979. Bent Flyvbjerg\'s extensive data on infrastructure projects confirmed systematic cost and time overruns across all project types.',
    defense:
      'Use reference class forecasting: look at how long similar past projects actually took, not how long you think this one should take. Add a buffer of at least 30-50%.',
    relatedBiasIds: [
      'overconfidence-effect',
      'forecast-illusion',
      'strategic-misrepresentation',
      'exponential-growth',
    ],
  },
  {
    id: 'deformation-professionnelle',
    name: 'Déformation Professionnelle',
    chapter: 91,
    category: 'professional',
    summary:
      'We tend to look at every situation through the lens of our professional expertise, even when it is not the optimal tool.',
    examples: [
      'An economist frames every problem in terms of supply and demand, ignoring psychological factors.',
      'A surgeon recommends surgery when medication might be more appropriate — "when all you have is a hammer, everything looks like a nail."',
      'A lawyer approaches family disputes as legal battles rather than relationship issues.',
    ],
    research:
      'Abraham Maslow articulated this as the "law of the instrument." Research on expert blind spots shows that deep expertise in one domain can narrow perspective and reduce cognitive flexibility.',
    defense:
      'Seek input from people with different professional backgrounds. Before applying your default framework, ask: "Is this actually the right lens for this problem?"',
    relatedBiasIds: [
      'domain-dependence',
      'not-invented-here-syndrome',
      'chauffeur-knowledge',
    ],
  },
  {
    id: 'zeigarnik-effect',
    name: 'Zeigarnik Effect',
    chapter: 92,
    category: 'memory-perception',
    summary:
      'Uncompleted tasks occupy our minds more than completed ones, causing mental tension until they are finished or clearly planned.',
    examples: [
      'A waiter remembers open orders but forgets them the moment the bill is paid.',
      'An unfinished project keeps you awake at night, replaying tasks in your mind.',
      'Cliffhangers in TV shows are effective because the unresolved story lingers in memory.',
    ],
    research:
      'Bluma Zeigarnik demonstrated in 1927 that people remember interrupted tasks 90% better than completed ones. David Allen\'s "Getting Things Done" system leverages this by externalizing tasks to reduce mental load.',
    defense:
      'Write down all open tasks with clear next steps. The act of planning reduces the mental burden of unfinished business, even before execution begins.',
    relatedBiasIds: [
      'procrastination',
      'decision-fatigue',
      'primacy-and-recency-effects',
    ],
  },
  {
    id: 'illusion-of-skill',
    name: 'Illusion of Skill',
    chapter: 93,
    category: 'self-deception',
    summary:
      'In many domains, luck plays a far greater role than skill, yet we persist in believing that outcomes reflect competence.',
    examples: [
      'Most actively managed funds underperform index funds, yet fund managers are highly compensated as if their skill drives returns.',
      'Year-to-year performance of mutual fund managers shows virtually zero correlation, suggesting luck rather than skill.',
      'Political pundits are celebrated for correct predictions that are statistically no better than chance.',
    ],
    research:
      'Daniel Kahneman discovered that the correlation of investment returns for wealth advisors was effectively zero year over year. Michael Mauboussin\'s "The Success Equation" provides frameworks for separating skill from luck.',
    defense:
      'Before attributing success to skill, check whether the outcome could be explained by chance. In domains with high randomness, focus on process quality rather than outcomes.',
    relatedBiasIds: [
      'overconfidence-effect',
      'illusion-of-control',
      'beginners-luck',
      'self-serving-bias',
    ],
  },
  {
    id: 'feature-positive-effect',
    name: 'Feature-Positive Effect',
    chapter: 94,
    category: 'memory-perception',
    summary:
      'We notice and overweight features that are present while overlooking the significance of features that are absent.',
    examples: [
      'A product review highlights existing features but ignores missing ones that competitors include.',
      'A detective notices clues at a crime scene but misses the significance of the dog that did not bark.',
      'Journalists report events that happened, but the non-events (wars that did not start, epidemics that were prevented) go unreported.',
    ],
    research:
      'The feature-positive effect was first described by Jenkins and Sainsbury in 1969 in animal learning experiments. It extends to human decision-making where the absence of information is cognitively harder to process.',
    defense:
      'Actively ask what is missing. Sherlock Holmes\'s "curious incident of the dog in the nighttime" illustrates the power of noticing absences. Create checklists that include expected features to make gaps visible.',
    relatedBiasIds: [
      'availability-bias',
      'confirmation-bias',
      'cherry-picking',
      'illusion-of-attention',
    ],
  },
  {
    id: 'cherry-picking',
    name: 'Cherry Picking',
    chapter: 95,
    category: 'information-processing',
    summary:
      'Showcasing attractive data points while hiding those that contradict the desired conclusion.',
    examples: [
      'A pharmaceutical company publishes only trials showing positive results and buries negative ones.',
      'A politician cites economic data from favorable time periods while ignoring unfavorable ones.',
      'A fund manager advertises their best-performing funds while quietly closing their worst performers.',
    ],
    research:
      'Publication bias in scientific research is a well-documented form of cherry picking. Ben Goldacre\'s "Bad Pharma" exposed how selectively reported trial results distort medical knowledge.',
    defense:
      'Always ask: "What data might be missing?" Demand the complete dataset, not just the highlights. Look for pre-registered studies and comprehensive reporting.',
    relatedBiasIds: [
      'confirmation-bias',
      'survivorship-bias',
      'self-selection-bias',
      'story-bias',
    ],
  },
  {
    id: 'fallacy-of-single-cause',
    name: 'Fallacy of Single Cause',
    chapter: 96,
    category: 'causal-reasoning',
    summary:
      'We attribute complex events to a single cause when, in reality, most outcomes result from multiple interacting factors.',
    examples: [
      'Blaming a recession entirely on one government policy, ignoring dozens of contributing factors.',
      'Attributing a company\'s success solely to its CEO, ignoring market conditions, employees, and timing.',
      'Explaining a war as caused by a single assassination, ignoring the complex web of alliances and tensions.',
    ],
    research:
      'Systems thinking, as developed by Donella Meadows and Peter Senge, emphasizes that complex outcomes emerge from the interaction of many factors. The fallacy is related to the fundamental attribution error.',
    defense:
      'For any significant outcome, list at least five contributing causes. Use fishbone diagrams or other root cause analysis tools to map complexity.',
    relatedBiasIds: [
      'false-causality',
      'fundamental-attribution-error',
      'story-bias',
      'association-bias',
    ],
  },
  {
    id: 'intention-to-treat-error',
    name: 'Intention-to-Treat Error',
    chapter: 97,
    category: 'professional',
    summary:
      'When participants drop out of a study or project, their results vanish, distorting the apparent success rate.',
    examples: [
      'A weight-loss program reports great results, but participants who dropped out (likely because it was not working) are excluded from the data.',
      'A school boasts high graduation rates, but students who transferred out are not counted as failures.',
      'A startup accelerator reports high success rates, but failed companies that dropped out of the program are not tracked.',
    ],
    research:
      'The intention-to-treat principle is a cornerstone of clinical trial methodology, requiring that all randomized participants be included in the analysis regardless of compliance or dropout.',
    defense:
      'Always ask what happened to dropouts and non-completers. Include them in any assessment. If they disappeared, assume the worst rather than excluding them.',
    relatedBiasIds: [
      'survivorship-bias',
      'cherry-picking',
      'self-selection-bias',
    ],
  },
  {
    id: 'news-illusion',
    name: 'News Illusion',
    chapter: 98,
    category: 'information-processing',
    summary:
      'We overvalue news despite its poor relevance to our lives and decisions, confusing it with important information.',
    examples: [
      'Consuming daily financial news leads to worse investment decisions than ignoring it entirely.',
      'People who follow news closely are no better at predicting future events than those who do not.',
      'The news cycle focuses on dramatic but rare events (terrorism, plane crashes) while ignoring slow-moving, impactful trends (climate change, education quality).',
    ],
    research:
      'Dobelli argues that news is to the mind what sugar is to the body: easy to consume, immediately gratifying, but ultimately harmful. Nassim Taleb similarly criticizes "noise" masquerading as "signal."',
    defense:
      'Replace news consumption with reading books, long-form articles, and research. The important information will reach you without daily news consumption.',
    relatedBiasIds: [
      'availability-bias',
      'salience-effect',
      'information-bias',
      'sleeper-effect',
    ],
  },
  {
    id: 'negative-knowledge',
    name: 'Negative Knowledge',
    chapter: 99,
    category: 'professional',
    summary:
      'Knowing what NOT to do is often more valuable than knowing what to do, as avoiding major errors is the surest path to success.',
    examples: [
      'Warren Buffett\'s investment success comes largely from avoiding bad investments rather than picking winners.',
      'In medicine, the Hippocratic principle "first, do no harm" prioritizes avoiding damage over attempting cures.',
      'Experienced pilots focus more on what can go wrong and how to avoid it than on optimal flight technique.',
    ],
    research:
      'Charlie Munger advocates for an "inversion" approach — solving problems by avoiding stupidity rather than seeking brilliance. Nassim Taleb\'s concept of "via negativa" emphasizes subtraction over addition.',
    defense:
      'Maintain a list of mistakes to avoid. Study failures more than successes. Ask "What should I NOT do?" before asking "What should I do?"',
    relatedBiasIds: [
      'survivorship-bias',
      'black-swan',
      'planning-fallacy',
      'overconfidence-effect',
    ],
  },
];

export const biasMap = new Map<string, Bias>(
  biases.map((b) => [b.id, b])
);
