import ModelCom from '@/components/ModelCom';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = 'Model A: Adversaries';
    let spec = `3D Printed Sculpture with Embedded Media Display and LCD Display with Dynamic Video Loop
    31cm x 23 cm x 26 cm
    2023`;
    let des = `From our standpoint in time, it's hard to imagine the function of this artifact but our archeologists believe it to be a fossilized artificial lifeform, created to manifest adversarial networks into a living being. Created primarily from four anthropomorphic lab-grown homoculi with a common spinal cord and nervous system, which served as an engine for opposing and symmetrical desire-drives. 

    From a central orifice a polymorphic computational fluid was secreted as a matrix to regulate the intermediate flows and interactions.  At some point, through generation and discrimination, evolved into a conscious libidinal mass that eventually overloaded its components, leaving a spent husk engulfed in viscous data-excreta. 
    
    Thus, this experiment was viewed as a failure, one of many endeavors to shift from generative AI to biological computation.
    
    'Records from the Pre-History of Intelligence'
    `;
    return (
        <ModelCom
            img={'A'}
            next={'B'}
            last={'E'}
            title={title}
            spec={spec}
            des={des}
            no={6}
        ></ModelCom>
    );
}
