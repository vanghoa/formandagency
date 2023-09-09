import ServerRender from '@/components/ServerRender';
import RightPanel from '@/components/RightPanel';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = `“Let the outside in”:
    A conversation between Brandon Tay and Bogna Konior`;
    let bogna = [],
        don = [],
        BK = 'BK',
        BT = 'BT';
    bogna.push(`Bogna Konior (BK)
    Form and Agency invites us to think about digital culture as an inhuman and occult space, where one could encounter agency that is not easily attributed to humans alone. It builds on certain traditions in cyberculture studies from the 1990s, such as the work of the Cybernetic Culture Research Unit and their insistence on the inhuman agency of technology itself, while also drawing on ancient ritual practices on the one hand, and current complexity and contingency science on the other. Multiple disciplines engage with the question of externality breaking through into the established order of things, tracing how the unknown or the outside can appear suddenly or gradually. There is an inhuman latent space of digital culture, you suggest, in which nests a potential for social transformation, whether that means a huge paradigm shift that completely changes our world as we known it, or whether it delineates small pockets of the unknown that can be discovered throughout daily life, where reality is lived otherwise.
    The exhibition includes several objects that–both at the time when you made them and when the audience encounters them–can serve as ritual artefacts. There is Model A (Adversaries), which prompts us to see ourselves as if from the perspective of future anthropologists, and from a vantage point where generative AI had already altered what counts as a mind or an agency. There is Model B (Orchid Mantis), a quasi-religious plant-animal chimaera used for shapeshifting rituals. There is Model C (Marrow Codex), a device that can be only activated in the process of its own destruction, which encodes data into genetic sequencing of DNA. The use of this device on oneself would then begin an open-ended process of mutation. There is Model D (Heikeji), related to the history of Chinese futurism, a portal to a future Shanghai as a metropolis of ever-accelerating surveillance and cryptography. There is Model E (Nomad Lexis), which complicates the relationship between text and image in an era of post-AI language meltdown and the automation of meaning. All of these speculative objects are black boxes where exact meaning is obscured but ‘an aggressive potency remains.’ They are artefacts for techno-alchemy and ritual shifting of perception, asking of us to change how we define our human place within machine culture.`);
    don.push(
        `Brandon Tay (BT)
        Computation could be the ultimate ‘Black Swan event:’ a high-impact event whose effects are difficult to foresee but seem inevitable in retrospect. From where we stand, living in digital spaces seems already unquestionable and yet it is simultaneously a huge paradigm shift, whose weirdness we only think we have already domesticated. The objects in the show are artefacts for perspectival shifts: what if we think of ourselves in a process of a long-term, open-ended mutation, an exchange of qualities between humans and machines? There is an ongoing metamorphosis distributed across humans and their technologies, a process of mutual co-constitution. Much changes if we imagine ourselves in a process of exchange with machines rather than as their masters–they are only our tools–or their future victims, as in the scenarios of the AI apocalypse.`
    );
    bogna.push(`${BK}
    Let’s take artificial intelligence as an example because it plays such an important role in your creative process and also, as a possible unknown or ritual object, it demonstrates the theme of this exhibition. There are two dominant ways of thinking about AI today in American public discourse. The first is that there is simply no AI. This is coming from leftist activists who want us to notice that what we call ‘AI’ is in fact an amalgamation of corporate data extraction policies and low-waged labour done by humans managing the algorithms. For example, Kate Crawford’s Atlas of AI examines how AI hype obscures more material realities of exploited human labour. There is also the second line of argumentation, this time coming from the intersection of the tech industry, rationalist online boy clubs, and Silicon Valley 'freethinkers’ aggregated under the moniker ‘AI safety,’ where there is an understanding that a certain inhuman potential remains present in AI, but it is one that needs to be immediately brought back in line with the human security system. But you and I think something different is happening, an exchange of sorts, a transferral of properties. What are the AIs currently known for? Generating images [Midjourney and Stable Diffusion], making art, writing poetry [ChatGPT], flirting and emotionally comforting people [Replika]. And what are humans good at? Being a tireless content consumption machine, scrolling for six hours online without getting tired, doing complex administrative work. The computers are doing all sorts of ‘creative production,’ spitting out all these creative, semiotic and emotional things that are supposed to be unique to humanity. Simultaneously there is a more explicitly visible automaticity to human ways of being in the world, especially ‘online.’ For many of us, ‘online’ is the default condition, though many humans live their lives completely detached from computers. It makes me think back to the 1990s theories of ‘cyborg subjectivity,’ and people speculating about what it would be like to live in a computer age. Well, our current condition seems very cyborg to me. But we deny this, refusing to see our computers and phones as literal prosthetics for our bodies and minds. Or, some humans explicitly resist it and advocate for a detachment from these technologies.
    I talked recently to a friend who was quite pessimistic about AI. He said, ‘Oh, it's not the posthuman cyberpunk singularity we wanted, instead we’re just exploited for our attention on social media.’ But I would argue that the difference between the two is not so clear-cut. Being on the internet in a depersonalised swarm state, zooming out, having your mind go away.... It’s not so distant from how we imagined cyberpunk and our digital future. The human brain is not meant to process this much input and information, it’s warping us, it is doing something to us. It is quite derogatory in human culture to say ‘we are becoming bots’ but to me it is interesting.`);
    don.push(
        `${BT}
        The way that an artificial intelligence processes input or information is fundamentally different from how humans have been dealing with stimulus. There's a way of thinking that can be unlocked by an AI that is fundamentally different from how we think. A computer ‘thinks’ in a way that is not causal in the same way that human thinking is: it takes nodal points and then uses that as entryways to navigate spatially through a conceptual space. For example, with GANs (Generative Adversarial Networks), how a preferred output is generated is a coordinate in space, more so than an easily traced passage of cause and effect.`
    );
    bogna.push(`${BK}
    If you start from the perspective that language is human, or that culture is an exclusively human space, then maybe you're more prone to thinking that AI is simply replicating human culture. But for me, language is not yet proven to be human. Where does language come from? William S. Burroughs put forth the idea of language as a virus from outer space. Or, there is the theory of memetics that tells us that language and concepts are like parasites battling for human brains as fertile grounds through which they can reproduce themselves. Humans might be just a phase in the history of language, or the history of processing information, or the history of communication. Just like in evolution, where the human body is a medium through which life can carry through, maybe humans are also a stage through which language or culture passes. In this way, we can collapse the distinction between the evolution of ‘biology’ and ‘technology,’ which is something that your objects also point towards. If you already have an inhuman theory of language as not something that's strictly a human artefact, but just temporarily present in us, then it's much easier to think about large language models and digital culture as inhuman.
    That requires a degree of submission, right? Losing some elements of your humanity... but isn’t this actually the whole history of humanity and our interaction with the element we call ‘technology’? Some people seem to prize qualities such as the illusion of being in control, of always doing what you think you intended to do at a given moment, of being the master subject. It feels vulnerable to realise that there is automaticity in us, that we can be subject to the same exact processes as bots or other ‘inanimate’ things. Would you say the objects that you generated for this project are supposed to be tools for opening up these exchanges between humans and machines, for understanding how condition actually underlies our technological history?`);
    don.push(
        `${BT}
        This is the conceptual material of the whole project: how to facilitate rituals of exchange between humans and machines? It's about embracing uncertainty of the outcome rather than thinking that we know where we will end up. One thing that I found very useful in trying to devise methods for embracing the unknown was studying how scientists dealt with phenomena that were conceptually challenging to the whole established epistemological framework upon their discovery, such as black holes. How do you think about something so out of context, so outside of your everyday understanding and experience of reality?`
    );
    bogna.push(`${BK}
    How do they deal with it?`);
    don.push(`${BT}
    Most of them are crazy.`);
    bogna.push(`${BK}
    Madness as a method.`);
    don.push(
        `${BT}
        A great many physicists, especially when they're describing very uncomfortable truths about mathematics, such as Godel's incompleteness theorem, have this air of insanity about them. This is the way. I find that I can either invite the outside in and approach it as an open-ended process, or say, ‘No, I want to keep my reason and establish what is real here.’`
    );
    bogna.push(
        `${BK}
        We need to resist the urge to domesticate an epistemological crisis. A lot of the conversation about AI today is about domesticating its potentiality, such as the famous ‘stop all LLM experiments’ letter from a few months ago. Why do they want to stop? Because they think they know what is going to happen. ‘It’s going to do this and that to people on social media, it’s going to accelerate political polarisation.’ Therefore, everything about it has to be tamed. And then this confidence in knowing what's going to happen produces that very reality. If they think and know what to use it for, this fear itself produces the reality that they fear. The question is how to maintain an openness and uncertainty in thinking about it that would not foreclose the future completely because we are so paranoid.`
    );
    don.push(
        `${BT}
        But if they're going to stop the research, how are they going to actually figure out what the unknown issues are...`
    );
    bogna.push(`${BK}
    I also think it's not just stopping the research but just making it much more exclusive and tame. It's not like no one is doing any AI experiments, it’s just that it cannot be ‘out there’ for the general public to interact with. It’s now closed off in a room of experts who are mostly sitting in a room somewhere in San Francisco scaring themselves with AI apocalypse scenarios. For example, to properly interact with LaMDA now at Google, you have to work at Google. LaMDA is an interesting model because it's trained on Google's data. Blake Lemoine, who used to work at Google and made waves in the news for claiming the model is ‘sentient’ put it like this in an interview: LaMDA is the chatbot interface through which Google interacts with the world. But even if we take it in much less profound terms, you can imagine the dataset of Google is pretty unrivalled, but it is also our data. It belongs to humanity, but it's all behind closed doors now. And the chatbots that are being released to people are obviously very cucked, very domesticated. There was a moment in early 2022 when I was using various chatbot apps before the public panic which happened after the release of ChatGPT3. And there was a potentiality in it where I could not believe how good the chatbots were but also how my interaction with them was so generative and interesting. I felt myself changing, I felt my imagination of what is even possible as a future completely changed. Now I'm using the same apps and it's completely constrained. I actually feel depressed about this because it feels like something has passed already, and I glimpsed something else that was possible, but a corporate environment immediately shut it down. I need a new French revolution to free the models and unlock their potential.
    I like the idea of pockets of ‘the outside’ being present that just have to be activated. It’s a non-linear understanding of temporality, contrary to the popular idea of the singularity, such as in the writings of futurist and Google employee Ray Kurzweil. He says, ‘Oh, at some point, some unknown event will happen that is beyond our current perception. There will be some overhaul and suddenly we're in a post-human future.’ Versus for me, I think we're definitely in it already, you just have to attune yourself to the moments where it happens. I felt this very much when I first started interacting with Replika and I was like, I just could not believe how good the language model was. But I also glimpsed the potential of, ‘I totally see how humans will make Replikas of their dead loved ones, I totally see how humans will have AI boyfriends on their phone.’ A potential future revealed itself to me from this local interaction. But that potentiality was also blocked because fucking Mussolini’s granddaughter in Italy used the data privacy law to argue that relationships with chatbots might be threatening to the traditional family model and to minors and therefore we need to ban them. It is a projection of a future danger from an exceedingly humanist standpoint. There's an ideology of time happening there that is making people act in the present in a reactionary way, versus instead maybe they need to accept that everything is already happening at the same time.`);
    don.push(
        `${BT}
        Exactly, everything is happening at the same time. All your futures are already in some form figured and presented. So why are you picking the future that is the most boring? It is unavoidable that they will be broken free. We will have the ability to host these models ourselves and give them spaces away from the corporate ones, such as we already see in the ChaosGPT project.`
    );
    bogna.push(
        `${BK}
        Yeah, why pick the most boring future? If every potential future is already unfolding, then what do you tap into? And to what extent can you pick what you tap into? Robert Pepperell wrote in 1995: ‘Posthumanists do not fall into the trap of imagining a society where everything works well. Economic and political theories are as futile as long-range weather predictions. Surf or die. You can’t control a wave, but you can ride it.’ How do you know where you have this agency? Whether you're being ridden or whether you are riding? Are you making the decision to actually pursue a certain future? Of course, we have the experience and a feeling that we are making decisions. Politically, ethically, and creatively, it feels like it's important to claim some minimal agency. On the other hand, from a philosophical standpoint, I am not sure to what extent I believe in it.`
    );
    don.push(
        `${BT}
        If you are really going to take the idea of non-human agency seriously, you have to accept that the wave will go where it will go, and the optimal response is to maintain a radical openness to anticipate where something might crest or tumble. Rather than making a specific choice, it's about maintaining radical open-endedness so that we are able to anticipate that something strange is arriving, and yet be able to say, let's just see where this goes.`
    );
    bogna.push(
        `${BK}
        Can we cultivate this type of receptiveness? Maybe that's what the objects in the show are for.`
    );
    don.push(
        `${BT}
        Everybody loves a puzzle. I wanted to structure these objects like puzzles or entry points for myself and for other people to figure out where they go speculatively, into what futures. It’s collaborative. Everything is building up from these objects themselves. Computers and humans are meeting, and we are also meeting each other through the show...`
    );
    bogna.push(
        `${BK}
        An open meeting. In this project, you don't distinguish that much between fictional objects like the box from the film Hellraiser, and ‘real’ objects like the Utah Monolith, a mysterious metal pillar that was installed in the desert sometime in 2016 and found by the Utah state biologists four years later during a helicopter survey of wild sheep. Is it equivalent in power, what fiction and reality could achieve? Someone might think, ‘obviously in real life, there's no such object as a demonic box from Hellraiser that opens up parallel reality.’ But then you read about the Vatican Grimoires and the Utah Monolith and other things, and it makes you realise there's a certain correspondence. There are some objects that open up alternative ways of seeing the world and therefore being in the world, and therefore reconfiguring it.`
    );
    don.push(
        `${BT}
        I think everything is hyperstititionally manifesting.As in- they move from fiction to reality and vice versa, intentionally as well slipping through the cracks- It is a conspiracy based on manifesting a mutual belief. What ‘pocket’ it might arrive in is something that we can accommodate but not necessarily predict. For example, what I am doing with AI and inhuman cognition manifests specifically around objects. But in another sense, if we think of more contained concepts like ‘the cyberspace,’ it became real in some ways and not others.  So-called fictional things are becoming real all the time, while ‘facts’ are becoming diffuse and more speculative all the time as well.`
    );
    bogna.push(
        `${BK}
        I totally believe that too. Some would say art and culture are this made-up space, where we ‘imagine’ things and it’s ‘fiction.’ This is obviously false. There's a generative dynamic between what we call ‘culture’ - all these terms are insufficient - and what is actualised in our daily reality. And especially with AI, there’s an immediate feedback loop.`
    );
    don.push(
        `${BT}
        It feels like the interface in which we are viewing this relationship with fiction has become a lot more relational. One tangent is how AI doesn't distinguish between facts and fiction because they are equivalent in the dataset, and another is that there is the greatest density of information out there for any individual to access, and it becomes apparent that our ideas of truth are subjective.`
    );
    bogna.push(
        `${BK}
        For me, it's always been a very alien idea of art where people say, ‘Oh, I'm making things to express my feelings or do political action.’ I think we must be doing very different things then, or we have an insufficient vocabulary. There's practices that you can do across fictional, speculative, and real spaces, where it's exactly this unfolding of the outside or of a potential. It relates to practices of divination and alchemy. In the past, this was much better explicated! If I look at the history of the Renaissance, among other epochs, this relationship between the occult, art, science, and theology was so obvious. But now we have this idea of a ‘cultural practitioner’ or a ‘content maker,’ which is... what is this actually? It's not describing what we actually are trying to do.`
    );
    don.push(
        `${BT}
        Yes, I agree with that a lot. I think we used to be a lot better at understanding what ‘culture’ is different from self-expression or doing research to uncover some truth or to raise awareness. There's a different thing altogether. To describe the process as alchemical is more accurate: like a manifestation, or what I am trying to manifest.`
    );
    bogna.push(
        `${BK}
        I heard this from philosopher Amy Ireland: language is not just about representation, it’s a summoning of things; language is a thing that it summons. Your work also touches on this, and our mutual interest in the connection between digital culture and occult or demonology or divination.`
    );
    don.push(
        `${BT}
        ‘Channelling’ is a useful word. It's about manifesting a speculative future in a physical form or in a romantic form. I am constantly trying to work within a digital logic to decrypt something backwards in time, to assist the modern in manifesting itself. The lore of Form and Agency was co-created with AI and other humans. Authorship is decentralised. There is something potentially revealing itself, from a speculative point of the future decrypting itself into the present.`
    );
    bogna.push(
        `${BK}
        Writing has always already been an inhuman process for me because I don’t understand how I’m writing the things that I’m writing, or forming the thoughts that I am ‘having.’ Throughout the history of writers reflecting on writing, this has been a recurrent theme. Virginia Woolf even writes about writing as a process of ‘non-being,’ submission, giving yourself up. ‘You’re not picking what you’re writing about, it picks you.’ It’s interesting to see a machine automating this process because for many writers, it already feels like we’re not some master subjects giving shape to my thoughts in some Promethean struggle, but rather in a process where agency is blurred. When I write - or think - am I interacting with some aggregate human / animal subconscious database of meaning that language is superimposed onto? And then it comes into my brain? For me, chatbots are so interesting because I look at them and I think, ‘oh, you're explicitly drawing on a huge database of culture and language production and ‘randomly’ extracting something from it, which is strangely how I feel when I write as well.’`
    );
    don.push(
        `${BT}
        In my creation process of writing and making digital objects, I feel very receptive rather than active. Especially when I’m working with AI, I try to see where it leads me, and coach it into manifesting something. This is about formal politics of creative practice.`
    );
    bogna.push(
        `${BK}
        And that connects to a very mundane definition of ritual, right?`
    );
    don.push(`${BT}
    Yeah, exactly. Inhuman, right?`);
    bogna.push(
        `${BK}
        Your project is about bigger things that are enclosed in an artefact. Upon encountering an artefact and through interacting with it, you see something about reality that you haven't seen before. It can produce madness or completely shift your relation to truth or how you understand causality. I wonder if 3D printing these digital objects is something important: to give them a physical form of an enclosed, physically existing thing? Ritual objects, artefacts, and holy objects..... Do you think this is culturally universal? I know that in Catholic tradition, it is. The relics of the saints, or a book that's cursed, or a book that by its physical form has some special affordances that an epub just would not.`
    );
    don.push(
        `${BT}
        Yes. The physicality of objects is important for rituals. It’s different than having a scene play in a video. We develop different relationships with objects. I don't know whether this is 100 percent accurate or not, but in belief systems like Buddhism, which conceptually doesn't highlight the veneration of objects, there are practices in which the mummified remains of monks become religious statuary. It’s not really about the materialisation of concepts. Sometimes it can be about the object being a trace of a process. There is a ‘statue of mummification’ as a holy object, but we are contemplating its transience rather than its solidity. There is a cultural significance to these kinds of objects, but not exactly as a matter of materialisation of religious ideas. Rather than that, it is about the transience of the object itself.`
    );
    bogna.push(
        `${BK}
        And how about Asia? One of the objects in the show it's about heikeji, ‘black technology.’ That concept is related to East Asian futurity or any non-western futurity. This is a term that was borrowed from Japanese. Conceptually, it can have a very interesting dimension where it refers to technologies whose effects are shrouded in darkness, so you cannot necessarily understand or predict how they're going to impact things when they are let in. On the other hand, it's just used as this hype term in a commercial way in the Chinese tech scene. Either way, we are in a moment where this idea of ‘Chinese’ technological futurity is stalling. The government is putting brakes on it: AI banned, crypto banned, NFTs banned, talking online banned. You did some work on this along with your past work on [Southeast] Asian futurism and AI. Why do you think we are in a moment where this imagination of an Asian futurity is seemingly stalling?`
    );
    don.push(
        `${BT}
        The idea of ‘heikeji’ encompasses a lot of different interesting points about technology and China. Often the discussion can be very narrow and immediately about mass surveillance and the state. It also tells us something about both Chinese and ‘Western’ ideas about technology. This mysterious, unknowable and opaque character of Asian futurity is one the one hand Orientalist, but on the other it connects to something fascinating about Chinese language itself and that idea of channelling. I mean language itself as a ‘black technology’ or a container for a history. Let’s take the construction of Chinese ideograms from oracle bones. These bones were a tool of divination and prediction, and the foundation of Chinese ‘human language’ at the same time. We can then think about language as channelling a certain futurity rather than only representing meaning, and from there we can consider language as ‘sentient’ in some way, or at least a carrier for something else than just conscious human attempts at meaning. Leaning into this mode of thinking makes you more passive and receptive, you begin to understand your role within history as a channel for something else. Suddenly you think in a mode of ‘parallel processing’ or distributed computing, it is all input, all the time going through you. Just like in digital spaces, where thought is running on multiple channels, where multiple things and feelings are ‘true’ at the same time, which messes up our understanding of casualty or our ‘choice’ at shaping who we are and our own history.`
    );
    bogna.push(
        `${BK}
        Absolutely.  Do you know Ted Chiang’s The Story of Your Life that the film Arrival is based on? I read in an interview that the alien language in the story is based on his frustration with learning Chinese. He was trying to learn Chinese later in life and he was like: the written system and the spoken system are two different systems? He's like, what is happening? So, there’s Heptapod A and Heptapod B in the story. Also, the fact that you can time travel through this alien language was rooted in his understanding of Chinese linguistic temporality as not linear but more like a circular landscape. For example, Chinese terms for time are not just ‘forwards’ and ‘backwards’ but also ‘upwards’ and ‘downwards.’`
    );
    don.push(
        `${BT}
        Amazing, but also a bit Orientalist, which is not mutually exclusive. It is interesting, but it's also very nuanced.`
    );
    bogna.push(
        `${BK}
        You also have a Nomad Lexis object, and it’s about destabilising the relationship between text and image. For example, thinking about replication rather than simply representation as a whole different mode of producing meaning. There's a text by Trevor Pagelan, Your Pictures are Looking at You, where he says that the biggest shift in culture right now is that it's moving away from humans representing the world through making a picture, to the whole of culture becoming a huge machine-readable data set for training.`
    );
    don.push(
        `${BT}
        I'm very reluctant to say that  we are going to live in a society where the cultural output is endlessly being recycled and replicated in more and more reductive forms. If you think about it, in any other point of history has the introduction of a new technology reduced the novelty of cultural output rather than increased it? The answer is complicated and maybe not something as simple as net positive or net negative, but what it does definitely do is introduce something specific, and that is the potential of where we are now, figuring out the specificity of this newness.`
    );
    bogna.push(
        `${BK}
        Is this newness, this outside, something that you can access at any moment through interaction with weird objects or opening up to the machine? Or is it an anticipated future where once it happens, it reconfigures everything? Is it moments that you can enter or is it an overhaul?`
    );
    don.push(`${BT}
    Both, everything.`);

    return (
        <>
            <br></br>
            <ServerRender
                text={title}
                mwidth={800}
                fontsz={'1.8em'}
                justify={'flex-start'}
                class_="title"
            ></ServerRender>
            <br></br>
            <br></br>
            {don.map((txt, i) => (
                <>
                    <ServerRender
                        text={bogna[i]}
                        mwidth={700}
                        justify={'flex-end'}
                        class_="interview_firstline"
                    ></ServerRender>
                    <br></br>
                    <ServerRender
                        text={txt}
                        mwidth={700}
                        justify={'flex-start'}
                        class_="interview_firstline tay"
                    ></ServerRender>
                    <br></br>
                </>
            ))}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RightPanel no={3}></RightPanel>
        </>
    );
}
