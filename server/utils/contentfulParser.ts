// utils/contentfulParser.ts
export const parseOnePager = (entry: any) => {
  const f = entry.fields

  return {
    title: f.title,
    desc: f.desc,
    image: f.image?.fields?.file?.url ?? '',
    aboutHeader: f.aboutHeader,
    aboutTeaser: f.aboutTeaser
  }
}
