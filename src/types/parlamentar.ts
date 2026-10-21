export interface ParlamentarBase {
    id: string;
    idExterno: string;
    nomeParlamentar: string;
    nomeCivil: string;
    partido: string;
    uf: string;
    fotoUrl?: string | null
    emExercicio: boolean;
}

export interface ParlamentarMunicipal extends ParlamentarBase {
    esfera: "MUNICIPAL";
    cargo: "Vereador";
    codigoIbgeMunicipio: string;
}

export interface ParlamentarEstadual extends ParlamentarBase {
    esfera: "ESTADUAL";
    cargo: "Deputado Estadual";
    codigoIbgeMunicipio?: null;
}

export interface ParlamentarFederal extends ParlamentarBase {
    esfera: "FEDERAL";
    cargo: "Deputado Federal" | "Senador";
    codigoIbgeMunicipio?: null;
}

export type Parlamentar =
    | ParlamentarMunicipal
    | ParlamentarEstadual
    | ParlamentarFederal
