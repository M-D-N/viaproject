
export interface IHomePage {
    homepage: Homepage;
    products: Product[];
}

export interface Homepage {
    aboutcontent:      Aboutcontent;
    contact_info:      ContactInfo;
    footerdescription: string;
    formcontent:       Formcontent;
    logo:              Logo;
    slides:            Slide[];
    topcontents:       Topcontents;
    works:             Work[];
}

export interface Aboutcontent {
    abouttitle:       string;
    aboutmedia:       Aboutmedia[];
    aboutdescription: string;
}

export interface Aboutmedia {
    aboutimg:  Aboutimg;
    aboutstat: Aboutstat[];
}

export interface Aboutimg {
    height: number;
    url:    string;
    width:  number;
}

export interface Aboutstat {
    aboutstatdesc:  string;
    aboutstatnum:   number;
    aboutstattitle: string;
}

export interface ContactInfo {
    contactcontent: Contactcontent[];
}

export interface Contactcontent {
    iconimg: Img;
    text:    string;
}

export interface Img {
    url: string;
}

export interface Formcontent {
    formdesc:  string;
    formtitle: string;
}

export interface Logo {
    url:             string;
    name:            string;
    alternativeText: null | string;
}

export interface Slide {
    id:               string;
    slidedescription: string;
    slideimg:         Img;
    slidetitle:       string;
}

export interface Topcontents {
    id:             string;
    topdescription: string;
    toptitle:       string;
}

export interface Work {
    id:             string;
    work_days:      string;
    work_time_from: string;
    work_time_to:   string;
}

export interface Product {
    Img:      Logo;
    Name:     string;
    Prise:    number;
    fillters: Fillter[];
}

export interface Fillter {
    Filltername: string;
}
