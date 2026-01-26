// utils/contentfulParser.ts
export const parseOnePager = (entry: any) => {
  const f = entry.fields

  return {
    title: f.title,
    desc: f.desc,
    image: f.image?.fields?.file?.url ?? '',
    aboutHeader: f.aboutHeader,
    aboutTeaser: f.aboutTeaser,
    aboutParagraph: f.aboutParagraph,
    videoHeader: f.videoHeader,
    bioHeader: f.bioHeader,
    bioParagraph: f.bioParagraph,
    agentsHeader: f.agentsHeader,
    agentsInfo:f.agentsInfo
  }
}
