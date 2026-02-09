export interface PROJECT {
    id: string;
    title: string;
    owner: 'UNIKO' | 'Pascale' | 'Emile';
}

export const PROJECTS: PROJECT[] = [
    { id: "parcelles", title: "Parcelles", owner: "UNIKO" },
    { id: "boires", title: "Boires", owner: "UNIKO" },
    { id: "studio", title: "Studio", owner: "UNIKO" },

    { id: "numaacro", title: "numaacro", owner: "Pascale" },
    { id: "gauche", title: "gauche", owner: "Pascale" },
    { id: "choserare", title: "choserare", owner: "Pascale" },


    { id: "noirblack", title: "noirblack", owner: "Emile" },
    { id: "check", title: "check", owner: "Emile" },
    { id: "badblood", title: "badblood", owner: "Emile" },
] as const;

export type ProjectID = (typeof PROJECTS)[number]["id"];