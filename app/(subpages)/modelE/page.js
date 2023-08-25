import ModelCom from '@/components/ModelCom';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = 'Model E: Nomad Lexis';
    let spec = `3D Printed Sculpture with Embedded Media Display and LCD Display with Dynamic Video Loop
    60cm x 36cm x 52cm
    2023`;
    let des = `Our researchers theorize that this artifact, like the Rosetta Stone before it, serves as a key to deciphering the semiotics of the post-AI cultural meltdown that defined the era of Large Language Models. With its disruptive introduction in the 20's, culture at large moved from a linear paradigm, in which causal associations are linked through icon, signs, and indexes, to a more de-territorialized and ambiguous relationship of text and image. It became apparent, through the later years of the decade, that what was significant was not the fidelity of how AI saw the world, but how the fundamentally inhuman subjectivity of the models interpreted reality. It fell to those who engineered the prompts, who navigated the latent spaces, to channel this alien glossolalia,  to bring back the vocabulary that would fundamentally change the way the human race spoke. 

    'Semiotics of the 21st Century- Post LLM Linguistic Theory'    
    `;
    return <ModelCom img={'E'} title={title} spec={spec} des={des}></ModelCom>;
}
