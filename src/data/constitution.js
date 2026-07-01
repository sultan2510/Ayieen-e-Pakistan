export const preamble = {
  title: "Preamble",
  text: `Whereas sovereignty over the entire Universe belongs to Almighty Allah alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust;

And whereas it is the will of the people of Pakistan to establish an order wherein the State shall exercise its powers and authority through the chosen representatives of the people;

And whereas the said will of the people can only be fully achieved when the principles of democracy, freedom, equality, tolerance and social justice, as enunciated by Islam, shall be fully observed;

And whereas the Muslims shall be enabled to order their lives in the individual and collective spheres in accordance with the teachings and requirements of Islam as set out in the Holy Quran and Sunnah;

And whereas adequate provision shall be made for the minorities freely to profess and practise their religions and develop their cultures;

And whereas the territories now included in or in accession with Pakistan and such other territories as may hereafter be included in or accede to Pakistan shall form a Federation wherein the units will be autonomous with such boundaries and limitations on their powers and authority as may be prescribed;

Now, therefore, we, the people of Pakistan, Do hereby, through our representatives in the National Assembly, adopt, enact and give to ourselves, this Constitution.`,
  summary: "The Preamble is the soul of Pakistan's Constitution. It declares that sovereignty belongs only to Allah, and the people exercise authority within His limits as a sacred trust. It commits Pakistan to democracy, freedom, equality, tolerance, and Islamic social justice. It guarantees minorities the right to practice their religion freely, promises an autonomous federal structure, and is the foundation upon which all constitutional provisions rest. The Objectives Resolution (1949) became part of the Constitution through Article 2A."
};

export const articles = [
  // ==================== PART I: INTRODUCTORY ====================
  {
    id: 1, number: "1", title: "The Republic and its territories",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "Pakistan is a federal republic officially named the 'Islamic Republic of Pakistan'. It consists of the Provinces of Balochistan, Khyber Pakhtunkhwa, Punjab and Sindh; the Islamabad Capital Territory; Gilgit-Baltistan; and Azad Jammu & Kashmir. The territories of Pakistan are inalienable — no part can be separated from the federation.",
    keywords: ["republic", "territory", "federation", "provinces", "Islamabad", "Pakistan", "name"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 2, number: "2", title: "Islam shall be State religion",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "Islam is declared the state religion of Pakistan. This means the state must conduct its affairs in accordance with Islamic principles. It does not, however, impose religion on non-Muslim citizens, who retain their own religious freedom under Article 20.",
    keywords: ["Islam", "state religion", "religion"],
    amendedBy: []
  },
  {
    id: 3, number: "2A", title: "The Objectives Resolution to form part of substantive provisions",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "The Objectives Resolution of 1949 — which declares sovereignty belongs to Allah alone — is made a substantive and operative part of the Constitution, not just a preamble. This means courts can use it to interpret laws. It was inserted by the 8th Amendment in 1985 under General Zia-ul-Haq.",
    keywords: ["Objectives Resolution", "sovereignty", "Allah", "Islamic", "substantive"],
    amendedBy: ["8th Amendment 1985"]
  },
  {
    id: 4, number: "3", title: "Elimination of exploitation",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "The State is obligated to eliminate all forms of exploitation. It sets the guiding principle that every person should contribute according to their ability and receive according to their work — reflecting a commitment to economic justice and fair labor standards.",
    keywords: ["exploitation", "labor", "economic justice", "work"],
    amendedBy: []
  },
  {
    id: 5, number: "4", title: "Right of individuals to be dealt with in accordance with law",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "Every person — citizen or foreigner — has the right to be treated only as the law dictates. No action can harm a person's life, liberty, body, reputation, or property without legal authority. This is the fundamental rule-of-law provision: even the government cannot act against you without legal justification.",
    keywords: ["rule of law", "liberty", "property", "legal authority", "rights"],
    amendedBy: []
  },
  {
    id: 6, number: "5", title: "Loyalty to State and obedience to Constitution",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "Loyalty to Pakistan and obedience to the Constitution is the basic duty of every citizen wherever they are. Every person in Pakistan — whether citizen or not — must obey the Constitution and the law. This creates a two-way obligation: citizens must be loyal, and the State must act constitutionally.",
    keywords: ["loyalty", "obedience", "citizen", "duty", "constitution"],
    amendedBy: []
  },
  {
    id: 7, number: "6", title: "High treason",
    part: "I", partTitle: "Introductory", chapter: null, chapterTitle: null,
    status: "active",
    summary: "Anyone who abrogates, suspends, subverts, or conspires to overthrow the Constitution by force or unconstitutional means commits high treason — the most serious crime in Pakistan. Crucially, the 18th Amendment added that anyone who aids, abets, or collaborates in such acts is also guilty of high treason. Courts cannot validate or condone acts of high treason. This article directly targets military coups.",
    keywords: ["high treason", "coup", "unconstitutional", "abrogation", "subversion", "force"],
    amendedBy: ["18th Amendment 2010"]
  },

  // ==================== PART II, CHAPTER 1: FUNDAMENTAL RIGHTS ====================
  {
    id: 8, number: "7", title: "Definition of the State",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "For purposes of Fundamental Rights, 'the State' includes the Federal Government, Parliament, Provincial Governments, Provincial Assemblies, and all local and other authorities in Pakistan. This is important because Fundamental Rights apply against all these entities — no level of government can violate your constitutional rights.",
    keywords: ["state", "government", "definition", "parliament", "provincial"],
    amendedBy: []
  },
  {
    id: 9, number: "8", title: "Laws inconsistent with or in derogation of fundamental rights",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Any law that takes away or curtails fundamental rights is void to the extent of the inconsistency. The State cannot make any law that violates fundamental rights. This is the 'supremacy clause' for rights — it makes the judiciary the guardian of fundamental rights against legislative overreach. However, laws listed in the First Schedule are exempt.",
    keywords: ["void", "inconsistency", "supremacy", "rights", "judiciary", "law"],
    amendedBy: []
  },
  {
    id: 10, number: "9", title: "Security of person",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "No person can be deprived of life or liberty except in accordance with law. This is one of the most fundamental rights — your physical freedom and your life cannot be taken away without proper legal process. Police cannot arrest you, and courts cannot imprison you, without legal authority.",
    keywords: ["security", "life", "liberty", "arrest", "detention", "deprivation"],
    amendedBy: []
  },
  {
    id: 11, number: "10", title: "Safeguards as to arrest and detention",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "When arrested, you have the right to be told why you are being arrested. You must be produced before a Magistrate within 24 hours. You have the right to consult a lawyer of your choice. You cannot be detained for more than 24 hours without a Magistrate's order. Special rules apply for 'preventive detention' which must be reviewed by a Review Board. These are your Miranda rights under Pakistan's Constitution.",
    keywords: ["arrest", "detention", "magistrate", "24 hours", "lawyer", "preventive detention"],
    amendedBy: []
  },
  {
    id: 12, number: "10A", title: "Right to fair trial",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every person has the right to a fair trial and due process in criminal and civil proceedings. This right was added by the 18th Amendment in 2010 and ensures that courts must be fair, impartial, and follow proper procedures. It covers the right to be heard, access to justice, and an impartial judge.",
    keywords: ["fair trial", "due process", "justice", "court", "impartial"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 13, number: "11", title: "Slavery, forced labour, etc. prohibited",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Slavery is abolished and forbidden. No one can be forced to work against their will. Trafficking of human beings is prohibited. However, compulsory service for public purposes and prison labor (as punishment for a crime) are exceptions. Child labor in hazardous industries is also banned.",
    keywords: ["slavery", "forced labor", "trafficking", "child labor", "bonded labor"],
    amendedBy: []
  },
  {
    id: 14, number: "12", title: "Protection against retrospective punishment",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "You cannot be punished for an act that was not a crime when you committed it. No law can make something illegal retroactively and then punish people for it. Also, you cannot be given a heavier punishment than what was prescribed at the time of the offence. This protects citizens from arbitrary government action through retroactive laws.",
    keywords: ["retrospective", "retroactive", "punishment", "crime", "ex post facto"],
    amendedBy: []
  },
  {
    id: 15, number: "13", title: "Protection against double punishment and self-incrimination",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "You cannot be tried or punished twice for the same offence ('double jeopardy'). You also cannot be compelled to be a witness against yourself in criminal cases (right against self-incrimination). These are classic protections against government overreach in criminal proceedings.",
    keywords: ["double jeopardy", "self-incrimination", "witness", "trial", "punishment"],
    amendedBy: []
  },
  {
    id: 16, number: "14", title: "Inviolability of dignity of man, etc.",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Human dignity is inviolable. No person can be subjected to torture for the purpose of extracting evidence. This article upholds the inherent worth of every human being and explicitly bans torture by state authorities during investigations or detention.",
    keywords: ["dignity", "torture", "evidence", "human rights", "inviolable"],
    amendedBy: []
  },
  {
    id: 17, number: "15", title: "Freedom of movement",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to move freely throughout Pakistan and to reside and settle in any part of the country. This freedom can only be restricted in the public interest, as defined by law. It prevents the government from creating internal travel bans or forcing people to live in certain areas.",
    keywords: ["movement", "travel", "freedom", "reside", "settle", "citizen"],
    amendedBy: []
  },
  {
    id: 18, number: "16", title: "Freedom of assembly",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to assemble peacefully and without arms. This right can be restricted in the interest of public order. It protects the right to hold protests, rallies, and public meetings, but assemblies that are armed or violent are not protected.",
    keywords: ["assembly", "protest", "peaceful", "rally", "public order"],
    amendedBy: []
  },
  {
    id: 19, number: "17", title: "Freedom of association",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to form associations and unions. Political parties can be formed subject to reasonable legal restrictions. The State can ban a political party that acts against sovereignty, integrity, or security of Pakistan. This article is the constitutional basis for political parties, trade unions, and civil society organizations.",
    keywords: ["association", "union", "political party", "trade union", "freedom"],
    amendedBy: []
  },
  {
    id: 20, number: "18", title: "Freedom of trade, business or profession",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to enter upon any lawful profession or occupation, and to conduct any lawful trade or business. Restrictions can be imposed through licensing, qualification requirements, or for public interest. This article protects economic freedom and the right to earn a living.",
    keywords: ["trade", "business", "profession", "occupation", "economic freedom"],
    amendedBy: []
  },
  {
    id: 21, number: "19", title: "Freedom of speech",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to freedom of speech and expression. This freedom can be restricted in the interests of the glory of Islam, security, public order, decency, morality, or relations with foreign states. It is the constitutional basis for press freedom, but also has broader restrictions compared to some other constitutions.",
    keywords: ["freedom of speech", "expression", "press freedom", "media", "censorship"],
    amendedBy: []
  },
  {
    id: 22, number: "19A", title: "Right to information",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to access information in all matters of public importance, subject to regulations and reasonable restrictions. Added by the 18th Amendment, this article is the constitutional basis for Pakistan's Freedom of Information laws and holds the government accountable to citizens.",
    keywords: ["information", "RTI", "transparency", "public", "access"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 23, number: "20", title: "Freedom to profess religion and to manage religious institutions",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to profess, practice, and propagate their religion subject to law, public order, and morality. Every religious denomination has the right to establish and manage its own religious institutions. This article protects religious freedom for all Pakistanis — Muslim and non-Muslim alike.",
    keywords: ["religion", "religious freedom", "minorities", "profess", "practice", "religious institutions"],
    amendedBy: []
  },
  {
    id: 24, number: "21", title: "Safeguard against taxation for religious purposes",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "No person can be compelled to pay special taxes for the benefit of a religion other than their own. The State cannot force a Hindu to pay taxes for mosque construction, or a Muslim to pay for temple maintenance. This separates state finance from religious funding.",
    keywords: ["taxation", "religion", "compulsion", "finance", "minority"],
    amendedBy: []
  },
  {
    id: 25, number: "22", title: "Safeguards as to educational institutions in respect of religion",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "No student can be required to attend religious classes or ceremonies of a religion other than their own. No educational institution receiving state grants can discriminate on grounds of religion in admission. Religious institutions can however provide religious education for their own community. This balances secular education with religious freedom.",
    keywords: ["education", "religion", "school", "discrimination", "admission", "minority"],
    amendedBy: []
  },
  {
    id: 26, number: "23", title: "Provision as to property",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Every citizen has the right to acquire, hold, and dispose of property in any part of Pakistan, subject to the Constitution and any reasonable legal restrictions. This protects the right to own property across provincial boundaries.",
    keywords: ["property", "acquire", "dispose", "ownership", "citizen"],
    amendedBy: []
  },
  {
    id: 27, number: "24", title: "Protection of property rights",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "No person can be deprived of their property except by law. The government can compulsorily acquire or requisition private property only for public purposes and only by paying fair compensation. Any property acquisition law must provide a fair value for what is taken. This protects citizens from arbitrary government seizure of their assets.",
    keywords: ["property rights", "compulsory acquisition", "compensation", "seizure", "government"],
    amendedBy: []
  },
  {
    id: 28, number: "25", title: "Equality of citizens",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "All citizens are equal before the law and entitled to equal protection of the law. There shall be no discrimination on the basis of sex. Nothing prevents the State from making special provisions for the protection of women and children. This is Pakistan's equal protection clause — the constitutional guarantee of non-discrimination.",
    keywords: ["equality", "equal protection", "discrimination", "sex", "women", "citizens"],
    amendedBy: []
  },
  {
    id: 29, number: "25A", title: "Right to education",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "The State shall provide free and compulsory education to all children between the ages of 5 and 16 years. Added by the 18th Amendment in 2010, this makes education a fundamental right — not just a policy goal. The government is constitutionally obligated to ensure every child gets basic education.",
    keywords: ["education", "children", "compulsory", "free", "right to education", "school"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 30, number: "26", title: "Non-discrimination in respect of access to public places",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "No citizen can be denied access to public places — such as shops, restaurants, hotels, roads, public parks, and places of public entertainment — on grounds only of race, religion, caste, sex, or place of birth. The State itself cannot discriminate in access to public facilities.",
    keywords: ["discrimination", "public places", "access", "race", "religion", "caste", "equality"],
    amendedBy: []
  },
  {
    id: 31, number: "27", title: "Safeguard against discrimination in services",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "No citizen can be discriminated against in appointments to government service solely on grounds of race, religion, caste, sex, residence, or place of birth. However, reservations of posts for backward classes, women, minorities, and specific areas (provinces) are allowed as affirmative action. This protects citizens from discriminatory hiring in public service.",
    keywords: ["services", "government jobs", "discrimination", "appointment", "civil service", "quota"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 32, number: "28", title: "Preservation of language, script and culture",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "1", chapterTitle: "Fundamental Rights",
    status: "active",
    summary: "Citizens belonging to any linguistic or cultural group have the right to preserve and promote their language, script, and culture, and may establish institutions for that purpose. This protects Pakistan's linguistic diversity — Balochi, Sindhi, Punjabi, Pashto, and other languages all have constitutional protection.",
    keywords: ["language", "culture", "script", "minority", "preservation", "regional"],
    amendedBy: []
  },

  // ==================== PART II, CHAPTER 2: PRINCIPLES OF POLICY ====================
  {
    id: 33, number: "29", title: "Principles of Policy",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The Principles of Policy are guidelines for governance — they are not enforceable by courts but are the State's constitutional goals. The Federal and Provincial Governments must consider these principles when making laws and policies. Each year, the President's address to Parliament must include a report on steps taken to follow these principles.",
    keywords: ["principles", "policy", "guidelines", "governance", "non-justiciable"],
    amendedBy: []
  },
  {
    id: 34, number: "30", title: "Responsibility with respect to Principles of Policy",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "It is the responsibility of each organ and authority of the State — federal, provincial, or local — to act in accordance with the Principles of Policy. While courts cannot enforce them, these principles create political and moral accountability for all branches of government.",
    keywords: ["responsibility", "organ", "authority", "accountability", "policy"],
    amendedBy: []
  },
  {
    id: 35, number: "31", title: "Islamic way of life",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "Steps shall be taken to enable Muslims to order their lives in accordance with Islamic principles. The State shall: provide facilities to learn the Holy Quran, ensure Islamic teaching in schools, promote Islamic morality, and organize Zakat (obligatory charity), awqaf (religious endowments), and mosques properly.",
    keywords: ["Islamic", "Quran", "Sunnah", "Muslims", "Zakat", "morality", "education"],
    amendedBy: []
  },
  {
    id: 36, number: "32", title: "Promotion of local Government institutions",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall encourage local government institutions composed of elected representatives and shall devolve to them such powers as may be appropriate. This Principle of Policy pushes for grass-roots democracy and brings governance closer to the people.",
    keywords: ["local government", "decentralization", "elected", "local bodies", "municipalities"],
    amendedBy: []
  },
  {
    id: 37, number: "33", title: "Parochial and other similar prejudices to be discouraged",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall discourage parochial, racial, tribal, sectarian, and provincial prejudices among citizens. National unity and Pakistani identity should be promoted over narrow regional or sectarian loyalties. This principle aims to build a cohesive national identity.",
    keywords: ["parochialism", "sectarianism", "tribalism", "national unity", "prejudice"],
    amendedBy: []
  },
  {
    id: 38, number: "34", title: "Full participation of women in national life",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "Steps shall be taken to ensure full participation of women in all spheres of national life. This goes beyond just formal equality — the State is obligated to actively promote women's participation in politics, economy, education, and society.",
    keywords: ["women", "gender", "participation", "equality", "national life"],
    amendedBy: []
  },
  {
    id: 39, number: "35", title: "Protection of family, etc.",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall protect the marriage, the family, the mother, and the child. This recognizes the family as the fundamental unit of society and commits the State to policies supporting child welfare, maternal health, and the institution of marriage.",
    keywords: ["family", "marriage", "mother", "child", "protection", "welfare"],
    amendedBy: []
  },
  {
    id: 40, number: "36", title: "Protection of minorities",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall safeguard the legitimate rights and interests of minorities, including their due representation in the federal and provincial services. This creates a positive obligation to protect religious and ethnic minorities — Hindus, Christians, Sikhs, Ahmedis, Parsis, and others.",
    keywords: ["minorities", "religious minorities", "protection", "representation", "rights"],
    amendedBy: []
  },
  {
    id: 41, number: "37", title: "Promotion of social justice and eradication of social evils",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall: provide inexpensive and speedy justice; remove illiteracy and provide free secondary education; ensure just and humane conditions of work; make provision for securing just and humane conditions of work, for maternity benefits, and for sick, infirm and unemployed persons; discourage prostitution, gambling, and drug use; and prevent begging.",
    keywords: ["social justice", "education", "labor rights", "justice system", "gambling", "drugs", "social evils"],
    amendedBy: []
  },
  {
    id: 42, number: "38", title: "Promotion of social and economic well-being",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall: secure well-being of the people by raising standards of living; prevent concentration of wealth in few hands; ensure equitable adjustment of rights between employers and employees; provide basic necessities to those unable to earn their livelihood; reduce disparity in incomes; and eliminate Riba (interest). This is Pakistan's constitutional commitment to economic equality.",
    keywords: ["economic well-being", "poverty", "wealth", "riba", "interest", "equality", "employment"],
    amendedBy: []
  },
  {
    id: 43, number: "39", title: "Participation of people in Armed Forces",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "Steps shall be taken to enable people from all parts of Pakistan to participate in the Armed Forces. This promotes national integration through the military and ensures the Armed Forces reflect Pakistan's geographic and ethnic diversity.",
    keywords: ["armed forces", "military", "participation", "provinces", "national integration"],
    amendedBy: []
  },
  {
    id: 44, number: "40", title: "Strengthening bonds with Muslim world and promoting international peace",
    part: "II", partTitle: "Fundamental Rights and Principles of Policy", chapter: "2", chapterTitle: "Principles of Policy",
    status: "active",
    summary: "The State shall endeavor to strengthen fraternal relations with Muslim countries, promote Muslim unity, and support the struggle of Muslim peoples worldwide. Pakistan shall also foster good relations with all nations, respect international law, and work for international peace and security.",
    keywords: ["Muslim world", "OIC", "international peace", "foreign policy", "Islamic solidarity"],
    amendedBy: []
  },

  // ==================== PART III, CHAPTER 1: THE PRESIDENT ====================
  {
    id: 45, number: "41", title: "The President",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "There shall be a President of Pakistan who is the constitutional Head of State. The President must be a Muslim, not less than 45 years of age, and qualified to be elected as a member of the National Assembly. The President is elected by an Electoral College consisting of members of both houses of Parliament and Provincial Assemblies.",
    keywords: ["President", "head of state", "election", "Muslim", "electoral college"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 46, number: "42", title: "Oath of President",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "Before taking office, the President must take an oath to preserve, protect, and defend the Constitution of Pakistan, and to perform the functions honestly. The oath is prescribed in the Third Schedule of the Constitution.",
    keywords: ["oath", "President", "Constitution", "Third Schedule"],
    amendedBy: []
  },
  {
    id: 47, number: "43", title: "President not to hold office of profit",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "The President cannot hold any other office of profit during their tenure. This ensures the President remains a full-time constitutional head of state without conflicts of interest from other employment.",
    keywords: ["President", "office of profit", "conflict of interest"],
    amendedBy: []
  },
  {
    id: 48, number: "44", title: "Term of office of President",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "The President holds office for a term of 5 years. A person cannot hold the office of President for more than two terms. If the President resigns or is removed, they leave office immediately. This term-limit provision prevents indefinite presidential tenure.",
    keywords: ["term", "President", "five years", "term limit"],
    amendedBy: []
  },
  {
    id: 49, number: "45", title: "President's power to grant pardon",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "The President has the power to grant pardons, reprieves, respites, and remissions of punishment to any person convicted by any court. This is the constitutional clemency power — the President can forgive or reduce sentences, similar to the Queen's prerogative of mercy.",
    keywords: ["pardon", "clemency", "mercy", "President", "conviction"],
    amendedBy: []
  },
  {
    id: 50, number: "46", title: "President to be kept informed",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "The Prime Minister must keep the President informed about all decisions of the Federal Cabinet and all legislative proposals. The President can request any information about governmental affairs. This ensures the Head of State remains informed even though executive power rests with the Prime Minister.",
    keywords: ["President", "Prime Minister", "information", "Cabinet", "informed"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 51, number: "47", title: "Removal or impeachment of President",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "The President can be removed through impeachment if they willfully violate the Constitution or are guilty of gross misconduct. A resolution must be moved in either House of Parliament with notice to the President. The President can appear and defend themselves. A two-thirds majority of the total membership of Parliament in joint sitting is required for removal.",
    keywords: ["impeachment", "removal", "President", "Parliament", "misconduct"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 52, number: "48", title: "President to act on advice, etc.",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "In the exercise of his functions, the President shall act on and in accordance with the advice of the Cabinet or the Prime Minister. This makes Pakistan a parliamentary democracy — the elected Prime Minister holds real executive power, while the President is a constitutional figurehead. The President can ask the Cabinet to reconsider advice but must ultimately act on it.",
    keywords: ["President", "Prime Minister", "advice", "parliamentary", "executive power", "Cabinet"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 53, number: "49", title: "Speaker National Assembly to act as President",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "1", chapterTitle: "The President",
    status: "active",
    summary: "If the President's office becomes vacant (death, resignation, removal), or if the President is absent or unable to perform functions, the Speaker of the National Assembly acts as President until a new one is elected or the President returns. The Chairman of the Senate acts if the Speaker is also unavailable.",
    keywords: ["Speaker", "acting President", "vacancy", "Senate Chairman"],
    amendedBy: ["18th Amendment 2010"]
  },

  // ==================== PART III, CHAPTER 2: PARLIAMENT ====================
  {
    id: 54, number: "50", title: "Parliament",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The Parliament of Pakistan, called Majlis-e-Shoora, consists of two houses: the National Assembly (lower house) and the Senate (upper house). Together with the President, these form the federal legislature. Parliament is the supreme law-making body of Pakistan.",
    keywords: ["Parliament", "Majlis-e-Shoora", "National Assembly", "Senate", "legislature"],
    amendedBy: []
  },
  {
    id: 55, number: "51", title: "National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The National Assembly consists of 336 seats: 266 general seats elected directly by voters, 60 seats reserved for women (allocated proportionally to parties), and 10 seats for non-Muslims (allocated proportionally). The 25th Amendment increased seats after the merger of FATA with KPK. Each province and the federal capital are allocated seats based on population.",
    keywords: ["National Assembly", "336 seats", "general seats", "women seats", "non-Muslim", "election"],
    amendedBy: ["25th Amendment 2018", "26th Amendment 2024"]
  },
  {
    id: 56, number: "52", title: "Duration of National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The National Assembly has a five-year term from the day of its first meeting. It can be dissolved earlier by the President on the advice of the Prime Minister. After dissolution, elections must be held within 90 days. During a state of emergency, the term can be extended by one year at a time.",
    keywords: ["National Assembly", "5 years", "term", "dissolution", "elections", "90 days"],
    amendedBy: []
  },
  {
    id: 57, number: "53", title: "Speaker and Deputy Speaker of National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The National Assembly elects a Speaker and Deputy Speaker from among its members. The Speaker presides over sessions, maintains order, and plays a crucial constitutional role (acts as President in certain circumstances). Both are elected immediately after the first sitting of a new Assembly.",
    keywords: ["Speaker", "Deputy Speaker", "National Assembly", "presiding officer"],
    amendedBy: []
  },
  {
    id: 58, number: "54", title: "Sessions of Majlis-e-Shoora (Parliament)",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The President summons each house of Parliament to meet at least three times a year, with no more than 120 days between sessions. The President summons joint sittings when required. Either House can also be summoned if demanded by one-quarter of its total membership.",
    keywords: ["session", "Parliament", "summon", "joint sitting", "meeting"],
    amendedBy: []
  },
  {
    id: 59, number: "55", title: "Voting in Assembly and quorum",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "All decisions in the National Assembly are made by a majority of members present and voting. The quorum (minimum attendance required) is one-fourth of the total membership. If quorum is not met, the Speaker must suspend the sitting. The Speaker does not normally vote but can cast a deciding vote in a tie.",
    keywords: ["voting", "quorum", "majority", "Assembly", "Speaker"],
    amendedBy: []
  },
  {
    id: 60, number: "56", title: "Address by President",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The President addresses the joint sitting of Parliament at the beginning of each new parliamentary year. The address outlines government policy and must include a report on steps taken towards the Principles of Policy.",
    keywords: ["President's address", "joint sitting", "policy", "Parliament"],
    amendedBy: []
  },
  {
    id: 61, number: "57", title: "Right of Ministers to address Parliament",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Every Minister and Attorney-General of Pakistan has the right to speak in and otherwise take part in proceedings of either House of Parliament or a joint sitting, but only a member of a particular House can vote in that House.",
    keywords: ["Ministers", "Parliament", "speech", "right to address"],
    amendedBy: []
  },
  {
    id: 62, number: "58", title: "Dissolution of National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The President dissolves the National Assembly on the advice of the Prime Minister. After dissolution, elections must be held within 90 days. The President cannot dissolve the Assembly on their own — they must act on the PM's advice. This is a key feature of parliamentary democracy.",
    keywords: ["dissolution", "National Assembly", "Prime Minister", "elections", "90 days"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 63, number: "59", title: "The Senate",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The Senate is the upper house of Parliament and represents the federating units. It consists of 96 members: each of the four provinces elects 23 senators (including seats for technocrats, women, and non-Muslims), the Federal Capital Territory elects 4, and Gilgit-Baltistan and AJ&K each have representatives. The Senate is a permanent body — it cannot be dissolved.",
    keywords: ["Senate", "upper house", "provinces", "96 members", "federation", "permanent"],
    amendedBy: ["18th Amendment 2010", "25th Amendment 2018"]
  },
  {
    id: 64, number: "60", title: "Chairman and Deputy Chairman of Senate",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The Senate elects a Chairman and Deputy Chairman from among its members. The Chairman presides over Senate sessions and plays an important constitutional role — the Chairman acts as President if both the President and Speaker of the National Assembly are unavailable.",
    keywords: ["Senate", "Chairman", "Deputy Chairman", "presiding officer"],
    amendedBy: []
  },
  {
    id: 65, number: "61", title: "Procedure of Senate",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The provisions of Articles 53-55 (regarding the National Assembly's Speaker, sessions, voting, and quorum) apply to the Senate with appropriate modifications, with the Chairman of the Senate in place of the Speaker.",
    keywords: ["Senate", "procedure", "quorum", "Chairman"],
    amendedBy: []
  },
  {
    id: 66, number: "62", title: "Qualifications for membership of Majlis-e-Shoora",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "To be a member of Parliament, a person must be: a citizen of Pakistan, at least 25 years old (for NA), a Muslim who believes in Finality of Prophethood (Khatm-e-Nabuwwat), of good character, not engaged in moral turpitude, of adequate knowledge of Islamic teachings, righteous, not involved in spreading indecency, sagacious and non-profligate. These wide-ranging moral qualifications have been controversial, with courts interpreting them broadly.",
    keywords: ["qualifications", "member", "Parliament", "Muslim", "character", "age"],
    amendedBy: ["18th Amendment 2010", "20th Amendment 2012"]
  },
  {
    id: 67, number: "63", title: "Disqualifications for membership",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "A person is disqualified from Parliament if they: are of unsound mind, undischarged bankrupt, convicted of moral turpitude or election offences, hold an office of profit under the government, have dual nationality, have been dismissed from government service on corruption grounds, or have been declared a defaulter by a court. This article has been used to disqualify several high-profile politicians.",
    keywords: ["disqualification", "Parliament", "corrupt", "dual nationality", "conviction", "bankruptcy"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 68, number: "63A", title: "Disqualification on grounds of defection",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "A member of Parliament is disqualified if they vote against or abstain from voting against the direction of their parliamentary party on a vote of confidence, a money bill, a constitutional amendment bill, or any bill approved by the party. The party head must declare the defection and the Election Commission confirms disqualification. This is the anti-defection clause added to prevent floor-crossing.",
    keywords: ["defection", "floor-crossing", "party", "disqualification", "vote", "party line"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 69, number: "64", title: "Vacation of seats in National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "A seat in the National Assembly becomes vacant if the member: resigns in writing to the Speaker, loses their qualifications, or is absent without leave for 40 consecutive sitting days. By-elections must be held within 60 days of a seat becoming vacant.",
    keywords: ["vacancy", "seat", "National Assembly", "resignation", "by-election"],
    amendedBy: []
  },
  {
    id: 70, number: "65", title: "Oaths of members",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Members of Parliament must take the oath of their office before they can take their seat or vote. The oath requires them to bear true faith and allegiance to Pakistan, uphold the Constitution, and perform their duties honestly and faithfully. Non-Muslim members take an affirmation.",
    keywords: ["oath", "members", "Parliament", "affirmation", "allegiance"],
    amendedBy: []
  },
  {
    id: 71, number: "66", title: "Privileges of Parliament",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Members of Parliament enjoy complete freedom of speech in Parliament — they cannot be sued or prosecuted for anything said in Parliament. Proceedings of Parliament cannot be questioned in any court. This parliamentary privilege is essential for free debate and legislative independence.",
    keywords: ["privilege", "immunity", "freedom of speech", "Parliament", "court"],
    amendedBy: []
  },
  {
    id: 72, number: "67", title: "Rules of procedure of Parliament",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Each House of Parliament regulates its own procedure and conduct of business by making its own rules. These rules govern debates, voting procedures, committee systems, and all internal matters of Parliament.",
    keywords: ["rules of procedure", "Parliament", "debate", "committees", "internal"],
    amendedBy: []
  },
  {
    id: 73, number: "68", title: "Restriction on discussion in Parliament",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Parliament cannot discuss the conduct of judges of the Supreme Court or High Courts in the discharge of their duties. This protects judicial independence — Parliament cannot use its debating platform to attack sitting judges.",
    keywords: ["Parliament", "judges", "discussion", "restriction", "judicial independence"],
    amendedBy: []
  },
  {
    id: 74, number: "69", title: "Courts not to inquire into proceedings of Parliament",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "No court can question the validity of proceedings in Parliament. The internal proceedings of Parliament are immune from judicial review. This is the 'internal proceedings' privilege — courts cannot interfere with how Parliament conducts its business.",
    keywords: ["court", "Parliament", "proceedings", "immunity", "judicial review"],
    amendedBy: []
  },
  {
    id: 75, number: "70", title: "Introduction and passing of Bills",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Bills (proposed laws) can be introduced in either House, except Money Bills which must start in the National Assembly. A bill must be passed by both Houses. If the Senate passes a bill with amendments that the National Assembly disagrees with, the bill goes to a joint sitting. A majority in the joint sitting decides the outcome.",
    keywords: ["bill", "law", "legislation", "Parliament", "joint sitting", "money bill"],
    amendedBy: []
  },
  {
    id: 76, number: "71", title: "Joint sitting",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "If the two Houses disagree on a bill, or if 90 days pass without Senate action, the President can summon a joint sitting of Parliament. The Speaker of the National Assembly presides. A simple majority of total membership present decides the outcome. Joint sittings can also pass bills with special majorities.",
    keywords: ["joint sitting", "Parliament", "disagreement", "legislation", "Speaker"],
    amendedBy: []
  },
  {
    id: 77, number: "72", title: "Procedure with respect to Money Bills in National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Money Bills (bills dealing with taxation, government spending, and the national budget) can only be introduced in the National Assembly, not the Senate. The Senate can recommend amendments to Money Bills but cannot reject them. The National Assembly makes the final decision on Money Bills.",
    keywords: ["Money Bill", "budget", "taxation", "National Assembly", "finance"],
    amendedBy: []
  },
  {
    id: 78, number: "73", title: "Procedure with respect to other Bills",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Non-money bills can be introduced in either house. The President can require a bill to be deliberated in a joint sitting. If a bill is passed but the other house fails to pass it or passes it with amendments within 90 days, a joint sitting is convened.",
    keywords: ["bill", "legislation", "Senate", "National Assembly", "ordinary bill"],
    amendedBy: []
  },
  {
    id: 79, number: "74", title: "Federal Government's duty to supply information to Senate",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The Federal Government must provide information to the Senate about all federal matters. This ensures the Senate — which represents the provinces — is kept informed about the exercise of executive power at the federal level.",
    keywords: ["information", "Senate", "Federal Government", "transparency"],
    amendedBy: []
  },
  {
    id: 80, number: "75", title: "President's assent to Bills",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "After Parliament passes a bill, it goes to the President for assent. The President must give assent within 10 days, or return it for reconsideration. If Parliament again passes the bill (with or without changes), the President must give assent within 10 days. If no action is taken within 10 days of reconsideration, the bill is deemed assented to. The President cannot permanently block legislation.",
    keywords: ["President", "assent", "bill", "law", "reconsideration"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 81, number: "76", title: "Bill not to lapse on prorogation",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "A bill pending before either House of Parliament does not lapse (die) when Parliament is prorogued (temporarily suspended). It carries forward to the next session. However, all pending bills lapse when the National Assembly is dissolved.",
    keywords: ["bill", "lapse", "prorogation", "Parliament", "dissolution"],
    amendedBy: []
  },
  {
    id: 82, number: "77", title: "Tax to be levied by law only",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "No tax can be levied or collected except under the authority of an Act of Parliament or a Provincial Assembly. The government cannot impose new taxes by executive order — only Parliament can create taxes. This is a fundamental protection against taxation without representation.",
    keywords: ["tax", "law", "Parliament", "legislation", "no taxation without representation"],
    amendedBy: []
  },
  {
    id: 83, number: "78", title: "Consolidated Fund and Public Account",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "All revenues received by the Federal Government, all loans raised, and all money received by the government go into the Federal Consolidated Fund. Other public monies go into the Federal Public Account. This creates a transparent system for tracking government income and expenditure.",
    keywords: ["Consolidated Fund", "Public Account", "government revenue", "fiscal"],
    amendedBy: []
  },
  {
    id: 84, number: "79", title: "Custody of Federal Consolidated Fund and public moneys",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The custody and investment of the Federal Consolidated Fund, the payment of money into it, and the withdrawal of money from it shall be regulated by Act of Parliament, and until such provision is made, by rules made by the President.",
    keywords: ["Consolidated Fund", "custody", "withdrawal", "Parliament"],
    amendedBy: []
  },
  {
    id: 85, number: "80", title: "Annual Budget Statement",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Each year, the Federal Government must lay before the National Assembly a statement of estimated federal revenues and expenditures for the coming year — this is the national budget. The budget is a constitutional requirement, not just a political tradition.",
    keywords: ["budget", "annual budget", "expenditure", "revenue", "National Assembly"],
    amendedBy: []
  },
  {
    id: 86, number: "81", title: "Expenditure charged upon Federal Consolidated Fund",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Certain expenditures are automatically 'charged' to the Consolidated Fund and cannot be voted upon by Parliament — these include the President's salary, salaries of judges, interest on public debt, and audit costs. These payments are made without requiring annual parliamentary approval to protect these institutions' independence.",
    keywords: ["charged expenditure", "Consolidated Fund", "judges salary", "audit", "debt"],
    amendedBy: []
  },
  {
    id: 87, number: "82", title: "Procedure relating to Annual Budget Statement",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The National Assembly can approve, reduce, or reject budget demands for grants, but cannot increase them. Charged expenditure can only be discussed, not voted upon. This gives Parliament power to control government spending without being able to inflate the budget beyond what the government proposes.",
    keywords: ["budget procedure", "demand for grants", "Parliament", "spending"],
    amendedBy: []
  },
  {
    id: 88, number: "83", title: "Authentication of schedule of authorized expenditure",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "After Parliament approves the budget, the Prime Minister authenticates (officially certifies) the expenditure schedule. This authenticated schedule authorizes all government spending for the year and is the legal basis for government payments from the Consolidated Fund.",
    keywords: ["authentication", "expenditure", "budget", "schedule", "Prime Minister"],
    amendedBy: []
  },
  {
    id: 89, number: "84", title: "Supplementary Budget Statement",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "If government spending exceeds what was budgeted, or if the government needs to spend money not included in the original budget, a supplementary (additional) budget statement must be placed before Parliament for approval. The government cannot spend beyond the approved budget without supplementary approval.",
    keywords: ["supplementary budget", "additional spending", "Parliament", "extra expenditure"],
    amendedBy: []
  },
  {
    id: 90, number: "85", title: "Votes on account",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Before the full budget is passed, the National Assembly can authorize temporary spending (a 'vote on account') to keep government running. This allows the government to continue operating at the start of a financial year before the budget is formally approved.",
    keywords: ["vote on account", "budget", "interim spending", "government"],
    amendedBy: []
  },
  {
    id: 91, number: "86", title: "Power to authorize expenditure when National Assembly stands dissolved",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "When the National Assembly is dissolved (during caretaker government period), the President can authorize expenditure from the Consolidated Fund to meet urgent expenses until a new Assembly is elected and approves a budget. This ensures government continuity during elections.",
    keywords: ["expenditure", "dissolution", "caretaker", "President", "National Assembly"],
    amendedBy: []
  },
  {
    id: 92, number: "87", title: "Finance Committee",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "Each House of Parliament has a Finance Committee which controls expenditure relating to the services of that House. This ensures Parliament controls its own budget independently of the executive.",
    keywords: ["Finance Committee", "Parliament", "expenditure", "budget"],
    amendedBy: []
  },
  {
    id: 93, number: "88", title: "Audit",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "The Auditor-General of Pakistan audits all accounts of the Federal and Provincial Governments. Reports of the Auditor-General relating to federal accounts are submitted to the President, who lays them before Parliament. This constitutional audit function ensures financial accountability.",
    keywords: ["Auditor-General", "audit", "accounts", "Parliament", "accountability"],
    amendedBy: []
  },
  {
    id: 94, number: "89", title: "Power of President to promulgate Ordinances",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "2", chapterTitle: "Majlis-e-Shoora (Parliament)",
    status: "active",
    summary: "When Parliament is not in session and immediate action is needed, the President can issue an Ordinance (a temporary law). An Ordinance has the same force as an Act of Parliament but must be placed before Parliament when it next meets. If Parliament does not approve it within 120 days, the Ordinance expires. This prevents abuse of Ordinance-making power.",
    keywords: ["Ordinance", "President", "temporary law", "Parliament", "120 days"],
    amendedBy: ["18th Amendment 2010"]
  },

  // ==================== PART III, CHAPTER 3: FEDERAL GOVERNMENT ====================
  {
    id: 95, number: "90", title: "Executive authority of the Federation",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The executive authority of the Federation is exercised in the name of the President by the Federal Government. In practice, the Prime Minister and Cabinet exercise this authority. The President acts as constitutional head but executive power belongs to elected government.",
    keywords: ["executive authority", "Federation", "President", "Federal Government"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 96, number: "91", title: "The Cabinet",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "There shall be a Cabinet of Ministers, with the Prime Minister at its head, to aid and advise the President. The Prime Minister must be a Muslim member of the National Assembly who commands the confidence of the majority. The President appoints the Prime Minister. The Cabinet is collectively responsible to the National Assembly.",
    keywords: ["Cabinet", "Prime Minister", "Ministers", "National Assembly", "government"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 97, number: "92", title: "Federal Ministers and Ministers of State",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The President appoints Federal Ministers on the advice of the Prime Minister. Ministers must be members of Parliament (or become members within 6 months of appointment). The total number of Federal Ministers including the Prime Minister cannot exceed 11% of the total membership of Parliament.",
    keywords: ["Federal Ministers", "Cabinet size", "Prime Minister", "Parliament", "appointment"],
    amendedBy: ["20th Amendment 2012"]
  },
  {
    id: 98, number: "93", title: "Advisers",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The President may, on the advice of the Prime Minister, appoint up to five advisers. Advisers assist the government but do not have the same status as Federal Ministers. Their terms and conditions are determined by the President.",
    keywords: ["advisers", "Prime Minister", "President", "five", "appointment"],
    amendedBy: []
  },
  {
    id: 99, number: "94", title: "Prime Minister continuing in office",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The Prime Minister continues to hold office until they resign or until a successor takes office. After the National Assembly is dissolved, the Prime Minister and Cabinet continue in a caretaker role until the new government is formed after elections.",
    keywords: ["Prime Minister", "caretaker", "continuing", "office", "dissolution"],
    amendedBy: []
  },
  {
    id: 100, number: "95", title: "Vote of no-confidence against Prime Minister",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The National Assembly can remove the Prime Minister through a vote of no-confidence. A resolution must be submitted signed by at least 20% of NA members. The vote is taken not earlier than 3 days and not later than 7 days after the resolution is submitted. The PM is removed if a majority of total NA members vote against them. This is how Parliament holds the PM accountable.",
    keywords: ["vote of no-confidence", "Prime Minister", "removal", "National Assembly", "majority"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 101, number: "96", title: "Cabinet to be collectively responsible to National Assembly",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The Cabinet (all Ministers together) is collectively responsible to the National Assembly. This means: if the NA passes a vote of no-confidence, ALL ministers fall with the PM. Individual ministers can be removed by the PM but face no-confidence votes through the Cabinet as a whole.",
    keywords: ["Cabinet", "collective responsibility", "National Assembly", "accountability"],
    amendedBy: []
  },
  {
    id: 102, number: "97", title: "Extent of executive authority of Federation",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The executive authority of the Federation extends to all matters in the Federal Legislative List (Schedule IV, Part I). The Federation can also direct provinces in matters of national concern. This defines what the Federal Government can actually do — it cannot act outside its constitutional mandate.",
    keywords: ["executive authority", "Federal List", "Federation", "powers"],
    amendedBy: []
  },
  {
    id: 103, number: "98", title: "Federal Government's power to confer on Provincial Government",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The Federal Government can delegate functions to Provincial Governments or officers of a Province with their consent. This allows cooperative federalism where the federal government can ask provinces to implement federal programs.",
    keywords: ["delegation", "provinces", "Federal Government", "cooperative federalism"],
    amendedBy: []
  },
  {
    id: 104, number: "99", title: "Conduct of business of Federal Government",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "All executive actions of the Federal Government shall be expressed to be taken in the name of the President. The President shall make rules for the allocation of business to Federal Ministers and the conduct of government business. These Rules of Business govern how ministries operate.",
    keywords: ["Federal Government", "business", "rules", "President", "ministries"],
    amendedBy: []
  },
  {
    id: 105, number: "100", title: "Attorney-General for Pakistan",
    part: "III", partTitle: "The Federation of Pakistan", chapter: "3", chapterTitle: "The Federal Government",
    status: "active",
    summary: "The President appoints the Attorney-General of Pakistan, who is the chief law officer of the Federal Government. The AG must be qualified to be a judge of the Supreme Court. The AG advises the government on legal matters, appears in courts on behalf of the government, and has the right to speak in Parliament.",
    keywords: ["Attorney-General", "law officer", "government", "Parliament", "legal"],
    amendedBy: []
  },

  // ==================== PART IV, CHAPTER 1: GOVERNORS ====================
  {
    id: 106, number: "101", title: "The Governor",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "Each Province has a Governor appointed by the President on the advice of the Prime Minister. The Governor is the constitutional head of the province. The Governor must be a Muslim, at least 35 years old, and a citizen of Pakistan. The 18th Amendment gave the PM the power of advice in Governor appointments.",
    keywords: ["Governor", "Province", "President", "Prime Minister", "appointment"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 107, number: "102", title: "Oath of Governor",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "Before taking office, a Governor must take an oath to preserve, protect, and defend the Constitution and to perform their duties faithfully. The oath is prescribed in the Third Schedule.",
    keywords: ["oath", "Governor", "Constitution", "Third Schedule"],
    amendedBy: []
  },
  {
    id: 108, number: "103", title: "Governor not to hold office of profit",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "The Governor cannot hold any other office of profit during their tenure. This ensures the Governor's full attention to constitutional duties without conflicts of interest.",
    keywords: ["Governor", "office of profit", "conflict of interest"],
    amendedBy: []
  },
  {
    id: 109, number: "104", title: "Term of office of Governor",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "A Governor holds office during the pleasure of the President — meaning the President (on PM's advice) can remove a Governor at any time. Governors do not have a fixed term like the President. This gives the Federal Government control over the composition of provincial leadership.",
    keywords: ["Governor", "term", "pleasure of President", "removal"],
    amendedBy: []
  },
  {
    id: 110, number: "105", title: "Governor to act on advice, etc.",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "In exercising their functions, the Governor must act on the advice of the Provincial Cabinet and Chief Minister. The Governor is a constitutional head — real executive power in the province belongs to the elected Chief Minister. The Governor's independent role is limited to specific constitutional functions.",
    keywords: ["Governor", "Chief Minister", "Provincial Cabinet", "advice", "parliamentary"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 111, number: "106", title: "Constitution of Provincial Assemblies",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "Each Province has its own Provincial Assembly elected by direct vote. Punjab has 371 seats, Sindh has 168, Khyber Pakhtunkhwa has 145 (after 25th Amendment adding ex-FATA seats), and Balochistan has 65. Each Assembly includes reserved seats for women and non-Muslims allocated to parties proportionally.",
    keywords: ["Provincial Assembly", "Punjab", "Sindh", "KPK", "Balochistan", "seats", "election"],
    amendedBy: ["18th Amendment 2010", "25th Amendment 2018"]
  },
  {
    id: 112, number: "107", title: "Duration of Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "A Provincial Assembly has a five-year term from the date of its first meeting. It can be dissolved earlier by the Governor on the advice of the Chief Minister. After dissolution, elections must be held within 90 days.",
    keywords: ["Provincial Assembly", "5 years", "term", "dissolution", "elections"],
    amendedBy: []
  },
  {
    id: 113, number: "108", title: "Speaker and Deputy Speaker of Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "Each Provincial Assembly elects a Speaker and Deputy Speaker from among its members. The Speaker presides over sessions and maintains order in the provincial legislature.",
    keywords: ["Speaker", "Deputy Speaker", "Provincial Assembly", "presiding officer"],
    amendedBy: []
  },
  {
    id: 114, number: "109", title: "Summoning and prorogation of Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "The Governor summons the Provincial Assembly to meet. The Assembly must meet at least three times a year with no more than 120 days between sessions. The Governor can also prorogue (temporarily suspend) the Assembly.",
    keywords: ["Provincial Assembly", "summoning", "prorogation", "sessions", "Governor"],
    amendedBy: []
  },
  {
    id: 115, number: "110", title: "Voting in Assembly and quorum",
    part: "IV", partTitle: "The Provinces", chapter: "1", chapterTitle: "The Governors",
    status: "active",
    summary: "Decisions in Provincial Assemblies are made by majority of members present and voting. Quorum is one-fourth of total membership. If quorum is not present, the Speaker must suspend the sitting.",
    keywords: ["voting", "quorum", "Provincial Assembly", "majority"],
    amendedBy: []
  },

  // ==================== PART IV, CHAPTER 2: PROVINCIAL LEGISLATURES ====================
  {
    id: 116, number: "111", title: "Address by Governor",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Governor addresses the Provincial Assembly at the beginning of each year and after each general election. The address outlines the provincial government's policy and legislative program.",
    keywords: ["Governor", "address", "Provincial Assembly", "policy"],
    amendedBy: []
  },
  {
    id: 117, number: "112", title: "Dissolution of Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Governor dissolves the Provincial Assembly on the advice of the Chief Minister. If the Chief Minister loses confidence of the Assembly and no new CM can be elected, the Governor can also dissolve the Assembly. After dissolution, elections must be held within 90 days.",
    keywords: ["dissolution", "Provincial Assembly", "Chief Minister", "Governor", "elections"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 118, number: "113", title: "Qualifications for membership of Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Qualifications for Provincial Assembly membership mirror those for Parliament (Article 62) — the same moral, religious, and age requirements apply. Members must be at least 25 years old and citizens registered in the relevant constituency.",
    keywords: ["qualifications", "Provincial Assembly", "member", "citizen"],
    amendedBy: []
  },
  {
    id: 119, number: "114", title: "Disqualifications for membership of Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Disqualifications for Provincial Assembly membership mirror those for Parliament (Article 63). Members can be disqualified for dual nationality, bankruptcy, corruption convictions, defection, and other grounds.",
    keywords: ["disqualification", "Provincial Assembly", "corruption", "dual nationality"],
    amendedBy: []
  },
  {
    id: 120, number: "115", title: "Procedure with respect to Money Bills in Provincial Assembly",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Provincial Money Bills (provincial budget and taxation bills) can only be introduced in the Provincial Assembly on the recommendation of the Governor. Money bills deal with provincial taxation and the provincial consolidated fund.",
    keywords: ["Money Bill", "Province", "budget", "Governor", "taxation"],
    amendedBy: []
  },
  {
    id: 121, number: "116", title: "Governor's assent to Bills",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Provincial bills passed by the Assembly go to the Governor for assent. The Governor must give assent within 10 days or return it for reconsideration. If the Assembly passes it again, the Governor must give assent within 10 days. Bills reserved for the President's consideration are decided by the President.",
    keywords: ["Governor", "assent", "bill", "province", "legislation"],
    amendedBy: []
  },
  {
    id: 122, number: "117", title: "Provincial bill not to lapse on prorogation",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Bills pending before a Provincial Assembly do not lapse when the Assembly is prorogued — they carry forward to the next session. But all bills lapse when the Assembly is dissolved.",
    keywords: ["bill", "lapse", "Provincial Assembly", "prorogation"],
    amendedBy: []
  },
  {
    id: 123, number: "118", title: "Provincial Consolidated Fund and Public Account",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Each Province has its own Consolidated Fund into which all provincial revenues and loans flow, and a Provincial Public Account for other public moneys. This mirrors the federal financial structure at the provincial level.",
    keywords: ["Provincial Consolidated Fund", "Public Account", "provincial revenue"],
    amendedBy: []
  },
  {
    id: 124, number: "119", title: "Custody of Provincial Consolidated Fund",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The custody and regulation of the Provincial Consolidated Fund shall be by Act of the Provincial Assembly. This gives the provincial legislature control over how provincial finances are managed.",
    keywords: ["Provincial Consolidated Fund", "custody", "Provincial Assembly"],
    amendedBy: []
  },
  {
    id: 125, number: "120", title: "Annual Budget Statement (Province)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Each year, the Provincial Government must place before the Provincial Assembly a statement of estimated revenues and expenditures — the provincial annual budget. This constitutional requirement applies to each of Pakistan's four provinces.",
    keywords: ["provincial budget", "annual budget", "Provincial Assembly", "expenditure", "revenue"],
    amendedBy: []
  },
  {
    id: 126, number: "121", title: "Expenditure charged on Provincial Consolidated Fund",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Certain provincial expenditures — including salaries of the Governor, High Court judges, Advocate-General, and debt charges — are automatically charged to the Provincial Consolidated Fund and cannot be voted down by the Assembly.",
    keywords: ["charged expenditure", "Provincial Consolidated Fund", "Governor salary", "judges"],
    amendedBy: []
  },
  {
    id: 127, number: "122", title: "Procedure relating to Annual Budget (Province)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Provincial Assembly can approve, reduce, or reject demands for grants in the provincial budget but cannot increase them. Charged expenditure can only be discussed, not voted upon. This mirrors the federal budget procedure.",
    keywords: ["provincial budget", "demand for grants", "Provincial Assembly", "procedure"],
    amendedBy: []
  },
  {
    id: 128, number: "123", title: "Authentication of schedule of authorized expenditure (Province)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "After the Provincial Assembly approves the budget, the Chief Minister authenticates the provincial expenditure schedule. This authenticated schedule authorizes all provincial government spending for the year.",
    keywords: ["authentication", "provincial expenditure", "Chief Minister", "budget"],
    amendedBy: []
  },
  {
    id: 129, number: "124", title: "Supplementary Budget (Province)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "If provincial spending exceeds what was budgeted, or new spending is needed, a supplementary provincial budget must be placed before the Provincial Assembly for approval.",
    keywords: ["supplementary budget", "province", "additional spending", "Provincial Assembly"],
    amendedBy: []
  },
  {
    id: 130, number: "125", title: "Votes on account (Province)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Before the provincial budget is passed, the Provincial Assembly can authorize temporary interim spending (a vote on account) to keep the provincial government running during budget deliberations.",
    keywords: ["vote on account", "provincial budget", "interim", "Provincial Assembly"],
    amendedBy: []
  },
  {
    id: 131, number: "126", title: "Power to authorize expenditure when Provincial Assembly dissolved",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "When a Provincial Assembly is dissolved, the Governor can authorize emergency spending from the Provincial Consolidated Fund to keep the provincial government running until a new Assembly is elected.",
    keywords: ["expenditure", "dissolution", "Governor", "Provincial Assembly", "caretaker"],
    amendedBy: []
  },
  {
    id: 132, number: "127", title: "Provisions of Articles 53 to 67 to apply to Provincial Assemblies",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The rules for the Speaker, sessions, quorum, voting, privileges, rules of procedure, restrictions on discussions, and courts not inquiring into parliamentary proceedings that apply to Parliament (Articles 53-67) also apply to Provincial Assemblies with appropriate modifications.",
    keywords: ["Provincial Assembly", "Speaker", "procedure", "privileges", "application"],
    amendedBy: []
  },
  {
    id: 133, number: "128", title: "Audit (Province)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Auditor-General of Pakistan also audits provincial government accounts. Reports on provincial accounts are submitted to the Governor, who places them before the Provincial Assembly. Provincial Public Accounts Committees review these audit reports.",
    keywords: ["Auditor-General", "provincial audit", "accounts", "Governor"],
    amendedBy: []
  },
  {
    id: 134, number: "129", title: "Executive authority of Province",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The executive authority of each Province is exercised by the Governor on behalf of the provincial government. In practice, the Chief Minister and Provincial Cabinet exercise day-to-day executive authority.",
    keywords: ["executive authority", "Province", "Governor", "Chief Minister"],
    amendedBy: []
  },
  {
    id: 135, number: "130", title: "The Provincial Cabinet",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "There shall be a Cabinet of Ministers for each Province with the Chief Minister at its head. The Chief Minister must be a Muslim member of the Provincial Assembly who commands majority support. The Governor appoints the CM. The Cabinet is collectively responsible to the Provincial Assembly.",
    keywords: ["Provincial Cabinet", "Chief Minister", "Ministers", "Provincial Assembly"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 136, number: "131", title: "Provincial Ministers",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Governor appoints Provincial Ministers on the advice of the Chief Minister. Ministers must be members of the Provincial Assembly. The total number of Ministers including the Chief Minister cannot exceed 11% of the total membership of the Provincial Assembly.",
    keywords: ["Provincial Ministers", "Chief Minister", "Governor", "Cabinet size"],
    amendedBy: []
  },
  {
    id: 137, number: "132", title: "Chief Minister continuing in office",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Chief Minister continues in office until they resign, are removed by a vote of no-confidence, or a new CM is elected. After dissolution, the CM acts in a caretaker capacity until a new government is formed.",
    keywords: ["Chief Minister", "caretaker", "continuing", "office"],
    amendedBy: []
  },
  {
    id: 138, number: "133", title: "Extent of executive authority of Province",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Provincial executive authority extends to all subjects on which the Province can legislate. After the 18th Amendment abolished the Concurrent Legislative List, provinces have broader executive authority over subjects transferred to them.",
    keywords: ["executive authority", "Province", "legislative powers"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 139, number: "134", title: "Provincial Government's power to confer authority",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Provincial Government can delegate functions to officers of the Federation or to local government authorities with their consent. This allows provinces to use federal machinery for implementing provincial programs.",
    keywords: ["delegation", "Provincial Government", "local government"],
    amendedBy: []
  },
  {
    id: 140, number: "135", title: "Conduct of business of Provincial Government",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "All executive actions of the Provincial Government are expressed in the name of the Governor. The Governor makes rules (Rules of Business) for allocating work among provincial departments and ministers.",
    keywords: ["Provincial Government", "Governor", "Rules of Business", "ministries"],
    amendedBy: []
  },
  {
    id: 141, number: "136", title: "Advocate-General for a Province",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "The Governor appoints an Advocate-General for each Province, who is the chief law officer of the provincial government. The AG advises the provincial government on legal matters and represents it in courts.",
    keywords: ["Advocate-General", "Province", "law officer", "Governor"],
    amendedBy: []
  },
  {
    id: 142, number: "137", title: "Power of Governor to promulgate Ordinances",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "When the Provincial Assembly is not in session, the Governor can issue Ordinances (temporary provincial laws) if circumstances require immediate action. These must be placed before the Assembly when it meets and expire within 120 days unless approved.",
    keywords: ["Ordinance", "Governor", "Provincial Assembly", "temporary law"],
    amendedBy: []
  },
  {
    id: 143, number: "138", title: "Omitted",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "omitted",
    summary: "This article has been omitted from the Constitution.",
    keywords: ["omitted"],
    amendedBy: []
  },
  {
    id: 144, number: "139", title: "Omitted",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "omitted",
    summary: "This article has been omitted from the Constitution.",
    keywords: ["omitted"],
    amendedBy: []
  },
  {
    id: 145, number: "140", title: "Local Government",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Each Provincial Government shall establish a system of local government to devolve political, administrative, and financial responsibility to local elected representatives. Each Province has its own Local Government Act that governs municipalities, district councils, and other local bodies.",
    keywords: ["local government", "municipalities", "district councils", "devolution", "elected"],
    amendedBy: []
  },
  {
    id: 146, number: "140A", title: "Local Government (constitutional requirement)",
    part: "IV", partTitle: "The Provinces", chapter: "2", chapterTitle: "Provincial Legislatures",
    status: "active",
    summary: "Each Province shall, by law, establish a local government system and devolve political, administrative, and financial responsibility and authority to the elected representatives of local governments. Added by the 18th Amendment, this makes meaningful local government a constitutional obligation.",
    keywords: ["local government", "devolution", "elected representatives", "financial", "18th Amendment"],
    amendedBy: ["18th Amendment 2010"]
  },

  // ==================== PART V: FEDERAL-PROVINCIAL RELATIONS ====================
  {
    id: 147, number: "141", title: "Extent of Federal and Provincial Legislative Powers",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "1", chapterTitle: "Distribution of Legislative Powers",
    status: "active",
    summary: "Parliament has exclusive power to make laws on matters in the Federal Legislative List. Provincial Assemblies have power to make laws on all other matters. The 18th Amendment abolished the Concurrent Legislative List — subjects that used to be on it were transferred to the provinces.",
    keywords: ["legislative powers", "Federal List", "provinces", "18th Amendment", "distribution"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 148, number: "142", title: "Subject-matter of Federal and Provincial laws",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "1", chapterTitle: "Distribution of Legislative Powers",
    status: "active",
    summary: "Parliament can make laws for the whole of Pakistan or any part of it. Provincial Assemblies can make laws only for their own Province. This determines territorial jurisdiction — federal law applies nationwide, provincial law applies only within that province.",
    keywords: ["territorial jurisdiction", "Parliament", "Province", "federal law", "provincial law"],
    amendedBy: []
  },
  {
    id: 149, number: "143", title: "Inconsistency between Federal and Provincial law",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "1", chapterTitle: "Distribution of Legislative Powers",
    status: "active",
    summary: "If a provincial law conflicts with a federal law, the federal law prevails and the provincial law is void to the extent of the inconsistency. Federal law is supreme over provincial law. However, if Parliament later changes the federal law, the provincial law can revive.",
    keywords: ["federal supremacy", "inconsistency", "provincial law", "federal law", "void"],
    amendedBy: []
  },
  {
    id: 150, number: "144", title: "Power of Parliament to legislate for two or more Provinces",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "1", chapterTitle: "Distribution of Legislative Powers",
    status: "active",
    summary: "If two or more Provincial Assemblies pass resolutions requesting Parliament to make a law on a provincial subject, Parliament can do so. This cooperative mechanism allows provinces to invite federal legislation on matters they want uniformity on.",
    keywords: ["Parliament", "provinces", "cooperative legislation", "resolution"],
    amendedBy: []
  },
  {
    id: 151, number: "145", title: "Power of President to direct Governor",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "1", chapterTitle: "Distribution of Legislative Powers",
    status: "active",
    summary: "The President can direct a Governor to exercise functions as the President's agent for specified purposes. This allows the Federal Government to use provincial machinery for federal matters in certain circumstances.",
    keywords: ["President", "Governor", "direction", "federal agent"],
    amendedBy: []
  },
  {
    id: 152, number: "146", title: "Power of Federation to confer powers on Provinces",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "The Federal Government can, with the consent of a Provincial Government, confer upon it powers relating to federal matters. This allows for cooperative arrangements where the federal government delegates implementation of federal policies to provinces.",
    keywords: ["delegation", "Federal Government", "Province", "powers", "consent"],
    amendedBy: []
  },
  {
    id: 153, number: "147", title: "Power of Provinces to entrust functions to Federation",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "A Province can entrust its functions to the Federal Government or its officers. This reverse delegation allows provinces to use federal machinery for provincial matters.",
    keywords: ["Province", "Federal Government", "entrust", "functions"],
    amendedBy: []
  },
  {
    id: 154, number: "148", title: "Obligation of Provinces",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "Every Province must exercise its executive authority in compliance with laws made by Parliament. Provinces must not impede or prejudice the executive authority of the Federation. This creates a cooperative but hierarchical relationship.",
    keywords: ["Province", "obligation", "Parliament", "executive authority"],
    amendedBy: []
  },
  {
    id: 155, number: "149", title: "Directions to Provinces in certain cases",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "The Federal Government can give directions to a Provincial Government to ensure compliance with laws made by Parliament. If a province fails to carry out federal directions, the Federal Government can take appropriate action — including invoking Article 234 (Governor's Rule).",
    keywords: ["directions", "Federal Government", "Province", "compliance", "Article 234"],
    amendedBy: []
  },
  {
    id: 156, number: "150", title: "Full faith and credit",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "Acts, records, and judicial proceedings of the Federation and of every Province shall be given full faith and credit throughout Pakistan. Official documents from one province must be recognized as valid in all other provinces — like how a driving license issued in Punjab is valid in Sindh.",
    keywords: ["full faith and credit", "inter-provincial", "recognition", "official documents"],
    amendedBy: []
  },
  {
    id: 157, number: "151", title: "Inter-provincial trade",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "No barriers can be placed on trade and commerce between the provinces. No provincial law can discriminate against persons or goods from other provinces. Provinces cannot levy taxes on goods imported from other provinces. Pakistan is a single economic market.",
    keywords: ["inter-provincial trade", "commerce", "barriers", "single market", "provinces"],
    amendedBy: []
  },
  {
    id: 158, number: "152", title: "River waters",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "2", chapterTitle: "Administrative Relations",
    status: "active",
    summary: "Complaints about interference with water supplies or drainage between provinces are resolved through federal arbitration. This is particularly important for irrigation-dependent provinces like Punjab and Sindh, where water distribution from rivers like the Indus is a perennial source of tension.",
    keywords: ["water", "rivers", "provinces", "irrigation", "Indus", "disputes"],
    amendedBy: []
  },
  {
    id: 159, number: "153", title: "National Finance Commission",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "The President shall constitute a National Finance Commission (NFC) consisting of the Finance Ministers of Federal and Provincial Governments, plus other members as appointed. The NFC meets periodically to decide how to distribute tax revenues between the Federation and the Provinces.",
    keywords: ["NFC", "National Finance Commission", "revenue sharing", "provinces", "fiscal federalism"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 160, number: "154", title: "Functions and meetings of NFC",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "The NFC recommends how to distribute proceeds of specified taxes (income tax, sales tax, wealth tax, etc.) between the Federation and provinces, and among the four provinces. The NFC Award (its decision on distribution formula) must be approved by the President. The current 7th NFC Award gives provinces 57.5% of divisible pool taxes.",
    keywords: ["NFC", "Award", "tax distribution", "provinces", "divisible pool"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 161, number: "155", title: "Complaints as to interference with water supplies",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "If a Province complains that a scheme affecting it in water supply, drainage, or flood control has been implemented without its consent, it can complain to the Council of Common Interests. Water disputes between provinces are treated as federal-level political matters.",
    keywords: ["water complaints", "Province", "Council of Common Interests", "irrigation"],
    amendedBy: []
  },
  {
    id: 162, number: "156", title: "National Economic Council",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "The President constitutes a National Economic Council (NEC) consisting of the Prime Minister, Chief Ministers, and other members. The NEC reviews the overall economic condition of the country, advises on financial, commercial, social, and economic policies, and approves the Annual Plan for the country's development.",
    keywords: ["National Economic Council", "NEC", "economic policy", "planning", "Prime Minister", "Chief Ministers"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 163, number: "157", title: "Electricity",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "The Federal Government may generate, transmit, and distribute electricity in any Province. A Province can set up electric power stations for its territory. The 18th Amendment strengthened provincial rights to generate and use electricity from their territories and to collect royalties on electricity.",
    keywords: ["electricity", "power", "Province", "Federal Government", "royalties"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 164, number: "158", title: "Gas",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "The Province in which a well-head of natural gas is situated has the first right to meet its requirements from that gas. Provinces producing natural gas are entitled to receive royalties from the Federal Government. This became important after the 18th Amendment strengthened provincial rights to natural gas revenues.",
    keywords: ["natural gas", "Province", "royalties", "well-head", "resources"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 165, number: "159", title: "Broadcasting and telecasting",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "After the 18th Amendment, broadcasting and television were transferred from the Federal List to the Provincial List, giving provinces the power to establish and regulate their own broadcast media. This devolved media regulation to the provincial level.",
    keywords: ["broadcasting", "television", "media", "Province", "devolution"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 166, number: "160", title: "National Finance Commission (detailed provisions)",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "Detailed provisions for the National Finance Commission, including that the share of each Province in the divisible pool shall not be less than the share received under the previous NFC Award. The 18th Amendment also required the NFC Award to be reviewed every five years.",
    keywords: ["NFC", "divisible pool", "provincial share", "five years"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 167, number: "161", title: "Natural gas and oil",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "Royalties in respect of natural gas extracted from a Province shall be paid to that Province. The Province where crude oil is extracted shall be paid their share of royalties. This is a major provision for Balochistan and KPK, which produce most of Pakistan's natural gas and oil.",
    keywords: ["oil", "gas", "royalties", "Province", "Balochistan", "KPK", "resources"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 168, number: "162", title: "Consent of Provinces to taxation",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "No Bill imposing or varying a tax which would affect provinces can be introduced in Parliament without the recommendation of the NFC. This prevents the Federal Government from unilaterally changing taxes in ways that harm provincial revenues.",
    keywords: ["taxation", "Province", "consent", "NFC", "Parliament", "fiscal"],
    amendedBy: []
  },
  {
    id: 169, number: "163", title: "Grants by Federation to Provinces",
    part: "V", partTitle: "Relations between the Federation and Provinces", chapter: "3", chapterTitle: "Financial Provisions",
    status: "active",
    summary: "The Federal Government may make grants to any Province for any purpose. These grants are over and above the NFC distribution and can be used for specific development projects or to help fiscally weaker provinces.",
    keywords: ["grants", "Federation", "Province", "development", "fiscal transfer"],
    amendedBy: []
  },

  // ==================== PART VI: THE JUDICATURE ====================
  {
    id: 170, number: "175", title: "Establishment and jurisdiction of Courts",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "There shall be a Supreme Court of Pakistan, a High Court for each Province, and such other courts as Parliament may establish by law. No court shall have any jurisdiction save as is, or is conferred on it by, the Constitution or law. Courts can only exercise the jurisdiction they are given — they cannot create new powers for themselves.",
    keywords: ["courts", "Supreme Court", "High Court", "jurisdiction", "establishment"],
    amendedBy: ["18th Amendment 2010", "19th Amendment 2011", "27th Amendment 2025"]
  },
  {
    id: 171, number: "175A", title: "Appointment of Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Judicial Commission of Pakistan recommends appointments of judges to the Supreme Court and High Courts. The Commission consists of the Chief Justice, senior judges, the Law Minister, Attorney-General, and other members. A Parliamentary Committee then confirms the recommendations. This replaced the old system where the President appointed judges on the CJ's recommendation. The 26th Amendment changed the composition significantly to include more parliamentary input.",
    keywords: ["Judicial Commission", "judges", "appointment", "Supreme Court", "Parliamentary Committee"],
    amendedBy: ["18th Amendment 2010", "19th Amendment 2011", "26th Amendment 2024", "27th Amendment 2025"]
  },
  {
    id: 172, number: "176", title: "Constitution of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court of Pakistan consists of the Chief Justice of Pakistan and other judges as determined by Act of Parliament. Currently, the Supreme Court has the Chief Justice and up to 16 other judges.",
    keywords: ["Supreme Court", "Chief Justice", "judges", "composition"],
    amendedBy: []
  },
  {
    id: 173, number: "177", title: "Appointment of Judges of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Chief Justice of Pakistan is appointed by the President and other judges of the Supreme Court are appointed by the President after consultation with the Chief Justice. After the 26th Amendment, the appointment process now involves the Judicial Commission and a Special Parliamentary Committee.",
    keywords: ["Supreme Court", "judges", "Chief Justice", "appointment", "President"],
    amendedBy: ["18th Amendment 2010", "26th Amendment 2024"]
  },
  {
    id: 174, number: "178", title: "Oath of Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "Every judge of the Supreme Court must take an oath before the President (for the CJ) or before the Chief Justice (for other judges) to discharge their duties without fear or favor, affection or ill-will, and to uphold the Constitution and law.",
    keywords: ["oath", "judges", "Supreme Court", "impartiality"],
    amendedBy: []
  },
  {
    id: 175, number: "179", title: "Retiring age (Supreme Court)",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "A judge of the Supreme Court must retire at the age of 65 years. This mandatory retirement age ensures regular turnover of the judiciary and protects judicial independence by preventing indefinite tenure.",
    keywords: ["retirement age", "Supreme Court", "65 years", "judges"],
    amendedBy: []
  },
  {
    id: 176, number: "180", title: "Acting Chief Justice",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "When the Chief Justice of Pakistan is absent or unable to perform functions, the President shall appoint the most senior available judge to act as Chief Justice. This ensures there is always a functioning head of the judiciary.",
    keywords: ["Acting Chief Justice", "Supreme Court", "absence"],
    amendedBy: []
  },
  {
    id: 177, number: "181", title: "Ad hoc Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "If a quorum of Supreme Court judges is not available to hear a case, the Chief Justice can request a High Court judge to sit with the Supreme Court as an ad hoc (temporary) judge for that case. This ensures cases can always be heard.",
    keywords: ["ad hoc judges", "Supreme Court", "quorum", "High Court"],
    amendedBy: []
  },
  {
    id: 178, number: "182", title: "Appointment of acting Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "If the number of Supreme Court judges falls below the required number, the President can appoint additional acting judges from among persons qualified to be Supreme Court judges, on the advice of the Chief Justice.",
    keywords: ["acting judges", "Supreme Court", "appointment"],
    amendedBy: []
  },
  {
    id: 179, number: "183", title: "Seat of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court of Pakistan sits in Islamabad, the federal capital. The Chief Justice can appoint bench/branches of the Supreme Court to sit in other cities. Branch registries exist in Karachi, Lahore, Peshawar, and Quetta.",
    keywords: ["Supreme Court", "Islamabad", "seat", "bench"],
    amendedBy: []
  },
  {
    id: 180, number: "184", title: "Original jurisdiction of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court has original jurisdiction (can hear a case for the first time) in disputes between provincial and federal governments. Most importantly, it has original jurisdiction for enforcement of Fundamental Rights in matters of 'public importance' — this is the basis for suo motu actions taken by the Supreme Court on matters of national importance. After the 27th Amendment, constitutional cases were transferred to the new Federal Constitutional Court.",
    keywords: ["original jurisdiction", "Supreme Court", "fundamental rights", "public importance", "suo motu"],
    amendedBy: ["27th Amendment 2025"]
  },
  {
    id: 181, number: "185", title: "Appellate jurisdiction of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court hears appeals from High Court judgments on constitutional questions, criminal matters where a death sentence or imprisonment of 7+ years has been given, and in any other case granted leave to appeal by the Supreme Court. It is Pakistan's final court of appeal.",
    keywords: ["appellate jurisdiction", "Supreme Court", "appeals", "High Court", "final court"],
    amendedBy: ["27th Amendment 2025"]
  },
  {
    id: 182, number: "186", title: "Advisory jurisdiction of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The President can refer a question of law to the Supreme Court for its opinion. The Supreme Court considers the question and reports its opinion to the President. This advisory jurisdiction allows the executive to get legal guidance without needing an actual case.",
    keywords: ["advisory jurisdiction", "Supreme Court", "opinion", "President", "legal"],
    amendedBy: []
  },
  {
    id: 183, number: "186A", title: "Power to transfer cases",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court can transfer any case or class of cases from one High Court to another High Court, or from the Supreme Court to a High Court. This power is used when a case involves parties from multiple provinces or requires a neutral forum.",
    keywords: ["transfer", "cases", "Supreme Court", "High Court"],
    amendedBy: []
  },
  {
    id: 184, number: "187", title: "Issue and execution of processes of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court can issue directions, orders, decrees, writs, and warrants throughout Pakistan for the doing of justice. All lower courts and authorities must comply with Supreme Court orders.",
    keywords: ["Supreme Court", "orders", "writs", "execution", "compliance"],
    amendedBy: []
  },
  {
    id: 185, number: "188", title: "Review of judgments by Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court can review any judgment or order it has given. A review petition asks the same court to reconsider its decision. This is different from an appeal — the same court reviews its own decision, usually when there is a clear error or new information.",
    keywords: ["review", "Supreme Court", "judgment", "reconsideration"],
    amendedBy: []
  },
  {
    id: 186, number: "189", title: "Decisions of Supreme Court binding",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "Any decision of the Supreme Court shall be binding on all other courts in Pakistan. This creates a clear judicial hierarchy — High Courts and lower courts must follow Supreme Court precedents. This is the doctrine of stare decisis (precedent) in Pakistan's legal system.",
    keywords: ["binding", "Supreme Court", "precedent", "courts", "stare decisis"],
    amendedBy: []
  },
  {
    id: 187, number: "190", title: "Action in aid of Supreme Court",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "All executive and judicial authorities throughout Pakistan must act in aid of the Supreme Court. This ensures that orders of the Supreme Court can be implemented throughout the country — no authority can ignore or refuse to comply with Supreme Court orders.",
    keywords: ["Supreme Court", "aid", "compliance", "executive", "authorities"],
    amendedBy: []
  },
  {
    id: 188, number: "191", title: "Rules of procedure (Supreme Court)",
    part: "VI", partTitle: "The Judicature", chapter: "1A", chapterTitle: "The Supreme Court of Pakistan",
    status: "active",
    summary: "The Supreme Court may make rules regulating the practice and procedure of the Court, subject to any Act of Parliament. These rules govern how cases are filed, heard, and decided in the Supreme Court.",
    keywords: ["Supreme Court", "rules", "procedure", "practice"],
    amendedBy: []
  },
  {
    id: 189, number: "191A", title: "Federal Constitutional Court",
    part: "VI", partTitle: "The Judicature", chapter: "1AA", chapterTitle: "Federal Constitutional Court",
    status: "active",
    summary: "The Federal Constitutional Court (FCC) was established by the 27th Amendment (November 2025) as a specialized constitutional court. The FCC exclusively handles constitutional matters including: interpretation of the Constitution, inter-governmental disputes, and appeals from High Courts on constitutional questions. The Supreme Court's constitutional jurisdiction was transferred to the FCC. The Chief Justice of the FCC is appointed by the President on PM's advice from among serving Supreme Court judges. The 27th Amendment was highly controversial, with critics arguing it reduced the Supreme Court to a mere appellate court.",
    keywords: ["Federal Constitutional Court", "FCC", "27th Amendment", "constitutional jurisdiction", "constitutional court"],
    amendedBy: ["27th Amendment 2025"]
  },

  // ==================== HIGH COURTS ====================
  {
    id: 190, number: "192", title: "High Courts",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "There shall be a High Court for each Province. A High Court consists of the Chief Justice of the High Court and other judges. Pakistan has four High Courts: Lahore High Court, Sindh High Court, Peshawar High Court, and Balochistan High Court, plus the Islamabad High Court for the federal capital.",
    keywords: ["High Court", "Lahore", "Sindh", "Peshawar", "Balochistan", "Islamabad", "provinces"],
    amendedBy: []
  },
  {
    id: 191, number: "193", title: "Appointment of Judges of High Court",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "High Court judges are appointed by the President on the recommendation of the Judicial Commission of Pakistan. The Commission's composition after the 26th and 27th Amendments includes both judicial members and parliamentary representatives, changing the balance of who influences judicial appointments.",
    keywords: ["High Court", "judges", "appointment", "Judicial Commission", "President"],
    amendedBy: ["18th Amendment 2010", "26th Amendment 2024"]
  },
  {
    id: 192, number: "194", title: "Oath of High Court Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "Every judge of a High Court takes an oath of office before the Governor of the Province in which the High Court is situated. The Chief Justice of the High Court takes the oath before the Governor.",
    keywords: ["oath", "High Court judges", "Governor"],
    amendedBy: []
  },
  {
    id: 193, number: "195", title: "Retiring age of High Court Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "High Court judges must retire at age 62. This is three years earlier than Supreme Court judges (who retire at 65). High Court judges who reach this age automatically leave office without any removal process.",
    keywords: ["retirement", "High Court", "62 years", "judges"],
    amendedBy: []
  },
  {
    id: 194, number: "196", title: "Acting Chief Justice of High Court",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "If a Chief Justice of a High Court is absent or unable to perform functions, the President appoints the most senior available judge to act as Chief Justice. This ensures continuous functioning of provincial high courts.",
    keywords: ["Acting Chief Justice", "High Court", "absence"],
    amendedBy: []
  },
  {
    id: 195, number: "197", title: "Additional Judges of High Court",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "If the work of a High Court requires additional judges, the President may appoint additional judges for a limited period. This allows courts to manage heavy caseloads without permanently expanding the bench.",
    keywords: ["additional judges", "High Court", "caseload", "temporary"],
    amendedBy: []
  },
  {
    id: 196, number: "198", title: "Seat of High Court",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "Each High Court sits at its designated seat — Lahore (Punjab), Karachi (Sindh), Peshawar (KPK), and Quetta (Balochistan). The Chief Justice can also establish circuit benches in other cities within the province.",
    keywords: ["High Court seat", "Lahore", "Karachi", "Peshawar", "Quetta", "circuit"],
    amendedBy: []
  },
  {
    id: 197, number: "199", title: "Jurisdiction of High Court",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "The High Court has power to issue writs (court orders) to: enforce fundamental rights; compel a person or authority to do something (mandamus); stop illegal detention (habeas corpus); stop an unauthorized person from holding public office (quo warranto); and prohibit lower courts from exceeding their jurisdiction (certiorari/prohibition). These writs make the High Court the primary guardian of citizens' rights at the provincial level.",
    keywords: ["High Court jurisdiction", "writs", "habeas corpus", "mandamus", "fundamental rights", "certiorari"],
    amendedBy: ["27th Amendment 2025"]
  },
  {
    id: 198, number: "200", title: "Transfer of High Court Judges",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "The President can transfer a judge of one High Court to another High Court after consulting the Chief Justice of Pakistan. The 27th Amendment changed the process — the Judicial Commission now plays a role in supervising transfers rather than leaving it to pure executive discretion.",
    keywords: ["transfer", "High Court judges", "President", "Judicial Commission"],
    amendedBy: ["18th Amendment 2010", "27th Amendment 2025"]
  },
  {
    id: 199, number: "201", title: "Law declared by High Court binding",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "Any decision of a High Court on a question of law shall be binding on all courts subordinate to that High Court within the province. This creates a provincial judicial hierarchy — district courts and session courts must follow their respective High Court's rulings.",
    keywords: ["High Court", "binding", "subordinate courts", "precedent", "stare decisis"],
    amendedBy: []
  },
  {
    id: 200, number: "202", title: "Rules of procedure (High Court)",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "Subject to the Constitution and any Act of Parliament, a High Court may make rules regulating the practice and procedure of the Court and of courts subordinate to it. These rules govern filing fees, procedures, timelines, and the conduct of cases.",
    keywords: ["High Court", "rules", "procedure", "subordinate courts"],
    amendedBy: []
  },
  {
    id: 201, number: "203", title: "Inspection of subordinate courts",
    part: "VI", partTitle: "The Judicature", chapter: "1B", chapterTitle: "High Courts",
    status: "active",
    summary: "The High Court has superintendence over all courts subordinate to it within the Province. The High Court can inspect, supervise, and issue directions to district courts and sessions courts to ensure proper administration of justice.",
    keywords: ["High Court", "superintendence", "subordinate courts", "inspection"],
    amendedBy: []
  },

  // ==================== FEDERAL SHARIAT COURT ====================
  {
    id: 2015, number: "203A", title: "Federal Shariat Court — overriding effect",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "This Chapter on the Federal Shariat Court has effect notwithstanding anything contained in the Constitution. It overrides any conflicting constitutional provision specifically with respect to the Federal Shariat Court's establishment and functioning, underscoring how deeply Islamization was embedded into the legal hierarchy under General Zia.",
    keywords: ["Federal Shariat Court", "overriding effect", "Islamization"],
    amendedBy: []
  },
  {
    id: 202, number: "203B", title: "Definitions (Federal Shariat Court)",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "Definitions applicable to the Federal Shariat Court chapter, including the definition of 'Muslim' and 'repugnant to the Injunctions of Islam.'",
    keywords: ["Federal Shariat Court", "definitions", "Muslim", "Islam"],
    amendedBy: []
  },
  {
    id: 203, number: "203C", title: "The Federal Shariat Court",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "There shall be a Federal Shariat Court consisting of not more than 8 Muslim judges, including the Chief Justice. Three of these judges must be Islamic scholars (Ulema) who are well-versed in Islamic law. The Federal Shariat Court was established by General Zia-ul-Haq through the 1980 Presidential Order to Islamize Pakistan's legal system.",
    keywords: ["Federal Shariat Court", "Muslim judges", "Ulema", "Islamic law", "Zia"],
    amendedBy: []
  },
  {
    id: 204, number: "203D", title: "Powers, jurisdiction and functions of Shariat Court",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "The Federal Shariat Court examines whether any existing law is repugnant to Islamic injunctions. If the Court declares a law un-Islamic, the government must amend or repeal it within a specified period. The Court cannot examine the Constitution, Muslim Personal Law, court procedures, or certain fiscal laws for compliance with Islam.",
    keywords: ["Federal Shariat Court", "Islamic law", "repugnant", "Sharia", "powers"],
    amendedBy: []
  },
  {
    id: 205, number: "203DD", title: "Offences against women",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "The Federal Shariat Court has jurisdiction to examine laws relating to offences against women. The Shariat Court played a role in reviewing the Hudood Ordinances and laws on zina (adultery), rape, and qazf (false accusation). This provision reflects the contested intersection of Islamic law and women's rights in Pakistan.",
    keywords: ["Federal Shariat Court", "women", "offences", "Hudood", "zina", "rape", "qazf"],
    amendedBy: []
  },
  {
    id: 206, number: "203E", title: "Constitution of Benches of Federal Shariat Court",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "Cases before the Federal Shariat Court shall be heard by benches of at least three judges. The Chief Justice may constitute benches and assign cases to them.",
    keywords: ["Federal Shariat Court", "bench", "constitution"],
    amendedBy: []
  },
  {
    id: 207, number: "203F", title: "Appeals from decisions of Federal Shariat Court",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "Appeals from decisions of the Federal Shariat Court lie to the Shariat Appellate Bench of the Supreme Court, which consists of Supreme Court judges and Ulema members appointed by the President.",
    keywords: ["appeals", "Federal Shariat Court", "Shariat Appellate Bench", "Supreme Court"],
    amendedBy: []
  },
  {
    id: 208, number: "203G", title: "Bar on certain proceedings",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "No court other than the Federal Shariat Court can entertain proceedings on a question relating to whether a law is repugnant to Islam. The Federal Shariat Court has exclusive jurisdiction on this question.",
    keywords: ["Federal Shariat Court", "exclusive jurisdiction", "Islamic law"],
    amendedBy: []
  },
  {
    id: 209, number: "203H", title: "Effect of judgments of Federal Shariat Court",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "If the Federal Shariat Court declares a law un-Islamic, the government must amend or repeal that law within the period specified by the Court. Such laws become void after that period if not amended. Past transactions remain valid despite the declaration.",
    keywords: ["Federal Shariat Court", "judgment", "effect", "void", "un-Islamic"],
    amendedBy: []
  },
  {
    id: 210, number: "203I", title: "Pending proceedings",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "Cases pending before other courts relating to Islamic questions shall be transferred to the Federal Shariat Court. This ensures the Federal Shariat Court has exclusive jurisdiction over questions of Islamic compliance.",
    keywords: ["pending cases", "transfer", "Federal Shariat Court"],
    amendedBy: []
  },
  {
    id: 211, number: "203J", title: "Rules of procedure (Federal Shariat Court)",
    part: "VI", partTitle: "The Judicature", chapter: "1C", chapterTitle: "Federal Shariat Court",
    status: "active",
    summary: "The Federal Shariat Court may make rules for its own practice and procedure. These rules govern how applications are made, heard, and decided in the Shariat Court.",
    keywords: ["Federal Shariat Court", "rules", "procedure"],
    amendedBy: []
  },
  {
    id: 212, number: "212", title: "Administrative Courts and Tribunals",
    part: "VI", partTitle: "The Judicature", chapter: "1D", chapterTitle: "Administrative Courts",
    status: "active",
    summary: "Parliament can establish administrative courts and tribunals to deal with disputes relating to terms and conditions of government servants, taxation, lands, and other matters. High Courts cannot interfere in cases that are exclusively within the jurisdiction of these administrative tribunals. The Federal Service Tribunal and Provincial Service Tribunals operate under this provision.",
    keywords: ["administrative courts", "tribunals", "service tribunal", "government servants"],
    amendedBy: []
  },

  // ==================== PART VII: ELECTIONS ====================
  {
    id: 213, number: "213", title: "Election Commission of Pakistan",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws and Electoral Rolls",
    status: "active",
    summary: "There shall be an Election Commission of Pakistan (ECP) consisting of the Chief Election Commissioner (CEC) and four members — one from each Province. The CEC must be a retired Supreme Court judge. The ECP is an independent constitutional body responsible for organizing all elections in Pakistan.",
    keywords: ["Election Commission", "ECP", "Chief Election Commissioner", "elections", "independent"],
    amendedBy: ["18th Amendment 2010", "20th Amendment 2012"]
  },
  {
    id: 214, number: "214", title: "Appointment of members of Commission",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The Chief Election Commissioner is appointed by the President after consultation with the Prime Minister and Leader of the Opposition. Members of the ECP are appointed by the President on recommendation of the Parliamentary Committee. The 20th Amendment reformed this process to make appointments more transparent and bipartisan.",
    keywords: ["ECP", "appointment", "CEC", "Parliamentary Committee", "Prime Minister", "Opposition"],
    amendedBy: ["18th Amendment 2010", "20th Amendment 2012"]
  },
  {
    id: 215, number: "215", title: "Term of office of CEC and members",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The Chief Election Commissioner and members of the Election Commission hold office for a fixed term of 5 years and cannot be reappointed. This protects the independence of the ECP — members cannot seek reappointment by pleasing the government.",
    keywords: ["ECP", "term", "5 years", "no reappointment", "independence"],
    amendedBy: ["20th Amendment 2012"]
  },
  {
    id: 216, number: "216", title: "Member of Commission not to hold office of profit",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The CEC and members of the ECP cannot hold any other office of profit. After retirement, the CEC cannot be appointed to any position by the government for 2 years. This post-retirement restriction prevents conflicts of interest.",
    keywords: ["ECP", "office of profit", "independence", "post-retirement"],
    amendedBy: []
  },
  {
    id: 217, number: "217", title: "Acting Chief Election Commissioner",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "When the office of the CEC is vacant or the CEC is absent, the senior-most member of the ECP acts as CEC. This ensures continuity of the Election Commission's functioning.",
    keywords: ["Acting CEC", "ECP", "vacancy"],
    amendedBy: []
  },
  {
    id: 218, number: "218", title: "Superintendence, direction and control of elections",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The Election Commission of Pakistan has the authority to superintend, direct, and control the preparation of electoral rolls and the conduct of elections. The ECP is responsible for ensuring that elections are conducted honestly, justly, fairly, and in accordance with law.",
    keywords: ["ECP", "elections", "superintendence", "control", "fair elections"],
    amendedBy: []
  },
  {
    id: 219, number: "219", title: "Duties of Election Commission",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The ECP's constitutional duties include: organizing and conducting elections; delimiting constituencies; preparing and revising electoral rolls; appointing Returning Officers; establishing a code of conduct for political parties and candidates; and investigating complaints of corrupt electoral practices.",
    keywords: ["ECP duties", "electoral rolls", "delimitation", "code of conduct", "Returning Officer"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 220, number: "220", title: "Executive authorities to assist ECP",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "All executive authorities in Pakistan — Federal and Provincial — must assist the Election Commission in performing its constitutional functions. No authority can refuse the ECP's requests for assistance during elections.",
    keywords: ["ECP", "assistance", "executive", "Federal", "Provincial"],
    amendedBy: []
  },
  {
    id: 221, number: "221", title: "Power to make rules",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The Election Commission can make rules for the conduct of elections, subject to any Act of Parliament. These rules cover all aspects of the electoral process from candidate nomination to the declaration of results.",
    keywords: ["ECP", "rules", "elections", "regulations"],
    amendedBy: []
  },
  {
    id: 222, number: "222", title: "Parliamentary legislation respecting elections",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "Parliament has power to make laws relating to the election of members to Parliament and the Provincial Assemblies. Such laws may include: qualifications and disqualifications of voters, electoral offences, election disputes, and campaign finance.",
    keywords: ["Parliament", "electoral laws", "legislation", "elections"],
    amendedBy: []
  },
  {
    id: 223, number: "223", title: "Bar against double membership",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "No person can be a member of both Houses of Parliament at the same time, or a member of both Parliament and a Provincial Assembly simultaneously. If elected to multiple seats, they must choose one within a specified time period.",
    keywords: ["double membership", "Parliament", "Provincial Assembly", "simultaneous"],
    amendedBy: []
  },
  {
    id: 224, number: "224", title: "Time of elections and bye-elections",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "General elections to the National Assembly and Provincial Assemblies must be held within 60 days of dissolution of the Assembly (or when the term expires). Bye-elections for vacant seats must be held within 60 days of the seat becoming vacant. These strict timelines prevent indefinite postponement of elections.",
    keywords: ["elections", "timeline", "60 days", "bye-elections", "general elections"],
    amendedBy: ["20th Amendment 2012"]
  },
  {
    id: 225, number: "224A", title: "Vote of no-confidence and election",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "After a successful vote of no-confidence against a Prime Minister or Chief Minister, if the Assembly fails to elect a new PM/CM within a specified period, fresh elections are held. Added by the 20th Amendment to provide a constitutional mechanism for government formation after a no-confidence vote.",
    keywords: ["no-confidence", "Prime Minister", "Chief Minister", "fresh elections"],
    amendedBy: ["20th Amendment 2012"]
  },
  {
    id: 226, number: "225", title: "Election disputes",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "Disputes relating to elections to Parliament and Provincial Assemblies are decided by Election Tribunals. No election result can be questioned except through a petition in an Election Tribunal. High Courts and Supreme Court hear further appeals from Election Tribunal decisions.",
    keywords: ["election disputes", "Election Tribunal", "petition", "appeals"],
    amendedBy: []
  },
  {
    id: 227, number: "226", title: "Elections not to be called in question",
    part: "VII", partTitle: "The Elections", chapter: "1", chapterTitle: "Electoral Laws",
    status: "active",
    summary: "The validity of any law relating to delimitation of constituencies or the preparation of electoral rolls cannot be called in question in any court. This prevents pre-election legal challenges from delaying or disrupting the electoral process.",
    keywords: ["elections", "delimitation", "electoral rolls", "court", "validity"],
    amendedBy: []
  },

  // ==================== PART VIII: ISLAMIC PROVISIONS ====================
  {
    id: 228, number: "227", title: "Provisions relating to Quran and Sunnah",
    part: "VIII", partTitle: "Islamic Provisions", chapter: "1", chapterTitle: "General Provisions",
    status: "active",
    summary: "All existing laws shall be brought in conformity with the Injunctions of Islam as laid down in the Holy Quran and Sunnah of the Holy Prophet, and no law shall be enacted which is repugnant to such injunctions. This is the 'Islamization clause' — it requires all of Pakistan's laws to comply with Islamic principles. The Islamic Council advises Parliament on this process.",
    keywords: ["Quran", "Sunnah", "Islam", "Islamization", "repugnant", "laws"],
    amendedBy: []
  },
  {
    id: 229, number: "228", title: "Composition of Islamic Council",
    part: "VIII", partTitle: "Islamic Provisions", chapter: "1", chapterTitle: "General Provisions",
    status: "active",
    summary: "The President constitutes a Council of Islamic Ideology (CII) of 8-20 members representing different Islamic schools of thought. Members must be knowledgeable about Islam and Pakistani law. The CII advises Parliament and Provincial Assemblies on whether proposed laws comply with Islamic principles.",
    keywords: ["Council of Islamic Ideology", "CII", "Islamic scholars", "advisory", "schools of thought"],
    amendedBy: []
  },
  {
    id: 230, number: "229", title: "Reference by Parliament to Islamic Council",
    part: "VIII", partTitle: "Islamic Provisions", chapter: "1", chapterTitle: "General Provisions",
    status: "active",
    summary: "Parliament or a Provincial Assembly can refer any question to the Council of Islamic Ideology for an opinion on whether a proposed law is repugnant to Islamic injunctions. Citizens can also request the CII to consider existing laws.",
    keywords: ["Parliament", "CII", "reference", "Islamic opinion", "laws"],
    amendedBy: []
  },
  {
    id: 231, number: "230", title: "Functions of Islamic Council",
    part: "VIII", partTitle: "Islamic Provisions", chapter: "1", chapterTitle: "General Provisions",
    status: "active",
    summary: "The CII: advises Parliament and Assemblies on laws' Islamic compliance; recommends measures to bring laws in conformity with Islam; compiles principles of Islamic law in Urdu and English for guidance; and presents an annual report on legislative progress in Islamization. The CII's opinions are advisory — Parliament is not legally bound by them.",
    keywords: ["CII", "functions", "advisory", "Islamization", "annual report"],
    amendedBy: []
  },
  {
    id: 232, number: "231", title: "Rules of procedure (CII)",
    part: "VIII", partTitle: "Islamic Provisions", chapter: "1", chapterTitle: "General Provisions",
    status: "active",
    summary: "The Council of Islamic Ideology may make rules for its own procedure. These rules govern how the CII conducts its meetings and prepares its recommendations.",
    keywords: ["CII", "rules", "procedure"],
    amendedBy: []
  },

  // ==================== PART IX: EMERGENCY PROVISIONS ====================
  {
    id: 233, number: "232", title: "Proclamation of Emergency",
    part: "IX", partTitle: "Emergency Provisions", chapter: "1", chapterTitle: "Emergency",
    status: "active",
    summary: "If the President is satisfied that the security of Pakistan or any part is threatened by war or external aggression or internal disturbance beyond the power of a Provincial Government to control, they may, on the advice of the Cabinet, issue a Proclamation of Emergency. Parliament must approve the proclamation within 30 days by two-thirds majority or it lapses. This is the most drastic constitutional power — it concentrates authority in the Federal Government.",
    keywords: ["Emergency", "Proclamation", "security", "war", "disturbance", "Parliament approval"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 234, number: "233", title: "Period of Emergency",
    part: "IX", partTitle: "Emergency Provisions", chapter: "1", chapterTitle: "Emergency",
    status: "active",
    summary: "During a Proclamation of Emergency, fundamental rights under Articles 15-19 and 24 can be suspended. Civil courts cannot entertain cases about suspension of these rights. The 18th Amendment strengthened parliamentary oversight by requiring Parliament to approve and extend the emergency. Parliament can also revoke the emergency by simple majority.",
    keywords: ["Emergency", "period", "fundamental rights suspension", "Parliament", "civil courts"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 235, number: "234", title: "Failure of constitutional machinery in Province",
    part: "IX", partTitle: "Emergency Provisions", chapter: "1", chapterTitle: "Emergency",
    status: "active",
    summary: "If the Federal Government is satisfied that constitutional governance in a Province has broken down, the President can issue a Proclamation assuming governmental functions of that Province (historically called 'Governor's Rule' or, under the 1962 Constitution, 'President's Rule'). Parliamentary approval within 60 days is required, and it cannot continue for more than two months without Parliament's approval.",
    keywords: ["constitutional machinery", "Governor's Rule", "Province", "President", "breakdown"],
    amendedBy: ["18th Amendment 2010"]
  },
  {
    id: 236, number: "235", title: "Power of President in case of breakdown of constitutional machinery",
    part: "IX", partTitle: "Emergency Provisions", chapter: "1", chapterTitle: "Emergency",
    status: "active",
    summary: "During a provincial emergency under Article 234, the President can authorize expenditure from the Provincial Consolidated Fund, assume legislative powers of the Provincial Assembly, and make all laws needed for governing the Province. These are extraordinary powers used only when provincial governance collapses.",
    keywords: ["provincial emergency", "President", "legislative power", "expenditure"],
    amendedBy: []
  },
  {
    id: 237, number: "236", title: "Proclamation in case of financial emergency",
    part: "IX", partTitle: "Emergency Provisions", chapter: "1", chapterTitle: "Emergency",
    status: "active",
    summary: "If the Federal Government believes that the financial stability or credit of Pakistan or any Province is threatened, the President can issue a Financial Emergency Proclamation. During such an emergency, the Federation can direct Provincial Governments on their financial policies. This has never been invoked in Pakistan's history.",
    keywords: ["financial emergency", "fiscal crisis", "President", "financial stability"],
    amendedBy: []
  },
  {
    id: 238, number: "237", title: "Power to make laws during emergency",
    part: "IX", partTitle: "Emergency Provisions", chapter: "1", chapterTitle: "Emergency",
    status: "active",
    summary: "During a Proclamation of Emergency under Article 232, Parliament has the power to make laws on provincial subjects as well. The Federal Government can also direct provincial governments more directly. Emergency laws can override normal constitutional division of powers.",
    keywords: ["emergency laws", "Parliament", "provincial subjects", "federal power"],
    amendedBy: []
  },

  // ==================== PART X: AMENDMENT OF CONSTITUTION ====================
  {
    id: 239, number: "238", title: "Amendment of Constitution",
    part: "X", partTitle: "Amendment of the Constitution", chapter: "1", chapterTitle: "Amendment",
    status: "active",
    summary: "Subject to Article 239, the Constitution can be amended by Act of Parliament (called a Constitutional Amendment Act). This article establishes Parliament's power to amend the Constitution. Pakistan has so far amended its Constitution 27 times since 1973.",
    keywords: ["amendment", "Constitution", "Parliament", "Constitutional Amendment Act"],
    amendedBy: []
  },
  {
    id: 240, number: "239", title: "Procedure for amendment",
    part: "X", partTitle: "Amendment of the Constitution", chapter: "1", chapterTitle: "Amendment",
    status: "active",
    summary: "A constitutional amendment bill must be passed by two-thirds majority of the total membership of each House of Parliament sitting separately. If a bill concerns the federal structure (provinces, Senate), it must also be approved by resolution of a majority of Provincial Assemblies. This high threshold (2/3 majority in both Houses) makes constitutional amendment difficult and protects the Constitution from simple-majority changes.",
    keywords: ["amendment procedure", "two-thirds majority", "Parliament", "Senate", "National Assembly", "Provincial Assemblies"],
    amendedBy: []
  },

  // ==================== PART XI: MISCELLANEOUS ====================
  {
    id: 241, number: "240", title: "Service of Pakistan",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "The terms and conditions of service of civil servants of the Federation and the Provinces shall be determined by Acts of Parliament and Provincial Assemblies respectively. This gives the legislature (not the executive alone) control over civil service terms and protections.",
    keywords: ["civil service", "Service of Pakistan", "terms and conditions", "Parliament"],
    amendedBy: []
  },
  {
    id: 242, number: "241", title: "Tenure of office, terms and conditions of service",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "Until Parliament makes laws under Article 240, the President (for federal servants) and Governors (for provincial servants) may make rules governing service. Existing service rules continue until changed by proper legislation.",
    keywords: ["civil service rules", "tenure", "terms", "conditions"],
    amendedBy: []
  },
  {
    id: 243, number: "242", title: "Public Service Commissions",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "There shall be a Federal Public Service Commission (FPSC) and a Provincial Public Service Commission for each Province. These constitutional bodies conduct competitive examinations for recruitment to the civil service. Their independence is protected — the President appoints FPSC members and they cannot be removed except through a prescribed process.",
    keywords: ["FPSC", "Public Service Commission", "civil service", "recruitment", "competitive exam"],
    amendedBy: []
  },
  {
    id: 244, number: "243", title: "Command of Armed Forces",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "The supreme command of the Armed Forces is vested in the President. The Federal Government — through the Prime Minister — commands the Armed Forces in practice. The 27th Amendment (November 2025) significantly restructured this article: it created a new post of 'Chief of Defence Forces' (held by the Army Chief), abolished the post of Chairman Joint Chiefs of Staff Committee (CJCSC), granted lifetime rank and privileges to five-star officers (Field Marshal, Marshal of Air Force, Admiral of Fleet), and extended immunity from arrest and civil/criminal proceedings to such officers. This amendment was highly controversial, with critics saying it constitutionalized military supremacy.",
    keywords: ["Armed Forces", "command", "President", "27th Amendment", "Chief of Defence Forces", "CJCSC abolished", "Field Marshal", "immunity"],
    amendedBy: ["27th Amendment 2025"]
  },
  {
    id: 245, number: "244", title: "Oath by members of Armed Forces",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "Members of the Armed Forces of Pakistan take an oath of office in which they swear to bear true allegiance to Pakistan, to uphold the Constitution, and not to engage in any political activity. Military personnel are constitutionally prohibited from political activity.",
    keywords: ["Armed Forces", "oath", "allegiance", "Constitution", "no political activity"],
    amendedBy: []
  },
  {
    id: 246, number: "245", title: "Functions of Armed Forces",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "The Armed Forces' constitutional function is to defend Pakistan against external aggression or threat of war, and, subject to law, to act in aid of civil power when called upon to do so. The Armed Forces can be called in to assist civil government in maintaining order during crises (Article 245 deployments).",
    keywords: ["Armed Forces functions", "defence", "aid to civil power", "security"],
    amendedBy: []
  },
  {
    id: 247, number: "246", title: "Tribal Areas",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "After the 25th Amendment (2018), the Federally Administered Tribal Areas (FATA) were merged with Khyber Pakhtunkhwa. Most provisions of Article 246 relating to FATA are now transitional. The tribal areas of Balochistan retain some special administrative provisions.",
    keywords: ["Tribal Areas", "FATA", "25th Amendment", "merger", "KPK", "Balochistan"],
    amendedBy: ["25th Amendment 2018"]
  },
  {
    id: 248, number: "247", title: "Special provisions for Tribal Areas",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "After the 25th Amendment, the previously listed special provisions for FATA have become largely transitional. The 25th Amendment extended the jurisdiction of the KPK High Court to the former tribal areas and scheduled the full integration of FATA over a period of years.",
    keywords: ["Tribal Areas", "FATA", "special provisions", "25th Amendment", "KPK High Court"],
    amendedBy: ["25th Amendment 2018"]
  },
  {
    id: 249, number: "248", title: "Protection to President, Governor, Minister, etc.",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "The President, Governor, Prime Minister, Federal Ministers, Chief Minister, and Provincial Ministers have immunity from legal proceedings for anything done in the exercise of their official powers and functions. The 27th Amendment extended this immunity to include LIFETIME immunity for the President, Field Marshal, Fleet Admiral, and Air Force Marshal from arrest and all criminal and civil proceedings — even after they leave office. This extension was strongly criticized by legal experts as unprecedented.",
    keywords: ["immunity", "President", "Governor", "Minister", "Prime Minister", "official acts", "27th Amendment", "lifetime immunity"],
    amendedBy: ["27th Amendment 2025"]
  },
  {
    id: 250, number: "249", title: "Validation of acts and proceedings",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "This article validates certain acts, proceedings, and things done during transitional periods or under previous constitutional arrangements. It is primarily a transitional provision that ensures continuity of official actions.",
    keywords: ["validation", "acts", "transitional"],
    amendedBy: []
  },
  {
    id: 251, number: "250", title: "Omitted",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "omitted",
    summary: "This article has been omitted from the Constitution.",
    keywords: ["omitted"],
    amendedBy: []
  },
  {
    id: 252, number: "251", title: "National language",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "The national language of Pakistan is Urdu. Urdu shall be used for official and other purposes within 15 years from the Constitution's commencement (this timeline was never met). Provincial languages can be used for provincial purposes. This article has been controversial — Urdu is the mother tongue of a minority (Urdu-speaking migrants), while Punjabi, Sindhi, Pashto, and Balochi are more widely spoken.",
    keywords: ["national language", "Urdu", "official language", "provincial languages", "mother tongue"],
    amendedBy: []
  },
  {
    id: 253, number: "252", title: "Special provisions for FATA (now mostly transitional)",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "After the 25th Amendment (2018), this article deals with the transitional arrangements for the merger of FATA into KPK. The integration process was planned over a period of years with special arrangements for the former tribal agencies.",
    keywords: ["FATA", "KPK", "transitional", "25th Amendment", "merger"],
    amendedBy: ["25th Amendment 2018"]
  },
  {
    id: 254, number: "253", title: "Maximum limits as to property, etc.",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "Parliament may by law prescribe maximum limits as to property, stocks, shares, and similar interests that may be owned by any person. This gives Parliament the constitutional power to implement wealth caps and prevent excessive concentration of private wealth.",
    keywords: ["property limits", "wealth cap", "Parliament", "maximum"],
    amendedBy: []
  },
  {
    id: 255, number: "254", title: "Failure to comply with requirement as to time",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "If the Constitution requires something to be done within a specified period and it is not done, the failure does not make the act, when eventually done, invalid. This prevents constitutional deadlines from creating chaos if missed — the government can still act, just late.",
    keywords: ["time limit", "failure", "validity", "act", "constitutional deadline"],
    amendedBy: []
  },
  {
    id: 256, number: "255", title: "Omitted",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "omitted",
    summary: "This article has been omitted from the Constitution.",
    keywords: ["omitted"],
    amendedBy: []
  },
  {
    id: 2571, number: "257", title: "Special Provisions relating to State of Jammu and Kashmir",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "When the people of the State of Jammu and Kashmir decide to accede to Pakistan, the relationship between Pakistan and that State shall be determined in accordance with the wishes of the people of that State. This article preserves Pakistan's constitutional position on the disputed status of Kashmir pending a final settlement.",
    keywords: ["Jammu and Kashmir", "Kashmir", "accession", "disputed territory"],
    amendedBy: []
  },
  {
    id: 2581, number: "258", title: "Provision as to Property",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "Until Parliament makes other provision, the President may make such provisions as appear necessary or expedient for matters relating to property and assets that vested in the Government of Pakistan at independence. A transitional administrative provision from the early years of the Constitution.",
    keywords: ["property", "transitional", "assets", "President"],
    amendedBy: []
  },
  {
    id: 2591, number: "259", title: "Omitted",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "omitted",
    summary: "This article has been omitted from the Constitution.",
    keywords: ["omitted"],
    amendedBy: []
  },
  {
    id: 257, number: "256", title: "Private armies forbidden",
    part: "XI", partTitle: "Miscellaneous", chapter: "1", chapterTitle: "Services",
    status: "active",
    summary: "No private organization or group shall raise, maintain, or train any force of a paramilitary character. This is the constitutional prohibition on private militias, warlord armies, and any non-state armed groups. Only the State can maintain armed forces.",
    keywords: ["private army", "militia", "paramilitary", "armed forces", "prohibition"],
    amendedBy: []
  },

  // ==================== PART XII: GENERAL ====================
  {
    id: 258, number: "260", title: "Definitions",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "This is the definitions section of the Constitution. It defines key terms including 'Federal Law', 'law', 'person', 'public servant', 'service of Pakistan', 'Muslim', 'non-Muslim', 'schedule', and others. The definition of 'Muslim' (requiring belief in Finality of Prophethood) was used to declare Ahmadis as non-Muslims in the 2nd Amendment (1974).",
    keywords: ["definitions", "interpretation", "Muslim", "non-Muslim", "service of Pakistan"],
    amendedBy: ["2nd Amendment 1974"]
  },
  {
    id: 259, number: "261", title: "British subjects",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "Transitional provision relating to the status of British subjects who were citizens of Pakistan at the commencement of the Constitution. This is a historical provision from when Pakistan was transitioning from British colonial rule.",
    keywords: ["British subjects", "citizenship", "transitional"],
    amendedBy: []
  },
  {
    id: 260, number: "264", title: "Effect of repeal of Constitution",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "The repeal of the 1956 and 1962 Constitutions does not affect anything done under those constitutions. This is a transitional continuity provision from when the 1973 Constitution came into force.",
    keywords: ["repeal", "1956 Constitution", "1962 Constitution", "transitional"],
    amendedBy: []
  },
  {
    id: 261, number: "265", title: "Continuance of existing laws",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "All laws in force immediately before the Constitution's commencement shall continue in force until amended or repealed. This ensures legal continuity — Pakistan's entire body of law does not need to be re-enacted when the Constitution comes into force.",
    keywords: ["existing laws", "continuance", "transitional", "legal continuity"],
    amendedBy: []
  },
  {
    id: 262, number: "266", title: "Construction of laws with reference to repealed Constitution",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "Laws passed under the 1962 Constitution and referring to provisions of that Constitution shall be interpreted by substituting the equivalent provisions of the 1973 Constitution. This ensures statutory references remain valid after the constitutional change.",
    keywords: ["interpretation", "repealed Constitution", "statutory references"],
    amendedBy: []
  },
  {
    id: 263, number: "268", title: "Protection of certain laws",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "Laws specified in the First Schedule of the Constitution cannot be challenged as being inconsistent with or in derogation of fundamental rights. The First Schedule lists specific legislation — mainly on land reform and property — that Parliament wanted to protect from constitutional challenge.",
    keywords: ["First Schedule", "protected laws", "fundamental rights", "challenge"],
    amendedBy: []
  },
  {
    id: 2621, number: "262", title: "Provincial Boundaries",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "Transitional provision confirming that the boundaries of the Provinces as they existed immediately before the Constitution's commencement continue, until altered by law in accordance with the Constitution's procedure for forming new provinces or changing boundaries (Article 239's special process).",
    keywords: ["provincial boundaries", "transitional", "provinces"],
    amendedBy: []
  },
  {
    id: 2631, number: "263", title: "Removal of difficulties",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "If any difficulty arose in giving effect to provisions of the Constitution during the initial transition from the previous legal order, the President could make such orders as appeared necessary to remove that difficulty. This was a time-limited transitional power used only in the Constitution's earliest years.",
    keywords: ["removal of difficulties", "transitional", "President"],
    amendedBy: []
  },
  {
    id: 2671, number: "267", title: "Power to amend certain laws",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "The President was given a transitional power to amend, by Order, certain existing laws to bring them in line with the new Constitution shortly after it came into force in 1973. This power lapsed after the initial transition period.",
    keywords: ["amend laws", "transitional", "President", "1973"],
    amendedBy: []
  },
  {
    id: 2691, number: "269", title: "Bar of jurisdiction",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "No court can call into question the validity of any action taken to bring the Constitution into force, including the dissolution of pre-1973 legislatures and the transition arrangements. This protects the founding act of the 1973 Constitution itself from legal challenge.",
    keywords: ["bar of jurisdiction", "validity", "1973", "founding"],
    amendedBy: []
  },
  {
    id: 2701, number: "270", title: "Affirmation of President's and Provincial Governors' Orders",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "Validates certain Orders and notifications made by the President and Provincial Governors between specific historical dates during the transition to the 1973 Constitution, ensuring administrative continuity during the changeover from the interim constitutional arrangements.",
    keywords: ["validation", "President's orders", "transitional", "1973"],
    amendedBy: []
  },
  {
    id: 2711, number: "270AA", title: "Affirmation of laws, validation of Proclamation of 14th October 1999",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "Added by the 17th Amendment (2003), this article retroactively validated General Pervez Musharraf's military coup of October 12, 1999, the Proclamation of Emergency, the Provisional Constitution Order, and all laws, regulations, and actions taken under Musharraf's rule between 1999 and 2002 — including his 2002 referendum. Like Article 270A before it (validating Zia's martial law), this is a recurring constitutional mechanism used to legally launder military takeovers after the fact.",
    keywords: ["270AA", "17th Amendment", "Musharraf", "coup", "validation", "1999"],
    amendedBy: ["17th Amendment 2003"]
  },
  {
    id: 2721, number: "271", title: "Removal of difficulties — President's power",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "A further transitional 'removal of difficulties' clause giving the President temporary power to issue Orders to resolve practical problems in implementing constitutional provisions following a major amendment, used at various points after significant amendments such as the 18th and 27th.",
    keywords: ["removal of difficulties", "President", "transitional", "implementation"],
    amendedBy: []
  },
  {
    id: 264, number: "270A", title: "Validation of laws etc.",
    part: "XII", partTitle: "General", chapter: "1", chapterTitle: "Interpretation",
    status: "active",
    summary: "This article validates actions, laws, and ordinances that were made during periods of martial law or extraconstitutional government and which might otherwise be unconstitutional. The 8th Amendment in 1985 added this to validate General Zia's martial law actions. It has been criticized as legitimizing unconstitutional military rule.",
    keywords: ["validation", "martial law", "8th Amendment", "Zia", "unconstitutional"],
    amendedBy: ["8th Amendment 1985"]
  }
];

// ==================== SCHEDULES ====================
export const schedules = [
  {
    id: 1,
    number: "First",
    title: "Laws Exempt from Fundamental Rights Challenge",
    summary: "Lists specific laws that cannot be challenged as violating Fundamental Rights under Articles 8-28. These include land reform laws, property laws, and other legislation that Parliament has specifically protected. The Schedule can only be amended by a 2/3 majority of Parliament.",
    details: "The First Schedule protects agrarian reform laws, laws relating to preventive detention, and other laws that would otherwise be open to fundamental rights challenges. It is the constitutional 'shield' for specific pieces of legislation."
  },
  {
    id: 2,
    number: "Second",
    title: "Oaths of Office",
    summary: "Contains the official text of oaths to be taken by the President, Prime Minister, Federal Ministers, Governors, Chief Ministers, Provincial Ministers, Speakers, members of Parliament, and judges. Each oath is tailored to the specific office and requires upholding the Constitution and performing duties faithfully.",
    details: "The Second Schedule ensures that all high officeholders take standardized constitutional oaths before assuming office. Muslim officeholders take an 'oath' while non-Muslim officeholders may take an 'affirmation' instead."
  },
  {
    id: 3,
    number: "Third",
    title: "Omitted",
    summary: "The Third Schedule was omitted by the 18th Amendment (2010). It previously contained provisions relating to certain centrally administered areas. Its contents have either been repealed or absorbed into the main body of the Constitution.",
    details: "The Third Schedule previously dealt with transitional and miscellaneous matters. The 18th Amendment omitted it as part of the broader devolution of power to the provinces."
  },
  {
    id: 4,
    number: "Fourth",
    title: "Legislative Lists",
    summary: "The Fourth Schedule contains the Federal Legislative List — the subjects on which only Parliament can legislate. After the 18th Amendment abolished the Concurrent List, there is only one list. It covers defence, foreign affairs, currency, banking, insurance, stock exchanges, ports, shipping, civil aviation, railways, post and telegraph, nuclear energy, and many other subjects. There are now 68 subjects on the Federal List.",
    details: "Part I of the Federal Legislative List contains subjects exclusively for Parliament. Part II lists subjects for joint management by the Federal and Provincial Governments. All residual subjects (not on the Federal List) belong to the provinces after the 18th Amendment."
  },
  {
    id: 5,
    number: "Fifth",
    title: "Salaries of Judges",
    summary: "Contains the salary scales and emoluments for judges of the Supreme Court and Federal Constitutional Court (after 27th Amendment). The salaries of judges are charged to the Consolidated Fund and cannot be reduced during a judge's term — this protects judicial independence from executive pressure.",
    details: "The Fifth Schedule ensures that judges' salaries cannot be weaponized by the government to pressure the judiciary. Judges know their pay cannot be cut as political punishment."
  },
  {
    id: 6,
    number: "Sixth",
    title: "Schedule of Laws Protected from Amendment",
    summary: "Contains laws that cannot be amended by Parliament through a simple majority — they require a special constitutional process. Includes laws relating to the Independence of Judiciary, the Objectives Resolution provisions, and certain fundamental rights protections.",
    details: "The Sixth Schedule acts as a higher protection for certain constitutional principles. Even if a simple majority in Parliament wanted to change these laws, the Sixth Schedule requires a more demanding process, protecting core constitutional values."
  }
];

// ==================== ALL 27 AMENDMENTS ====================
export const amendments = [
  {
    id: 1, number: "1st", year: 1974,
    title: "First Constitutional Amendment",
    summary: "Extended the period for detention without trial. Validated measures taken to prevent smuggling and actions taken against anti-state activities. Also restricted the right to move the High Court in certain matters.",
    articlesAmended: ["10", "17", "199"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 2, number: "2nd", year: 1974,
    title: "Second Constitutional Amendment — Ahmadi Declaration",
    summary: "Declared Ahmadis (Qadianis and Lahori Group) as non-Muslims for constitutional purposes. Added a definition to Article 260 requiring belief in the absolute and unqualified finality of the Prophethood of Muhammad (PBUH) as a condition for being Muslim under the Constitution. This remains one of the most controversial amendments.",
    articlesAmended: ["260"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 3, number: "3rd", year: 1975,
    title: "Third Constitutional Amendment",
    summary: "Extended the period of preventive detention from one month to three months. Also amended the provisions relating to the review of preventive detention cases, giving the government more time before a review board had to consider each case.",
    articlesAmended: ["10"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 4, number: "4th", year: 1975,
    title: "Fourth Constitutional Amendment",
    summary: "Curtailed the jurisdiction of the High Courts to issue writs in certain matters. Restricted judicial review of preventive detention in matters affecting security of Pakistan. This amendment significantly reduced the courts' power to challenge executive detention.",
    articlesAmended: ["199"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 5, number: "5th", year: 1976,
    title: "Fifth Constitutional Amendment",
    summary: "Increased the number of judges of the Supreme Court and High Courts. Extended the retiring age of High Court judges from 60 to 62. Made significant changes to the appointment process for judges, giving the Executive more influence. Also changed the quorum for Supreme Court benches hearing constitutional matters.",
    articlesAmended: ["176", "177", "179", "193", "195", "200"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 6, number: "6th", year: 1976,
    title: "Sixth Constitutional Amendment",
    summary: "Extended the retiring age of Supreme Court judges from 60 to 65 years. Also made changes to the constitution of the Federal Shariat Court and the role of Islamic Ideology Council. This amendment was more structural and less controversial than others of the period.",
    articlesAmended: ["179", "203C"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 7, number: "7th", year: 1977,
    title: "Seventh Constitutional Amendment",
    summary: "Provided for a referendum to determine whether the electorate had confidence in the Prime Minister's policies. Passed amid the political crisis of 1977. The referendum was never actually held as General Zia-ul-Haq's coup on July 5, 1977 abrogated the Constitution.",
    articlesAmended: ["96", "48"],
    government: "Zulfikar Ali Bhutto (PPP)"
  },
  {
    id: 8, number: "8th", year: 1985,
    title: "Eighth Constitutional Amendment — General Zia's Empowerment",
    summary: "One of the most significant and controversial amendments. Passed under General Zia-ul-Haq's military government after his 'controlled' elections, it: made the Objectives Resolution a substantive part of the Constitution (Article 2A); gave the President sweeping powers to dissolve the National Assembly, appoint the PM, and appoint military service chiefs; validated all martial law actions (Article 270A); and restructured the political system to weaken elected governments. It transformed Pakistan from a parliamentary to a 'semi-presidential' system. Most of its changes were reversed by the 18th Amendment in 2010.",
    articlesAmended: ["2A", "48", "58", "91", "101", "112", "270A"],
    government: "General Zia-ul-Haq"
  },
  {
    id: 9, number: "9th", year: 1985,
    title: "Ninth Constitutional Amendment",
    summary: "Required that all laws be brought into conformity with the injunctions of Islam as laid down in the Holy Quran and Sunnah. Strengthened the Islamization provisions of the Constitution. Also extended the Federal Shariat Court's jurisdiction. Passed as part of General Zia's Islamization program.",
    articlesAmended: ["227", "228", "229", "230", "231", "203B", "203C", "203D"],
    government: "General Zia-ul-Haq"
  },
  {
    id: 10, number: "10th", year: 1987,
    title: "Tenth Constitutional Amendment",
    summary: "Changed the timing of sessions of Parliament. Required that Parliament meet for at least 90 working days in a year (previously 130). Also required that there be at least three sessions of each house. This was a minor structural amendment.",
    articlesAmended: ["54"],
    government: "General Zia-ul-Haq"
  },
  {
    id: 11, number: "11th", year: 1989,
    title: "Eleventh Constitutional Amendment",
    summary: "Provided for seats for women in the Senate. Extended the term of reserved seats for women and minorities in the National Assembly and Provincial Assemblies for ten years. Also made changes to the election procedure for Senate seats.",
    articlesAmended: ["51", "59", "106"],
    government: "Benazir Bhutto (PPP)"
  },
  {
    id: 12, number: "12th", year: 1991,
    title: "Twelfth Constitutional Amendment",
    summary: "Established Federal Shariat Courts in each Province to deal with cases relating to Islamic law at the provincial level. Set up Special Courts for Speedy Trials for heinous offences including terrorism and murder. These special courts with fast-track procedures were created to address law and order.",
    articlesAmended: ["212"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 13, number: "13th", year: 1997,
    title: "Thirteenth Constitutional Amendment",
    summary: "Removed the President's discretionary power to dissolve the National Assembly under Article 58(2)(b). This power — introduced by the 8th Amendment — had been used by Presidents to dismiss four elected governments (Junejo 1988, Bhutto 1990, Sharif 1993, Bhutto 1996). The 13th Amendment restored parliamentary supremacy by making dissolution possible only on PM's advice.",
    articlesAmended: ["48", "58", "101", "112"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 14, number: "14th", year: 1997,
    title: "Fourteenth Constitutional Amendment — Anti-Defection",
    summary: "Added Article 63A to the Constitution prohibiting floor-crossing (defection from a parliamentary party). Members who voted against their party on a confidence vote, money bill, or constitutional amendment would be disqualified. This aimed to stop political horse-trading and buying of legislators.",
    articlesAmended: ["63A"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 15, number: "15th", year: 1998,
    title: "Fifteenth Constitutional Amendment",
    summary: "Passed by the National Assembly but NOT by the Senate. It would have empowered the Federal Government to take steps to enforce Shariah (Islamic law) throughout Pakistan and override existing laws. Because it failed in the Senate, it never became part of the Constitution. It is sometimes called the 'Shariah Amendment.'",
    articlesAmended: ["N/A - Not passed"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 16, number: "16th", year: 1999,
    title: "Sixteenth Constitutional Amendment",
    summary: "Extended the period for quota system for recruitment to government services. Allowed the continuation of regional quotas in federal service appointments for another 20 years (until 2019), protecting representation of smaller provinces and backward areas in federal civil service.",
    articlesAmended: ["27"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 17, number: "17th", year: 2003,
    title: "Seventeenth Constitutional Amendment — Musharraf's Legitimization",
    summary: "Passed by Parliament under General Pervez Musharraf, this amendment retroactively validated Musharraf's coup (October 1999), his referendum (April 2002), the Legal Framework Order (2002), and actions taken under them. It restored the President's power to dissolve the National Assembly with conditions, and allowed Musharraf to continue as both President and Army Chief until December 2004. It was widely seen as political parties (especially PML-Q and MMA) legitimizing military rule in exchange for concessions.",
    articlesAmended: ["41", "43", "47", "48", "56", "58", "101", "112", "152", "270AA"],
    government: "General Pervez Musharraf"
  },
  {
    id: 18, number: "18th", year: 2010,
    title: "Eighteenth Constitutional Amendment — Restoration of Parliamentary Democracy",
    summary: "The most significant amendment since 1973, passed unanimously by Parliament. Major changes: (1) Removed the 8th and 17th Amendment additions giving President power to dissolve the Assembly — restored parliamentary supremacy; (2) Abolished the Concurrent Legislative List — transferred 47 subjects to provinces; (3) Added new fundamental rights: Article 10A (fair trial), Article 19A (right to information), Article 25A (right to education); (4) Reformed judicial appointment through Judicial Commission; (5) Renamed NWFP to Khyber Pakhtunkhwa; (6) Strengthened NFC Award; (7) Gave provinces control over their natural resources; (8) Changed PM and CJ appointment procedures. This amendment fundamentally transformed Pakistan's constitutional structure in favor of democracy and provincial autonomy.",
    articlesAmended: ["1", "6", "7", "17", "19A", "25A", "34", "37", "41", "46", "48", "51", "52", "53", "54", "58", "62", "63", "70", "75", "89", "90", "91", "95", "101", "105", "112", "130", "140A", "141", "142", "144", "147", "153", "154", "155", "156", "157", "160", "161", "162", "167", "168", "169", "175A", "177", "193", "200", "213", "215", "218", "219", "232", "233", "234", "239", "243", "246", "260"],
    government: "Asif Ali Zardari / Yusuf Raza Gilani (PPP)"
  },
  {
    id: 19, number: "19th", year: 2011,
    title: "Nineteenth Constitutional Amendment",
    summary: "Fine-tuned Article 175A (judicial appointments) which had been introduced by the 18th Amendment. Reformed the Parliamentary Committee's role in approving judicial appointments. Clarified the procedure for appointment of Chief Justices and judges of the Supreme Court and High Courts. This was a technical amendment to perfect the new judicial appointment system.",
    articlesAmended: ["175A", "213"],
    government: "Asif Ali Zardari / Yusuf Raza Gilani (PPP)"
  },
  {
    id: 20, number: "20th", year: 2012,
    title: "Twentieth Constitutional Amendment",
    summary: "Introduced the caretaker government system: established a procedure for forming neutral caretaker governments to oversee elections. A Parliamentary Committee of equal government and opposition members selects the caretaker Prime Minister. Also reformed the appointment of the Chief Election Commissioner and Election Commission members. Made elections mandatory within 60 days of dissolution. This amendment aimed to ensure free and fair elections overseen by neutral caretakers.",
    articlesAmended: ["51", "52", "58", "92", "105", "107", "112", "213", "214", "215", "218", "219", "224", "224A", "225"],
    government: "Asif Ali Zardari (PPP) / Multi-party consensus"
  },
  {
    id: 21, number: "21st", year: 2015,
    title: "Twenty-First Constitutional Amendment — Military Courts",
    summary: "Established Military Courts to try civilians accused of terrorist offences related to militant organizations. Passed after the Army Public School Peshawar massacre (December 2014) which killed 132 schoolchildren. The amendment was controversial as it allowed the military to try civilians. It was a sunset clause — military courts were to operate for only two years (later extended once more).",
    articlesAmended: ["175"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 22, number: "22nd", year: 2016,
    title: "Twenty-Second Constitutional Amendment",
    summary: "Changed the composition of the Election Commission of Pakistan. Provided that members of the ECP would be appointed through a more transparent, bipartisan process. Also amended the process for dissolution of the ECP and the qualifications of its members.",
    articlesAmended: ["213", "215", "218", "219"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 23, number: "23rd", year: 2017,
    title: "Twenty-Third Constitutional Amendment — FATA Elections",
    summary: "Extended the Military Courts for another two years after their initial mandate expired. Also extended the application of election laws and the jurisdiction of Election Commission to FATA (Federally Administered Tribal Areas) as a step toward integrating FATA with the rest of Pakistan.",
    articlesAmended: ["175", "247"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 24, number: "24th", year: 2017,
    title: "Twenty-Fourth Constitutional Amendment",
    summary: "Related to the delimitation of constituencies by the Election Commission. Provided for the ECP to conduct fresh delimitation of National and Provincial Assembly constituencies based on the results of the 2017 Census. This was necessary to align constituency boundaries with population changes over the preceding years.",
    articlesAmended: ["51", "106", "218", "219"],
    government: "Nawaz Sharif (PML-N)"
  },
  {
    id: 25, number: "25th", year: 2018,
    title: "Twenty-Fifth Constitutional Amendment — FATA Merger",
    summary: "Merged the Federally Administered Tribal Areas (FATA) with Khyber Pakhtunkhwa Province. Extended all constitutional, legal, and judicial protections to the people of the former tribal areas. The Peshawar High Court's jurisdiction was extended to cover former FATA. Also increased seats in the KPK Provincial Assembly and the National Assembly for the merged areas. This historic amendment ended over 100 years of the colonial-era Frontier Crimes Regulations and brought FATA citizens under full constitutional protection.",
    articlesAmended: ["1", "51", "59", "106", "246", "247"],
    government: "Shahid Khaqan Abbasi (PML-N)"
  },
  {
    id: 26, number: "26th", year: 2024,
    title: "Twenty-Sixth Constitutional Amendment — Judicial Reforms",
    summary: "Passed in October 2024, this controversial amendment: established a new process for appointing the Chief Justice of Pakistan (through a Special Parliamentary Committee of 12 members instead of seniority); set up a senior bench of Supreme Court judges for constitutional matters; changed the Judicial Commission's composition to include more parliamentary members; and introduced a more politically-influenced appointment system for the higher judiciary. The amendment was passed by the ruling coalition (PML-N, PPP, JUI-F) despite strong opposition from PTI and senior judges and lawyers' associations who called it an attack on judicial independence.",
    articlesAmended: ["175A", "177", "191A", "200", "209"],
    government: "Shehbaz Sharif (PML-N/PPP coalition)"
  },
  {
    id: 27, number: "27th", year: 2025,
    title: "Twenty-Seventh Constitutional Amendment — Military Command & Federal Constitutional Court",
    summary: "Passed in November 2025 in one of the fastest legislative processes in Pakistan's history, this amendment made sweeping changes: (1) MILITARY COMMAND (Article 243): Created a new post of 'Chief of Defence Forces' (CDF) to be held by the sitting Army Chief, abolished the Chairman Joint Chiefs of Staff Committee (CJCSC), granted five-star officers (Field Marshal, Fleet Admiral, Air Force Marshal) lifetime rank, uniform and privileges; (2) IMMUNITY (Articles 243 & 248): Granted lifetime immunity from arrest and criminal/civil proceedings to the President, Field Marshal, Fleet Admiral, and Air Force Marshal; (3) FEDERAL CONSTITUTIONAL COURT (Article 191A): Established a new Federal Constitutional Court to exclusively hear constitutional cases, effectively reducing the Supreme Court to a non-constitutional appellate court; (4) JUDICIAL APPOINTMENTS: Further changed how judges are appointed and transferred; (5) NFC REVIEW: Signaled intention to review provincial fiscal autonomy under the 18th Amendment. The amendment was signed into law by President Zardari on November 13, 2025. It was strongly opposed by PTI, the Islamabad High Court judges who filed petitions against it, Supreme Court Justices Mansoor Ali Shah and Athar Minallah who resigned, and international bodies including the International Commission of Jurists.",
    articlesAmended: ["175", "175A", "191A", "200", "243", "248"],
    government: "Shehbaz Sharif (PML-N/PPP coalition)"
  }
];

export const parts = [
  { number: "Preamble", title: "Preamble" },
  { number: "I", title: "Introductory" },
  { number: "II", title: "Fundamental Rights and Principles of Policy" },
  { number: "III", title: "The Federation of Pakistan" },
  { number: "IV", title: "The Provinces" },
  { number: "V", title: "Relations between the Federation and Provinces" },
  { number: "VI", title: "The Judicature" },
  { number: "VII", title: "The Elections" },
  { number: "VIII", title: "Islamic Provisions" },
  { number: "IX", title: "Emergency Provisions" },
  { number: "X", title: "Amendment of the Constitution" },
  { number: "XI", title: "Miscellaneous" },
  { number: "XII", title: "General" }
];
