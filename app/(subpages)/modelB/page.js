import ModelCom from '@/components/ModelCom';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = 'Model B: Orchid Mantis';
    let spec = `3D Printed Sculpture with Embedded Media Display and LCD Display with Dynamic Video Loop
    44cm x 43cm x 40cm
    2023`;
    let des = `This sculptural study of the lifeform known colloquially as the Orchid Mantis, exhibits some curious hybrid and chimeric behaviors that refer both to plants and animals. Not much is known of its anatomy or behavior- but the design of this sculpture implies that it served as a kind of religious object as well as a focus for ritual activity.  Anthropologists have surmised that it might have been used in practices relating to therianthropy or shapeshifting, where identity, gender, species, and genus are fluid in the context of the ritual space. Without other artifacts, we can only guess at the nature of the society that created this object, and how their people might have lived.

    'Artifacts from the Age of Collapse'
    `;
    return <ModelCom img={'B'} title={title} spec={spec} des={des}></ModelCom>;
}
