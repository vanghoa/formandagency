import ModelCom from '@/components/ModelCom';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = 'Model C: Marrow Codex';
    let spec = `3D Printed Sculpture with Embedded Media Display and LCD Display with Dynamic Video Loop
    20cm x 39cm x 26cm
    2023`;
    let des = `As a form of biological encryption, the Marrow Codex existed as a device to encode data into the genetic sequencing of DNA with cloned bone marrow. A curious feature of the device was that the only way to decrypt the device was to destroy it, thus the encryption existed only within the closed system of the codex itself. Was the information within forbidden to the outside world? What could have been so virulent that, like the infamous Black Books hidden in the Vatican, had to be hermetically sealed from the outside world? Observing the similarities in our anatomy with the Codex itself, one can suppose that vestiges of this occulted information still remains in our bodies, an informational virus, too valuable to destroy, but too taboo to be apprehended. 

    'Relics of the Cyborg Theocracy'
    `;
    return <ModelCom img={'C'} title={title} spec={spec} des={des}></ModelCom>;
}
