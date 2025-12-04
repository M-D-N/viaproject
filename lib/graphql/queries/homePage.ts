import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query ExampleQuery {
    homepage {
      aboutcontent {
        abouttitle
        aboutmedia {
          aboutimg {
            height
            url
            width
          }
          aboutstat {
            aboutstatdesc
            aboutstatnum
            aboutstattitle
          }
        }
        aboutdescription
      }
      contact_info {
        contactcontent {
          iconimg {
            url
          }
          text
        }
      }
      footerdescription
      formcontent {
        formdesc
        formtitle
      }
      logo {
        url
        name
        alternativeText
      }
      slides {
        id
        slidedescription
        slideimg {
          url
        }
        slidetitle
      }
      topcontents {
        id
        topdescription
        toptitle
      }
      works {
        id
        work_days
        work_time_from
        work_time_to
      }
    }
    products {
      Img {
        name
        url
        alternativeText
      }
      Name
      Prise
      fillters {
        Filltername
      }
    }
  }
`;
